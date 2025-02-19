// Copyright 2019-2022 @polkadot/extension-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { PageWrapper } from '@subwallet/extension-koni-ui/components';
import { DISCORD_URL, EXTENSION_VERSION, PRIVACY_AND_POLICY_URL, TELEGRAM_URL, TERMS_OF_SERVICE_URL, TWITTER_URL, WEBSITE_URL, WIKI_URL } from '@subwallet/extension-koni-ui/constants/common';
import useNotification from '@subwallet/extension-koni-ui/hooks/common/useNotification';
import useTranslation from '@subwallet/extension-koni-ui/hooks/common/useTranslation';
import useIsPopup from '@subwallet/extension-koni-ui/hooks/dom/useIsPopup';
import useDefaultNavigate from '@subwallet/extension-koni-ui/hooks/router/useDefaultNavigate';
import { keyringLock, windowOpen } from '@subwallet/extension-koni-ui/messaging';
import { Theme, ThemeProps } from '@subwallet/extension-koni-ui/types';
import { openInNewTab } from '@subwallet/extension-koni-ui/utils';
import { BackgroundIcon, Button, ButtonProps, Icon, SettingItem, SwHeader, SwIconProps } from '@subwallet/react-ui';
import { ArrowsOut, ArrowSquareOut, Book, BookBookmark, BookOpen, CaretRight, Coin, DiscordLogo, FrameCorners, GlobeHemisphereEast, Lock, ShareNetwork, ShieldCheck, TelegramLogo, TwitterLogo, X } from 'phosphor-react';
import React, { useCallback, useMemo, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';

type Props = ThemeProps

type SettingItemType = {
  key: string,
  leftIcon: SwIconProps['phosphorIcon'],
  leftIconBgColor: string,
  rightIcon: SwIconProps['phosphorIcon'],
  title: string,
  onClick?: () => void,
  isHidden?: boolean,
};

type SettingGroupItemType = {
  key: string,
  label?: string,
  items: SettingItemType[],
};

function generateLeftIcon (backgroundColor: string, icon: SwIconProps['phosphorIcon']): React.ReactNode {
  return (
    <BackgroundIcon
      backgroundColor={backgroundColor}
      phosphorIcon={icon}
      size='sm'
      type='phosphor'
      weight='fill'
    />
  );
}

function generateRightIcon (icon: SwIconProps['phosphorIcon']): React.ReactNode {
  return (
    <Icon
      className='__right-icon'
      customSize={'20px'}
      phosphorIcon={icon}
      type='phosphor'
    />
  );
}

function Component ({ className = '' }: Props): React.ReactElement<Props> {
  const navigate = useNavigate();
  const { token } = useTheme() as Theme;
  const isPopup = useIsPopup();
  const notify = useNotification();
  const { goHome } = useDefaultNavigate();
  const { t } = useTranslation();

  const [locking, setLocking] = useState(false);

  const onLock = useCallback(() => {
    setLocking(true);

    setTimeout(() => {
      keyringLock()
        .then(() => {
          goHome();
        })
        .catch((e: Error) => {
          notify({
            message: e.message,
            type: 'error'
          });
        })
        .finally(() => {
          setLocking(false);
        });
    }, 100);
  }, [goHome, notify]);

  // todo: i18n all titles, labels below
  const SettingGroupItemType: SettingGroupItemType[] = [
    {
      key: 'general',
      items: [
        {
          key: 'expand-view',
          leftIcon: FrameCorners,
          leftIconBgColor: token.colorPrimary,
          rightIcon: ArrowsOut,
          title: 'Expand view',
          onClick: () => {
            windowOpen('/').catch(console.error);
          },
          isHidden: !isPopup
        },
        {
          key: 'general-settings',
          leftIcon: GlobeHemisphereEast,
          leftIconBgColor: token['magenta-6'],
          rightIcon: CaretRight,
          title: 'General settings',
          onClick: () => {
            navigate('/settings/general');
          }
        },
        {
          key: 'security-settings',
          leftIcon: ShieldCheck,
          leftIconBgColor: token['green-6'],
          rightIcon: CaretRight,
          title: 'Security settings',
          onClick: () => {
            navigate('/settings/security', { state: true });
          }
        },
        {
          key: 'manage-address-book',
          leftIcon: BookBookmark,
          leftIconBgColor: token['blue-6'],
          rightIcon: CaretRight,
          title: 'Manage address book',
          onClick: () => {
            navigate('/settings/address-book');
          }
        }
      ]
    },
    {
      key: 'networks-&-tokens',
      label: 'Networks & tokens',
      items: [
        {
          key: 'manage-networks',
          leftIcon: ShareNetwork,
          leftIconBgColor: token['purple-7'],
          rightIcon: CaretRight,
          title: 'Manage networks',
          onClick: () => {
            navigate('/settings/chains/manage');
          }
        },
        {
          key: 'manage-tokens',
          leftIcon: Coin,
          leftIconBgColor: token['gold-6'],
          rightIcon: CaretRight,
          title: 'Manage tokens',
          onClick: () => {
            navigate('/settings/tokens/manage');
          }
        }
      ]
    },
    {
      key: 'community-&-support',
      label: 'Community & support',
      items: [
        {
          key: 'twitter',
          leftIcon: TwitterLogo,
          leftIconBgColor: token['blue-6'],
          rightIcon: ArrowSquareOut,
          title: 'Twitter',
          onClick: openInNewTab(TWITTER_URL)
        },
        {
          key: 'discord',
          leftIcon: DiscordLogo,
          leftIconBgColor: token['geekblue-8'],
          rightIcon: ArrowSquareOut,
          title: 'Discord',
          onClick: openInNewTab(DISCORD_URL)
        },
        {
          key: 'telegram',
          leftIcon: TelegramLogo,
          leftIconBgColor: token['blue-5'],
          rightIcon: ArrowSquareOut,
          title: 'Telegram',
          onClick: openInNewTab(TELEGRAM_URL)
        }
      ]
    },
    {
      key: 'about',
      label: 'About SubWallet',
      items: [
        {
          key: 'website',
          leftIcon: ShieldCheck,
          leftIconBgColor: token['red-6'],
          rightIcon: ArrowSquareOut,
          title: 'Website',
          onClick: openInNewTab(WEBSITE_URL)
        },
        {
          key: 'user-manual',
          leftIcon: Book,
          leftIconBgColor: token['green-6'],
          rightIcon: ArrowSquareOut,
          title: 'User guide',
          onClick: openInNewTab(WIKI_URL)
        },
        {
          key: 'term-of-service',
          leftIcon: BookOpen,
          leftIconBgColor: token['volcano-7'],
          rightIcon: ArrowSquareOut,
          title: 'Terms of service',
          onClick: openInNewTab(TERMS_OF_SERVICE_URL)
        },
        {
          key: 'privacy-policy',
          leftIcon: BookBookmark,
          leftIconBgColor: token['geekblue-6'],
          rightIcon: ArrowSquareOut,
          title: 'Privacy policy',
          onClick: openInNewTab(PRIVACY_AND_POLICY_URL)
        }
      ]
    }
  ];

  const headerIcons = useMemo<ButtonProps[]>(() => {
    return [
      {
        icon: (
          <Icon
            customSize={'24px'}
            phosphorIcon={X}
            type='phosphor'
            weight={'bold'}
          />
        ),
        onClick: goHome
      }
    ];
  }, [goHome]);

  return (
    <PageWrapper className={`settings ${className}`}>
      <>
        <SwHeader
          left='logo'
          onClickLeft={goHome}
          rightButtons={headerIcons}
          showLeftButton={true}
        >
          {t('Settings')}
        </SwHeader>

        <div className={'__scroll-container'}>
          {
            SettingGroupItemType.map((group) => {
              return (
                <div
                  className={'__group-container'}
                  key={group.key}
                >
                  {!!group.label && (<div className='__group-label'>{group.label}</div>)}

                  <div className={'__group-content'}>
                    {group.items.map((item) => item.isHidden
                      ? null
                      : (
                        <SettingItem
                          className={'__setting-item'}
                          key={item.key}
                          leftItemIcon={generateLeftIcon(item.leftIconBgColor, item.leftIcon)}
                          name={t(item.title)}
                          onPressItem={item.onClick}
                          rightItem={generateRightIcon(item.rightIcon)}
                        />
                      ))}
                  </div>
                </div>
              );
            })
          }

          <Button
            block
            icon={
              <Icon
                phosphorIcon={Lock}
                type='phosphor'
                weight={'fill'}
              />
            }
            loading={locking}
            onClick={onLock}
            schema={'secondary'}
          >
            {t('Lock')}
          </Button>

          <div className={'__version'}>
          SubWallet v {EXTENSION_VERSION}
          </div>
        </div>

        <Outlet />
      </>
    </PageWrapper>
  );
}

export const Settings = styled(Component)<Props>(({ theme: { token } }: Props) => {
  return ({
    height: '100%',
    backgroundColor: token.colorBgDefault,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',

    '.ant-sw-header-container': {
      paddingTop: token.padding,
      paddingBottom: token.padding,
      backgroundColor: token.colorBgDefault
    },

    '.ant-sw-header-center-part': {
      color: token.colorTextLight1,
      fontSize: token.fontSizeHeading4,
      lineHeight: token.lineHeightHeading4,
      fontWeight: token.headingFontWeight
    },

    '.__scroll-container': {
      overflow: 'auto',
      paddingTop: token.padding,
      paddingRight: token.padding,
      paddingLeft: token.padding,
      paddingBottom: token.paddingLG
    },

    '.__group-label': {
      color: token.colorTextLight3,
      fontSize: token.fontSizeSM,
      lineHeight: token.lineHeightSM,
      marginBottom: token.margin,
      textTransform: 'uppercase'
    },

    '.__group-container': {
      paddingBottom: token.paddingLG
    },

    '.__setting-item + .__setting-item': {
      marginTop: token.marginXS
    },

    '.ant-web3-block-right-item': {
      minWidth: 40,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: -token.marginXS,
      color: token['gray-4']
    },

    '.__setting-item:hover .ant-web3-block-right-item': {
      color: token['gray-6']
    },

    '.__version': {
      paddingTop: token.padding,
      textAlign: 'center',
      color: token.colorTextLight3,
      fontSize: token.size,
      lineHeight: token.lineHeight
    }
  });
});

export default Settings;
