import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar'; // Adjust the import path if necessary
import './Header.css';
// import Footer from '../footer';


const Header = () => (
  <header className="header">
    <NavBar /> 
    <nav className="navbar">
      <Link to="/Home1" className="logo">TravelSite</Link>
      <ul className="nav-menu">
        <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
        <li className="nav-item"><Link to="/Destinations" className="nav-link">Destinations</Link></li>
        <li className="nav-item"><Link to="/tours" className="nav-link">Tours</Link></li>
        <li className="nav-item"><Link to="/hotels" className="nav-link">Hotels</Link></li>
        <li className="nav-item"><Link to="/Flights" className="nav-link">Flights</Link></li>
        
        <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
        <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
        <li className="nav-item"><Link to="/user-account" className="nav-link">Account</Link></li>
      </ul>
    </nav>
    
  </header>
);

export default Header;
