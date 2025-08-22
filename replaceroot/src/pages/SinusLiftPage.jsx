import React from 'react';
import { Header, Footer } from '../components';
import Layout from '../components/Layout';

const SinusLiftPage = () => {
  const procedureSteps = [
    {
      step: '01',
      title: 'Comprehensive Evaluation',
      description: 'Advanced 3D imaging and sinus assessment to determine the optimal approach for your sinus lift. We evaluate your sinus anatomy and bone structure.',
      icon: 'fa-brain'
    },
    {
      step: '02',
      title: 'Treatment Planning',
      description: 'Detailed planning to determine the type of sinus lift needed, graft material selection, and surgical approach for optimal results.',
      icon: 'fa-clipboard-list'
    },
    {
      step: '03',
      title: 'Sinus Lift Surgery',
      description: 'Surgical elevation of the sinus membrane and placement of bone graft material. Procedure typically takes 1-2 hours depending on complexity.',
      icon: 'fa-screwdriver'
    },
    {
      step: '04',
      title: 'Graft Placement',
      description: 'Careful placement of bone graft material in the elevated sinus space to create optimal bone support for future implants.',
      icon: 'fa-bone'
    },
    {
      step: '05',
      title: 'Healing Period',
      description: '4-9 months for bone graft to fully integrate and mature in the sinus area, creating a strong foundation for upper jaw implants.',
      icon: 'fa-heartbeat'
    },
    {
      step: '06',
      title: 'Implant Readiness',
      description: 'Once the sinus lift has fully healed, you\'ll be ready for dental implant placement in the upper jaw with optimal bone support.',
      icon: 'fa-tooth'
    }
  ];

  const keyFeatures = [
    {
      icon: 'fa-arrow-up',
      title: 'Sinus Elevation',
      description: 'Safely elevates the sinus membrane to create space for bone graft material in the upper jaw.'
    },
    {
      icon: 'fa-bone',
      title: 'Bone Augmentation',
      description: 'Adds bone graft material to the sinus area to create sufficient bone height for upper jaw implants.'
    },
    {
      icon: 'fa-shield-alt',
      title: 'Upper Jaw Support',
      description: 'Creates a strong, stable foundation for dental implants in the upper jaw where bone is often insufficient.'
    },
    {
      icon: 'fa-heart',
      title: 'Natural Integration',
      description: 'Graft material integrates with your natural bone, creating a seamless foundation for future dental work.'
    },
    {
      icon: 'fa-star',
      title: 'Proven Results',
      description: 'Well-established procedure with high success rates for creating optimal bone support for upper jaw implants.'
    },
    {
      icon: 'fa-clock',
      title: 'Long-term Investment',
      description: 'Investment in your oral health that provides lasting benefits for successful upper jaw implant placement.'
    }
  ];

  const candidacyFactors = [
    {
      title: 'Ideal Candidates',
      items: [
        'Patients needing upper jaw implants',
        'Those with insufficient upper jaw bone',
        'Individuals with sinus proximity issues',
        'Patients with bone loss in upper jaw',
        'Those planning full arch restoration',
        'Individuals with failed upper jaw implants',
        'Patients with sinus-related concerns',
        'Those wanting to avoid zygomatic implants'
      ]
    },
    {
      title: 'May Not Be Suitable',
      items: [
        'Active sinus infections',
        'Severe sinus conditions',
        'Uncontrolled medical conditions',
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
      title: 'Upper Jaw Support',
      description: 'Creates sufficient bone height in the upper jaw for successful dental implant placement.',
      icon: 'fa-arrow-up',
      color: 'text-blue-500'
    },
    {
      title: 'Sinus Safety',
      description: 'Safely elevates the sinus membrane without damaging sinus function or causing complications.',
      icon: 'fa-shield-alt',
      color: 'text-green-500'
    },
    {
      title: 'Natural Integration',
      description: 'Graft material integrates seamlessly with your natural bone for lasting results.',
      icon: 'fa-heart',
      color: 'text-purple-500'
    },
    {
      title: 'Proven Technology',
      description: 'Well-established procedure with high success rates and predictable outcomes.',
      icon: 'fa-star',
      color: 'text-orange-500'
    },
    {
      title: 'Implant Success',
      description: 'Significantly increases the success rate of upper jaw dental implants.',
      icon: 'fa-tooth',
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
        'Avoid blowing nose or sneezing'
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
        'Avoid air travel if possible'
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
        'Monitor for any sinus-related symptoms'
      ]
    }
  ];

  const faqs = [
    {
      question: 'What is a sinus lift and why is it needed?',
      answer: 'A sinus lift is a surgical procedure that adds bone to the upper jaw in the area of the molars and premolars. It\'s needed when there isn\'t enough bone height in the upper jaw for dental implants, often due to sinus proximity or bone loss.'
    },
    {
      question: 'How long does the sinus lift procedure take?',
      answer: 'The sinus lift procedure typically takes 1-2 hours, depending on the complexity and amount of bone augmentation needed. The complete healing process takes 4-9 months before you\'re ready for dental implants.'
    },
    {
      question: 'Is a sinus lift painful?',
      answer: 'The procedure is performed under local anesthesia, so you shouldn\'t feel pain during surgery. Post-operative discomfort is typically managed with prescribed medications and usually subsides within a few days to a week.'
    },
    {
      question: 'What are the risks of sinus lift surgery?',
      answer: 'While generally safe, potential risks include sinus infection, graft failure, or sinus membrane perforation. These risks are minimized when performed by experienced specialists using proper techniques.'
    },
    {
      question: 'How long do I need to wait before getting implants?',
      answer: 'Most patients need to wait 4-9 months for the sinus lift to fully heal and the bone graft to integrate before dental implant placement. Your surgeon will monitor the healing process and determine when you\'re ready.'
    },
    {
      question: 'How much does a sinus lift cost?',
      answer: 'Sinus lift costs vary depending on the complexity of the procedure, type of graft material used, and whether it\'s combined with other procedures. It\'s an investment that significantly improves upper jaw implant success rates.'
    }
  ];

  return (
    <Layout
      title="Sinus Lift Surgery - Upper Jaw Bone Augmentation | ReplaceRoot"
      description="Advanced sinus lift surgery to increase bone height in the upper jaw for dental implant placement. Our specialized procedure creates adequate bone support for successful implant treatment."
      keywords={['sinus lift surgery', 'upper jaw augmentation', 'dental implants', 'implant dentistry', 'sinus augmentation', 'bone grafting', 'implant preparation', 'maxillary sinus', 'ReplaceRoot']}
      canonical="/sinus-lift"
      og={{
        title: "Sinus Lift Surgery - Upper Jaw Bone Augmentation | ReplaceRoot",
        description: "Advanced sinus lift surgery to increase bone height in the upper jaw for dental implant placement. Our specialized procedure creates adequate bone support for successful implant treatment.",
        type: 'website',
        image: "https://replaceroot.com/assets/images/sinus-lift.jpg",
      }}
      twitter={{ card: 'summary_large_image' }}
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'MedicalProcedure',
        name: 'Sinus Lift Surgery',
        description: 'Advanced sinus lift surgery to increase bone height in the upper jaw.',
        medicalSpecialty: 'Dentistry',
        url: typeof window !== 'undefined' ? window.location.href : undefined,
        image: "https://replaceroot.com/assets/images/sinus-lift.jpg",
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
              <i className="fa-solid fa-arrow-up mr-2"></i>
              Upper Jaw Solution
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-gray-800">
              Sinus <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Lift Surgery</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              Advanced sinus augmentation procedure that creates optimal bone support for upper jaw dental implants. Our sinus lift surgery safely elevates the sinus membrane and adds bone graft material for successful implant placement.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 sm:py-18 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-14 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Advanced <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Sinus Augmentation</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Our sinus lift procedures use advanced techniques to safely elevate the sinus membrane and create optimal bone support for successful upper jaw dental implants.
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
              Our sinus lift process is designed to create optimal bone support for upper jaw dental implants, ensuring long-term success and stability.
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
              Why Choose <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Sinus Lift?</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Sinus lift surgery offers essential benefits for patients who need to create bone support in the upper jaw for successful dental implant placement.
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
              Sinus lift surgery is essential for patients who need to create bone support in the upper jaw before dental implant placement. Here's what we consider when evaluating your suitability.
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
                  Advanced <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Sinus Technology</span>
                </h2>
                <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                  Our sinus lift procedures use advanced techniques and materials to safely elevate the sinus membrane and create optimal bone support for upper jaw dental implants.
                </p>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="fa-solid fa-arrow-up text-white text-xs sm:text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1 text-sm sm:text-base">Safe Sinus Elevation</h4>
                      <p className="text-gray-600 text-sm sm:text-base">Careful elevation of the sinus membrane without damaging sinus function or causing complications.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="fa-solid fa-bone text-white text-xs sm:text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1 text-sm sm:text-base">Bone Augmentation</h4>
                      <p className="text-gray-600 text-sm sm:text-base">Strategic placement of bone graft material to create sufficient bone height for upper jaw implants.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="fa-solid fa-user-md text-white text-xs sm:text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1 text-sm sm:text-base">Expert Care</h4>
                      <p className="text-gray-600 text-sm sm:text-base">Specialized surgeons with extensive experience in sinus lift procedures for predictable outcomes.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-cyan-200">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Why Sinus Lift?</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <i className="fa-solid fa-check-circle text-green-500 text-lg sm:text-xl"></i>
                    <span className="text-gray-700 text-sm sm:text-base">Upper jaw bone support</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <i className="fa-solid fa-check-circle text-green-500 text-lg sm:text-xl"></i>
                    <span className="text-gray-700 text-sm sm:text-base">Safe sinus elevation</span>
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
                    <span className="text-gray-700 text-sm sm:text-base">Implant success</span>
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
              Proper aftercare is essential for successful sinus lift healing and integration. Follow these guidelines for optimal results.
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
              Get answers to common questions about sinus lift surgery and what to expect during your treatment.
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
              Ready for <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Upper Jaw Solutions?</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Find a qualified sinus lift specialist in your area who can help you create the foundation for successful upper jaw dental implants.
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

export default SinusLiftPage;
