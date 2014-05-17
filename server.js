var express = require('express');
var geoip = require('geoip-lite');
var _ = require('lodash');
var countries = require('./data/countries')

var app = express();
var port = process.env.PORT || 5000;

app.get('/', function (req, res, next) {
  var ip = "118.137.237.113"
          || req.ip
          || req.headers['x-forwarded-for']
          || req.connection.remoteAddress
          || req.socket.remoteAddress
          || req.connection.socket.remoteAddress;

  var ip_lookup = geoip.lookup(ip);

  var country_detail = _.find(countries, function(country) {
    return country['alpha-2'] == ip_lookup.country
  });

  ip_lookup.country = country_detail;

  var result = _.merge({ip : ip}, ip_lookup);

  res.json(result);
});

app.listen(port, function() {
  console.log("✔ Express server listening on port %d ", port);
});

module.exports = app;
