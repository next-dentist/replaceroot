const FinalFeatures = () => {
  const features = [
    'Most Trusted Clinics',
    'Full Jaw Rehabilitation',
    'Fix All Teeth in 3 Days',
    'Recommended by Dentists',
    'Multiple Implants Options',
    'Same Day Implants'
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white border-t border-gray-200 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-br from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-tl from-teal-200/10 to-cyan-200/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-700 rounded-full text-xs sm:text-sm font-medium mb-4">
            <i className="fa-solid fa-star mr-2"></i>
            Key Features
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Features</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 gap-y-3 sm:gap-y-4">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="flex items-start sm:items-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <i className="fa-solid fa-shield-halved text-white text-sm sm:text-base"></i>
                </div>
                <span className="text-sm sm:text-base text-gray-700 group-hover:text-gray-800 transition-colors font-medium">{feature}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinalFeatures;
