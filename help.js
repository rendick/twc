// imports

var term = require( 'terminal-kit' ).terminal;
const { Command } = require('commander');
const program = new Command();

program
  .option('-a, --auth', 'Create pricateKey for authentication')
  .option('-c, --account', 'Account information')
  .option('-s, --send', 'Send TRX coins');

  console.log(" ")
  term.bgBrightRed(" Help information ")
  console.log("\n ")

program.parse();



