import { useState } from 'react';
import { Link } from 'react-router-dom';

const ClinicHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <img src="/images/rr-logo.webp" alt="Replace Roots Logo" className="h-10 w-auto transition-transform group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-teal-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">ReplaceRoots Dental</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-cyan-600 font-medium transition-all duration-300 relative group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <a href="#about" className="text-gray-700 hover:text-cyan-600 font-medium transition-all duration-300 relative group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#services" className="text-gray-700 hover:text-cyan-600 font-medium transition-all duration-300 relative group">
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#pricing" className="text-gray-700 hover:text-cyan-600 font-medium transition-all duration-300 relative group">
            Pricing
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#contact" className="text-gray-700 hover:text-cyan-600 font-medium transition-all duration-300 relative group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>
        
        <a href="#appointment" className="hidden md:block bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
          <i className="fa-solid fa-calendar-check mr-2"></i>
          Book Appointment
        </a>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-600 focus:outline-none"
        >
          <i className={`fa-solid ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
            <div className="px-6 py-4 space-y-4">
              <Link to="/" className="block text-gray-600 hover:text-teal-500 transition">Home</Link>
              <a href="#about" className="block text-gray-600 hover:text-teal-500 transition">About</a>
              <a href="#services" className="block text-gray-600 hover:text-teal-500 transition">Services</a>
              <a href="#pricing" className="block text-gray-600 hover:text-teal-500 transition">Pricing</a>
              <a href="#contact" className="block text-gray-600 hover:text-teal-500 transition">Contact</a>
              <a href="#appointment" className="block bg-teal-500 hover:bg-teal-600 text-white font-semibold px-5 py-2 rounded-lg transition text-center">
                Book Appointment
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default ClinicHeader;
