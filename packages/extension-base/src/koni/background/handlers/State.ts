// Copyright 2019-2022 @subwallet/extension-koni authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ChainInfoMap } from '@subwallet/chain-list';
import { _AssetRef, _AssetType, _ChainAsset, _ChainInfo, _MultiChainAsset } from '@subwallet/chain-list/types';
import { EvmProviderError } from '@subwallet/extension-base/background/errors/EvmProviderError';
import { withErrorLog } from '@subwallet/extension-base/background/handlers/helpers';
import { isSubscriptionRunning, unsubscribe } from '@subwallet/extension-base/background/handlers/subscriptions';
import { AccountRefMap, AddTokenRequestExternal, APIItemState, ApiMap, AuthRequestV2, BalanceItem, BalanceJson, BasicTxErrorType, BrowserConfirmationType, ChainStakingMetadata, ChainType, ConfirmationsQueue, CrowdloanItem, CrowdloanJson, CurrentAccountInfo, EvmProviderErrorType, EvmSendTransactionParams, EvmSendTransactionRequest, EvmSignatureRequest, ExternalRequestPromise, ExternalRequestPromiseStatus, ExtrinsicType, NftCollection, NftItem, NftJson, NominatorMetadata, RequestAccountExportPrivateKey, RequestCheckPublicAndSecretKey, RequestConfirmationComplete, RequestSettingsType, ResponseAccountExportPrivateKey, ResponseCheckPublicAndSecretKey, ServiceInfo, SingleModeJson, StakingItem, StakingJson, StakingRewardItem, StakingRewardJson, StakingType, ThemeNames, UiSettings } from '@subwallet/extension-base/background/KoniTypes';
import { AccountJson, RequestAuthorizeTab, RequestRpcSend, RequestRpcSubscribe, RequestRpcUnsubscribe, RequestSign, ResponseRpcListProviders, ResponseSigning } from '@subwallet/extension-base/background/types';
import { ALL_ACCOUNT_KEY, ALL_GENESIS_HASH } from '@subwallet/extension-base/constants';
import { BalanceService } from '@subwallet/extension-base/services/balance-service';
import { ServiceStatus } from '@subwallet/extension-base/services/base/types';
import { ChainService } from '@subwallet/extension-base/services/chain-service';
import { _PREDEFINED_SINGLE_MODES } from '@subwallet/extension-base/services/chain-service/constants';
import { _ChainConnectionStatus, _ChainState, _NetworkUpsertParams, _ValidateCustomAssetRequest } from '@subwallet/extension-base/services/chain-service/types';
import { _getEvmChainId, _getSubstrateGenesisHash, _isAssetFungibleToken, _isChainEnabled, _isChainTestNet, _isSubstrateParaChain, _parseMetadataForSmartContractAsset } from '@subwallet/extension-base/services/chain-service/utils';
import { EventService } from '@subwallet/extension-base/services/event-service';
import { HistoryService } from '@subwallet/extension-base/services/history-service';
import { KeyringService } from '@subwallet/extension-base/services/keyring-service';
import MigrationService from '@subwallet/extension-base/services/migration-service';
import NotificationService from '@subwallet/extension-base/services/notification-service/NotificationService';
import { PriceService } from '@subwallet/extension-base/services/price-service';
import RequestService from '@subwallet/extension-base/services/request-service';
import { AuthUrls, MetaRequest, SignRequest } from '@subwallet/extension-base/services/request-service/types';
import SettingService from '@subwallet/extension-base/services/setting-service/SettingService';
import DatabaseService from '@subwallet/extension-base/services/storage-service/DatabaseService';
import { SubscanService } from '@subwallet/extension-base/services/subscan-service';
import { SUBSCAN_CHAIN_MAP_REVERSE } from '@subwallet/extension-base/services/subscan-service/subscan-chain-map';
import TransactionService from '@subwallet/extension-base/services/transaction-service';
import { TransactionEventResponse } from '@subwallet/extension-base/services/transaction-service/types';
import AccountRefStore from '@subwallet/extension-base/stores/AccountRef';
import { isContractAddress, parseContractInput } from '@subwallet/extension-base/utils/eth/parseTransaction';
import { createPromiseHandler } from '@subwallet/extension-base/utils/promise';
import { MetadataDef, ProviderMeta } from '@subwallet/extension-inject/types';
import { decodePair } from '@subwallet/keyring/pair/decode';
import { keyring } from '@subwallet/ui-keyring';
import { Subscription } from 'dexie';
import SimpleKeyring from 'eth-simple-keyring';
import { BehaviorSubject, Subject } from 'rxjs';
import { TransactionConfig } from 'web3-core';

import { JsonRpcResponse, ProviderInterface, ProviderInterfaceCallback } from '@polkadot/rpc-provider/types';
import { assert, BN, hexStripPrefix, hexToU8a, isHex, logger as createLogger, u8aToHex } from '@polkadot/util';
import { Logger } from '@polkadot/util/types';
import { base64Decode, isEthereumAddress, keyExtractSuri } from '@polkadot/util-crypto';
import { KeypairType } from '@polkadot/util-crypto/types';

import { KoniCron } from '../cron';
import { KoniSubscription } from '../subscription';

const ETH_DERIVE_DEFAULT = '/m/44\'/60\'/0\'/0/0';

// List of providers passed into constructor. This is the list of providers
// exposed by the extension.
type Providers = Record<string, {
  meta: ProviderMeta;
  // The provider is not running at init, calling this will instantiate the
  // provider.
  start: () => ProviderInterface;
}>

const getSuri = (seed: string, type?: KeypairType): string => {
  return type === 'ethereum'
    ? `${seed}${ETH_DERIVE_DEFAULT}`
    : seed;
};

const generateDefaultCrowdloanMap = (): Record<string, CrowdloanItem> => {
  const crowdloanMap: Record<string, CrowdloanItem> = {};

  Object.entries(ChainInfoMap).forEach(([networkKey, chainInfo]) => {
    if (_isSubstrateParaChain(chainInfo)) {
      crowdloanMap[networkKey] = {
        state: APIItemState.PENDING,
        contribute: '0'
      };
    }
  });

  return crowdloanMap;
};

export default class KoniState {
  private injectedProviders = new Map<chrome.runtime.Port, ProviderInterface>();
  private readonly providers: Providers;
  private readonly unsubscriptionMap: Record<string, () => void> = {};
  private readonly accountRefStore = new AccountRefStore();
  private externalRequest: Record<string, ExternalRequestPromise> = {};
  private balanceMap: Record<string, BalanceItem> = {};
  private balanceSubject = new Subject<BalanceJson>();

  private crowdloanMap: Record<string, CrowdloanItem> = generateDefaultCrowdloanMap();
  private crowdloanSubject = new Subject<CrowdloanJson>();

  private nftSubject = new Subject<NftJson>();

  private stakingSubject = new Subject<StakingJson>();
  private chainStakingMetadataSubject = new Subject<ChainStakingMetadata[]>();
  private stakingNominatorMetadataSubject = new Subject<NominatorMetadata[]>();
  private stakingRewardSubject = new Subject<StakingRewardJson>();
  private stakingRewardState: StakingRewardJson = {
    ready: false,
    data: {}
  } as StakingRewardJson;

  private lazyMap: Record<string, unknown> = {};

  readonly notificationService: NotificationService;
  // TODO: consider making chainService public (or getter) and call function directly
  readonly eventService: EventService;
  readonly keyringService: KeyringService;
  readonly chainService: ChainService;
  readonly dbService: DatabaseService;
  private cron: KoniCron;
  private subscription: KoniSubscription;
  private logger: Logger;
  readonly settingService: SettingService;
  readonly requestService: RequestService;
  readonly transactionService: TransactionService;
  readonly historyService: HistoryService;
  readonly priceService: PriceService;
  readonly balanceService: BalanceService;
  readonly migrationService: MigrationService;
  readonly subscanService: SubscanService;

