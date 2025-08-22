import React from 'react';
import { Header, Footer } from '../components';
import Layout from '../components/Layout';

const AllOn6ImplantPage = () => {
  const procedureSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'Comprehensive examination including X-rays, 3D scans, and treatment planning to determine if you\'re a candidate for All-on-6 implants.',
      icon: 'fa-stethoscope'
    },
    {
      step: '02',
      title: 'Treatment Planning',
      description: 'Advanced digital planning to determine the optimal placement of 6 implants per arch for maximum support, stability, and load distribution.',
      icon: 'fa-clipboard-list'
    },
    {
      step: '03',
      title: 'Implant Placement',
      description: 'Strategic placement of 6 titanium implants in optimal positions to provide enhanced stability and support, typically completed in 3-4 hours.',
      icon: 'fa-tooth'
    },
    {
      step: '04',
      title: 'Immediate Loading',
      description: 'Temporary full arch restoration attached immediately after implant placement, allowing you to leave with a complete smile the same day.',
      icon: 'fa-clock'
    },
    {
      step: '05',
      title: 'Healing Period',
      description: '3-6 months for implants to fully integrate with your jawbone while you wear your temporary restoration.',
      icon: 'fa-heartbeat'
    },
    {
      step: '06',
      title: 'Final Restoration',
      description: 'Your custom-designed permanent full arch bridge is attached, completing your All-on-6 implant restoration with enhanced stability.',
      icon: 'fa-crown'
    }
  ];

  const benefits = [
    {
      icon: 'fa-shield-alt',
      title: 'Enhanced Stability',
      description: 'Six implants provide superior stability and load distribution compared to fewer implants, ensuring your restoration stays securely in place.'
    },
    {
      icon: 'fa-smile',
      title: 'Same-Day Smile',
      description: 'Walk out with a complete, functional smile the same day as your implant surgery - no waiting period required.'
    },
    {
      icon: 'fa-utensils',
      title: 'Maximum Function',
      description: 'Enjoy full chewing function immediately after surgery with confidence, including harder foods that require more bite force.'
    },
    {
      icon: 'fa-heart',
      title: 'Long-term Reliability',
      description: 'The additional implants provide better long-term success rates and durability, making this a reliable investment in your oral health.'
    },
    {
      icon: 'fa-teeth',
      title: 'Ideal for Active Lifestyles',
      description: 'Perfect for patients with active lifestyles who need maximum stability and function for their daily activities.'
    },
    {
      icon: 'fa-brush',
      title: 'Easy Maintenance',
      description: 'Care for your All-on-6 implants just like natural teeth with regular brushing, flossing, and dental check-ups.'
    }
  ];

  const candidacyFactors = [
    {
      title: 'Good Candidates',
      items: [
        'Missing most or all teeth in one or both arches',
        'Currently wearing dentures or partial dentures',
        'Good overall health',
        'Sufficient jawbone density',
        'Healthy gums',
        'Non-smokers (or willing to quit)',
        'Committed to oral hygiene',
        'Active lifestyle requiring maximum stability',
        'Realistic expectations'
      ]
    },
    {
      title: 'May Need Additional Treatment',
      items: [
        'Insufficient bone density (bone grafting)',
        'Active gum disease (periodontal treatment)',
        'Medical conditions affecting healing',
        'Heavy smokers',
        'Teeth grinding (bruxism treatment)',
        'Complex bite issues',
        'Severe bone loss requiring advanced grafting'
      ]
    }
  ];

  const aftercareTips = [
    {
      title: 'Immediate Post-Surgery (First 24-48 hours)',
      tips: [
        'Apply ice packs to reduce swelling',
        'Take prescribed medications as directed',
        'Eat soft foods and avoid hot beverages',
        'Avoid touching the surgical sites',
        'Get plenty of rest',
        'Keep head elevated while sleeping',
        'Use prescribed mouthwash as directed'
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
      question: 'What makes All-on-6 different from All-on-4 implants?',
      answer: 'All-on-6 uses 6 strategically placed implants per arch instead of 4, providing enhanced stability, better load distribution, and superior long-term reliability. This makes it ideal for patients who need maximum stability and function.'
    },
    {
      question: 'How long does the All-on-6 procedure take?',
      answer: 'The actual implant placement surgery typically takes 3-4 hours per arch. The complete process from consultation to final restoration usually spans 3-6 months, but you\'ll have a functional smile immediately after surgery.'
    },
    {
      question: 'Is the procedure painful?',
      answer: 'The procedure is performed under local anesthesia or sedation, so you shouldn\'t feel pain during surgery. Post-surgery discomfort is typically managed with prescribed medications and usually subsides within a few days to a week.'
    },
    {
      question: 'Can I eat normally with All-on-6 implants?',
      answer: 'Yes! You can eat most foods immediately after surgery with your temporary restoration. Once you receive your permanent restoration, you can enjoy all your favorite foods without restrictions, including harder foods that require more bite force.'
    },
    {
      question: 'What if I don\'t have enough bone for All-on-6?',
      answer: 'If you have insufficient bone density, bone grafting procedures can be performed to build up the jawbone. Your dentist will evaluate your bone structure during consultation to determine the best approach for your case.'
    },
    {
      question: 'How much do All-on-6 implants cost?',
      answer: 'All-on-6 implants typically cost more than All-on-4 due to the additional implants, but they provide enhanced stability and long-term reliability. The cost varies depending on your location, the complexity of your case, and whether additional procedures are needed. Most dental practices offer financing options.'
    }
  ];

  return (
    <Layout
      title="All-on-6 Implants - Enhanced Full Arch Replacement | ReplaceRoot"
      description="Experience superior stability and support with All-on-6 implants. Our advanced 6-implant technique provides enhanced full arch restoration with maximum durability and natural-looking results."
      keywords={['all-on-6 implants', 'full arch replacement', 'dental implants', 'tooth replacement', 'implant dentistry', 'enhanced stability', 'implant treatment', 'full mouth restoration', 'ReplaceRoot']}
      canonical="/all-on-6-implants"
      og={{
        title: "All-on-6 Implants - Enhanced Full Arch Replacement | ReplaceRoot",
        description: "Experience superior stability and support with All-on-6 implants. Our advanced 6-implant technique provides enhanced full arch restoration with maximum durability and natural-looking results.",
        type: 'website',
        image: "https://replaceroot.com/assets/images/all-on-6-implants.jpg",
      }}
      twitter={{ card: 'summary_large_image' }}
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'MedicalProcedure',
        name: 'All-on-6 Implants',
        description: 'Experience superior stability and support with All-on-6 implants.',
        medicalSpecialty: 'Dentistry',
        url: typeof window !== 'undefined' ? window.location.href : undefined,
        image: "https://replaceroot.com/assets/images/all-on-6-implants.jpg",
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
              <i className="fa-solid fa-tooth mr-2"></i>
              Dental Implant Services
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-gray-800">
              All-on-6 <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Dental Implants</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              Premium full arch replacement with 6 implants supporting a complete arch of teeth for maximum stability and enhanced function. Get your smile back the same day with superior support and long-term reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 sm:py-18 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center max-w-7xl mx-auto">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                What are All-on-6 <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Dental Implants?</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                All-on-6 dental implants are a premium treatment that uses 6 strategically placed implants to support a complete arch of replacement teeth. This advanced approach provides enhanced stability, superior load distribution, and maximum function.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-xs sm:text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1 text-sm sm:text-base">Enhanced 6-Implant Placement</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Six titanium implants strategically placed for maximum stability and optimal load distribution across the entire arch.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-xs sm:text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1 text-sm sm:text-base">Immediate Loading</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Temporary full arch restoration attached immediately, allowing you to leave with a complete smile the same day.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-xs sm:text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1 text-sm sm:text-base">Maximum Stability</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Superior stability and function that feels and performs like natural teeth, with enhanced reliability for long-term success.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-50 to-teal-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-cyan-200">
                <h4 className="font-bold text-gray-800 mb-3 flex items-center text-sm sm:text-base">
                  <i className="fa-solid fa-lightbulb text-cyan-600 mr-2"></i>
                  Why Choose All-on-6 Dental Implants?
                </h4>
                <p className="text-gray-600 text-sm sm:text-base">
                  All-on-6 implants offer the perfect combination of maximum stability, enhanced function, and long-term reliability. This premium approach provides superior load distribution and is ideal for patients who need the highest level of stability and function.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Key Advantages</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3">
                  <i className="fa-solid fa-check-circle text-green-500 text-lg sm:text-xl"></i>
                  <span className="text-gray-700 text-sm sm:text-base">Enhanced stability and support</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fa-solid fa-check-circle text-green-500 text-lg sm:text-xl"></i>
                  <span className="text-gray-700 text-sm sm:text-base">Superior load distribution</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fa-solid fa-check-circle text-green-500 text-lg sm:text-xl"></i>
                  <span className="text-gray-700 text-sm sm:text-base">Same-day smile restoration</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fa-solid fa-check-circle text-green-500 text-lg sm:text-xl"></i>
                  <span className="text-gray-700 text-sm sm:text-base">Maximum function and reliability</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fa-solid fa-check-circle text-green-500 text-lg sm:text-xl"></i>
                  <span className="text-gray-700 text-sm sm:text-base">Ideal for active lifestyles</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fa-solid fa-check-circle text-green-500 text-lg sm:text-xl"></i>
                  <span className="text-gray-700 text-sm sm:text-base">Long-term durability</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fa-solid fa-check-circle text-green-500 text-lg sm:text-xl"></i>
                  <span className="text-gray-700 text-sm sm:text-base">Natural appearance and feel</span>
                </div>
              </div>
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
              Our All-on-6 implant procedure is designed for maximum stability and enhanced function. Here's what you can expect throughout your treatment journey.
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

      {/* Benefits Section */}
      <section className="py-16 sm:py-18 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-14 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Benefits of All-on-6 <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Dental Implants</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              All-on-6 dental implants offer numerous advantages over other full arch implant solutions, providing you with the highest level of stability and function.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mb-6">
                    <i className={`fa-solid ${benefit.icon} text-white text-lg sm:text-2xl`}></i>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">{benefit.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{benefit.description}</p>
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
              Most people with missing most or all teeth in one or both arches are good candidates for All-on-6 implants. Here's what we consider when evaluating your candidacy.
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
                        <i className={`fa-solid ${index === 0 ? 'fa-check-circle text-green-500' : 'fa-info-circle text-blue-500'} mt-1`}></i>
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
              Proper aftercare is essential for successful healing and long-term implant success. Follow these guidelines for optimal results with All-on-6 dental implants.
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
              Get answers to common questions about All-on-6 dental implants and what to expect during your treatment.
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
              Ready to Restore Your <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Smile?</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Find a qualified implant specialist in your area who can help you achieve the smile you deserve with All-on-6 dental implants.
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

export default AllOn6ImplantPage;
