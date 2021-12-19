import { seedUtils } from '@tac/tac-transactions';

export function encrypt(object, password) {
  const jsonObj = JSON.stringify(object);
  return seedUtils.encryptSeed(jsonObj, password);
}

export function decrypt(ciphertext, password) {
  try {
    const decryptedJson = seedUtils.decryptSeed(ciphertext, password);
    return JSON.parse(decryptedJson);
  } catch (e) {
    throw new Error('Invalid password');
  }
}