  // Handle the general status of the extension
  private generalStatus: ServiceStatus = ServiceStatus.INITIALIZING;
  private waitSleeping: Promise<void> | null = null;
  private waitStarting: Promise<void> | null = null;

  constructor (providers: Providers = {}) {
    this.providers = providers;

    this.eventService = new EventService();
    this.dbService = new DatabaseService(this.eventService);
    this.keyringService = new KeyringService(this.eventService);
    this.subscanService = new SubscanService();

    this.notificationService = new NotificationService();
    this.chainService = new ChainService(this.dbService, this.eventService);
    this.settingService = new SettingService();
    this.requestService = new RequestService(this.chainService, this.settingService, this.keyringService);
    this.priceService = new PriceService(this.dbService, this.eventService, this.chainService);
    this.balanceService = new BalanceService(this.chainService);
    this.historyService = new HistoryService(this.dbService, this.chainService, this.eventService, this.keyringService);
    this.transactionService = new TransactionService(this.chainService, this.eventService, this.requestService, this.balanceService, this.historyService, this.notificationService, this.dbService);
    this.migrationService = new MigrationService(this);
    this.subscription = new KoniSubscription(this, this.dbService);
    this.cron = new KoniCron(this, this.subscription, this.dbService);
    this.logger = createLogger('State');

    // Init state
    this.init()
      .catch(console.error);
  }

  // Clone from polkadot.js
  public get knownMetadata (): MetadataDef[] {
    return this.requestService.knownMetadata;
  }

  public injectMetadata (url: string, request: MetadataDef): Promise<boolean> {
    return this.requestService.injectMetadata(url, request);
  }

  public getMetaRequest (id: string): MetaRequest {
    return this.requestService.getMetaRequest(id);
  }

  public getSignRequest (id: string): SignRequest | undefined {
    return this.requestService.getSignRequest(id);
  }

  // List all providers the extension is exposing
  public rpcListProviders (): Promise<ResponseRpcListProviders> {
    return Promise.resolve(Object.keys(this.providers).reduce((acc, key) => {
      acc[key] = this.providers[key].meta;

      return acc;
    }, {} as ResponseRpcListProviders));
  }

  public rpcSend (request: RequestRpcSend, port: chrome.runtime.Port): Promise<JsonRpcResponse<unknown>> {
    const provider = this.injectedProviders.get(port);

    assert(provider, 'Cannot call pub(rpc.subscribe) before provider is set');

    return provider.send(request.method, request.params);
  }

  // Start a provider, return its meta
  public rpcStartProvider (key: string, port: chrome.runtime.Port): Promise<ProviderMeta> {
    assert(Object.keys(this.providers).includes(key), `Provider ${key} is not exposed by extension`);

    if (this.injectedProviders.get(port)) {
      return Promise.resolve(this.providers[key].meta);
    }

    // Instantiate the provider
    this.injectedProviders.set(port, this.providers[key].start());

    // Close provider connection when page is closed
    port.onDisconnect.addListener((): void => {
      const provider = this.injectedProviders.get(port);

      if (provider) {
        withErrorLog(() => provider.disconnect());
      }

      this.injectedProviders.delete(port);
    });

    return Promise.resolve(this.providers[key].meta);
  }

  public rpcSubscribe ({ method,
    params,
    type }: RequestRpcSubscribe, cb: ProviderInterfaceCallback, port: chrome.runtime.Port): Promise<number | string> {
    const provider = this.injectedProviders.get(port);

    assert(provider, 'Cannot call pub(rpc.subscribe) before provider is set');

    return provider.subscribe(type, method, params, cb);
  }

  public rpcSubscribeConnected (_request: null, cb: ProviderInterfaceCallback, port: chrome.runtime.Port): void {
    const provider = this.injectedProviders.get(port);

    assert(provider, 'Cannot call pub(rpc.subscribeConnected) before provider is set');

    cb(null, provider.isConnected); // Immediately send back current isConnected
    provider.on('connected', () => cb(null, true));
    provider.on('disconnected', () => cb(null, false));
  }

  public rpcUnsubscribe (request: RequestRpcUnsubscribe, port: chrome.runtime.Port): Promise<boolean> {
    const provider = this.injectedProviders.get(port);

    assert(provider, 'Cannot call pub(rpc.unsubscribe) before provider is set');

    return provider.unsubscribe(request.type, request.method, request.subscriptionId);
  }

  public saveMetadata (meta: MetadataDef): void {
    this.requestService.saveMetadata(meta);
  }

  public sign (url: string, request: RequestSign, account: AccountJson): Promise<ResponseSigning> {
    return this.requestService.sign(url, request, account);
  }

  public get authSubjectV2 () {
    return this.requestService.authSubjectV2;
  }

  public generateDefaultBalanceMap () {
    const balanceMap: Record<string, BalanceItem> = {};
    const activeChains = this.chainService.getActiveChainInfoMap();

    Object.values(activeChains).forEach((chainInfo) => {
      const chainAssetMap = this.chainService.getFungibleTokensByChain(chainInfo.slug);

      Object.keys(chainAssetMap).forEach((assetSlug) => {
        balanceMap[assetSlug] = {
          tokenSlug: assetSlug,
          free: '',
          locked: '',
          state: APIItemState.PENDING
        };
      });
    });

    return balanceMap;
  }

  public async init () {
    await this.eventService.waitCryptoReady;
    await this.chainService.init();
    await this.migrationService.run();
    this.eventService.emit('chain.ready', true);

    this.onReady();
    this.onAccountAdd();
    this.onAccountRemove();

    await this.startSubscription();
  }

  private async startSubscription () {
    await this.eventService.waitKeyringReady;

    this.dbService.subscribeChainStakingMetadata([], (data) => {
      this.chainStakingMetadataSubject.next(data);
    });

    let unsub: Subscription | undefined;

    this.keyringService.accountSubject.subscribe((accounts) => { // TODO: improve this
      unsub && unsub.unsubscribe();

      unsub = this.dbService.subscribeNominatorMetadata(Object.keys(accounts), (data) => {
        this.stakingNominatorMetadataSubject.next(data);
      });
    });
  }

  public onReady () {
    // Todo: Need optimize in the future to, only run important services onetime to save resources
    // Todo: If optimize must check activity of web-runner of mobile
    this._start().catch(console.error);
  }

  public updateKeyringState (isReady = true, callback?: () => void): void {
    this.keyringService.updateKeyringState(isReady);
    callback && callback();
  }

  private lazyNext = (key: string, callback: () => void) => {
    if (this.lazyMap[key]) {
      // @ts-ignore
      clearTimeout(this.lazyMap[key]);
    }

    const lazy = setTimeout(() => {
      callback();
      clearTimeout(lazy);
    }, 300);

    this.lazyMap[key] = lazy;
  };

  public getAuthRequestV2 (id: string): AuthRequestV2 {
    return this.requestService.getAuthRequestV2(id);
  }

  public setAuthorize (data: AuthUrls, callback?: () => void): void {
    this.requestService.setAuthorize(data, callback);
  }

  public getAuthorize (update: (value: AuthUrls) => void): void {
    this.requestService.getAuthorize(update);
  }

  public subscribeEvmChainChange (): Subject<AuthUrls> {
    return this.requestService.subscribeEvmChainChange;
  }

  public subscribeAuthorizeUrlSubject (): Subject<AuthUrls> {
    return this.requestService.subscribeAuthorizeUrlSubject;
  }

