import React, { useState } from 'react';
import './Tours.css';
import Header from './Header'; // Ensure the correct path to Header

const toursData = [
  {
    id: 1,
    name: 'Paris City Tour',
    location: 'Paris, France',
    duration: '2 days',
    price: 200,
    image: 'https://www.hdwallpapers.in/download/bridge_of_alexander_with_lights_france_paris_with_background_of_clouds_and_sky_4k_5k_hd_travel-HD.jpg',
    description: 'Explore the best of Paris with our 2-day city tour.',
  },
  {
    id: 2,
    name: 'Tokyo Highlights',
    location: 'Tokyo, Japan',
    duration: '3 days',
    price: 300,
    image: 'https://wallpaperaccess.com/full/19067.jpg',
    description: 'Discover the vibrant life of Tokyo in this 3-day tour.',
  },
  {
    id: 3,
    name: 'New York City Experience',
    location: 'New York City, USA',
    duration: '1 day',
    price: 150,
    image: 'https://www.tripsavvy.com/thmb/S9GImSO8bZfriF-0Qkn0zmWVaPU=/2119x1414/filters:fill(auto,1)/GettyImages-560482635-0d994ceb89924230adab7abc80c5fa4f.jpg',
    description: 'Get a taste of the Big Apple with our 1-day experience.',
  },
  {
    id: 4,
    name: 'India',
    location: 'Delhi, India',
    duration: '1 day',
    price: 150,
    image: 'https://wallpaperaccess.com/full/1896134.jpg',
    description: 'Experience the oldest British constructed Indian gate in a 1-day experience.',
  },
  {
    id: 5,
    name: 'Tirupati, India',
    location: 'Andhra Pradesh, India',
    duration: '1 day',
    price: 70,
    image: 'https://tse3.mm.bing.net/th?id=OIP.8UGnHx0c7ANlWEaMI1-ciwHaEK&pid=Api&P=0&h=180',
    description: 'Lorem5',
  },
  {
    id: 6,
    name: 'Tirupati City Experience',
    location: 'Andhra Pradesh, India',
    duration: '1 day',
    price: 150,
    image: 'https://kannada.oneindia.com/img/2023/05/tirumalatirupatitempledarshan-1684924442.jpg',
    description: 'Experience the spiritual city experience with great greenery.',
  },
];

const Tours = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredTours = toursData.filter((tour) =>
    tour.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tour.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header /> 
      <div className="tours">
        <h2 className="tours-title">Explore Our Tours</h2>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search tours by name or location"
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
        </div>
        <div className="tours-list">
          {filteredTours.length > 0 ? (
            filteredTours.map((tour) => (
              <div key={tour.id} className="tour-card">
                <img src={tour.image} alt={tour.name} className="tour-image" />
                <h3 className="tour-name">{tour.name}</h3>
                <p className="tour-location">{tour.location}</p>
                <p className="tour-duration">{tour.duration}</p>
                <p className="tour-price">${tour.price}</p>
                <p className="tour-description">{tour.description}</p>
                <button className="book-button">Book Now</button>
              </div>
            ))
          ) : (
            <p className="no-results">No tours found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Tours;
