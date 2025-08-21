import React from 'react';
import { Header, Footer } from '../components';

const HowWeGenerateLeadsPage = () => {
  const leadGenerationMethods = [
    {
      icon: 'fa-search',
      title: 'SEO & Content Marketing',
      description: 'Comprehensive search engine optimization and educational content that ranks for dental implant keywords, driving qualified organic traffic to our platform.',
      features: [
        'Targeted keyword optimization',
        'Educational blog content',
        'Local SEO strategies',
        'Technical SEO improvements'
      ]
    },
    {
      icon: 'fa-ad',
      title: 'Digital Advertising',
      description: 'Strategic paid advertising campaigns across multiple platforms to reach patients actively searching for dental implant solutions.',
      features: [
        'Google Ads campaigns',
        'Social media advertising',
        'Retargeting strategies',
        'Display advertising'
      ]
    },
    {
      icon: 'fa-users',
      title: 'Social Media Marketing',
      description: 'Engaging social media presence that builds trust and educates potential patients about dental implant options and benefits.',
      features: [
        'Educational content creation',
        'Patient testimonials',
        'Before/after transformations',
        'Community engagement'
      ]
    },
    {
      icon: 'fa-handshake',
      title: 'Partnership Marketing',
      description: 'Strategic partnerships with dental professionals, healthcare providers, and related businesses to generate qualified referrals.',
      features: [
        'Dental professional networks',
        'Healthcare provider partnerships',
        'Industry collaborations',
        'Referral programs'
      ]
    },
    {
      icon: 'fa-chart-line',
      title: 'Data-Driven Targeting',
      description: 'Advanced analytics and data analysis to identify and target the most qualified prospects based on demographics, behavior, and intent.',
      features: [
        'Demographic analysis',
        'Behavioral targeting',
        'Intent-based marketing',
        'Predictive analytics'
      ]
    },
    {
      icon: 'fa-star',
      title: 'Reputation Management',
      description: 'Building and maintaining strong online reputation through patient reviews, testimonials, and positive brand presence.',
      features: [
        'Review management',
        'Testimonial collection',
        'Brand monitoring',
        'Reputation optimization'
      ]
    }
  ];

  const targetingStrategies = [
    {
      title: 'Geographic Targeting',
      description: 'Precise location-based targeting to reach patients in specific cities, regions, or service areas where our partner dentists operate.',
      icon: 'fa-map-marker-alt',
      details: [
        'City-specific campaigns',
        'Radius-based targeting',
        'Local SEO optimization',
        'Regional market analysis'
      ]
    },
    {
      title: 'Demographic Targeting',
      description: 'Targeting based on age, income, education, and other demographic factors that indicate dental implant candidacy and purchasing power.',
      icon: 'fa-user-friends',
      details: [
        'Age group targeting (35-65+)',
        'Income level analysis',
        'Education level targeting',
        'Lifestyle factor consideration'
      ]
    },
    {
      title: 'Behavioral Targeting',
      description: 'Targeting users based on their online behavior, search patterns, and engagement with dental health content.',
      icon: 'fa-brain',
      details: [
        'Search behavior analysis',
        'Content engagement tracking',
        'Website visit patterns',
        'Interest-based targeting'
      ]
    },
    {
      title: 'Intent-Based Targeting',
      description: 'Focusing on users who demonstrate clear intent to seek dental implant treatment through specific search terms and actions.',
      icon: 'fa-bullseye',
      details: [
        'High-intent keyword targeting',
        'Treatment-specific searches',
        'Comparison shopping behavior',
        'Consultation request patterns'
      ]
    }
  ];

  const qualityAssurance = [
    {
      title: 'Lead Verification Process',
      description: 'Multi-step verification to ensure leads are genuine, qualified, and ready for dental implant consultation.',
      steps: [
        'Initial contact verification',
        'Treatment interest confirmation',
        'Geographic location validation',
        'Timeline and budget assessment'
      ]
    },
    {
      title: 'Qualification Criteria',
      description: 'Strict criteria to ensure only high-quality, motivated patients are passed to our partner dentists.',
      steps: [
        'Treatment need verification',
        'Financial capability assessment',
        'Timeline commitment check',
        'Geographic accessibility confirmation'
      ]
    },
    {
      title: 'Lead Scoring System',
      description: 'Advanced scoring algorithm that ranks leads based on multiple factors to prioritize the most qualified prospects.',
      steps: [
        'Intent level assessment',
        'Financial qualification scoring',
        'Geographic proximity rating',
        'Timeline urgency evaluation'
      ]
    }
  ];

  const technologyStack = [
    {
      icon: 'fa-robot',
      title: 'AI-Powered Lead Scoring',
      description: 'Advanced artificial intelligence algorithms that analyze lead behavior and characteristics to predict conversion likelihood.'
    },
    {
      icon: 'fa-database',
      title: 'CRM Integration',
      description: 'Seamless integration with customer relationship management systems for efficient lead tracking and management.'
    },
    {
      icon: 'fa-chart-bar',
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics platform providing real-time insights into lead generation performance and optimization opportunities.'
    },
    {
      icon: 'fa-mobile-alt',
      title: 'Multi-Channel Tracking',
      description: 'Advanced tracking across all digital channels to understand the complete customer journey and attribution.'
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
              <i className="fa-solid fa-chart-line mr-2"></i>
              Lead Generation Excellence
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-gray-800">
              How We <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Generate Leads</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover our comprehensive lead generation strategies that connect qualified patients with skilled dental implant specialists. We use advanced technology and proven methods to deliver high-quality, conversion-ready leads.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#methods"
                className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg transform hover:-translate-y-1"
              >
                Explore Our Methods
              </a>
              <a 
                href="/for-dentists"
                className="bg-white border-2 border-cyan-500 text-cyan-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-cyan-50 transition-all duration-300"
              >
                Join as Dentist
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Generation Methods */}
      <section id="methods" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Lead Generation Methods</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We employ a multi-channel approach combining digital marketing, content creation, and strategic partnerships to generate qualified dental implant leads.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadGenerationMethods.map((method, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mb-6">
                    <i className={`fa-solid ${method.icon} text-white text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{method.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{method.description}</p>
                  <ul className="space-y-2">
                    {method.features.map((feature, featureIndex) => (
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

      {/* Targeting Strategies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Advanced <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Targeting Strategies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our sophisticated targeting ensures we reach the right patients at the right time with the right message for maximum conversion rates.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {targetingStrategies.map((strategy, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mr-4">
                      <i className={`fa-solid ${strategy.icon} text-white text-xl`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{strategy.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{strategy.description}</p>
                  <ul className="space-y-3">
                    {strategy.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-3">
                        <i className="fa-solid fa-circle text-cyan-500 text-xs mt-2 flex-shrink-0"></i>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Quality <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Assurance Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every lead undergoes rigorous verification and qualification to ensure only the highest quality prospects reach our partner dentists.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {qualityAssurance.map((process, index) => (
                <div key={index} className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-8 border border-cyan-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{process.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{process.description}</p>
                  <ul className="space-y-3">
                    {process.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs font-bold">{stepIndex + 1}</span>
                        </div>
                        <span className="text-gray-700 text-sm">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Advanced <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Technology Stack</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge technology to optimize lead generation, improve targeting accuracy, and maximize conversion rates.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {technologyStack.map((tech, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mr-4">
                      <i className={`fa-solid ${tech.icon} text-white text-2xl`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{tech.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Proven <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Success Metrics</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our lead generation strategies deliver measurable results that help dental practices grow and succeed.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fa-solid fa-users text-white text-3xl"></i>
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">10,000+</h3>
                <p className="text-gray-600">Qualified Leads Generated</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fa-solid fa-percentage text-white text-3xl"></i>
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">85%</h3>
                <p className="text-gray-600">Lead Quality Score</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fa-solid fa-clock text-white text-3xl"></i>
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">24hrs</h3>
                <p className="text-gray-600">Average Response Time</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fa-solid fa-smile text-white text-3xl"></i>
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">95%</h3>
                <p className="text-gray-600">Dentist Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Ready to Get <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Quality Leads?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our network of successful dental implant specialists and start receiving qualified, conversion-ready leads today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/for-dentists"
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 shadow-lg"
              >
                Join as Dentist
              </a>
              <a 
                href="/contact"
                className="bg-white border-2 border-cyan-500 text-cyan-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-cyan-50 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowWeGenerateLeadsPage;
