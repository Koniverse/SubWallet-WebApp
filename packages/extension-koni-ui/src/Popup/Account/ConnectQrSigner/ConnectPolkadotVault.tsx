// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import DefaultLogosMap from '@subwallet/extension-koni-ui/assets/logo';
import ConnectQrSigner from '@subwallet/extension-koni-ui/Popup/Account/ConnectQrSigner/index';
import { ThemeProps } from '@subwallet/extension-koni-ui/types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

type Props = ThemeProps;

const Component: React.FC<ThemeProps> = () => {
  const { t } = useTranslation();

  return (
    <ConnectQrSigner
      deviceName={t('Polkadot Vault')}
      instructionUrl={''}
      logoUrl={DefaultLogosMap.polkadot_vault}
      subTitle={t('Open Polkadot Vault on your phone to connect wallet')}
      title={t('Connect Polkadot Vault')}
    />
  );
};

const ConnectPolkadotVault = styled(Component)<Props>(({ theme: { token } }: Props) => {
  return {

  };
});

export default ConnectPolkadotVault;
