import React from 'react';
import { Header, Footer } from '../components';

const MiniImplantPage = () => {
  const procedureSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'Comprehensive examination to determine if you\'re a candidate for mini implants. We assess your bone density, oral health, and specific needs.',
      icon: 'fa-stethoscope'
    },
    {
      step: '02',
      title: 'Treatment Planning',
      description: 'Advanced digital planning to determine the optimal placement of mini implants, taking advantage of available bone structure for maximum stability.',
      icon: 'fa-clipboard-list'
    },
    {
      step: '03',
      title: 'Mini Implant Placement',
      description: 'Smaller diameter implants are placed using minimally invasive techniques, typically completed in 1-2 hours with minimal discomfort.',
      icon: 'fa-screwdriver'
    },
    {
      step: '04',
      title: 'Immediate Loading',
      description: 'In many cases, mini implants can be loaded immediately with a temporary restoration, allowing for same-day function.',
      icon: 'fa-clock'
    },
    {
      step: '05',
      title: 'Healing Period',
      description: '2-4 months for mini implants to fully integrate with your jawbone, often faster than traditional implants.',
      icon: 'fa-heartbeat'
    },
    {
      step: '06',
      title: 'Final Restoration',
      description: 'Your custom-designed permanent restoration is attached, completing your mini implant treatment with a natural-looking, functional result.',
      icon: 'fa-crown'
    }
  ];

  const advantages = [
    {
      icon: 'fa-ruler',
      title: 'Smaller Size',
      description: 'Mini implants have a smaller diameter (2-3mm vs 4-6mm for traditional implants), making them ideal for patients with limited bone.'
    },
    {
      icon: 'fa-bone',
      title: 'Less Bone Required',
      description: 'Require significantly less bone density and volume, making them suitable for patients who may not qualify for traditional implants.'
    },
    {
      icon: 'fa-clock',
      title: 'Faster Healing',
      description: 'Smaller size means faster healing and integration with your jawbone, often reducing recovery time by 30-50%.'
    },
    {
      icon: 'fa-dollar-sign',
      title: 'Cost-Effective',
      description: 'Generally more affordable than traditional implants while providing similar functional benefits for many patients.'
    },
    {
      icon: 'fa-shield-alt',
      title: 'Minimally Invasive',
      description: 'Less invasive procedure with smaller incisions, resulting in reduced discomfort and faster recovery.'
    },
    {
      icon: 'fa-smile',
      title: 'Immediate Function',
      description: 'Often can be loaded immediately, allowing you to enjoy restored function and appearance right away.'
    }
  ];

  const candidacyFactors = [
    {
      title: 'Ideal Candidates',
      items: [
        'Patients with limited bone density',
        'Those who don\'t qualify for traditional implants',
        'Patients seeking cost-effective solutions',
        'Individuals with smaller jawbone structure',
        'Those wanting faster recovery times',
        'Patients needing immediate function',
        'Individuals with health conditions affecting healing',
        'Those seeking minimally invasive options'
      ]
    },
    {
      title: 'May Not Be Suitable',
      items: [
        'Patients requiring heavy chewing function',
        'Those with severe bone loss',
        'Individuals with active gum disease',
        'Patients with uncontrolled medical conditions',
        'Heavy smokers',
        'Those with poor oral hygiene',
        'Patients needing long-span bridges',
        'Individuals with unrealistic expectations'
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
        'Avoid touching the surgical sites',
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
        'Floss daily around all implants',
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
      question: 'What makes mini implants different from traditional implants?',
      answer: 'Mini implants have a smaller diameter (2-3mm vs 4-6mm for traditional implants) and require significantly less bone density. They are less invasive, heal faster, and are often more cost-effective while providing similar functional benefits for many patients.'
    },
    {
      question: 'How long does the mini implant procedure take?',
      answer: 'The mini implant placement procedure typically takes 1-2 hours, depending on the number of implants needed. The complete process from consultation to final restoration usually spans 2-4 months, often faster than traditional implants.'
    },
    {
      question: 'Is the procedure painful?',
      answer: 'Mini implants are placed using minimally invasive techniques, resulting in less discomfort than traditional implants. The procedure is performed under local anesthesia, and most patients report minimal post-operative pain.'
    },
    {
      question: 'Can I eat normally with mini implants?',
      answer: 'Yes! Once fully healed, you can eat most foods normally. However, mini implants may not be suitable for extremely hard foods or heavy chewing forces. Your dentist will provide specific dietary guidelines based on your case.'
    },
    {
      question: 'What if I don\'t have enough bone for traditional implants?',
      answer: 'Mini implants are specifically designed for patients with limited bone density. They require significantly less bone volume and can often be placed in areas where traditional implants cannot. Your dentist will evaluate your bone structure to determine the best approach.'
    },
    {
      question: 'How much do mini implants cost?',
      answer: 'Mini implants are generally more affordable than traditional implants, typically costing 30-50% less. The exact cost varies depending on your location, the number of implants needed, and whether additional procedures are required. Most dental practices offer financing options.'
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
              <i className="fa-solid fa-ruler mr-2"></i>
              Smaller Size, Big Results
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-gray-800">
              Mini <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Dental Implants</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Revolutionary smaller-diameter implants designed for patients with limited bone density. Get the smile you deserve with minimally invasive, cost-effective mini implants that require less bone and heal faster.
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

      {/* Mini Implant Advantage Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              The <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Mini Implant Advantage</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mini dental implants offer a revolutionary approach to tooth replacement, specifically designed for patients with limited bone density who may not qualify for traditional implants.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mb-6">
                    <i className={`fa-solid ${advantage.icon} text-white text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{advantage.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
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
              The <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Procedure</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our mini implant procedure is designed for maximum efficiency and minimal invasiveness. Here's what you can expect throughout your treatment journey.
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

      {/* Comparison Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Mini vs <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Traditional Implants</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how mini implants compare to traditional implants and why they might be the better choice for patients with limited bone density.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-8 border border-cyan-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <i className="fa-solid fa-ruler text-cyan-600 mr-3"></i>
                  Mini Implants
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-check-circle text-green-500 mt-1"></i>
                    <span className="text-gray-700">Smaller diameter (2-3mm)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-check-circle text-green-500 mt-1"></i>
                    <span className="text-gray-700">Less bone required</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-check-circle text-green-500 mt-1"></i>
                    <span className="text-gray-700">Faster healing (2-4 months)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-check-circle text-green-500 mt-1"></i>
                    <span className="text-gray-700">More cost-effective</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-check-circle text-green-500 mt-1"></i>
                    <span className="text-gray-700">Minimally invasive</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-check-circle text-green-500 mt-1"></i>
                    <span className="text-gray-700">Often immediate loading</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-100 rounded-2xl p-8 border border-gray-300">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <i className="fa-solid fa-tooth text-gray-600 mr-3"></i>
                  Traditional Implants
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-times-circle text-red-500 mt-1"></i>
                    <span className="text-gray-700">Larger diameter (4-6mm)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-times-circle text-red-500 mt-1"></i>
                    <span className="text-gray-700">More bone required</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-times-circle text-red-500 mt-1"></i>
                    <span className="text-gray-700">Longer healing (3-6 months)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-times-circle text-red-500 mt-1"></i>
                    <span className="text-gray-700">Higher cost</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-times-circle text-red-500 mt-1"></i>
                    <span className="text-gray-700">More invasive procedure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-times-circle text-red-500 mt-1"></i>
                    <span className="text-gray-700">Delayed loading common</span>
                  </li>
                </ul>
              </div>
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
              Mini implants are specifically designed for patients who may not qualify for traditional implants. Here's what we consider when evaluating your suitability.
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

      {/* Aftercare Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Aftercare & <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Recovery</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proper aftercare is essential for successful healing and long-term mini implant success. Follow these guidelines for optimal results.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {aftercareTips.map((period, index) => (
                <div key={index} className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-8 border border-cyan-200">
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about mini dental implants and what to expect during your treatment.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
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
              Ready for <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Smaller Solutions?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Find a qualified implant specialist in your area who can help you achieve the smile you deserve with mini dental implants.
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

export default MiniImplantPage;
