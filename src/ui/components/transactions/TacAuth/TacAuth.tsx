import * as styles from './tacAuth.styl';
import * as React from 'react';

import { TacAuthCard } from './TacAuthCard';
import { TacAuthInfo } from './TacAuthInfo';
import { TxFooter, TxHeader } from '../BaseTransaction';

export function TacAuth(props) {
  const { message, assets } = props;

  return (
    <div className={styles.transaction}>
      <TxHeader {...props} />

      <div className={`${styles.tacAuthTxScrollBox} transactionContent`}>
        <div className="margin-main">
          <TacAuthCard {...props} />
        </div>

        <TacAuthInfo message={message} assets={assets} />
      </div>

      <TxFooter {...props} />
    </div>
  );
}
