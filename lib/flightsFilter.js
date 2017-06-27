exports.getFlights = (flights, airport, includeCodeshare) => {
  let filteredFlights = {};
  const nonCodeshareAirline = 'QF';

  filteredFlights.flights = flights.reduce((filtered, flight) => {

    if((!airport || (flight.arrival.airport == airport || flight.departure.airport == airport)) &&
      (includeCodeshare || flight.airline == nonCodeshareAirline)){

      flight = {
        flight: `${flight.airline}${flight.flightNumber}`,
        origin: `${flight.departure.airport}`,
        destination: `${flight.arrival.airport}`,
        departureTime: `${flight.departure.scheduled}`
      };
      filtered.push(flight);

    }

    return filtered;
  }, []);

  return filteredFlights;
};
