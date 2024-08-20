import React, { useState } from 'react';
import './Flight.css';
import Header from './Header';

const flightsData = [
  {
    id: 1,
    airline: 'Delta Airlines',
    departure: 'New York (JFK)',
    arrival: 'Los Angeles (LAX)',
    duration: '6h 30m',
    price: 300,
    image: 'https://www.gannett-cdn.com/-mm-/4f9536572c06b753bd58c69ec4ab925f61b2c196/c=0-139-1500-986/local/-/media/2018/06/13/USATODAY/USATODAY/636644933682848418-06-15.jpg?width=3200&height=1680&fit=crop',
  },
  {
    id: 2,
    airline: 'United Airlines',
    departure: 'Chicago (ORD)',
    arrival: 'San Francisco (SFO)',
    duration: '4h 30m',
    price: 250,
    image: 'http://latfusa.com/media/uploads/2017/04/27/united.jpg',
  },
  {
    id: 3,
    airline: 'American Airlines',
    departure: 'Miami (MIA)',
    arrival: 'Dallas (DFW)',
    duration: '3h 00m',
    price: 200,
    image: 'https://www.aviationtoday.com/wp-content/uploads/2021/12/a321xlr-american-airlines.jpeg',
  },
  {
    id: 4,
    airline: 'Kingfisher Airlines',
    departure: 'Tirupati',
    arrival: 'Delhi',
    duration: '3h 00m',
    price: 200,
    image: 'https://i.pinimg.com/736x/f9/1d/3f/f91d3f36d0134dea4b7b637f30e787af--kingfisher-airlines-times-of-india.jpg',
  },
  {
    id: 5,
    airline: 'Indigo Airlines',
    departure: 'Delhi',
    arrival: 'Tirupati',
    duration: '3h 00m',
    price: 200,
    image: 'https://tradebrains.in/wp-content/uploads/2020/10/indigo-airline-1024x576.jpg',
  },
  {
    id: 6,
    airline: 'abcd',
    departure: 'Vizag',
    arrival: 'America',
    duration: '24h 00m',
    price: 600,
    image: 'https://cdn.planespotters.net/31859/tc-ach-act-airlines-boeing-747-433bdsf_PlanespottersNet_716347_14abcd9e42_o.jpg',
  },
];

const Flight = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredFlights = flightsData.filter((flight) =>
    flight.airline.toLowerCase().includes(searchTerm.toLowerCase()) ||
    flight.departure.toLowerCase().includes(searchTerm.toLowerCase()) ||
    flight.arrival.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="flights" id="Flights1">
        <h2 className="flights-title">Book Your Flight</h2>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search flights by airline, departure, or arrival"
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
        </div>
        <div className="flights-list">
          {filteredFlights.length > 0 ? (
            filteredFlights.map((flight) => (
              <div key={flight.id} className="flight-card">
                <img src={flight.image} alt={flight.airline} className="flight-image" />
                <h3 className="flight-airline">{flight.airline}</h3>
                <p className="flight-departure">{flight.departure}</p>
                <p className="flight-arrival">{flight.arrival}</p>
                <p className="flight-duration">{flight.duration}</p>
                <p className="flight-price">${flight.price}</p>
                <button className="book-button">Book Now</button>
              </div>
            ))
          ) : (
            <p className="no-results">No flights found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Flight;
