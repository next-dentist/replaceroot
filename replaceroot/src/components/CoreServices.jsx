const CoreServices = () => {
  const services = [
    {
      icon: 'fa-tooth',
      title: 'Dental Implants',
      description: 'Complete range of implant solutions including Single, Multiple, Full Mouth, All-on-4, All-on-6, and Immediate implants.',
      link: '/services/dental-implants',
      subtypes: ['Single', 'Multiple', 'Full Mouth', 'All-on-4', 'All-on-6', 'Immediate']
    },
    {
      icon: 'fa-bone',
      title: 'Bone Grafting & Sinus Lift',
      description: 'Supporting procedures to ensure successful implant placement and long-term stability.',
      link: '/services/bone-grafting',
      subtypes: ['Bone Grafting', 'Sinus Lift', 'Ridge Augmentation']
    },
    {
      icon: 'fa-microchip',
      title: 'Guided Digital Implant Surgery',
      description: 'Advanced technology for precise, minimally invasive implant placement with optimal results.',
      link: '/services/guided-surgery',
      subtypes: ['3D Planning', 'Computer Guided', 'Minimally Invasive']
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-bl from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-tr from-teal-200/10 to-cyan-200/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-700 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <i className="fa-solid fa-stethoscope mr-2"></i>
            Core Services
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
            Popular <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Dental Implant</span> Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive implant solutions with advanced technology and proven results
          </p>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mr-4">
                    <i className={`fa-solid ${service.icon} text-white text-2xl`}></i>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-cyan-600 transition-colors">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-3">Services Include:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.subtypes.map((subtype, idx) => (
                      <span key={idx} className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">
                        {subtype}
                      </span>
                    ))}
                  </div>
                </div>
                
                <a 
                  href={service.link}
                  className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-semibold transition-colors group-hover:translate-x-1"
                >
                  <span>Learn More</span>
                  <i className="fa-solid fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
