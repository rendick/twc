const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");
const fs = require("fs");

const rl = readline.createInterface({ input, output });

// rl.question("Receiver`s address: ", (answer) => {
//   rl.question("TRX Amount: ", (amount) => {
//     fs.appendFile(`./cache/address.txt`, `${amount}`, function (err) {
//       if (err) throw err;
//       console.log("Saved!");

//       fs.appendFile(`./cache/address.txt`, `${answer}`, function (err) {
//         if (err) throw err;
//         console.log("Saved!");

//         fs.readFile("./src/send.js", "utf8", function (err, data) {
//           if (err) throw err;
//           eval(data);

//           rl.close();
//         });
//       });
//     });
//   });
// });

rl.question('Receiver`s address: ', (firstInput) => {
  rl.question('TRX Amount: ', (secondInput) => {
    fs.appendFile('./cache/address.txt', `${firstInput}`, function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
    fs.appendFile('./cache/amount.txt', `${secondInput}`, function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
    rl.close();
  });
});