  public getAuthList (): Promise<AuthUrls> {
    return this.requestService.getAuthList();
  }

  getAddressList (value = false): Record<string, boolean> {
    const addressList = Object.keys(this.keyringService.accounts);

    return addressList.reduce((addressList, v) => ({ ...addressList, [v]: value }), {});
  }

  public async authorizeUrlV2 (url: string, request: RequestAuthorizeTab): Promise<boolean> {
    return this.requestService.authorizeUrlV2(url, request);
  }

  public getNativeTokenInfo (networkKey: string) {
    return this.chainService.getNativeTokenInfo(networkKey);
  }

  public getChainInfo (networkKey: string) {
    return this.chainService.getChainInfoByKey(networkKey);
  }

  public async getChainStakingMetadata (): Promise<ChainStakingMetadata[]> {
    return this.dbService.getChainStakingMetadata();
  }

  public async getStakingMetadataByChain (chain: string, type: StakingType) {
    return this.dbService.getStakingMetadataByChain(chain, type);
  }

  public async getNominatorMetadata (): Promise<NominatorMetadata[]> {
    return this.dbService.getNominatorMetadata();
  }

  public async getStaking (): Promise<StakingJson> {
    const addresses = this.getDecodedAddresses();

    const stakings = await this.dbService.getStakings(addresses, this.activeChainSlugs);

    return { ready: true, details: stakings } as StakingJson;
  }

  public async getStakingOwnersByChains (chains: string[]): Promise<string[]> {
    const stakings = await this.dbService.getStakingsByChains(chains);
    const addresses: string[] = [];

    stakings.forEach((staking) => {
      if (!addresses.includes(staking.address)) {
        addresses.push(staking.address);
      }
    });

    return addresses;
  }

  public async getPooledStakingRecordsByAddress (addresses: string[]): Promise<StakingItem[]> {
    return this.dbService.getPooledStakings(addresses, this.activeChainSlugs);
  }

  public subscribeStaking () {
    return this.stakingSubject;
  }

  public subscribeChainStakingMetadata () {
    return this.chainStakingMetadataSubject;
  }

  public subscribeNominatorMetadata () {
    return this.stakingNominatorMetadataSubject;
  }

  public ensureUrlAuthorizedV2 (url: string): Promise<boolean> {
    return this.requestService.ensureUrlAuthorizedV2(url);
  }

  public setStakingItem (networkKey: string, item: StakingItem): void {
    this.dbService.updateStaking(networkKey, item.address, item).catch((e) => this.logger.warn(e));
  }

  public updateChainStakingMetadata (item: ChainStakingMetadata, changes?: Record<string, unknown>) {
    this.dbService.updateChainStakingMetadata(item, changes).catch((e) => this.logger.warn(e));
  }

  public updateStakingNominatorMetadata (item: NominatorMetadata) {
    this.dbService.updateNominatorMetadata(item).catch((e) => this.logger.warn(e));
  }

  public setNftCollection (network: string, data: NftCollection, callback?: (data: NftCollection) => void): void {
    this.dbService.addNftCollection(data).catch((e) => this.logger.warn(e));
    callback && callback(data);
  }

  public getNftCollection () {
    return this.dbService.getAllNftCollection(this.activeChainSlugs);
  }

  public subscribeNftCollection () {
    return this.dbService.stores.nftCollection.subscribeNftCollection(this.activeChainSlugs);
  }

  resetNft (newAddress: string): void {
    this.getNft().then((data) => this.nftSubject.next(data || {
      nftList: [],
      total: 0
    })).catch((e) => this.logger.warn(e));

    const addresses = this.getDecodedAddresses(newAddress);

    this.dbService.subscribeNft(addresses, this.activeChainSlugs, (nfts) => {
      this.nftSubject.next({
        nftList: nfts,
        total: nfts.length
      });
    });
  }

  public updateNftData (network: string, nftData: NftItem, address: string, callback?: (nftData: NftItem) => void): void {
    this.dbService.addNft(address, nftData).catch((e) => this.logger.warn(e));

    callback && callback(nftData);
  }

  public deleteNftCollection (chain: string, collectionId: string) {
    return this.dbService.deleteNftCollection(chain, collectionId);
  }

  public cleanUpNfts (chain: string, owner: string, collectionId: string[], nftIds: string[], ownNothing?: boolean) {
    this.dbService.cleanUpNft(chain, owner, collectionId, nftIds, ownNothing).catch((e) => this.logger.warn(e));
  }

  public async getNft (): Promise<NftJson | undefined> {
    const addresses = this.getDecodedAddresses();

    if (!addresses.length) {
      return;
    }

    const nfts = await this.dbService.getNft(addresses, this.activeChainSlugs);

    return {
      nftList: nfts,
      total: nfts.length
    };
  }

  public subscribeNft () {
    return this.nftSubject;
  }

  public resetStakingReward () {
    this.stakingRewardState.data = {};

    this.stakingRewardSubject.next(this.stakingRewardState);
  }

  public updateStakingReward (stakingRewardData: StakingRewardItem, callback?: (stakingRewardData: StakingRewardJson) => void): void {
    this.stakingRewardState.ready = true;
    const key = `${stakingRewardData.chain}___${stakingRewardData.address}___${stakingRewardData.type}`;

    this.stakingRewardState.data[key] = stakingRewardData;

    if (callback) {
      callback(this.stakingRewardState);
    }

    this.stakingRewardSubject.next(this.stakingRewardState);
  }

  public updateStakingRewardReady (ready: boolean) {
    this.stakingRewardState.ready = ready;
    this.stakingRewardSubject.next(this.stakingRewardState);
  }

  public getAccountRefMap (callback: (refMap: Record<string, Array<string>>) => void) {
    const refMap: AccountRefMap = {};

    this.accountRefStore.get('refList', (refList) => {
      if (refList) {
        refList.forEach((accRef) => {
          accRef.forEach((acc) => {
            refMap[acc] = [...accRef].filter((r) => !(r === acc));
          });
        });
      }

      callback(refMap);
    });
  }

  public addAccountRef (addresses: string[], callback: () => void) {
    this.accountRefStore.get('refList', (refList) => {
      const newList = refList ? [...refList] : [];

      newList.push(addresses);

      this.accountRefStore.set('refList', newList, callback);
    });
  }

  public removeAccountRef (address: string, callback: () => void) {
    this.accountRefStore.get('refList', (refList) => {
      if (refList) {
        refList.forEach((accRef) => {
          if (accRef.indexOf(address) > -1) {
            accRef.splice(accRef.indexOf(address), 1);
          }

          if (accRef.length < 2) {
            refList.splice(refList.indexOf(accRef), 1);
          }
        });

        this.accountRefStore.set('refList', refList, () => {
          callback();
        });
      } else {
        callback();
      }
    });
  }

  public getStakingReward (update: (value: StakingRewardJson) => void): void {
    update(this.stakingRewardState);
  }

  public subscribeStakingReward () {
    return this.stakingRewardSubject;
  }

  public setCurrentAccount (data: CurrentAccountInfo, callback?: () => void): void {
    const { address, currentGenesisHash } = data;

    const result: CurrentAccountInfo = { ...data };

    if (address === ALL_ACCOUNT_KEY) {
      const pairs = keyring.getAccounts();
      const pair = pairs[0];
      const pairGenesisHash = pair?.meta.genesisHash as string || '';

      if (pairs.length > 1 || !pair) {
        result.allGenesisHash = currentGenesisHash || undefined;
      } else {
        result.address = pair.address;
        result.currentGenesisHash = pairGenesisHash || '';
        result.allGenesisHash = pairGenesisHash || undefined;
      }
    }

    this.keyringService.setCurrentAccount(result);
    callback && callback();
  }

