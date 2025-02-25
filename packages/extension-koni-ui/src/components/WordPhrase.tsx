// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import useCopy from '@subwallet/extension-koni-ui/hooks/common/useCopy';
import { ThemeProps } from '@subwallet/extension-koni-ui/types';
import { WordItem } from '@subwallet/extension-koni-ui/types/account';
import { convertToWords } from '@subwallet/extension-koni-ui/utils/account/seedPhrase';
import { Button, Icon } from '@subwallet/react-ui';
import CN from 'classnames';
import { saveAs } from 'file-saver';
import { CopySimple } from 'phosphor-react';
import React, { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

interface Props extends ThemeProps {
  seedPhrase: string;
  enableDownload?: boolean;
}

const Component: React.FC<Props> = (props: Props) => {
  const { className, enableDownload, seedPhrase } = props;

  const { t } = useTranslation();

  const words: Array<Array<WordItem>> = useMemo(() => convertToWords(seedPhrase), [seedPhrase]);

  const onCopy = useCopy(seedPhrase);

  const backupMnemonicSeed = useCallback(() => {
    const blob = new Blob([seedPhrase], { type: 'text/plain' });

    saveAs(blob, 'mnemonic-seed.txt');
  }, [seedPhrase]);

  const onClick = useCallback(() => {
    onCopy();

    if (enableDownload) {
      backupMnemonicSeed();
    }
  }, [backupMnemonicSeed, enableDownload, onCopy]);

  return (
    <div className={CN(className)}>
      <div className='word-container'>
        {
          words.map((arr, _index) => {
            return (
              <div
                className='word-row'
                key={_index}
              >
                {
                  arr.map((item) => {
                    return (
                      <div
                        className='word-item'
                        key={item.label}
                      >
                        <div className='word-index'>{item.index}</div>
                        <div className='word-content'>{item.label}</div>
                      </div>
                    );
                  })
                }
              </div>
            );
          })
        }
      </div>
      <Button
        icon={(
          <Icon phosphorIcon={CopySimple} />
        )}
        onClick={onClick}
        type='ghost'
      >
        {enableDownload ? t('Copy & Save to the clipboard') : t('Copy to clipboard')}
      </Button>
    </div>
  );
};

const WordPhrase = styled(Component)<Props>(({ theme: { token } }: Props) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    gap: token.size,
    alignItems: 'center',

    '.word-container': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: token.sizeXS,

      '.word-row': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: token.sizeXS,

        '.word-item': {
          display: 'flex',
          flexDirection: 'row',
          gap: token.sizeXXS,
          alignItems: 'center',
          padding: `${token.paddingXS}px ${token.padding}px`,
          borderRadius: token.borderRadiusLG,
          backgroundColor: token.colorBgInput,
          fontSize: token.fontSizeHeading6,
          lineHeight: token.lineHeightHeading6,

          '.word-index': {
            color: token.colorTextDescription
          },

          '.word-content': {
            color: token.colorTextBase
          }
        }
      }
    }
  };
});

export default WordPhrase;
