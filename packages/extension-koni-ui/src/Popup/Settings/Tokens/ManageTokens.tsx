// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { _ChainAsset } from '@subwallet/chain-list/types';
import { _isAssetFungibleToken, _isCustomAsset } from '@subwallet/extension-base/services/chain-service/utils';
import { Layout, PageWrapper } from '@subwallet/extension-koni-ui/components';
import EmptyList from '@subwallet/extension-koni-ui/components/EmptyList';
import { FilterModal } from '@subwallet/extension-koni-ui/components/Modal/FilterModal';
import TokenToggleItem from '@subwallet/extension-koni-ui/components/TokenItem/TokenToggleItem';
import { DataContext } from '@subwallet/extension-koni-ui/contexts/DataContext';
import useTranslation from '@subwallet/extension-koni-ui/hooks/common/useTranslation';
import { useFilterModal } from '@subwallet/extension-koni-ui/hooks/modal/useFilterModal';
import useDefaultNavigate from '@subwallet/extension-koni-ui/hooks/router/useDefaultNavigate';
import { RootState } from '@subwallet/extension-koni-ui/stores';
import { ThemeProps } from '@subwallet/extension-koni-ui/types';
import { ButtonProps, Icon, ModalContext, SwList } from '@subwallet/react-ui';
import { Coin, FadersHorizontal, Plus } from 'phosphor-react';
import React, { SyntheticEvent, useCallback, useContext, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

type Props = ThemeProps;

const FILTER_MODAL_ID = 'filterTokenModal';

enum FilterValue {
  ENABLED = 'enabled',
  DISABLED = 'disabled',
  CUSTOM = 'custom'
}

const FILTER_OPTIONS = [
  { label: 'Enabled tokens', value: FilterValue.ENABLED },
  { label: 'Disabled tokens', value: FilterValue.DISABLED },
  { label: 'Custom tokens', value: FilterValue.CUSTOM }
];

function Component ({ className = '' }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const goBack = useDefaultNavigate().goBack;
  const dataContext = useContext(DataContext);
  const { activeModal } = useContext(ModalContext);

  const { assetRegistry, assetSettingMap } = useSelector((state: RootState) => state.assetRegistry);
  const assetItems = useMemo(() => {
    const allFungibleTokens: _ChainAsset[] = [];

    Object.values(assetRegistry).forEach((asset) => {
      if (_isAssetFungibleToken(asset)) {
        allFungibleTokens.push(asset);
      }
    });

    return allFungibleTokens;
  }, [assetRegistry]);
  const { filterSelectionMap, onApplyFilter, onChangeFilterOption, onCloseFilterModal, selectedFilters } = useFilterModal(FILTER_MODAL_ID);
  const filterFunction = useMemo<(item: _ChainAsset) => boolean>(() => {
    return (chainAsset) => {
      if (!selectedFilters.length) {
        return true;
      }

      for (const filter of selectedFilters) {
        if (filter === FilterValue.CUSTOM) {
          if (_isCustomAsset(chainAsset.slug)) {
            return true;
          }
        } else if (filter === FilterValue.ENABLED) {
          if (assetSettingMap[chainAsset.slug] && assetSettingMap[chainAsset.slug].visible) {
            return true;
          }
        } else if (filter === FilterValue.DISABLED) {
          if (!assetSettingMap[chainAsset.slug] || !assetSettingMap[chainAsset.slug].visible) {
            return true;
          }
        }
      }

      return false;
    };
  }, [assetSettingMap, selectedFilters]);

  const searchToken = useCallback((token: _ChainAsset, searchText: string) => {
    const searchTextLowerCase = searchText.toLowerCase();

    return (
      token.name.toLowerCase().includes(searchTextLowerCase) ||
      token.symbol.toLowerCase().includes(searchTextLowerCase)
    );
  }, []);

  const renderTokenItem = useCallback((tokenInfo: _ChainAsset) => {
    return (
      <TokenToggleItem
        assetSettingMap={assetSettingMap}
        key={tokenInfo.slug}
        tokenInfo={tokenInfo}
      />
    );
  }, [assetSettingMap]);

  const emptyTokenList = useCallback(() => {
    return (
      <EmptyList
        emptyMessage={t<string>('Your token will appear here.')}
        emptyTitle={t<string>('No token')}
        phosphorIcon={Coin}
      />
    );
  }, [t]);

  const subHeaderButton: ButtonProps[] = useMemo(() => {
    return [
      {
        icon: (
          <Icon
            phosphorIcon={Plus}
            size='sm'
            type='phosphor'
          />
        ),
        onClick: () => {
          navigate('/settings/tokens/import-token', { state: { isExternalRequest: false } });
        }
      }
    ];
  }, [navigate]);

  const openFilterModal = useCallback((e?: SyntheticEvent) => {
    e && e.stopPropagation();
    activeModal(FILTER_MODAL_ID);
  }, [activeModal]);

  return (
    <PageWrapper
      className={`manage_tokens ${className}`}
      resolve={dataContext.awaitStores(['assetRegistry'])}
    >
      <Layout.Base
        onBack={goBack}
        showBackButton={true}
        showSubHeader={true}
        subHeaderBackground={'transparent'}
        subHeaderCenter={true}
        subHeaderIcons={subHeaderButton}
        subHeaderPaddingVertical={true}
        title={t<string>('Manage tokens')}
      >
        <SwList.Section
          actionBtnIcon={(
            <Icon
              customSize={'20px'}
              phosphorIcon={FadersHorizontal}
              size='sm'
              type='phosphor'
              weight={'fill'}
            />
          )}
          className={'manage_tokens__container'}
          enableSearchInput={true}
          filterBy={filterFunction}
          gridGap={'14px'}
          list={assetItems}
          minColumnWidth={'172px'}
          mode={'boxed'}
          onClickActionBtn={openFilterModal}
          renderItem={renderTokenItem}
          renderWhenEmpty={emptyTokenList}
          searchFunction={searchToken}
          searchMinCharactersCount={2}
          searchPlaceholder={t<string>('Search token')}
          showActionBtn={true}
        />

        <FilterModal
          id={FILTER_MODAL_ID}
          onApplyFilter={onApplyFilter}
          onCancel={onCloseFilterModal}
          onChangeOption={onChangeFilterOption}
          optionSelectionMap={filterSelectionMap}
          options={FILTER_OPTIONS}
        />
      </Layout.Base>
    </PageWrapper>
  );
}

const ManageTokens = styled(Component)<Props>(({ theme: { token } }: Props) => {
  return ({
    '.ant-sw-screen-layout-body': {
      display: 'flex'
    },

    '.ant-sw-list-wrapper.ant-sw-list-wrapper:before': {
      zIndex: 0,
      borderRadius: token.borderRadiusLG
    },

    '.ant-sw-list-section.-boxed-mode .ant-sw-list': {
      paddingLeft: token.padding,
      paddingTop: token.paddingXS,
      paddingBottom: token.paddingXS
    },

    '.ant-sw-list-section.-boxed-mode .ant-sw-list.-ignore-scrollbar': {
      paddingRight: token.padding + 6
    },

    '.ant-network-item.-with-divider': {
      position: 'relative',
      zIndex: 1
    },

    '&__inner': {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    },

    '.manage_tokens__container': {
      paddingTop: token.padding,
      paddingBottom: token.paddingSM,
      flex: 1,

      'button + button': {
        marginLeft: token.marginXS
      }
    },

    '.manage_tokens__right_item_container': {
      marginRight: -token.marginXXS
    }
  });
});

export default ManageTokens;