  public setAccountTie (address: string, genesisHash: string | null): boolean {
    if (address !== ALL_ACCOUNT_KEY) {
      const pair = keyring.getPair(address);

      assert(pair, 'Unable to find pair');

      keyring.saveAccountMeta(pair, { ...pair.meta, genesisHash });
    }

    const accountInfo = this.keyringService.currentAccount;

    if (address === accountInfo.address) {
      accountInfo.currentGenesisHash = genesisHash as string || ALL_GENESIS_HASH;

      this.setCurrentAccount(accountInfo);
    }

    return true;
  }

  public async switchEvmNetworkByUrl (shortenUrl: string, networkKey: string): Promise<void> {
    const authUrls = await this.getAuthList();
    const chainInfo = this.chainService.getChainInfoByKey(networkKey);
    const chainState = this.chainService.getChainStateByKey(networkKey);

    if (authUrls[shortenUrl]) {
      if (chainInfo && !_isChainEnabled(chainState)) {
        await this.enableChain(networkKey);
      }

      authUrls[shortenUrl].currentEvmNetworkKey = networkKey;
      this.setAuthorize(authUrls);
    } else {
      throw new EvmProviderError(EvmProviderErrorType.INTERNAL_ERROR, `Not found ${shortenUrl} in auth list`);
    }
  }

  public async switchNetworkAccount (id: string, url: string, networkKey: string, changeAddress?: string): Promise<boolean> {
    const chainInfo = this.chainService.getChainInfoByKey(networkKey);
    const chainState = this.chainService.getChainStateByKey(networkKey);
    const { address, currentGenesisHash } = this.keyringService.currentAccount;

    return this.requestService.addConfirmation(id, url, 'switchNetworkRequest', {
      networkKey,
      address: changeAddress
    }, { address: changeAddress })
      .then(({ isApproved }) => {
        if (isApproved) {
          const useAddress = changeAddress || address;

          if (chainInfo && !_isChainEnabled(chainState)) {
            this.enableChain(networkKey).catch(console.error);
          }

          if (useAddress !== ALL_ACCOUNT_KEY) {
            const pair = keyring.getPair(useAddress);

            assert(pair, 'Unable to find pair');

            keyring.saveAccountMeta(pair, { ...pair.meta, genesisHash: _getSubstrateGenesisHash(chainInfo) });
          }

          if (address !== changeAddress || _getSubstrateGenesisHash(chainInfo) !== currentGenesisHash || isApproved) {
            this.setCurrentAccount({
              address: useAddress,
              currentGenesisHash: _getSubstrateGenesisHash(chainInfo)
            });
          }
        }

        return isApproved;
      });
  }

  public async addNetworkConfirm (id: string, url: string, networkData: _NetworkUpsertParams) {
    return this.requestService.addConfirmation(id, url, 'addNetworkRequest', networkData)
      .then(async ({ isApproved }) => {
        if (isApproved) {
          if (networkData.mode === 'insert') {
            await this.upsertChainInfo(networkData);
          } else {
            // TODO: update existed network (need more discussion)
          }

          return null;
        } else {
          throw new EvmProviderError(EvmProviderErrorType.USER_REJECTED_REQUEST);
        }
      });
  }

  public async addTokenConfirm (id: string, url: string, tokenInfo: AddTokenRequestExternal) {
    return this.requestService.addConfirmation(id, url, 'addTokenRequest', tokenInfo)
      .then(async ({ isApproved }) => {
        if (isApproved) {
          await this.upsertCustomToken({
            originChain: tokenInfo.originChain,
            slug: '',
            name: tokenInfo.name,
            symbol: tokenInfo.symbol,
            decimals: tokenInfo.decimals,
            priceId: null,
            minAmount: null,
            assetType: tokenInfo.type,
            metadata: _parseMetadataForSmartContractAsset(tokenInfo.contractAddress),
            multiChainAsset: null,
            hasValue: _isChainTestNet(this.chainService.getChainInfoByKey(tokenInfo.originChain)),
            icon: ''
          });

          return isApproved;
        } else {
          throw new EvmProviderError(EvmProviderErrorType.USER_REJECTED_REQUEST);
        }
      });
  }

  public get metaSubject () {
    return this.requestService.metaSubject;
  }

  public get signSubject () {
    return this.requestService.signSubject;
  }

  public getSettings (callback: (settings: UiSettings) => void): void {
    this.settingService.getSettings(callback);
  }

  public setSettings (settings: UiSettings, callback?: () => void): void {
    this.settingService.setSettings(settings, callback);
  }

  public setTheme (theme: ThemeNames, callback?: (settingData: UiSettings) => void): void {
    this.settingService.getSettings((settings) => {
      const newSettings = {
        ...settings,
        theme
      };

      this.settingService.setSettings(newSettings, () => {
        callback && callback(newSettings);
      });
    });
  }

  public setBrowserConfirmationType (browserConfirmationType: BrowserConfirmationType, callback?: (settingData: UiSettings) => void): void {
    this.settingService.getSettings((settings) => {
      const newSettings = {
        ...settings,
        browserConfirmationType
      };

      this.settingService.setSettings(newSettings, () => {
        callback && callback(newSettings);
      });
    });
  }

  public setCamera (value: boolean): void {
    this.settingService.getSettings((settings) => {
      const newSettings = {
        ...settings,
        camera: value
      };

      this.settingService.setSettings(newSettings);
    });
  }

  public setAutoLockTime (value: number): void {
    this.settingService.getSettings((settings) => {
      const newSettings: UiSettings = {
        ...settings,
        timeAutoLock: value
      };

      this.settingService.setSettings(newSettings);
    });
  }

  public setEnableChainPatrol (value: boolean): void {
    this.settingService.getSettings((settings) => {
      const newSettings: UiSettings = {
        ...settings,
        enableChainPatrol: value
      };

      this.settingService.setSettings(newSettings);
    });
  }

  public subscribeSettingsSubject (): Subject<RequestSettingsType> {
    return this.settingService.getSubject();
  }

  public getAccountAddress (): string | null {
    const address = this.keyringService.currentAccount.address;

    if (address === '') {
      return null;
    }

    return address;
  }

  public getDecodedAddresses (address?: string): string[] {
    let checkingAddress: string | null | undefined = address;

    if (!address) {
      checkingAddress = this.getAccountAddress();
    }

    if (!checkingAddress) {
      return [];
    }

    if (checkingAddress === ALL_ACCOUNT_KEY) {
      return this.getAllAddresses();
    }

    return [checkingAddress];
  }

  public getAllAddresses (): string[] {
    return keyring.getAccounts().map((account) => account.address);
  }

  private removeInactiveChainBalances (balanceMap: Record<string, BalanceItem>) {
    const activeBalanceMap: Record<string, BalanceItem> = {};

    Object.entries(balanceMap).forEach(([tokenSlug, balanceItem]) => {
      const tokenInfo = this.chainService.getAssetBySlug(tokenSlug);

      if (tokenInfo) {
        const chainInfo = this.chainService.getChainInfoByKey(tokenInfo.originChain);

        if (chainInfo && this.getChainStateByKey(chainInfo.slug).active) {
          activeBalanceMap[tokenSlug] = balanceItem;
        }
      }
    });

    return activeBalanceMap;
  }

  public getBalance (reset?: boolean): BalanceJson {
    const activeData = this.removeInactiveChainBalances(this.balanceMap);

    return { details: activeData, reset } as BalanceJson;
  }

  public async getStoredBalance (address: string): Promise<Record<string, BalanceItem>> {
    const items = await this.dbService.stores.balance.getBalanceMapByAddress(address);

    return items || {};
  }

