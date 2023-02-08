const TronWeb = require("tronweb");
const shell = require("shelljs");
require("dotenv").config();

const key = shell.exec("sudo cat .env", {silent: true}).stdout.replace(/(\r\n|\n|\r)/gm,"");

  const fullNode = "https://api.trongrid.io";
  const solidityNode = "https://api.trongrid.io";
  const eventServer = "https://api.trongrid.io/";
  const privateKey = `${key}`; 

  const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey);

  async function main() {
    const nodeVersion = await tronWeb.isConnected();
    console.log(`Connected to node: ${nodeVersion}`);

    const currentAddress = await tronWeb.defaultAddress.base58;
    console.log(`Current address: ${currentAddress}`);

    const balance = await tronWeb.trx.getBalance(currentAddress);
    console.log(`TRX balance: ${balance}`);
  }

  main().catch(console.error);

