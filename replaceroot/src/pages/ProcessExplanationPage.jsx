import React from 'react';
import { Header, Footer } from '../components';

const ProcessExplanationPage = () => {
  const processSteps = [
    {
      step: '01',
      title: 'Patient Inquiry',
      description: 'Patients discover our platform through various channels and submit inquiries for dental implant treatment.',
      icon: 'fa-search',
      details: [
        'Organic search results',
        'Paid advertising campaigns',
        'Social media engagement',
        'Referral traffic',
        'Content marketing'
      ]
    },
    {
      step: '02',
      title: 'Lead Capture & Qualification',
      description: 'Our advanced system captures lead information and begins the qualification process using AI-powered algorithms.',
      icon: 'fa-filter',
      details: [
        'Contact information collection',
        'Treatment interest verification',
        'Geographic location validation',
        'Financial capability assessment',
        'Timeline and urgency evaluation'
      ]
    },
    {
      step: '03',
      title: 'Lead Scoring & Ranking',
      description: 'Each lead is scored based on multiple factors to determine quality and conversion likelihood.',
      icon: 'fa-chart-line',
      details: [
        'Intent level analysis',
        'Financial qualification scoring',
        'Geographic proximity rating',
        'Treatment urgency assessment',
        'Overall lead quality ranking'
      ]
    },
    {
      step: '04',
      title: 'Dentist Matching',
      description: 'Qualified leads are matched with appropriate dentists based on location, specialization, and availability.',
      icon: 'fa-handshake',
      details: [
        'Geographic proximity matching',
        'Specialization alignment',
        'Availability verification',
        'Practice capacity assessment',
        'Patient preference consideration'
      ]
    },
    {
      step: '05',
      title: 'Lead Delivery',
      description: 'High-quality leads are delivered to matched dentists through our secure platform with complete patient information.',
      icon: 'fa-paper-plane',
      details: [
        'Instant notification system',
        'Complete patient details',
        'Treatment requirements',
        'Contact information',
        'Lead quality score'
      ]
    },
    {
      step: '06',
      title: 'Follow-up & Support',
      description: 'We provide ongoing support to ensure successful lead conversion and patient satisfaction.',
      icon: 'fa-headset',
      details: [
        'Conversion tracking',
        'Performance analytics',
        'Support assistance',
        'Quality monitoring',
        'Continuous optimization'
      ]
    }
  ];

  const leadQualityFactors = [
    {
      title: 'Intent Level',
      description: 'How likely the patient is to proceed with treatment based on their search behavior and inquiry details.',
      icon: 'fa-bullseye',
      factors: [
        'High-intent search terms',
        'Treatment-specific inquiries',
        'Comparison shopping behavior',
        'Consultation requests',
        'Timeline urgency'
      ]
    },
    {
      title: 'Financial Qualification',
      description: 'Assessment of patient\'s ability to afford dental implant treatment and willingness to invest.',
      icon: 'fa-dollar-sign',
      factors: [
        'Income level indicators',
        'Insurance coverage',
        'Payment method preferences',
        'Budget discussions',
        'Financing interest'
      ]
    },
    {
      title: 'Geographic Proximity',
      description: 'Distance between patient location and dentist practice, ensuring convenient access to treatment.',
      icon: 'fa-map-marker-alt',
      factors: [
        'Travel distance',
        'Local search behavior',
        'Regional preferences',
        'Accessibility factors',
        'Transportation options'
      ]
    },
    {
      title: 'Treatment Readiness',
      description: 'Patient\'s preparedness to begin treatment, including timeline and decision-making status.',
      icon: 'fa-clock',
      factors: [
        'Timeline commitment',
        'Decision-making stage',
        'Treatment urgency',
        'Previous consultations',
        'Research completion'
      ]
    }
  ];

  const technologyFeatures = [
    {
      icon: 'fa-robot',
      title: 'AI-Powered Lead Scoring',
      description: 'Advanced artificial intelligence algorithms analyze multiple data points to predict lead conversion likelihood with high accuracy.',
      features: [
        'Machine learning models',
        'Behavioral pattern analysis',
        'Predictive analytics',
        'Real-time scoring updates',
        'Continuous learning algorithms'
      ]
    },
    {
      icon: 'fa-database',
      title: 'Comprehensive Data Management',
      description: 'Secure, centralized database that stores and manages all lead information with strict privacy and security protocols.',
      features: [
        'Encrypted data storage',
        'GDPR compliance',
        'Secure data transmission',
        'Backup and recovery',
        'Access control systems'
      ]
    },
    {
      icon: 'fa-chart-bar',
      title: 'Real-Time Analytics',
      description: 'Live dashboard providing insights into lead performance, conversion rates, and optimization opportunities.',
      features: [
        'Performance tracking',
        'Conversion analytics',
        'Trend analysis',
        'ROI measurement',
        'Custom reporting'
      ]
    },
    {
      icon: 'fa-mobile-alt',
      title: 'Multi-Channel Integration',
      description: 'Seamless integration across all digital channels for comprehensive lead capture and management.',
      features: [
        'Website integration',
        'Social media connectivity',
        'Email marketing sync',
        'CRM integration',
        'API connectivity'
      ]
    }
  ];

  const qualityAssurance = [
    {
      title: 'Multi-Step Verification',
      description: 'Every lead undergoes multiple verification steps to ensure authenticity and quality.',
      steps: [
        'Contact information verification',
        'Treatment interest confirmation',
        'Geographic location validation',
        'Financial capability assessment',
        'Timeline commitment verification'
      ]
    },
    {
      title: 'Quality Monitoring',
      description: 'Continuous monitoring and evaluation of lead quality to maintain high standards.',
      steps: [
        'Regular quality audits',
        'Performance tracking',
        'Feedback collection',
        'Process optimization',
        'Standards maintenance'
      ]
    },
    {
      title: 'Dentist Feedback Integration',
      description: 'Incorporating dentist feedback to continuously improve lead quality and matching accuracy.',
      steps: [
        'Feedback collection system',
        'Quality score adjustments',
        'Process improvements',
        'Matching algorithm updates',
        'Performance optimization'
      ]
    }
  ];

  const deliveryMethods = [
    {
      title: 'Instant Notifications',
      description: 'Real-time alerts delivered to dentists immediately when qualified leads are available.',
      icon: 'fa-bell',
      features: [
        'Push notifications',
        'Email alerts',
        'SMS notifications',
        'Dashboard updates',
        'Mobile app alerts'
      ]
    },
    {
      title: 'Secure Platform Access',
      description: 'Secure web-based platform where dentists can view and manage all their leads.',
      icon: 'fa-lock',
      features: [
        'Encrypted access',
        'User authentication',
        'Role-based permissions',
        'Audit trails',
        'Data protection'
      ]
    },
    {
      title: 'Complete Lead Information',
      description: 'Comprehensive patient details including contact information, treatment requirements, and lead quality score.',
      icon: 'fa-file-alt',
      features: [
        'Patient contact details',
        'Treatment requirements',
        'Geographic information',
        'Financial qualification',
        'Lead quality metrics'
      ]
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
              <i className="fa-solid fa-cogs mr-2"></i>
              Transparent Process
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-gray-800">
              Our <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Process</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover how our sophisticated lead generation and delivery process works, from patient inquiry to dentist notification. We ensure transparency, quality, and efficiency at every step.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#process"
                className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg transform hover:-translate-y-1"
              >
                Explore Process
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

      {/* Process Steps */}
      <section id="process" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              The <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Complete Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined process ensures that qualified patients are efficiently matched with the right dental implant specialists.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center">
                      <i className={`fa-solid ${step.icon} text-white text-xl`}></i>
                    </div>
                    <span className="text-4xl font-black text-gray-200">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2 text-sm text-gray-600">
                        <i className="fa-solid fa-circle text-cyan-500 text-xs mt-2 flex-shrink-0"></i>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lead Quality Factors */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Lead <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Quality Factors</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We evaluate multiple factors to ensure only the highest quality, conversion-ready leads reach our partner dentists.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {leadQualityFactors.map((factor, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mr-4">
                      <i className={`fa-solid ${factor.icon} text-white text-xl`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{factor.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{factor.description}</p>
                  <ul className="space-y-3">
                    {factor.factors.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <i className="fa-solid fa-check text-cyan-500 text-sm mt-1"></i>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Advanced <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Technology</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our cutting-edge technology ensures efficient, accurate, and secure lead processing and delivery.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {technologyFeatures.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-8 border border-cyan-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mr-4">
                      <i className={`fa-solid ${feature.icon} text-white text-2xl`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <i className="fa-solid fa-check text-cyan-500 text-xs"></i>
                        {item}
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Quality <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Assurance</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive quality assurance process ensures that only the highest quality leads reach our partner dentists.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {qualityAssurance.map((process, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300">
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

      {/* Delivery Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Lead <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Delivery</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple secure delivery methods ensure you never miss a qualified lead opportunity.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {deliveryMethods.map((method, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mr-4">
                      <i className={`fa-solid ${method.icon} text-white text-xl`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{method.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{method.description}</p>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Ready to Experience <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Our Process?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our network of successful dental implant specialists and start receiving high-quality, qualified leads through our proven process.
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

export default ProcessExplanationPage;
