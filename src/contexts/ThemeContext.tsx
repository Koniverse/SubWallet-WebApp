// Copyright 2019-2022 @polkadot/extension-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ThemeProps } from "../types";

import applyPreloadStyle from "@subwallet-webapp/preloadStyle";
import { RootState } from "@subwallet-webapp/stores";
import {
  generateTheme,
  SW_THEME_CONFIGS,
  SwThemeConfig,
} from "@subwallet-webapp/themes";
import { ConfigProvider, theme as reactUiTheme } from "@subwallet/react-ui";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import styled, {
  createGlobalStyle,
  ThemeProvider as StyledComponentThemeProvider,
} from "styled-components";

import { Theme } from "../types";

interface Props {
  children: React.ReactNode;
  themeConfig: SwThemeConfig;
}

const { useToken } = reactUiTheme;

const GlobalStyle = createGlobalStyle<ThemeProps>(({ theme }) => {
  const { extendToken, token } = theme as Theme;

  applyPreloadStyle(extendToken.bodyBackgroundColor);

  return {
    body: {
      fontFamily: token.fontFamily,
      color: token.colorText,
      fontWeight: token.bodyFontWeight,
    },
    pre: {
      fontFamily: "inherit",
      whiteSpace: "pre-wrap",
    },

    ".main-page-container": {
      border: `${token.lineWidth}px ${token.lineType} ${token.colorBgInput}`,
      borderBottomWidth: token.lineWidth * 2,
    },

    ".modal-full": {
      ".ant-sw-modal-content": {
        boxShadow: `inset 0 0 0 ${token.lineWidth}px ${token.colorBgInput}, inset 0 -${token.lineWidth}px 0 ${token.lineWidth}px ${token.colorBgInput}`,

        ".ant-sw-modal-header": {
          boxShadow: `inset 0 ${token.lineWidth}px 0 ${token.lineWidth}px ${token.colorBgInput}`,
          borderRadius: 0,
        },
      },
    },

    ".text-secondary": {
      color: token.colorTextSecondary,
    },

    ".text-tertiary": {
      color: token.colorTextTertiary,
    },

    ".text-light-2": {
      color: token.colorTextLight2,
    },

    ".text-light-4": {
      color: token.colorTextLight4,
    },

    ".common-text": {
      fontSize: token.fontSize,
      lineHeight: token.lineHeight,
    },

    ".sm-text": {
      fontSize: token.fontSizeSM,
      lineHeight: token.lineHeightSM,
    },

    ".mono-text": {
      fontFamily: token.monoSpaceFontFamily,
    },

    ".ml-xs": {
      marginLeft: token.marginXS,
    },

    ".ml-xxs": {
      marginLeft: token.marginXXS,
    },

    ".text-danger": {
      color: token.colorError,
    },

    ".h3-text": {
      fontSize: token.fontSizeHeading3,
      lineHeight: token.lineHeightHeading3,
      fontWeight: token.headingFontWeight,
    },

    ".h4-text": {
      fontSize: token.fontSizeHeading4,
      lineHeight: token.lineHeightHeading4,
      fontWeight: token.headingFontWeight,
    },

    ".h5-text": {
      fontWeight: token.headingFontWeight,
      fontSize: token.fontSizeHeading5,
      lineHeight: token.lineHeightHeading5,
    },

    ".form-space-xs": {
      ".ant-form-item": {
        marginBottom: token.marginXS,
      },
    },

    ".form-space-sm": {
      ".ant-form-item": {
        marginBottom: token.marginSM,
      },
    },

    ".form-space-xxs": {
      ".ant-form-item": {
        marginBottom: token.marginXXS,
      },
    },

    ".form-row": {
      display: "flex",
      gap: token.sizeSM,

      ".ant-form-item": {
        flex: 1,
        overflow: "hidden",
      },
    },

    ".item-disabled": {
      opacity: 0.4,
      cursor: "not-allowed !important",
      backgroundColor: `${token.colorBgSecondary} !important`,
    },

    ".mb-0": {
      marginBottom: 0,
    },
  };
});

function ThemeGenerator({
  children,
  themeConfig,
}: Props): React.ReactElement<Props> {
  const { token } = useToken();

  // Generate theme from config
  const theme = useMemo<Theme>(() => {
    return generateTheme(themeConfig, token);
  }, [themeConfig, token]);

  return (
    <StyledComponentThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      {children}
    </StyledComponentThemeProvider>
  );
}

export interface ThemeProviderProps {
  children: React.ReactNode;
}

const getModalContainer = () =>
  document.getElementById("popup-container") || document.body;
const getPopupContainer = () =>
  document.getElementById("tooltip-container") || document.body;

const TooltipContainer = styled.div`
  z-index: 10000;
`;

export function ThemeProvider({
  children,
}: ThemeProviderProps): React.ReactElement<ThemeProviderProps> {
  const themeName = useSelector((state: RootState) => state.settings.theme);
  const themeConfig = SW_THEME_CONFIGS[themeName];

  return (
    <ConfigProvider
      getModalContainer={getModalContainer}
      getPopupContainer={getPopupContainer}
      theme={themeConfig}
    >
      <ThemeGenerator themeConfig={themeConfig}>
        <TooltipContainer id="tooltip-container" />
        {children}
      </ThemeGenerator>
    </ConfigProvider>
  );
}
