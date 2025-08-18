import { getClinic, getDisplayName } from '../../content/clinics';

const ClinicPrideSection = ({ clinicName = 'amaravati' }) => {
  const displayName = getDisplayName(clinicName);
  const clinic = getClinic(clinicName);
  const pridePoints = clinic.pridePoints;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                <i className="fa-solid fa-tooth text-teal-600 text-xl"></i>
              </div>
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 inline-block pb-3 relative">
                  At our branch at {displayName}, <span className="text-teal-500">we pride ourselves on:</span>
                  <span className="absolute bottom-0 right-0 w-24 h-1 bg-teal-400 rounded"></span>
                  <span className="absolute -bottom-1 right-0 translate-x-14 w-2 h-2 border-2 border-teal-400 rounded-full bg-white"></span>
                </h2>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img 
                  src={clinic.prideImage || '/images/amravati2.webp'} 
                  alt={`Dental Clinic in ${displayName} - Premium Care`} 
                  className="rounded-xl shadow-2xl w-full h-auto"
                />
                {/* Overlay badge */}
                <div className="absolute top-4 right-4 bg-teal-500 text-white px-4 py-2 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2">
                    <i className="fa-solid fa-award"></i>
                    <span className="font-semibold">Premium Care</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Checklist */}
            <div className="order-1 lg:order-2 space-y-6">
              {pridePoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mt-1 group-hover:bg-teal-600 transition-colors">
                    <i className="fa-solid fa-check text-white text-sm"></i>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed group-hover:text-gray-900 transition-colors">
                    {point}
                  </p>
                </div>
              ))}

              {/* Additional Call-to-Action */}
              <div className="mt-8 p-6 bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl border border-teal-100">
                <div className="flex items-center space-x-3 mb-3">
                  <i className="fa-solid fa-star text-teal-600 text-xl"></i>
                  <h3 className="text-xl font-semibold text-gray-800">Experience Excellence</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Our commitment to quality and patient care makes us the preferred choice for dental implants in {displayName}.
                </p>
                <a 
                  href="#contact" 
                  className="inline-flex items-center space-x-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg transition"
                >
                  <i className="fa-solid fa-phone"></i>
                  <span>Contact Us Today</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicPrideSection;
