import { getClinic, getDisplayName } from '../../content/clinics';

const ContactSection = ({ clinicName = 'amaravati' }) => {
  const displayName = getDisplayName(clinicName);
  const clinic = getClinic(clinicName);

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-bl from-cyan-200/30 to-teal-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-tr from-teal-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-700 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <i className="fa-solid fa-phone mr-2"></i>
            Get In Touch
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
            Contact us at <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">{displayName}</span>
          </h2>
          
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center max-w-6xl mx-auto">
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center space-x-4 sm:space-x-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <i className="fa-solid fa-phone text-white text-lg sm:text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-600 mb-1 sm:mb-2">Phone</h3>
                  <a 
                    href={`tel:${clinic.contact.phone.replace(/\s+/g,'')}`}
                    className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent hover:from-cyan-700 hover:to-teal-700 transition-all duration-300"
                  >
                    {clinic.contact.phone}
                  </a>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">Available 24/7 for emergencies</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center space-x-4 sm:space-x-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <i className="fa-solid fa-envelope text-white text-lg sm:text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-600 mb-1 sm:mb-2">Email</h3>
                  <a 
                    href={`mailto:${clinic.contact.email}`} 
                    className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent hover:from-cyan-700 hover:to-teal-700 transition-all duration-300"
                  >
                    {clinic.contact.email}
                  </a>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">We'll respond within 2 hours</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl p-6 sm:p-8 text-white shadow-xl">
              <div className="flex items-center space-x-4 sm:space-x-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <i className="fa-solid fa-clock text-white text-lg sm:text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Working Hours</h3>
                  <p className="text-base sm:text-lg font-medium">Monday - Saturday</p>
                  <p className="text-base sm:text-lg font-medium">9:00 AM - 7:00 PM</p>
                  <p className="text-xs sm:text-sm opacity-90 mt-1">Sunday: By Appointment Only</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white p-4 sm:p-6">
                <div className="flex items-center justify-center space-x-2">
                  <i className="fa-solid fa-map-marker-alt text-lg sm:text-2xl"></i>
                  <h3 className="text-lg sm:text-xl font-bold">Our Location</h3>
                </div>
              </div>
              <iframe 
                src={clinic.contact.mapEmbedUrl}
                width="100%" 
                height="300" 
                style={{ border: 0 }}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title={`${displayName} Location Map`}
                className="w-full"
              />
            </div>
            
            {/* Floating contact card */}
            <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-white rounded-2xl shadow-xl p-4 sm:p-6 border border-gray-100">
              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <i className="fa-solid fa-calendar-check text-white text-sm sm:text-base"></i>
                </div>
                <h4 className="font-bold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">Book Appointment</h4>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">Get your free consultation today</p>
                <a href="#appointment" className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-semibold px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg">
                  <i className="fa-solid fa-arrow-right mr-1 sm:mr-2"></i>
                  Book Now
                </a>
              </div>
            </div>
            {clinic.contact.address && (
              <div className="mt-4 text-sm text-gray-600">
                <strong className="text-gray-700">Address: </strong>
                <span>{clinic.contact.address}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
