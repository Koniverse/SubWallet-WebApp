// Copyright 2019-2022 @subwallet/web-runner authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { RequestSignatures, TransportRequestMessage, TransportResponseMessage } from '@subwallet/extension-base/background/types';
import { PORT_CONTENT, PORT_EXTENSION, PORT_MOBILE } from '@subwallet/extension-base/defaults';
import handlers from '@subwallet/extension-base/koni/background/handlers';

export interface CustomResponse<T> {
  id: string,
  response: T,
  error?: string
}

export type PageStatus = CustomResponse<{ status: 'init' | 'load' | 'crypto_ready' }>

export function responseMessage (response: TransportResponseMessage<keyof RequestSignatures> | PageStatus) {
  // @ts-ignore
  if (window.ReactNativeWebView) {
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    window.ReactNativeWebView.postMessage(JSON.stringify(response));
  } else {
    console.log('Post message in browser ', response);
  }
}

export function setupHandlers () {
  window.addEventListener('message', (ev) => {
    const data = ev.data as TransportRequestMessage<keyof RequestSignatures>;
    const port = {
      name: PORT_EXTENSION,
      sender: { url: data.origin || ev.origin },
      postMessage: responseMessage,
      onDisconnect: {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        addListener: () => {
        }
      }
    };

    if (data.id && data.message) {
      if (data.message.startsWith('mobile')) {
        port.name = PORT_MOBILE;
      } else if (data.message.startsWith('pri')) {
        port.name = PORT_EXTENSION;
      } else {
        port.name = PORT_CONTENT;
      }

      // @ts-ignore
      handlers(data, port);
    }
  });
}
