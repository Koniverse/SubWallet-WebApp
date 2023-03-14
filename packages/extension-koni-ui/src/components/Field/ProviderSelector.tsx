// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { _ChainInfo } from '@subwallet/chain-list/types';
import { BasicInputWrapper } from '@subwallet/extension-koni-ui/components/Field/index';
import useTranslation from '@subwallet/extension-koni-ui/hooks/common/useTranslation';
import { Theme, ThemeProps } from '@subwallet/extension-koni-ui/types';
import { BackgroundIcon, Button, Icon, InputRef, ModalContext, SelectModal, SettingItem } from '@subwallet/react-ui';
import { CheckCircle, PlusCircle, ShareNetwork } from 'phosphor-react';
import React, { ForwardedRef, forwardRef, useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';

interface Props extends ThemeProps, BasicInputWrapper {
  chainInfo: _ChainInfo,
  disabled: boolean
}

interface ProviderItemType {
  value: string,
  label: string
}

const Component = ({ chainInfo, className = '', disabled, id = 'provider-selector', label, onChange, value }: Props, ref: ForwardedRef<InputRef>): React.ReactElement<Props> => {
  const { t } = useTranslation();
  const { token } = useTheme() as Theme;
  const navigate = useNavigate();
  const modalContext = useContext(ModalContext);

  const providerValueList = useCallback(() => {
    return Object.entries(chainInfo.providers).map(([key, provider]) => {
      return {
        value: key,
        label: provider
      } as ProviderItemType;
    });
  }, [chainInfo.providers]);

  const _onSelectItem = useCallback((value: string) => {
    onChange && onChange({ target: { value } });
  }, [onChange]);

  const renderItem = useCallback((item: ProviderItemType, selected: boolean) => {
    return (
      <SettingItem
        leftItemIcon={<BackgroundIcon
          backgroundColor={token['gray-4']}
          iconColor={token.colorTextLight1}
          phosphorIcon={ShareNetwork}
          size={'sm'}
          type={'phosphor'}
          weight={'bold'}
        />}
        name={item.label}
        rightItem={selected && <Icon
          customSize={'20px'}
          iconColor={token.colorSuccess}
          phosphorIcon={CheckCircle}
          type='phosphor'
          weight={'fill'}
        />}
      />
    );
  }, [token]);

  const renderSelectedProvider = useCallback((item: ProviderItemType) => {
    return (
      <div className={'provider_selector__selected_label'}>{item.label}</div>
    );
  }, []);

  const handleAddProvider = useCallback(() => {
    modalContext.inactiveModal(id);
    navigate('/settings/chains/add-provider', { state: chainInfo.slug });
  }, [chainInfo.slug, id, modalContext, navigate]);

  const footerButton = useCallback(() => {
    return (
      <Button
        block={true}
        icon={<Icon
          customSize={'28px'}
          iconColor={token.colorTextLight1}
          phosphorIcon={PlusCircle}
          type={'phosphor'}
          weight={'fill'}
        />}
        onClick={handleAddProvider}
      >
        {t('Add new provider')}
      </Button>
    );
  }, [handleAddProvider, t, token.colorTextLight1]);

  return (
    <>
      <SelectModal
        className={`${className} provider_selector__modal`}
        disabled={disabled}
        footer={footerButton()}
        id={id}
        inputClassName={`${className} provider_selector__input`}
        itemKey={'value'}
        items={providerValueList()}
        label={label}
        onSelect={_onSelectItem}
        placeholder={t('Select provider')}
        prefix={<Icon
          customSize={'24px'}
          iconColor={token['gray-4']}
          phosphorIcon={ShareNetwork}
          type={'phosphor'}
          weight={'bold'}
        />}
        renderItem={renderItem}
        renderSelected={renderSelectedProvider}
        selected={value || ''}
        title={t('Select provider')}
      />
    </>
  );
};

export const ProviderSelector = styled(forwardRef(Component))<Props>(({ theme: { token } }: Props) => {
  return ({
    '.provider_selector__selected_label': {
      color: token.colorTextLight1,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },

    '.ant-web3-block .ant-web3-block-right-item': {
      marginRight: 0
    },

    '.ant-sw-modal-footer': {
      borderTop: 0,
      margin: 0,
      padding: 0
    },

    '.ant-setting-item .ant-setting-item-name': {
      whiteSpace: 'nowrap'
    }
  });
});
