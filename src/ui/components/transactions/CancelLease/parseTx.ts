import { SIGN_TYPE } from '@tac/signature-adapter';

export const messageType = 'cancel-leasing';
export const txType = 'transaction';

export function getAssetsId(tx): Array<string> {
  const feeAssetId =
    tx.fee && tx.fee.assetId ? tx.fee.assetId : tx.feeAssetId || 'TAC';
  const amountAssetId = 'TAC';

  if (feeAssetId === amountAssetId) {
    return [amountAssetId];
  }

  return [amountAssetId, feeAssetId];
}

export { getFee } from '../BaseTransaction/parseTx';

export function getAmount(tx = null, message) {
  if (!message || !message.lease) {
    return { coins: null, assetId: 'TAC' };
  }

  return { coins: message.lease.amount, assetId: 'TAC' };
}

export function getAmountSign() {
  return '+' as const;
}

export function isMe(tx: any, type: string) {
  return tx.type === SIGN_TYPE.CANCEL_LEASING && type === 'transaction';
}
