import React, { useState } from 'react';
import './Hotels.css';
import Header from './Header';

const hotelsData = [
  {
    id: 1,
    name: 'Hotel Sunshine',
    location: 'Paris, France',
    price: 120,
    image: 'https://a.loveholidays.com/images/holidays/75f5f3cd1bb08598754c95fb9bdae9bc2b8a8083/holidays/thailand/pattaya/sunshine-hotel-and-residences-0.jpg?auto=webp&fit=crop&height=576&width=880&quality=60',
  },
  {
    id: 2,
    name: 'Mountain Retreat',
    location: 'Tokyo, Japan',
    price: 150,
    image: 'http://www.jetsetmag.com/wp-content/uploads/2016/10/1-e1477519205265.jpg',
  },
  {
    id: 3,
    name: 'City Lights Hotel',
    location: 'New York City, USA',
    price: 200,
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/b2/79/e0/citylight-hotel.jpg?w=1400&h=-1&s=1',
  },
  {
    id: 4,
    name: 'Taj',
    location: 'Delhi, India',
    price: 150,
    image: 'https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/1/2018/05/18184827/180518_Taj_07.jpg',
  },
  {
    id: 5,
    name: 'Orion',
    location: 'Delhi, India',
    price: 150,
    image: 'https://static.readytotrip.com/upload/information_system_24/2/3/3/item_233230/information_items_233230.jpg',
  },
  {
    id: 6,
    name: 'ABC',
    location: 'Mumbai, India',
    price: 150,
    image: 'https://cdn.stardekk.com/2a884742-b9c0-43a4-b60d-45dfcfb624fb/hm-abc-bb-hr-26.jpg',
  },
];

const Hotels = () => {
  const [location, setLocation] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState(1);
  const [filteredHotels, setFilteredHotels] = useState(hotelsData);

  const handleSearch = (event) => {
    event.preventDefault();
    const filtered = hotelsData.filter(hotel =>
      hotel.location.toLowerCase().includes(location.toLowerCase())
    );
    setFilteredHotels(filtered);
  };

  return (
    <>
      <Header />
      <div className="hotels" id="Hotels">
        <h2 className="hotels-title">Book Your Hotel</h2>
        <form className="search-form" onSubmit={handleSearch}>
          <div className="form-group">
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="checkInDate">Check-In Date:</label>
            <input
              type="date"
              id="checkInDate"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="checkOutDate">Check-Out Date:</label>
            <input
              type="date"
              id="checkOutDate"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="guests">Guests:</label>
            <input
              type="number"
              id="guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              min="1"
              required
            />
          </div>
          <button type="submit" className="search-button">Search</button>
        </form>
        <div className="hotels-list">
          {filteredHotels.length > 0 ? (
            filteredHotels.map((hotel) => (
              <div key={hotel.id} className="hotel-card">
                <img src={hotel.image} alt={hotel.name} className="hotel-image" />
                <h3 className="hotel-name">{hotel.name}</h3>
                <p className="hotel-location">{hotel.location}</p>
                <p className="hotel-price">${hotel.price} per night</p>
                <button className="book-button">Book Now</button>
              </div>
            ))
          ) : (
            <p className="no-results">No hotels found for the specified location.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Hotels;
