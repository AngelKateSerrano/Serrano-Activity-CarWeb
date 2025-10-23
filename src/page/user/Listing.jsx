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
      model: "Honda Civic Turbo",
      image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Sporty compact sedan with turbocharged engine and advanced safety features.",
      price: "$25,500",
      category: "sedan",
      features: ["Turbo Engine", "LED Headlights", "Apple CarPlay", "Safety Sense"],
      rating: 4.8,
      year: 2024,
      mileage: "32 MPG",
      transmission: "CVT"
    },
    {
      id: 2,
      model: "Toyota Camry Hybrid",
      image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Fuel-efficient midsize sedan with premium interior and smooth hybrid drive.",
      price: "$31,200",
      category: "sedan",
      features: ["Hybrid", "Leather Seats", "Sunroof", "JBL Audio"],
      rating: 4.7,
      year: 2024,
      mileage: "52 MPG",
      transmission: "eCVT"
    },
    {
      id: 3,
      model: "Ford Mustang GT",
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Iconic American muscle car with 5.0L V8 engine and aggressive styling.",
      price: "$42,800",
      category: "sports",
      features: ["5.0L V8", "Sport Suspension", "Premium Sound", "Track Apps"],
      rating: 4.9,
      year: 2024,
      mileage: "18 MPG",
      transmission: "10-Speed Auto"
    },
    {
      id: 4,
      model: "BMW 3 Series",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Luxury sports sedan with precision handling and premium technology.",
      price: "$45,500",
      category: "luxury",
      features: ["M Sport Package", "Heated Seats", "Head-Up Display", "Parking Assist"],
      rating: 4.8,
      year: 2024,
      mileage: "30 MPG",
      transmission: "8-Speed Auto"
    },
    {
      id: 5,
      model: "Audi A4 Quattro",
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Sophisticated luxury compact with legendary quattro all-wheel drive.",
      price: "$43,900",
      category: "luxury",
      features: ["Quattro AWD", "Virtual Cockpit", "Bang & Olufsen", "Driver Assistance"],
      rating: 4.7,
      year: 2024,
      mileage: "29 MPG",
      transmission: "7-Speed Auto"
    },
    {
      id: 6,
      model: "Mercedes C-Class",
      image: "https://images.unsplash.com/photo-1563720223485-41b7d82daaf2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Elegant luxury sedan with cutting-edge technology and premium comfort.",
      price: "$48,200",
      category: "luxury",
      features: ["MBUX System", "Ambient Lighting", "Burmester Audio", "Active Safety"],
      rating: 4.9,
      year: 2024,
      mileage: "28 MPG",
      transmission: "9-Speed Auto"
    },
    {
      id: 7,
      model: "Tesla Model 3",
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "All-electric sedan with autopilot and instant acceleration.",
      price: "$44,000",
      category: "electric",
      features: ["Autopilot", "Supercharging", "Glass Roof", "Premium Interior"],
      rating: 4.8,
      year: 2024,
      mileage: "134 MPGe",
      transmission: "Single-Speed"
    },
    {
      id: 8,
      model: "Hyundai Tucson Hybrid",
      image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Modern SUV with hybrid efficiency and spacious, tech-filled interior.",
      price: "$34,800",
      category: "suv",
      features: ["Hybrid AWD", "Panoramic Sunroof", "Smart Sense", "Wireless Charging"],
      rating: 4.6,
      year: 2024,
      mileage: "38 MPG",
      transmission: "6-Speed Auto"
    },
    {
      id: 9,
      model: "Chevrolet Tahoe RST",
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Full-size SUV with powerful V8 and premium towing capabilities.",
      price: "$68,500",
      category: "suv",
      features: ["6.2L V8", "Magnetic Ride", "Premium Package", "Towing Package"],
      rating: 4.7,
      year: 2024,
      mileage: "17 MPG",
      transmission: "10-Speed Auto"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Vehicles', icon: '🚗' },
    { id: 'sedan', name: 'Sedans', icon: '🚙' },
    { id: 'suv', name: 'SUVs', icon: '🚘' },
    { id: 'sports', name: 'Sports', icon: '🏎️' },
    { id: 'luxury', name: 'Luxury', icon: '💎' },
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-orange-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 right-16 w-96 h-96 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full blur-3xl animate-float-slow"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,140,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,140,0,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        
        {/* Animated Sparks */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-spark"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-spark-delayed"></div>
        <div className="absolute top-2/3 left-1/2 w-1.5 h-1.5 bg-red-400 rounded-full animate-spark-slow"></div>
      </div>

      {/* Enhanced Header */}
      <nav className="bg-black/80 backdrop-blur-xl shadow-2xl py-4 sm:py-6 px-4 sm:px-6 sticky top-0 z-40 border-b border-orange-800 relative">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold transition-all duration-300 group w-full sm:w-auto justify-center sm:justify-start hover:translate-x-1 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-xl border border-orange-600 hover:border-orange-400"
          >
            <span className="group-hover:-translate-x-1 transition-transform text-lg">←</span>
            Back to Home
          </button>
          <h1 className="text-2xl sm:text-3xl font-black text-center bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent animate-gradient-x order-first sm:order-none">
            Premium Vehicle Collection
          </h1>
          <div className="text-base sm:text-lg text-orange-300 font-medium bg-black/60 backdrop-blur-sm px-4 sm:px-5 py-2 rounded-full w-full sm:w-auto text-center border border-orange-600 shadow-lg">
            {filteredCars.length} Vehicles Available
          </div>
        </div>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Enhanced Search and Filter Section */}
        <div className="bg-black/60 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 mb-8 sm:mb-12 border border-orange-600 hover:border-orange-400 transition-all duration-500">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="w-full lg:w-auto relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span className="text-orange-400 text-lg">🔍</span>
              </div>
              <input
                type="text"
                placeholder="Search vehicles by model..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full lg:w-96 pl-12 pr-4 py-4 border border-orange-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/30 bg-black/60 backdrop-blur-sm text-white placeholder-orange-300 transition-all duration-300 hover:border-orange-400 shadow-lg"
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
                      ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/25 transform scale-105 border-orange-500/50'
                      : 'bg-black/60 text-orange-300 hover:bg-orange-500/20 border-orange-600 hover:border-orange-400 hover:scale-105 shadow-lg'
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
              className="group relative bg-black/60 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden hover:shadow-orange-500/20 transition-all duration-700 border border-orange-600 hover:border-orange-400 hover:scale-105"
            >
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative overflow-hidden">
                <img
                  src={car.image}
                  alt={car.model}
                  className="w-full h-52 sm:h-60 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Enhanced Badges */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-600 text-white px-3 py-2 rounded-xl text-xs sm:text-sm font-bold shadow-lg backdrop-blur-sm">
                  {car.category.toUpperCase()}
                </div>
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm text-orange-300 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-orange-600 shadow-lg">
                  {car.year}
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-1 bg-black/80 backdrop-blur-sm text-orange-300 px-3 py-2 rounded-xl border border-yellow-400/30 shadow-lg">
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-sm font-bold">{car.rating}</span>
                </div>
              </div>
              
              <div className="relative p-6 sm:p-7 bg-gradient-to-b from-black/70 to-black/60">
                <h3 className="text-xl sm:text-2xl font-black text-orange-300 mb-3 group-hover:text-orange-400 transition-colors duration-300">
                  {car.model}
                </h3>
                <p className="text-orange-200 mb-5 leading-relaxed text-sm sm:text-base font-light">
                  {car.description}
                </p>
                
                {/* Enhanced Specs Grid */}
                <div className="grid grid-cols-2 gap-4 mb-5">
                  <div className="text-center bg-black/40 backdrop-blur-sm rounded-xl p-3 border border-orange-600 hover:border-orange-400 transition-colors duration-300 shadow-lg">
                    <div className="text-xs text-orange-400 font-medium mb-1">Fuel Economy</div>
                    <div className="text-sm font-semibold text-orange-300">{car.mileage}</div>
                  </div>
                  <div className="text-center bg-black/40 backdrop-blur-sm rounded-xl p-3 border border-orange-600 hover:border-orange-400 transition-colors duration-300 shadow-lg">
                    <div className="text-xs text-orange-400 font-medium mb-1">Transmission</div>
                    <div className="text-sm font-semibold text-orange-300">{car.transmission}</div>
                  </div>
                </div>
                
                {/* Enhanced Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {car.features.slice(0, 3).map((feature, index) => (
                    <span 
                      key={index} 
                      className="bg-orange-500/20 backdrop-blur-sm text-orange-300 px-3 py-2 rounded-xl text-xs border border-orange-600 hover:bg-orange-500/30 transition-all duration-300 hover:scale-105 shadow-sm"
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
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t border-orange-600">
                  <div className="flex flex-col">
                    <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                      {car.price}
                    </div>
                    <div className="text-xs text-orange-500 font-light">Starting Price</div>
                  </div>
                  <PrimaryButton 
                    label="Order Now" 
                    onClick={() => onOrder(car)}
                    type="primary"
                    size="medium"
                    className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 shadow-lg shadow-orange-500/25 transform hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced No Results Message */}
        {currentCars.length === 0 && (
          <div className="text-center py-16 sm:py-20 bg-black/60 backdrop-blur-xl rounded-3xl shadow-2xl border border-orange-600 hover:border-orange-400 transition-all duration-500">
            <div className="text-6xl sm:text-7xl mb-6 animate-bounce">🚗</div>
            <h3 className="text-2xl sm:text-3xl font-black text-orange-300 mb-3 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              No vehicles found
            </h3>
            <p className="text-orange-200 mb-6 text-lg font-light max-w-md mx-auto">
              Try adjusting your search or filter criteria to discover your perfect vehicle
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="text-orange-400 hover:text-orange-300 font-semibold text-lg transition-all duration-300 hover:scale-105 bg-black/60 backdrop-blur-sm px-6 py-3 rounded-xl border border-orange-600 hover:border-orange-400 shadow-lg"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Enhanced Pagination */}
        {totalPages > 1 && (
          <div className="flex flex-wrap justify-center gap-3 backdrop-blur-sm bg-black/60 rounded-2xl p-6 border border-orange-600 shadow-2xl">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="flex items-center gap-2 px-5 py-3 border border-orange-600 rounded-xl disabled:opacity-50 hover:bg-orange-500/20 transition-all duration-300 font-medium text-orange-300 hover:text-orange-200 hover:border-orange-400 hover:scale-105 backdrop-blur-sm shadow-lg"
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
                    ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-orange-500/25 transform scale-105'
                    : 'border border-orange-600 hover:bg-orange-500/20 text-orange-300 hover:text-orange-200 hover:border-orange-400 hover:scale-105'
                }`}
              >
                {index + 1}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="flex items-center gap-2 px-5 py-3 border border-orange-600 rounded-xl disabled:opacity-50 hover:bg-orange-500/20 transition-all duration-300 font-medium text-orange-300 hover:text-orange-200 hover:border-orange-400 hover:scale-105 backdrop-blur-sm shadow-lg"
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