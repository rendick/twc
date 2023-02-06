const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");
const fs = require("fs");

const rl = readline.createInterface({ input, output });

rl.question("Receiver`s address: ", (answer) => {
  fs.appendFile(`./cache/${answer}.txt`, "Hello content!", function (err) {
    if (err) throw err;
    console.log("Saved!");
  });

  rl.close();
});
