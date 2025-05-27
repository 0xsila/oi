import React from 'react';
import { FaHome, FaBuilding, FaCar } from 'react-icons/fa';
import NavbarProf from './NavbarProf';
import './PropertyTypes.css';

const PropertyTypes = () => {
  return (
    <div className="property-types-container">
      <NavbarProf />
      <div className="property-types-content">
        <h1 className="property-types-title">Host an Experience</h1>
        <h2 className="property-types-subtitle">Choose Your Property Type</h2>
        <div className="property-cards-container">
          <div className="property-card">
            <div className="card-icon">
              <FaHome />
            </div>
            <h2>Home</h2>
            <p>Find your perfect home with our extensive listings</p>
            <button className="get-started-btn">Get Started</button>
          </div>

          <div className="property-card">
            <div className="card-icon">
              <FaBuilding />
            </div>
            <h2>Apartment</h2>
            <p>Discover modern apartments in prime locations</p>
            <button className="get-started-btn">Get Started</button>
          </div>

          <div className="property-card">
            <div className="card-icon">
              <FaCar />
            </div>
            <h2>Car</h2>
            <p>Rent or buy your dream car with flexible options</p>
            <button className="get-started-btn">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyTypes; 