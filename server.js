'use strict';
/**
 * Module dependencies.
 */
var init = require('./server/config/init')(),
	config = require('./server/config/config'),
	mongoose = require('mongoose');

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

// Bootstrap db connection
var db = mongoose.connect(config.db);

// Init the express application
var app = require('./server/config/express')(db);


// Bootstrap passport config
require('./server/config/passport')();

// Start the app by listening on <port>
app.listen(config.port);

// Expose app
exports = module.exports = app;

// Logging initialization
console.log('Rahul Sharma portfolio application started on port ' + config.port);
