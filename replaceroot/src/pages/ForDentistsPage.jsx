import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer } from '../components';
import Layout from '../components/Layout';

const ForDentistsPage = () => {

  const leadPackages = [
    {
      name: "Starter",
      price: "₹9,999",
      period: "per month",
      description: "Perfect for new practices looking to establish their implant business",
      features: [
        "Up to 20 qualified leads per month",
        "Basic lead management dashboard",
        "Email support",
        "Patient verification included",
        "Basic analytics",
        "Mobile app access"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "₹19,999",
      period: "per month",
      description: "Ideal for established practices wanting to scale their implant services",
      features: [
        "Up to 50 qualified leads per month",
        "Advanced lead management system",
        "Priority phone & email support",
        "Patient verification & screening",
        "Detailed analytics & reporting",
        "Custom lead criteria",
        "Dedicated account manager",
        "Marketing materials & templates"
      ],
      popular: true,
      cta: "Get Started"
    },
    {
      name: "Enterprise",
      price: "₹39,999",
      period: "per month",
      description: "For large practices and dental chains with high-volume implant needs",
      features: [
        "Unlimited qualified leads",
        "Full-featured lead management",
        "24/7 priority support",
        "Complete patient verification",
        "Advanced analytics & insights",
        "Custom integrations",
        "Dedicated success manager",
        "White-label solutions",
        "API access",
        "Custom training sessions"
      ],
      popular: false,
      cta: "Contact Sales"
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

      {/* Pricing Section */}
      <section id="pricing" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              Lead Packages & <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Pricing Plans</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan to grow your implant practice. All plans include a 30-day money-back guarantee.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {leadPackages.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl border-2 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 ${
                plan.popular ? 'border-cyan-500' : 'border-gray-100'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                  <div className="mb-3 sm:mb-4">
                    <span className="text-3xl sm:text-4xl font-bold text-gray-800">{plan.price}</span>
                    <span className="text-gray-600 text-sm sm:text-base">/{plan.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <i className="fa-solid fa-check text-cyan-500 mr-3"></i>
                      <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white hover:from-cyan-600 hover:to-teal-600'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 sm:mt-12">
            <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Need a custom plan for your practice?</p>
            <div className="flex justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-xl font-bold hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 text-sm sm:text-base"
              >
                <i className="fa-solid fa-phone mr-2"></i>
                Contact Sales Team
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
    </div>
  </Layout>
);
};

export default ForDentistsPage;
