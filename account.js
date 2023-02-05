const TronWeb = require('tronweb');
require('dotenv').config()

const fullNode = 'https://api.trongrid.io';
const solidityNode = 'https://api.trongrid.io';
const eventServer = 'https://api.trongrid.io/';
const privateKey = process.env.PRIVATE_KEY;

const tronWeb = new TronWeb(
    fullNode,
    solidityNode,
    eventServer,
    privateKey
);

async function main() {
    const nodeVersion = await tronWeb.isConnected();
    console.log(`Connected to node: ${nodeVersion}`);

    const currentAddress = await tronWeb.defaultAddress.base58;
    console.log(`Current address: ${currentAddress}`);

    const balance = await tronWeb.trx.getBalance(currentAddress);
    console.log(`TRX balance: ${balance}`);
}

main().catch(console.error);
