import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const services = [
    { name: 'Single Tooth Implant', path: '/services/single-tooth-implant' },
    { name: 'Multiple Tooth Implants', path: '/services/multiple-tooth-implants' }, 
    { name: 'Full Mouth Dental Implants', path: '/services/full-mouth-dental-implants' },
    { name: 'All-on-4 Implants', path: '/services/all-on-4-implants' },
    { name: 'All-on-6 Implants', path: '/services/all-on-6-implants' },
    { name: 'Immediate Implants (Same Day Implants)', path: '/services/immediate-implants' },
    { name: 'Mini Dental Implants', path: '/services/mini-implants' },
    { name: 'Zygomatic Implants', path: '/services/zygomatic-implants' },
    { name: 'Basal Implants (Cortical Implants)', path: '/services/basal-implants' },
    { name: 'Overdentures (Implant-Supported Dentures)', path: '/services/overdentures' },
    { name: 'Bone Grafting Services', path: '/services/bone-grafting' },
    { name: 'Sinus Lift Surgery', path: '/services/sinus-lift' },
    { name: 'Guided Implant Surgery (Digital Implants)', path: '/services/guided-implants' }
  ];

  const leadServices = [
    { name: 'How we generate leads', path: '/leads/how-we-generate-leads' },
    { name: 'Benefits for dentists', path: '/leads/benefits-for-dentists' },
    { name: 'Process explanation', path: '/leads/process-explanation' }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img src="/images/logo-nav.png" alt="Replace Roots Logo" className="h-10 w-auto transition-transform group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-teal-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-cyan-600 font-medium transition-all duration-300 relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              
              <Link to="/about" className="text-gray-700 hover:text-cyan-600 font-medium transition-all duration-300 relative group">
                About Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
              </Link>

              {/* Services Dropdown */}
              <div className="relative group">
                <button 
                  onClick={toggleServicesDropdown}
                  className="text-gray-700 hover:text-cyan-600 font-medium transition-all duration-300 relative group flex items-center space-x-1"
                >
                  <span>Services</span>
                  <i className="fa-solid fa-chevron-down text-xs transition-transform duration-300 group-hover:rotate-180"></i>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
                </button>
                
                {/* Services Dropdown Menu */}
                <div className={`absolute top-full left-0 mt-2 w-[800px] bg-white rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2`}>
                  <div className="p-6">
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">Dental Implant Services</h4>
                      <div className="grid grid-cols-3 gap-3">
                        {services.map((service, index) => (
                          <Link 
                            key={index} 
                            to={service.path}
                            className="text-sm text-gray-600 hover:text-cyan-600 hover:bg-cyan-50 px-3 py-2 rounded-lg transition-all duration-200 flex items-center"
                          >
                            <i className="fa-solid fa-tooth text-cyan-500 mr-2 text-xs"></i>
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">Dental Implant Leads</h4>
                      <div className="grid grid-cols-3 gap-3">
                        {leadServices.map((service, index) => (
                          <Link 
                            key={index} 
                            to={service.path}
                            className="text-sm text-gray-600 hover:text-cyan-600 hover:bg-cyan-50 px-3 py-2 rounded-lg transition-all duration-200 flex items-center"
                          >
                            <i className="fa-solid fa-chart-line text-cyan-500 mr-2 text-xs"></i>
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link to="/for-dentists" className="text-gray-700 hover:text-cyan-600 font-medium transition-all duration-300 relative group">
                For Dentists
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              
              <Link to="/for-patients" className="text-gray-700 hover:text-cyan-600 font-medium transition-all duration-300 relative group">
                For Patients
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              
              <Link to="/pricing" className="text-gray-700 hover:text-cyan-600 font-medium transition-all duration-300 relative group">
                Pricing
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              
              <Link to="/blog" className="text-gray-700 hover:text-cyan-600 font-medium transition-all duration-300 relative group">
                Blog
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              
              <Link to="/case-studies" className="text-gray-700 hover:text-cyan-600 font-medium transition-all duration-300 relative group">
                Case Study
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              
              <Link to="/faqs" className="text-gray-700 hover:text-cyan-600 font-medium transition-all duration-300 relative group">
                FAQs
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              
              <Link to="/contact" className="text-gray-700 hover:text-cyan-600 font-medium transition-all duration-300 relative group">
                Contact Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
              <a href="#" className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Add Your Clinic
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu} 
                className="text-gray-600 focus:outline-none"
            >
              <i className={`fa-solid ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
          <nav className="px-4 pt-2 pb-4 space-y-2">
              <Link to="/" className="block text-gray-600 hover:text-cyan-600 transition-all duration-300 py-2">Home</Link>
              <Link to="/about" className="block text-gray-600 hover:text-cyan-600 transition-all duration-300 py-2">About Us</Link>
              
              {/* Mobile Services Section */}
              <div className="border-t border-gray-100 pt-2">
                <div className="text-gray-600 font-medium py-2">Services</div>
                <div className="pl-4 space-y-1">
                  <div className="text-sm font-medium text-gray-500 mb-2">Dental Implant Services:</div>
                  {services.slice(0, 5).map((service, index) => (
                    <Link key={index} to={service.path} className="block text-gray-500 hover:text-cyan-600 transition-all duration-300 py-1 text-sm">
                      {service.name}
                    </Link>
                  ))}
                  <div className="text-sm font-medium text-gray-500 mb-2 mt-3">Dental Implant Leads:</div>
                  {leadServices.map((service, index) => (
                    <Link key={index} to={service.path} className="block text-gray-500 hover:text-cyan-600 transition-all duration-300 py-1 text-sm">
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link to="/for-dentists" className="block text-gray-600 hover:text-cyan-600 transition-all duration-300 py-2">For Dentists</Link>
              <Link to="/for-patients" className="block text-gray-600 hover:text-cyan-600 transition-all duration-300 py-2">For Patients</Link>
              <Link to="/pricing" className="block text-gray-600 hover:text-cyan-600 transition-all duration-300 py-2">Pricing</Link>
              <Link to="/blog" className="block text-gray-600 hover:text-cyan-600 transition-all duration-300 py-2">Blog</Link>
              <Link to="/case-studies" className="block text-gray-600 hover:text-cyan-600 transition-all duration-300 py-2">Case Study</Link>
              <Link to="/faqs" className="block text-gray-600 hover:text-cyan-600 transition-all duration-300 py-2">FAQs</Link>
              <Link to="/contact" className="block text-gray-600 hover:text-cyan-600 transition-all duration-300 py-2">Contact Us</Link>
              <a href="#" className="block bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-center mt-2">Add Your Clinic</a>
          </nav>
        </div>
      )}
    </header>
    </>
  );
};

export default Header;
