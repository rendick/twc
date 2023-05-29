var term = require( 'terminal-kit' ).terminal ;
const TronWeb = require("tronweb");
const dotenv = require("dotenv");
var shell = require('shelljs');


dotenv.config();

const key = shell
  .exec("sudo cat .env", { silent: true })
  .stdout.replace(/(\r\n|\n|\r)/gm, "");

const fullNode = "https://api.trongrid.io";
const solidityNode = "https://api.trongrid.io";
const eventServer = "https://api.trongrid.io/";
const privateKey = `${key}`;

const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey);

async function displayTRXInfo() {
    const nodeVersion = await tronWeb.isConnected();
    console.log(" ")
    term.bgRed(` Connected to node: ${nodeVersion} `);
    console.log("\n ")
  
    const currentAddress = await tronWeb.defaultAddress.base58;
    console.log(" ")
    term.bgRed(` Current address: ${currentAddress} `);
    console.log("\n ")

    const balance = await tronWeb.trx.getBalance(currentAddress);
    console.log(" ")
    term.bgRed(` TRX balance: ${balance} `);
    console.log("\n ")
  
    const response = await fetch("https://api.coingecko.com/api/v3/coins/tron");
    const data = await response.json();
    const price = data.market_data.current_price.usd;
    console.log(`The current price of TRX is $${price}\n`);
  }
  
  displayTRXInfo().catch(console.error);