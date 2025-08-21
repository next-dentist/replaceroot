const ForPatients = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-br from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-tl from-teal-200/10 to-cyan-200/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-700 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <i className="fa-solid fa-user mr-2"></i>
            For Patients
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 sm:mb-8">
            Find a <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Trusted Implant Dentist</span> Near You
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12">
            Access only certified implant specialists who have been verified and approved by our platform for quality and expertise.
          </p>
        </div>

        {/* Search Section */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100">
            <div className="flex items-center mb-4">
              <i className="fa-solid fa-tooth text-cyan-600 mr-3 text-xl"></i>
              <span className="text-cyan-600 font-semibold text-lg">Find Your Implant Specialist</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 items-center">
              {/* Location Input */}
              <div className="sm:col-span-1 lg:col-span-5">
                <div className="relative">
                  <i className="fa-solid fa-map-marker-alt absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
                  <input
                    type="text"
                    placeholder="Enter your location"
                    className="w-full bg-gray-50 border border-gray-300 rounded-xl p-4 pl-12 text-gray-800 placeholder-gray-500 outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Service Type */}
              <div className="sm:col-span-1 lg:col-span-4">
                <div className="relative">
                  <i className="fa-solid fa-tooth absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
                  <select className="w-full bg-gray-50 border border-gray-300 rounded-xl p-4 pl-12 appearance-none text-gray-800 outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent cursor-pointer">
                    <option>All Implant Services</option>
                    <option>Single Tooth Implant</option>
                    <option>Multiple Tooth Implants</option>
                    <option>Full Mouth Dental Implants</option>
                    <option>All-on-4 Implants</option>
                    <option>All-on-6 Implants</option>
                    <option>Immediate Implants</option>
                  </select>
                  <i className="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"></i>
                </div>
              </div>

              {/* Search Button */}
              <div className="sm:col-span-2 lg:col-span-3">
                <button className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white p-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2">
                  <i className="fa-solid fa-search"></i>
                  <span>Search</span>
                </button>
              </div>
            </div>

            {/* Quick Filters */}
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="text-gray-600 text-sm font-medium">Popular:</span>
              {['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai'].map((city) => (
                <button key={city} className="px-3 py-1 bg-gray-100 hover:bg-cyan-100 text-gray-700 hover:text-cyan-700 rounded-full text-sm transition-colors duration-300">
                  {city}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <i className="fa-solid fa-check-circle text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Verified Specialists</h3>
            <p className="text-gray-600 leading-relaxed">All dentists are pre-screened and verified for quality, experience, and patient safety standards.</p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <i className="fa-solid fa-shield-alt text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Quality Assured</h3>
            <p className="text-gray-600 leading-relaxed">Rigorous quality standards and patient safety protocols ensure the best care possible.</p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <i className="fa-solid fa-star text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Patient Reviews</h3>
            <p className="text-gray-600 leading-relaxed">Real patient experiences and verified testimonials help you make informed decisions.</p>
          </div>
        </div>


      </div>
    </section>
  );
};

export default ForPatients;
