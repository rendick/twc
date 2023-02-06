const bip39 = require("bip39");
const crypto = require("crypto");
const fs = require("fs");

// Generate a private key
const privateKey = crypto.randomBytes(32).toString("hex");

// Convert the private key to a mnemonic phrase
const mnemonic = bip39.entropyToMnemonic(privateKey);

fs.appendFile(`.env`, `PRIVATE_KEY='${privateKey}'` + `\nMNEMONIC_KEY='${mnemonic}'`, function (err) {
  if (err) throw err;
  console.log("Saved!");
});

console.log(privateKey);
console.log(mnemonic);
