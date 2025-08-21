import React from 'react';
import { Header, Footer } from '../components';

const MultipleToothImplantPage = () => {
  const procedureSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'Comprehensive examination including X-rays, 3D scans, and treatment planning to determine the optimal approach for replacing multiple missing teeth.',
      icon: 'fa-stethoscope'
    },
    {
      step: '02',
      title: 'Treatment Planning',
      description: 'Advanced digital planning to determine the exact number and placement of implants needed for optimal support and natural-looking results.',
      icon: 'fa-clipboard-list'
    },
    {
      step: '03',
      title: 'Implant Placement',
      description: 'Strategic placement of multiple titanium implants in optimal positions to support your replacement teeth, typically completed in 2-3 hours.',
      icon: 'fa-tooth'
    },
    {
      step: '04',
      title: 'Healing Period',
      description: '3-6 months for all implants to fuse with your jawbone (osseointegration), creating a strong foundation for your multiple tooth restoration.',
      icon: 'fa-heartbeat'
    },
    {
      step: '05',
      title: 'Abutment Placement',
      description: 'Connector pieces attached to each implant to support your custom-made bridge or individual crowns.',
      icon: 'fa-link'
    },
    {
      step: '06',
      title: 'Restoration Attachment',
      description: 'Your custom-designed bridge or individual crowns are securely attached, completing your natural-looking multiple tooth implant restoration.',
      icon: 'fa-crown'
    }
  ];

  const benefits = [
    {
      icon: 'fa-smile',
      title: 'Natural Appearance',
      description: 'Custom-designed to match your existing teeth perfectly, creating a seamless, natural-looking smile that restores your confidence.'
    },
    {
      icon: 'fa-shield-alt',
      title: 'Preserves Bone Structure',
      description: 'Prevents bone loss in multiple areas, maintaining your facial structure and preventing the sunken appearance that occurs with missing teeth.'
    },
    {
      icon: 'fa-utensils',
      title: 'Restores Full Function',
      description: 'Allows you to eat, speak, and smile with confidence, restoring full chewing function across multiple teeth.'
    },
    {
      icon: 'fa-heart',
      title: 'Long-lasting Solution',
      description: 'With proper care, multiple tooth implants can last a lifetime, making them a cost-effective long-term investment in your oral health.'
    },
    {
      icon: 'fa-teeth',
      title: 'Protects Adjacent Teeth',
      description: 'Unlike traditional bridges, implants don\'t require grinding down healthy neighboring teeth for support.'
    },
    {
      icon: 'fa-brush',
      title: 'Easy Maintenance',
      description: 'Care for your implants just like your natural teeth with regular brushing, flossing, and dental check-ups.'
    }
  ];

  const candidacyFactors = [
    {
      title: 'Good Candidates',
      items: [
        'Missing 2-3 adjacent teeth',
        'Good overall health',
        'Sufficient jawbone density',
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
        'Complex bite issues'
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
        'Keep head elevated while sleeping'
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
        'Avoid smoking and alcohol'
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
        'Maintain good oral hygiene habits'
      ]
    }
  ];

  const faqs = [
    {
      question: 'How many implants do I need for 2-3 missing teeth?',
      answer: 'Typically, you\'ll need 2 implants to support 2-3 missing teeth. Your dentist will determine the optimal number based on your specific case, bone density, and the location of the missing teeth. Sometimes 3 implants may be recommended for better stability.'
    },
    {
      question: 'How long does the multiple tooth implant procedure take?',
      answer: 'The actual implant placement surgery typically takes 2-3 hours. The complete process from consultation to final restoration usually spans 3-6 months, including the healing period for osseointegration.'
    },
    {
      question: 'Is the procedure more painful than single tooth implants?',
      answer: 'The procedure is performed under local anesthesia, so you shouldn\'t feel pain during surgery. Post-surgery discomfort is typically managed with prescribed medications and usually subsides within a few days to a week.'
    },
    {
      question: 'Can I eat normally with multiple tooth implants?',
      answer: 'Yes! Once fully healed, you can eat all your favorite foods without restrictions. Multiple tooth implants restore full chewing function, allowing you to enjoy a normal diet with confidence.'
    },
    {
      question: 'What if I don\'t have enough bone for multiple implants?',
      answer: 'If you have insufficient bone density, bone grafting procedures can be performed to build up the jawbone. This may extend the treatment timeline but doesn\'t prevent you from getting multiple tooth implants.'
    },
    {
      question: 'How much do multiple tooth implants cost?',
      answer: 'The cost varies depending on the number of implants needed, your location, the complexity of your case, and whether additional procedures like bone grafting are required. Most dental practices offer financing options to make treatment affordable.'
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
              Multiple Tooth <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Implants</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Replace 2-3 missing teeth with a permanent, natural-looking solution that restores your smile, chewing function, and confidence. Our advanced multiple tooth implant procedure offers the most reliable and long-lasting tooth replacement option.
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
                What are Multiple Tooth <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Implants?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Multiple tooth implants are a permanent solution for replacing 2-3 adjacent missing teeth. This treatment involves strategically placing implants to support either individual crowns or a dental bridge.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Strategic Implant Placement</h4>
                    <p className="text-gray-600">Carefully positioned titanium implants that provide optimal support for multiple replacement teeth.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Custom Restoration</h4>
                    <p className="text-gray-600">Individual crowns or a dental bridge designed to match your existing teeth perfectly.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Natural Function</h4>
                    <p className="text-gray-600">Restores full chewing function and maintains proper bite alignment for optimal oral health.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-50 to-teal-50 rounded-2xl p-6 border border-cyan-200">
                <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                  <i className="fa-solid fa-lightbulb text-cyan-600 mr-2"></i>
                  Why Choose Multiple Tooth Implants?
                </h4>
                <p className="text-gray-600">
                  Multiple tooth implants provide superior stability and function compared to traditional bridges or removable partial dentures. They preserve your jawbone, prevent adjacent teeth from shifting, and offer a permanent, natural-looking solution that feels and functions like your own teeth.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Advantages</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <i className="fa-solid fa-check-circle text-green-500 text-xl"></i>
                  <span className="text-gray-700">Natural appearance and feel</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fa-solid fa-check-circle text-green-500 text-xl"></i>
                  <span className="text-gray-700">Preserves jawbone structure</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fa-solid fa-check-circle text-green-500 text-xl"></i>
                  <span className="text-gray-700">No damage to adjacent teeth</span>
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
                  <span className="text-gray-700">Prevents teeth shifting</span>
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
              Our multiple tooth implant procedure is performed in stages to ensure optimal results and comfortable healing. Here's what you can expect throughout your treatment journey.
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
              Benefits of Multiple Tooth <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Implants</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple tooth implants offer numerous advantages over other tooth replacement options, providing you with the most natural and long-lasting solution for replacing 2-3 missing teeth.
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
              Most people with 2-3 missing adjacent teeth are good candidates for multiple tooth implants. Here's what we consider when evaluating your candidacy.
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
              Proper aftercare is essential for successful healing and long-term implant success. Follow these guidelines for optimal results with multiple tooth implants.
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
              Get answers to common questions about multiple tooth implants and what to expect during your treatment.
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
              Find a qualified implant specialist in your area who can help you achieve the smile you deserve with multiple tooth implants.
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

export default MultipleToothImplantPage;
