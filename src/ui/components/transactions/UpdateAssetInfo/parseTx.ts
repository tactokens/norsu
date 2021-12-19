import { SIGN_TYPE } from '@tac/signature-adapter';

export const messageType = 'updateAssetInfo';
export const txType = 'transaction';

export function getAssetsId(tx): Array<string> {
  const feeAssetId =
    tx.fee && tx.fee.assetId ? tx.fee.assetId : tx.feeAssetId || 'TAC';
  return [feeAssetId];
}

export function getFee(tx) {
  return typeof tx.fee === 'object'
    ? tx.fee
    : { coins: tx.fee, assetId: 'TAC' };
}

export function getAmountSign() {
  return '' as const;
}

export function isMe(tx: any, type: string) {
  return tx.type === SIGN_TYPE.UPDATE_ASSET_INFO && type === txType;
}
