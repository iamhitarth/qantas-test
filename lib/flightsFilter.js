exports.getFlights = (flights, airport, includeCodeshare) => {
  let filteredFlights = {};
  const nonCodeshareAirline = 'QF';

  filteredFlights.flights = flights.reduce((filtered, flight) => {

    if((flight.arrival.airport == airport || flight.departure.airport == airport) &&
      (includeCodeshare || flight.airline == nonCodeshareAirline)){

      filtered.push(flight);

    }

    return filtered;
  }, []);

  return filteredFlights;
};
