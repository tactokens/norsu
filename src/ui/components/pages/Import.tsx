import * as styles from './styles/import.styl';
import cn from 'classnames';
import * as React from 'react';
import { Trans } from 'react-i18next';
import { Button, Modal } from '../ui';
import * as norsuLock from '../../assets/img/tac-keeper-lock.svg';
import { connect } from 'react-redux';
import { setUiState } from '../../actions';
import { AnyAction } from 'redux';
import { PAGES } from '../../pageConfig';

interface Props {
  setTab: (newTab: string) => void;
  dispatch: (action: AnyAction) => void;
}

export const Import = connect((state: any) => ({ }))(function Import({ showUpdateInfo, setTab, dispatch }: Props) {
  const exportToKeystore = () => setTab(PAGES.EXPORT_ACCOUNTS);

  return (
    <div className={styles.root}>
      <img
        className={styles.importIcon}
        src={norsuLock}
        alt=""
        width={220}
        height={200}
      />

      <Button
        id="createNewAccount"
        type="submit"
        onClick={() => setTab('new_account')}
      >
        <Trans i18nKey="import.createNew" />
      </Button>

      <div className={cn('body1', 'disabled500', 'font300', styles.separator)}>
        <Trans i18nKey="import.importVia">Or import via</Trans>
      </div>

      <div>
        <div className={styles.importButtonsItem}>
          <Button
            className="fullwidth"
            data-testid="importSeed"
            type="transparent"
            onClick={() => setTab('import_seed')}
          >
            <div className="body1">
              <Trans i18nKey="import.viaSeed" />
            </div>
          </Button>
        </div>

        <div className={styles.importButtonsItem}>
          <Button
            className="fullwidth"
            data-testid="importKeystore"
            type="transparent"
            onClick={() => setTab('import_keystore')}
          >
            <div className="body1">
              <Trans i18nKey="import.viaKeystore" />
            </div>
          </Button>
        </div>
      </div>

    </div>
  );
});
