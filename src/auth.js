const bip39 = require("bip39");
const crypto = require("crypto");
const fs = require("fs");
const { spawn } = require('child_process');

const chown = spawn('sudo', ['chown', 'root', '.env']);

const privateKey = crypto.randomBytes(32).toString("hex");

const mnemonic = bip39.entropyToMnemonic(privateKey);

fs.appendFile(`.env`, `${privateKey}`, function (err) {
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
  console.log("q. Back");
  rl.question("\nSelect an option: ", function (answer) {
    switch (answer) {
      case "q":
        fs.readFile("./index.js", "utf8", function (err, data) {
          if (err) throw err;
          eval(data);
        });
        break;
      default:
        console.log("Invalid option, try again. (Write 'q' without )");
        break;
    }
  });
});

console.log(privateKey);
console.log(mnemonic);

// NOW WE DO NOT SAVE THE MNEMONIC KEY FOR NOW. SO PAY ATTENTION TO THIS
