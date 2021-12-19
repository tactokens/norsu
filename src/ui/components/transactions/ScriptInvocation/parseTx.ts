import { SIGN_TYPE } from '@tac/signature-adapter';
import { BigNumber } from '@tac/bignumber';
import { IMoneyLike } from 'ui/utils/converters';

export const messageType = 'script_invocation';
export const txType = 'transaction';

export function getTransferAmount(amount, assetId) {
  if (typeof amount === 'object') {
    amount.assetId = assetId;
    return amount;
  }

  return { coins: amount, assetId };
}

export function getAssetsId(tx): Array<string> {
  const feeAssetId =
    tx.fee && tx.fee.assetId ? tx.fee.assetId : tx.feeAssetId || 'TAC';
  const amountAssetId = (tx.payment || []).map(item => {
    switch (typeof item) {
      case 'string':
        return 'TAC';
      case 'number':
        return 'TAC';
      case 'object':
        return item && item.assetId ? item.assetId : 'TAC';
    }
  });

  return [...amountAssetId, feeAssetId];
}

export { getFee } from '../BaseTransaction/parseTx';

export function getAmounts(tx) {
  const amounts: IMoneyLike[] = [];

  (tx.payment || []).forEach(item => {
    let tokens = new BigNumber(0);
    let coins = new BigNumber(0);
    if (item && item.tokens) {
      tokens = tokens.add(item.tokens);
    } else if (item && item.coins) {
      coins = coins.add(item.coins);
    } else if (item && item.amount) {
      coins = coins.add(item.amount);
    } else {
      const parse = new BigNumber(item);
      if (!parse.isNaN()) {
        coins = coins.add(parse);
      }
    }
    const assetId = item.assetId || 'TAC';

    amounts.push({ coins, tokens, assetId });
  });

  return amounts;
}

export function getAmountSign() {
  return '-' as const;
}

export function isMe(tx: any, type: string) {
  return tx.type === SIGN_TYPE.SCRIPT_INVOCATION && type === txType;
}
