import React from 'react';
import './Destinations.css'; 
import Header from './Header';

const destinations = [
  {
    id: 1,
    name: 'Paris, France',
    description: 'Experience the city of lights and the iconic Eiffel Tower.',
    image: 'https://img5.goodfon.com/wallpaper/nbig/c/93/eiffel-tower-paris-france-eifeleva-bashnia-parizh-frantsiia.jpg',
  },
  {
    id: 2,
    name: 'Tokyo, Japan',
    description: 'Explore the bustling city and the traditional temples.',
    image: 'https://res.cloudinary.com/jnto/image/upload/w_2000,h_1309,c_fill,f_auto,fl_lossy,q_auto/v1/media/filer_public/d4/ce/d4ce9c41-6bfe-4996-a998-271866907abd/02shutterstock_188615729_zynqxa',
  },
  {
    id: 3,
    name: 'Delhi, India',
    description: 'Experience the love of Mughal.',
    image: 'https://www.tapeciarnia.pl/tapety/normalne/237063_tadz_mahal_agra_indie_palac_zachod_slonca_ogrod.jpg',
  },
  // Add more destinations as needed
];

const Destinations = () => (
  <>
    <Header />
    <div className="destinations" id="#1">
      <h2 className="destinations-title">Top Destinations</h2>
      <div className="destinations-list">
        {destinations.map((destination) => (
          <div key={destination.id} className="destination-card">
            <img src={destination.image} alt={destination.name} className="destination-image" />
            <h3 className="destination-name">{destination.name}</h3>
            <p className="destination-description">{destination.description}</p>
          </div>
        ))}
      </div>
    </div>
  </>
);

export default Destinations;
