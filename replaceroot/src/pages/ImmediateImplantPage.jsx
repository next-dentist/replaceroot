import React from 'react';
import { Header, Footer } from '../components';
import Layout from '../components/Layout';

const ImmediateImplantPage = () => {
  const procedureSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'Comprehensive examination to determine if you\'re a candidate for immediate implants. We assess your tooth condition, bone quality, and overall oral health.',
      icon: 'fa-stethoscope'
    },
    {
      step: '02',
      title: 'Tooth Extraction',
      description: 'Gentle removal of the damaged or decayed tooth using advanced techniques to preserve as much healthy bone as possible for optimal implant placement.',
      icon: 'fa-tooth'
    },
    {
      step: '03',
      title: 'Immediate Implant Placement',
      description: 'Titanium implant is placed directly into the extraction socket on the same day, eliminating the need for a separate surgery or waiting period.',
      icon: 'fa-screwdriver'
    },
    {
      step: '04',
      title: 'Temporary Crown',
      description: 'A temporary crown is attached immediately, allowing you to leave with a complete, functional smile the same day as your extraction.',
      icon: 'fa-crown'
    },
    {
      step: '05',
      title: 'Healing Period',
      description: '3-6 months for the implant to fully integrate with your jawbone while you wear your temporary restoration.',
      icon: 'fa-heartbeat'
    },
    {
      step: '06',
      title: 'Permanent Restoration',
      description: 'Your custom-designed permanent crown is attached, completing your immediate implant restoration with a natural-looking, fully functional tooth.',
      icon: 'fa-star'
    }
  ];

  const advantages = [
    {
      icon: 'fa-clock',
      title: 'Same-Day Results',
      description: 'Walk out with a complete smile immediately after your procedure - no waiting period or multiple appointments required.'
    },
    {
      icon: 'fa-calendar-check',
      title: 'Single Appointment',
      description: 'Complete your tooth extraction and implant placement in just one visit, saving you time and reducing overall treatment duration.'
    },
    {
      icon: 'fa-bone',
      title: 'Preserves Bone Structure',
      description: 'Immediate placement helps preserve your natural bone structure and prevents bone loss that typically occurs after tooth extraction.'
    },
    {
      icon: 'fa-smile',
      title: 'Immediate Function',
      description: 'Start eating, speaking, and smiling with confidence immediately after your procedure with your temporary restoration.'
    },
    {
      icon: 'fa-heart',
      title: 'Reduced Discomfort',
      description: 'Less overall discomfort compared to traditional two-stage procedures, with faster recovery and healing.'
    },
    {
      icon: 'fa-shield-alt',
      title: 'Natural Appearance',
      description: 'Maintains your natural gum line and facial structure, preventing the sunken appearance that can occur with delayed implants.'
    }
  ];

  const candidacyFactors = [
    {
      title: 'Ideal Candidates',
      items: [
        'Single tooth extraction needed',
        'Good overall oral health',
        'Sufficient bone density at extraction site',
        'Healthy gums and surrounding teeth',
        'Non-smokers (or willing to quit)',
        'Good oral hygiene habits',
        'No active infection at extraction site',
        'Realistic expectations'
      ]
    },
    {
      title: 'May Not Be Suitable',
      items: [
        'Active infection or abscess',
        'Insufficient bone density',
        'Complex extraction cases',
        'Heavy smokers',
        'Poor oral hygiene',
        'Medical conditions affecting healing',
        'Teeth grinding (bruxism)',
        'Severe bone loss'
      ]
    }
  ];

  const aftercareTips = [
    {
      title: 'First 24 Hours',
      tips: [
        'Apply ice packs to reduce swelling',
        'Take prescribed medications as directed',
        'Eat soft foods only',
        'Avoid touching the surgical site',
        'Get plenty of rest',
        'Keep head elevated while sleeping',
        'Use prescribed mouthwash'
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
        'Take all prescribed antibiotics'
      ]
    },
    {
      title: 'Long-term Care',
      tips: [
        'Brush twice daily with soft-bristled brush',
        'Floss daily around the implant',
        'Use antibacterial mouthwash',
        'Schedule regular dental check-ups',
        'Avoid chewing hard objects',
        'Maintain good oral hygiene habits',
        'Consider professional cleaning every 3-6 months'
      ]
    }
  ];

  const faqs = [
    {
      question: 'What makes immediate implants different from traditional implants?',
      answer: 'Immediate implants are placed on the same day as tooth extraction, eliminating the waiting period between extraction and implant placement. Traditional implants require the extraction site to heal for 3-6 months before implant placement.'
    },
    {
      question: 'How long does the immediate implant procedure take?',
      answer: 'The complete procedure typically takes 1-2 hours, including tooth extraction, implant placement, and temporary crown attachment. You\'ll leave with a complete, functional smile the same day.'
    },
    {
      question: 'Is the procedure more painful than traditional implants?',
      answer: 'No, the procedure is performed under local anesthesia, so you shouldn\'t feel pain during surgery. In fact, many patients report less overall discomfort since there\'s only one surgical procedure instead of two.'
    },
    {
      question: 'Can I eat normally with an immediate implant?',
      answer: 'You\'ll need to eat soft foods for the first few days, but you can gradually return to your normal diet. Once fully healed, you can eat all your favorite foods without restrictions, just like with natural teeth.'
    },
    {
      question: 'What if I\'m not a candidate for immediate implants?',
      answer: 'If you\'re not a candidate for immediate implants, traditional delayed implants are still an excellent option. Your dentist will evaluate your specific case and recommend the best approach for your situation.'
    },
    {
      question: 'How much do immediate implants cost?',
      answer: 'Immediate implants typically cost similar to traditional implants, but you save on additional appointments and procedures. The cost varies depending on your location, the complexity of your case, and whether additional procedures are needed. Most dental practices offer financing options.'
    }
  ];

  return (
    <Layout
      title="Immediate Implants - Same Day Tooth Replacement | ReplaceRoot"
      description="Get your tooth replaced the same day as extraction with immediate implants. Our advanced same-day implant procedure provides instant tooth replacement with natural-looking results and minimal downtime."
      keywords={['immediate implants', 'same day implants', 'tooth replacement', 'dental implants', 'implant dentistry', 'same day tooth replacement', 'immediate loading', 'implant treatment', 'ReplaceRoot']}
      canonical="/immediate-implants"
      og={{
        title: "Immediate Implants - Same Day Tooth Replacement | ReplaceRoot",
        description: "Get your tooth replaced the same day as extraction with immediate implants. Our advanced same-day implant procedure provides instant tooth replacement with natural-looking results and minimal downtime.",
        type: 'website',
        image: "https://replaceroot.com/assets/images/immediate-implants.jpg",
      }}
      twitter={{ card: 'summary_large_image' }}
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'MedicalProcedure',
        name: 'Immediate Implants',
        description: 'Get your tooth replaced the same day as extraction with immediate implants.',
        medicalSpecialty: 'Dentistry',
        url: typeof window !== 'undefined' ? window.location.href : undefined,
        image: "https://replaceroot.com/assets/images/immediate-implants.jpg",
      }}
    >
    <div className="bg-gray-50 min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-24 md:pt-28 lg:pt-32 pb-16 sm:pb-18 md:pb-20 bg-gradient-to-br from-white to-cyan-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-br from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-tl from-teal-200/10 to-cyan-200/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-700 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <i className="fa-solid fa-clock mr-2"></i>
              Same Day Treatment
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-gray-800">
              Immediate <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Dental Implants</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              Revolutionary same-day treatment that combines tooth extraction and implant placement in a single appointment. Walk out with a complete, functional smile immediately - no waiting period required.
            </p>
          </div>
        </div>
      </section>

      {/* Same Day Advantage Section */}
      <section className="py-16 sm:py-18 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-14 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              The <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Same-Day Advantage</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Immediate dental implants offer a revolutionary approach to tooth replacement, combining extraction and implant placement in a single appointment for maximum convenience and results.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mb-6">
                    <i className={`fa-solid ${advantage.icon} text-white text-lg sm:text-2xl`}></i>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">{advantage.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Procedure Steps */}
      <section id="procedure" className="py-16 sm:py-18 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-14 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              The <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Procedure</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Our immediate implant procedure is designed for maximum efficiency and same-day results. Here's what you can expect throughout your treatment journey.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {procedureSteps.map((step, index) => (
                <div key={index} className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center">
                      <i className={`fa-solid ${step.icon} text-white text-lg sm:text-xl`}></i>
                    </div>
                    <span className="text-3xl sm:text-4xl font-black text-gray-200">{step.step}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">{step.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 sm:py-18 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-14 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Immediate vs <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Traditional Implants</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              See how immediate implants compare to traditional delayed implants and why they might be the better choice for you.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-cyan-200">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <i className="fa-solid fa-clock text-cyan-600 mr-3"></i>
                  Immediate Implants
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <i className="fa-solid fa-check-circle text-green-500 mt-1"></i>
                    <span className="text-gray-700 text-sm sm:text-base">Single appointment procedure</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <i className="fa-solid fa-check-circle text-green-500 mt-1"></i>
                    <span className="text-gray-700 text-sm sm:text-base">Same-day results</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <i className="fa-solid fa-check-circle text-green-500 mt-1"></i>
                    <span className="text-gray-700 text-sm sm:text-base">Preserves bone structure</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <i className="fa-solid fa-check-circle text-green-500 mt-1"></i>
                    <span className="text-gray-700 text-sm sm:text-base">Immediate function</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <i className="fa-solid fa-check-circle text-green-500 mt-1"></i>
                    <span className="text-gray-700 text-sm sm:text-base">Faster overall treatment</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <i className="fa-solid fa-check-circle text-green-500 mt-1"></i>
                    <span className="text-gray-700 text-sm sm:text-base">Reduced discomfort</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-300">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <i className="fa-solid fa-calendar text-gray-600 mr-3"></i>
                  Traditional Implants
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <i className="fa-solid fa-times-circle text-red-500 mt-1"></i>
                    <span className="text-gray-700 text-sm sm:text-base">Multiple appointments required</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <i className="fa-solid fa-times-circle text-red-500 mt-1"></i>
                    <span className="text-gray-700 text-sm sm:text-base">3-6 month waiting period</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <i className="fa-solid fa-times-circle text-red-500 mt-1"></i>
                    <span className="text-gray-700 text-sm sm:text-base">Potential bone loss</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <i className="fa-solid fa-times-circle text-red-500 mt-1"></i>
                    <span className="text-gray-700 text-sm sm:text-base">Extended treatment time</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <i className="fa-solid fa-times-circle text-red-500 mt-1"></i>
                    <span className="text-gray-700 text-sm sm:text-base">Multiple surgical procedures</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <i className="fa-solid fa-times-circle text-red-500 mt-1"></i>
                    <span className="text-gray-700 text-sm sm:text-base">More overall discomfort</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Candidacy Section */}
      <section className="py-16 sm:py-18 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-14 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Are You a <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Candidate?</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Not everyone is a candidate for immediate implants. Here's what we consider when evaluating your suitability for this revolutionary procedure.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {candidacyFactors.map((factor, index) => (
                <div key={index} className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">{factor.title}</h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {factor.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 sm:gap-3">
                        <i className={`fa-solid ${index === 0 ? 'fa-check-circle text-green-500' : 'fa-times-circle text-red-500'} mt-1`}></i>
                        <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Aftercare Section */}
      <section className="py-16 sm:py-18 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-14 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Aftercare & <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Recovery</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Proper aftercare is essential for successful healing and long-term implant success. Follow these guidelines for optimal results with immediate implants.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {aftercareTips.map((period, index) => (
                <div key={index} className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-cyan-200">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-6">{period.title}</h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {period.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start gap-2 sm:gap-3">
                        <i className="fa-solid fa-circle text-cyan-500 text-xs mt-2 flex-shrink-0"></i>
                        <span className="text-gray-700 text-xs sm:text-sm">{tip}</span>
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
      <section className="py-16 sm:py-18 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-14 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about immediate dental implants and what to expect during your treatment.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4 sm:space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-8">
                  <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-4">{faq.question}</h4>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="find-specialist" className="py-16 sm:py-18 md:py-20 bg-gradient-to-br from-cyan-50 to-teal-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Ready for <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Same-Day Results?</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Find a qualified implant specialist in your area who can help you achieve the smile you deserve with immediate dental implants.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a 
                href="/for-patients"
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 shadow-lg"
              >
                Find a Specialist
              </a>
              <a 
                href="/contact"
                className="bg-white border-2 border-cyan-500 text-cyan-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-cyan-50 transition-all duration-300"
              >
                Get Consultation
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

export default ImmediateImplantPage;
