import { useState } from 'react';

const Hero = () => {
  const [location, setLocation] = useState('');
  const [distance, setDistance] = useState('Near 10km');

  const handleSearch = () => {
    console.log('Searching for:', { location, distance });
    // Add search functionality here
  };

  return (
    <section className="relative pt-32 sm:pt-40 md:pt-48 pb-16 sm:pb-24 md:pb-32 min-h-screen bg-gradient-to-br from-primary-dark via-primary-dark to-primary-light">
      {/* Background Image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/rr-home.webp')`
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/85 to-primary-dark/85"></div>
      
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight text-white">
          Discover a Great Place for Your New Roots
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-text-medium mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
          Find top-rated dental implant specialists and clinics around the world.
        </p>

        {/* Compact Search Form */}
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-2xl border border-gray-200">
            <div className="flex items-center mb-3 sm:mb-4">
              <i className="fa-solid fa-tooth text-purple-600 mr-2 text-lg"></i>
              <span className="text-purple-600 font-semibold text-sm sm:text-base">Dental Implant Clinics</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4 items-center">
              {/* Location Input */}
              <div className="sm:col-span-1 lg:col-span-5">
                <div className="relative">
                  <i className="fa-solid fa-map-marker-alt absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm sm:text-base"></i>
                  <input 
                    type="text" 
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Location" 
                    className="w-full bg-white border border-gray-300 rounded-xl p-3 sm:p-4 pl-8 sm:pl-10 text-gray-800 placeholder-gray-500 outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent text-sm sm:text-base"
                  />
                </div>
              </div>
              
              {/* Distance Selector */}
              <div className="sm:col-span-1 lg:col-span-4">
                <div className="relative">
                  <i className="fa-solid fa-location-crosshairs absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm sm:text-base"></i>
                  <select 
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}
                    className="w-full bg-white border border-gray-300 rounded-xl p-3 sm:p-4 pl-8 sm:pl-10 appearance-none text-gray-800 outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent cursor-pointer text-sm sm:text-base"
                  >
                    <option>Near 10km</option>
                    <option>Within 25km</option>
                    <option>Within 50km</option>
                    <option>Within 100km</option>
                  </select>
                  <i className="fa-solid fa-chevron-down absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none text-sm sm:text-base"></i>
                </div>
              </div>
              
              {/* Search Button */}
              <div className="sm:col-span-2 lg:col-span-3">
                <button 
                  onClick={handleSearch}
                  className="w-full bg-primary-accent text-white p-3 sm:p-4 rounded-xl font-bold hover:bg-primary-accent/90 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2 text-sm sm:text-base"
                >
                  <i className="fa-solid fa-search"></i>
                  <span>Search</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Pro Centres */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 text-text-light">
            <span className="text-text-medium font-medium text-sm sm:text-base">Pro Centres:</span>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {['New York', 'Bangalore', 'Ajmer', 'Mumbai', 'Vadodara'].map((city, index) => (
                <span key={city} className="flex items-center">
                  <a href="#" className="hover:text-primary-accent transition-colors duration-300 text-sm sm:text-base">
                    {city}
                  </a>
                  {index < 4 && <span className="text-primary-accent mx-1 sm:mx-2 text-sm">|</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
