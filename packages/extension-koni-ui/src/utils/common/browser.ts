// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { SELECTED_CREATE_ACCOUNT_TYPE_KEY } from '@subwallet/extension-koni-ui/constants';
import Bowser from 'bowser';

import { KeypairType } from '@polkadot/util-crypto/types';

export const openInNewTab = (url: string) => {
  return () => {
    window.open(url, '_blank');
  };
};

export const getBrowserName = (): string => {
  return (localStorage.getItem('browserInfo') || Bowser.getParser(window.navigator.userAgent).getBrowserName());
};

export const isFirefox = (): boolean => {
  return getBrowserName().toLowerCase() === 'firefox';
};

export const setSelectedAccountTypes = (keypairTypes: KeypairType[]) => {
  localStorage.setItem(SELECTED_CREATE_ACCOUNT_TYPE_KEY, JSON.stringify(keypairTypes));
};
