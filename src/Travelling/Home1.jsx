import React from 'react';
import { Link } from 'react-router-dom';
import './Home1.css';
import Header from './Header';

const featuredDestinations = [
  { id: 1, name: 'Bali, Indonesia', description: 'Explore the beaches and culture.', image: 'https://static.thehoneycombers.com/wp-content/uploads/sites/4/2019/08/Ulun-Danu-Beratan-in-Bedugul-Bali-Indonesia-.jpg' },
  { id: 2, name: 'Sydney, Australia', description: 'Experience the Sydney Opera House.', image: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Sydney_Opera_House_St_Patricks_2010a.jpg' },
  { id: 3, name: 'Rome, Italy', description: 'Discover the ancient ruins.', image: 'https://jooinn.com/images/colosseum-in-rome-3.jpg' },
];

const Home = () => {
  return (
    <>
      <Header />
      <div className="home" id="#Home1">
        {/* Hero Section */}
        <div className="hero">
          <h1>Explore the World with TravelSite</h1>
          <p>Find your next adventure with our exclusive deals and packages.</p>
          <Link to="/destinations" className="cta-button">Explore Destinations</Link>
        </div>

        {/* Featured Destinations */}
        <div className="featured-destinations">
          <h2>Featured Destinations</h2>
          <div className="destinations-list">
            {featuredDestinations.map((destination) => (
              <div key={destination.id} className="destination-card">
                <img src={destination.image} alt={destination.name} className="destination-image" />
                <h3 className="destination-name">{destination.name}</h3>
                <p className="destination-description">{destination.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Services */}
        <div className="popular-services">
          <h2>Popular Services</h2>
          <div className="services-list">
            <div className="service-card">
              <h3>Flight Booking</h3>
              <p>Get the best deals on flights to your favorite destinations.</p>
            </div>
            <div className="service-card">
              <h3>Hotel Reservations</h3>
              <p>Book hotels at the best prices, guaranteed.</p>
            </div>
            <div className="service-card">
              <h3>Tour Packages</h3>
              <p>Choose from a variety of tour packages tailored to your interests.</p>
            </div>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="cta-section">
          <h2>Ready to Start Your Journey?</h2>
          <Link to="/signup" className="cta-button">Sign Up Now</Link>
        </div>
      </div>
    </>
  );
};

export default Home;
