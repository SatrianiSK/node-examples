var chalk = require('chalk');

module.exports = {
  printGreen: chalk.bold.green,
  printRed: chalk.bold.red
}

// There is another way of export functionality.
// The two different ways of exporting functionality are not compatible with each other.
/**
 * exports.printGreen = chalk.bold.green;
 * exports.printRed = chalk.bold.red;
 */