// Copyright 2019-2022 @subwallet/extension-base authors & contributors
// SPDX-License-Identifier: Apache-2.0

import '@polkadot/types-augment';

import { options as acalaOptions } from '@acala-network/api';
import { rpc as oakRpc, types as oakTypes } from '@oak-foundation/types';
import { MetadataItem } from '@subwallet/extension-base/background/KoniTypes';
import { _API_OPTIONS_CHAIN_GROUP, API_AUTO_CONNECT_MS, API_CONNECT_TIMEOUT } from '@subwallet/extension-base/services/chain-service/constants';
import { getSubstrateConnectProvider } from '@subwallet/extension-base/services/chain-service/handler/light-client';
import { DEFAULT_AUX } from '@subwallet/extension-base/services/chain-service/handler/SubstrateChainHandler';
import { _ApiOptions } from '@subwallet/extension-base/services/chain-service/handler/types';
import { _SubstrateApi, _SubstrateDefaultFormatBalance } from '@subwallet/extension-base/services/chain-service/types';
import { createPromiseHandler, PromiseHandler } from '@subwallet/extension-base/utils/promise';
import { BehaviorSubject } from 'rxjs';

import { ApiPromise, WsProvider } from '@polkadot/api';
import { SubmittableExtrinsicFunction } from '@polkadot/api/promise/types';
import { ApiOptions } from '@polkadot/api/types';
import { typesBundle } from '@polkadot/apps-config/api';
import { ProviderInterface } from '@polkadot/rpc-provider/types';
import { TypeRegistry } from '@polkadot/types/create';
import { Registry } from '@polkadot/types/types';
import { BN, formatBalance } from '@polkadot/util';
import { defaults as addressDefaults } from '@polkadot/util-crypto/address/defaults';

export class SubstrateApi implements _SubstrateApi {
  chainSlug: string;
  api: ApiPromise;
  providerName?: string;
  provider: ProviderInterface;
  apiUrl: string;
  metadata?: MetadataItem;

  useLightClient = false;
  isApiReady = false;
  isApiReadyOnce = false;
  apiError?: string;
  private handleApiReady: PromiseHandler<_SubstrateApi>;
  public readonly isApiConnectedSubject = new BehaviorSubject(false);
  get isApiConnected (): boolean {
    return this.isApiConnectedSubject.getValue();
  }

  private updateConnectedStatus (isConnected: boolean): void {
    if (isConnected !== this.isApiConnectedSubject.value) {
      this.isApiConnectedSubject.next(isConnected);
    }
  }

  apiDefaultTx?: SubmittableExtrinsicFunction;
  apiDefaultTxSudo?: SubmittableExtrinsicFunction;
  defaultFormatBalance?: _SubstrateDefaultFormatBalance;

  registry: Registry;
  specName = '';
  specVersion = '';
  systemChain = '';
  systemName = '';
  systemVersion = '';

  private createProvider (apiUrl: string): ProviderInterface {
    if (apiUrl.startsWith('light://')) {
      this.useLightClient = true;

      return getSubstrateConnectProvider(apiUrl.replace('light://substrate-connect/', ''));
    } else {
      this.useLightClient = true;

      return new WsProvider(apiUrl, API_AUTO_CONNECT_MS, {}, API_CONNECT_TIMEOUT);
    }
  }

  private createApi (provider: ProviderInterface): ApiPromise {
    const apiOption: ApiOptions = {
      provider,
      typesBundle,
      registry: this.registry
    };

    if (this.metadata) {
      const metadata = this.metadata;

      apiOption.metadata = {
        [`${metadata.genesisHash}-${metadata.specVersion}`]: metadata.hexValue
      };
    }

    if (_API_OPTIONS_CHAIN_GROUP.acala.includes(this.chainSlug)) {
      return new ApiPromise(acalaOptions({ provider }));
    } else if (_API_OPTIONS_CHAIN_GROUP.turing.includes(this.chainSlug)) {
      return new ApiPromise({
        provider,
        rpc: oakRpc,
        types: oakTypes
      });
    } else {
      return new ApiPromise(apiOption);
    }
  }

  constructor (chainSlug: string, apiUrl: string, { metadata, providerName }: _ApiOptions = {}) {
    this.chainSlug = chainSlug;
    this.apiUrl = apiUrl;
    this.providerName = providerName;
    this.registry = new TypeRegistry();
    this.metadata = metadata;
    this.provider = this.createProvider(apiUrl);
    this.api = this.createApi(this.provider);

    this.handleApiReady = createPromiseHandler<_SubstrateApi>();
    this.api.on('ready', this.onReady.bind(this));
    this.api.on('connected', this.onConnect.bind(this));
    this.api.on('disconnected', this.onDisconnect.bind(this));
    this.api.on('error', this.onError.bind(this));
  }

