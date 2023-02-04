const TronWeb = require('tronweb');
require('dotenv').config()

async function sendTRON(privateKey, toAddress, amount) {
    const tronWeb = new TronWeb({
        privateKey: process.env.PRIVATE_KEY,
        fullHost: 'https://api.trongrid.io'
    });
  
    const fromAddress = tronWeb.address.fromPrivateKey(privateKey);
    const sendAmount = amount * 1000000;
    const transaction = await tronWeb.transactionBuilder.sendTrx(toAddress, sendAmount, fromAddress);
    const signedTransaction = await tronWeb.trx.sign(transaction, privateKey);
    const result = await tronWeb.trx.sendRawTransaction(signedTransaction);
    console.log(result);
}

// Example usage: send 1 TRX from address '41e82D9fBc2cB11be5bE67f6F24c7Bb5E5d5c72C8e'
// to address 'TKgZGJzNtS1BytBPZXk2A72yJNkx2xgXcR'
sendTRON(process.env.PRIVATE_KEY, 'TBBshHBLvGZcm4S6tB9PXdGHLrWQe1VhAw', 1);
