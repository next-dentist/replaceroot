import { getClinic, getDisplayName } from '../../content/clinics';

const PricingSection = ({ clinicName = 'amaravati' }) => {
  const displayName = getDisplayName(clinicName);

  const clinic = getClinic(clinicName);
  const clinicContent = clinic.pricing;
  
  // Use clinic-specific pricing data if available, otherwise use default
  const pricingData = clinicContent.data || [
    {
      type: 'Single Dental Implant',
      priceINR: '20,000*',
      priceUSD: '$281.27*'
    },
    {
      type: 'Single Basal Implant',
      priceINR: '30,000*',
      priceUSD: '$421.90*'
    },
    {
      type: 'Zygoma Implant',
      priceINR: '50,000*',
      priceUSD: '$703.17*'
    },
    {
      type: "'All-on-4' dental implants",
      priceINR: '450,000*',
      priceUSD: '$6328.54*'
    }
  ];

  return (
    <section id="pricing" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-48 sm:w-80 h-48 sm:h-80 bg-gradient-to-br from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-tl from-teal-200/10 to-cyan-200/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-700 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <i className="fa-solid fa-tags mr-2"></i>
            Transparent Pricing
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
            How Much Do Dental Implants Cost in <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">{displayName}</span>?
          </h2>
          
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full mb-6 sm:mb-8"></div>
          
          <p className="max-w-4xl mx-auto text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed px-4">
            {clinicContent.description}
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white p-4 sm:p-6">
              <div className="flex items-center justify-center space-x-2">
                <i className="fa-solid fa-coins text-lg sm:text-2xl"></i>
                <h3 className="text-lg sm:text-2xl font-bold">Dental Implant Pricing</h3>
              </div>
            </div>
            
            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gradient-to-r from-cyan-50 to-teal-50">
                  <tr>
                    <th className="p-6 font-bold text-lg text-gray-800">Treatment Type</th>
                    <th className="p-6 font-bold text-lg text-gray-800 text-center">Price (INR)</th>
                    <th className="p-6 font-bold text-lg text-gray-800 text-center">Price (USD)</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingData.map((item, index) => (
                    <tr key={index} className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                      index % 2 === 1 ? 'bg-gray-50/50' : 'bg-white'
                    }`}>
                      <td className="p-6 font-semibold text-gray-800">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center">
                            <i className="fa-solid fa-tooth text-white text-sm"></i>
                          </div>
                          <span>{item.type}</span>
                        </div>
                      </td>
                      <td className="p-6 text-center">
                        <span className="text-2xl font-bold text-cyan-600">{item.priceINR}</span>
                      </td>
                      <td className="p-6 text-center">
                        <span className="text-lg font-semibold text-gray-700">{item.priceUSD}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden">
              <div className="p-4 space-y-4">
                {pricingData.map((item, index) => (
                  <div key={index} className="bg-gradient-to-r from-cyan-50 to-teal-50 rounded-xl p-4 border border-cyan-100">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center">
                        <i className="fa-solid fa-tooth text-white text-sm"></i>
                      </div>
                      <span className="font-semibold text-gray-800 text-sm">{item.type}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Price (INR)</div>
                        <div className="text-lg font-bold text-cyan-600">{item.priceINR}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Price (USD)</div>
                        <div className="text-sm font-semibold text-gray-700">{item.priceUSD}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-cyan-50 to-teal-50 p-4 sm:p-6 border-t border-gray-100">
              <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-2 text-gray-600">
                  <i className="fa-solid fa-info-circle text-cyan-500"></i>
                  <span className="text-xs sm:text-sm">*Prices may vary based on individual case requirements</span>
                </div>
                <a href="#contact" className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm sm:text-base">
                  <i className="fa-solid fa-phone mr-2"></i>
                  Get Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
