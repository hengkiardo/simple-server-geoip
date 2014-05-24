var express = require('express');
var geoip = require('geoip-lite');
var _ = require('lodash');
var countries = require('./data/countries-full');

var app = express();
var port = process.env.PORT || 5000;

app.get('/country', function (req, res, next) {
  res.json(countries);
})

app.get('/country/get', function (req, res, next) {

  var country = _.find(countries, req.query);

  if(country == undefined) {
    res.json(204, { 'msg' : 'No country found'});
  } else {
    res.json(200, country);
  }
})

app.get('/country/region', function (req, res, next) {

  var result = [];

  var country_region = _.find(countries, function(country) {
      return
    });

  var country_region = _.reduce(countries, function(result, country, key) {

    if(country.region.toLowerCase() == req.query.name.toLowerCase()) {
      result.push(country);
    }
    return result;
  }, []);

  if(country_region == undefined) {
    res.json(204, { 'msg' : 'No country found'});
  } else {
    res.json(200, country_region);
  }
})


app.get('/', function (req, res, next) {
  var ip = req.headers['x-forwarded-for']
          || req.connection.remoteAddress
          || req.socket.remoteAddress
          || req.connection.socket.remoteAddress;

  var ip_lookup = geoip.lookup(ip);

  if(ip_lookup !== null) {
    var country_detail = _.find(countries, function(country) {
      return country['cca2'] == ip_lookup.country
    });

    ip_lookup.country = country_detail;
  }

  var result = _.merge({ip : ip}, ip_lookup);

  res.json(result);
});


app.listen(port, function() {
  console.log("✔ Express server listening on port %d ", port);
});

module.exports = app;
