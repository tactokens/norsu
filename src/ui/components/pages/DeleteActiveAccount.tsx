import * as styles from './styles/deleteAccount.styl';
import * as React from 'react';
import { connect } from 'react-redux';
import { Trans } from 'react-i18next';
import { Button } from '../ui';
import { deleteActiveAccount } from '../../actions';

class DeleteActiveAccountComponent extends React.Component {
  state = { disable: false };
  props;
  onClickHandler = () => {
    this.props.deleteActiveAccount(null);
    this.setState({ disable: false });
  };

  render() {
    return (
      <div className={styles.content}>
        <h2 className="title1 margin2">
          <Trans i18nKey="deleteAccount.attention">Attention!</Trans>
        </h2>
        <div className="margin4 body1">
          <Trans i18nKey="deleteAccount.warn">
            Do not delete an account without first ensuring you have a backup of the seed phrase, a keystore file, or private key that created it.
          </Trans>
        </div>
        <div>
          <Button
            id="deleteAccount"
            onClick={this.onClickHandler}
            type="warning"
            disabled={this.state.disable}
          >
            <Trans i18nKey="deleteAccount.delete">Delete account</Trans>
          </Button>
        </div>
      </div>
    );
  }
}

const actions = {
  deleteActiveAccount,
};

const mapStateToProps = function () {
  return {};
};

export const DeleteActiveAccount = connect(
  mapStateToProps,
  actions
)(DeleteActiveAccountComponent);
