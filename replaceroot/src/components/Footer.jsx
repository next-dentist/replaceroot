const Footer = () => {
  const locations = ['New York', 'Bangalore', 'Ajmer', 'Mumbai', 'Vadodara'];
  const companyLinks = ['About', 'Blogs', 'Join us', 'Dentist Platform'];

  return (
    <footer className="bg-primary-dark text-text-medium border-t border-gray-800">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2 text-center sm:text-left">
            <a href="#" className="block mb-4">
              <img src="/images/rr-logo.webp" alt="Replace Roots Logo" className="h-8 sm:h-10 w-auto mx-auto sm:mx-0" />
            </a>
            <p className="max-w-xs mx-auto sm:mx-0 text-sm sm:text-base">Top Group of Dental Implant Clinics Across, INDIA</p>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="font-bold text-white text-base sm:text-lg mb-3 sm:mb-4">Locations</h4>
            <ul className="space-y-1 sm:space-y-2">
              {locations.map((location, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-primary-accent transition-colors duration-300 text-sm sm:text-base">
                    {location}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="font-bold text-white text-base sm:text-lg mb-3 sm:mb-4">Company</h4>
            <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-primary-accent transition-colors duration-300 text-sm sm:text-base">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex justify-center sm:justify-start space-x-4">
              <a href="#" className="hover:text-primary-accent transition-colors duration-300">
                <i className="fa-brands fa-facebook-f text-lg sm:text-xl"></i>
              </a>
              <a href="#" className="hover:text-primary-accent transition-colors duration-300">
                <i className="fa-brands fa-twitter text-lg sm:text-xl"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-xs sm:text-sm">
          &copy; 2025 Replace Roots. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
