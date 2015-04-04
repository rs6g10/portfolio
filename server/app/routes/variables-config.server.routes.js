'use strict';

/**
 * Module dependencies.
 */
var users = require('../controllers/users.server.controller.js'),
    variables = require('../controllers/variables-config.server.controller.js'),
    socket_io = require('socket.io');

module.exports = function(app) {
    app.route('/variablesconfig')
        .get(variables.getConfig);

    //app.route('/socketio')
    //    .get(variables.saveToDatabase);

    startSocketIOServer(app);
};

function startSocketIOServer(app){
    var io = socket_io();
    app.io = io;
    console.log('Socket IO has been started...');
}