  public async handleSwitchAccount (newAddress: string) {
    await Promise.all([
      this.resetBalanceMap(newAddress),
      this.resetCrowdloanMap(newAddress)
    ]);
  }

  public async resetBalanceMap (newAddress: string) {
    const defaultData = this.generateDefaultBalanceMap();
    let storedData = await this.getStoredBalance(newAddress);

    storedData = this.removeInactiveChainBalances(storedData);

    this.balanceMap = { ...defaultData, ...storedData } as Record<string, BalanceItem>;
    this.publishBalance(true);
  }

  public async resetCrowdloanMap (newAddress: string) {
    const defaultData = generateDefaultCrowdloanMap();
    const storedData = await this.getStoredCrowdloan(newAddress);

    this.crowdloanMap = { ...defaultData, ...storedData } as Record<string, CrowdloanItem>;
    this.publishCrowdloan(true);
  }

  public resetStaking (newAddress: string) {
    this.getStaking()
      .then((data) => {
        this.stakingSubject.next(data);
      })
      .catch((e) => this.logger.warn(e));

    const addresses = this.getDecodedAddresses(newAddress);

    this.dbService.subscribeStaking(addresses, this.activeChainSlugs, (stakings) => {
      this.stakingSubject.next({
        ready: true,
        details: stakings
      });
    });
  }

  public setBalanceItem (tokenSlug: string, item: BalanceItem) {
    this.balanceMap[tokenSlug] = { timestamp: +new Date(), ...item };
    this.updateBalanceStore(item);

    this.lazyNext('setBalanceItem', () => {
      this.publishBalance();
    });
  }

  private updateBalanceStore (item: BalanceItem) {
    const currentAccountInfo = this.keyringService.currentAccount;

    this.dbService.updateBalanceStore(currentAccountInfo.address, item).catch((e) => this.logger.warn(e));
  }

  public subscribeBalance () {
    return this.balanceSubject;
  }

  public getCrowdloan (reset?: boolean): CrowdloanJson {
    return { details: this.crowdloanMap, reset } as CrowdloanJson;
  }

  public async getStoredCrowdloan (address: string) {
    const items = await this.dbService.stores.crowdloan.getDataByAddressAsObject(address);

    return items || {};
  }

  public setCrowdloanItem (networkKey: string, item: CrowdloanItem) {
    const itemData = { ...item, timestamp: +new Date() };

    // Update crowdloan map
    this.crowdloanMap[networkKey] = itemData;
    this.updateCrowdloanStore(networkKey, itemData);

    this.lazyNext('setCrowdloanItem', () => {
      this.publishCrowdloan();
    });
  }

  private updateCrowdloanStore (networkKey: string, item: CrowdloanItem) {
    const currentAccountInfo = this.keyringService.currentAccount;

    this.dbService.updateCrowdloanStore(networkKey, currentAccountInfo.address, item).catch((e) => this.logger.warn(e));
  }

  public subscribeCrowdloan () {
    return this.crowdloanSubject;
  }

  public getSmartContractNfts () {
    return this.chainService.getSmartContractNfts();
  }

  // ChainService ------------------------------------------------

  public getChainInfoMap () {
    return this.chainService.getChainInfoMap();
  }

  public getChainStateMap () {
    return this.chainService.getChainStateMap();
  }

  public getAssetRefMap () {
    return this.chainService.getAssetRefMap();
  }

  public getChainStateByKey (key: string) {
    return this.chainService.getChainStateByKey(key);
  }

  public getAssetRegistry () {
    return this.chainService.getAssetRegistry();
  }

  public getMultiChainAssetMap () {
    return this.chainService.getMultiChainAssetMap();
  }

  public getXcmRefMap () {
    return this.chainService.getXcmRefMap();
  }

  public getAssetByChainAndAsset (chain: string, assetTypes: _AssetType[]) {
    return this.chainService.getAssetByChainAndType(chain, assetTypes);
  }

  public getAssetBySlug (slug: string) {
    return this.chainService.getAssetBySlug(slug);
  }

  public getXcmEqualAssetByChain (destinationChain: string, originTokenSlug: string) {
    return this.chainService.getXcmEqualAssetByChain(destinationChain, originTokenSlug);
  }

  public subscribeChainInfoMap (): Subject<Record<string, _ChainInfo>> {
    return this.chainService.subscribeChainInfoMap();
  }

  public subscribeChainStateMap (): Subject<Record<string, _ChainState>> {
    return this.chainService.subscribeChainStateMap();
  }

  public subscribeAssetRegistry (): Subject<Record<string, _ChainAsset>> {
    return this.chainService.subscribeAssetRegistry();
  }

  public subscribeMultiChainAssetMap (): Subject<Record<string, _MultiChainAsset>> {
    return this.chainService.subscribeMultiChainAssetMap();
  }

  public subscribeXcmRefMap (): Subject<Record<string, _AssetRef>> {
    return this.chainService.subscribeXcmRefMap();
  }

  public async upsertCustomToken (data: _ChainAsset) {
    const tokenSlug = this.chainService.upsertCustomToken(data);

    if (_isAssetFungibleToken(data)) {
      await this.chainService.updateAssetSetting(tokenSlug, { visible: true });
      this.eventService.emit('asset.updateState', tokenSlug);
    } else {
      this.eventService.emit('asset.updateState', tokenSlug);
    }
  }

  public deleteCustomAssets (targetTokens: string[]) {
    this.chainService.deleteCustomAssets(targetTokens);
  }

  public async validateCustomChain (provider: string, existedChainSlug?: string) {
    return await this.chainService.validateCustomChain(provider, existedChainSlug);
  }

  public getSupportedSmartContractTypes () {
    return this.chainService.getSupportedSmartContractTypes();
  }

  public async validateCustomAsset (data: _ValidateCustomAssetRequest) {
    return await this.chainService.validateCustomToken(data);
  }

  // ------------------------------------------------

  public getActiveChainInfoMap () {
    return this.chainService.getActiveChainInfoMap();
  }

  public async upsertChainInfo (data: _NetworkUpsertParams): Promise<boolean> {
    const newNativeTokenSlug = await this.chainService.upsertChain(data);

    if (newNativeTokenSlug) {
      await this.chainService.updateAssetSetting(newNativeTokenSlug, { visible: true });
      this.eventService.emit('asset.updateState', newNativeTokenSlug);
    }

    return true;
  }

  public removeCustomChain (networkKey: string): boolean {
    return this.chainService.removeCustomChain(networkKey);
  }

  // TODO: avoids turning off chains related to ledger account
  private getDefaultNetworkKeys = (): string[] => {
    const genesisHashes: Record<string, string> = {};

    const pairs = keyring.getPairs();

    pairs.forEach((pair) => {
      const originGenesisHash = pair.meta.originGenesisHash;

      if (originGenesisHash && typeof originGenesisHash === 'string') {
        genesisHashes[originGenesisHash] = originGenesisHash;
      }
    });

    const hashes = Object.keys(genesisHashes);

    const result: string[] = [];

    for (const [key, network] of Object.entries(this.chainService.getChainInfoMap())) {
      const condition = hashes.includes(_getSubstrateGenesisHash(network) || '');

      if (condition) {
        result.push(key);
      }
    }

    return result;
  };

  public async disableChain (chainSlug: string): Promise<boolean> {
    // const defaultChains = this.getDefaultNetworkKeys();
    await this.chainService.updateAssetSettingByChain(chainSlug, false);

    return this.chainService.disableChain(chainSlug);
  }

