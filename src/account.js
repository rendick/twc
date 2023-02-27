const TronWeb = require("tronweb");
const fetch = require("node-fetch");
const dotenv = require("dotenv");
const readline = require("readline");
const fs = require("fs/promises");

dotenv.config();

const key = shell
  .exec("sudo cat .env", { silent: true })
  .stdout.replace(/(\r\n|\n|\r)/gm, "");

const fullNode = "https://api.trongrid.io";
const solidityNode = "https://api.trongrid.io";
const eventServer = "https://api.trongrid.io/";
const privateKey = `${key}`;

const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function displayTRXInfo() {
  const nodeVersion = await tronWeb.isConnected();
  console.log(`Connected to node: ${nodeVersion}`);

  const currentAddress = await tronWeb.defaultAddress.base58;
  console.log(`Current address: ${currentAddress}`);

  const balance = await tronWeb.trx.getBalance(currentAddress);
  console.log(`TRX balance: ${balance}\n`);

  const response = await fetch("https://api.coingecko.com/api/v3/coins/tron");
  const data = await response.json();
  const price = data.market_data.current_price.usd;
  console.log(`The current price of TRX is $${price}\n`);

  console.log("q. Back");
  rl.question("\nSelect an option: ", async function (answer) {
    switch (answer) {
      case "q":
        const data = await fs.readFile("./index.js", "utf8");
        eval(data);
        break;
      default:
        console.log("Invalid option, try again. (Write 'q' without quotes)");
        break;
    }
  });
}

displayTRXInfo().catch(console.error);
