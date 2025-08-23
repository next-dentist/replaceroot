import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getClinic, getDisplayName } from '../content/clinics';
import Layout from '../components/Layout';
import ContactFormModal from '../components/clinic/ContactFormModal';
import { Header, Footer } from '../components';

const BhavnagarPage = () => {
  const clinicName = 'bhavnagar';
  const displayName = getDisplayName(clinicName);
  const clinic = getClinic(clinicName);
  const clinicContent = clinic.hero;
  const pricingContent = clinic.pricing;
  const pricingData = pricingContent.data || [
    { type: 'Single Dental Implant', priceINR: '20,000*', priceUSD: '$281.27*' },
    { type: 'Single Basal Implant', priceINR: '30,000*', priceUSD: '$421.90*' },
    { type: 'Zygoma Implant', priceINR: '50,000*', priceUSD: '$703.17*' },
    { type: "'All-on-4' dental implants", priceINR: '450,000*', priceUSD: '$6328.54*' }
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const facilities = [
    { icon: 'fa-car', name: 'Parking', available: true },
    { icon: 'fa-wheelchair', name: 'Handicapped', available: true },
    { icon: 'fa-plane', name: 'Near Airport', available: true },
    { icon: 'fa-stethoscope', name: 'Modern Equipment', available: true },
    { icon: 'fa-dollar-sign', name: 'Reasonable Price', available: true }
  ];

  return (
    <Layout
      title={`Dental Implants in ${displayName} | ReplaceRoots Approved Centre`}
      description={clinicContent.description}
      keywords={['dental implants', `${displayName} dental implant`, 'All-on-4', 'Zygoma implants', 'Basal implants', 'ReplaceRoots']}
      canonical="/dental-implants-bhavnagar"
      og={{
        title: `Dental Implants in ${displayName} | ReplaceRoots Approved Centre`,
        description: clinicContent.description,
        type: 'website',
        image: clinic.prideImage || clinicContent.image,
      }}
      twitter={{ card: 'summary_large_image' }}
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'MedicalClinic',
        name: `ReplaceRoots Dental Clinic - ${displayName}`,
        url: typeof window !== 'undefined' ? window.location.href : undefined,
        image: clinic.prideImage || clinicContent.image,
        medicalSpecialty: 'Dentistry',
        address: { '@type': 'PostalAddress', addressLocality: displayName, addressCountry: 'IN' },
        telephone: clinic?.contact?.phone,
      }}
    >
    <div className="font-inter bg-gray-50 text-gray-700">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-white to-cyan-50 relative overflow-hidden">
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
                
                <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto md:mx-0">
                  {clinicContent.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setIsContactModalOpen(true)}
                    className="inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <i className="fa-regular fa-calendar-days mr-2 sm:mr-3"></i>
                    Book Appointment
                  </button>
                </div>
                
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
                    src="/images/Bhavnagar/b1.webp" 
                    alt={`Dental Clinic in ${displayName}`} 
                    className="rounded-2xl shadow-2xl w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/20 rounded-2xl"></div>
                </div>
                
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

        {/* Facilities Section (match component label) */}
        <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-white to-cyan-50 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-br from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 sm:w-80 h-64 sm:h-80 bg-gradient-to-tl from-teal-200/15 to-cyan-200/15 rounded-full blur-3xl"></div>
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <div className="inline-flex items-center px-3 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-700 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-sm">
                <i className="fa-solid fa-building mr-2 sm:mr-2.5"></i>
                Our Facilities
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
                Clinic <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Facilities</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8 px-4">State-of-the-art facilities designed for your comfort and safety</p>
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full shadow-sm"></div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 max-w-6xl mx-auto">
              {facilities.map((facility, index) => (
                <div key={index} className="group h-full">
                  <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden h-full flex flex-col">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10 text-center flex flex-col h-full justify-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <i className={`fa-solid ${facility.icon} text-white text-sm sm:text-xl`}></i>
                      </div>
                      <h3 className="font-bold text-gray-800 text-sm sm:text-lg group-hover:text-cyan-600 transition-colors leading-tight">{facility.name}</h3>
                    </div>
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

       

        {/* Pride Section (exact ClinicPrideSection markup) */}
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
                      src="/images/Bhavnagar/b2.webp" 
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
                  {clinic.pridePoints.map((point, index) => (
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

        {/* Pricing Section (exact PricingSection markup) */}
        <section id="pricing" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
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
                {pricingContent.description}
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



        <section id="section_1" className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-teal-200/10 to-cyan-200/10 rounded-full blur-3xl"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20"><div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-700 rounded-full text-sm font-medium mb-6"><i className="fa-solid fa-star mr-2"></i>Why Choose Us</div><h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Why <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">{displayName}</span> for Dental Implants?</h2><div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full"></div></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{clinic.whyFeatures.map((feature, index) => (<div key={index} className="group"><div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 h-full"><div className="flex justify-center mb-6"><div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"><i className={`fa-solid ${feature.icon} text-2xl text-white`}></i></div></div><h3 className="text-xl font-bold text-gray-800 mb-4 leading-tight group-hover:text-cyan-600 transition-colors">{feature.title}</h3><p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">{feature.description}</p><div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"><div className="w-8 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full mx-auto"></div></div></div></div>))}</div>
              <div className="mt-16 text-center"><div className="inline-flex items-center space-x-4"><div className="flex items-center space-x-2 text-gray-500"><i className="fa-solid fa-check-circle text-cyan-500"></i><span className="text-sm font-medium">8 Key Advantages</span></div><div className="w-px h-4 bg-gray-300"></div><div className="flex items-center space-x-2 text-gray-500"><i className="fa-solid fa-award text-cyan-500"></i><span className="text-sm font-medium">Proven Excellence</span></div></div></div>
            </div>
          </div>
        </section>

        {/* Contact Section (exact ContactSection markup) */}
        <section id="contact" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
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
                    <button
                      onClick={() => setIsContactModalOpen(true)}
                      className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-semibold px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <i className="fa-solid fa-arrow-right mr-1 sm:mr-2"></i>
                      Book Now
                    </button>
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

        {/* Services & Benefits Section */}
        <section id="services" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-bl from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-tr from-teal-200/10 to-cyan-200/10 rounded-full blur-3xl"></div>
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
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
                {clinic.benefits.map((benefit, index) => (
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
              <div className="text-center mb-12 sm:mb-16 mt-12">
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
                {clinic.treatments.map((treatment, index) => (
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
              <div className="mt-12 sm:mt-16 text-center">
                <div className="inline-flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
                  <div className="flex items-center space-x-2 text-gray-500"><i className="fa-solid fa-check-circle text-cyan-500"></i><span className="text-xs sm:text-sm font-medium">4 Key Benefits</span></div>
                  <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
                  <div className="flex items-center space-x-2 text-gray-500"><i className="fa-solid fa-list-check text-cyan-500"></i><span className="text-xs sm:text-sm font-medium">8 Treatment Options</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

         {/* Causes Section (moved just below Other Implants Treatments) */}
         <section className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
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
                  {clinic.causes.slice(0, 3).map((cause, index) => (
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
                  {clinic.causes.slice(3).map((cause, index) => (
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

              <div className="text-center">
                <div className="group">
                  <div className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                    <i className="fa-solid fa-tooth text-white mr-3 text-xl group-hover:scale-110 transition-transform duration-300"></i>
                    <span className="text-white font-semibold text-lg group-hover:text-white transition-colors">Leading the Future of Dental Implants</span>
                  </div>
                </div>
                
                <div className="mt-12 flex justify-center items-center space-x-8">
                  <div className="flex items_center space-x-2 text-gray-500">
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
        

        {/* Innovation Section (exact InnovationSection markup) */}
        <section className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
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
                        <button
                          onClick={() => setIsContactModalOpen(true)}
                          className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 space-x-3"
                        >
                          <i className="fa-regular fa-calendar-days text-xl"></i>
                          <span className="text-lg">Schedule Appointment</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
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

        {/* Implant Stages (exact ImplantStages markup) */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-teal-200/15 to-cyan-200/15 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-700 rounded-full text-sm font-medium mb-6">
                <i className="fa-solid fa-list-ol mr-2"></i>
                Treatment Process
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                Stages in <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Dental Implants</span>
              </h2>
              
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                Our comprehensive 7-stage process ensures optimal results for your dental implant treatment
              </p>
              
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="hidden lg:block relative">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-500 rounded-full shadow-lg"></div>
                
                <div className="relative z-10 flex justify-between items-start pt-8">
                  {[{number:1,title:'Extract the Tooth',description:'Remove the damaged tooth to prepare for implant placement'},{number:2,title:'Graft the Socket',description:'Add bone graft material to strengthen the jawbone'},{number:3,title:'Allow Healing',description:'Wait for the grafted site to heal and integrate'},{number:4,title:'Place Implant',description:'Insert the titanium implant via flapless surgery'},{number:5,title:'Healing Abutment',description:'Attach temporary abutment for gum healing'},{number:6,title:'Final Impression',description:'Take precise measurements for custom crown'},{number:7,title:'Deliver Crown',description:'Place the final screw-retained crown'}].map((stage) => (
                    <div key={stage.number} className="flex flex-col items-center group">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-xl group-hover:scale-110 transition-transform duration-300 border-4 border-white relative z-20 -mt-8">
                        {stage.number}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
                      </div>
                      
                      <div className="mt-6 text-center max-w-40">
                        <h3 className="font-bold text-gray-800 text-lg mb-2 group-hover:text-cyan-600 transition-colors leading-tight">
                          {stage.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {stage.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:hidden">
                <div className="space-y-8">
                  {[{number:1,title:'Extract the Tooth',description:'Remove the damaged tooth to prepare for implant placement'},{number:2,title:'Graft the Socket',description:'Add bone graft material to strengthen the jawbone'},{number:3,title:'Allow Healing',description:'Wait for the grafted site to heal and integrate'},{number:4,title:'Place Implant',description:'Insert the titanium implant via flapless surgery'},{number:5,title:'Healing Abutment',description:'Attach temporary abutment for gum healing'},{number:6,title:'Final Impression',description:'Take precise measurements for custom crown'},{number:7,title:'Deliver Crown',description:'Place the final screw-retained crown'}].map((stage) => (
                    <div key={stage.number} className="flex items-start space-x-4 group">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300 border-2 border-white">
                        {stage.number}
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-800 text-lg mb-2 group-hover:text-cyan-600 transition-colors leading-tight">
                          {stage.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {stage.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implant Parts + More Specialty (exact ImplantParts markup) */}
        <section className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
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
                {[ 'Helpful Doctors','Comfortable Office','Laser Dentistry','Family Helpful','Convenient Location','Little to no Wait Time','Free Consultation','Satisfaction Guarantee','Accessibility','Modern Equipment','High-Quality resources','Digital 3D X-Ray' ].map((specialty, index) => (
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
        {/* Removed to reorder per /clinic route: Experts, Tourism, Gallery, Why (will be re-added after Pricing) */}
        

        
      </main>

      <Footer />

      {/* Contact Form Modal */}
      <ContactFormModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        clinicName={clinicName}
        displayName={displayName}
      />
    </div>
    </Layout>
  );
};

export default BhavnagarPage;


