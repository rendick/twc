const { Command } = require('commander');
var term = require('terminal-kit').terminal;
const TronWeb = require("tronweb");
var shell = require('shelljs');
var sleep = require('sleep');
require("dotenv").config();

const program = new Command();

program
  .option('-add, --addresses [type]', 'Reciever address')
  .option('-am, --amounts [type]', 'TRX Amount')
  .parse(process.argv); // add this line to parse the command line arguments

const address = term('Please enter your name: ');

term.inputField(
  function (error, input) {

    term.green("\nYour name is '%s'\n", address);
    process.exit();
  }
);

sleep.sleep(10)

const key = shell
  .exec("sudo cat .env", { silent: true })
  .stdout.replace(/(\r\n|\n|\r)/gm, "");

async function sendTRON(privateKey, toAddress, amount) {
  const tronWeb = new TronWeb({
    privateKey: `${key}`,
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

const toAddress = `TBBshHBLvGZcm4S6tB9PXdGHLrWQe1VhAw`;
const amount = 1;

sendTRON(`${key}`, address, amount);
