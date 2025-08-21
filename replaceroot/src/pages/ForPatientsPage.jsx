import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer } from '../components';

const ForPatientsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    treatmentType: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const whyChooseReasons = [
    {
      icon: "fa-shield-check",
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
    <div className="bg-gray-50 min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-white to-cyan-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-teal-200/10 to-cyan-200/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-700 rounded-full text-sm font-medium mb-6">
              <i className="fa-solid fa-user mr-2"></i>
              For Patients
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-gray-800">
              Find Your <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Trusted Implant Specialist</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Connect with verified dental implant specialists worldwide. Get quality care, expert treatment, and a confident smile.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="#search" 
                className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg transform hover:-translate-y-1"
              >
                Find a Specialist
              </Link>
              <Link 
                to="#inquiry" 
                className="bg-white border-2 border-cyan-500 text-cyan-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-cyan-50 transition-all duration-300"
              >
                Submit Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Replace Roots Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Why Choose a <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Replace Roots Dentist?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We connect you with only the most qualified and trusted dental implant specialists worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseReasons.map((reason, index) => (
              <div key={index} className="bg-gray-50 rounded-3xl p-8 text-center group hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`fa-solid ${reason.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Find a Specialist Section */}
      <section id="search" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Find a <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Trusted Implant Specialist</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Search for verified implant specialists in your area and get the care you deserve
            </p>
          </div>

          {/* Search Form */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
              <div className="flex items-center mb-6">
                <i className="fa-solid fa-search text-cyan-600 mr-3 text-xl"></i>
                <span className="text-cyan-600 font-semibold text-lg">Find Your Specialist</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="relative">
                  <i className="fa-solid fa-map-marker-alt absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
                  <input
                    type="text"
                    placeholder="Enter your location"
                    className="w-full bg-gray-50 border border-gray-300 rounded-xl p-4 pl-12 text-gray-800 placeholder-gray-500 outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                
                <div className="relative">
                  <i className="fa-solid fa-tooth absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
                  <select className="w-full bg-gray-50 border border-gray-300 rounded-xl p-4 pl-12 appearance-none text-gray-800 outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent cursor-pointer">
                    <option>All Treatments</option>
                    {treatmentTypes.map((type, index) => (
                      <option key={index}>{type}</option>
                    ))}
                  </select>
                  <i className="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"></i>
                </div>
                
                <div className="relative">
                  <i className="fa-solid fa-calendar absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
                  <select className="w-full bg-gray-50 border border-gray-300 rounded-xl p-4 pl-12 appearance-none text-gray-800 outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent cursor-pointer">
                    <option>Any Time</option>
                    <option>This Week</option>
                    <option>Next Week</option>
                    <option>This Month</option>
                  </select>
                  <i className="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"></i>
                </div>
                
                <button className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white p-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2">
                  <i className="fa-solid fa-search"></i>
                  <span>Search</span>
                </button>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <span className="text-gray-600 text-sm font-medium">Popular:</span>
                {['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai'].map((city) => (
                  <button key={city} className="px-3 py-1 bg-gray-100 hover:bg-cyan-100 text-gray-700 hover:text-cyan-700 rounded-full text-sm transition-colors duration-300">
                    {city}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Search Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {searchSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              What Our <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Patients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real experiences from patients who found their perfect implant specialist through Replace Roots
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {patientTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-3xl p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star text-yellow-400"></i>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-bold text-gray-800">{testimonial.name}</div>
                  <div className="text-cyan-600 text-sm">{testimonial.treatment}</div>
                  <div className="text-gray-500 text-sm">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Inquiry Form */}
      <section id="inquiry" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Submit Your <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Inquiry</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tell us about your implant needs and we'll connect you with the right specialist
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-50 border border-gray-300 rounded-xl p-4 text-gray-800 outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-50 border border-gray-300 rounded-xl p-4 text-gray-800 outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-gray-50 border border-gray-300 rounded-xl p-4 text-gray-800 outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Location *</label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-50 border border-gray-300 rounded-xl p-4 text-gray-800 outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Enter your city/location"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Treatment Type</label>
                  <select
                    name="treatmentType"
                    value={formData.treatmentType}
                    onChange={handleInputChange}
                    className="w-full bg-gray-50 border border-gray-300 rounded-xl p-4 text-gray-800 outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent cursor-pointer"
                  >
                    <option value="">Select treatment type</option>
                    {treatmentTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full bg-gray-50 border border-gray-300 rounded-xl p-4 text-gray-800 outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                    placeholder="Tell us about your implant needs, any specific concerns, or questions you have..."
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-12 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Submit Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForPatientsPage;
