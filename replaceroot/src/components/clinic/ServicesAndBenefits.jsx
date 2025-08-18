import { getClinic, getDisplayName } from '../../content/clinics';

const ServicesAndBenefits = ({ clinicName = 'amaravati' }) => {
  const displayName = getDisplayName(clinicName);
  const clinic = getClinic(clinicName);
  const benefits = clinic.benefits;
  const treatments = clinic.treatments;

  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-bl from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-tr from-teal-200/10 to-cyan-200/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section 1: The benefit of having dental implants Highlights */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-700 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <i className="fa-solid fa-tooth mr-2"></i>
                Benefits & Highlights
              </div>
              
              <div className="flex items-center justify-center mb-4 sm:mb-6">
                <i className="fa-solid fa-tooth text-teal-500 mr-2 sm:mr-3 text-lg sm:text-xl"></i>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
                  The benefit of having <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">dental implants Highlights</span>
                </h2>
              </div>
              
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 h-full">
                    <div className="flex items-center mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <i className="fa-solid fa-check text-white text-sm sm:text-lg"></i>
                      </div>
                      <h3 className="font-bold text-lg sm:text-xl text-gray-800 ml-3 sm:ml-4 group-hover:text-cyan-600 transition-colors">{benefit.title}</h3>
                    </div>
                    
                    <ul className="space-y-3 sm:space-y-4">
                      {benefit.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start group/item">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-cyan-100 to-teal-100 rounded-full flex items-center justify-center mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0 group-hover/item:scale-110 transition-transform">
                            <i className="fa-solid fa-check text-cyan-600 text-xs"></i>
                          </div>
                          <span className="text-sm sm:text-base text-gray-700 group-hover/item:text-gray-800 transition-colors">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Other Implants Treatments at Bahraich */}
          <div>
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-700 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <i className="fa-solid fa-stethoscope mr-2"></i>
                Available Treatments
              </div>
              
              <div className="flex items-center justify-center mb-4 sm:mb-6">
                <i className="fa-solid fa-tooth text-teal-500 mr-2 sm:mr-3 text-lg sm:text-xl"></i>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
                  Other Implants Treatments <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">at {displayName}</span>
                </h2>
              </div>
              
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {treatments.map((treatment, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                    <div className="flex items-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                        <i className="fa-solid fa-check text-white text-xs sm:text-sm"></i>
                      </div>
                      <span className="text-sm sm:text-base text-gray-700 font-semibold ml-3 sm:ml-4 group-hover:text-cyan-600 transition-colors">{treatment}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Bottom CTA */}
            <div className="mt-12 sm:mt-16 text-center">
              <div className="inline-flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center space-x-2 text-gray-500">
                  <i className="fa-solid fa-check-circle text-cyan-500"></i>
                  <span className="text-xs sm:text-sm font-medium">4 Key Benefits</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
                <div className="flex items-center space-x-2 text-gray-500">
                  <i className="fa-solid fa-list-check text-cyan-500"></i>
                  <span className="text-xs sm:text-sm font-medium">8 Treatment Options</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesAndBenefits;
