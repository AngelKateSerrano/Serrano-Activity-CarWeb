import React, { useState } from 'react';
import PrimaryButton from '../../components/PrimaryButton';

const Listing = ({ onOrder, onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const carsPerPage = 6;

  const cars = [
    {
      id: 1,
      model: "Toyota Prius Hybrid",
      image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Fuel-efficient hybrid with advanced eco-technology and premium comfort features.",
      price: "₱1,800/day",
      category: "eco-friendly",
      features: ["Hybrid Engine", "Eco Mode", "Wireless Charging", "Safety Sense"],
      rating: 4.8,
      year: 2024,
      mileage: "52 MPG",
      transmission: "eCVT"
    },
    {
      id: 2,
      model: "Tesla Model 3",
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "All-electric sedan with autopilot and instant acceleration for zero-emission driving.",
      price: "₱3,500/day",
      category: "electric",
      features: ["Autopilot", "Supercharging", "Glass Roof", "Premium Interior"],
      rating: 4.9,
      year: 2024,
      mileage: "134 MPGe",
      transmission: "Single-Speed"
    },
    {
      id: 3,
      model: "Hyundai Ioniq 5",
      image: "https://images.unsplash.com/photo-1632661138117-19c4cf18c733?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Futuristic electric crossover with ultra-fast charging and spacious interior.",
      price: "₱3,200/day",
      category: "electric",
      features: ["800V Charging", "Solar Roof", "AR HUD", "V2L"],
      rating: 4.7,
      year: 2024,
      mileage: "120 MPGe",
      transmission: "Single-Speed"
    },
    {
      id: 4,
      model: "Lexus ES Hybrid",
      image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Luxury hybrid sedan with exceptional fuel economy and premium amenities.",
      price: "₱4,500/day",
      category: "premium",
      features: ["Hybrid Luxury", "Mark Levinson Audio", "Heated Seats", "Driver Assistance"],
      rating: 4.8,
      year: 2024,
      mileage: "44 MPG",
      transmission: "eCVT"
    },
    {
      id: 5,
      model: "Toyota RAV4 Hybrid",
      image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Popular hybrid SUV with all-wheel drive and advanced safety features.",
      price: "₱2,800/day",
      category: "suv",
      features: ["AWD Hybrid", "Apple CarPlay", "Safety Sense", "Spacious"],
      rating: 4.7,
      year: 2024,
      mileage: "40 MPG",
      transmission: "eCVT"
    },
    {
      id: 6,
      model: "BMW i4",
      image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Electric luxury sedan with sporty performance and cutting-edge technology.",
      price: "₱5,000/day",
      category: "premium",
      features: ["M Sport", "iDrive 8", "Premium Sound", "Fast Charge"],
      rating: 4.9,
      year: 2024,
      mileage: "108 MPGe",
      transmission: "Single-Speed"
    },
    {
      id: 7,
      model: "Honda CR-V Hybrid",
      image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Reliable hybrid SUV with excellent fuel economy and versatile cargo space.",
      price: "₱2,600/day",
      category: "suv",
      features: ["Hybrid AWD", "Honda Sensing", "Spacious", "Fuel Efficient"],
      rating: 4.6,
      year: 2024,
      mileage: "38 MPG",
      transmission: "eCVT"
    },
    {
      id: 8,
      model: "Nissan Leaf",
      image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Affordable electric hatchback with proven reliability and low operating costs.",
      price: "₱2,200/day",
      category: "electric",
      features: ["ProPILOT", "e-Pedal", "Apple CarPlay", "Affordable EV"],
      rating: 4.5,
      year: 2024,
      mileage: "123 MPGe",
      transmission: "Single-Speed"
    },
    {
      id: 9,
      model: "Toyota Corolla Cross Hybrid",
      image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Compact hybrid SUV with Toyota reliability and excellent fuel efficiency.",
      price: "₱2,300/day",
      category: "eco-friendly",
      features: ["Hybrid SUV", "Safety Sense", "Compact", "Fuel Efficient"],
      rating: 4.6,
      year: 2024,
      mileage: "45 MPG",
      transmission: "eCVT"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Vehicles', icon: '🚗' },
    { id: 'eco-friendly', name: 'Eco-Friendly', icon: '🌿' },
    { id: 'suv', name: 'SUVs', icon: '🚙' },
    { id: 'premium', name: 'Premium', icon: '💎' },
    { id: 'electric', name: 'Electric', icon: '⚡' }
  ];

  const filteredCars = cars.filter(car => {
    const matchesSearch = car.model.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || car.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);
  const totalPages = Math.ceil(filteredCars.length / carsPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-green-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-green-500/20 to-purple-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 right-16 w-96 h-96 bg-gradient-to-r from-green-500/20 to-purple-500/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-green-500/20 rounded-full blur-3xl animate-float-slow"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        
        {/* Animated Sparks */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-spark"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-spark-delayed"></div>
        <div className="absolute top-2/3 left-1/2 w-1.5 h-1.5 bg-green-300 rounded-full animate-spark-slow"></div>
      </div>

      {/* Enhanced Header */}
      <nav className="bg-black/80 backdrop-blur-xl shadow-2xl py-4 sm:py-6 px-4 sm:px-6 sticky top-0 z-40 border-b border-green-800 relative">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-green-400 hover:text-green-300 font-semibold transition-all duration-300 group w-full sm:w-auto justify-center sm:justify-start hover:translate-x-1 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-xl border border-green-600 hover:border-green-400"
          >
            <span className="group-hover:-translate-x-1 transition-transform text-lg">←</span>
            Back to Home
          </button>
          <h1 className="text-2xl sm:text-3xl font-black text-center bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent animate-gradient-x order-first sm:order-none">
            Eco-Friendly Vehicle Collection
          </h1>
          <div className="text-base sm:text-lg text-green-300 font-medium bg-black/60 backdrop-blur-sm px-4 sm:px-5 py-2 rounded-full w-full sm:w-auto text-center border border-green-600 shadow-lg">
            {filteredCars.length} Green Vehicles Available
          </div>
        </div>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Enhanced Search and Filter Section */}
        <div className="bg-black/60 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 mb-8 sm:mb-12 border border-green-600 hover:border-green-400 transition-all duration-500">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="w-full lg:w-auto relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span className="text-green-400 text-lg">🔍</span>
              </div>
              <input
                type="text"
                placeholder="Search eco-friendly vehicles..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full lg:w-96 pl-12 pr-4 py-4 border border-green-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/30 bg-black/60 backdrop-blur-sm text-white placeholder-green-300 transition-all duration-300 hover:border-green-400 shadow-lg"
              />
            </div>
            
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setCurrentPage(1);
                  }}
                  className={`flex items-center gap-2 px-4 sm:px-5 py-3 rounded-2xl font-medium transition-all duration-300 text-sm sm:text-base backdrop-blur-sm border ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-green-500 to-purple-600 text-white shadow-lg shadow-green-500/25 transform scale-105 border-green-500/50'
                      : 'bg-black/60 text-green-300 hover:bg-green-500/20 border-green-600 hover:border-green-400 hover:scale-105 shadow-lg'
                  }`}
                >
                  <span className="text-lg">{category.icon}</span>
                  <span className="hidden sm:inline">{category.name}</span>
                  <span className="sm:hidden">{category.name.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Car Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-10 mb-12">
          {currentCars.map(car => (
            <div 
              key={car.id} 
              className="group relative bg-black/60 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden hover:shadow-green-500/20 transition-all duration-700 border border-green-600 hover:border-green-400 hover:scale-105"
            >
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative overflow-hidden">
                <img
                  src={car.image}
                  alt={car.model}
                  className="w-full h-52 sm:h-60 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Enhanced Badges */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-purple-600 text-white px-3 py-2 rounded-xl text-xs sm:text-sm font-bold shadow-lg backdrop-blur-sm">
                  {car.category.toUpperCase()}
                </div>
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm text-green-300 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-green-600 shadow-lg">
                  {car.year}
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-1 bg-black/80 backdrop-blur-sm text-green-300 px-3 py-2 rounded-xl border border-yellow-400/30 shadow-lg">
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-sm font-bold">{car.rating}</span>
                </div>
              </div>
              
              <div className="relative p-6 sm:p-7 bg-gradient-to-b from-black/70 to-black/60">
                <h3 className="text-xl sm:text-2xl font-black text-green-300 mb-3 group-hover:text-green-400 transition-colors duration-300">
                  {car.model}
                </h3>
                <p className="text-green-200 mb-5 leading-relaxed text-sm sm:text-base font-light">
                  {car.description}
                </p>
                
                {/* Enhanced Specs Grid */}
                <div className="grid grid-cols-2 gap-4 mb-5">
                  <div className="text-center bg-black/40 backdrop-blur-sm rounded-xl p-3 border border-green-600 hover:border-green-400 transition-colors duration-300 shadow-lg">
                    <div className="text-xs text-green-400 font-medium mb-1">Fuel Economy</div>
                    <div className="text-sm font-semibold text-green-300">{car.mileage}</div>
                  </div>
                  <div className="text-center bg-black/40 backdrop-blur-sm rounded-xl p-3 border border-green-600 hover:border-green-400 transition-colors duration-300 shadow-lg">
                    <div className="text-xs text-green-400 font-medium mb-1">Transmission</div>
                    <div className="text-sm font-semibold text-green-300">{car.transmission}</div>
                  </div>
                </div>
                
                {/* Enhanced Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {car.features.slice(0, 3).map((feature, index) => (
                    <span 
                      key={index} 
                      className="bg-green-500/20 backdrop-blur-sm text-green-300 px-3 py-2 rounded-xl text-xs border border-green-600 hover:bg-green-500/30 transition-all duration-300 hover:scale-105 shadow-sm"
                    >
                      {feature}
                    </span>
                  ))}
                  {car.features.length > 3 && (
                    <span className="bg-gray-800 backdrop-blur-sm text-gray-400 px-3 py-2 rounded-xl text-xs border border-gray-700 shadow-sm">
                      +{car.features.length - 3} more
                    </span>
                  )}
                </div>
                
                {/* Enhanced Price and CTA */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t border-green-600">
                  <div className="flex flex-col">
                    <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent">
                      {car.price}
                    </div>
                    <div className="text-xs text-green-500 font-light">Daily Rate</div>
                  </div>
                  <PrimaryButton 
                    label="Rent Eco Car" 
                    onClick={() => onOrder(car)}
                    type="primary"
                    size="medium"
                    className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-purple-600 hover:from-green-600 hover:to-purple-700 shadow-lg shadow-green-500/25 transform hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced No Results Message */}
        {currentCars.length === 0 && (
          <div className="text-center py-16 sm:py-20 bg-black/60 backdrop-blur-xl rounded-3xl shadow-2xl border border-green-600 hover:border-green-400 transition-all duration-500">
            <div className="text-6xl sm:text-7xl mb-6 animate-bounce">🌿</div>
            <h3 className="text-2xl sm:text-3xl font-black text-green-300 mb-3 bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent">
              No green vehicles found
            </h3>
            <p className="text-green-200 mb-6 text-lg font-light max-w-md mx-auto">
              Try adjusting your search or filter criteria to discover your perfect eco-friendly vehicle
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="text-green-400 hover:text-green-300 font-semibold text-lg transition-all duration-300 hover:scale-105 bg-black/60 backdrop-blur-sm px-6 py-3 rounded-xl border border-green-600 hover:border-green-400 shadow-lg"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Enhanced Pagination */}
        {totalPages > 1 && (
          <div className="flex flex-wrap justify-center gap-3 backdrop-blur-sm bg-black/60 rounded-2xl p-6 border border-green-600 shadow-2xl">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="flex items-center gap-2 px-5 py-3 border border-green-600 rounded-xl disabled:opacity-50 hover:bg-green-500/20 transition-all duration-300 font-medium text-green-300 hover:text-green-200 hover:border-green-400 hover:scale-105 backdrop-blur-sm shadow-lg"
            >
              <span>←</span>
              Previous
            </button>
            
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-5 py-3 rounded-xl font-medium transition-all duration-300 backdrop-blur-sm shadow-lg ${
                  currentPage === index + 1
                    ? 'bg-gradient-to-r from-green-500 to-purple-600 text-white shadow-green-500/25 transform scale-105'
                    : 'border border-green-600 hover:bg-green-500/20 text-green-300 hover:text-green-200 hover:border-green-400 hover:scale-105'
                }`}
              >
                {index + 1}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="flex items-center gap-2 px-5 py-3 border border-green-600 rounded-xl disabled:opacity-50 hover:bg-green-500/20 transition-all duration-300 font-medium text-green-300 hover:text-green-200 hover:border-green-400 hover:scale-105 backdrop-blur-sm shadow-lg"
            >
              Next
              <span>→</span>
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(-180deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-15px) scale(1.05); }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes spark {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        .animate-spark {
          animation: spark 2s ease-in-out infinite;
        }
        .animate-spark-delayed {
          animation: spark 3s ease-in-out infinite 1s;
        }
        .animate-spark-slow {
          animation: spark 4s ease-in-out infinite 2s;
        }
      `}</style>
    </div>
  );
};

export default Listing;