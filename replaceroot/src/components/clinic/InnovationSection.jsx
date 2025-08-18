import { getClinic } from '../../content/clinics';

const InnovationSection = ({ clinicName = 'amaravati' }) => {
  const clinic = getClinic(clinicName);

  return (
    <section className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-200/10 to-cyan-200/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-700 rounded-full text-sm font-medium mb-6">
              <i className="fa-solid fa-lightbulb mr-2"></i>
              Cutting-Edge Innovation
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Innovation</span> in Dental Implants
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="group">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mr-6">
                      <i className="fa-solid fa-shield-alt text-white text-2xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-cyan-600 transition-colors">Proven Excellence</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors">{clinic.innovation.excellence}</p>
                </div>
              </div>

              <div className="group">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mr-6">
                      <i className="fa-solid fa-microchip text-white text-2xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-cyan-600 transition-colors">Advanced Technology</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors">{clinic.innovation.technology}</p>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="text-center lg:text-left">
              <div className="group">
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  <div className="mb-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg mx-auto lg:mx-0 mb-6 group-hover:scale-110 transition-transform duration-300">
                      <i className="fa-solid fa-calendar-check text-white text-3xl"></i>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-6 group-hover:text-cyan-600 transition-colors">Plan Your Treatment</h3>
                    <p className="text-gray-600 leading-relaxed text-lg mb-8 group-hover:text-gray-700 transition-colors">
                      Plan your Dental Implants in India with Replace Roots. Schedule for your next dental appointment 
                      at your convenience – anytime, anywhere!
                    </p>
                  </div>

                  <div className="space-y-6 mb-8">
                    <div className="flex items-center justify-center lg:justify-start space-x-4 group/item">
                      <div className="w-8 h-8 bg-gradient-to-r from-cyan-100 to-teal-100 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform">
                        <i className="fa-solid fa-check text-cyan-600 text-sm"></i>
                      </div>
                      <span className="text-gray-700 font-medium group-hover/item:text-gray-800 transition-colors">Flexible Scheduling</span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start space-x-4 group/item">
                      <div className="w-8 h-8 bg-gradient-to-r from-cyan-100 to-teal-100 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform">
                        <i className="fa-solid fa-check text-cyan-600 text-sm"></i>
                      </div>
                      <span className="text-gray-700 font-medium group-hover/item:text-gray-800 transition-colors">Expert Consultation</span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start space-x-4 group/item">
                      <div className="w-8 h-8 bg-gradient-to-r from-cyan-100 to-teal-100 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform">
                        <i className="fa-solid fa-check text-cyan-600 text-sm"></i>
                      </div>
                      <span className="text-gray-700 font-medium group-hover/item:text-gray-800 transition-colors">Advanced Treatment Plans</span>
                    </div>
                  </div>

                  <div className="text-center lg:text-left">
                    <a 
                      href="#appointment" 
                      className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 space-x-3"
                    >
                      <i className="fa-regular fa-calendar-days text-xl"></i>
                      <span className="text-lg">Schedule Appointment</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom stats */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-8">
              <div className="flex items-center space-x-2 text-gray-500">
                <i className="fa-solid fa-award text-cyan-500"></i>
                <span className="text-sm font-medium">Proven Excellence</span>
              </div>
              <div className="w-px h-4 bg-gray-300"></div>
              <div className="flex items-center space-x-2 text-gray-500">
                <i className="fa-solid fa-microchip text-cyan-500"></i>
                <span className="text-sm font-medium">Advanced Technology</span>
              </div>
              <div className="w-px h-4 bg-gray-300"></div>
              <div className="flex items-center space-x-2 text-gray-500">
                <i className="fa-solid fa-calendar-check text-cyan-500"></i>
                <span className="text-sm font-medium">Easy Scheduling</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;
