let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let flightsFilter = require('./lib/flightsFilter');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let port = process.env.PORT || 8080;

app.use(function(err, req, res, next) {

  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {

    res.status(400).json({

      'error': 'Error parsing JSON'

    });
  }

});

app.get('/', (req, res) => {
  res.json({ message: 'Just testing Qantas test API is up and running' });
});

app.post('/', (req, res) => {
  let payload = req.body;

  if(payload && payload.flights){

    let filtered = flightsFilter.getFlights(payload.flights, 'SYD', false);
    res.json({ flights: filtered });

  }else{

    res.status(400).json({
      'error': 'Invalid request payload'
    });

  }
});

app.listen(port);

console.log(`Qantas test API is up and running on ${port}`);
