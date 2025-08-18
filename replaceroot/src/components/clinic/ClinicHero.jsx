import { getClinic, getDisplayName } from '../../content/clinics';

const ClinicHero = ({ clinicName = 'amaravati' }) => {
  const displayName = getDisplayName(clinicName);
  const clinic = getClinic(clinicName);
  const clinicContent = clinic.hero;

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-br from-cyan-200/30 to-teal-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-tl from-teal-200/20 to-cyan-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-700 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <i className="fa-solid fa-star mr-2"></i>
              Premium Dental Care
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
              <span className="text-gray-800">Approved Dental Implant Centre,</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">{displayName}</span>
            </h1>
            
            {Array.isArray(clinicContent.description) ? (
              clinicContent.description.map((paragraph, index) => (
                <p key={index} className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-4 sm:mb-6 max-w-2xl mx-auto md:mx-0">
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto md:mx-0">
                {clinicContent.description}
              </p>
            )}
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#appointment" 
                className="inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <i className="fa-regular fa-calendar-days mr-2 sm:mr-3"></i>
                Book Appointment
              </a>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-6 text-xs sm:text-sm text-gray-500">
              <div className="flex items-center">
                <i className="fa-solid fa-check-circle text-cyan-500 mr-2"></i>
                <span>Certified Implant Specialists</span>
              </div>
              <div className="flex items-center">
                <i className="fa-solid fa-clock text-cyan-500 mr-2"></i>
                <span>Same Day Consultation</span>
              </div>
              <div className="flex items-center">
                <i className="fa-solid fa-shield-alt text-cyan-500 mr-2"></i>
                <span>100% Safe & Secure</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={clinicContent.image} 
                alt={clinicContent.altText} 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/20 rounded-2xl"></div>
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white rounded-xl shadow-xl p-4 sm:p-6 border border-gray-100">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-tooth text-white text-lg sm:text-xl"></i>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-gray-800">500+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Successful Implants</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicHero;
