import React, { useState } from 'react';
import LandingPage from './pages/user/LandingPage';
import Listing from './pages/user/Listing';
import Order from './pages/user/Order';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [selectedCar, setSelectedCar] = useState(null);

  const handleExplore = () => {
    setCurrentPage('listing');
  };

  const handleOrder = (car = null) => {
    setSelectedCar(car);
    setCurrentPage('order');
  };

  const handleBackToHome = () => {
    setCurrentPage('landing');
    setSelectedCar(null);
  };

  const handleBackToListing = () => {
    setCurrentPage('listing');
    setSelectedCar(null);
  };

  return (
    <div className="App">
      {currentPage === 'landing' && (
        <LandingPage onExplore={handleExplore} onOrder={handleOrder} />
      )}
      {currentPage === 'listing' && (
        <Listing onOrder={handleOrder} onBack={handleBackToHome} />
      )}
      {currentPage === 'order' && (
        <Order car={selectedCar} onBack={handleBackToListing} />
      )}
    </div>
  );
}

export default App;