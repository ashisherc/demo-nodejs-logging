var express = require('express');
var morganLogger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('./services/logger');

var users = require('./routes/users');

var app = express();

app.use(morganLogger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).send({ "error": "Not found" });
});

// error handler
app.use(function (err, req, res, next) {
  /**
   * Log the error using our logger service
   * We will control logging in dev and prod environment in
   * our logger service itself.
   */
  logger.error(err);

  res.status(err.status || 500);
  res.send({ "error": err.message });
  // send only the error message that you would like to send to user
});

module.exports = app;
