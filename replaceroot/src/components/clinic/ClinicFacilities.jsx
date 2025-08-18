const ClinicFacilities = () => {
  const facilities = [
    {
      icon: 'fa-car',
      name: 'Parking',
      available: true
    },
    {
      icon: 'fa-wheelchair',
      name: 'Handicapped',
      available: true
    },
    {
      icon: 'fa-plane',
      name: 'Near Airport',
      available: true
    },
    {
      icon: 'fa-stethoscope',
      name: 'Modern Equipment',
      available: true
    },
    {
      icon: 'fa-dollar-sign',
      name: 'Reasonable Price',
      available: true
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-br from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 sm:w-80 h-64 sm:h-80 bg-gradient-to-tl from-teal-200/15 to-cyan-200/15 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          {/* Tag */}
          <div className="inline-flex items-center px-3 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-700 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-sm">
            <i className="fa-solid fa-building mr-2 sm:mr-2.5"></i>
            Our Facilities
          </div>
          
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
            Clinic <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Facilities</span>
          </h2>
          
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
            State-of-the-art facilities designed for your comfort and safety
          </p>
          
          {/* Decorative line */}
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full shadow-sm"></div>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {facilities.map((facility, index) => (
            <div key={index} className="group h-full">
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden h-full flex flex-col">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 text-center flex flex-col h-full justify-center">
                  {/* Icon */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <i className={`fa-solid ${facility.icon} text-white text-sm sm:text-xl`}></i>
                  </div>
                  
                  {/* Name */}
                  <h3 className="font-bold text-gray-800 text-sm sm:text-lg group-hover:text-cyan-600 transition-colors leading-tight">
                    {facility.name}
                  </h3>
                </div>
                
                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClinicFacilities;
