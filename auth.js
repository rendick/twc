const bip39 = require('bip39');
const crypto = require('crypto');

// Generate a private key
const privateKey = crypto.randomBytes(32).toString('hex');

// Convert the private key to a mnemonic phrase
const mnemonic = bip39.entropyToMnemonic(privateKey);

console.log(privateKey);
console.log(mnemonic);
