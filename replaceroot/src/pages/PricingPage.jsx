import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer, PricingSection } from '../components';
import Layout from '../components/Layout';

const PricingPage = () => {


  const guaranteeFeatures = [
    {
      icon: "fa-check-circle",
      title: "Lead Quality Guarantee",
      description: "We guarantee that all leads meet our strict quality standards. If a lead doesn't meet our criteria, we'll replace it at no cost."
    },
    {
      icon: "fa-clock",
      title: "Response Time Guarantee",
      description: "We guarantee leads will be delivered within 24 hours of qualification. If not, you get an additional lead as compensation."
    },
    {
      icon: "fa-chart-line",
      title: "Conversion Rate Guarantee",
      description: "If your conversion rate drops below our guaranteed minimum, we'll provide additional leads until you reach the target rate."
    },
    {
      icon: "fa-handshake",
      title: "Satisfaction Guarantee",
      description: "30-day money-back guarantee. If you're not satisfied with our service, we'll refund your payment in full."
    }
  ];

  const comparisonFeatures = [
    {
      feature: "Price (per year)",
      starter: "₹9,999",
      growth: "₹19,999",
      unlimited: "₹39,999"
    },
    {
      feature: "Patient Leads per Month",
      starter: "10",
      growth: "30",
      unlimited: "Unlimited"
    },
    {
      feature: "Total Leads per Year",
      starter: "120",
      growth: "360",
      unlimited: "Unlimited"
    },
    {
      feature: "Key Features",
      starter: "Ideal for practices launching implant services or with limited capacity; steady lead flow to build initial momentum.",
      growth: "For expanding clinics; higher lead volume to increase consultations and conversions.",
      unlimited: "Best for high-volume or multi-location practices; maximize patient acquisition with no lead cap."
    }
  ];

  const faqs = [
    {
      question: "What's included in the lead guarantee?",
      answer: "Our lead guarantee ensures that all leads meet our quality standards. If a lead doesn't qualify, we'll replace it at no cost. We also guarantee response times and conversion rates."
    },
    {
      question: "Can I switch between billing cycles?",
      answer: "Yes, you can switch between monthly and yearly billing at any time. Yearly plans offer a 17% discount compared to monthly billing."
    },
    {
      question: "What happens if I exceed my lead limit?",
      answer: "For Starter and Growth plans, you can purchase additional leads at a discounted rate. Unlimited plans include unlimited leads with no cap."
    },
    {
      question: "Is there a setup fee?",
      answer: "No setup fees for any plan. You only pay the monthly or yearly subscription fee."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. We offer a 30-day money-back guarantee if you're not satisfied."
    },
    {
      question: "Do you offer custom plans for large practices?",
      answer: "Yes, we offer custom enterprise solutions for large practices and dental chains. Contact our sales team for a personalized quote."
    }
  ];

  return (
    <Layout
      title="Pricing Plans - Dental Implant Lead Generation | ReplaceRoot"
      description="Choose from flexible pricing plans for dental implant lead generation. Start with what you need and scale as you grow with our comprehensive lead guarantee."
      keywords={['dental implant pricing', 'implant lead generation', 'dental practice growth', 'lead generation plans', 'implant marketing', 'dental leads', 'ReplaceRoot']}
      canonical="/pricing"
      og={{
        title: "Pricing Plans - Dental Implant Lead Generation",
        description: "Choose from flexible pricing plans for dental implant lead generation. Start with what you need and scale as you grow.",
        type: 'website',
        image: "https://replaceroot.com/images/pricing-hero.jpg",
        site_name: "ReplaceRoot"
      }}
      twitter={{ card: 'summary_large_image' }}
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Pricing Plans - Dental Implant Lead Generation',
        description: 'Choose from flexible pricing plans for dental implant lead generation. Start with what you need and scale as you grow with our comprehensive lead guarantee.',
        url: 'https://replaceroot.com/pricing',
        mainEntity: {
          '@type': 'Service',
          name: 'Dental Implant Lead Generation Pricing',
          provider: {
            '@type': 'Organization',
            name: 'ReplaceRoot'
          },
          description: 'Flexible pricing plans for dental implant lead generation'
        }
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
              <i className="fa-solid fa-tags mr-2"></i>
              Pricing & Plans
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-gray-800">
              Choose Your <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Growth Plan</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto">
              Flexible pricing plans designed to grow with your practice. All plans include our comprehensive lead guarantee.
            </p>

            
          </div>
        </div>
      </section>

            {/* Pricing Plans */}
      <PricingSection 
        title="Choose Your Plan"
        subtitle="Start with what you need and scale as you grow. All plans include our comprehensive lead guarantee."
      />

      {/* Features Comparison */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              Detailed <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Features Comparison</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Compare all features across our plans to find the perfect fit for your practice
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-4 bg-gray-50 p-4 sm:p-6 border-b border-gray-200">
                <div className="font-bold text-gray-800 text-sm sm:text-base">Features</div>
                <div className="text-center font-bold text-gray-800 text-sm sm:text-base">Starter</div>
                <div className="text-center font-bold text-gray-800 text-sm sm:text-base">Growth</div>
                <div className="text-center font-bold text-gray-800 text-sm sm:text-base">Unlimited</div>
              </div>

              {/* Features */}
              {comparisonFeatures.map((feature, index) => (
                <div key={index} className={`grid grid-cols-4 p-4 sm:p-6 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                  <div className="font-semibold text-gray-800 text-sm sm:text-base">{feature.feature}</div>
                  <div className="text-center text-gray-600 text-sm sm:text-base">{feature.starter}</div>
                  <div className="text-center text-gray-600 text-sm sm:text-base">{feature.growth}</div>
                  <div className="text-center text-gray-600 text-sm sm:text-base">{feature.unlimited}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lead Guarantee Policy */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              Our <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Lead Guarantee Policy</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We stand behind the quality of our leads with comprehensive guarantees
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {guaranteeFeatures.map((guarantee, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center group hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`fa-solid ${guarantee.icon} text-white text-lg sm:text-xl md:text-2xl`}></i>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">{guarantee.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{guarantee.description}</p>
              </div>
            ))}
          </div>

          {/* Guarantee Details */}
          <div className="mt-12 sm:mt-16 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-50 to-teal-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-cyan-200">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">How Our Guarantee Works</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <h4 className="font-bold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">Quality Standards</h4>
                  <ul className="space-y-1 sm:space-y-2 text-gray-600 text-sm sm:text-base">
                    <li>• Pre-screened patients with verified contact information</li>
                    <li>• Confirmed treatment needs and budget</li>
                    <li>• Appointment readiness verification</li>
                    <li>• Geographic location validation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">Compensation Process</h4>
                  <ul className="space-y-1 sm:space-y-2 text-gray-600 text-sm sm:text-base">
                    <li>• Automatic lead replacement for quality issues</li>
                    <li>• Additional leads for response time delays</li>
                    <li>• Performance-based compensation adjustments</li>
                    <li>• 30-day money-back guarantee</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about our pricing and guarantees
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
                  <i className="fa-solid fa-question-circle text-cyan-500 mr-2 sm:mr-3 text-sm sm:text-base"></i>
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 sm:mt-12">
            <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Still have questions about our pricing?</p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-lg sm:rounded-xl font-bold hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 text-sm sm:text-base"
            >
              <i className="fa-solid fa-envelope mr-2"></i>
              Contact Our Sales Team
            </Link>
          </div>
        </div>
      </section>

                     <Footer />
      </div>
    </Layout>
  );
};

export default PricingPage;
