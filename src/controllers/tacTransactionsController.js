import {
  customData,
  verifyCustomData,
  tacAuth,
} from '@tac/tac-transactions';

export const tac = {
  parseTacAuth: message => {
    if (!message || message.type !== 'tacAuth') {
      throw new Error('Incorrect data for sign tacAuth data');
    }

    const { data } = message;
    const { hash } = tacAuth(data, 'fake user');
    return {
      id: hash,
    };
  },

  signTacAuth: async (data, user) => {
    return tacAuth(data, user.seed);
  },

  parseCustomData: message => {
    if (!message || message.type !== 'customData') {
      throw new Error('Incorrect data for sign custom data');
    }

    const { data } = message;
    const { hash } = customData(data, 'fake user');
    return {
      id: hash,
    };
  },

  verifyCustomData: async data => {
    return verifyCustomData(data);
  },

  signCustomData: async (data, user) => {
    return customData(data, user.seed);
  },
};
