const readline = require("readline");
const fs = require("fs");
const shell = require("shelljs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("\nMenu:\n");
console.log("1. Account");
console.log("2. Send TRX");
console.log("3. Auth\n");
console.log("4. Quit");

rl.question("\nSelect an option: ", function (answer) {
  switch (answer) {
    case "1":
      fs.readFile("./src/account.js", "utf8", function (err, data) {
        if (err) throw err;
        eval(data);
      });
      break;
    case "2":
      fs.readFile("./src/address.js", "utf8", function (err, data) {
        if (err) throw err;
        eval(data);
      });
      break;
    case "3":
      fs.readFile("./src/auth.js", "utf8", function (err, data) {
        if (err) throw err;
        eval(data);
      });
      break;
    case "4":
      console.log("Quitting");
      rl.close();
      break;
    default:
      console.log("Invalid option, try again");
      break;
  }
});
