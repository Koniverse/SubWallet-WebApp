// Copyright 2019-2022 @polkadot/extension-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { CrowdloanParaState } from "@subwallet/extension-base/background/KoniTypes";
import { FilterModal, Layout, PageWrapper } from "@subwallet-webapp/components";
import EmptyList from "@subwallet-webapp/components/EmptyList";
import { DataContext } from "@subwallet-webapp/contexts/DataContext";
import useTranslation from "@subwallet-webapp/hooks/common/useTranslation";
import { useFilterModal } from "@subwallet-webapp/hooks/modal/useFilterModal";
import useGetCrowdloanList from "@subwallet-webapp/hooks/screen/crowdloan/useGetCrowdloanList";
import { ThemeProps } from "@subwallet-webapp/types";
import { CrowdloanItemType } from "@subwallet-webapp/types/crowdloan";
import {
  CrowdloanItem,
  Icon,
  ModalContext,
  SwList,
  Tag,
} from "@subwallet/react-ui";
import { FadersHorizontal, Rocket } from "phosphor-react";
import React, { SyntheticEvent, useCallback, useContext, useMemo } from "react";
import styled from "styled-components";

type Props = ThemeProps;

enum FilterValue {
  POLKADOT_PARACHAIN = "Polkadot parachain",
  KUSAMA_PARACHAIN = "Kusama parachain",
  WINNER = "completed",
  FAIL = "failed",
}

function getTagColor(paraState?: CrowdloanParaState) {
  if (!paraState) {
    return "default";
  }

  if (paraState.valueOf() === CrowdloanParaState.COMPLETED.valueOf()) {
    return "success";
  }

  if (paraState === CrowdloanParaState.FAILED.valueOf()) {
    return "error";
  }

  if (paraState === CrowdloanParaState.ONGOING.valueOf()) {
    return "warning";
  }

  return "default";
}

function getRelayParentKey(groupDisplayName: string) {
  if (groupDisplayName === "Polkadot parachain") {
    return "polkadot";
  } else {
    return "kusama";
  }
}

const FILTER_MODAL_ID = "crowdloan-filter-modal";

function Component({ className = "" }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();
  const dataContext = useContext(DataContext);
  const items: CrowdloanItemType[] = useGetCrowdloanList();
  const { activeModal } = useContext(ModalContext);
  const {
    filterSelectionMap,
    onApplyFilter,
    onChangeFilterOption,
    onCloseFilterModal,
    selectedFilters,
  } = useFilterModal(FILTER_MODAL_ID);

  const filterOptions = useMemo(
    () => [
      { label: t("Polkadot parachain"), value: FilterValue.POLKADOT_PARACHAIN },
      { label: t("Kusama parachain"), value: FilterValue.KUSAMA_PARACHAIN },
      { label: t("Win"), value: FilterValue.WINNER },
      { label: t("Fail"), value: FilterValue.FAIL },
    ],
    [t]
  );

  const filterFunction = useMemo<(item: CrowdloanItemType) => boolean>(() => {
    return (item) => {
      if (!selectedFilters.length) {
        return true;
      }

      for (const filter of selectedFilters) {
        if (filter === FilterValue.POLKADOT_PARACHAIN) {
          if (item.relayParentDisplayName === "Polkadot parachain") {
            return true;
          }
        } else if (filter === FilterValue.KUSAMA_PARACHAIN) {
          if (item.relayParentDisplayName === "Kusama parachain") {
            return true;
          }
        } else if (filter === FilterValue.WINNER) {
          if (item.paraState === CrowdloanParaState.COMPLETED) {
            return true;
          }
        } else if (filter === FilterValue.FAIL) {
          if (item.paraState === CrowdloanParaState.FAILED) {
            return true;
          }
        }
      }

      return false;
    };
  }, [selectedFilters]);

  // filter
  const onClickActionBtn = useCallback(
    (e?: SyntheticEvent) => {
      e && e.stopPropagation();
      activeModal(FILTER_MODAL_ID);
    },
    [activeModal]
  );

  const searchFunction = useCallback(
    (item: CrowdloanItemType, searchText: string) => {
      const searchTextLowerCase = searchText.toLowerCase();

      return item.chainDisplayName.toLowerCase().includes(searchTextLowerCase);
    },
    []
  );

  // render item
  const getParaStateLabel = useCallback(
    (paraState?: CrowdloanParaState) => {
      if (!paraState) {
        return "";
      }

      if (paraState.valueOf() === CrowdloanParaState.COMPLETED.valueOf()) {
        return t("Win");
      }

      if (paraState === CrowdloanParaState.FAILED.valueOf()) {
        return t("Fail");
      }

      if (paraState === CrowdloanParaState.ONGOING.valueOf()) {
        return t("Active");
      }

      return "";
    },
    [t]
  );

  const renderItem = useCallback(
    (item: CrowdloanItemType) => {
      return (
        <CrowdloanItem
          balanceValue={item.contribute}
          className={"crowdloan-item"}
          convertedBalanceValue={item.convertedContribute}
          crowdloanStatusTag={
            <Tag color={getTagColor(item.paraState)}>
              {getParaStateLabel(item.paraState)}
            </Tag>
          }
          decimal={0}
          displayNetwork={item.chainDisplayName}
          displayToken={item.symbol}
          isShowSubLogo={true}
          key={`${item.symbol}_${item.slug}`}
          networkKey={item.slug}
          paraChain={item.relayParentDisplayName}
          subNetworkKey={getRelayParentKey(item.relayParentDisplayName)}
        />
      );
    },
    [getParaStateLabel]
  );

  // empty list
  const emptyCrowdloanList = useCallback(() => {
    return (
      <EmptyList
        emptyMessage={t("Your crowdloan will appear here!")}
        emptyTitle={t("No crowdloan")}
        phosphorIcon={Rocket}
      />
    );
  }, [t]);

  return (
    <PageWrapper
      className={`crowdloans ${className}`}
      resolve={dataContext.awaitStores(["crowdloan", "price", "chainStore"])}
    >
      <Layout.Base
        showSubHeader={true}
        subHeaderBackground={"transparent"}
        subHeaderCenter={false}
        subHeaderPaddingVertical={true}
        title={t<string>("Crowdloans")}
      >
        <SwList.Section
          actionBtnIcon={<Icon phosphorIcon={FadersHorizontal} />}
          enableSearchInput
          filterBy={filterFunction}
          list={items}
          onClickActionBtn={onClickActionBtn}
          renderItem={renderItem}
          renderWhenEmpty={emptyCrowdloanList}
          searchFunction={searchFunction}
          searchMinCharactersCount={2}
          searchPlaceholder={t<string>("Search project")}
          showActionBtn
        />

        <FilterModal
          id={FILTER_MODAL_ID}
          onApplyFilter={onApplyFilter}
          onCancel={onCloseFilterModal}
          onChangeOption={onChangeFilterOption}
          optionSelectionMap={filterSelectionMap}
          options={filterOptions}
        />
      </Layout.Base>
    </PageWrapper>
  );
}

const Crowdloans = styled(Component)<Props>(({ theme: { token } }: Props) => {
  return {
    color: token.colorTextLight1,
    fontSize: token.fontSizeLG,

    ".crowdloan-item": {
      marginBottom: token.marginXS,
    },

    ".crowdloan__filter_option": {
      width: "100%",
    },

    ".crowdloan__filter_option_wrapper": {
      display: "flex",
      flexDirection: "column",
      gap: token.marginLG,
    },

    ".ant-sw-list-section": {
      height: "100%",
    },
  };
});

export default Crowdloans;
