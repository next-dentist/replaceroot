import React from 'react';
import { Header, Footer } from '../components';

const ZygomaticImplantPage = () => {
  const procedureSteps = [
    {
      step: '01',
      title: 'Comprehensive Evaluation',
      description: 'Advanced 3D imaging and bone assessment to determine if you\'re a candidate for zygomatic implants. We evaluate your zygomatic bone structure and overall oral health.',
      icon: 'fa-brain'
    },
    {
      step: '02',
      title: 'Advanced Treatment Planning',
      description: 'Sophisticated digital planning using CBCT scans to map the optimal trajectory for zygomatic implants, ensuring precise placement in the zygomatic bone.',
      icon: 'fa-clipboard-list'
    },
    {
      step: '03',
      title: 'Zygomatic Implant Placement',
      description: 'Specialized implants are placed through the maxillary sinus into the zygomatic bone, bypassing areas of severe bone loss. Procedure takes 3-4 hours.',
      icon: 'fa-screwdriver'
    },
    {
      step: '04',
      title: 'Immediate Loading',
      description: 'Temporary restoration attached immediately, allowing you to leave with a functional smile the same day, even with severe bone loss.',
      icon: 'fa-clock'
    },
    {
      step: '05',
      title: 'Healing & Integration',
      description: '4-6 months for zygomatic implants to fully integrate with the zygomatic bone, providing stable foundation for permanent restoration.',
      icon: 'fa-heartbeat'
    },
    {
      step: '06',
      title: 'Final Restoration',
      description: 'Custom-designed permanent restoration attached to your zygomatic implants, completing your advanced implant treatment.',
      icon: 'fa-crown'
    }
  ];

  const keyFeatures = [
    {
      icon: 'fa-skull',
      title: 'Zygomatic Bone Placement',
      description: 'Implants are anchored in the zygomatic (cheek) bone, which remains strong even when jawbone has severe atrophy.'
    },
    {
      icon: 'fa-shield-alt',
      title: 'Bypasses Bone Loss',
      description: 'Completely avoids areas of severe bone loss by using the zygomatic bone as the foundation for implant support.'
    },
    {
      icon: 'fa-rocket',
      title: 'Advanced Technology',
      description: 'Uses cutting-edge 3D imaging and computer-guided surgery for precise placement in complex anatomical areas.'
    },
    {
      icon: 'fa-clock',
      title: 'Immediate Function',
      description: 'Often allows for immediate loading, providing same-day function even in cases of extreme bone loss.'
    },
    {
      icon: 'fa-heart',
      title: 'Life-Changing Results',
      description: 'Restores full chewing function and confidence for patients who were previously told they couldn\'t have implants.'
    },
    {
      icon: 'fa-star',
      title: 'Long-term Stability',
      description: 'Zygomatic bone provides exceptional stability and support for long-term implant success and function.'
    }
  ];

  const candidacyFactors = [
    {
      title: 'Ideal Candidates',
      items: [
        'Severe maxillary bone loss',
        'Failed traditional implant attempts',
        'Patients with maxillary atrophy',
        'Those needing full arch restoration',
        'Individuals with sinus issues',
        'Patients seeking immediate function',
        'Those with complex bone loss patterns',
        'Individuals wanting to avoid bone grafting'
      ]
    },
    {
      title: 'May Not Be Suitable',
      items: [
        'Insufficient zygomatic bone',
        'Active sinus infections',
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
      title: 'No Bone Grafting Required',
      description: 'Eliminates the need for extensive bone grafting procedures, reducing treatment time and complexity.',
      icon: 'fa-times-circle',
      color: 'text-green-500'
    },
    {
      title: 'Immediate Loading Possible',
      description: 'Often allows for same-day restoration, providing immediate function and confidence.',
      icon: 'fa-clock',
      color: 'text-blue-500'
    },
    {
      title: 'Bypasses Severe Bone Loss',
      description: 'Uses the strong zygomatic bone, avoiding areas of severe maxillary bone atrophy.',
      icon: 'fa-route',
      color: 'text-purple-500'
    },
    {
      title: 'Long-term Stability',
      description: 'Zygomatic bone provides exceptional stability and support for decades of function.',
      icon: 'fa-anchor',
      color: 'text-orange-500'
    },
    {
      title: 'Advanced Technology',
      description: 'Uses cutting-edge 3D imaging and computer-guided surgery for precision.',
      icon: 'fa-microchip',
      color: 'text-cyan-500'
    },
    {
      title: 'Life-Changing Results',
      description: 'Restores full function for patients who were previously told they couldn\'t have implants.',
      icon: 'fa-smile',
      color: 'text-pink-500'
    }
  ];

  const aftercareTips = [
    {
      title: 'Immediate Post-Surgery (First 48 hours)',
      tips: [
        'Apply ice packs to reduce swelling',
        'Take prescribed medications as directed',
        'Eat soft foods only',
        'Avoid touching surgical sites',
        'Get plenty of rest',
        'Keep head elevated while sleeping',
        'Use prescribed mouthwash',
        'Avoid blowing nose or sneezing forcefully'
      ]
    },
    {
      title: 'First Two Weeks',
      tips: [
        'Continue with soft diet',
        'Gently rinse with salt water',
        'Avoid strenuous activities',
        'Keep head elevated while sleeping',
        'Attend follow-up appointments',
        'Avoid smoking and alcohol',
        'Take all prescribed antibiotics',
        'Avoid air travel if possible'
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
        'Monitor for any sinus-related symptoms'
      ]
    }
  ];

  const faqs = [
    {
      question: 'What makes zygomatic implants different from traditional implants?',
      answer: 'Zygomatic implants are placed in the zygomatic (cheek) bone instead of the jawbone. This allows them to bypass areas of severe bone loss and provide stable support even when traditional implants are not possible due to maxillary atrophy.'
    },
    {
      question: 'How long does the zygomatic implant procedure take?',
      answer: 'The zygomatic implant placement procedure typically takes 3-4 hours, depending on the number of implants needed. The complete process from consultation to final restoration usually spans 4-6 months, with immediate loading often possible.'
    },
    {
      question: 'Is the procedure more complex than traditional implants?',
      answer: 'Yes, zygomatic implants are more complex and require specialized training and experience. The procedure involves precise placement through the maxillary sinus into the zygomatic bone, requiring advanced 3D imaging and computer-guided surgery.'
    },
    {
      question: 'Can I eat normally with zygomatic implants?',
      answer: 'Yes! Once fully healed, you can eat all your favorite foods normally. Zygomatic implants provide excellent stability and function, allowing you to enjoy a normal diet without restrictions.'
    },
    {
      question: 'What if I\'m not a candidate for zygomatic implants?',
      answer: 'If you\'re not a candidate for zygomatic implants, other options may include extensive bone grafting followed by traditional implants, or alternative treatments like implant-supported dentures. Your specialist will evaluate all options.'
    },
    {
      question: 'How much do zygomatic implants cost?',
      answer: 'Zygomatic implants are more expensive than traditional implants due to their complexity and specialized nature. However, they often eliminate the need for expensive bone grafting procedures. The cost varies based on your location and case complexity.'
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
              <i className="fa-solid fa-skull mr-2"></i>
              Advanced Bone Loss Solution
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-gray-800">
              Zygomatic <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Dental Implants</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Revolutionary advanced implant solution for patients with severe bone loss. Zygomatic implants bypass atrophied jawbone by anchoring in the strong zygomatic bone, providing life-changing results when traditional implants are not possible.
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
              Revolutionary <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Zygomatic Technology</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Zygomatic implants represent the cutting edge of implant dentistry, offering hope to patients with severe bone loss who were previously told they couldn't have implants.
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
              The <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Advanced Procedure</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our zygomatic implant procedure uses cutting-edge technology and specialized techniques to provide life-changing results for patients with severe bone loss.
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
              Why Choose <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Zygomatic Implants?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Zygomatic implants offer unique advantages that make them the ideal solution for patients with severe bone loss who want to avoid extensive bone grafting.
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
              Zygomatic implants are specifically designed for patients with severe bone loss who need advanced solutions. Here's what we consider when evaluating your suitability.
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
                  Advanced <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Technology</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Zygomatic implants require the most advanced technology and expertise in implant dentistry. Our specialists use cutting-edge 3D imaging and computer-guided surgery to ensure precise placement.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="fa-solid fa-brain text-white text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">3D CBCT Imaging</h4>
                      <p className="text-gray-600">Advanced cone beam computed tomography provides detailed 3D images of your facial anatomy for precise planning.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="fa-solid fa-microchip text-white text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Computer-Guided Surgery</h4>
                      <p className="text-gray-600">Sophisticated software creates a virtual surgical plan for optimal implant placement in the zygomatic bone.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="fa-solid fa-user-md text-white text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Specialized Expertise</h4>
                      <p className="text-gray-600">Only highly trained specialists with extensive experience in zygomatic implants perform these procedures.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-8 border border-cyan-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Why Zygomatic Implants?</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <i className="fa-solid fa-check-circle text-green-500 text-xl"></i>
                    <span className="text-gray-700">Bypasses severe bone loss</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="fa-solid fa-check-circle text-green-500 text-xl"></i>
                    <span className="text-gray-700">No bone grafting required</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="fa-solid fa-check-circle text-green-500 text-xl"></i>
                    <span className="text-gray-700">Immediate loading possible</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="fa-solid fa-check-circle text-green-500 text-xl"></i>
                    <span className="text-gray-700">Long-term stability</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="fa-solid fa-check-circle text-green-500 text-xl"></i>
                    <span className="text-gray-700">Life-changing results</span>
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
              Proper aftercare is essential for successful healing and long-term zygomatic implant success. Follow these specialized guidelines for optimal results.
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
              Get answers to common questions about zygomatic dental implants and what to expect during your advanced treatment.
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
              Ready for <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Advanced Solutions?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Find a qualified zygomatic implant specialist in your area who can help you achieve the smile you deserve, even with severe bone loss.
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

export default ZygomaticImplantPage;
