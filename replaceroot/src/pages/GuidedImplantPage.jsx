import React from 'react';
import { Header, Footer } from '../components';

const GuidedImplantPage = () => {
  const procedureSteps = [
    {
      step: '01',
      title: '3D Digital Scanning',
      description: 'Advanced CBCT scanning and digital impressions to create a complete 3D model of your jawbone, teeth, and surrounding structures.',
      icon: 'fa-brain'
    },
    {
      step: '02',
      title: 'Virtual Treatment Planning',
      description: 'Sophisticated 3D software creates a virtual surgical plan, determining optimal implant placement, angle, and depth for maximum success.',
      icon: 'fa-clipboard-list'
    },
    {
      step: '03',
      title: 'Custom Surgical Guide',
      description: '3D-printed surgical guide is fabricated based on your virtual treatment plan, ensuring precise implant placement during surgery.',
      icon: 'fa-print'
    },
    {
      step: '04',
      title: 'Guided Implant Surgery',
      description: 'Surgical guide ensures implants are placed exactly as planned, with minimal invasiveness and maximum precision. Procedure takes 1-2 hours.',
      icon: 'fa-screwdriver'
    },
    {
      step: '05',
      title: 'Immediate Verification',
      description: 'Post-surgery 3D imaging confirms implants are placed exactly as planned, ensuring optimal positioning and success.',
      icon: 'fa-check-circle'
    },
    {
      step: '06',
      title: 'Final Restoration',
      description: 'Custom restoration is fabricated and attached to your precisely placed implants, completing your digital implant treatment.',
      icon: 'fa-crown'
    }
  ];

  const keyFeatures = [
    {
      icon: 'fa-microchip',
      title: '3D Digital Planning',
      description: 'Advanced computer software creates a virtual surgical plan with millimeter precision for optimal implant placement.'
    },
    {
      icon: 'fa-print',
      title: 'Custom Surgical Guide',
      description: '3D-printed surgical guide ensures implants are placed exactly as planned, eliminating guesswork and improving accuracy.'
    },
    {
      icon: 'fa-bullseye',
      title: 'Precision Placement',
      description: 'Implants are placed with sub-millimeter accuracy, ensuring optimal positioning for long-term success and function.'
    },
    {
      icon: 'fa-shield-alt',
      title: 'Minimally Invasive',
      description: 'Smaller incisions and less tissue disruption compared to traditional implant surgery, leading to faster healing.'
    },
    {
      icon: 'fa-clock',
      title: 'Faster Recovery',
      description: 'Reduced surgical trauma and precise placement result in quicker healing and less post-operative discomfort.'
    },
    {
      icon: 'fa-star',
      title: 'Predictable Results',
      description: 'Computer-guided planning and execution ensure predictable, consistent results with high success rates.'
    }
  ];

  const candidacyFactors = [
    {
      title: 'Ideal Candidates',
      items: [
        'Patients needing single or multiple implants',
        'Those with complex bone anatomy',
        'Individuals wanting maximum precision',
        'Patients with limited bone structure',
        'Those seeking minimally invasive surgery',
        'Individuals wanting predictable results',
        'Patients with aesthetic concerns',
        'Those planning complex restorations'
      ]
    },
    {
      title: 'May Not Be Suitable',
      items: [
        'Insufficient bone for any implant placement',
        'Active gum disease',
        'Severe medical conditions',
        'Uncontrolled diabetes',
        'Heavy smokers',
        'Poor oral hygiene habits',
        'Unrealistic expectations',
        'Financial constraints'
      ]
    }
  ];

  const advantages = [
    {
      title: '3D Precision',
      description: 'Computer-guided planning ensures implants are placed with sub-millimeter accuracy for optimal results.',
      icon: 'fa-bullseye',
      color: 'text-blue-500'
    },
    {
      title: 'Minimally Invasive',
      description: 'Smaller incisions and less tissue disruption compared to traditional implant surgery.',
      icon: 'fa-shield-alt',
      color: 'text-green-500'
    },
    {
      title: 'Faster Recovery',
      description: 'Reduced surgical trauma and precise placement result in quicker healing and less discomfort.',
      icon: 'fa-clock',
      color: 'text-purple-500'
    },
    {
      title: 'Predictable Results',
      description: 'Computer-guided planning and execution ensure consistent, predictable outcomes.',
      icon: 'fa-star',
      color: 'text-orange-500'
    },
    {
      title: 'Custom Planning',
      description: 'Each treatment plan is customized to your specific anatomy and needs.',
      icon: 'fa-cog',
      color: 'text-cyan-500'
    },
    {
      title: 'Advanced Technology',
      description: 'Uses cutting-edge 3D imaging and computer-guided technology for superior results.',
      icon: 'fa-microchip',
      color: 'text-pink-500'
    }
  ];

  const aftercareTips = [
    {
      title: 'First 24 Hours',
      tips: [
        'Apply ice packs to reduce swelling',
        'Take prescribed medications as directed',
        'Eat soft foods only',
        'Avoid touching surgical sites',
        'Get plenty of rest',
        'Keep head elevated while sleeping',
        'Use prescribed mouthwash',
        'Avoid strenuous activities'
      ]
    },
    {
      title: 'First Week',
      tips: [
        'Continue with soft diet',
        'Gently rinse with salt water',
        'Avoid strenuous activities',
        'Keep head elevated while sleeping',
        'Attend follow-up appointments',
        'Avoid smoking and alcohol',
        'Take all prescribed antibiotics',
        'Maintain good oral hygiene'
      ]
    },
    {
      title: 'Long-term Care',
      tips: [
        'Brush twice daily with soft-bristled brush',
        'Floss daily around all implants',
        'Use antibacterial mouthwash',
        'Schedule regular dental check-ups',
        'Avoid chewing hard objects',
        'Maintain good oral hygiene habits',
        'Consider professional cleaning every 3-6 months',
        'Monitor for any unusual symptoms'
      ]
    }
  ];

  const faqs = [
    {
      question: 'What is guided implant surgery?',
      answer: 'Guided implant surgery uses advanced 3D imaging and computer software to create a virtual treatment plan, then uses a custom surgical guide to place implants with precise accuracy. This eliminates guesswork and ensures optimal implant positioning.'
    },
    {
      question: 'How does guided surgery improve accuracy?',
      answer: 'The 3D planning software analyzes your jawbone structure and creates a virtual surgical plan. A custom 3D-printed surgical guide then ensures implants are placed exactly as planned, with sub-millimeter precision that\'s impossible with traditional methods.'
    },
    {
      question: 'Is guided implant surgery more expensive?',
      answer: 'Guided implant surgery may have a higher initial cost due to the advanced technology involved. However, the improved accuracy, faster recovery, and predictable results often make it a worthwhile investment for many patients.'
    },
    {
      question: 'How long does the guided implant procedure take?',
      answer: 'The actual guided implant placement typically takes 1-2 hours, depending on the number of implants. The complete process from 3D scanning to final restoration usually spans 3-6 months, with faster healing due to the minimally invasive approach.'
    },
    {
      question: 'Is guided surgery suitable for all implant cases?',
      answer: 'Guided implant surgery is suitable for most implant cases, from single tooth replacement to full arch restoration. It\'s particularly beneficial for complex cases or when maximum precision is desired.'
    },
    {
      question: 'What technology is used in guided implant surgery?',
      answer: 'The process uses CBCT 3D imaging, advanced computer software for virtual treatment planning, and 3D printing technology to create custom surgical guides. This combination ensures the highest level of precision and predictability.'
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
              <i className="fa-solid fa-microchip mr-2"></i>
              Digital Precision Technology
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-gray-800">
              Guided <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Implant Surgery</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Revolutionary 3D digital planning and computer-guided implant placement for maximum precision and predictable results. Our guided implant surgery ensures sub-millimeter accuracy for optimal long-term success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#find-specialist"
                className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg transform hover:-translate-y-1"
              >
                Find a Specialist
              </a>
              <a 
                href="#procedure"
                className="bg-white border-2 border-cyan-500 text-cyan-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-cyan-50 transition-all duration-300"
              >
                Learn About Procedure
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Advanced <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Digital Technology</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our guided implant surgery combines cutting-edge 3D imaging, computer planning, and custom surgical guides to deliver unprecedented precision and predictable results.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mb-6">
                    <i className={`fa-solid ${feature.icon} text-white text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Procedure Steps */}
      <section id="procedure" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              The <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Digital Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our guided implant process uses advanced digital technology to ensure precise, predictable results with minimal invasiveness and maximum accuracy.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {procedureSteps.map((step, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center">
                      <i className={`fa-solid ${step.icon} text-white text-xl`}></i>
                    </div>
                    <span className="text-4xl font-black text-gray-200">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Why Choose <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Guided Surgery?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guided implant surgery offers superior precision and predictability compared to traditional implant placement methods.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advantages.map((advantage, index) => (
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

      {/* Candidacy Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Are You a <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Candidate?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guided implant surgery is suitable for most implant cases and offers particular benefits for complex situations. Here's what we consider when evaluating your suitability.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {candidacyFactors.map((factor, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">{factor.title}</h3>
                  <ul className="space-y-3">
                    {factor.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <i className={`fa-solid ${index === 0 ? 'fa-check-circle text-green-500' : 'fa-times-circle text-red-500'} mt-1`}></i>
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

      {/* Technology Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Cutting-Edge <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Digital Technology</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our guided implant surgery uses the latest digital technology to ensure precise, predictable results with minimal invasiveness and maximum accuracy.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="fa-solid fa-microchip text-white text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">3D Digital Planning</h4>
                      <p className="text-gray-600">Advanced computer software creates a virtual surgical plan with millimeter precision for optimal implant placement.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="fa-solid fa-print text-white text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Custom Surgical Guide</h4>
                      <p className="text-gray-600">3D-printed surgical guide ensures implants are placed exactly as planned, eliminating guesswork.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="fa-solid fa-user-md text-white text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Expert Care</h4>
                      <p className="text-gray-600">Specialized surgeons with extensive experience in guided implant procedures for predictable outcomes.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-8 border border-cyan-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Why Guided Surgery?</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <i className="fa-solid fa-check-circle text-green-500 text-xl"></i>
                    <span className="text-gray-700">3D precision planning</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="fa-solid fa-check-circle text-green-500 text-xl"></i>
                    <span className="text-gray-700">Minimally invasive</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="fa-solid fa-check-circle text-green-500 text-xl"></i>
                    <span className="text-gray-700">Faster recovery</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="fa-solid fa-check-circle text-green-500 text-xl"></i>
                    <span className="text-gray-700">Predictable results</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="fa-solid fa-check-circle text-green-500 text-xl"></i>
                    <span className="text-gray-700">Custom planning</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="fa-solid fa-check-circle text-green-500 text-xl"></i>
                    <span className="text-gray-700">Advanced technology</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aftercare Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Aftercare & <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Recovery</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The minimally invasive nature of guided implant surgery typically results in faster recovery and less post-operative discomfort.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {aftercareTips.map((period, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">{period.title}</h3>
                  <ul className="space-y-3">
                    {period.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start gap-3">
                        <i className="fa-solid fa-circle text-cyan-500 text-xs mt-2 flex-shrink-0"></i>
                        <span className="text-gray-700 text-sm">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about guided implant surgery and what to expect during your digital treatment.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl shadow-lg border border-gray-200 p-8">
                  <h4 className="text-lg font-bold text-gray-800 mb-4">{faq.question}</h4>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="find-specialist" className="py-20 bg-gradient-to-br from-cyan-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Ready for <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Digital Precision?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Find a qualified guided implant specialist in your area who can help you achieve the most precise and predictable implant results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/for-patients"
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 shadow-lg"
              >
                Find a Specialist
              </a>
              <a 
                href="/contact"
                className="bg-white border-2 border-cyan-500 text-cyan-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-cyan-50 transition-all duration-300"
              >
                Get Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GuidedImplantPage;
