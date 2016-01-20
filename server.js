'use strict';

var app = require('./index');
var http = require('http');

var server = http.createServer(app);

var ipAddress = process.env.OPENSHIFT_NODEJS_IP;
var port      = process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 8000;

server.listen(port, ipAddress);

server.on('listening', function () {
    console.log('Server listening on :%d', this.address().port);
});
