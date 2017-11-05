const bunyan = require("bunyan"); // Logger library
const bunyanTransport = require('bunyan-transport');
/**
 * You can make a wrapper here for the logging levels
 * and export your wrapper as the logger, which will
 * support a few logger libraries
 */

var logger = null;

if (process.env.NODE_ENV == "production") {
    logger = bunyan.createLogger({
        name: 'node-logger-demo',
        streams: [{
            level: process.env.LOG_LEVEL,
            stream: new bunyanTransport.logentriesStream({
                token: process.env.LOG_TOKEN
            }),
            type: 'raw'
        }]
    });
}
else {
    logger = bunyan.createLogger({
        name: "node-logger-demo",  // Name can be service name and extra details you may wan to put.
        level: "info" // Logger level should be read from environment variables.
    });
}

module.exports = logger;