  public async enableChain (chainSlug: string, enableTokens = true): Promise<boolean> {
    if (enableTokens) {
      await this.chainService.updateAssetSettingByChain(chainSlug, true);
    }

    return this.chainService.enableChain(chainSlug);
  }

  public resetDefaultChains () {
    const defaultChains = this.getDefaultNetworkKeys();

    return this.chainService.resetChainInfoMap(defaultChains);
  }

  public getSubstrateApiMap () {
    return this.chainService.getSubstrateApiMap();
  }

  public getSubstrateApi (networkKey: string) {
    return this.chainService.getSubstrateApi(networkKey);
  }

  public getEvmApiMap () {
    return this.chainService.getEvmApiMap();
  }

  public getEvmApi (networkKey: string) {
    return this.chainService.getEvmApi(networkKey);
  }

  public getApiMap () {
    return {
      substrate: this.chainService.getSubstrateApiMap(),
      evm: this.chainService.getEvmApiMap()
    } as ApiMap;
  }

  public refreshSubstrateApi (key: string) {
    this.chainService.refreshSubstrateApi(key);

    return true;
  }

  public refreshWeb3Api (key: string) {
    this.chainService.refreshEvmApi(key);
  }

  public getServiceInfo (): ServiceInfo {
    return {
      chainInfoMap: this.chainService.getChainInfoMap(),
      chainApiMap: this.getApiMap(),
      currentAccountInfo: this.keyringService.currentAccount,
      assetRegistry: this.chainService.getAssetRegistry(),
      chainStateMap: this.chainService.getChainStateMap()
    };
  }

  public getExternalRequestMap (): Record<string, ExternalRequestPromise> {
    return this.externalRequest;
  }

  public setExternalRequestMap (id: string, value: ExternalRequestPromise) {
    this.externalRequest[id] = value;
  }

  public getExternalRequest (id: string): ExternalRequestPromise {
    return this.externalRequest[id];
  }

  public updateExternalRequest (id: string, value: Partial<ExternalRequestPromise>): void {
    const rs = this.externalRequest[id];

    if (rs) {
      for (const [_key, _value] of Object.entries(value)) {
        // @ts-ignore
        rs[_key] = _value;
      }
    }
  }

  public cleanExternalRequest (): void {
    const now = new Date().getTime();
    const map = this.externalRequest;

    const arr: string[] = [];

    const handlerPushToDelete = (key: string, value: ExternalRequestPromise) => {
      arr.push(key);
      value.resolve = undefined;
      value.reject = undefined;
    };

    for (const [key, value] of Object.entries(map)) {
      if (value.status === ExternalRequestPromiseStatus.COMPLETED || value.status === ExternalRequestPromiseStatus.REJECTED) {
        handlerPushToDelete(key, value);
      } else {
        if (now - value.createdAt > 15 * 60 * 60) {
          handlerPushToDelete(key, value);
        }
      }
    }

    for (const key of arr) {
      delete map[key];
    }
  }

  public pauseAllNetworks (code?: number, reason?: string) {
    return this.chainService.stopAllChainApis();
  }

  async resumeAllNetworks () {
    return this.chainService.resumeAllChainApis();
  }

  private publishBalance (reset?: boolean) {
    this.balanceSubject.next(this.getBalance(reset));
  }

  private publishCrowdloan (reset?: boolean) {
    this.crowdloanSubject.next(this.getCrowdloan(reset));
  }

  // private publishHistory () {
  //   this.historySubject.next(this.getHistoryMap());
  // }

  // private removeInactiveDataByChain<T> (data: Record<string, T>) {
  //   const activeData: Record<string, T> = {};
  //
  //   Object.entries(data).forEach(([networkKey, items]) => {
  //     if (this.chainService.getChainStateByKey(networkKey).active) {
  //       activeData[networkKey] = items;
  //     }
  //   });
  //
  //   return activeData;
  // }

  findNetworkKeyByGenesisHash (genesisHash?: string | null): [string | undefined, _ChainInfo | undefined] {
    if (!genesisHash) {
      return [undefined, undefined];
    }

    const rs = Object.entries(this.chainService.getChainInfoMap()).find(([networkKey, chainInfo]) => (_getSubstrateGenesisHash(chainInfo) === genesisHash));

    if (rs) {
      return rs;
    } else {
      return [undefined, undefined];
    }
  }

  findChainIdGenesisHash (genesisHash?: string | null): number | undefined {
    const chainInfo = this.findNetworkKeyByGenesisHash(genesisHash)[1];

    return chainInfo ? _getEvmChainId(chainInfo) : undefined;
  }

  findNetworkKeyByChainId (chainId?: number | null): [string | undefined, _ChainInfo | undefined] {
    if (!chainId) {
      return [undefined, undefined];
    }

    const rs = Object.entries(this.chainService.getChainInfoMap()).find(([networkKey, chainInfo]) => (chainInfo?.evmInfo?.evmChainId === chainId));

    if (rs) {
      return rs;
    } else {
      return [undefined, undefined];
    }
  }

  findSingleMode (genesisHash: string): SingleModeJson | undefined {
    const [networkKey] = this.findNetworkKeyByGenesisHash(genesisHash);

    if (!networkKey) {
      return undefined;
    }

    return (Object.values(_PREDEFINED_SINGLE_MODES)).find((item) => (item.networkKeys.includes(networkKey)));
  }

  public accountExportPrivateKey ({ address,
    password }: RequestAccountExportPrivateKey): ResponseAccountExportPrivateKey {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const exportedJson = keyring.backupAccount(keyring.getPair(address), password);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const decoded = decodePair(password, base64Decode(exportedJson.encoded), exportedJson.encoding.type);

    return {
      privateKey: u8aToHex(decoded.secretKey),
      publicKey: u8aToHex(decoded.publicKey)
    };
  }

  public checkPublicAndSecretKey ({ publicKey,
    secretKey }: RequestCheckPublicAndSecretKey): ResponseCheckPublicAndSecretKey {
    try {
      const _secret = hexStripPrefix(secretKey);

      if (_secret.length === 64) {
        const suri = `0x${_secret}`;
        const { phrase } = keyExtractSuri(suri);

        if (isHex(phrase) && isHex(phrase, 256)) {
          const type: KeypairType = 'ethereum';
          const address = keyring.createFromUri(getSuri(suri, type), {}, type).address;

          return {
            address: address,
            isValid: true,
            isEthereum: true
          };
        } else {
          return {
            address: '',
            isValid: false,
            isEthereum: true
          };
        }
      }

      const keyPair = keyring.keyring.addFromPair({ publicKey: hexToU8a(publicKey), secretKey: hexToU8a(secretKey) });

      return {
        address: keyPair.address,
        isValid: true,
        isEthereum: false
      };
    } catch (e) {
      console.error(e);

      return {
        address: '',
        isValid: false,
        isEthereum: false
      };
    }
  }

  public getEthKeyring (address: string, password: string): Promise<SimpleKeyring> {
    return new Promise<SimpleKeyring>((resolve) => {
      const { privateKey } = this.accountExportPrivateKey({ address, password: password });
      const ethKeyring = new SimpleKeyring([privateKey]);

      resolve(ethKeyring);
    });
  }

