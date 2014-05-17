var express = require('express');
var geoip = require('geoip-lite');

var app = express();
var port = process.env.PORT || 5000;

app.get('/', function (req, res, next) {
  var ip = req.ip ||
           req.headers['x-forwarded-for'] ||
           req.connection.remoteAddress ||
           req.socket.remoteAddress ||
           req.connection.socket.remoteAddress;

  var result = geoip.lookup(ip);
  res.json(result);
});

app.listen(port, function() {
  console.log("✔ Express server listening on port %d ", port);
});

module.exports = app;
