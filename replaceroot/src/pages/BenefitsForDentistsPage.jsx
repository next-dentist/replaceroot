import React from 'react';
import { Header, Footer } from '../components';

const BenefitsForDentistsPage = () => {
  const keyBenefits = [
    {
      icon: 'fa-chart-line',
      title: 'Guaranteed Practice Growth',
      description: 'Consistent flow of qualified leads that convert into paying patients, helping you grow your practice and increase revenue.',
      features: [
        'Predictable lead flow',
        'High conversion rates',
        'Revenue growth tracking',
        'Practice expansion support'
      ]
    },
    {
      icon: 'fa-users',
      title: 'Quality Patient Leads',
      description: 'Pre-screened, motivated patients who are ready for dental implant treatment and have the financial means to proceed.',
      features: [
        'Pre-qualified patients',
        'Financial capability verified',
        'Treatment-ready candidates',
        'Geographic proximity ensured'
      ]
    },
    {
      icon: 'fa-clock',
      title: 'Time & Cost Savings',
      description: 'Focus on patient care while we handle marketing, lead generation, and patient acquisition for you.',
      features: [
        'No marketing overhead',
        'Reduced administrative burden',
        'Faster patient acquisition',
        'Lower customer acquisition cost'
      ]
    },
    {
      icon: 'fa-globe',
      title: 'Global Patient Reach',
      description: 'Access to patients from around the world who are specifically seeking dental implant treatment in your region.',
      features: [
        'International patient base',
        'Regional market expansion',
        'Tourism patient opportunities',
        'Diverse patient demographics'
      ]
    },
    {
      icon: 'fa-shield-alt',
      title: 'Risk-Free Partnership',
      description: 'No upfront costs, no long-term contracts. Pay only for the leads that convert into actual patients.',
      features: [
        'No upfront investment',
        'Performance-based pricing',
        'Flexible commitment terms',
        'Transparent pricing structure'
      ]
    },
    {
      icon: 'fa-headset',
      title: 'Dedicated Support Team',
      description: '24/7 support from our experienced team to help you maximize lead conversion and practice growth.',
      features: [
        '24/7 support availability',
        'Lead optimization guidance',
        'Practice growth consulting',
        'Technical assistance'
      ]
    }
  ];

  const practiceGrowthMetrics = [
    {
      metric: '300%',
      label: 'Average Practice Growth',
      description: 'Dentists typically see 3x growth in their implant practice within the first year'
    },
    {
      metric: '85%',
      label: 'Lead Conversion Rate',
      description: 'High-quality leads that convert into paying patients'
    },
    {
      metric: '24hrs',
      label: 'Average Response Time',
      description: 'Quick lead delivery ensuring you never miss an opportunity'
    },
    {
      metric: '95%',
      label: 'Dentist Satisfaction',
      description: 'Overwhelming satisfaction rate from our partner dentists'
    }
  ];

  const competitiveAdvantages = [
    {
      title: 'Exclusive Market Access',
      description: 'Access to patients who specifically search for dental implant specialists through our platform, giving you a competitive edge.',
      icon: 'fa-crown',
      color: 'text-yellow-500'
    },
    {
      title: 'Advanced Lead Scoring',
      description: 'AI-powered lead scoring ensures you receive only the most qualified and conversion-ready patients.',
      icon: 'fa-robot',
      color: 'text-blue-500'
    },
    {
      title: 'Comprehensive Marketing',
      description: 'Full-service digital marketing including SEO, PPC, social media, and content marketing at no additional cost.',
      icon: 'fa-bullhorn',
      color: 'text-green-500'
    },
    {
      title: 'Patient Education Support',
      description: 'Educational content and resources to help patients understand their treatment options and make informed decisions.',
      icon: 'fa-graduation-cap',
      color: 'text-purple-500'
    },
    {
      title: 'Technology Integration',
      description: 'Seamless integration with your existing practice management systems for efficient patient management.',
      icon: 'fa-cogs',
      color: 'text-orange-500'
    },
    {
      title: 'Performance Analytics',
      description: 'Detailed analytics and reporting to track your lead performance and optimize your conversion strategies.',
      icon: 'fa-chart-bar',
      color: 'text-cyan-500'
    }
  ];

  const testimonials = [
    {
      quote: "Replace Roots transformed my practice. I went from 2-3 implant cases per month to 15-20 cases. The quality of leads is exceptional.",
      author: "Dr. Sarah Johnson",
      practice: "Advanced Dental Implants, New York",
      rating: 5
    },
    {
      quote: "The leads are incredibly qualified. 90% of the patients I receive are ready to proceed with treatment. It's been a game-changer.",
      author: "Dr. Michael Chen",
      practice: "Chen Dental Group, Los Angeles",
      rating: 5
    },
    {
      quote: "I've grown my implant practice by 400% in just 8 months. The support team is amazing and always available when I need help.",
      author: "Dr. Emily Rodriguez",
      practice: "Rodriguez Dental Care, Miami",
      rating: 5
    }
  ];

  const supportServices = [
    {
      title: 'Lead Optimization',
      description: 'Our team works with you to optimize lead conversion rates through best practices and proven strategies.',
      icon: 'fa-target'
    },
    {
      title: 'Practice Consulting',
      description: 'Expert guidance on practice growth, patient management, and business development strategies.',
      icon: 'fa-lightbulb'
    },
    {
      title: 'Marketing Support',
      description: 'Ongoing marketing support including content creation, social media management, and brand development.',
      icon: 'fa-paint-brush'
    },
    {
      title: 'Technical Assistance',
      description: '24/7 technical support for platform integration, lead management, and system optimization.',
      icon: 'fa-tools'
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
              <i className="fa-solid fa-star mr-2"></i>
              Exclusive Benefits for Dentists
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-gray-800">
              Benefits for <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Dentists</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join thousands of successful dental implant specialists who have transformed their practices with Replace Roots. Discover the exclusive benefits that help you grow your practice, increase revenue, and focus on what you do best - patient care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#benefits"
                className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg transform hover:-translate-y-1"
              >
                Explore Benefits
              </a>
              <a 
                href="/for-dentists"
                className="bg-white border-2 border-cyan-500 text-cyan-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-cyan-50 transition-all duration-300"
              >
                Join Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section id="benefits" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Key <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Benefits</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover why leading dental implant specialists choose Replace Roots to grow their practices and achieve exceptional results.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyBenefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mb-6">
                    <i className={`fa-solid ${benefit.icon} text-white text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{benefit.description}</p>
                  <ul className="space-y-2">
                    {benefit.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <i className="fa-solid fa-check text-cyan-500 text-xs"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Practice Growth Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Proven <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Results</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our partner dentists consistently achieve remarkable growth and success with our lead generation platform.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {practiceGrowthMetrics.map((metric, index) => (
                <div key={index} className="text-center bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fa-solid fa-chart-line text-white text-3xl"></i>
                  </div>
                  <h3 className="text-4xl font-bold text-gray-800 mb-2">{metric.metric}</h3>
                  <p className="text-lg font-semibold text-gray-700 mb-2">{metric.label}</p>
                  <p className="text-gray-600 text-sm">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Competitive <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Advantages</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead of the competition with exclusive advantages that only Replace Roots provides to our partner dentists.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {competitiveAdvantages.map((advantage, index) => (
                <div key={index} className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-8 border border-cyan-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <i className={`fa-solid ${advantage.icon} ${advantage.color} text-2xl mr-3`}></i>
                    <h3 className="text-xl font-bold text-gray-800">{advantage.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              What Our <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Partners Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from successful dental implant specialists who have transformed their practices with Replace Roots.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="fa-solid fa-star text-yellow-400 text-lg"></i>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="border-t border-gray-100 pt-4">
                    <p className="font-bold text-gray-800">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.practice}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Comprehensive <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Support</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide ongoing support to help you maximize your success and achieve your practice growth goals.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {supportServices.map((service, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mr-4">
                      <i className={`fa-solid ${service.icon} text-white text-xl`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Ready to <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Transform Your Practice?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of successful dental implant specialists who have grown their practices with Replace Roots. Start receiving qualified leads today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/for-dentists"
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 shadow-lg"
              >
                Join Replace Roots
              </a>
              <a 
                href="/contact"
                className="bg-white border-2 border-cyan-500 text-cyan-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-cyan-50 transition-all duration-300"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BenefitsForDentistsPage;
