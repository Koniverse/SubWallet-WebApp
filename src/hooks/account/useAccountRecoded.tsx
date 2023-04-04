// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import useChainInfo from "@subwallet-webapp/hooks/chain/useChainInfo";
import { RootState } from "@subwallet-webapp/stores";
import { Recoded } from "@subwallet-webapp/types";
import { recodeAddress } from "@subwallet-webapp/util";
import { useMemo } from "react";
import { useSelector } from "react-redux";

import { KeypairType } from "@polkadot/util-crypto/types";

export default function useAccountRecoded(
  address: string,
  genesisHash?: string | null,
  givenType: KeypairType = "sr25519"
): Recoded {
  const accounts = useSelector(
    (state: RootState) => state.accountState.accounts
  );
  const account = useMemo(
    () => accounts.find((account) => account.address === address),
    [accounts, address]
  );
  const networkInfo = useChainInfo(
    undefined,
    account?.originGenesisHash || genesisHash || account?.genesisHash
  );

  return useMemo(
    () => recodeAddress(address, accounts, networkInfo, givenType),
    [accounts, address, givenType, networkInfo]
  );
}
