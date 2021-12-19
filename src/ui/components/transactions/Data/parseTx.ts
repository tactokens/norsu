import { SIGN_TYPE } from '@tac/signature-adapter';

export const messageType = 'data';
export const txType = 'transaction';

export function getAssetsId(tx): Array<string> {
  const feeAssetId =
    tx.fee && tx.fee.assetId ? tx.fee.assetId : tx.feeAssetId || 'TAC';
  return [feeAssetId];
}

export { getFee } from '../BaseTransaction/parseTx';

export function getAmount() {
  return { coins: 0, assetId: 'TAC' };
}

export function getAmountSign() {
  return '' as const;
}

export function isMe(tx: any, type: string) {
  return tx.type === SIGN_TYPE.DATA && type === txType;
}
