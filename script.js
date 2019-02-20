#!/usr/bin/env node
var program = require('commander');

const run = (args) => {
	program
	.option('--no-sauce', 'Remove sauce')
	.parse(args);

	console.log('you ordered a pizza');
	if (program.sauce) console.log('  with sauce');
	else console.log(' without sauce');
}

const cli = !module.parent

if (cli) {
	run(process.argv)
} else {
	module.exports = {run}
}