const TronWeb = require("tronweb");
const readline = require("node:readline");
require("dotenv").config();

const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });

async function sendTRON(privateKey, toAddress, amount) {
  const tronWeb = new TronWeb({
    privateKey: process.env.PRIVATE_KEY,
    fullHost: "https://api.trongrid.io",
  });

  const fromAddress = tronWeb.address.fromPrivateKey(privateKey);
  const sendAmount = amount * 1000000;
  const transaction = await tronWeb.transactionBuilder.sendTrx(
    toAddress,
    sendAmount,
    fromAddress
  );
  const signedTransaction = await tronWeb.trx.sign(transaction, privateKey);
  const result = await tronWeb.trx.sendRawTransaction(signedTransaction);
  console.log(result);
}

rl.question("What do you think of Node.js? ", (address) => {
  console.log(address);
  rl.question("TRX Amount: ", (trxamount) => {
    rl.close();
  });
});

sendTRON(process.env.PRIVATE_KEY, address, trxamount);
