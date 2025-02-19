// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Layout, PageWrapper } from '@subwallet/extension-koni-ui/components';
import SelectAccountType from '@subwallet/extension-koni-ui/components/Account/SelectAccountType';
import CloseIcon from '@subwallet/extension-koni-ui/components/Icon/CloseIcon';
import { DEFAULT_ACCOUNT_TYPES } from '@subwallet/extension-koni-ui/constants/account';
import { IMPORT_ACCOUNT_MODAL } from '@subwallet/extension-koni-ui/constants/modal';
import useCompleteCreateAccount from '@subwallet/extension-koni-ui/hooks/account/useCompleteCreateAccount';
import useGetDefaultAccountName from '@subwallet/extension-koni-ui/hooks/account/useGetDefaultAccountName';
import useGoBackFromCreateAccount from '@subwallet/extension-koni-ui/hooks/account/useGoBackFromCreateAccount';
import useTranslation from '@subwallet/extension-koni-ui/hooks/common/useTranslation';
import useFocusFormItem from '@subwallet/extension-koni-ui/hooks/form/useFocusFormItem';
import useAutoNavigateToCreatePassword from '@subwallet/extension-koni-ui/hooks/router/useAutoNavigateToCreatePassword';
import useDefaultNavigate from '@subwallet/extension-koni-ui/hooks/router/useDefaultNavigate';
import { createAccountSuriV2, validateSeedV2 } from '@subwallet/extension-koni-ui/messaging';
import { ThemeProps, ValidateState } from '@subwallet/extension-koni-ui/types';
import { Form, Icon, Input } from '@subwallet/react-ui';
import CN from 'classnames';
import { FileArrowDown } from 'phosphor-react';
import React, { ChangeEventHandler, useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { KeypairType } from '@polkadot/util-crypto/types';

type Props = ThemeProps;

const FooterIcon = (
  <Icon
    phosphorIcon={FileArrowDown}
    weight='fill'
  />
);

const formName = 'import-seed-phrase-form';
const fieldName = 'seed-phrase';

const Component: React.FC<Props> = ({ className }: Props) => {
  useAutoNavigateToCreatePassword();

  const { t } = useTranslation();
  const { goHome } = useDefaultNavigate();

  const onComplete = useCompleteCreateAccount();
  const onBack = useGoBackFromCreateAccount(IMPORT_ACCOUNT_MODAL);

  const accountName = useGetDefaultAccountName();

  const timeOutRef = useRef<NodeJS.Timer>();

  const [form] = Form.useForm();

  const [keyTypes, setKeyTypes] = useState<KeypairType[]>(DEFAULT_ACCOUNT_TYPES);
  const [validateState, setValidateState] = useState<ValidateState>({});
  const [validating, setValidating] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [changed, setChanged] = useState(false);
  const [seedPhrase, setSeedPhrase] = useState('');

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = useCallback((event) => {
    setChanged(true);
    const val = event.target.value;

    setSeedPhrase(val);
  }, []);

  const onSubmit = useCallback(() => {
    const seed = seedPhrase.trimStart().trimEnd();

    if (seed) {
      setSubmitting(true);
      setTimeout(() => {
        createAccountSuriV2({
          name: accountName,
          suri: seed,
          isAllowed: true,
          types: keyTypes
        })
          .then(() => {
            onComplete();
          })
          .catch((error: Error): void => {
            setValidateState({
              status: 'error',
              message: error.message
            });
          })
          .finally(() => {
            setSubmitting(false);
          });
      }, 300);
    }
  }, [seedPhrase, accountName, keyTypes, onComplete]);

  useEffect(() => {
    let amount = true;

    if (timeOutRef.current) {
      clearTimeout(timeOutRef.current);
    }

    const seed = seedPhrase.trimStart().trimEnd();

    if (amount) {
      if (seed) {
        setValidating(true);
        setValidateState({
          status: 'validating',
          message: ''
        });

        timeOutRef.current = setTimeout(() => {
          validateSeedV2(seed, DEFAULT_ACCOUNT_TYPES)
            .then((res) => {
              if (amount) {
                setValidateState({});
              }
            })
            .catch((e: Error) => {
              if (amount) {
                setValidateState({
                  status: 'error',
                  message: t('Invalid mnemonic seed')
                });
              }
            })
            .finally(() => {
              if (amount) {
                setValidating(false);
              }
            });
        }, 300);
      } else {
        if (changed) {
          setValidateState({
            status: 'error',
            message: t('Mnemonic needs to contain 12, 15, 18, 21, 24 words')
          });
        }
      }
    }

    return () => {
      amount = false;
    };
  }, [seedPhrase, changed, t]);

  useFocusFormItem(form, fieldName);

  return (
    <PageWrapper className={CN(className)}>
      <Layout.WithSubHeaderOnly
        onBack={onBack}
        rightFooterButton={{
          children: validating ? t('Validating') : t('Import account'),
          icon: FooterIcon,
          onClick: onSubmit,
          disabled: !seedPhrase || !!validateState.status || !keyTypes.length,
          loading: validating || submitting
        }}
        subHeaderIcons={[
          {
            icon: <CloseIcon />,
            onClick: goHome
          }
        ]}
        title={t<string>('Import from seed phrase')}
      >
        <div className='container'>
          <div className='description'>
            {t('To import an existing account, please enter seed phrase')}
          </div>
          <Form
            className='form-container'
            form={form}
            name={formName}
          >
            <Form.Item
              name={fieldName}
              validateStatus={validateState.status}
            >
              <Input.TextArea
                className='seed-phrase-input'
                onChange={onChange}
                placeholder={t('Seed phrase')}
                statusHelp={validateState.message}
              />
            </Form.Item>
            <Form.Item>
              <SelectAccountType
                label={t('Select account type')}
                selectedItems={keyTypes}
                setSelectedItems={setKeyTypes}
                withLabel={true}
              />
            </Form.Item>
          </Form>
        </div>
      </Layout.WithSubHeaderOnly>
    </PageWrapper>
  );
};

const ImportSeedPhrase = styled(Component)<Props>(({ theme: { token } }: Props) => {
  return {
    '.container': {
      padding: token.padding
    },

    '.ant-form-item:last-child': {
      marginBottom: 0
    },

    '.description': {
      padding: `0 ${token.padding}px`,
      fontSize: token.fontSizeHeading6,
      lineHeight: token.lineHeightHeading6,
      color: token.colorTextDescription,
      textAlign: 'center'
    },

    '.form-container': {
      marginTop: token.margin
    },

    '.seed-phrase-input': {
      textarea: {
        resize: 'none',
        height: `${token.sizeLG * 6}px !important`
      }
    }
  };
});

export default ImportSeedPhrase;
