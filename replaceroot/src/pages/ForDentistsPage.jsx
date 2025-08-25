import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer } from '../components';
import Layout from '../components/Layout';
import AddClinicModal from '../components/clinic/AddClinicModal';

const ForDentistsPage = () => {
  const [isDentistModalOpen, setIsDentistModalOpen] = useState(false);

  const successStories = [
    {
      name: "Dr. Priya Sharma",
      practice: "Dental Excellence Clinic",
      location: "Mumbai, India",
      stats: {
        leadsReceived: "150+",
        conversionRate: "85%",
        revenueIncrease: "300%",
        timeFrame: "6 months"
      },
      story: "Within 6 months of joining Replace Roots, my implant practice saw a 300% increase in revenue. The quality of leads is exceptional and the support team is always there when I need help.",
      highlights: [
        "150+ qualified leads received",
        "85% conversion rate",
        "300% revenue increase",
        "Established implant specialty"
      ]
    },
    {
      name: "Dr. Rajesh Kumar",
      practice: "Smile Dental Care",
      location: "Delhi, India",
      stats: {
        leadsReceived: "200+",
        conversionRate: "78%",
        revenueIncrease: "250%",
        timeFrame: "8 months"
      },
      story: "Replace Roots helped me transform my general practice into a thriving implant center. The patient verification process is outstanding and I've built a strong reputation in my community.",
      highlights: [
        "200+ qualified leads received",
        "78% conversion rate",
        "250% revenue increase",
        "Expanded practice services"
      ]
    },
    {
      name: "Dr. Anjali Patel",
      practice: "Advanced Dental Solutions",
      location: "Bangalore, India",
      stats: {
        leadsReceived: "120+",
        conversionRate: "92%",
        revenueIncrease: "400%",
        timeFrame: "4 months"
      },
      story: "The platform is incredibly user-friendly and the leads are consistently high-quality. I've achieved a 92% conversion rate and my practice has grown exponentially.",
      highlights: [
        "120+ qualified leads received",
        "92% conversion rate",
        "400% revenue increase",
        "High patient satisfaction"
      ]
    }
  ];

  const faqs = [
    {
      question: "How does the lead verification process work?",
      answer: "Our comprehensive verification process includes patient screening, treatment needs assessment, budget verification, and appointment readiness confirmation. We ensure only qualified, serious patients are connected to our partner dentists."
    },
    {
      question: "What types of implant leads do you provide?",
      answer: "We provide leads for all types of dental implant procedures including single tooth implants, multiple tooth implants, full mouth dental implants, All-on-4, All-on-6, immediate implants, and bone grafting procedures."
    },
    {
      question: "How quickly will I start receiving leads?",
      answer: "Most dentists start receiving qualified leads within 7-14 days of joining. The exact timeline depends on your location, specialization, and the current patient demand in your area."
    },
    {
      question: "Can I set my own lead criteria?",
      answer: "Yes! Professional and Enterprise plan members can set custom lead criteria including location radius, treatment types, patient budget ranges, and appointment preferences to ensure you receive the most relevant leads."
    },
    {
      question: "What support do you provide to dentists?",
      answer: "We provide comprehensive support including lead management training, marketing materials, patient communication templates, and dedicated account management. Our team is here to help you maximize your success with every lead."
    },
    {
      question: "Is there a long-term commitment required?",
      answer: "No long-term commitments required. We offer flexible month-to-month plans with a 30-day money-back guarantee. You can upgrade, downgrade, or cancel your plan at any time."
    }
  ];

  const benefits = [
    {
      icon: "fa-users",
      title: "Qualified Patient Leads",
      description: "Pre-screened patients ready for implant consultations with verified treatment needs and budgets."
    },
    {
      icon: "fa-chart-line",
      title: "Practice Growth",
      description: "Scale your implant practice with consistent, high-quality patient flow and increased revenue."
    },
    {
      icon: "fa-globe",
      title: "Global Reach",
      description: "Access patients from around the world seeking quality dental implant care in your region."
    },
    {
      icon: "fa-check-circle",
      title: "Quality Assurance",
      description: "Rigorous verification process ensures only serious, qualified patients are connected to you."
    },
    {
      icon: "fa-tools",
      title: "Practice Tools",
      description: "Comprehensive dashboard and tools to manage leads, track conversions, and optimize your practice."
    },
    {
      icon: "fa-headset",
      title: "Dedicated Support",
      description: "Expert support team to help you maximize your success with every patient lead."
    }
  ];

  const testimonials = [
    {
      name: "Dr. Priya Sharma",
      location: "Mumbai, India",
      quote: "Replace Roots has transformed my implant practice. The quality of leads is exceptional and the support team is always there when I need help.",
      rating: 5,
      practice: "Dental Excellence Clinic"
    },
    {
      name: "Dr. Rajesh Kumar",
      location: "Delhi, India", 
      quote: "I've seen a 300% increase in my implant cases since joining Replace Roots. The patient verification process is outstanding.",
      rating: 5,
      practice: "Smile Dental Care"
    },
    {
      name: "Dr. Anjali Patel",
      location: "Bangalore, India",
      quote: "The platform is incredibly user-friendly and the leads are consistently high-quality. Highly recommended for any implant specialist.",
      rating: 5,
      practice: "Advanced Dental Solutions"
    }
  ];

  return (
    <Layout
      title="For Dentists - Grow Your Implant Practice | ReplaceRoot"
      description="Join ReplaceRoot's platform for dental implant specialists. Get verified patient leads, grow your practice, and deliver exceptional care with our comprehensive support system."
      keywords={['dental implant leads', 'implant practice growth', 'dental specialists', 'patient leads', 'implant practice', 'dental professionals', 'ReplaceRoot']}
      canonical="/for-dentists"
      og={{
        title: "For Dentists - Grow Your Implant Practice",
        description: "Join ReplaceRoot's platform for dental implant specialists. Get verified patient leads and grow your practice.",
        type: 'website',
        image: "https://replaceroot.com/images/for-dentists-hero.jpg",
        site_name: "ReplaceRoot"
      }}
      twitter={{ card: 'summary_large_image' }}
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'For Dentists - Grow Your Implant Practice',
        description: 'Join ReplaceRoot\'s platform for dental implant specialists. Get verified patient leads, grow your practice, and deliver exceptional care.',
        url: 'https://replaceroot.com/for-dentists',
        mainEntity: {
          '@type': 'Service',
          name: 'Dental Implant Lead Generation',
          provider: {
            '@type': 'Organization',
            name: 'ReplaceRoot'
          },
          description: 'Verified patient leads for dental implant specialists'
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
              <i className="fa-solid fa-user-md mr-2"></i>
              For Dental Professionals
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-gray-800">
              Grow Your <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Implant Practice</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto">
              Join the world's leading platform for dental implant specialists. Get verified patient leads, grow your practice, and deliver exceptional care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setIsDentistModalOpen(true)}
                className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg transform hover:-translate-y-1"
              >
                <i className="fa-solid fa-user-md mr-2"></i>
                Join as Dentist
              </button>
              <Link 
                to="/pricing"
                className="bg-white border-2 border-cyan-500 text-cyan-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-cyan-50 transition-all duration-300"
              >
                <i className="fa-solid fa-tags mr-2"></i>
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              Why Choose <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Replace Roots?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to grow your implant practice and deliver exceptional patient care
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 text-center group hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`fa-solid ${benefit.icon} text-white text-lg sm:text-xl md:text-2xl`}></i>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              How It <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps to start receiving qualified implant leads
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-white text-lg sm:text-xl md:text-2xl font-bold">
                1
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Join Our Platform</h3>
              <p className="text-gray-600 text-sm sm:text-base">Sign up and complete your profile with your specialization, experience, and practice details.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-white text-lg sm:text-xl md:text-2xl font-bold">
                2
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Get Verified Leads</h3>
              <p className="text-gray-600 text-sm sm:text-base">Receive pre-screened, qualified patient leads that match your expertise and location.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-white text-lg sm:text-xl md:text-2xl font-bold">
                3
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Grow Your Practice</h3>
              <p className="text-gray-600 text-sm sm:text-base">Convert leads into patients and scale your implant practice with our ongoing support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              What Our <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Partners Say</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Join hundreds of successful implant specialists who trust Replace Roots
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8">
                <div className="flex items-center mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star text-yellow-400"></i>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 sm:mb-6 italic text-sm sm:text-base">"{testimonial.quote}"</p>
                <div>
                  <div className="font-bold text-gray-800 text-sm sm:text-base">{testimonial.name}</div>
                  <div className="text-cyan-600 text-xs sm:text-sm">{testimonial.practice}</div>
                  <div className="text-gray-500 text-xs sm:text-sm">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              Real <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Success Stories</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              See how our partner dentists have transformed their practices and achieved remarkable growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2">
                                 {/* Doctor Info */}
                 <div className="flex items-center mb-6">
                   <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mr-4">
                     <i className="fa-solid fa-user-md text-white text-lg sm:text-xl"></i>
                   </div>
                   <div>
                     <h3 className="text-lg sm:text-xl font-bold text-gray-800">{story.name}</h3>
                     <p className="text-cyan-600 text-sm sm:text-base font-medium">{story.practice}</p>
                     <p className="text-gray-500 text-xs sm:text-sm">{story.location}</p>
                   </div>
                 </div>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center bg-gray-50 rounded-xl p-3 sm:p-4">
                    <div className="text-lg sm:text-xl font-bold text-cyan-600">{story.stats.leadsReceived}</div>
                    <div className="text-xs sm:text-sm text-gray-600">Leads Received</div>
                  </div>
                  <div className="text-center bg-gray-50 rounded-xl p-3 sm:p-4">
                    <div className="text-lg sm:text-xl font-bold text-cyan-600">{story.stats.conversionRate}</div>
                    <div className="text-xs sm:text-sm text-gray-600">Conversion Rate</div>
                  </div>
                  <div className="text-center bg-gray-50 rounded-xl p-3 sm:p-4">
                    <div className="text-lg sm:text-xl font-bold text-cyan-600">{story.stats.revenueIncrease}</div>
                    <div className="text-xs sm:text-sm text-gray-600">Revenue Increase</div>
                  </div>
                  <div className="text-center bg-gray-50 rounded-xl p-3 sm:p-4">
                    <div className="text-lg sm:text-xl font-bold text-cyan-600">{story.stats.timeFrame}</div>
                    <div className="text-xs sm:text-sm text-gray-600">Time Frame</div>
                  </div>
                </div>
                
                {/* Story */}
                <div className="mb-6">
                  <p className="text-gray-600 text-sm sm:text-base italic leading-relaxed">"{story.story}"</p>
                </div>
                
                {/* Highlights */}
                <div className="space-y-2">
                  {story.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-center">
                      <i className="fa-solid fa-check-circle text-cyan-500 mr-3 text-sm"></i>
                      <span className="text-gray-700 text-sm sm:text-base">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 sm:mt-12">
            <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Ready to start your success story?</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/pricing" 
                className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-xl font-bold hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 text-sm sm:text-base"
              >
                <i className="fa-solid fa-tags mr-2"></i>
                View Pricing Plans
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-100 text-gray-800 rounded-xl font-bold hover:bg-gray-200 transition-all duration-300 text-sm sm:text-base"
              >
                <i className="fa-solid fa-phone mr-2"></i>
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about joining Replace Roots as a dental professional
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
                  <i className="fa-solid fa-question-circle text-cyan-500 mr-3"></i>
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
              </div>
            ))}
          </div>
          

        </div>
      </section>

      <Footer />
      
      {/* Dentist Registration Modal */}
      <AddClinicModal 
        isOpen={isDentistModalOpen}
        onClose={() => setIsDentistModalOpen(false)}
      />
    </div>
  </Layout>
);
};

export default ForDentistsPage;
