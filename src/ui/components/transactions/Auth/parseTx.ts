import { SIGN_TYPE } from '@tac/signature-adapter';

export const messageType = 'auth';
export const txType = 'auth';

export function getAssetsId(tx = null): Array<string> {
  return ['TAC'];
}

export function getFee(tx = null) {
  return { coins: 0, assetId: 'TAC' };
}

export function getAmount(tx = null) {
  return { coins: 0, assetId: 'TAC' };
}

export function getAmountSign() {
  return '' as const;
}

export function isMe(tx: any, type: string) {
  return tx.type === SIGN_TYPE.AUTH && type === txType;
}
