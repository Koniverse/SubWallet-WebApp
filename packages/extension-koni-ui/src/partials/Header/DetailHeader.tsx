// Copyright 2019-2022 @polkadot/extension-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { AccountJson } from '@subwallet/extension-base/background/types';
import cloneLogo from '@subwallet/extension-koni-ui/assets/clone.svg';
import moreButtonDark from '@subwallet/extension-koni-ui/assets/dots-three-vertical-dark.svg';
import moreButtonLight from '@subwallet/extension-koni-ui/assets/dots-three-vertical-light.svg';
import EyeIcon from '@subwallet/extension-koni-ui/assets/icon/eye.svg';
import { AccountContext } from '@subwallet/extension-koni-ui/components';
import Tooltip from '@subwallet/extension-koni-ui/components/Tooltip';
import { useGetCurrentAuth } from '@subwallet/extension-koni-ui/hooks/useGetCurrentAuth';
import useOutsideClick from '@subwallet/extension-koni-ui/hooks/useOutsideClick';
import useToast from '@subwallet/extension-koni-ui/hooks/useToast';
import useTranslation from '@subwallet/extension-koni-ui/hooks/useTranslation';
import { editAccount } from '@subwallet/extension-koni-ui/messaging';
import AccountAction from '@subwallet/extension-koni-ui/partials/AccountAction';
import HeaderEditName from '@subwallet/extension-koni-ui/partials/HeaderEditName';
import { RootState } from '@subwallet/extension-koni-ui/stores';
import { ThemeProps } from '@subwallet/extension-koni-ui/types';
import { isAccountAll } from '@subwallet/extension-koni-ui/util';
import CN from 'classnames';
import React, { useCallback, useContext, useMemo, useRef, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { isEthereumAddress } from '@polkadot/util-crypto';

interface Props extends ThemeProps {
  className?: string,
  popupTheme: string,
  toggleVisibility: () => void,
  currentAccount: AccountJson,
  toggleZeroBalances: () => void,
  formatted: string | null,
  isShowZeroBalances?: boolean,
}

interface EditState {
  isEditing: boolean;
  toggleActions: number;
}

let tooltipId = 0;

enum ConnectionStatement {
  UN_AUTH='UN_AUTH',
  AUTHED='AUTHED',
  PARTIAL_AUTHED='PARTIAL_AUTHED',
  BANNED='BANNED'
}

function DetailHeader ({ className = '',
  currentAccount,
  formatted,
  isShowZeroBalances,
  popupTheme,
  // toggleVisibility,
  toggleZeroBalances }: Props): React.ReactElement {
  const actionsRef = useRef(null);

  const { t } = useTranslation();
  const currentAuth = useGetCurrentAuth();

  const { currentNetwork } = useSelector((state: RootState) => state);
  const { accounts } = useContext(AccountContext);

  const isAllAccount = isAccountAll(currentAccount.address);

  const connectionState = useMemo((): ConnectionStatement => {
    if (currentAuth) {
      if (!currentAuth.isAllowed) {
        return ConnectionStatement.BANNED;
      }

      const type = currentAuth.accountAuthType;
      const allowedMap = currentAuth.isAllowedMap;

      const filterType = (address: string) => {
        if (type === 'both') {
          return true;
        }

        const _type = type || 'substrate';

        return _type === 'substrate' ? !isEthereumAddress(address) : isEthereumAddress(address);
      };

      if (!isAllAccount) {
        const _allowedMap: Record<string, boolean> = {};

        Object.entries(allowedMap)
          .filter(([address]) => filterType(address))
          .forEach(([address, value]) => {
            _allowedMap[address] = value;
          });

        const isAllowed = _allowedMap[currentAccount.address];

        if (isAllowed === undefined) {
          return ConnectionStatement.UN_AUTH;
        } else {
          return isAllowed ? ConnectionStatement.AUTHED : ConnectionStatement.BANNED;
        }
      } else {
        const _accounts = accounts.filter(({ address }) => !isAccountAll(address));

        const numberAccounts = _accounts.filter(({ address }) => filterType(address)).length;
        const numberAllowedAccounts = Object.entries(allowedMap)
          .filter(([address]) => filterType(address))
          .filter(([, value]) => value)
          .length;

        if (numberAllowedAccounts === 0) {
          return ConnectionStatement.BANNED;
        } else {
          if (numberAllowedAccounts > 0 && numberAllowedAccounts < numberAccounts) {
            return ConnectionStatement.PARTIAL_AUTHED;
          } else {
            return ConnectionStatement.AUTHED;
          }
        }
      }
    } else {
      return ConnectionStatement.UN_AUTH;
    }
  }, [currentAccount.address, currentAuth, isAllAccount, accounts]);

  const [{ isEditing }, setEditing] = useState<EditState>({ isEditing: false, toggleActions: 0 });
  const [isActionOpen, setShowAccountAction] = useState(false);
  const { show } = useToast();
  const [trigger] = useState(() => `overview-btn-${++tooltipId}`);

  const _toggleEdit = useCallback(
    (): void => {
      setEditing(({ toggleActions }) => ({ isEditing: !isEditing, toggleActions: ++toggleActions }));
      setShowAccountAction(false);
    },
    [isEditing]
  );

  const _toggleZeroBalances = useCallback(
    (): void => {
      toggleZeroBalances && toggleZeroBalances();
      setShowAccountAction(false);
    },
    [toggleZeroBalances]
  );

  useOutsideClick(actionsRef, (): void => {
    isActionOpen && setShowAccountAction(!isActionOpen);
  });

  const visibleClassName = useMemo((): string => {
    switch (connectionState) {
      case ConnectionStatement.AUTHED:
        return 'authed';
      case ConnectionStatement.PARTIAL_AUTHED:
        return 'partial-authed';
      case ConnectionStatement.BANNED:
        return 'banned';
      case ConnectionStatement.UN_AUTH:
      default:
        return 'un-auth';
    }
  }, [connectionState]);

  const _toggleAccountAction = useCallback(
    (): void => setShowAccountAction((isActionOpen) => !isActionOpen),
    []
  );

  const _onCopy = useCallback(
    () => show(t('Copied')),
    [show, t]
  );

  const ellipsisCenterStr = useCallback(
    (str: string | undefined) => {
      if (str && str.length > 35) {
        return str.substr(0, 6) + '...' + str.substr(str.length - 6, str.length);
      }

      return str;
    },
    []
  );

  const _saveChanges = useCallback(
    (editedName: string): void => {
      currentAccount &&
      editAccount(currentAccount.address, editedName)
        .catch(console.error);

      _toggleEdit();
    },
    [currentAccount, _toggleEdit]
  );

  return (
    <div className={`detail-header ${className}`}>
      <div className='detail-header__part-1'>
        <div
          className='detail-header-connect-status-btn'
          data-for={trigger}
          data-tip={true}
        >
          <img
            alt='Connect Icon'
            className={CN('detail-header-connect-status-btn__icon', visibleClassName)}
            src={EyeIcon}
          />
          <Tooltip
            text={'Account visibility'}
            trigger={trigger}
          />
        </div>
      </div>

      <div className='detail-header__part-2'>
        {!isEditing && (
          <div className='detail-header-account-info'>
            {isAllAccount
              ? <div className='detail-header__all-account'>
                {t<string>('All Accounts')}
              </div>
              : <div className='detail-header-account-info-wrapper'>
                <span className='detail-header-account-info__name'>{currentAccount?.name}</span>
                <CopyToClipboard text={(formatted && formatted) || ''}>
                  <div
                    className='detail-header-account-info__formatted-wrapper'
                    onClick={_onCopy}
                  >
                    <span
                      className='detail-header-account-info__formatted'
                    >{ellipsisCenterStr(formatted || currentAccount?.address)}</span>
                    <img
                      alt='copy'
                      className='detail-header-account-info__copy-icon'
                      src={cloneLogo}
                    />
                  </div>
                </CopyToClipboard>
              </div>
            }
          </div>
        )}
        {isEditing && currentAccount && (
          <HeaderEditName
            className='kn-l-edit-name'
            defaultValue={currentAccount.name}
            isFocused
            label={' '}
            onBlur={_saveChanges}
          />
        )}
      </div>

      <div className='detail-header__part-3'>
        {!(isAllAccount && currentNetwork.networkKey !== 'all') &&
        <div
          className={`detail-header-more-button ${isActionOpen ? 'pointer-events-none' : ''}`}
          onClick={_toggleAccountAction}
        >
          <img
            alt='more'
            className={'detail-header-more-button__icon'}
            src={popupTheme === 'dark' ? moreButtonDark : moreButtonLight}
          />
        </div>}
      </div>

      {isActionOpen && (
        <AccountAction
          isShowZeroBalances={isShowZeroBalances}
          reference={actionsRef}
          toggleEdit={_toggleEdit}
          toggleZeroBalances={_toggleZeroBalances}
        />
      )}
    </div>
  );
}

export default styled(DetailHeader)(({ theme }: Props) => `
  display: flex;
  align-items: center;
  height: 40px;
  padding-bottom: 8px;
  padding-top: 6px;

  .detail-header__part-1 {
    padding-left: 10px;
  }

  .detail-header__part-2 {
    flex: 1;
  }

  .detail-header__part-3 {
    padding-right: 6px;
  }

  .detail-header-connect-status-btn {
    min-width: 40px;
    height: 40px;
    align-items: center;
    display: flex;
    justify-content: center;
    cursor: pointer;
  }

  .detail-header-connect-status-btn__icon {
    width: 15px;

    &.authed {
      filter: ${theme.filterSuccess};
    }

    &.banned {
      filter: ${theme.filterError};
    }

    &.un-auth {
      filter: ${theme.filterDefault};
    }

    &.partial-authed {
      filter: ${theme.filterWarning};
    }
  }

  .detail-header-account-info {
    display: flex;
    align-items: baseline;
  }

  .detail-header-account-info__name {
    font-size: 18px;
    font-weight: 500;
    margin-right: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 180px;
    overflow: hidden;
  }

  .detail-header__all-account {
    font-size: 18px;
    font-weight: 500;
    // padding-left: 25px;
  }

  .detail-header-account-info-wrapper {
    display: flex;
  }

  .detail-header-account-info__formatted-wrapper {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: ${theme.textColor2};
  }

  .detail-header-account-info__formatted {
    margin-right: 8px;
    font-size: 14px;
    font-weight: 400;
    font-weight: 400;
  }

  .detail-header-more-button {
    min-width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .detail-header-more-button__icon {
    width: 32px;
  }
`);
