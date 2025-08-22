import React from 'react';
import { Header, Footer } from '../components';
import Layout from '../components/Layout';

const BasalImplantPage = () => {
  const procedureSteps = [
    {
      step: '01',
      title: 'Comprehensive Assessment',
      description: 'Advanced bone density evaluation and 3D imaging to determine if you\'re a candidate for basal implants. We assess your cortical bone structure and overall oral health.',
      icon: 'fa-brain'
    },
    {
      step: '02',
      title: 'Strategic Treatment Planning',
      description: 'Sophisticated digital planning to map the optimal placement of basal implants in the cortical bone, ensuring maximum stability and support.',
      icon: 'fa-clipboard-list'
    },
    {
      step: '03',
      title: 'Basal Implant Placement',
      description: 'Specialized cortical implants are placed in the dense cortical bone layer, providing immediate stability. Procedure takes 2-3 hours.',
      icon: 'fa-screwdriver'
    },
    {
      step: '04',
      title: 'Immediate Loading',
      description: 'Temporary restoration attached immediately, allowing you to leave with a functional smile the same day, even with weak jawbone.',
      icon: 'fa-clock'
    },
    {
      step: '05',
      title: 'Cortical Integration',
      description: '2-4 months for basal implants to fully integrate with the cortical bone, providing exceptional stability and support.',
      icon: 'fa-heartbeat'
    },
    {
      step: '06',
      title: 'Final Restoration',
      description: 'Your custom-designed permanent restoration is attached, completing your basal implant treatment with superior stability.',
      icon: 'fa-crown'
    }
  ];

  const keyFeatures = [
    {
      icon: 'fa-shield-alt',
      title: 'Cortical Bone Anchoring',
      description: 'Implants are anchored in the dense cortical bone layer, which remains strong even when the inner bone is weak or atrophied.'
    },
    {
      icon: 'fa-rocket',
      title: 'Immediate Stability',
      description: 'Cortical bone provides immediate stability and support, allowing for same-day loading and function.'
    },
    {
      icon: 'fa-bone',
      title: 'No Bone Grafting',
      description: 'Eliminates the need for bone grafting procedures by using the strong cortical bone as the foundation.'
    },
    {
      icon: 'fa-clock',
      title: 'Faster Treatment',
      description: 'Reduces overall treatment time by 50-70% compared to traditional implants with bone grafting.'
    },
    {
      icon: 'fa-heart',
      title: 'Life-Changing Results',
      description: 'Restores full chewing function and confidence for patients with weak jawbone who need reliable solutions.'
    },
    {
      icon: 'fa-star',
      title: 'Long-term Reliability',
      description: 'Cortical bone provides exceptional long-term stability and success rates for implant retention.'
    }
  ];

  const candidacyFactors = [
    {
      title: 'Ideal Candidates',
      items: [
        'Patients with weak or atrophied jawbone',
        'Those who want to avoid bone grafting',
        'Patients seeking faster treatment',
        'Individuals with cortical bone available',
        'Those needing immediate function',
        'Patients with failed traditional implants',
        'Individuals wanting same-day results',
        'Those with complex bone loss patterns'
      ]
    },
    {
      title: 'May Not Be Suitable',
      items: [
        'Insufficient cortical bone',
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
      title: 'Immediate Stability',
      description: 'Cortical bone provides instant stability, allowing for same-day loading and immediate function.',
      icon: 'fa-anchor',
      color: 'text-blue-500'
    },
    {
      title: 'No Bone Grafting',
      description: 'Eliminates the need for extensive bone grafting procedures, reducing treatment time and complexity.',
      icon: 'fa-times-circle',
      color: 'text-green-500'
    },
    {
      title: 'Faster Treatment',
      description: 'Reduces overall treatment time by 50-70% compared to traditional implants with bone grafting.',
      icon: 'fa-clock',
      color: 'text-purple-500'
    },
    {
      title: 'Superior Stability',
      description: 'Cortical bone provides exceptional stability and support for long-term implant success.',
      icon: 'fa-shield-alt',
      color: 'text-orange-500'
    },
    {
      title: 'Cost-Effective',
      description: 'Often more cost-effective than traditional implants when bone grafting is required.',
      icon: 'fa-dollar-sign',
      color: 'text-cyan-500'
    },
    {
      title: 'Life-Changing Results',
      description: 'Restores full function for patients with weak jawbone who need reliable solutions.',
      icon: 'fa-smile',
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
      question: 'What makes basal implants different from traditional implants?',
      answer: 'Basal implants are placed in the dense cortical bone layer instead of the softer inner bone. This provides immediate stability and eliminates the need for bone grafting, making them ideal for patients with weak jawbone.'
    },
    {
      question: 'How long does the basal implant procedure take?',
      answer: 'The basal implant placement procedure typically takes 2-3 hours, depending on the number of implants needed. The complete process from consultation to final restoration usually spans 2-4 months, with immediate loading often possible.'
    },
    {
      question: 'Is the procedure more complex than traditional implants?',
      answer: 'Basal implants require specialized training and experience, but the procedure is often simpler than traditional implants that require bone grafting. The cortical bone placement provides immediate stability.'
    },
    {
      question: 'Can I eat normally with basal implants?',
      answer: 'Yes! Once fully healed, you can eat all your favorite foods normally. Basal implants provide excellent stability and function, allowing you to enjoy a normal diet without restrictions.'
    },
    {
      question: 'What if I don\'t have enough cortical bone?',
      answer: 'If you don\'t have sufficient cortical bone, other options may include traditional implants with bone grafting, or alternative treatments like implant-supported dentures. Your specialist will evaluate all options.'
    },
    {
      question: 'How much do basal implants cost?',
      answer: 'Basal implants are often more cost-effective than traditional implants when bone grafting is required, as they eliminate the need for additional grafting procedures. The cost varies based on your location and case complexity.'
    }
  ];

  return (
    <Layout
      title="Basal Implants - Cortical Bone Anchoring | ReplaceRoot"
      description="Advanced basal implants that anchor in the dense cortical bone layer, providing exceptional stability and immediate loading capabilities. Ideal for patients with weak jawbone structure."
      keywords={['basal implants', 'cortical implants', 'dental implants', 'tooth replacement', 'implant dentistry', 'cortical bone anchoring', 'immediate loading', 'implant treatment', 'ReplaceRoot']}
      canonical="/basal-implants"
      og={{
        title: "Basal Implants - Cortical Bone Anchoring | ReplaceRoot",
        description: "Advanced basal implants that anchor in the dense cortical bone layer, providing exceptional stability and immediate loading capabilities. Ideal for patients with weak jawbone structure.",
        type: 'website',
        image: "https://replaceroot.com/assets/images/basal-implants.jpg",
      }}
      twitter={{ card: 'summary_large_image' }}
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'MedicalProcedure',
        name: 'Basal Implants',
        description: 'Advanced basal implants that anchor in the dense cortical bone layer.',
        medicalSpecialty: 'Dentistry',
        url: typeof window !== 'undefined' ? window.location.href : undefined,
        image: "https://replaceroot.com/assets/images/basal-implants.jpg",
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
              <i className="fa-solid fa-shield-alt mr-2"></i>
              Advanced Weak Jawbone Solution
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-gray-800">
              Basal <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Dental Implants</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              Revolutionary cortical bone implant solution for patients with weak jawbone. Basal implants anchor in the strong cortical bone layer, providing immediate stability and eliminating the need for bone grafting.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 sm:py-18 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-14 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Revolutionary <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Cortical Technology</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Basal implants represent a breakthrough in implant dentistry, offering immediate stability and function for patients with weak jawbone who want to avoid bone grafting.
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
              The <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Advanced Procedure</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Our basal implant procedure uses cortical bone technology to provide immediate stability and function for patients with weak jawbone.
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
              Why Choose <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Basal Implants?</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Basal implants offer unique advantages that make them the ideal solution for patients with weak jawbone who want to avoid bone grafting.
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
              Basal implants are specifically designed for patients with weak jawbone who need reliable solutions. Here's what we consider when evaluating your suitability.
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
                  Advanced <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Cortical Technology</span>
                </h2>
                <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                  Basal implants use the dense cortical bone layer, which remains strong even when the inner bone is weak or atrophied. This revolutionary approach provides immediate stability and eliminates the need for bone grafting.
                </p>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="fa-solid fa-shield-alt text-white text-xs sm:text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1 text-sm sm:text-base">Cortical Bone Anchoring</h4>
                      <p className="text-gray-600 text-sm sm:text-base">Implants are placed in the dense cortical bone layer, providing immediate stability and support.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="fa-solid fa-clock text-white text-xs sm:text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1 text-sm sm:text-base">Immediate Loading</h4>
                      <p className="text-gray-600 text-sm sm:text-base">Cortical bone provides instant stability, allowing for same-day restoration and function.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="fa-solid fa-user-md text-white text-xs sm:text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1 text-sm sm:text-base">Specialized Expertise</h4>
                      <p className="text-gray-600 text-sm sm:text-base">Only highly trained specialists with extensive experience in basal implants perform these procedures.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-cyan-200">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Why Basal Implants?</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <i className="fa-solid fa-check-circle text-green-500 text-lg sm:text-xl"></i>
                    <span className="text-gray-700 text-sm sm:text-base">Immediate stability</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <i className="fa-solid fa-check-circle text-green-500 text-lg sm:text-xl"></i>
                    <span className="text-gray-700 text-sm sm:text-base">No bone grafting required</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <i className="fa-solid fa-check-circle text-green-500 text-lg sm:text-xl"></i>
                    <span className="text-gray-700 text-sm sm:text-base">Faster treatment time</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <i className="fa-solid fa-check-circle text-green-500 text-lg sm:text-xl"></i>
                    <span className="text-gray-700 text-sm sm:text-base">Superior stability</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <i className="fa-solid fa-check-circle text-green-500 text-lg sm:text-xl"></i>
                    <span className="text-gray-700 text-sm sm:text-base">Cost-effective solution</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <i className="fa-solid fa-check-circle text-green-500 text-lg sm:text-xl"></i>
                    <span className="text-gray-700 text-sm sm:text-base">Life-changing results</span>
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
              Proper aftercare is essential for successful healing and long-term basal implant success. Follow these specialized guidelines for optimal results.
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
              Get answers to common questions about basal dental implants and what to expect during your advanced treatment.
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
              Ready for <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Cortical Solutions?</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Find a qualified basal implant specialist in your area who can help you achieve the smile you deserve, even with weak jawbone.
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

export default BasalImplantPage;
