Promise = require('bluebird');
const app = require('./config/express');
const chalk = require('chalk');
const logSymbols = require('log-symbols');
const mongoose = require('./config/mongoose');
const { port, env } = require('./config/vars');

const success = chalk.bold.green;

/**
 * Database configuration.
 */
mongoose.connect();

/**
 * Start Express server.
 */
app.listen(port, () => {
    console.log(success(`${logSymbols.success} App is running at http://localhost:${port} in ${env} mode.`));
});

/**
* Exports express
* @public
*/
module.exports = app;
