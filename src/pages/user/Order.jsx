import React, { useState } from 'react';
import PrimaryButton from '../../components/PrimaryButton';

const Order = ({ car, onBack }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    carModel: car?.model || '',
    rentalPeriod: '1',
    pickupDate: '',
    paymentMethod: 'credit',
    insurance: 'full',
    additionalDriver: 'no'
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentStep < 3) {
      nextStep();
      return;
    }
    
    // Final submission
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      alert(`🌿 Eco-car rental confirmed for ${formData.carModel}!\n\nWe will contact you within 2 hours at ${formData.email} to confirm your rental and schedule pickup. Thank you for choosing green mobility!`);
      setIsSubmitting(false);
      onBack();
    }, 2000);
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const rentalPeriods = [
    { value: '1', name: '1 Day', price: 'Base Rate' },
    { value: '3', name: '3 Days', price: '10% Off' },
    { value: '7', name: '1 Week', price: '20% Off' },
    { value: '14', name: '2 Weeks', price: '30% Off' },
    { value: '30', name: '1 Month', price: '40% Off' }
  ];

  const carModels = [
    "Toyota Prius Hybrid",
    "Tesla Model 3", 
    "Hyundai Ioniq 5",
    "Lexus ES Hybrid",
    "Toyota RAV4 Hybrid",
    "BMW i4",
    "Honda CR-V Hybrid",
    "Nissan Leaf",
    "Toyota Corolla Cross Hybrid"
  ];

  const steps = [
    { number: 1, title: 'Personal Info', icon: '👤' },
    { number: 2, title: 'Rental Details', icon: '🚗' },
    { number: 3, title: 'Review & Book', icon: '📝' }
  ];

  // Calculate estimated price based on rental period and car
  const calculatePrice = () => {
    const basePrice = car?.price ? parseInt(car.price.replace(/[^\d]/g, '')) : 1800;
    const period = parseInt(formData.rentalPeriod);
    let multiplier = 1;
    
    if (period === 3) multiplier = 2.7; // 10% off for 3 days
    if (period === 7) multiplier = 5.6; // 20% off for 7 days
    if (period === 14) multiplier = 9.8; // 30% off for 14 days
    if (period === 30) multiplier = 18; // 40% off for 30 days
    
    return `₱${(basePrice * multiplier).toLocaleString()}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-green-900/20 py-4 sm:py-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-green-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 right-16 w-96 h-96 bg-gradient-to-r from-gray-800/20 to-green-600/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-green-400/10 to-purple-500/10 rounded-full blur-3xl animate-float-slow"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      {/* Enhanced Header */}
      <nav className="bg-gray-900/80 backdrop-blur-xl shadow-2xl py-4 sm:py-6 px-4 sm:px-6 mb-6 sm:mb-8 border-b border-green-500/20 relative z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-green-500 hover:text-green-400 font-semibold transition-all duration-300 group text-sm sm:text-base hover:translate-x-1 bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-green-500/20 hover:border-green-400/40 shadow-lg"
          >
            <span className="group-hover:-translate-x-1 transition-transform text-lg">←</span>
            Back to Cars
          </button>
          <h1 className="text-2xl sm:text-3xl font-black text-white bg-gradient-to-r from-green-500 via-purple-500 to-green-400 bg-clip-text text-transparent animate-gradient-x">
            Rent Eco Car
          </h1>
          <div className="w-20 sm:w-24"></div>
        </div>
      </nav>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        {/* Enhanced Progress Steps */}
        <div className="bg-gray-900/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 mb-8 border border-green-500/20">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center group">
                <div className={`flex items-center justify-center w-12 h-12 rounded-2xl border-2 font-bold transition-all duration-500 backdrop-blur-sm shadow-lg ${
                  currentStep >= step.number
                    ? 'bg-gradient-to-r from-green-600 to-purple-600 text-white border-transparent shadow-green-500/25 transform scale-110'
                    : 'bg-gray-800/80 text-gray-400 border-gray-600 group-hover:border-green-500 group-hover:scale-105'
                }`}>
                  {currentStep >= step.number ? step.number : step.icon}
                </div>
                <div className="ml-4">
                  <div className={`text-xs uppercase tracking-wider font-semibold ${
                    currentStep >= step.number ? 'text-green-500' : 'text-gray-400'
                  }`}>
                    Step {step.number}
                  </div>
                  <div className={`font-semibold text-sm sm:text-base ${
                    currentStep >= step.number ? 'text-white' : 'text-gray-300'
                  }`}>
                    {step.title}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`hidden sm:block w-16 h-1 mx-6 transition-all duration-500 rounded-full ${
                    currentStep > step.number 
                      ? 'bg-gradient-to-r from-green-600 to-purple-600' 
                      : 'bg-gray-600 group-hover:bg-gray-500'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Selected Vehicle Banner */}
        {car && (
          <div className="bg-gradient-to-r from-green-600/90 to-purple-600/90 backdrop-blur-xl text-white rounded-3xl p-6 sm:p-8 mb-8 shadow-2xl border border-green-400/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left">
              <div className="mb-4 sm:mb-0">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 flex items-center gap-2">
                  <span className="text-2xl">🌿</span>
                  Selected Eco Vehicle
                </h3>
                <p className="text-green-100 text-base sm:text-lg font-medium">{car.model}</p>
              </div>
              <div className="text-center sm:text-right">
                <div className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">{car.price}</div>
                <div className="text-green-100 text-sm font-light">Daily Rate</div>
              </div>
            </div>
          </div>
        )}
        
        {/* Enhanced Form Container */}
        <div className="bg-gray-900/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-500">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-8 text-center bg-gradient-to-r from-green-500 to-purple-500 bg-clip-text text-transparent">
            Eco Car Rental Form
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 flex items-center justify-center gap-3">
                    <span className="text-2xl">👤</span>
                    Personal Information
                  </h3>
                  <p className="text-gray-300 text-sm">Tell us about yourself</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-200 mb-3 group-hover:text-green-500 transition-colors duration-300">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/30 transition-all duration-300 bg-gray-800/80 backdrop-blur-sm text-white placeholder-gray-400 hover:border-gray-500 shadow-lg"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-200 mb-3 group-hover:text-green-500 transition-colors duration-300">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/30 transition-all duration-300 bg-gray-800/80 backdrop-blur-sm text-white placeholder-gray-400 hover:border-gray-500 shadow-lg"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-200 mb-3 group-hover:text-green-500 transition-colors duration-300">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/30 transition-all duration-300 bg-gray-800/80 backdrop-blur-sm text-white placeholder-gray-400 hover:border-gray-500 shadow-lg"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-200 mb-3 group-hover:text-green-500 transition-colors duration-300">
                      Additional Driver
                    </label>
                    <select
                      name="additionalDriver"
                      value={formData.additionalDriver}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/30 transition-all duration-300 bg-gray-800/80 backdrop-blur-sm text-white hover:border-gray-500 shadow-lg"
                    >
                      <option value="no">No additional driver</option>
                      <option value="yes">Yes, add additional driver</option>
                    </select>
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-200 mb-3 group-hover:text-green-500 transition-colors duration-300">
                    Delivery Address *
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/30 transition-all duration-300 bg-gray-800/80 backdrop-blur-sm text-white placeholder-gray-400 hover:border-gray-500 resize-none shadow-lg"
                    placeholder="Enter your complete address for vehicle delivery"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Rental Details */}
            {currentStep === 2 && (
              <div className="space-y-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 flex items-center justify-center gap-3">
                    <span className="text-2xl">🚗</span>
                    Rental Details
                  </h3>
                  <p className="text-gray-300 text-sm">Configure your rental period</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-200 mb-3 group-hover:text-green-500 transition-colors duration-300">
                      Car Model *
                    </label>
                    <select
                      name="carModel"
                      value={formData.carModel}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/30 transition-all duration-300 bg-gray-800/80 backdrop-blur-sm text-white hover:border-gray-500 shadow-lg"
                    >
                      <option value="">Select a car model</option>
                      {carModels.map(model => (
                        <option key={model} value={model}>{model}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-200 mb-3 group-hover:text-green-500 transition-colors duration-300">
                      Pickup Date *
                    </label>
                    <input
                      type="date"
                      name="pickupDate"
                      value={formData.pickupDate}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/30 transition-all duration-300 bg-gray-800/80 backdrop-blur-sm text-white hover:border-gray-500 shadow-lg"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-200 mb-4 group-hover:text-green-500 transition-colors duration-300">
                    Rental Period *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                    {rentalPeriods.map(period => (
                      <label key={period.value} className="flex flex-col items-center cursor-pointer group/period">
                        <input
                          type="radio"
                          name="rentalPeriod"
                          value={period.value}
                          checked={formData.rentalPeriod === period.value}
                          onChange={handleChange}
                          className="hidden"
                        />
                        <div className={`w-full p-4 rounded-2xl border-2 transition-all duration-300 shadow-lg text-center ${
                          formData.rentalPeriod === period.value 
                            ? 'border-green-500 bg-green-500/20 ring-4 ring-green-500/40 scale-105' 
                            : 'border-gray-600 bg-gray-800/60 group-hover/period:border-green-400 group-hover/period:scale-105'
                        }`}>
                          <div className="font-bold text-white text-lg mb-1">{period.name}</div>
                          <div className="text-green-400 text-sm font-medium">{period.price}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-200 mb-3 group-hover:text-green-500 transition-colors duration-300">
                    Insurance Coverage *
                  </label>
                  <select
                    name="insurance"
                    value={formData.insurance}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/30 transition-all duration-300 bg-gray-800/80 backdrop-blur-sm text-white hover:border-gray-500 shadow-lg"
                  >
                    <option value="basic">Basic Insurance (Included)</option>
                    <option value="full">Full Coverage (+₱500/day)</option>
                    <option value="premium">Premium Package (+₱800/day)</option>
                  </select>
                </div>

                {/* Price Estimate */}
                <div className="bg-green-500/10 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6">
                  <h4 className="font-semibold text-green-500 mb-3 flex items-center gap-3">
                    <span className="text-xl">💰</span>
                    Estimated Total
                  </h4>
                  <div className="text-2xl font-bold text-green-400 mb-2">
                    {calculatePrice()}
                  </div>
                  <p className="text-green-200 text-sm">
                    Includes base rental + selected insurance. Final amount confirmed upon booking.
                  </p>
                </div>
              </div>
            )}

            {/* Step 3: Review & Submit */}
            {currentStep === 3 && (
              <div className="space-y-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 flex items-center justify-center gap-3">
                    <span className="text-2xl">📝</span>
                    Review Your Rental
                  </h3>
                  <p className="text-gray-300 text-sm">Confirm your details before booking</p>
                </div>
                
                <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 space-y-6 border border-gray-700 shadow-lg">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-500 mb-3 flex items-center gap-2">
                        <span>👤</span>
                        Personal Info
                      </h4>
                      <div className="space-y-2">
                        <p className="text-gray-200 text-sm">{formData.fullName}</p>
                        <p className="text-gray-200 text-sm">{formData.email}</p>
                        <p className="text-gray-200 text-sm">{formData.phone}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-500 mb-3 flex items-center gap-2">
                        <span>🚗</span>
                        Rental Details
                      </h4>
                      <div className="space-y-2">
                        <p className="text-gray-200 text-sm">{formData.carModel}</p>
                        <p className="text-gray-200 text-sm">
                          {rentalPeriods.find(p => p.value === formData.rentalPeriod)?.name} • {formData.pickupDate}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-600 pt-4">
                    <h4 className="font-semibold text-green-500 mb-3 flex items-center gap-2">
                      <span>⚙️</span>
                      Additional Options
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                      <p className="text-gray-200">Insurance: <span className="text-green-500 capitalize">{formData.insurance}</span></p>
                      <p className="text-gray-200">Additional Driver: <span className="text-green-500">{formData.additionalDriver === 'yes' ? 'Yes' : 'No'}</span></p>
                      <p className="text-gray-200">Payment: <span className="text-green-500 capitalize">{formData.paymentMethod}</span></p>
                    </div>
                  </div>

                  <div className="border-t border-gray-600 pt-4">
                    <h4 className="font-semibold text-green-500 mb-3 flex items-center gap-2">
                      <span>💰</span>
                      Rental Summary
                    </h4>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-200">Estimated Total:</span>
                      <span className="text-2xl font-bold text-green-400">{calculatePrice()}</span>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-200 mb-3 group-hover:text-green-500 transition-colors duration-300">
                    Payment Method *
                  </label>
                  <select
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/30 transition-all duration-300 bg-gray-800/80 backdrop-blur-sm text-white hover:border-gray-500 shadow-lg"
                  >
                    <option value="credit">Credit Card</option>
                    <option value="debit">Debit Card</option>
                    <option value="gcash">GCash</option>
                    <option value="bank">Bank Transfer</option>
                  </select>
                </div>

                <div className="bg-green-500/10 backdrop-blur-sm border border-green-500/30 rounded-2xl p-4 sm:p-6">
                  <h4 className="font-semibold text-green-500 mb-3 flex items-center gap-3">
                    <span className="text-xl">📞</span>
                    Next Steps
                  </h4>
                  <p className="text-green-200 text-sm leading-relaxed">
                    After booking, our green mobility team will contact you within 2 hours to confirm your rental details, discuss delivery options, and provide eco-driving tips for your journey.
                  </p>
                </div>
              </div>
            )}

            {/* Enhanced Navigation Buttons */}
            <div className="flex flex-col sm:flex-row justify-between pt-6 border-t border-gray-700 gap-4">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-600 text-gray-300 rounded-2xl hover:bg-gray-800 hover:text-white hover:border-green-500 transition-all duration-300 font-semibold text-base backdrop-blur-sm hover:scale-105 shadow-lg order-2 sm:order-1"
                >
                  <span>←</span>
                  Previous
                </button>
              ) : (
                <button
                  type="button"
                  onClick={onBack}
                  className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-600 text-gray-300 rounded-2xl hover:bg-gray-800 hover:text-white hover:border-green-500 transition-all duration-300 font-semibold text-base backdrop-blur-sm hover:scale-105 shadow-lg order-2 sm:order-1"
                >
                  <span>←</span>
                  Cancel
                </button>
              )}
              
              {currentStep < 3 ? (
                <button
                  type="submit"
                  className="bg-gradient-to-r from-green-600 to-purple-600 text-white px-8 py-3 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold text-base shadow-lg shadow-green-500/25 backdrop-blur-sm order-1 sm:order-2 mb-4 sm:mb-0 flex items-center justify-center gap-2"
                >
                  Continue
                  <span>→</span>
                </button>
              ) : (
                <div className="order-1 sm:order-2 mb-4 sm:mb-0">
                  <PrimaryButton 
                    label={isSubmitting ? "Booking..." : "Confirm Rental"} 
                    type="primary"
                    disabled={isSubmitting}
                    size="large"
                    className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-purple-600 hover:from-green-700 hover:to-purple-700 shadow-lg shadow-green-500/25 transform hover:scale-105"
                  />
                </div>
              )}
            </div>
          </form>
        </div>
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
      `}</style>
    </div>
  );
};

export default Order;