import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer } from '../components';
import ContactFormModal from '../components/clinic/ContactFormModal';
import Layout from '../components/Layout';

const ForPatientsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const whyChooseReasons = [
    {
      icon: "fa-check-circle",
      title: "Verified Specialists",
      description: "All dentists are pre-screened and verified for qualifications, experience, and patient safety standards."
    },
    {
      icon: "fa-star",
      title: "Patient Reviews",
      description: "Real patient testimonials and verified reviews help you make informed decisions about your care."
    },
    {
      icon: "fa-globe",
      title: "Global Network",
      description: "Access to implant specialists from around the world, ensuring you find the best care available."
    },
    {
      icon: "fa-handshake",
      title: "Quality Assurance",
      description: "Rigorous quality standards and patient safety protocols ensure the best possible outcomes."
    },
    {
      icon: "fa-clock",
      title: "Quick Response",
      description: "Fast response times and efficient scheduling to get you the care you need when you need it."
    },
    {
      icon: "fa-heart",
      title: "Patient-Centric Care",
      description: "Personalized treatment plans and compassionate care focused on your specific needs and comfort."
    }
  ];

  const treatmentTypes = [
    "Single Tooth Implant",
    "Multiple Tooth Implants", 
    "Full Mouth Dental Implants",
    "All-on-4 Implants",
    "All-on-6 Implants",
    "Immediate Implants",
    "Bone Grafting",
    "Sinus Lift",
    "Guided Implant Surgery",
    "Implant Consultation"
  ];

  const patientTestimonials = [
    {
      name: "Sarah Johnson",
      location: "Mumbai, India",
      quote: "I was nervous about getting dental implants, but my Replace Roots dentist made the entire process comfortable and professional. The results are amazing!",
      rating: 5,
      treatment: "Full Mouth Implants"
    },
    {
      name: "Michael Chen",
      location: "Delhi, India",
      quote: "The verification process gave me confidence that I was choosing a qualified specialist. My implant procedure was successful and pain-free.",
      rating: 5,
      treatment: "Single Tooth Implant"
    },
    {
      name: "Priya Patel",
      location: "Bangalore, India",
      quote: "From the initial consultation to the final result, everything exceeded my expectations. Highly recommend Replace Roots for anyone considering implants.",
      rating: 5,
      treatment: "All-on-4 Implants"
    }
  ];

  const searchSteps = [
    {
      number: "1",
      title: "Search for Specialists",
      description: "Enter your location and browse verified implant specialists in your area."
    },
    {
      number: "2", 
      title: "Compare & Choose",
      description: "Review profiles, qualifications, patient reviews, and treatment options."
    },
    {
      number: "3",
      title: "Submit Inquiry",
      description: "Send your treatment inquiry and get a quick response from your chosen specialist."
    },
    {
      number: "4",
      title: "Begin Treatment",
      description: "Schedule your consultation and start your journey to a confident smile."
    }
  ];

  return (
    <Layout
      title="For Patients - Find Trusted Implant Specialists | ReplaceRoot"
      description="Connect with verified dental implant specialists worldwide through ReplaceRoot. Get quality care, expert treatment, and find the perfect specialist for your implant needs."
      keywords={['dental implant specialists', 'implant dentists', 'verified specialists', 'implant treatment', 'dental care', 'implant consultation', 'ReplaceRoot']}
      canonical="/for-patients"
      og={{
        title: "For Patients - Find Trusted Implant Specialists",
        description: "Connect with verified dental implant specialists worldwide through ReplaceRoot. Get quality care and expert treatment.",
        type: 'website',
        image: "https://replaceroot.com/images/for-patients-hero.jpg",
        site_name: "ReplaceRoot"
      }}
      twitter={{ card: 'summary_large_image' }}
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'For Patients - Find Trusted Implant Specialists',
        description: 'Connect with verified dental implant specialists worldwide through ReplaceRoot. Get quality care, expert treatment, and find the perfect specialist for your implant needs.',
        url: 'https://replaceroot.com/for-patients',
        mainEntity: {
          '@type': 'Service',
          name: 'Dental Implant Specialist Finder',
          provider: {
            '@type': 'Organization',
            name: 'ReplaceRoot'
          },
          description: 'Find verified dental implant specialists worldwide'
        }
      }}
    >
    <div className="bg-gray-50 min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-40 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-br from-white to-cyan-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-gradient-to-br from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-gradient-to-tl from-teal-200/10 to-cyan-200/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-700 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <i className="fa-solid fa-user mr-2"></i>
              For Patients
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-gray-800">
              Find Your <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Trusted Implant Specialist</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto">
              Connect with verified dental implant specialists worldwide. Get quality care, expert treatment, and a confident smile.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Replace Roots Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              Why Choose a <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Replace Roots Dentist?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We connect you with only the most qualified and trusted dental implant specialists worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {whyChooseReasons.map((reason, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 text-center group hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`fa-solid ${reason.icon} text-white text-lg sm:text-xl md:text-2xl`}></i>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Find a Specialist Section */}
      <section id="search" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              Find a <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Trusted Implant Specialist</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Search for verified implant specialists in your area and get the care you deserve
            </p>
          </div>

          {/* Search Form */}
          <div className="max-w-6xl mx-auto mb-12 sm:mb-16">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-gray-100">
              <div className="flex items-center mb-4 sm:mb-6">
                <i className="fa-solid fa-search text-cyan-600 mr-2 sm:mr-3 text-lg sm:text-xl"></i>
                <span className="text-cyan-600 font-semibold text-base sm:text-lg">Find Your Specialist</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="relative">
                  <i className="fa-solid fa-map-marker-alt absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
                  <input
                    type="text"
                    placeholder="Enter your location"
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg sm:rounded-xl p-3 sm:p-4 pl-10 sm:pl-12 text-gray-800 placeholder-gray-500 outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm sm:text-base"
                  />
                </div>
                
                <div className="relative">
                  <i className="fa-solid fa-tooth absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
                  <select className="w-full bg-gray-50 border border-gray-300 rounded-lg sm:rounded-xl p-3 sm:p-4 pl-10 sm:pl-12 appearance-none text-gray-800 outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent cursor-pointer text-sm sm:text-base">
                    <option>All Treatments</option>
                    {treatmentTypes.map((type, index) => (
                      <option key={index}>{type}</option>
                    ))}
                  </select>
                  <i className="fa-solid fa-chevron-down absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"></i>
                </div>
                
                <div className="relative">
                  <i className="fa-solid fa-calendar absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
                  <select className="w-full bg-gray-50 border border-gray-300 rounded-lg sm:rounded-xl p-3 sm:p-4 pl-10 sm:pl-12 appearance-none text-gray-800 outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent cursor-pointer text-sm sm:text-base">
                    <option>Any Time</option>
                    <option>This Week</option>
                    <option>Next Week</option>
                    <option>This Month</option>
                  </select>
                  <i className="fa-solid fa-chevron-down absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"></i>
                </div>
                
                <button className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white p-3 sm:p-4 rounded-lg sm:rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2 text-sm sm:text-base">
                  <i className="fa-solid fa-search"></i>
                  <span>Search</span>
                </button>
              </div>
              
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <span className="text-gray-600 text-xs sm:text-sm font-medium">Popular:</span>
                {['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai'].map((city) => (
                  <button key={city} className="px-2 sm:px-3 py-1 sm:py-1.5 bg-gray-100 hover:bg-cyan-100 text-gray-700 hover:text-cyan-700 rounded-full text-xs sm:text-sm transition-colors duration-300">
                    {city}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Search Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {searchSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-white text-lg sm:text-xl md:text-2xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">{step.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              What Our <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Patients Say</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Real experiences from patients who found their perfect implant specialist through Replace Roots
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {patientTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8">
                <div className="flex items-center mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star text-yellow-400"></i>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 sm:mb-6 italic text-sm sm:text-base">"{testimonial.quote}"</p>
                <div>
                  <div className="font-bold text-gray-800 text-sm sm:text-base">{testimonial.name}</div>
                  <div className="text-cyan-600 text-xs sm:text-sm">{testimonial.treatment}</div>
                  <div className="text-gray-500 text-xs sm:text-sm">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Inquiry Section */}
      <section id="inquiry" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              Submit Your <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Inquiry</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Tell us about your implant needs and we'll connect you with the right specialist
            </p>
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <i className="fa-solid fa-calendar-check text-white text-lg sm:text-2xl"></i>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Ready to Get Started?</h3>
              <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
                Fill out our comprehensive inquiry form and we'll match you with the perfect implant specialist for your needs.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center mx-auto"
              >
                <i className="fa-solid fa-paper-plane mr-2"></i>
                Submit Your Inquiry
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        clinicName="Replace Roots"
        displayName="Replace Roots"
      />

      <Footer />
    </div>
  </Layout>
);
};

export default ForPatientsPage;
