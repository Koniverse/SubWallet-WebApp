// Copyright 2019-2022 @subwallet/extension-base authors & contributors
// SPDX-License-Identifier: Apache-2.0

import '@polkadot/types-augment';

import { _ApiOptions } from '@subwallet/extension-base/services/chain-service/handler/types';
import { _EvmApi } from '@subwallet/extension-base/services/chain-service/types';
import { createPromiseHandler, PromiseHandler } from '@subwallet/extension-base/utils/promise';
import { BehaviorSubject } from 'rxjs';
import Web3 from 'web3';
import { HttpProvider, WebsocketProvider } from 'web3-core';

export class EvmApi implements _EvmApi {
  chainSlug: string;
  api: Web3;
  apiUrl: string;
  provider: HttpProvider | WebsocketProvider;
  apiError?: string;
  apiRetry = 0;
  public readonly isApiConnectedSubject = new BehaviorSubject(false);
  isApiReady = false;
  isApiReadyOnce = false;
  isReadyHandler: PromiseHandler<_EvmApi>;
  intervalCheckApi: NodeJS.Timer;

  providerName: string;

  get isApiConnected (): boolean {
    return this.isApiConnectedSubject.getValue();
  }

  private updateConnectedStatus (isConnected: boolean): void {
    if (isConnected !== this.isApiConnectedSubject.value) {
      this.isApiConnectedSubject.next(isConnected);
    }
  }

  get isReady (): Promise<_EvmApi> {
    return this.isReadyHandler.promise;
  }

  async updateApiUrl (apiUrl: string) {
    this.apiUrl = apiUrl;

    await this.disconnect();
    this.api.setProvider(this.createProvider(apiUrl));
    this.connect();
  }

  async recoverConnect () {
    const wsProvider = this.provider as WebsocketProvider;

    if (wsProvider.reconnect) {
      wsProvider.reconnect();
    }

    await this.isReadyHandler.promise;
  }

  private createProvider (apiUrl: string): HttpProvider | WebsocketProvider {
    if (apiUrl.startsWith('http')) {
      return new Web3.providers.HttpProvider(apiUrl);
    } else {
      return new Web3.providers.WebsocketProvider(apiUrl);
    }
  }

  constructor (chainSlug: string, apiUrl: string, { providerName }: _ApiOptions = {}) {
    this.chainSlug = chainSlug;
    this.apiUrl = apiUrl;
    this.providerName = providerName || 'unknown';
    this.provider = this.createProvider(apiUrl);
    this.api = new Web3(this.provider);
    this.isReadyHandler = createPromiseHandler<_EvmApi>();

    // Create it only to avoid undefined error, it will be overwrite in connect()
    this.intervalCheckApi = this.createIntervalCheckApi();
    this.connect();
  }

  createIntervalCheckApi (): NodeJS.Timer {
    this.clearIntervalCheckApi();

    return setInterval(() => {
      this.api.eth.net.isListening()
        .then(() => {
          this.onConnect();
        }).catch(() => {
          this.onDisconnect();
        });
    }, 10000);
  }

  clearIntervalCheckApi (): void {
    clearInterval(this.intervalCheckApi);
  }

  connect (): void {
    // For websocket provider, connect it
    const wsProvider = this.provider as WebsocketProvider;

    wsProvider.connect && wsProvider.connect();
    // Check if api is ready
    this.api.eth.net.isListening()
      .then(() => {
        this.isApiReadyOnce = true;
        this.onConnect();
      }).catch((error) => {
        this.isApiReadyOnce = false;
        this.isApiReady = false;
        this.isReadyHandler.reject(error);
        this.updateConnectedStatus(false);
        console.warn(`Can not connect to ${this.chainSlug} (EVM) at ${this.apiUrl}`);
      });

    // Interval to check connecting status
    this.intervalCheckApi = this.createIntervalCheckApi();
  }

  async disconnect () {
    this.clearIntervalCheckApi();
    this.onDisconnect();

    // For websocket provider, disconnect it
    const wsProvider = this.provider as WebsocketProvider;

    wsProvider.disconnect && wsProvider.disconnect();

    this.updateConnectedStatus(false);

    return Promise.resolve();
  }

  destroy () {
    // Todo: implement this in the future
    return this.disconnect();
  }

  onConnect (): void {
    if (!this.isApiConnected) {
      console.log(`Connected to ${this.chainSlug} at ${this.apiUrl}`);
      this.isApiReady = true;

      if (this.isApiReadyOnce) {
        this.isReadyHandler.resolve(this);
      }
    }

    this.updateConnectedStatus(true);
  }

  onDisconnect (): void {
    this.updateConnectedStatus(false);

    if (this.isApiConnected) {
      console.warn(`Disconnected from ${this.chainSlug} of ${this.apiUrl} (EVM)`);
      this.isApiReady = false;
      this.isReadyHandler = createPromiseHandler<_EvmApi>();
    }
  }
}
