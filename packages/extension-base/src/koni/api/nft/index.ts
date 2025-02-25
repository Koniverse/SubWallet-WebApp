// Copyright 2019-2022 @subwallet/extension-koni authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { _ChainAsset, _ChainInfo } from '@subwallet/chain-list/types';
import { NftCollection, NftItem } from '@subwallet/extension-base/background/KoniTypes';
import { AcalaNftApi } from '@subwallet/extension-base/koni/api/nft/acala_nft';
import { BitCountryNftApi } from '@subwallet/extension-base/koni/api/nft/bit.country';
import { EvmNftApi } from '@subwallet/extension-base/koni/api/nft/evm_nft';
import { KaruraNftApi } from '@subwallet/extension-base/koni/api/nft/karura_nft';
import { BaseNftApi } from '@subwallet/extension-base/koni/api/nft/nft';
import { RmrkNftApi } from '@subwallet/extension-base/koni/api/nft/rmrk_nft';
import StatemineNftApi from '@subwallet/extension-base/koni/api/nft/statemine_nft';
import UniqueNftApi from '@subwallet/extension-base/koni/api/nft/unique_nft';
import { WasmNftApi } from '@subwallet/extension-base/koni/api/nft/wasm_nft';
import { _NFT_CHAIN_GROUP } from '@subwallet/extension-base/services/chain-service/constants';
import { _EvmApi, _SubstrateApi } from '@subwallet/extension-base/services/chain-service/types';
import { _isChainSupportEvmNft, _isChainSupportNativeNft, _isChainSupportWasmNft } from '@subwallet/extension-base/services/chain-service/utils';
import { categoryAddresses } from '@subwallet/extension-base/utils';

function createSubstrateNftApi (chain: string, substrateApi: _SubstrateApi | null, addresses: string[]): BaseNftApi | null {
  const [substrateAddresses] = categoryAddresses(addresses);

  if (_NFT_CHAIN_GROUP.acala.includes(chain)) {
    return new AcalaNftApi(substrateApi, substrateAddresses, chain);
  } else if (_NFT_CHAIN_GROUP.karura.includes(chain)) {
    return new KaruraNftApi(substrateApi, substrateAddresses, chain);
  } else if (_NFT_CHAIN_GROUP.rmrk.includes(chain)) {
    return new RmrkNftApi(substrateAddresses, chain);
  } else if (_NFT_CHAIN_GROUP.statemine.includes(chain)) {
    return new StatemineNftApi(substrateApi, substrateAddresses, chain);
  } else if (_NFT_CHAIN_GROUP.unique_network.includes(chain)) {
    return new UniqueNftApi(substrateApi, substrateAddresses, chain);
  } else if (_NFT_CHAIN_GROUP.bitcountry.includes(chain)) {
    return new BitCountryNftApi(substrateApi, substrateAddresses, chain);
  }

  return null;
}

function createWasmNftApi (chain: string, apiProps: _SubstrateApi | null, addresses: string[]): BaseNftApi | null {
  const [substrateAddresses] = categoryAddresses(addresses);

  return new WasmNftApi(apiProps, substrateAddresses, chain);
}

function createWeb3NftApi (chain: string, evmApi: _EvmApi | null, addresses: string[]): BaseNftApi | null {
  const [, evmAddresses] = categoryAddresses(addresses);

  return new EvmNftApi(evmApi, evmAddresses, chain);
}

export class NftHandler {
  // General settings
  chainInfoMap: Record<string, _ChainInfo> = {};
  addresses: string[] = [];
  smartContractNfts: _ChainAsset[] = [];

  // Provider API needed
  substrateApiMap: Record<string, _SubstrateApi> = {};
  evmApiMap: Record<string, _EvmApi> = {};

  // Logic handling
  handlers: BaseNftApi[] = []; // 1 chain can have multiple handlers (to support multiple token standards)
  total = 0;
  needSetupApi = true;

  setChainInfoMap (chainInfoMap: Record<string, _ChainInfo>) {
    this.chainInfoMap = chainInfoMap;
    this.needSetupApi = true;
  }

  setWeb3ApiMap (web3ApiMap: Record<string, _EvmApi>) {
    this.evmApiMap = web3ApiMap;
    this.needSetupApi = true;
  }

  setDotSamaApiMap (dotSamaAPIMap: Record<string, _SubstrateApi>) {
    this.substrateApiMap = dotSamaAPIMap;
    this.needSetupApi = true;
  }

  setAddresses (addresses: string[]) {
    this.addresses = addresses;

    const [substrateAddresses, evmAddresses] = categoryAddresses(addresses);

    for (const handler of this.handlers) {
      const useAddresses = handler.isEthereum ? evmAddresses : substrateAddresses;

      handler.setAddresses(useAddresses);
    }
  }

  private setupNftContracts (smartContractNfts: _ChainAsset[]) {
    this.smartContractNfts = smartContractNfts;

    for (const handler of this.handlers) {
      if (handler instanceof EvmNftApi || handler instanceof WasmNftApi) {
        const filteredNfts: _ChainAsset[] = [];

        for (const nft of smartContractNfts) {
          if (nft.originChain === handler.chain) {
            filteredNfts.push(nft);
          }
        }

        handler.setSmartContractNfts(filteredNfts);
      }
    }
  }

  private setupApi () {
    try {
      if (this.needSetupApi) { // setup connections for first time use
        this.handlers = [];
        const [substrateAddresses, evmAddresses] = categoryAddresses(this.addresses);

        Object.entries(this.chainInfoMap).forEach(([chain, chainInfo]) => {
          if (_isChainSupportNativeNft(chainInfo)) {
            if (this.substrateApiMap[chain]) {
              const handler = createSubstrateNftApi(chain, this.substrateApiMap[chain], substrateAddresses);

              if (handler) {
                this.handlers.push(handler);
              }
            }
          }

          if (_isChainSupportEvmNft(chainInfo)) {
            if (this.evmApiMap[chain]) {
              const handler = createWeb3NftApi(chain, this.evmApiMap[chain], evmAddresses);

              if (handler) {
                this.handlers.push(handler);
              }
            }
          }

          if (_isChainSupportWasmNft(chainInfo)) {
            if (this.substrateApiMap[chain]) {
              const handler = createWasmNftApi(chain, this.substrateApiMap[chain], substrateAddresses);

              if (handler && !this.handlers.includes(handler)) {
                this.handlers.push(handler);
              }
            }
          }
        });

        this.needSetupApi = false;
      }
    } catch (e) {
      console.error(e);
    }
  }

  public async handleNfts (
    nftContracts: _ChainAsset[],
    updateItem: (chain: string, data: NftItem, owner: string) => void,
    updateCollection: (chain: string, data: NftCollection) => void,
    cleanUpNfts: (chain: string, owner: string, collectionId: string[], nftIds: string[], ownNothing?: boolean) => void) {
    this.setupApi();
    this.setupNftContracts(nftContracts);
    await Promise.all(this.handlers.map(async (handler) => {
      await handler.fetchNfts({
        updateItem,
        updateCollection,
        cleanUpNfts
      });
    }));
  }
}
