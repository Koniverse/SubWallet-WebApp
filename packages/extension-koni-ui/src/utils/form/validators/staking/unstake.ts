// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { BN_ZERO } from '@subwallet/extension-koni-ui/constants';
import { FormRule } from '@subwallet/extension-koni-ui/types';
import { formatBalance } from '@subwallet/extension-koni-ui/utils';
import BigN from 'bignumber.js';

export const validateUnStakeValue = (min: number | string | BigN, max: number | string | BigN, decimals: number, name?: string): FormRule => {
  const minValue = new BigN(min);
  const maxValue = new BigN(max);
  const middleValue = maxValue.minus(minValue);
  const maxString = formatBalance(maxValue, decimals);
  // const middleString = middleValue.div(BN_TEN.pow(decimals)).toString();

  return {
    validator: (_, value: string) => {
      const val = new BigN(value);

      if (val.gt(maxValue)) {
        return Promise.reject(new Error(`${name || 'Value'} must be equal or less than ${maxString}`));
      }

      if (val.lte(BN_ZERO)) {
        return Promise.reject(new Error(`${name || 'Value'} must be greater than 0`));
      }

      if (middleValue.lt(BN_ZERO) && !val.eq(maxValue)) {
        return Promise.reject(new Error(`${name || 'Value'} must be equal ${maxString}`));
      }

      if (val.gt(middleValue) && val.lt(maxValue)) {
        return Promise.reject(new Error('Invalid. If you unstake this amount your staking would fall below minimum stake required'));
      }

      return Promise.resolve();
    }
  };
};
