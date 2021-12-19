import { SIGN_TYPE } from '@tac/signature-adapter';

export const messageType = 'transfer';
export const txType = 'transaction';

export function getAssetsId(tx): Array<string> {
  const feeAssetId =
    tx.fee && tx.fee.assetId ? tx.fee.assetId : tx.feeAssetId || 'TAC';
  const amountAssetId =
    tx.amount && tx.amount.assetId ? tx.amount.assetId : tx.assetId || 'TAC';

  if (feeAssetId === amountAssetId) {
    return [amountAssetId];
  }

  return [amountAssetId, feeAssetId];
}

export { getFee } from '../BaseTransaction/parseTx';

export function getAmount(tx = null) {
  return typeof tx.amount === 'object'
    ? tx.amount
    : { coins: tx.amount, assetId: 'TAC' };
}

export function getAmountSign() {
  return '-' as const;
}

export function isMe(tx: any, type: string) {
  return tx.type === SIGN_TYPE.TRANSFER && type === txType;
}
