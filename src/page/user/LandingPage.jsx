import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Card from '../../components/Card';
import PrimaryButton from '../../components/PrimaryButton';

const LandingPage = ({ onExplore, onOrder }) => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: "🚗",
      title: "Wide Selection",
      description: "Choose from 100+ vehicles including sedans, SUVs, luxury cars, and electric vehicles."
    },
    {
      icon: "⚡",
      title: "Instant Booking",
      description: "Book your perfect car in minutes with our streamlined reservation process."
    },
    {
      icon: "💰",
      title: "Best Prices",
      description: "Competitive rates with no hidden fees. Price match guarantee on all rentals."
    },
    {
      icon: "🛡️",
      title: "Full Insurance",
      description: "Comprehensive coverage included with 24/7 roadside assistance."
    },
    {
      icon: "🌍",
      title: "Multiple Locations",
      description: "Pick up and drop off at any of our 50+ locations nationwide."
    },
    {
      icon: "⭐",
      title: "Premium Service",
      description: "Dedicated support team and premium customer experience."
    }
  ];

  const carCategories = [
    { 
      name: "Economy", 
      models: "Toyota Vios, Honda City", 
      price: "₱1,500/day",
      seats: "5 seats",
      features: "Fuel Efficient, AC"
    },
    { 
      name: "SUV", 
      models: "Toyota Fortuner, Honda CR-V", 
      price: "₱2,500/day",
      seats: "7 seats", 
      features: "Spacious, 4WD"
    },
    { 
      name: "Luxury", 
      models: "Mercedes-Benz, BMW", 
      price: "₱5,000/day",
      seats: "5 seats", 
      features: "Premium, Leather"
    },
    { 
      name: "Electric", 
      models: "Tesla Model 3, Nissan Leaf", 
      price: "₱3,500/day",
      seats: "5 seats", 
      features: "Eco-Friendly, Fast Charge"
    }
  ];

  const stats = [
    { number: "100+", label: "Vehicles Available" },
    { number: "50+", label: "Locations" },
    { number: "24/7", label: "Customer Support" },
    { number: "4.9★", label: "Customer Rating" }
  ];

  const popularCars = [
    { name: "Toyota Vios", type: "Economy Sedan", price: "₱1,500/day", image: "🚗" },
    { name: "Honda CR-V", type: "SUV", price: "₱2,800/day", image: "🚙" },
    { name: "Toyota Innova", type: "MPV", price: "₱2,200/day", image: "🚐" },
    { name: "Mitsubishi Mirage", type: "Compact", price: "₱1,200/day", image: "🚘" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,140,0,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <Navbar onGetStarted={onExplore} />

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              
              {/* Tagline */}
              <div className="inline-flex items-center gap-3 bg-orange-500/20 backdrop-blur-lg border border-orange-500/30 px-6 py-3 rounded-full">
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-orange-300">PREMIUM CAR RENTAL SERVICE</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-6">
                <h1 className="text-6xl sm:text-7xl md:text-8xl font-black leading-none">
                  <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
                    DRIVE
                  </span>
                  <span className="block text-5xl sm:text-6xl md:text-7xl text-orange-300 mt-4">
                    YOUR DREAM
                  </span>
                </h1>
                
                {/* Animated Subtitle */}
                <div className="h-20 overflow-hidden">
                  <div className={`transition-transform duration-500 ${currentFeature === 0 ? '-translate-y-0' : currentFeature === 1 ? '-translate-y-20' : '-translate-y-40'}`}>
                    <p className="text-xl text-orange-200 mb-5">Affordable luxury cars for every occasion</p>
                    <p className="text-xl text-orange-200 mb-5">Flexible rental plans for your journey</p>
                    <p className="text-xl text-orange-200">Experience premium service on the road</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <PrimaryButton 
                  label="Book Now" 
                  onClick={onExplore}
                  size="large"
                  className="bg-gradient-to-r from-orange-500 to-amber-600 text-white hover:from-orange-600 hover:to-amber-700 border-2 border-orange-500 px-8 py-4 rounded-xl font-bold transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-orange-500/30"
                />
                <PrimaryButton 
                  label="Browse Cars" 
                  onClick={onOrder}
                  type="outline"
                  size="large"
                  className="border-2 border-orange-500 text-orange-300 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-xl font-bold transform hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                />
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-black/40 backdrop-blur-lg rounded-xl border border-orange-500/30">
                    <div className="text-2xl font-black text-orange-400 mb-1">{stat.number}</div>
                    <div className="text-sm text-orange-300 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual - Car Showcase */}
            <div className="relative">
              {/* Main Display */}
              <div className="relative h-96 lg:h-[500px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-orange-600 shadow-2xl overflow-hidden flex items-center justify-center">
                
                {/* Car Display */}
                <div className="text-center">
                  <div className="text-8xl mb-6 opacity-90">🚗</div>
                  <div className="font-mono text-orange-400 text-sm">TOYOTA FORTUNER</div>
                  <div className="font-mono text-orange-300 text-lg mt-2">READY FOR RENT</div>
                </div>

                {/* Price Tag */}
                <div className="absolute top-6 right-6 bg-orange-500 text-white px-4 py-2 rounded-full font-bold">
                  ₱2,500/day
                </div>

                {/* Features */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-orange-300 font-mono text-sm">7 Seats</div>
                      <div className="text-orange-500 text-xs">CAPACITY</div>
                    </div>
                    <div>
                      <div className="text-orange-300 font-mono text-sm">Auto</div>
                      <div className="text-orange-500 text-xs">TRANSMISSION</div>
                    </div>
                    <div>
                      <div className="text-orange-300 font-mono text-sm">Diesel</div>
                      <div className="text-orange-500 text-xs">FUEL</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-400 rounded-full blur-sm animate-float shadow-lg shadow-orange-500/50"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-amber-400 rounded-full blur-sm animate-float-delayed shadow-lg shadow-amber-500/50"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-orange-500 rounded-full flex justify-center bg-black/40 backdrop-blur-sm">
            <div className="w-1 h-3 bg-orange-400 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Popular Cars Section */}
      <section className="relative z-10 py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
                POPULAR CARS
              </span>
            </h2>
            <p className="text-xl text-orange-200 max-w-2xl mx-auto">
              Most rented vehicles loved by our customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularCars.map((car, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-orange-600 p-6 hover:border-orange-400 transition-all duration-500 hover:scale-105 cursor-pointer shadow-2xl shadow-orange-500/20 hover:shadow-orange-400/30"
              >
                <div className="space-y-4">
                  {/* Car Image */}
                  <div className="h-32 bg-gradient-to-r from-orange-900/30 to-amber-900/30 rounded-2xl flex items-center justify-center text-6xl">
                    {car.image}
                  </div>
                  
                  {/* Car Details */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-orange-300">{car.name}</h3>
                    <p className="text-orange-200 text-sm">{car.type}</p>
                    
                    {/* Price */}
                    <div className="text-2xl font-black text-orange-400">
                      {car.price}
                    </div>
                    
                    {/* Action Button */}
                    <PrimaryButton 
                      label="Rent Now" 
                      onClick={onExplore}
                      size="small"
                      className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white border-0 shadow-lg shadow-orange-500/30"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Car Categories Section */}
      <section className="relative z-10 py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
                CAR CATEGORIES
              </span>
            </h2>
            <p className="text-xl text-orange-200 max-w-2xl mx-auto">
              Choose the perfect vehicle for your needs and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {carCategories.map((category, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-orange-600 p-8 hover:border-orange-400 transition-all duration-500 hover:scale-105 cursor-pointer shadow-2xl shadow-orange-500/20"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-4 flex-1">
                    <h3 className="text-2xl font-bold text-orange-300">{category.name}</h3>
                    <p className="text-orange-200">{category.models}</p>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-orange-400">Price:</span>
                        <span className="text-orange-300 font-bold">{category.price}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-orange-400">Seats:</span>
                        <span className="text-orange-300">{category.seats}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-orange-400">Features:</span>
                        <span className="text-orange-300">{category.features}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Category Icon */}
                  <div className="text-4xl ml-6 opacity-80">
                    {category.name === "Economy" && "🚗"}
                    {category.name === "SUV" && "🚙"}
                    {category.name === "Luxury" && "🏎️"}
                    {category.name === "Electric" && "⚡"}
                  </div>
                </div>
                
                <PrimaryButton 
                  label={`View ${category.name} Cars`} 
                  onClick={onExplore}
                  size="small"
                  className="w-full mt-6 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white border-0 shadow-lg shadow-orange-500/30"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left - Feature Showcase */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-lg px-4 py-2 rounded-full mb-6 border border-orange-500/30">
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-orange-300">WHY CHOOSE US</span>
                </div>
                <h2 className="text-5xl sm:text-6xl font-black mb-6">
                  <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
                    PREMIUM
                  </span>
                  <span className="block text-orange-300">RENTAL EXPERIENCE</span>
                </h2>
                <p className="text-lg text-orange-200 leading-relaxed">
                  We provide the best car rental experience with well-maintained vehicles, 
                  competitive pricing, and exceptional customer service. Your journey begins with us.
                </p>
              </div>

              {/* Feature Highlight */}
              <div className="bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-3xl p-8 border border-orange-500/30 shadow-2xl">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-2xl font-bold text-orange-300 mb-3">Full Coverage Insurance</h3>
                <p className="text-orange-200">
                  Every rental includes comprehensive insurance coverage and 24/7 roadside assistance for complete peace of mind.
                </p>
              </div>
            </div>

            {/* Right - Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="group p-6 bg-black/40 backdrop-blur-lg rounded-2xl border border-orange-600/30 hover:border-orange-400 transition-all duration-500 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl"
                >
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 opacity-80">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-orange-300 text-lg mb-2">{feature.title}</h3>
                  <p className="text-orange-200 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Car Icon */}
          <div className="relative mb-12">
            <div className="w-32 h-32 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full mx-auto blur-xl opacity-40 animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full flex items-center justify-center shadow-2xl shadow-orange-500/50">
                <span className="text-2xl">🚗</span>
              </div>
            </div>
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
              READY TO
            </span>
            <span className="block text-orange-400">HIT THE ROAD?</span>
          </h2>

          <p className="text-xl text-orange-200 mb-12 max-w-2xl mx-auto leading-relaxed">
            Book your perfect car today and experience the freedom of the open road. 
            Quality vehicles, unbeatable prices, and exceptional service await.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <PrimaryButton 
              label="Book Your Car Now" 
              onClick={onExplore}
              size="large"
              className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 border-2 border-orange-500 text-white px-12 py-5 rounded-xl font-bold transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-orange-500/30"
            />
            <PrimaryButton 
              label="Call Us: +63 912 345 6789" 
              onClick={onOrder}
              type="outline"
              size="large"
              className="border-2 border-orange-500 text-orange-300 hover:bg-orange-500 hover:text-white px-12 py-5 rounded-xl font-bold transform hover:scale-105 transition-all duration-300 backdrop-blur-sm"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black/80 backdrop-blur-lg border-t border-orange-800 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Brand */}
            <div className="lg:col-span-1">
              <h3 className="text-3xl font-black text-orange-400 mb-6">CAR RENTAL PH</h3>
              <p className="text-orange-300 mb-8 leading-relaxed">
                Your trusted partner for quality car rentals in the Philippines. Affordable rates, premium service.
              </p>
              <div className="flex space-x-4">
                {['📞', '💬', '📧', '📍'].map((icon, index) => (
                  <div 
                    key={index} 
                    className="w-12 h-12 bg-orange-900/50 rounded-xl flex items-center justify-center hover:bg-orange-800 transition-all duration-300 cursor-pointer hover:scale-110 shadow-lg border border-orange-700"
                  >
                    <span className="text-orange-300 text-lg">{icon}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Links */}
            {[
              {
                title: "CAR TYPES",
                items: ['Economy Cars', 'SUV & MPV', 'Luxury Vehicles', 'Electric Cars']
              },
              {
                title: "SERVICES",
                items: ['Short Term Rental', 'Long Term Rental', 'Corporate Rental', 'Airport Pickup']
              },
              {
                title: "CONTACT",
                items: ['+63 912 345 6789', 'info@carrentalph.com', 'Manila, Philippines', '24/7 Support']
              }
            ].map((column, colIndex) => (
              <div key={colIndex}>
                <h4 className="text-lg font-bold text-orange-400 mb-6">{column.title}</h4>
                <ul className="space-y-4">
                  {column.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a href="#" className="text-orange-300 hover:text-orange-200 transition-all duration-300 text-base hover:translate-x-2 inline-block">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom */}
          <div className="border-t border-orange-800 mt-16 pt-8 text-center">
            <p className="text-orange-400">
              © 2024 Car Rental PH. Your journey, our priority.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.1); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-8px) scale(1.05); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;