var chalk = require("chalk");

var message = chalk.bgWhite.bold(chalk.red.underline("Hello ") + chalk.green("World"));
console.log(message);
