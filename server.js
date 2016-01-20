'use strict';

var app = require('./index');
var http = require('http');

var server = http.createServer(app);

app.set('port', process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 3002);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1");

server.listen(app.get('port'), app.get('ip'));

server.on('listening', function () {
    console.log("✔ Express server listening at %s:%d ", app.get('ip'),app.get('port'));
});
