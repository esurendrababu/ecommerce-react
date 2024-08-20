import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar'; // Import NavBar from src
import Header from './Travelling/Header'; // Import Header from Travelling folder
import Home from './home'; // Ensure this path is correct
import Footer from './footer'; // Ensure this path is correct
import Login from './login'; // Ensure this path is correct
import Signup from './Signup'; // Ensure this path is correct
import Mobiles from './Mobiles'; // Ensure this path is correct
import Cart from './Cart'; // Ensure this path is correct
import Fashion from './Fashion'; // Ensure this path is correct
import Electronics from './Electronics'; // Ensure this path is correct
import Furniture from './Furniture'; // Ensure this path is correct
import Appliances from './Appliances'; // Ensure this path is correct
import Toys from './Toys'; // Ensure this path is correct
import SaveForLater from './SaveForLater'; // Ensure this path is correct
import { SaveForLaterProvider } from './SaveForLaterContext'; 
import { CartProvider } from './CartContext'; 
import DoctorConsultation from './DoctorConsultation';
import TwoWheeler from './TwoWheeler';
import FourWheeler from './FourWheeler';
import Destinations from './Travelling/Destinations'; 
import Home1 from './Travelling/Home1'
import Hotels from './Travelling/Hotels'
import Tours from './Travelling/Tours'
import Flights from './Travelling/Flights'

import './App.css';
import './Footer.css';

const App = () => {
  return (
    <Router>
      <CartProvider>
        <SaveForLaterProvider>
          <NavBar /> {/* Global NavBar */}

          <div className="mt-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/features" element={<h2>Features Page</h2>} />
              <Route path="/pricing" element={<h2>Pricing Page</h2>} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/save-for-later" element={<SaveForLater />} />
              <Route path="/fashion" element={<Fashion />} />
              <Route path="/electronics" element={<Electronics />} />
              <Route path="/furniture" element={<Furniture />} />
              <Route path="/appliances" element={<Appliances />} />
              <Route path="/toys" element={<Toys />} />
              <Route path="/mobiles" element={<Mobiles />} />
              <Route path="/TwoWheeler" element={<TwoWheeler />} />
              <Route path="/FourWheeler" element={<FourWheeler />} />
              <Route path="/DoctorConsultation" element={<DoctorConsultation />} />

              
              <Route path="/travelling/*" element={
                <>
                  <Header /> 
                   <Home1 />
                   <Destinations />
                   <Hotels /> 
                   <Tours /> 
                   <Flights />
                   
                </>
                
              } />
              <Route path="/Home1" element={<Home1 />} />

              <Route path="/Tours" element={<Tours />} />
              <Route path="/Flights" element={<Flights />} />
              <Route path="/Hotels" element={<Hotels />} />
              <Route path="/Destinations" element={<Destinations />} />
            </Routes>
          </div>

          <Footer /> {/* Global Footer */}
        </SaveForLaterProvider>
      </CartProvider>
    </Router>
  );
};

export default App;
