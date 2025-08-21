import React from 'react';
import { Header, Footer } from '../components';

const OverdenturesPage = () => {
  const procedureSteps = [
    {
      step: '01',
      title: 'Comprehensive Evaluation',
      description: 'Complete oral examination and bone assessment to determine the optimal number and placement of implants for your overdenture. We evaluate your jawbone structure and remaining teeth.',
      icon: 'fa-stethoscope'
    },
    {
      step: '02',
      title: 'Treatment Planning',
      description: 'Digital planning to determine the optimal placement of 2-6 implants per arch, ensuring maximum stability and support for your overdenture.',
      icon: 'fa-clipboard-list'
    },
    {
      step: '03',
      title: 'Implant Placement',
      description: 'Strategic placement of implants in your jawbone. For immediate loading, temporary overdenture can be attached the same day.',
      icon: 'fa-screwdriver'
    },
    {
      step: '04',
      title: 'Healing Period',
      description: '3-6 months for implants to fully integrate with your jawbone. During this time, you\'ll wear a temporary overdenture.',
      icon: 'fa-heartbeat'
    },
    {
      step: '05',
      title: 'Overdenture Fabrication',
      description: 'Custom fabrication of your permanent overdenture with precision attachments that snap securely onto your implants.',
      icon: 'fa-crown'
    },
    {
      step: '06',
      title: 'Final Fitting',
      description: 'Your custom overdenture is fitted and adjusted for optimal comfort, function, and appearance.',
      icon: 'fa-smile'
    }
  ];

  const keyFeatures = [
    {
      icon: 'fa-anchor',
      title: 'Secure Attachment',
      description: 'Overdentures snap securely onto implants, eliminating slipping, sliding, and embarrassing moments.'
    },
    {
      icon: 'fa-utensils',
      title: 'Improved Chewing',
      description: 'Enjoy better chewing function and bite force compared to traditional removable dentures.'
    },
    {
      icon: 'fa-bone',
      title: 'Bone Preservation',
      description: 'Implants help preserve jawbone structure, preventing the facial collapse that occurs with traditional dentures.'
    },
    {
      icon: 'fa-comments',
      title: 'Better Speech',
      description: 'Improved stability means clearer speech and better pronunciation without denture movement.'
    },
    {
      icon: 'fa-heart',
      title: 'Enhanced Confidence',
      description: 'Feel confident eating, speaking, and smiling without worrying about denture movement or embarrassment.'
    },
    {
      icon: 'fa-star',
      title: 'Easy Maintenance',
      description: 'Simple to clean and maintain - remove for cleaning and snap back in place securely.'
    }
  ];

  const candidacyFactors = [
    {
      title: 'Ideal Candidates',
      items: [
        'Currently wearing traditional dentures',
        'Experiencing denture slipping or discomfort',
        'Wanting improved chewing function',
        'Those with sufficient jawbone for implants',
        'Individuals seeking better speech',
        'Patients wanting enhanced confidence',
        'Those with bone loss concerns',
        'Individuals wanting removable option'
      ]
    },
    {
      title: 'May Not Be Suitable',
      items: [
        'Insufficient jawbone for implants',
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
      title: 'Secure Fit',
      description: 'Overdentures snap securely onto implants, eliminating slipping, sliding, and embarrassing moments.',
      icon: 'fa-lock',
      color: 'text-blue-500'
    },
    {
      title: 'Better Chewing',
      description: 'Enjoy improved chewing function and bite force compared to traditional removable dentures.',
      icon: 'fa-utensils',
      color: 'text-green-500'
    },
    {
      title: 'Bone Preservation',
      description: 'Implants help preserve jawbone structure, preventing facial collapse and maintaining facial appearance.',
      icon: 'fa-bone',
      color: 'text-purple-500'
    },
    {
      title: 'Improved Speech',
      description: 'Better stability means clearer speech and better pronunciation without denture movement.',
      icon: 'fa-comments',
      color: 'text-orange-500'
    },
    {
      title: 'Enhanced Confidence',
      description: 'Feel confident eating, speaking, and smiling without worrying about denture movement.',
      icon: 'fa-smile',
      color: 'text-cyan-500'
    },
    {
      title: 'Easy Maintenance',
      description: 'Simple to clean and maintain - remove for cleaning and snap back in place securely.',
      icon: 'fa-brush',
      color: 'text-pink-500'
    }
  ];

  const aftercareTips = [
    {
      title: 'Daily Care',
      tips: [
        'Remove overdenture for cleaning',
        'Brush overdenture with soft brush',
        'Clean implant attachments carefully',
        'Rinse mouth thoroughly',
        'Soak overdenture in cleaning solution',
        'Brush remaining teeth and gums',
        'Check for any sore spots',
        'Store properly when not wearing'
      ]
    },
    {
      title: 'Regular Maintenance',
      tips: [
        'Schedule regular dental check-ups',
        'Have overdenture professionally cleaned',
        'Check implant attachments for wear',
        'Adjust overdenture fit as needed',
        'Monitor for any changes in fit',
        'Update overdenture every 5-7 years',
        'Maintain good oral hygiene',
        'Follow dentist\'s care instructions'
      ]
    },
    {
      title: 'Long-term Care',
      tips: [
        'Continue regular dental visits',
        'Monitor jawbone health',
        'Replace overdenture when needed',
        'Maintain implant health',
        'Practice good oral hygiene',
        'Avoid damaging habits',
        'Keep spare overdenture',
        'Follow maintenance schedule'
      ]
    }
  ];

  const faqs = [
    {
      question: 'What are implant-supported overdentures?',
      answer: 'Implant-supported overdentures are removable dentures that snap securely onto dental implants. They provide much better stability and function than traditional removable dentures while still allowing you to remove them for cleaning.'
    },
    {
      question: 'How many implants do I need for overdentures?',
      answer: 'Typically, 2-6 implants per arch are needed for overdentures. The exact number depends on your jawbone structure, chewing needs, and desired stability. Your dentist will recommend the optimal number for your case.'
    },
    {
      question: 'Can I eat normally with overdentures?',
      answer: 'Yes! Overdentures provide much better chewing function than traditional dentures. You can enjoy most foods, including harder items that might be difficult with regular dentures. The secure fit prevents slipping while eating.'
    },
    {
      question: 'How do I clean my overdentures?',
      answer: 'Remove your overdentures and clean them with a soft brush and denture cleaner. Clean the implant attachments carefully. Brush your remaining teeth and gums. Soak the overdentures in cleaning solution overnight.'
    },
    {
      question: 'How long do overdentures last?',
      answer: 'Overdentures typically last 5-7 years before needing replacement, though this varies based on wear and care. The implants themselves can last a lifetime with proper care and maintenance.'
    },
    {
      question: 'Are overdentures more expensive than traditional dentures?',
      answer: 'Yes, overdentures are more expensive initially due to the implant placement. However, they provide much better function, comfort, and longevity, making them a worthwhile investment for many patients.'
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
              <i className="fa-solid fa-anchor mr-2"></i>
              Secure Denture Solution
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-gray-800">
              Implant-Supported <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Overdentures</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Revolutionary denture solution that combines the convenience of removable dentures with the stability of dental implants. Overdentures snap securely onto implants, eliminating slipping and providing confidence.
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
              Revolutionary <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Denture Technology</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Implant-supported overdentures represent the perfect balance between convenience and stability, offering the best of both worlds for patients who want removable dentures with implant stability.
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
              The <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Treatment Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our overdenture treatment process combines implant placement with custom denture fabrication for optimal results and patient satisfaction.
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
              Why Choose <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Overdentures?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Implant-supported overdentures offer unique advantages that make them the ideal solution for patients who want the convenience of removable dentures with implant stability.
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
              Implant-supported overdentures are ideal for patients who want the convenience of removable dentures with the stability of implants. Here's what we consider when evaluating your suitability.
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
                  Advanced <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Attachment Technology</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Overdentures use precision attachment technology to snap securely onto dental implants. This revolutionary system provides stability while maintaining the convenience of removable dentures.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="fa-solid fa-lock text-white text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Secure Snap Attachment</h4>
                      <p className="text-gray-600">Precision attachments snap securely onto implants, providing stability without permanent fixation.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="fa-solid fa-brush text-white text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Easy Maintenance</h4>
                      <p className="text-gray-600">Remove for cleaning and snap back in place - simple maintenance for optimal hygiene.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="fa-solid fa-user-md text-white text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Custom Fabrication</h4>
                      <p className="text-gray-600">Each overdenture is custom-fabricated for optimal fit, function, and appearance.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-8 border border-cyan-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Why Overdentures?</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <i className="fa-solid fa-check-circle text-green-500 text-xl"></i>
                    <span className="text-gray-700">Secure fit and stability</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="fa-solid fa-check-circle text-green-500 text-xl"></i>
                    <span className="text-gray-700">Improved chewing function</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="fa-solid fa-check-circle text-green-500 text-xl"></i>
                    <span className="text-gray-700">Bone preservation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="fa-solid fa-check-circle text-green-500 text-xl"></i>
                    <span className="text-gray-700">Better speech clarity</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="fa-solid fa-check-circle text-green-500 text-xl"></i>
                    <span className="text-gray-700">Enhanced confidence</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="fa-solid fa-check-circle text-green-500 text-xl"></i>
                    <span className="text-gray-700">Easy maintenance</span>
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
              Care & <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Maintenance</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proper care and maintenance are essential for long-term overdenture success and optimal oral health. Follow these guidelines for the best results.
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
              Get answers to common questions about implant-supported overdentures and what to expect during your treatment.
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
              Ready for <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Secure Dentures?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Find a qualified overdenture specialist in your area who can help you achieve the confidence and function you deserve.
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

export default OverdenturesPage;
