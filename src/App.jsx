import React, { useState } from 'react';
import LandingPage from './page/user/LandingPage';
import Listing from './page/user/Listing';
import Order from './page/user/Order';
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
      
      {/* Tailwind Test Component */}
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-2xl shadow-2xl text-center backdrop-blur-sm border border-white/20">
          <div className="text-sm font-semibold">🎨 Tailwind Active</div>
          <div className="text-xs opacity-80">Styled with Purple-Pink Theme</div>
        </div>
      </div>
    </div>
  );
}

export default App;