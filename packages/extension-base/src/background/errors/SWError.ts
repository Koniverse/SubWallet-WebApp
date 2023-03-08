// Copyright 2019-2022 @subwallet/extension-koni authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { SWError as SWErrorType } from '@subwallet/extension-base/background/KoniTypes';

export class SWError extends Error implements SWErrorType {
  errorType: string;
  code: number | undefined;
  data: unknown | undefined;

  constructor (errorType: string, message: string, code?: number, data?: unknown) {
    super(message);

    this.errorType = errorType;
    this.code = code;
    this.data = data;
  }
}