  get isReady (): Promise<_SubstrateApi> {
    return this.handleApiReady.promise;
  }

  async updateApiUrl (apiUrl: string) {
    if (this.apiUrl === apiUrl) {
      return;
    }

    // Disconnect with old provider
    await this.disconnect();
    this.isApiReadyOnce = false;
    this.api.off('ready', this.onReady.bind(this));
    this.api.off('connected', this.onConnect.bind(this));
    this.api.off('disconnected', this.onDisconnect.bind(this));
    this.api.off('error', this.onError.bind(this));

    // Create new provider and api
    this.apiUrl = apiUrl;
    this.provider = this.createProvider(apiUrl);
    this.api = this.createApi(this.provider);
    this.api.on('ready', this.onReady.bind(this));
    this.api.on('connected', this.onConnect.bind(this));
    this.api.on('disconnected', this.onDisconnect.bind(this));
    this.api.on('error', this.onError.bind(this));
  }

  connect (): void {
    if (this.api.isConnected) {
      this.updateConnectedStatus(true);
    } else {
      this.api.connect()
        .then(() => {
          this.updateConnectedStatus(true);
        }).catch(console.error);
    }
  }

  async disconnect () {
    try {
      await this.api.disconnect();
    } catch (e) {
      console.error(e);
    }

    this.updateConnectedStatus(false);
  }

  async recoverConnect () {
    await this.disconnect();
    this.connect();
    await this.handleApiReady.promise;
  }

  destroy () {
    // Todo: implement this in the future
    return this.disconnect();
  }

  onReady (): void {
    this.fillApiInfo().then(() => {
      this.handleApiReady.resolve(this);
      this.isApiReady = true;
      this.isApiReadyOnce = true;
    }).catch((error) => {
      this.apiError = (error as Error)?.message;
      this.handleApiReady.reject(error);
    });
  }

  onConnect (): void {
    this.updateConnectedStatus(true);
    console.log(`Connected to ${this.chainSlug || ''} at ${this.apiUrl}`);

    if (this.isApiReadyOnce) {
      this.handleApiReady.resolve(this);
    }
  }

  onDisconnect (): void {
    this.isApiReady = false;
    console.log(`Disconnected from ${this.chainSlug} at ${this.apiUrl}`);
    this.updateConnectedStatus(false);
    this.handleApiReady = createPromiseHandler<_SubstrateApi>();
  }

  onError (e: Error): void {
    console.warn(`${this.chainSlug} connection got error`, e);
  }

  async fillApiInfo (): Promise<void> {
    const { api, registry } = this;
    const DEFAULT_DECIMALS = registry.createType('u32', 12);
    const DEFAULT_SS58 = registry.createType('u32', addressDefaults.prefix);

    this.specName = this.api.runtimeVersion.specName.toString();
    this.specVersion = this.api.runtimeVersion.specVersion.toString();

    const [systemChain, systemName, systemVersion] = await Promise.all([
      api.rpc.system?.chain(),
      api.rpc.system?.name(),
      api.rpc.system?.version()
    ]);

    this.systemChain = systemChain.toString();
    this.systemName = systemName.toString();
    this.systemVersion = systemVersion.toString();

    const properties = registry.createType('ChainProperties', { ss58Format: api.registry.chainSS58, tokenDecimals: api.registry.chainDecimals, tokenSymbol: api.registry.chainTokens });
    const ss58Format = properties.ss58Format.unwrapOr(DEFAULT_SS58).toNumber();
    const tokenSymbol = properties.tokenSymbol.unwrapOr([formatBalance.getDefaults().unit, ...DEFAULT_AUX]);
    const tokenDecimals = properties.tokenDecimals.unwrapOr([DEFAULT_DECIMALS]);

    registry.setChainProperties(registry.createType('ChainProperties', { ss58Format, tokenDecimals, tokenSymbol }));

    // first set up the UI helpers
    this.defaultFormatBalance = {
      decimals: tokenDecimals.map((b: BN) => {
        return b.toNumber();
      }),
      unit: tokenSymbol[0].toString()
    };

    const defaultSection = Object.keys(api.tx)[0];
    const defaultMethod = Object.keys(api.tx[defaultSection])[0];

    this.apiDefaultTx = api.tx[defaultSection][defaultMethod];
    this.apiDefaultTxSudo = (api.tx.system && api.tx.system.setCode) || this.apiDefaultTx;
  }
}
