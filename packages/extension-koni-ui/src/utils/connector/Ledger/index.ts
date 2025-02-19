// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TFunction } from 'i18next';

export const convertLedgerWarning = (message: string, t: TFunction) => {
  if (message.includes('Locked device (0x5515)')) {
    return t('Please unlock your Ledger');
  } else {
    return null;
  }
};

export const convertLedgerError = (message: string, t: TFunction, network: string) => {
  if (message.includes('App does not seem to be open') || message.includes('CLA_NOT_SUPPORTED (0x6e00)') || message.includes('Unknown Status Code: 28161')) {
    return t('Open "{{network}}" on Ledger to connect', { replace: { network: network } });
  } else {
    return t('Fail to connect. Click to retry');
  }
};