  public async evmSign (id: string, url: string, method: string, params: any, allowedAccounts: string[]): Promise<string | undefined> {
    let address = '';
    let payload: any;
    const [p1, p2] = params as [string, string];

    if (typeof p1 === 'string' && isEthereumAddress(p1)) {
      address = p1;
      payload = p2;
    } else if (typeof p2 === 'string' && isEthereumAddress(p2)) {
      address = p2;
      payload = p1;
    }

    if (address === '' || !payload) {
      throw new EvmProviderError(EvmProviderErrorType.INVALID_PARAMS, 'Not found address or payload to sign');
    }

    if (['eth_sign', 'personal_sign', 'eth_signTypedData', 'eth_signTypedData_v1', 'eth_signTypedData_v3', 'eth_signTypedData_v4'].indexOf(method) < 0) {
      throw new EvmProviderError(EvmProviderErrorType.INVALID_PARAMS, 'Not found sign method');
    }

    if (['eth_signTypedData_v3', 'eth_signTypedData_v4'].indexOf(method) > -1) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-assignment
      payload = JSON.parse(payload);
    }

    // Check sign abiblity
    if (!allowedAccounts.find((acc) => (acc.toLowerCase() === address.toLowerCase()))) {
      throw new EvmProviderError(EvmProviderErrorType.INVALID_PARAMS, 'Account ' + address + ' not in allowed list');
    }

    const pair = keyring.getPair(address);

    if (!pair) {
      throw new EvmProviderError(EvmProviderErrorType.INVALID_PARAMS, 'Cannot find pair with address: ' + address);
    }

    const account: AccountJson = { address: pair.address, ...pair.meta };

    let hashPayload = '';
    let canSign = false;

    switch (method) {
      case 'personal_sign':
        canSign = true;
        hashPayload = payload as string;
        break;
      case 'eth_sign':
      case 'eth_signTypedData':
      case 'eth_signTypedData_v1':
      case 'eth_signTypedData_v3':
      case 'eth_signTypedData_v4':
        if (!account.isExternal) {
          canSign = true;
        }

        break;
      default:
        throw new EvmProviderError(EvmProviderErrorType.INVALID_PARAMS, 'Not found sign method');
    }

    const signPayload: EvmSignatureRequest = {
      account: account,
      type: method,
      payload: payload as unknown,
      hashPayload: hashPayload,
      canSign: canSign,
      id
    };

