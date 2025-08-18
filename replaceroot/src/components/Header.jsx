import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary-dark/70 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/images/rr-logo.webp" alt="Replace Roots Logo" className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-text-medium hover:text-primary-accent transition-all duration-300">Home</Link>
            <a href="#" className="text-text-medium hover:text-primary-accent transition-all duration-300">Explore</a>
            <Link to="/clinic" className="text-text-medium hover:text-primary-accent transition-all duration-300">Dental Implants</Link>
            <a href="#" className="text-text-medium hover:text-primary-accent transition-all duration-300">FAQ</a>
            <a href="#" className="text-text-medium hover:text-primary-accent transition-all duration-300">Pro Centre</a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="flex items-center space-x-2 text-text-medium hover:text-primary-accent transition-all duration-300">
              <i className="fa-regular fa-user-circle text-xl"></i>
              <span>Palak Bhatt</span>
            </a>
            <a href="#" className="bg-primary-accent text-primary-dark px-4 py-2 rounded-lg font-semibold hover:bg-primary-accent/90 transition-all duration-300 shadow-lg shadow-primary-accent/20">
              Add Your Clinic
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu} 
              className="text-text-light focus:outline-none"
            >
              <i className={`fa-solid ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-primary-light">
          <nav className="px-4 pt-2 pb-4 space-y-2">
            <Link to="/" className="block text-text-medium hover:text-primary-accent transition-all duration-300 py-2">Home</Link>
            <a href="#" className="block text-text-medium hover:text-primary-accent transition-all duration-300 py-2">Explore</a>
            <Link to="/clinic" className="block text-text-medium hover:text-primary-accent transition-all duration-300 py-2">Dental Implants</Link>
            <a href="#" className="block text-text-medium hover:text-primary-accent transition-all duration-300 py-2">FAQ</a>
            <a href="#" className="block text-text-medium hover:text-primary-accent transition-all duration-300 py-2">Pro Centre</a>
            <a href="#" className="block text-text-medium hover:text-primary-accent transition-all duration-300 py-2 border-t border-gray-700 mt-2 pt-2">Palak Bhatt</a>
            <a href="#" className="block bg-primary-accent text-primary-dark px-4 py-2 rounded-lg font-semibold hover:bg-primary-accent/90 transition-all duration-300 text-center mt-2">Add Your Clinic</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
