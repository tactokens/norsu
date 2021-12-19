import { SIGN_TYPE } from '@tac/signature-adapter';

export const messageType = 'cancel-order';
export const txType = 'cancelOrder';

export function getAssetsId(tx): Array<string> {
  return ['TAC'];
}

export function getFee(tx) {
  return { coins: 0, assetId: 'TAC' };
}

export function getAmount(tx = null) {
  return { coins: 0, assetId: 'TAC' };
}

export function getAmountSign() {
  return '' as const;
}

export function isMe(tx: any, type: string) {
  return (
    tx.type === SIGN_TYPE.CANCEL_ORDER &&
    (type === txType || type === 'request')
  );
}
