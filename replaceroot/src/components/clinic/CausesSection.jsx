import { getClinic, getDisplayName } from '../../content/clinics';

const CausesSection = ({ clinicName = 'amaravati' }) => {
  const displayName = getDisplayName(clinicName);
  const clinic = getClinic(clinicName);
  const causes = clinic.causes;

  return (
    <section className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-teal-200/10 to-cyan-200/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-700 rounded-full text-sm font-medium mb-6">
              <i className="fa-solid fa-chart-line mr-2"></i>
              Market Trends
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Causes why implant treatment is increasing in <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">{displayName}</span>?
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-6">
              {causes.slice(0, 3).map((cause, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors">{cause}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="space-y-6">
              {causes.slice(3).map((cause, index) => (
                <div key={index + 3} className="group">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {index + 4}
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors">{cause}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced CTA */}
          <div className="text-center">
            <div className="group">
              <div className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                <i className="fa-solid fa-tooth text-white mr-3 text-xl group-hover:scale-110 transition-transform duration-300"></i>
                <span className="text-white font-semibold text-lg group-hover:text-white transition-colors">Leading the Future of Dental Implants</span>
              </div>
            </div>
            
            {/* Bottom stats */}
            <div className="mt-12 flex justify-center items-center space-x-8">
              <div className="flex items-center space-x-2 text-gray-500">
                <i className="fa-solid fa-trending-up text-cyan-500"></i>
                <span className="text-sm font-medium">Growing Demand</span>
              </div>
              <div className="w-px h-4 bg-gray-300"></div>
              <div className="flex items-center space-x-2 text-gray-500">
                <i className="fa-solid fa-users text-cyan-500"></i>
                <span className="text-sm font-medium">6 Key Factors</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CausesSection;
