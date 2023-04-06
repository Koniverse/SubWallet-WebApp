// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import BytesQr from "@subwallet-webapp/components/Qr/Display/BytesQr";
import { ThemeProps } from "@subwallet-webapp/types";
import React, { useMemo } from "react";
import styled from "styled-components";

import { createSignPayload } from "@polkadot/react-qr/util";
import { numberToU8a, u8aConcat, u8aToU8a } from "@polkadot/util";
import { decodeAddress } from "@polkadot/util-crypto";

interface Props extends ThemeProps {
  address: string;
  isHash: boolean;
  genesisHash: string;
  payload: Uint8Array;
  isEthereum: boolean;
  isMessage: boolean;
  size?: string | number;
  style?: React.CSSProperties;
}

const ETHEREUM_ID = new Uint8Array([0x45]);

const CMD = {
  ETHEREUM: {
    SIGN_HASH: 0,
    SIGN_TRANSACTION: 1,
    SIGN_MESSAGE: 2,
  },
  SUBSTRATE: {
    SIGN_MORTAL: 0,
    SIGN_HASH: 1,
    SIGN_IMMORTAL: 2,
    SIGN_MSG: 3,
  },
};

const Component = (props: Props) => {
  const {
    address,
    className,
    genesisHash,
    isEthereum,
    isHash,
    isMessage,
    payload,
    size = 264,
    style,
  } = props;

  const cmd = useMemo(() => {
    if (isEthereum) {
      if (isMessage) {
        return isHash ? CMD.ETHEREUM.SIGN_HASH : CMD.ETHEREUM.SIGN_MESSAGE;
      } else {
        return CMD.ETHEREUM.SIGN_TRANSACTION;
      }
    } else {
      if (isMessage) {
        return CMD.SUBSTRATE.SIGN_MSG;
      } else {
        return isHash ? CMD.SUBSTRATE.SIGN_HASH : CMD.SUBSTRATE.SIGN_IMMORTAL;
      }
    }
  }, [isEthereum, isHash, isMessage]);

  const data = useMemo(() => {
    if (isEthereum) {
      return u8aConcat(
        ETHEREUM_ID,
        numberToU8a(cmd),
        decodeAddress(address),
        u8aToU8a(payload)
      );
    } else {
      // EVM genesisHash have _evm or _anyString at end
      const genesis = genesisHash.split("_")[0];

      return createSignPayload(address, cmd, payload, genesis);
    }
  }, [address, cmd, payload, genesisHash, isEthereum]);

  if (!data) {
    return null;
  }

  return (
    <BytesQr className={className} size={size} style={style} value={data} />
  );
};

const DisplayPayload = styled(Component)<Props>(
  ({ theme: { token } }: Props) => {
    return {};
  }
);

export default DisplayPayload;
