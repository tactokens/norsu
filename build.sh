#!/usr/bin/env bash

# Bash script to tweak address-keys-seed.js after npm install to ensure that the TAC address prefix is correct.
# Waves used the first byte of an address to indicate the address type: 1 - personal addres, 2 - alias.
# TAC uses the first byte as an ersatz chain Id (yes, I know this is confusing), and sets it to 15

npm install
sed -i 's/var prefix = \[1, typeof chainId === \x27string\x27 ? chainId\.charCodeAt(0) : chainId\];/var prefix = \[15, typeof chainId === \x27string\x27 ? chainId\.charCodeAt(0) : chainId\];/g' ./node_modules/@waves/ts-lib-crypto/crypto/address-keys-seed.js
npm run dist
