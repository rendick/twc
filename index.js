const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Menu:");
console.log("1. Account");
console.log("2. Send TRX");
console.log("3. Quit");

rl.question("Select an option: ", function(answer) {
  switch (answer) {
    case '1':
      fs.readFile('account.js', 'utf8', function(err, data) {
        if (err) throw err;
        eval(data);
      });
      break;
    case '2':
      fs.readFile('send.js', 'utf8', function(err, data) {
        if (err) throw err;
        eval(data);
      });
      break;
    case '3':
      console.log("Quitting");
      rl.close();
      break;
    default:
      console.log("Invalid option, try again");
      break;
  }
});
