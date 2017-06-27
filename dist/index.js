'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var flightsFilter = require('./lib/flightsFilter');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

app.use(function (err, req, res, next) {

  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {

    res.status(400).json({
      'error': 'Error parsing JSON'
    });
  }
});

app.get('/', function (req, res) {
  res.json({ message: 'Just testing Qantas test API is up and running' });
});

app.post('/', function (req, res) {
  var payload = req.body;

  if (payload && payload.flights) {

    var filtered = flightsFilter.getFlights(payload.flights, 'SYD', false);
    res.json({ flights: filtered });
  } else {

    res.status(400).json({
      'error': 'Invalid request payload'
    });
  }
});

app.listen(port);

console.log('Qantas test API is up and running on ' + port);
//# sourceMappingURL=index.js.map