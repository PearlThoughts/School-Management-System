const chalk = require('chalk');
const mongoose = require('mongoose');
const logSymbols = require('log-symbols');
const { env, mongoseUri } = require('./vars');

const error = chalk.bold.red;
const success = chalk.bold.green;

if (env === 'development') {
    mongoose.set('debug', true);
}

mongoose.connection.on('error', (err) => {
    console.log(error(`${logSymbols.error} ${err}`));
});

/**
 * Connect to MongoDB
 *
 * @returns {object} Mongoose connection
 * @public
 */
exports.connect = () => {
    mongoose
        .connect(mongoseUri, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        })
        .then(() => console.log(success(`${logSymbols.success} Database connected successfully.`)));

    return mongoose.connection;
};
