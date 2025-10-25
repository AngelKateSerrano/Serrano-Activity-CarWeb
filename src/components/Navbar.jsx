import React from 'react';
import PrimaryButton from './PrimaryButton';

const Navbar = ({ onGetStarted }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Green Fleet', href: '#fleet' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Locations', href: '#locations' },
    { label: 'Why Go Green', href: '#why-green' },
    { label: 'Support', href: '#support' }
  ];

  return (
    <>
      <nav className={`w-full bg-white/80 backdrop-blur-xl border-b transition-all duration-300 sticky top-0 z-50 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-2xl border-gray-200 shadow-2xl' 
          : 'bg-white/80 backdrop-blur-xl border-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto py-3 sm:py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center group cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-purple-600 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/25">
                <span className="text-white font-bold text-sm">🌿</span>
              </div>
              <span className="text-gray-900 font-black text-xl bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent">
                AnGeLa
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-gray-900 transition-all duration-300 font-medium px-4 py-2 rounded-xl hover:bg-green-50 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-green-600 to-purple-600 group-hover:w-3/5 transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <PrimaryButton 
                label="Book Eco Ride" 
                onClick={onGetStarted}
                size="medium"
                className="bg-gradient-to-r from-green-600 to-purple-600 hover:from-green-700 hover:to-purple-700 shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/40"
              />
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700 hover:text-gray-900 transition-all duration-300 p-2 rounded-xl hover:bg-green-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}></div>
                <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}></div>
                <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}></div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden bg-white/95 backdrop-blur-2xl border-t border-gray-200 transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col space-y-1">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-gray-900 transition-all duration-300 font-medium py-3 px-4 rounded-xl hover:bg-green-50 hover:translate-x-2 flex items-center group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                  {item.label}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-gray-200">
                <PrimaryButton 
                  label="Book Eco Ride" 
                  onClick={() => {
                    onGetStarted();
                    setIsMenuOpen(false);
                  }}
                  size="small"
                  fullWidth
                  className="bg-gradient-to-r from-green-600 to-purple-600 hover:from-green-700 hover:to-purple-700 shadow-lg shadow-green-500/25"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;