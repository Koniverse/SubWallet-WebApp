// Copyright 2019-2022 @subwallet/extension-base authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { AmountData, BaseRequestSign, ChainType, ExtrinsicDataTypeMap, ExtrinsicStatus, ExtrinsicType, ValidateTransactionResponse } from '@subwallet/extension-base/background/KoniTypes';
import EventEmitter from 'eventemitter3';
import { TransactionConfig } from 'web3-core';

import { SubmittableExtrinsic } from '@polkadot/api/promise/types';
import { EventRecord } from '@polkadot/types/interfaces';

export interface SWTransaction extends ValidateTransactionResponse, Partial<Pick<BaseRequestSign, 'ignoreWarnings'>> {
  id: string;
  url?: string;
  isInternal: boolean,
  chain: string;
  chainType: ChainType;
  address: string;
  data: ExtrinsicDataTypeMap[ExtrinsicType];
  status: ExtrinsicStatus;
  extrinsicHash: string;
  extrinsicType: ExtrinsicType;
  createdAt: number;
  updatedAt: number;
  estimateFee?: AmountData,
  transaction: SubmittableExtrinsic | TransactionConfig;
  additionalValidator?: (inputTransaction: SWTransactionResponse) => Promise<void>;
  eventsHandler?: (eventEmitter: TransactionEmitter) => void;
}

export type SWTransactionResult = Omit<SWTransaction, 'transaction' | 'additionalValidator' | 'eventsHandler'>

type SwInputBase = Pick<SWTransaction, 'address' | 'url' | 'data' | 'extrinsicType' | 'chain' | 'chainType' | 'ignoreWarnings' | 'transferNativeAmount'>
& Partial<Pick<SWTransaction, 'additionalValidator' | 'eventsHandler'>>;
export interface SWTransactionInput extends SwInputBase {
  transaction?: SWTransaction['transaction'] | null;
  warnings?: SWTransaction['warnings'];
  errors?: SWTransaction['errors'];
  edAsWarning?: boolean;
  isTransferAll?: boolean;
}

export type SWTransactionResponse = SwInputBase & Pick<SWTransaction, 'warnings' | 'errors'> & Partial<Pick<SWTransaction, 'id' | 'extrinsicHash' | 'status' | 'estimateFee'>>;

export type ValidateTransactionResponseInput = SWTransactionInput;

export type TransactionEmitter = EventEmitter<TransactionEventMap>;

export interface TransactionEventResponse extends ValidateTransactionResponse {
  id: string,
  extrinsicHash?: string,
  blockHash?: string
  blockNumber?: number,
  eventLogs?: EventRecord[],
  nonce?: number,
  startBlock?: number,
}
export interface TransactionEventMap {
  send: (response: TransactionEventResponse) => void;
  signed: (response: TransactionEventResponse) => void;
  extrinsicHash: (response: TransactionEventResponse) => void;
  error: (response: TransactionEventResponse) => void;
  success: (response: TransactionEventResponse) => void;
}
