const bip39 = require("bip39");
const crypto = require("crypto");
const fs = require("fs");
const { spawn } = require('child_process');

const chown = spawn('sudo', ['chown', 'root', '.env']);

const privateKey = crypto.randomBytes(32).toString("hex");

const mnemonic = bip39.entropyToMnemonic(privateKey);

fs.appendFile(`.env`, `PRIVATE_KEY='${privateKey}'` + `\nMNEMONIC_KEY='${mnemonic}'`, function (err) {
  if (err) throw err;
  console.log("Saved!");
});

chown.stdout.on('data', data => {
  console.log(`chown output: ${data}`);
});

chown.stderr.on('data', data => {
  console.error(`chown error: ${data}`);
});

chown.on('close', code => {
  console.log(`chown process exited with code ${code}`);

  const chmod = spawn('sudo', ['chmod', '600', '.env']);

  chmod.stdout.on('data', data => {
    console.log(`chmod output: ${data}`);
  });

  chmod.stderr.on('data', data => {
    console.error(`chmod error: ${data}`);
  });

  chmod.on('close', code => {
    console.log(`chmod process exited with code ${code}`);
  });
});


console.log(privateKey);
console.log(mnemonic);
