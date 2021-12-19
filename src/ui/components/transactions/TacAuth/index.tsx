import { TacAuth } from './TacAuth';
import { TacAuthCard } from './TacAuthCard';
import { TacAuthFinal } from './TacAuthFinal';
import * as utils from './parseTx';

const tacAuth = {
  type: utils.messageType,
  message: TacAuth,
  card: TacAuthCard,
  final: TacAuthFinal,
  ...utils,
};

export default tacAuth;
