#!/usr/bin/env bash

# Bash script to tweak address-keys-seed.js after npm install to ensure that the TAC address prefix is correct.
# Waves used the first byte of an address to indicate the address type: 1 - personal addres, 2 - alias.
# TAC uses the first byte as an ersatz chain Id (yes, I know this is confusing), and sets it to 15

# It also uses a cludge to rename all occurances of Waves to Tac in both filenames and within the file
# This is to avoid namespace clashes between Waves Keeper and Norsu

# This way we can still import and use all changes to the @waves modules

npm install
mv node_modules/@waves node_modules/@tac
cd ./node_modules/@tac
find ./ -execdir rename 's/waves/tac/g' '{}' \+
find ./ -execdir rename 's/Waves/Tac/g' '{}' \+
find ./ -execdir rename 's/WAVES/TAC/g' '{}' \+
find ./ -execdir rename 's/tacKeeper/norsu/g' '{}' \+
find ./ -execdir rename 's/TacKeeper/Norsu/g' '{}' \+
find ./ -type f -exec sed -i 's/waves/tac/g' '{}' \+
find ./ -type f -exec sed -i 's/Waves/Tac/g' '{}' \+
find ./ -type f -exec sed -i 's/WAVES/TAC/g' '{}' \+
find ./ -type f -exec sed -i 's/tacKeeper/norsu/g' '{}' \+
find ./ -type f -exec sed -i 's/TacKeeper/Norsu/g' '{}' \+
cd ../../
sed -i 's/var prefix = \[1, typeof chainId === \x27string\x27 ? chainId\.charCodeAt(0) : chainId\];/var prefix = \[15, typeof chainId === \x27string\x27 ? chainId\.charCodeAt(0) : chainId\];/g' ./node_modules/@tac/ts-lib-crypto/crypto/address-keys-seed.js
npm run dist
