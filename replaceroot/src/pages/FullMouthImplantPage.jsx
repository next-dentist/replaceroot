import React from 'react';
import { Header, Footer } from '../components';

const FullMouthImplantPage = () => {
  const procedureSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'Comprehensive examination including X-rays, 3D scans, and treatment planning to determine the optimal approach for full arch replacement.',
      icon: 'fa-stethoscope'
    },
    {
      step: '02',
      title: 'Treatment Planning',
      description: 'Advanced digital planning to determine the exact number and placement of implants needed for optimal support of your full arch restoration.',
      icon: 'fa-clipboard-list'
    },
    {
      step: '03',
      title: 'Implant Placement',
      description: 'Strategic placement of 4-8 titanium implants per arch in optimal positions to support your full mouth restoration, typically completed in 3-4 hours.',
      icon: 'fa-tooth'
    },
    {
      step: '04',
      title: 'Healing Period',
      description: '3-6 months for all implants to fuse with your jawbone (osseointegration), creating a strong foundation for your full arch restoration.',
      icon: 'fa-heartbeat'
    },
    {
      step: '05',
      title: 'Abutment Placement',
      description: 'Connector pieces attached to each implant to support your custom-made full arch bridge or denture.',
      icon: 'fa-link'
    },
    {
      step: '06',
      title: 'Full Arch Restoration',
      description: 'Your custom-designed full arch bridge or implant-supported denture is securely attached, completing your natural-looking full mouth restoration.',
      icon: 'fa-crown'
    }
  ];

  const benefits = [
    {
      icon: 'fa-smile',
      title: 'Complete Smile Restoration',
      description: 'Restore your entire smile with natural-looking teeth that feel and function like your own, giving you back your confidence and quality of life.'
    },
    {
      icon: 'fa-shield-alt',
      title: 'Preserves Facial Structure',
      description: 'Prevents bone loss throughout your entire jaw, maintaining your facial structure and preventing the sunken appearance that occurs with missing teeth.'
    },
    {
      icon: 'fa-utensils',
      title: 'Full Function Restoration',
      description: 'Eat all your favorite foods with confidence, speak clearly, and enjoy a normal diet without restrictions or discomfort.'
    },
    {
      icon: 'fa-heart',
      title: 'Lifetime Solution',
      description: 'With proper care, full mouth implants can last a lifetime, making them a cost-effective long-term investment in your oral health and quality of life.'
    },
    {
      icon: 'fa-teeth',
      title: 'No More Denture Issues',
      description: 'Eliminate the problems associated with traditional dentures: slipping, clicking, gum irritation, and dietary restrictions.'
    },
    {
      icon: 'fa-brush',
      title: 'Easy Maintenance',
      description: 'Care for your full mouth implants just like natural teeth with regular brushing, flossing, and dental check-ups.'
    }
  ];

  const candidacyFactors = [
    {
      title: 'Good Candidates',
      items: [
        'Missing most or all teeth in one or both arches',
        'Currently wearing dentures or partial dentures',
        'Good overall health',
        'Sufficient jawbone density (or willing to undergo bone grafting)',
        'Healthy gums',
        'Non-smokers (or willing to quit)',
        'Committed to oral hygiene',
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
      question: 'How many implants do I need for full mouth restoration?',
      answer: 'Typically, you\'ll need 4-8 implants per arch (upper or lower jaw) for full mouth restoration. The exact number depends on your bone density, the type of restoration chosen, and your specific case. Your dentist will determine the optimal number during your consultation.'
    },
    {
      question: 'How long does the full mouth implant procedure take?',
      answer: 'The actual implant placement surgery typically takes 3-4 hours per arch. The complete process from consultation to final restoration usually spans 3-6 months, including the healing period for osseointegration. Some patients may qualify for immediate loading procedures.'
    },
    {
      question: 'Is the procedure painful?',
      answer: 'The procedure is performed under local anesthesia or sedation, so you shouldn\'t feel pain during surgery. Post-surgery discomfort is typically managed with prescribed medications and usually subsides within a few days to a week.'
    },
    {
      question: 'Can I eat normally with full mouth implants?',
      answer: 'Yes! Once fully healed, you can eat all your favorite foods without restrictions. Full mouth implants restore complete chewing function, allowing you to enjoy a normal diet with confidence, including foods that were difficult with dentures.'
    },
    {
      question: 'What if I don\'t have enough bone for full mouth implants?',
      answer: 'If you have insufficient bone density, bone grafting procedures can be performed to build up the jawbone. Advanced techniques like zygomatic implants or All-on-4 procedures may also be options for patients with significant bone loss.'
    },
    {
      question: 'How much do full mouth implants cost?',
      answer: 'The cost varies significantly depending on the number of implants needed, your location, the complexity of your case, and whether additional procedures like bone grafting are required. Most dental practices offer financing options to make treatment affordable.'
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
              <i className="fa-solid fa-tooth mr-2"></i>
              Dental Implant Services
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-gray-800">
              Full Mouth <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Dental Implants</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Complete full arch replacement with permanent, natural-looking dental implants that restore your entire smile, chewing function, and confidence. Our advanced full mouth implant procedure offers the most comprehensive and long-lasting tooth replacement solution.
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

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                What are Full Mouth <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Dental Implants?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Full mouth dental implants are a comprehensive solution for replacing all missing teeth in one or both arches. This treatment involves strategically placing multiple implants to support a full arch bridge or implant-supported denture.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Strategic Implant Placement</h4>
                    <p className="text-gray-600">Carefully positioned titanium implants (4-8 per arch) that provide optimal support for full arch restoration.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Full Arch Restoration</h4>
                    <p className="text-gray-600">Custom-designed full arch bridge or implant-supported denture that replaces all teeth in the arch.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Complete Function Restoration</h4>
                    <p className="text-gray-600">Restores full chewing function, speech, and maintains proper bite alignment for optimal oral health.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-50 to-teal-50 rounded-2xl p-6 border border-cyan-200">
                <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                  <i className="fa-solid fa-lightbulb text-cyan-600 mr-2"></i>
                  Why Choose Full Mouth Dental Implants?
                </h4>
                <p className="text-gray-600">
                  Full mouth dental implants provide superior stability and function compared to traditional dentures. They preserve your jawbone, eliminate denture problems, and offer a permanent, natural-looking solution that feels and functions like your own teeth.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Advantages</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <i className="fa-solid fa-check-circle text-green-500 text-xl"></i>
                  <span className="text-gray-700">Complete smile restoration</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fa-solid fa-check-circle text-green-500 text-xl"></i>
                  <span className="text-gray-700">Preserves facial structure</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fa-solid fa-check-circle text-green-500 text-xl"></i>
                  <span className="text-gray-700">No more denture issues</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fa-solid fa-check-circle text-green-500 text-xl"></i>
                  <span className="text-gray-700">Permanent solution</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fa-solid fa-check-circle text-green-500 text-xl"></i>
                  <span className="text-gray-700">Easy to maintain</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fa-solid fa-check-circle text-green-500 text-xl"></i>
                  <span className="text-gray-700">Restores full chewing function</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fa-solid fa-check-circle text-green-500 text-xl"></i>
                  <span className="text-gray-700">Natural appearance and feel</span>
                </div>
              </div>
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
              Our full mouth implant procedure is performed in stages to ensure optimal results and comfortable healing. Here's what you can expect throughout your treatment journey.
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

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Benefits of Full Mouth <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Dental Implants</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Full mouth dental implants offer numerous advantages over traditional dentures and other tooth replacement options, providing you with the most comprehensive and long-lasting solution.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mb-6">
                    <i className={`fa-solid ${benefit.icon} text-white text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
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
              Most people with missing most or all teeth in one or both arches are good candidates for full mouth dental implants. Here's what we consider when evaluating your candidacy.
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
                        <i className={`fa-solid ${index === 0 ? 'fa-check-circle text-green-500' : 'fa-info-circle text-blue-500'} mt-1`}></i>
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
              Proper aftercare is essential for successful healing and long-term implant success. Follow these guidelines for optimal results with full mouth dental implants.
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
              Get answers to common questions about full mouth dental implants and what to expect during your treatment.
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
              Ready to Restore Your <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Smile?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Find a qualified implant specialist in your area who can help you achieve the smile you deserve with full mouth dental implants.
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

export default FullMouthImplantPage;