    return this.requestService.addConfirmation(id, url, 'evmSignatureRequest', signPayload, {
      requiredPassword: false,
      address
    })
      .then(({ isApproved, payload }) => {
        if (isApproved) {
          if (payload) {
            return payload;
          } else {
            throw new EvmProviderError(EvmProviderErrorType.INVALID_PARAMS, 'Not found signature');
          }
        } else {
          throw new EvmProviderError(EvmProviderErrorType.USER_REJECTED_REQUEST);
        }
      });
  }

  public async evmSendTransaction (id: string, url: string, networkKey: string, allowedAccounts: string[], transactionParams: EvmSendTransactionParams): Promise<string | undefined> {
    const evmApi = this.getEvmApi(networkKey);
    const evmNetwork = this.getChainInfo(networkKey);
    const web3 = evmApi.api;

    const autoFormatNumber = (val?: string | number): string | undefined => {
      if (typeof val === 'string' && val.startsWith('0x')) {
        return new BN(val.replace('0x', ''), 16).toString();
      } else if (typeof val === 'number') {
        return val.toString();
      }

      return val;
    };

    if (transactionParams.from === transactionParams.to) {
      throw new EvmProviderError(EvmProviderErrorType.INVALID_PARAMS, 'From address and to address must not be the same');
    }

    const transaction: TransactionConfig = {
      from: transactionParams.from,
      to: transactionParams.to,
      value: autoFormatNumber(transactionParams.value),
      gasPrice: autoFormatNumber(transactionParams.gasPrice),
      maxPriorityFeePerGas: autoFormatNumber(transactionParams.maxPriorityFeePerGas),
      maxFeePerGas: autoFormatNumber(transactionParams.maxFeePerGas),
      data: transactionParams.data
    };

    // Calculate transaction data
    try {
      transaction.gas = await web3.eth.estimateGas({ ...transaction });
    } catch (e) {
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      throw new EvmProviderError(EvmProviderErrorType.INVALID_PARAMS, e?.message);
    }

    const gasPrice = await web3.eth.getGasPrice();

    transaction.gasPrice = gasPrice;

    const estimateGas = new BN(gasPrice.toString()).mul(new BN(transaction.gas)).toString();

    // Address is validated in before step
    const fromAddress = allowedAccounts.find((account) => (account.toLowerCase() === (transaction.from as string).toLowerCase()));

    if (!fromAddress) {
      throw new EvmProviderError(EvmProviderErrorType.INVALID_PARAMS, 'From address is not in available for ' + url);
    }

    const pair = keyring.getPair(fromAddress);

    if (!pair) {
      throw new EvmProviderError(EvmProviderErrorType.INVALID_PARAMS, 'Cannot find pair with address: ' + fromAddress);
    }

    const account: AccountJson = { address: pair.address, ...pair.meta };

    // Validate balance
    const balance = new BN(await web3.eth.getBalance(fromAddress) || 0);

    if (balance.lt(new BN(gasPrice.toString()).mul(new BN(transaction.gas)).add(new BN(autoFormatNumber(transactionParams.value) || '0')))) {
      throw new EvmProviderError(EvmProviderErrorType.INVALID_PARAMS, 'Balance can be not enough to send transaction');
    }

    transaction.nonce = await web3.eth.getTransactionCount(fromAddress);

    const hashPayload = this.transactionService.generateHashPayload(networkKey, transaction);
    const isToContract = await isContractAddress(transaction.to || '', evmApi);
    const parseData = isToContract
      ? transaction.data
        ? (await parseContractInput(transaction.data, transaction.to || '', evmNetwork)).result
        : ''
      : transaction.data || '';

    const requestPayload: EvmSendTransactionRequest = {
      ...transaction,
      estimateGas,
      hashPayload,
      isToContract,
      parseData: parseData,
      account: account,
      canSign: true
    };

    const eType = transaction.value ? ExtrinsicType.TRANSFER_BALANCE : ExtrinsicType.EVM_EXECUTE;

    const transactionData = { ...transaction };

    if (eType === ExtrinsicType.TRANSFER_BALANCE) {
      // @ts-ignore
      transactionData.tokenSlug = this.chainService.getNativeTokenInfo(networkKey).slug;
    }

    // Custom handle this instead of general handler transaction
    const transactionEmitter = await this.transactionService.addTransaction({
      transaction: requestPayload,
      address: requestPayload.from as string,
      chain: networkKey,
      url,
      data: transactionData,
      extrinsicType: eType,
      chainType: ChainType.EVM
    });

    // Wait extrinsic hash
    return new Promise((resolve, reject) => {
      transactionEmitter.on('extrinsicHash', (rs: TransactionEventResponse) => {
        resolve(rs.extrinsicHash);
      });

      // Mapping error for evmProvider
      transactionEmitter.on('error', (rs: TransactionEventResponse) => {
        let evmProviderError = new EvmProviderError(EvmProviderErrorType.INTERNAL_ERROR);

        const errorType = (rs.errors[0]?.errorType || BasicTxErrorType.INTERNAL_ERROR);

        if (errorType === BasicTxErrorType.USER_REJECT_REQUEST || errorType === BasicTxErrorType.UNABLE_TO_SIGN) {
          evmProviderError = new EvmProviderError(EvmProviderErrorType.USER_REJECTED_REQUEST);
        } else if (errorType === BasicTxErrorType.UNABLE_TO_SEND) {
          evmProviderError = new EvmProviderError(EvmProviderErrorType.INTERNAL_ERROR, rs.errors[0]?.message);
        }

        reject(evmProviderError);
      });
    });
  }

  public getConfirmationsQueueSubject (): BehaviorSubject<ConfirmationsQueue> {
    return this.requestService.confirmationsQueueSubject;
  }

  public async completeConfirmation (request: RequestConfirmationComplete) {
    return await this.requestService.completeConfirmation(request);
  }

  public onInstall () {
    const singleModes = Object.values(_PREDEFINED_SINGLE_MODES);

    try {
      // Open expand page
      const url = `${chrome.extension.getURL('index.html')}#/`;

      withErrorLog(() => chrome.tabs.create({ url }));
    } catch (e) {
      console.error(e);
    }

    const setUpSingleMode = ({ networkKeys, theme }: SingleModeJson) => {
      networkKeys.forEach((key) => {
        this.enableChain(key).catch(console.error);
      });

      const chainInfo = this.chainService.getChainInfoByKey(networkKeys[0]);
      const genesisHash = _getSubstrateGenesisHash(chainInfo);

      this.setCurrentAccount({
        address: ALL_ACCOUNT_KEY,
        currentGenesisHash: genesisHash.length > 0 ? genesisHash : null
      });
      this.setTheme(theme);
    };

    chrome.tabs.query({}, function (tabs) {
      const openingUrls = tabs.map((t) => t.url);

      const singleMode = singleModes.find(({ autoTriggerDomain }) => {
        const urlRegex = new RegExp(autoTriggerDomain);

        return Boolean(openingUrls.find((url) => {
          return url && urlRegex.test(url);
        }));
      });

      if (singleMode) {
        // Wait for everything is ready before enable single mode
        setTimeout(() => {
          setUpSingleMode(singleMode);
        }, 999);
      }
    });
  }

  public get activeNetworks () {
    return this.chainService.getActiveChainInfos();
  }

  public get activeChainSlugs () {
    return Object.values(this.activeNetworks).map((chainInfo) => {
      return chainInfo.slug;
    });
  }

  public async sleep () {
    // Wait starting finish before sleep to avoid conflict
    this.generalStatus === ServiceStatus.STARTING && this.waitStarting && await this.waitStarting;
    this.eventService.emit('general.sleep', true);

    // Avoid sleep multiple times
    if (this.generalStatus === ServiceStatus.STOPPED) {
      return;
    }

    // Continue wait existed stopping process
    if (this.generalStatus === ServiceStatus.STOPPING) {
      await this.waitSleeping;

      return;
    }

    const sleeping = createPromiseHandler<void>();

    this.generalStatus = ServiceStatus.STOPPING;
    this.waitSleeping = sleeping.promise;

    // Stopping services
    await Promise.all([this.cron.stop(), this.subscription.stop()]);
    await this.pauseAllNetworks(undefined, 'IDLE mode');
    await Promise.all([this.historyService.stop(), this.priceService.stop()]);

    // Complete sleeping
    sleeping.resolve();
    this.generalStatus = ServiceStatus.STOPPED;
    this.waitSleeping = null;
  }

  private async _start (isWakeup = false) {
    // Wait sleep finish before start to avoid conflict
    this.generalStatus === ServiceStatus.STOPPING && this.waitSleeping && await this.waitSleeping;

    // Avoid start multiple times
    if (this.generalStatus === ServiceStatus.STARTED) {
      return;
    }

    // Continue wait existed starting process
    if (this.generalStatus === ServiceStatus.STARTING) {
      await this.waitStarting;

      return;
    }

    const starting = createPromiseHandler<void>();

    this.generalStatus = ServiceStatus.STARTING;
    this.waitStarting = starting.promise;

    // Resume all networks if wakeup from sleep
    if (isWakeup) {
      await this.resumeAllNetworks();
      this.eventService.emit('general.wakeup', true);
    }

    // Start services
    await Promise.all([this.cron.start(), this.subscription.start(), this.historyService.start(), this.priceService.start()]);

    // Complete starting
    starting.resolve();
    this.waitStarting = null;
    this.generalStatus = ServiceStatus.STARTED;
  }

  public async wakeup () {
    await this._start(true);
  }

  public cancelSubscription (id: string): boolean {
    if (isSubscriptionRunning(id)) {
      unsubscribe(id);
    }

    if (this.unsubscriptionMap[id]) {
      this.unsubscriptionMap[id]();

      delete this.unsubscriptionMap[id];
    }

    return true;
  }

  public createUnsubscriptionHandle (id: string, unsubscribe: () => void): void {
    this.unsubscriptionMap[id] = unsubscribe;
  }

  public updateChainConnectionStatus (chain: string, status: _ChainConnectionStatus) {
    this.chainService.setChainConnectionStatus(chain, status);
  }

  public async autoEnableChains (addresses: string[]) {
    const assetMap = this.chainService.getAssetRegistry();
    const promiseList = addresses.map((address) => {
      return this.subscanService.getMultiChainBalance(address)
        .catch((e) => {
          console.error(e);

          return null;
        });
    });

    const needEnableChains: string[] = [];
    const needActiveTokens: string[] = [];
    const currentAssetSettings = await this.chainService.getAssetSettings();
    const chainMap = this.chainService.getChainInfoMap();
    const balanceDataList = await Promise.all(promiseList);

    balanceDataList.forEach((balanceData) => {
      balanceData && balanceData.forEach(({ balance, bonded, category, locked, network, symbol }) => {
        const chain = SUBSCAN_CHAIN_MAP_REVERSE[network];
        const chainInfo = chain ? chainMap[chain] : null;
        const balanceIsEmpty = (!balance || balance === '0') && (!locked || locked === '0') && (!bonded || bonded === '0');

        // Cancel if chain is not supported or is testnet or balance is 0
        if (!chainInfo || chainInfo.isTestnet || balanceIsEmpty) {
          return;
        }

        const tokenKey = `${chain}-${category === 'native' ? 'NATIVE' : 'LOCAL'}-${symbol.toUpperCase()}`;

        if (assetMap[tokenKey] && !currentAssetSettings[tokenKey]?.visible) {
          needEnableChains.push(chain);
          needActiveTokens.push(tokenKey);
          currentAssetSettings[tokenKey] = { visible: true };
        }
      });
    });

    if (needActiveTokens.length) {
      await this.chainService.enableChains(needEnableChains);
      this.chainService.setAssetSettings({ ...currentAssetSettings });
    }
  }

  public onAccountAdd () {
    this.eventService.on('account.add', (address) => {
      this.autoEnableChains([address]).catch(this.logger.error);
    });
  }

  public onAccountRemove () {
    this.eventService.on('account.remove', (address) => {
      // Some separate service like historyService will listen to this event and remove inside that service

      const stores = this.dbService.stores;

      // Remove Balance
      stores.balance.removeAllByAddress(address).catch(console.error);
      stores.balance.removeAllByAddress(ALL_ACCOUNT_KEY).catch(console.error);

      // Remove NFT
      stores.nft.deleteNftByAddress([address]).catch(console.error);

      // Remove Staking Data
      stores.staking.removeAllByAddress(address).catch(console.error);
    });
  }

  public async reloadNft () {
    return await this.cron.reloadNft();
  }

  public async reloadStaking () {
    return await this.cron.reloadStaking();
  }

  public async approvePassPhishingPage (_url: string) {
    return new Promise<boolean>((resolve) => {
      this.settingService.getPassPhishingList((value) => {
        const result = { ...value };
        const url = this.requestService.stripUrl(_url);

        result[url] = { pass: true };

        this.settingService.setPassPhishing(result, () => {
          resolve(true);
        });
      });
    });
  }

  public async resetWallet (resetAll: boolean) {
    this.keyringService.resetWallet(resetAll);
    this.requestService.resetWallet();
    this.transactionService.resetWallet();
    await this.dbService.resetWallet(resetAll);
    this.accountRefStore.set('refList', []);

    if (resetAll) {
      this.settingService.resetWallet();
    }

    this.chainService.resetWallet(resetAll);

    await this.chainService.init();
  }
}
