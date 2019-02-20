#!/usr/bin/env node
var program = require('commander');

const run = (args) => {
	program
		.option('--no-sauce', 'Remove sauce')
		.parse(args);

	let result = 'you ordered a pizza';

	if (program.sauce) {
		result += '  with sauce';
	} else {
		result += ' without sauce';
	}

	console.log(result);
	return result;
}

const cli = !module.parent

if (cli) {
	run(process.argv)
} else {
	module.exports = {run}
}