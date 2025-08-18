const ImplantParts = () => {
  const specialties = [
    'Helpful Doctors',
    'Comfortable Office',
    'Laser Dentistry',
    'Family Helpful',
    'Convenient Location',
    'Little to no Wait Time',
    'Free Consultation',
    'Satisfaction Guarantee',
    'Accessibility',
    'Modern Equipment',
    'High-Quality resources',
    'Digital 3D X-Ray'
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-200/10 to-cyan-200/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-700 rounded-full text-sm font-medium mb-6">
            <i className="fa-solid fa-puzzle-piece mr-2"></i>
            Implant Components
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Parts of <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Dental Implants</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto mb-20">
          <div className="group">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
              <img 
                src="/images/tooth.webp" 
                alt="Dental implant parts diagram showing crown, abutment, and fixture" 
                className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-6 bg-gradient-to-r from-cyan-50 to-teal-50">
                <div className="flex items-center justify-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">Crown</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">Abutment</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-cyan-600 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">Fixture</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              More <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Specialty</span> of Clinic
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {specialties.map((specialty, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                      <i className="fa-solid fa-check text-white text-sm"></i>
                    </div>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-cyan-600 transition-colors">{specialty}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-8">
              <div className="flex items-center space-x-2 text-gray-500">
                <i className="fa-solid fa-star text-cyan-500"></i>
                <span className="text-sm font-medium">12 Specialties</span>
              </div>
              <div className="w-px h-4 bg-gray-300"></div>
              <div className="flex items-center space-x-2 text-gray-500">
                <i className="fa-solid fa-award text-cyan-500"></i>
                <span className="text-sm font-medium">Premium Care</span>
              </div>
              <div className="w-px h-4 bg-gray-300"></div>
              <div className="flex items-center space-x-2 text-gray-500">
                <i className="fa-solid fa-heart text-cyan-500"></i>
                <span className="text-sm font-medium">Patient Focused</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplantParts;
