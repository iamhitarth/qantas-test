let assert = require('assert');
let flightFilter = require('../lib/flightsFilter');

describe('Flights filter will return', () => {

  let request = {
    "flights": [
    {
      "flightNumber": "801",
      "arrival": {
        "onblocks": {
          "time": "2017-06-21T01:00:00Z",
          "type": "scheduled"
        },
        "airport": "PER",
        "scheduled": "2017-06-21T01:00:00Z"
      },
      "departure": {
        "offblocks": {
          "time": "2017-06-20T21:00:00Z",
          "type": "scheduled"
        },
        "airport": "DRW",
        "scheduled": "2017-06-20T21:00:00Z"
      },
      "originDateLocal": "2017-06-21",
      "lastChanged": "2017-06-20T06:20:57Z",
      "flightSlug": "QF801",
      "originDate": "2017-06-20",
      "airline": "QF"
    },
    {
      "flightNumber": "792",
      "arrival": {
        "onblocks": {
          "time": "2017-06-21T04:04:00Z",
          "type": "actual"
        },
        "touchdown": {
          "time": "2017-06-21T03:56:00Z",
          "type": "actual"
        },
        "airport": "DRW",
        "scheduled": "2017-06-21T04:05:00Z"
      },
      "departure": {
        "airborne": {
          "time": "2017-06-21T00:41:00Z",
          "type": "actual"
        },
        "offblocks": {
          "time": "2017-06-21T00:33:00Z",
          "type": "actual"
        },
        "airport": "PER",
        "scheduled": "2017-06-21T00:35:00Z"
      },
      "originDateLocal": "2017-06-21",
      "lastChanged": "2017-06-21T04:05:42Z",
      "flightSlug": "QF792",
      "originDate": "2017-06-21",
      "airline": "QF",
      "boardingStatus": "Closed"
    },
    {
      "flightNumber": "1100",
      "arrival": {
        "onblocks": {
          "time": "2017-06-21T07:15:00Z",
          "type": "scheduled"
        },
        "airport": "ZNE",
        "scheduled": "2017-06-21T07:15:00Z"
      },
      "departure": {
        "offblocks": {
          "time": "2017-06-21T05:35:00Z",
          "type": "scheduled"
        },
        "airport": "PER",
        "scheduled": "2017-06-21T05:35:00Z"
      },
      "originDateLocal": "2017-06-21",
      "lastChanged": "2017-06-20T00:34:37Z",
      "flightSlug": "QF1100",
      "originDate": "2017-06-21",
      "airline": "QF"
    },
    {
      "flightNumber": "5793",
      "arrival": {
        "onblocks": {
          "time": "2017-06-21T08:45:00Z",
          "type": "scheduled"
        },
        "airport": "PER",
        "scheduled": "2017-06-21T08:45:00Z"
      },
      "departure": {
        "offblocks": {
          "time": "2017-06-21T04:45:00Z",
          "type": "scheduled"
        },
        "airport": "DRW",
        "scheduled": "2017-06-21T04:45:00Z"
      },
      "originDateLocal": "2017-06-21",
      "lastChanged": "2017-06-21T04:02:23Z",
      "flightSlug": "EK5793",
      "originDate": "2017-06-21",
      "airline": "EK"
    },
    {
      "flightNumber": "793",
      "arrival": {
        "onblocks": {
          "time": "2017-06-21T08:49:00Z",
          "type": "actual"
        },
        "touchdown": {
          "time": "2017-06-21T08:45:00Z",
          "type": "actual"
        },
        "airport": "PER",
        "scheduled": "2017-06-21T08:45:00Z"
      },
      "departure": {
        "airborne": {
          "time": "2017-06-21T05:08:00Z",
          "type": "actual"
        },
        "offblocks": {
          "time": "2017-06-21T04:55:00Z",
          "type": "actual"
        },
        "airport": "DRW",
        "scheduled": "2017-06-21T04:45:00Z"
      },
      "originDateLocal": "2017-06-21",
      "lastChanged": "2017-06-21T08:50:34Z",
      "flightSlug": "QF793",
      "originDate": "2017-06-21",
      "airline": "QF",
      "boardingStatus": "Closed"
    },
    {
      "flightNumber": "800",
      "arrival": {
        "onblocks": {
          "time": "2017-06-21T13:24:00Z",
          "type": "actual"
        },
        "touchdown": {
          "time": "2017-06-21T13:21:00Z",
          "type": "actual"
        },
        "airport": "DRW",
        "scheduled": "2017-06-21T13:30:00Z"
      },
      "departure": {
        "airborne": {
          "time": "2017-06-21T10:02:00Z",
          "type": "actual"
        },
        "offblocks": {
          "time": "2017-06-21T09:53:00Z",
          "type": "actual"
        },
        "airport": "PER",
        "scheduled": "2017-06-21T10:00:00Z"
      },
      "originDateLocal": "2017-06-21",
      "lastChanged": "2017-06-21T13:25:41Z",
      "flightSlug": "QF800",
      "originDate": "2017-06-21",
      "airline": "QF",
      "boardingStatus": "Closed"
    },
    {
      "flightNumber": "801",
      "arrival": {
        "onblocks": {
          "time": "2017-06-22T01:00:00Z",
          "type": "actual"
        },
        "touchdown": {
          "time": "2017-06-22T00:56:00Z",
          "type": "actual"
        },
        "airport": "PER",
        "scheduled": "2017-06-22T01:00:00Z"
      },
      "departure": {
        "airborne": {
          "time": "2017-06-21T21:21:00Z",
          "type": "actual"
        },
        "offblocks": {
          "time": "2017-06-21T21:11:00Z",
          "type": "actual"
        },
        "airport": "DRW",
        "scheduled": "2017-06-21T21:00:00Z"
      },
      "originDateLocal": "2017-06-22",
      "lastChanged": "2017-06-22T01:01:02Z",
      "flightSlug": "QF801",
      "originDate": "2017-06-21",
      "airline": "QF",
      "boardingStatus": "Closed"
    },
    {
      "flightNumber": "564",
      "arrival": {
        "onblocks": {
          "time": "2017-06-22T06:35:00Z",
          "type": "estimate"
        },
        "airport": "SYD",
        "scheduled": "2017-06-22T06:55:00Z"
      },
      "departure": {
        "airborne": {
          "time": "2017-06-22T02:58:00Z",
          "type": "actual"
        },
        "offblocks": {
          "time": "2017-06-22T02:46:00Z",
          "type": "actual"
        },
        "airport": "PER",
        "scheduled": "2017-06-22T02:45:00Z"
      },
      "originDateLocal": "2017-06-22",
      "lastChanged": "2017-06-22T05:25:25Z",
      "flightSlug": "QF564",
      "originDate": "2017-06-22",
      "airline": "QF",
      "boardingStatus": "Closed"
    },
    {
      "flightNumber": "457",
      "arrival": {
        "onblocks": {
          "time": "2017-06-22T09:20:00Z",
          "type": "scheduled"
        },
        "airport": "MEL",
        "scheduled": "2017-06-22T09:20:00Z"
      },
      "departure": {
        "offblocks": {
          "time": "2017-06-22T07:45:00Z",
          "type": "scheduled"
        },
        "airport": "SYD",
        "scheduled": "2017-06-22T07:45:00Z"
      },
      "originDateLocal": "2017-06-22",
      "lastChanged": "2017-06-22T05:28:56Z",
      "flightSlug": "QF457",
      "originDate": "2017-06-22",
      "airline": "QF"
    },
    {
      "flightNumber": "490",
      "arrival": {
        "onblocks": {
          "time": "2017-06-22T11:25:00Z",
          "type": "scheduled"
        },
        "airport": "SYD",
        "scheduled": "2017-06-22T11:25:00Z"
      },
      "departure": {
        "offblocks": {
          "time": "2017-06-22T10:00:00Z",
          "type": "scheduled"
        },
        "airport": "MEL",
        "scheduled": "2017-06-22T10:00:00Z"
      },
      "originDateLocal": "2017-06-22",
      "lastChanged": "2017-06-22T05:28:56Z",
      "flightSlug": "QF490",
      "originDate": "2017-06-22",
      "airline": "QF"
    },
    {
      "flightNumber": "5490",
      "arrival": {
        "onblocks": {
          "time": "2017-06-22T11:25:00Z",
          "type": "scheduled"
        },
        "airport": "SYD",
        "scheduled": "2017-06-22T11:25:00Z"
      },
      "departure": {
        "offblocks": {
          "time": "2017-06-22T10:00:00Z",
          "type": "scheduled"
        },
        "airport": "MEL",
        "scheduled": "2017-06-22T10:00:00Z"
      },
      "originDateLocal": "2017-06-22",
      "lastChanged": "2017-06-22T05:28:56Z",
      "flightSlug": "EK5490",
      "originDate": "2017-06-22",
      "airline": "EK"
    },
    {
      "flightNumber": "735",
      "arrival": {
        "onblocks": {
          "time": "2017-06-22T23:10:00Z",
          "type": "scheduled"
        },
        "airport": "ADL",
        "scheduled": "2017-06-22T23:10:00Z"
      },
      "departure": {
        "offblocks": {
          "time": "2017-06-22T21:00:00Z",
          "type": "scheduled"
        },
        "airport": "SYD",
        "scheduled": "2017-06-22T21:00:00Z"
      },
      "originDateLocal": "2017-06-23",
      "lastChanged": "2017-06-22T05:29:45Z",
      "flightSlug": "QF735",
      "originDate": "2017-06-22",
      "airline": "QF"
    },
    {
      "flightNumber": "738",
      "arrival": {
        "onblocks": {
          "time": "2017-06-23T01:35:00Z",
          "type": "scheduled"
        },
        "airport": "SYD",
        "scheduled": "2017-06-23T01:35:00Z"
      },
      "departure": {
        "offblocks": {
          "time": "2017-06-22T23:45:00Z",
          "type": "scheduled"
        },
        "airport": "ADL",
        "scheduled": "2017-06-22T23:45:00Z"
      },
      "originDateLocal": "2017-06-23",
      "lastChanged": "2017-06-21T18:05:41Z",
      "flightSlug": "QF738",
      "originDate": "2017-06-22",
      "airline": "QF"
    },
    {
      "flightNumber": "435",
      "arrival": {
        "onblocks": {
          "time": "2017-06-23T04:35:00Z",
          "type": "scheduled"
        },
        "airport": "MEL",
        "scheduled": "2017-06-23T04:35:00Z"
      },
      "departure": {
        "offblocks": {
          "time": "2017-06-23T03:00:00Z",
          "type": "scheduled"
        },
        "airport": "SYD",
        "scheduled": "2017-06-23T03:00:00Z"
      },
      "originDateLocal": "2017-06-23",
      "lastChanged": "2017-06-21T23:56:41Z",
      "flightSlug": "QF435",
      "originDate": "2017-06-23",
      "airline": "QF"
    },
    {
      "flightNumber": "542",
      "arrival": {
        "onblocks": {
          "time": "2017-06-23T09:00:00Z",
          "type": "scheduled"
        },
        "airport": "BNE",
        "scheduled": "2017-06-23T09:00:00Z"
      },
      "departure": {
        "offblocks": {
          "time": "2017-06-23T07:30:00Z",
          "type": "scheduled"
        },
        "airport": "SYD",
        "scheduled": "2017-06-23T07:30:00Z"
      },
      "originDateLocal": "2017-06-23",
      "lastChanged": "2017-06-22T00:00:09Z",
      "flightSlug": "QF542",
      "originDate": "2017-06-23",
      "airline": "QF"
    }
  ]
  };
  let filtered = flightFilter.getFlights(request.flights, 'SYD', false);

  it('array of flights.', () => {
 
    assert(filtered);

  });

  it('a filtered array of flights.', () => {

    assert.equal(filtered.length, 7);

  });

  it('just the expected fields for each flight.', () => {

    assert.deepEqual(filtered[0], {
      'flight': 'QF564',
      'origin': 'PER',
      'destination': 'SYD',
      'departureTime': '2017-06-22T02:45:00Z'
    });

  });

});
