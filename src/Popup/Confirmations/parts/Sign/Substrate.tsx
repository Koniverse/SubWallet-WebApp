// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { AccountJson } from "@subwallet/extension-base/background/types";
import { CONFIRMATION_QR_MODAL } from "@subwallet-webapp/constants/modal";
import { useNotification } from "@subwallet-webapp/hooks";
import useGetChainInfoByGenesisHash from "@subwallet-webapp/hooks/chain/useGetChainInfoByGenesisHash";
import { useLedger } from "@subwallet-webapp/hooks/ledger/useLedger";
import {
  approveSignPasswordV2,
  approveSignSignature,
  cancelSignRequest,
} from "@subwallet-webapp/messaging";
import { RootState } from "@subwallet-webapp/stores";
import { PhosphorIcon, SigData, ThemeProps } from "@subwallet-webapp/types";
import { AccountSignMode } from "@subwallet-webapp/types/account";
import { isSubstrateMessage } from "@subwallet-webapp/util";
import { getSignMode } from "@subwallet-webapp/util/account/account";
import { Button, Icon, ModalContext } from "@subwallet/react-ui";
import CN from "classnames";
import { CheckCircle, QrCode, Swatches, XCircle } from "phosphor-react";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { ExtrinsicPayload } from "@polkadot/types/interfaces";

import { DisplayPayloadModal, ScanSignature, SubstrateQr } from "../Qr";

interface Props extends ThemeProps {
  account: AccountJson;
  id: string;
  payload: ExtrinsicPayload | string;
}

const handleConfirm = async (id: string) => await approveSignPasswordV2({ id });

const handleCancel = async (id: string) => await cancelSignRequest(id);

const handleSignature = async (id: string, { signature }: SigData) =>
  await approveSignSignature(id, signature);

const modeCanSignMessage: AccountSignMode[] = [
  AccountSignMode.QR,
  AccountSignMode.PASSWORD,
];

const Component: React.FC<Props> = (props: Props) => {
  const { account, className, id, payload } = props;

  const { t } = useTranslation();
  const notify = useNotification();

  const { activeModal } = useContext(ModalContext);

  const { chainInfoMap } = useSelector((state: RootState) => state.chainStore);

  const [loading, setLoading] = useState(false);

  const signMode = useMemo(() => getSignMode(account), [account]);

  const isLedger = useMemo(
    () => signMode === AccountSignMode.LEDGER,
    [signMode]
  );
  const isMessage = isSubstrateMessage(payload);

  const approveIcon = useMemo((): PhosphorIcon => {
    switch (signMode) {
      case AccountSignMode.QR:
        return QrCode;
      case AccountSignMode.LEDGER:
        return Swatches;
      default:
        return CheckCircle;
    }
  }, [signMode]);

  const genesisHash = useMemo(() => {
    if (isSubstrateMessage(payload)) {
      return chainInfoMap.polkadot.substrateInfo?.genesisHash || "";
    } else {
      return payload.genesisHash.toHex();
    }
  }, [chainInfoMap.polkadot.substrateInfo?.genesisHash, payload]);

  const chain = useGetChainInfoByGenesisHash(genesisHash);

  const {
    error: ledgerError,
    isLoading: isLedgerLoading,
    isLocked,
    ledger,
    refresh: refreshLedger,
    signTransaction: ledgerSign,
    warning: ledgerWarning,
  } = useLedger(chain?.slug, isLedger);

  const isLedgerConnected = useMemo(
    () => !isLocked && !isLedgerLoading && !!ledger,
    [isLedgerLoading, isLocked, ledger]
  );

  // Handle buttons actions
  const onCancel = useCallback(() => {
    setLoading(true);
    handleCancel(id).finally(() => {
      setLoading(false);
    });
  }, [id]);

  const onApprovePassword = useCallback(() => {
    setLoading(true);

    setTimeout(() => {
      handleConfirm(id)
        .catch((e) => {
          console.log(e);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 1000);
  }, [id]);

  const onApproveSignature = useCallback(
    (signature: SigData) => {
      setLoading(true);

      setTimeout(() => {
        handleSignature(id, signature)
          .catch((e) => {
            console.log(e);
          })
          .finally(() => {
            setLoading(false);
          });
      }, 300);
    },
    [id]
  );

  const onConfirmQr = useCallback(() => {
    activeModal(CONFIRMATION_QR_MODAL);
  }, [activeModal]);

  const onConfirmLedger = useCallback(() => {
    if (!payload || typeof payload === "string") {
      return;
    }

    if (!isLedgerConnected || !ledger) {
      refreshLedger();

      return;
    }

    setLoading(true);

    setTimeout(() => {
      const payloadU8a = payload.toU8a(true);

      ledgerSign(payloadU8a, account.accountIndex, account.addressOffset)
        .then(({ signature }) => {
          onApproveSignature({ signature });
        })
        .catch((e: Error) => {
          console.log(e);
          setLoading(false);
        });
    });
  }, [
    account.accountIndex,
    account.addressOffset,
    isLedgerConnected,
    ledger,
    ledgerSign,
    onApproveSignature,
    payload,
    refreshLedger,
  ]);

  const onConfirm = useCallback(() => {
    switch (signMode) {
      case AccountSignMode.QR:
        onConfirmQr();
        break;
      case AccountSignMode.LEDGER:
        onConfirmLedger();
        break;
      default:
        onApprovePassword();
    }
  }, [onApprovePassword, onConfirmLedger, onConfirmQr, signMode]);

  useEffect(() => {
    !!ledgerError &&
      notify({
        message: ledgerError,
        type: "error",
      });
  }, [ledgerError, notify]);

  useEffect(() => {
    !!ledgerWarning &&
      notify({
        message: ledgerWarning,
        type: "warning",
      });
  }, [ledgerWarning, notify]);

  return (
    <div className={CN(className, "confirmation-footer")}>
      <Button
        disabled={loading}
        icon={<Icon phosphorIcon={XCircle} weight="fill" />}
        onClick={onCancel}
        schema={"secondary"}
      >
        {t("Cancel")}
      </Button>
      <Button
        disabled={isMessage && !modeCanSignMessage.includes(signMode)}
        icon={<Icon phosphorIcon={approveIcon} weight="fill" />}
        loading={loading}
        onClick={onConfirm}
      >
        {signMode !== AccountSignMode.LEDGER
          ? t("Approve")
          : !isLedgerConnected
          ? t("Refresh")
          : t("Approve")}
      </Button>
      {signMode === AccountSignMode.QR && (
        <DisplayPayloadModal>
          <SubstrateQr
            address={account.address}
            genesisHash={genesisHash}
            payload={payload || ""}
          />
        </DisplayPayloadModal>
      )}
      {signMode === AccountSignMode.QR && (
        <ScanSignature onSignature={onApproveSignature} />
      )}
    </div>
  );
};

const SubstrateSignArea = styled(Component)<Props>(
  ({ theme: { token } }: Props) => {
    return {};
  }
);

export default SubstrateSignArea;
