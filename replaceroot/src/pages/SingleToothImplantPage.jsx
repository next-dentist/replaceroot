import React from 'react';
import { Header, Footer } from '../components';
import Layout from '../components/Layout';

const SingleToothImplantPage = () => {
  const procedureSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'Comprehensive examination including X-rays, 3D scans, and treatment planning to determine if you\'re a good candidate for single tooth implants.',
      icon: 'fa-stethoscope'
    },
    {
      step: '02',
      title: 'Treatment Planning',
      description: 'Custom treatment plan created using advanced digital technology to ensure optimal implant placement and natural-looking results.',
      icon: 'fa-clipboard-list'
    },
    {
      step: '03',
      title: 'Implant Placement',
      description: 'Minimally invasive surgery to place the titanium implant into your jawbone, typically completed in 1-2 hours under local anesthesia.',
      icon: 'fa-tooth'
    },
    {
      step: '04',
      title: 'Healing Period',
      description: '3-6 months for the implant to fuse with your jawbone (osseointegration), creating a strong foundation for your new tooth.',
      icon: 'fa-heartbeat'
    },
    {
      step: '05',
      title: 'Abutment Placement',
      description: 'Small connector piece attached to the implant to support your custom-made crown.',
      icon: 'fa-link'
    },
    {
      step: '06',
      title: 'Crown Attachment',
      description: 'Your custom-designed porcelain crown is securely attached, completing your natural-looking single tooth implant.',
      icon: 'fa-crown'
    }
  ];

  const benefits = [
    {
      icon: 'fa-smile',
      title: 'Natural Appearance',
      description: 'Custom-designed to match your existing teeth in color, shape, and size for a seamless, natural look.'
    },
    {
      icon: 'fa-shield-alt',
      title: 'Preserves Bone',
      description: 'Prevents bone loss that occurs when teeth are missing, maintaining your facial structure and preventing premature aging.'
    },
    {
      icon: 'fa-utensils',
      title: 'Restores Function',
      description: 'Allows you to eat, speak, and smile with confidence, just like with your natural teeth.'
    },
    {
      icon: 'fa-heart',
      title: 'Long-lasting',
      description: 'With proper care, single tooth implants can last a lifetime, making them a cost-effective long-term solution.'
    },
    {
      icon: 'fa-teeth',
      title: 'Protects Adjacent Teeth',
      description: 'Unlike bridges, implants don\'t require grinding down healthy neighboring teeth for support.'
    },
    {
      icon: 'fa-brush',
      title: 'Easy Maintenance',
      description: 'Care for your implant just like your natural teeth with regular brushing, flossing, and dental check-ups.'
    }
  ];

  const candidacyFactors = [
    {
      title: 'Good Candidates',
      items: [
        'Missing one or more teeth',
        'Good overall health',
        'Sufficient jawbone density',
        'Healthy gums',
        'Non-smokers (or willing to quit)',
        'Committed to oral hygiene'
      ]
    },
    {
      title: 'May Need Additional Treatment',
      items: [
        'Insufficient bone density (bone grafting)',
        'Active gum disease (periodontal treatment)',
        'Medical conditions affecting healing',
        'Heavy smokers',
        'Teeth grinding (bruxism treatment)'
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
        'Avoid touching the surgical site',
        'Get plenty of rest'
      ]
    },
    {
      title: 'First Week',
      tips: [
        'Continue with soft diet',
        'Gently rinse with salt water',
        'Avoid strenuous activities',
        'Keep head elevated while sleeping',
        'Attend follow-up appointments'
      ]
    },
    {
      title: 'Long-term Care',
      tips: [
        'Brush twice daily with soft-bristled brush',
        'Floss daily around the implant',
        'Use antibacterial mouthwash',
        'Schedule regular dental check-ups',
        'Avoid chewing hard objects'
      ]
    }
  ];

  const faqs = [
    {
      question: 'How long does a single tooth implant procedure take?',
      answer: 'The actual implant placement surgery typically takes 1-2 hours. However, the complete process from consultation to final crown placement usually spans 3-6 months, including the healing period for osseointegration.'
    },
    {
      question: 'Is the procedure painful?',
      answer: 'Most patients report minimal discomfort during the procedure due to local anesthesia. Post-surgery discomfort is typically managed with over-the-counter pain relievers and usually subsides within a few days.'
    },
    {
      question: 'How long do single tooth implants last?',
      answer: 'With proper care and maintenance, single tooth implants can last 25+ years or even a lifetime. The success rate is over 95% when placed by experienced implant specialists.'
    },
    {
      question: 'Can I eat normally with a single tooth implant?',
      answer: 'Yes! Once fully healed, you can eat all your favorite foods without restrictions. Single tooth implants restore full chewing function, allowing you to enjoy a normal diet.'
    },
    {
      question: 'What if I don\'t have enough bone for an implant?',
      answer: 'If you have insufficient bone density, bone grafting procedures can be performed to build up the jawbone. This may extend the treatment timeline but doesn\'t prevent you from getting implants.'
    },
    {
      question: 'How much do single tooth implants cost?',
      answer: 'The cost varies depending on your location, the complexity of your case, and whether additional procedures like bone grafting are needed. Most dental practices offer financing options to make treatment affordable.'
    }
  ];

  return (
    <Layout
      title="Single Tooth Implant - Dental Implant Services | ReplaceRoot"
      description="Replace one missing tooth with a permanent, natural-looking solution that restores your smile, chewing function, and confidence. Our advanced single tooth implant procedure offers the most reliable and long-lasting tooth replacement option."
      keywords={['single tooth implant', 'dental implant', 'tooth replacement', 'implant dentistry', 'tooth implant', 'dental implants', 'tooth replacement options', 'implant treatment', 'ReplaceRoot']}
      canonical="/single-tooth-implant"
      og={{
        title: "Single Tooth Implant - Dental Implant Services | ReplaceRoot",
        description: "Replace one missing tooth with a permanent, natural-looking solution that restores your smile, chewing function, and confidence. Our advanced single tooth implant procedure offers the most reliable and long-lasting tooth replacement option.",
        type: 'website',
        image: "https://replaceroot.com/assets/images/single-tooth-implant.jpg",
      }}
      twitter={{ card: 'summary_large_image' }}
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'MedicalProcedure',
        name: 'Single Tooth Implant',
        description: 'Replace one missing tooth with a permanent, natural-looking solution that restores your smile, chewing function, and confidence.',
        medicalSpecialty: 'Dentistry',
        url: typeof window !== 'undefined' ? window.location.href : undefined,
        image: "https://replaceroot.com/assets/images/single-tooth-implant.jpg",
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
              Single Tooth <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Implant</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              Replace one missing tooth with a permanent, natural-looking solution that restores your smile, chewing function, and confidence. Our advanced single tooth implant procedure offers the most reliable and long-lasting tooth replacement option.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 sm:py-18 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center max-w-7xl mx-auto">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
                What is a Single Tooth <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Implant?</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                A single tooth implant is a permanent solution for replacing one missing tooth. It consists of three main components:
              </p>
              
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-xs sm:text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1 text-sm sm:text-base">Titanium Implant</h4>
                    <p className="text-gray-600 text-sm sm:text-base">A small, biocompatible post surgically placed into your jawbone that acts as the root of your new tooth.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-xs sm:text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1 text-sm sm:text-base">Abutment</h4>
                    <p className="text-gray-600 text-sm sm:text-base">A connector piece that attaches to the implant and supports your custom-made crown.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-xs sm:text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1 text-sm sm:text-base">Porcelain Crown</h4>
                    <p className="text-gray-600 text-sm sm:text-base">A custom-designed, natural-looking tooth that matches your existing teeth perfectly.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-50 to-teal-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-cyan-200">
                <h4 className="font-bold text-gray-800 mb-2 sm:mb-3 flex items-center text-sm sm:text-base">
                  <i className="fa-solid fa-lightbulb text-cyan-600 mr-2"></i>
                  Why Choose Single Tooth Implants?
                </h4>
                <p className="text-gray-600 text-sm sm:text-base">
                  Unlike bridges or dentures, single tooth implants are the only tooth replacement option that preserves your jawbone, prevents adjacent teeth from shifting, and provides a permanent, natural-looking solution that feels and functions like your own teeth.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Key Advantages</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <i className="fa-solid fa-check-circle text-green-500 text-lg sm:text-xl"></i>
                  <span className="text-gray-700 text-sm sm:text-base">Natural appearance and feel</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <i className="fa-solid fa-check-circle text-green-500 text-lg sm:text-xl"></i>
                  <span className="text-gray-700 text-sm sm:text-base">Preserves jawbone structure</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <i className="fa-solid fa-check-circle text-green-500 text-lg sm:text-xl"></i>
                  <span className="text-gray-700 text-sm sm:text-base">No damage to adjacent teeth</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <i className="fa-solid fa-check-circle text-green-500 text-lg sm:text-xl"></i>
                  <span className="text-gray-700 text-sm sm:text-base">Permanent solution</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <i className="fa-solid fa-check-circle text-green-500 text-lg sm:text-xl"></i>
                  <span className="text-gray-700 text-sm sm:text-base">Easy to maintain</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <i className="fa-solid fa-check-circle text-green-500 text-lg sm:text-xl"></i>
                  <span className="text-gray-700 text-sm sm:text-base">Restores full chewing function</span>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              The <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Procedure</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Our single tooth implant procedure is performed in stages to ensure optimal results and comfortable healing. Here's what you can expect throughout your treatment journey.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {procedureSteps.map((step, index) => (
                <div key={index} className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center">
                      <i className={`fa-solid ${step.icon} text-white text-lg sm:text-xl`}></i>
                    </div>
                    <span className="text-3xl sm:text-4xl font-black text-gray-200">{step.step}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{step.description}</p>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              Benefits of Single Tooth <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Implants</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Single tooth implants offer numerous advantages over other tooth replacement options, providing you with the most natural and long-lasting solution.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                    <i className={`fa-solid ${benefit.icon} text-white text-lg sm:text-2xl`}></i>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{benefit.description}</p>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              Are You a <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Candidate?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Most people with missing teeth are good candidates for single tooth implants. Here's what we consider when evaluating your candidacy.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {candidacyFactors.map((factor, index) => (
                <div key={index} className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">{factor.title}</h3>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              Aftercare & <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Recovery</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Proper aftercare is essential for successful healing and long-term implant success. Follow these guidelines for optimal results.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {aftercareTips.map((period, index) => (
                <div key={index} className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-cyan-200">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6">{period.title}</h3>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Get answers to common questions about single tooth implants and what to expect during your treatment.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4 sm:space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-8">
                  <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4">{faq.question}</h4>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              Ready to Restore Your <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Smile?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Find a qualified implant specialist in your area who can help you achieve the smile you deserve with a single tooth implant.
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

export default SingleToothImplantPage;
