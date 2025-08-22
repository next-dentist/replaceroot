import React, { useState } from 'react';
import { Header, Footer } from '../components';
import Layout from '../components/Layout';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: 'fa-map-marker-alt',
      title: 'Global Headquarters',
      details: '123 Business District, Suite 456<br/>New York, NY 10001<br/>United States',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'fa-envelope',
      title: 'Email Support',
      details: 'support@replaceroots.com<br/>info@replaceroots.com<br/>business@replaceroots.com',
      color: 'from-cyan-500 to-teal-500'
    },
    {
      icon: 'fa-phone',
      title: 'Phone Support',
      details: '+1 (555) 123-4567<br/>+1 (555) 987-6543<br/>Mon-Fri: 9AM-6PM EST',
      color: 'from-teal-500 to-green-500'
    }
  ];

  const supportCategories = [
    {
      title: 'For Dentists',
      description: 'Get help with joining our platform, lead management, and practice growth.',
      icon: 'fa-user-md',
      contact: 'dentists@replaceroots.com'
    },
    {
      title: 'For Patients',
      description: 'Find specialists, get treatment information, and patient support.',
      icon: 'fa-user',
      contact: 'patients@replaceroots.com'
    },
    {
      title: 'Technical Support',
      description: 'Website issues, account problems, and technical assistance.',
      icon: 'fa-cog',
      contact: 'tech@replaceroots.com'
    },
    {
      title: 'Business Inquiries',
      description: 'Partnerships, media requests, and business development.',
      icon: 'fa-handshake',
      contact: 'business@replaceroots.com'
    }
  ];

  const faqs = [
    {
      question: 'How quickly do you respond to inquiries?',
      answer: 'We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call our support line.'
    },
    {
      question: 'What information should I include in my message?',
      answer: 'Please include your name, contact information, and a detailed description of your inquiry or concern. This helps us provide the most accurate and helpful response.'
    },
    {
      question: 'Do you offer support in multiple languages?',
      answer: 'Currently, we provide support in English. We\'re working on expanding our language support to better serve our global community.'
    },
    {
      question: 'Can I schedule a call with your team?',
      answer: 'Yes! For complex inquiries or detailed discussions, we\'re happy to schedule a call. Please mention this in your message and we\'ll arrange a convenient time.'
    }
  ];

  return (
    <Layout
      title="Contact Us - Dental Implant Support | ReplaceRoot"
      description="Get in touch with ReplaceRoot for dental implant support, questions, or assistance. Contact our team for help with finding specialists or joining our platform."
      keywords={['contact ReplaceRoot', 'dental implant support', 'implant specialist contact', 'dental platform support', 'implant questions', 'ReplaceRoot']}
      canonical="/contact"
      og={{
        title: "Contact Us - Dental Implant Support",
        description: "Get in touch with ReplaceRoot for dental implant support, questions, or assistance. Contact our team for help with finding specialists or joining our platform.",
        type: 'website',
        image: "https://replaceroot.com/images/contact-hero.jpg",
        site_name: "ReplaceRoot"
      }}
      twitter={{ card: 'summary_large_image' }}
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact Us - Dental Implant Support',
        description: 'Get in touch with ReplaceRoot for dental implant support, questions, or assistance. Contact our team for help with finding specialists or joining our platform.',
        url: 'https://replaceroot.com/contact',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+1 (555) 123-4567',
          email: 'support@replaceroots.com',
          contactType: 'customer service',
          availableLanguage: 'English'
        },
        mainEntity: {
          '@type': 'Organization',
          name: 'ReplaceRoot',
          url: 'https://replaceroot.com'
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
              <i className="fa-solid fa-envelope mr-2"></i>
              Get in Touch
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-gray-800">
              Contact <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Us</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto">
              Have questions about dental implants, our platform, or need support? We're here to help you get the information and assistance you need.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a 
                href="#contact-form"
                className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg transition-all duration-300 shadow-lg transform hover:-translate-y-1"
              >
                Send Message
              </a>
              <a 
                href="tel:+15551234567"
                className="bg-white border-2 border-cyan-500 text-cyan-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:bg-cyan-50 transition-all duration-300"
              >
                <i className="fa-solid fa-phone mr-2"></i>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              Get in <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Multiple ways to reach us. Choose the method that works best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-8 text-center hover:shadow-xl transition-all duration-300">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6`}>
                  <i className={`fa-solid ${info.icon} text-white text-lg sm:text-xl md:text-2xl`}></i>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">{info.title}</h3>
                <div 
                  className="text-gray-600 leading-relaxed text-sm sm:text-base"
                  dangerouslySetInnerHTML={{ __html: info.details }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Support Categories */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-7xl mx-auto">
            
            {/* Contact Form */}
            <div id="contact-form">
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Send us a Message</h3>
                
                {submitStatus === 'success' && (
                  <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm sm:text-base">
                    <i className="fa-solid fa-check-circle mr-2"></i>
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all duration-300 text-sm sm:text-base"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all duration-300 text-sm sm:text-base"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all duration-300 text-sm sm:text-base"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all duration-300 text-sm sm:text-base"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="dentist">For Dentists</option>
                        <option value="patient">For Patients</option>
                        <option value="technical">Technical Support</option>
                        <option value="business">Business Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all duration-300 resize-none text-sm sm:text-base"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span>
                        <i className="fa-solid fa-spinner fa-spin mr-2"></i>
                        Sending Message...
                      </span>
                    ) : (
                      <span>
                        <i className="fa-solid fa-paper-plane mr-2"></i>
                        Send Message
                      </span>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Support Categories */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 sm:mb-8">Support Categories</h3>
              <div className="space-y-4 sm:space-y-6">
                {supportCategories.map((category, index) => (
                  <div key={index} className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className={`fa-solid ${category.icon} text-white text-sm sm:text-base`}></i>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-1 sm:mb-2">{category.title}</h4>
                        <p className="text-gray-600 mb-2 sm:mb-3 text-sm sm:text-base">{category.description}</p>
                        <a 
                          href={`mailto:${category.contact}`}
                          className="text-cyan-600 hover:text-cyan-700 font-medium text-xs sm:text-sm"
                        >
                          {category.contact}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about contacting us and getting support.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-2 sm:mb-3">{faq.question}</h4>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-cyan-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              Ready to Get <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Started?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Whether you're a dentist looking to grow your practice or a patient seeking implant treatment, we're here to help you every step of the way.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a 
                href="/for-dentists"
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 shadow-lg"
              >
                Join as Dentist
              </a>
              <a 
                href="/for-patients"
                className="bg-white border-2 border-cyan-500 text-cyan-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:bg-cyan-50 transition-all duration-300"
              >
                Find a Specialist
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  </Layout>
);
};

export default ContactPage;
