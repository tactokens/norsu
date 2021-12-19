import * as React from 'react';
import { TxStatus } from '../BaseTransaction';
import { useTranslation } from 'react-i18next';

export function TacAuthFinal(props) {
  const { t } = useTranslation();

  return (
    <TxStatus
      {...props}
      messages={{
        send: t('sign.tacAuthConfirmed'),
        approve: t('sign.tacAuthConfirmed'),
        reject: t('sign.authRejected'),
      }}
    />
  );
}
