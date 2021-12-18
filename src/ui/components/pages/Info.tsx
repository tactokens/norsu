import * as styles from './styles/info.styl';
import * as React from 'react';
import { Trans } from 'react-i18next';
import { BigLogo } from '../head';

export class Info extends React.Component {
  render() {
    return (
      <div className={`${styles.content} body1`}>
        <BigLogo className={`${styles.logoLeft} margin-main`} noTitle={true} />

        <div className="margin-main basic500">
          <Trans i18nKey="info.keepUp">
            Norsu is the safest way to interact with third-party web
            resources with TAC-integrated functionality or DApps.
            Using Norsu, you can sign transactions and remain safe from malicious
            sites.
          </Trans>
        </div>

        <div className="margin-main basic500">
        <a
          rel="noopener noreferrer"
          className="link black"
          target="_blank"
          href="https://network.tactokens.com"
        >
          network.tactokens.com
        </a>
        </div>

        <div className={`${styles.social} margin-main`}>
          <div className="margin-main basic500">
            <Trans i18nKey="info.joinUs">Join the TAC Community</Trans>
          </div>
          <ul>
            <li className={styles.github}>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/tactokens"
              ></a>
            </li>
            <li className={styles.telegram}>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://t.me/viraladmin"
              ></a>
            </li>
            <li className={styles.reddit}>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.reddit.com/r/tacproject/"
              ></a>
            </li>
            <li className={styles.youtube}>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.youtube.com/thinklair"
              ></a>
            </li>
          </ul>
        </div>

        <div className="basic500">&copy; TAC</div>
      </div>
    );
  }
}
