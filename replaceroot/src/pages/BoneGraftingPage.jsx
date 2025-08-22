import React from 'react';
import { Header, Footer } from '../components';
import Layout from '../components/Layout';

const BoneGraftingPage = () => {
  const procedureSteps = [
    {
      step: '01',
      title: 'Comprehensive Assessment',
      description: 'Advanced 3D imaging and bone density evaluation to determine the extent of bone loss and the optimal grafting approach for your specific case.',
      icon: 'fa-brain'
    },
    {
      step: '02',
      title: 'Treatment Planning',
      description: 'Detailed planning to determine the type of bone graft needed, graft material selection, and surgical approach for optimal results.',
      icon: 'fa-clipboard-list'
    },
    {
      step: '03',
      title: 'Bone Grafting Surgery',
      description: 'Surgical placement of bone graft material in areas of bone loss. Procedure typically takes 1-2 hours depending on complexity.',
      icon: 'fa-screwdriver'
    },
    {
      step: '04',
      title: 'Graft Protection',
      description: 'Placement of protective membrane and sutures to ensure optimal healing and graft integration with your natural bone.',
      icon: 'fa-shield-alt'
    },
    {
      step: '05',
      title: 'Healing Period',
      description: '4-9 months for bone graft to fully integrate and mature, creating a strong foundation for future implant placement.',
      icon: 'fa-heartbeat'
    },
    {
      step: '06',
      title: 'Implant Readiness',
      description: 'Once bone graft has fully integrated, you\'ll be ready for dental implant placement with optimal bone support.',
      icon: 'fa-tooth'
    }
  ];

  const keyFeatures = [
    {
      icon: 'fa-bone',
      title: 'Bone Regeneration',
      description: 'Stimulates natural bone growth and regeneration in areas where bone has been lost due to tooth extraction or disease.'
    },
    {
      icon: 'fa-shield-alt',
      title: 'Implant Foundation',
      description: 'Creates a strong, stable foundation for dental implants, ensuring long-term success and stability.'
    },
    {
      icon: 'fa-heart',
      title: 'Natural Integration',
      description: 'Graft material integrates with your natural bone, creating a seamless foundation for future dental work.'
    },
    {
      icon: 'fa-smile',
      title: 'Facial Support',
      description: 'Helps maintain facial structure and prevents the sunken appearance that can occur with bone loss.'
    },
    {
      icon: 'fa-star',
      title: 'Proven Results',
      description: 'Well-established procedure with high success rates for creating optimal bone support for implants.'
    },
    {
      icon: 'fa-clock',
      title: 'Long-term Investment',
      description: 'Investment in your oral health that provides lasting benefits for future dental implant success.'
    }
  ];

  const candidacyFactors = [
    {
      title: 'Ideal Candidates',
      items: [
        'Patients with insufficient bone for implants',
        'Those who have lost teeth recently',
        'Individuals with bone loss from gum disease',
        'Patients needing sinus lift procedures',
        'Those with facial bone loss concerns',
        'Individuals planning future implants',
        'Patients with extraction site bone loss',
        'Those wanting to preserve facial structure'
      ]
    },
    {
      title: 'May Not Be Suitable',
      items: [
        'Active gum disease',
        'Severe medical conditions',
        'Uncontrolled diabetes',
        'Heavy smokers',
        'Poor oral hygiene habits',
        'Unrealistic expectations',
        'Financial constraints',
        'Insufficient healing capacity'
      ]
    }
  ];

  const advantages = [
    {
      title: 'Bone Regeneration',
      description: 'Stimulates natural bone growth and regeneration in areas of bone loss, creating a strong foundation.',
      icon: 'fa-bone',
      color: 'text-blue-500'
    },
    {
      title: 'Implant Success',
      description: 'Significantly increases the success rate of future dental implants by providing optimal bone support.',
      icon: 'fa-tooth',
      color: 'text-green-500'
    },
    {
      title: 'Facial Preservation',
      description: 'Helps maintain facial structure and prevents the sunken appearance from bone loss.',
      icon: 'fa-smile',
      color: 'text-purple-500'
    },
    {
      title: 'Natural Integration',
      description: 'Graft material integrates seamlessly with your natural bone for lasting results.',
      icon: 'fa-heart',
      color: 'text-orange-500'
    },
    {
      title: 'Proven Technology',
      description: 'Well-established procedure with high success rates and predictable outcomes.',
      icon: 'fa-star',
      color: 'text-cyan-500'
    },
    {
      title: 'Long-term Benefits',
      description: 'Investment in your oral health that provides lasting benefits for future dental work.',
      icon: 'fa-clock',
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
        'Avoid touching the surgical site',
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
        'Floss daily around the graft site',
        'Use antibacterial mouthwash',
        'Schedule regular dental check-ups',
        'Avoid chewing on graft site',
        'Maintain good oral hygiene habits',
        'Consider professional cleaning every 3-6 months',
        'Monitor for any unusual symptoms'
      ]
    }
  ];

  const faqs = [
    {
      question: 'What is bone grafting and why is it needed?',
      answer: 'Bone grafting is a surgical procedure that adds bone or bone-like material to areas where bone has been lost. It\'s needed when there isn\'t enough bone to support dental implants, often due to tooth extraction, gum disease, or trauma.'
    },
    {
      question: 'How long does the bone grafting procedure take?',
      answer: 'The bone grafting procedure typically takes 1-2 hours, depending on the complexity and amount of bone loss. The complete healing process takes 4-9 months before you\'re ready for dental implants.'
    },
    {
      question: 'Is bone grafting painful?',
      answer: 'The procedure is performed under local anesthesia, so you shouldn\'t feel pain during surgery. Post-operative discomfort is typically managed with prescribed medications and usually subsides within a few days to a week.'
    },
    {
      question: 'What types of bone graft materials are used?',
      answer: 'Various materials can be used including your own bone (autograft), donor bone (allograft), animal bone (xenograft), or synthetic materials (alloplast). Your surgeon will recommend the best option for your specific case.'
    },
    {
      question: 'How long do I need to wait before getting implants?',
      answer: 'Most patients need to wait 4-9 months for the bone graft to fully integrate and mature before dental implant placement. Your surgeon will monitor the healing process and determine when you\'re ready.'
    },
    {
      question: 'How much does bone grafting cost?',
      answer: 'Bone grafting costs vary depending on the extent of bone loss, type of graft material used, and complexity of the procedure. It\'s an investment in your oral health that significantly improves implant success rates.'
    }
  ];

  return (
    <Layout
      title="Bone Grafting - Jawbone Augmentation for Implants | ReplaceRoot"
      description="Restore your jawbone structure with advanced bone grafting procedures. Our bone augmentation techniques create a strong foundation for successful dental implant placement and long-term stability."
      keywords={['bone grafting', 'jawbone augmentation', 'dental implants', 'implant dentistry', 'bone augmentation', 'jawbone restoration', 'implant preparation', 'bone loss treatment', 'ReplaceRoot']}
      canonical="/bone-grafting"
      og={{
        title: "Bone Grafting - Jawbone Augmentation for Implants | ReplaceRoot",
        description: "Restore your jawbone structure with advanced bone grafting procedures. Our bone augmentation techniques create a strong foundation for successful dental implant placement and long-term stability.",
        type: 'website',
        image: "https://replaceroot.com/assets/images/bone-grafting.jpg",
      }}
      twitter={{ card: 'summary_large_image' }}
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'MedicalProcedure',
        name: 'Bone Grafting',
        description: 'Restore your jawbone structure with advanced bone grafting procedures.',
        medicalSpecialty: 'Dentistry',
        url: typeof window !== 'undefined' ? window.location.href : undefined,
        image: "https://replaceroot.com/assets/images/bone-grafting.jpg",
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
              <i className="fa-solid fa-bone mr-2"></i>
              Foundation for Implants
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-gray-800">
              Bone <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Grafting Services</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              Advanced bone regeneration procedures that create a strong foundation for dental implants. Our bone grafting services restore lost bone structure and ensure optimal implant success rates.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 sm:py-18 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-14 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Advanced <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Bone Regeneration</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Our bone grafting services use advanced techniques and materials to regenerate lost bone structure, creating the optimal foundation for successful dental implants.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mb-6">
                    <i className={`fa-solid ${feature.icon} text-white text-lg sm:text-2xl`}></i>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
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
              The <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Treatment Process</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Our bone grafting process is designed to create optimal bone support for future dental implants, ensuring long-term success and stability.
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

      {/* Advantages Section */}
      <section className="py-16 sm:py-18 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-14 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Why Choose <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Bone Grafting?</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Bone grafting offers essential benefits for patients who need to restore bone structure before dental implant placement.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-cyan-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <i className={`fa-solid ${advantage.icon} ${advantage.color} text-lg sm:text-2xl mr-3`}></i>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800">{advantage.title}</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{advantage.description}</p>
                </div>
              ))}
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
              Bone grafting is essential for patients who need to restore bone structure before dental implant placement. Here's what we consider when evaluating your suitability.
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

      {/* Technology Section */}
      <section className="py-16 sm:py-18 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Advanced <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Grafting Technology</span>
                </h2>
                <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                  Our bone grafting procedures use advanced materials and techniques to ensure optimal bone regeneration and integration for future dental implant success.
                </p>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="fa-solid fa-bone text-white text-xs sm:text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1 text-sm sm:text-base">Advanced Materials</h4>
                      <p className="text-gray-600 text-sm sm:text-base">Use of proven graft materials including autograft, allograft, xenograft, and synthetic options for optimal results.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="fa-solid fa-shield-alt text-white text-xs sm:text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1 text-sm sm:text-base">Protective Membranes</h4>
                      <p className="text-gray-600 text-sm sm:text-base">Advanced barrier membranes protect the graft site and promote optimal healing and bone integration.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="fa-solid fa-user-md text-white text-xs sm:text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1 text-sm sm:text-base">Expert Care</h4>
                      <p className="text-gray-600 text-sm sm:text-base">Specialized surgeons with extensive experience in bone grafting procedures for predictable outcomes.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-cyan-200">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Why Bone Grafting?</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <i className="fa-solid fa-check-circle text-green-500 text-lg sm:text-xl"></i>
                    <span className="text-gray-700 text-sm sm:text-base">Bone regeneration</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <i className="fa-solid fa-check-circle text-green-500 text-lg sm:text-xl"></i>
                    <span className="text-gray-700 text-sm sm:text-base">Implant success foundation</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <i className="fa-solid fa-check-circle text-green-500 text-lg sm:text-xl"></i>
                    <span className="text-gray-700 text-sm sm:text-base">Facial structure preservation</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <i className="fa-solid fa-check-circle text-green-500 text-lg sm:text-xl"></i>
                    <span className="text-gray-700 text-sm sm:text-base">Natural bone integration</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <i className="fa-solid fa-check-circle text-green-500 text-lg sm:text-xl"></i>
                    <span className="text-gray-700 text-sm sm:text-base">Proven technology</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <i className="fa-solid fa-check-circle text-green-500 text-lg sm:text-xl"></i>
                    <span className="text-gray-700 text-sm sm:text-base">Long-term benefits</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aftercare Section */}
      <section className="py-16 sm:py-18 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-14 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Aftercare & <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Recovery</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Proper aftercare is essential for successful bone graft healing and integration. Follow these guidelines for optimal results.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {aftercareTips.map((period, index) => (
                <div key={index} className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-8">
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
      <section className="py-16 sm:py-18 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-14 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about bone grafting and what to expect during your treatment.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4 sm:space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-8">
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
              Ready for <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Strong Foundation?</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Find a qualified bone grafting specialist in your area who can help you build the foundation for successful dental implants.
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

export default BoneGraftingPage;
