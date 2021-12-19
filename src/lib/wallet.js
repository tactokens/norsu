import { getAdapterByType } from '@tac/signature-adapter';
import { libs as transactionsLibs } from '@tac/tac-transactions';
import { tac } from '../controllers/tacTransactionsController';
import { BigNumber } from '@tac/bignumber';
import create from 'parse-json-bignumber';

const { messageEncrypt, messageDecrypt, sharedKey, base58Encode } =
  transactionsLibs.crypto;
const { stringify } = create({ BigNumber });

export class Wallet {
  /**
   * user
   * @type {
   * {
   *  address: string,
   *  seed: string,
   *  networkCode: string,
   *  name: string,
   *  publicKey: string,
   *  type: string,
   *  network: string
   *  }
   *}
   */
  user = null;

  constructor(user) {
    if (!user) throw new Error('user required');
    this.user = user;
  }

  get _adapter() {
    const Adapter = getAdapterByType(this.user.type);

    Adapter.initOptions({ networkCode: this.user.networkCode.charCodeAt(0) });

    //Todo: temporary for seed
    let params = this.user;
    if (this.user.type === 'seed') {
      params = this.user.seed;
    }

    return new Adapter(params);
  }

  isMyNetwork(network) {
    return network === this.user.network;
  }

  getAccount() {
    let account = Object.assign({}, this.user);
    delete account['id'];
    delete account['seed'];
    return account;
  }

  serialize() {
    return this.user;
  }

  getSecret() {
    return this.user.seed;
  }

  async encryptMessage(message, publicKey, prefix = 'norsu') {
    const privateKey = await this._adapter.getPrivateKey();
    const shKey = sharedKey(privateKey, publicKey, prefix);
    return base58Encode(messageEncrypt(shKey, message, prefix || undefined));
  }

  async decryptMessage(message, publicKey, prefix = 'norsu') {
    const privateKey = await this._adapter.getPrivateKey();
    const shKey = sharedKey(privateKey, publicKey, prefix);
    try {
      return messageDecrypt(shKey, message, prefix || undefined);
    } catch (e) {
      throw new Error('message is invalid');
    }
  }

  async getKEK(publicKey, prefix) {
    prefix = (prefix || '') + 'tac';
    const privateKey = await this._adapter.getPrivateKey();
    return base58Encode(sharedKey(privateKey, publicKey, prefix));
  }

  async signTac(type, data) {
    return tac[type](data, this.user);
  }

  async signTx(tx) {
    const signable = this._adapter.makeSignable(tx);
    return stringify(await signable.getDataForApi());
  }

  async signBytes(bytes) {
    return await this._adapter.signData(Uint8Array.from(bytes));
  }

  async signRequest(request) {
    const signable = this._adapter.makeSignable(request);
    return await signable.getSignature();
  }
}
