const TronWeb = require("tronweb");
const readline = require("readline");
const fs = require("fs");
require("dotenv").config();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

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
  const address = rl.question("Receiver`s address: ");

  const trxamount = rl.question("TRX Amount: ");

  sendTRON(process.env.PRIVATE_KEY, address, trxamount);
