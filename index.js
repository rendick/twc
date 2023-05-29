const { program } = require('commander');
const fs = require("fs");
const { Command } = require('commander');


program
	.option('-h, --help', 'Output help information')
	.option('-c, --account', 'Account information')
	.option('-a, --auth', 'Create wallet')
	.option('-s, --send', 'Send crypto')
	.option('-add, --address [type]', 'Reciever address')
	.option('-am, --amount [type]', 'TRX Amount')
	.parse(process.argv);

const options = program.opts();

//  Help func
if (options.help) {
	fs.readFile("./help.js", "utf8", function (err, data) {
		if (err) throw err;
		eval(data);
	});
}

// Account func
if (options.account) {
	fs.readFile("./src/account.js", "utf8", function (err, data) {
		if (err) throw err;
		eval(data);
	});
}

// Auth func
if (options.auth) {
	fs.readFile("./src/auth.js", "utf8", function (err, data) {
		if (err) throw err;
		eval(data);
	});
}

