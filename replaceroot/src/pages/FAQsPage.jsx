import React, { useState } from 'react';
import { Header, Footer } from '../components';
import Layout from '../components/Layout';

const FAQsPage = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const categories = [
    { id: 'general', name: 'General FAQs', count: 8 },
    { id: 'dentists', name: 'For Dentists', count: 6 },
    { id: 'patients', name: 'For Patients', count: 7 }
  ];

  const faqs = {
    general: [
      {
        id: 'general-1',
        question: 'What is Replace Roots?',
        answer: 'Replace Roots is a specialized platform that connects dental implant patients with qualified implant specialists. We focus exclusively on dental implant procedures, ensuring patients find the right specialist for their specific needs while helping dentists grow their implant practice with verified patient leads.'
      },
      {
        id: 'general-2',
        question: 'How does Replace Roots work?',
        answer: 'Our platform works as a bridge between patients seeking dental implants and qualified implant specialists. Patients can search for specialists in their area, read reviews, and submit inquiries. Dentists receive verified patient leads and can showcase their expertise through detailed profiles, case studies, and educational content.'
      },
      {
        id: 'general-3',
        question: 'Is Replace Roots available nationwide?',
        answer: 'Yes, Replace Roots serves patients and dentists across the entire country. We have a growing network of qualified implant specialists in all major cities and regions, ensuring patients can find local specialists while dentists can reach patients in their service areas.'
      },
      {
        id: 'general-4',
        question: 'What makes Replace Roots different from other dental platforms?',
        answer: 'Replace Roots is the only platform exclusively focused on dental implants. We offer verified patient leads, comprehensive specialist profiles with case studies, educational content, and a guarantee on lead quality. Our platform is designed specifically for implant dentistry, ensuring better matches between patients and specialists.'
      },
      {
        id: 'general-5',
        question: 'How do you verify the quality of patient leads?',
        answer: 'We implement a multi-step verification process that includes patient screening, inquiry validation, and follow-up confirmation. Our system ensures that only qualified, serious patients who are ready to proceed with implant treatment are connected with specialists.'
      },
      {
        id: 'general-6',
        question: 'What types of dental implant procedures do you cover?',
        answer: 'We cover all types of dental implant procedures including single implants, multiple implants, All-on-4, full arch restoration, bone grafting, sinus lifts, and implant-supported dentures. Our specialists are qualified to handle both simple and complex implant cases.'
      },
      {
        id: 'general-7',
        question: 'How can I contact Replace Roots support?',
        answer: 'You can reach our support team through multiple channels: email at support@replaceroots.com, phone at our toll-free number, or through the contact form on our website. We typically respond within 24 hours during business days.'
      },
      {
        id: 'general-8',
        question: 'Is my information secure on Replace Roots?',
        answer: 'Absolutely. We take data security seriously and implement industry-standard encryption and security measures. All patient and dentist information is protected, and we never share personal data with unauthorized parties. You can review our privacy policy for detailed information.'
      }
    ],
    dentists: [
      {
        id: 'dentists-1',
        question: 'How do I join Replace Roots as a dentist?',
        answer: 'Joining Replace Roots is simple. Visit our "For Dentists" page and click "Join as Dentist." You\'ll need to provide your credentials, implant experience, and practice information. Our team will review your application and verify your qualifications before activating your profile.'
      },
      {
        id: 'dentists-2',
        question: 'What are the pricing plans for dentists?',
        answer: 'We offer three main pricing plans: Basic, Standard, and Premium. Each plan includes different numbers of verified leads per month, profile features, and support levels. You can view detailed pricing and features on our Pricing page, and we offer a lead guarantee with all plans.'
      },
      {
        id: 'dentists-3',
        question: 'How do you guarantee lead quality?',
        answer: 'Our lead guarantee ensures that if a patient doesn\'t schedule a consultation within 30 days of being connected, we\'ll provide a replacement lead at no additional cost. We also offer detailed lead analytics and feedback to help you optimize your conversion rates.'
      },
      {
        id: 'dentists-4',
        question: 'Can I showcase my case studies and before/after photos?',
        answer: 'Yes! Premium plan members can upload unlimited case studies with before/after photos, detailed treatment descriptions, and patient testimonials. This helps build trust with potential patients and showcases your expertise in specific implant procedures.'
      },
      {
        id: 'dentists-5',
        question: 'How do I optimize my profile for better patient engagement?',
        answer: 'To optimize your profile, ensure you have complete information including your credentials, experience, specializations, and high-quality photos. Regularly update your case studies, respond quickly to patient inquiries, and maintain positive patient reviews. Our team can provide personalized optimization tips.'
      },
      {
        id: 'dentists-6',
        question: 'What support do you provide for dentists?',
        answer: 'We provide comprehensive support including profile optimization, lead management tools, marketing resources, and dedicated account management for Premium members. We also offer educational content, webinars, and best practices to help you grow your implant practice.'
      }
    ],
    patients: [
      {
        id: 'patients-1',
        question: 'How do I find a qualified implant specialist?',
        answer: 'You can search for specialists by location, read their detailed profiles, view case studies, and check patient reviews. Our platform only features qualified implant specialists who have been verified for their credentials and experience. You can also filter by specific procedures or specializations.'
      },
      {
        id: 'patients-2',
        question: 'What information should I provide when submitting an inquiry?',
        answer: 'When submitting an inquiry, include your current dental situation, any previous treatments, your timeline for getting implants, and any specific concerns or questions. The more detailed information you provide, the better we can match you with the right specialist.'
      },
      {
        id: 'patients-3',
        question: 'How much do dental implants cost?',
        answer: 'Dental implant costs vary based on the number of implants needed, complexity of the case, and your location. Single implants typically range from $3,000 to $6,000, while full arch restoration can cost $20,000 to $40,000. Most specialists offer financing options and payment plans.'
      },
      {
        id: 'patients-4',
        question: 'Does insurance cover dental implants?',
        answer: 'Dental insurance coverage for implants varies by plan. Some plans cover a portion of implant costs, while others may not cover implants at all. We recommend checking with your insurance provider and discussing financing options with your chosen specialist.'
      },
      {
        id: 'patients-5',
        question: 'How long does the implant process take?',
        answer: 'The complete implant process typically takes 3-6 months, depending on your specific case. This includes consultation, treatment planning, implant placement, healing period (osseointegration), and final restoration. Some cases may require additional procedures like bone grafting.'
      },
      {
        id: 'patients-6',
        question: 'What should I expect during the consultation?',
        answer: 'During your consultation, the specialist will examine your oral health, take X-rays or 3D scans, discuss your treatment options, explain the process and timeline, and provide a cost estimate. This is also your opportunity to ask questions and ensure you\'re comfortable with the specialist.'
      },
      {
        id: 'patients-7',
        question: 'How do I know if I\'m a good candidate for implants?',
        answer: 'Good candidates for implants generally have good overall health, adequate bone density, healthy gums, and are committed to maintaining good oral hygiene. Your specialist will evaluate these factors during your consultation and may recommend additional procedures if needed.'
      }
    ]
  };

  const currentFAQs = faqs[activeCategory];

  return (
    <Layout
      title="FAQs - Dental Implant Questions & Answers | ReplaceRoot"
      description="Find answers to frequently asked questions about dental implants, our platform, and how we connect patients with qualified implant specialists."
      keywords={['dental implant FAQs', 'implant questions', 'dental implant answers', 'implant specialist questions', 'dental platform FAQs', 'ReplaceRoot']}
      canonical="/faqs"
      og={{
        title: "FAQs - Dental Implant Questions & Answers",
        description: "Find answers to frequently asked questions about dental implants, our platform, and how we connect patients with qualified implant specialists.",
        type: 'website',
        image: "https://replaceroot.com/images/faqs-hero.jpg",
        site_name: "ReplaceRoot"
      }}
      twitter={{ card: 'summary_large_image' }}
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        name: 'FAQs - Dental Implant Questions & Answers',
        description: 'Find answers to frequently asked questions about dental implants, our platform, and how we connect patients with qualified implant specialists.',
        url: 'https://replaceroot.com/faqs',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is Replace Roots?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Replace Roots is a specialized platform that connects dental implant patients with qualified implant specialists.'
            }
          }
        ]
      }}
    >
    <div className="bg-gray-50 min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-40 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-br from-white to-cyan-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-gradient-to-br from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-gradient-to-tl from-teal-200/10 to-cyan-200/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-700 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <i className="fa-solid fa-question-circle mr-2"></i>
              Frequently Asked Questions
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-gray-800">
              Get Your <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Answers</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto">
              Find answers to common questions about dental implants, our platform, and how we connect patients with qualified specialists.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button 
                onClick={() => setActiveCategory('general')}
                className={`px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg transition-all duration-300 ${
                  activeCategory === 'general'
                    ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg'
                    : 'bg-white border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-50'
                }`}
              >
                General FAQs
              </button>
              <button 
                onClick={() => setActiveCategory('dentists')}
                className={`px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg transition-all duration-300 ${
                  activeCategory === 'dentists'
                    ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg'
                    : 'bg-white border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-50'
                }`}
              >
                For Dentists
              </button>
              <button 
                onClick={() => setActiveCategory('patients')}
                className={`px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg transition-all duration-300 ${
                  activeCategory === 'patients'
                    ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg'
                    : 'bg-white border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-50'
                }`}
              >
                For Patients
              </button>
            </div>
          </div>
        </div>
      </section>



      {/* FAQs Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
                {categories.find(cat => cat.id === activeCategory)?.name}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600">
                Find answers to the most common questions about {activeCategory === 'general' ? 'our platform' : activeCategory === 'dentists' ? 'joining as a dentist' : 'finding a specialist'}.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {currentFAQs.map((faq) => (
                <div key={faq.id} className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                  >
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 pr-3 sm:pr-4">
                      {faq.question}
                    </h3>
                    <div className={`w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center transition-transform duration-300 ${
                      openItems[faq.id] ? 'rotate-180' : ''
                    }`}>
                      <i className="fa-solid fa-chevron-down text-cyan-600"></i>
                    </div>
                  </button>
                  
                  {openItems[faq.id] && (
                    <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-5 md:pb-6">
                      <div className="border-t border-gray-200 pt-4 sm:pt-5 md:pt-6">
                        <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-cyan-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              Still Have <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Questions?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our support team is here to help you get the information you need.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a 
                href="mailto:support@replaceroots.com"
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 shadow-lg"
              >
                <i className="fa-solid fa-envelope mr-2"></i>
                Email Support
              </a>
              <a 
                href="/contact"
                className="bg-white border-2 border-cyan-500 text-cyan-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:bg-cyan-50 transition-all duration-300"
              >
                <i className="fa-solid fa-phone mr-2"></i>
                Contact Us
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

export default FAQsPage;
