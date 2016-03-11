// Setup basic express server
var cluster = require('cluster'); // Only required if you want the worker id
var express = require('express');
var app = express();
var server = require('http').createServer(function(req, res) {
  res.end('worker: ' + cluster.worker.id);
});
var sticky = require('sticky-session');

var io = require('../..')(server);
var redis =require("socket.io-redis");
io.adapter(redis({ host: 'localhost', port: 6379 }));
var port = process.env.PORT || 3000;

if (!sticky.listen(server, 3000)) {
  // Master code
  server.once('listening', function() {
    console.log('server started on 3000 port');
  });
} else {
  // Worker code
  // Routing



}

