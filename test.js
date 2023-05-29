const { Command } = require('commander');
const program = new Command();

program
  .option('-ad, --cheese [type]', 'Add cheese with optional type')
  .option('-am, --vheese [type]', 'Add vheese with optional type')

program.parse(process.argv);

const options = program.opts();
if (options.cheese === undefined) console.log('no cheese');
else if (options.cheese === true) console.log('add cheese');
else console.log(`add cheese type ${options.cheese} and ${options.vheese}`);