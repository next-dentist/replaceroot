import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer } from '../components';
import Layout from '../components/Layout';

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: "Basic",
      monthlyPrice: "₹9,999",
      yearlyPrice: "₹99,999",
      period: billingCycle === 'monthly' ? "per month" : "per year",
      description: "Perfect for new practices looking to establish their implant business",
      features: [
        "Up to 20 qualified leads per month",
        "Basic lead management dashboard",
        "Email support",
        "Patient verification included",
        "Basic analytics",
        "Mobile app access",
        "Standard lead criteria",
        "Monthly performance report"
      ],
      popular: false,
      cta: "Start Free Trial",
      savings: billingCycle === 'yearly' ? "Save 17%" : null
    },
    {
      name: "Standard",
      monthlyPrice: "₹19,999",
      yearlyPrice: "₹199,999",
      period: billingCycle === 'monthly' ? "per month" : "per year",
      description: "Ideal for established practices wanting to scale their implant services",
      features: [
        "Up to 50 qualified leads per month",
        "Advanced lead management system",
        "Priority phone & email support",
        "Patient verification & screening",
        "Detailed analytics & reporting",
        "Custom lead criteria",
        "Dedicated account manager",
        "Marketing materials & templates",
        "Advanced filtering options",
        "Weekly performance reports",
        "Lead quality scoring",
        "Integration with practice management"
      ],
      popular: true,
      cta: "Get Started",
      savings: billingCycle === 'yearly' ? "Save 17%" : null
    },
    {
      name: "Premium",
      monthlyPrice: "₹39,999",
      yearlyPrice: "₹399,999",
      period: billingCycle === 'monthly' ? "per month" : "per year",
      description: "For large practices and dental chains with high-volume implant needs",
      features: [
        "Unlimited qualified leads",
        "Full-featured lead management",
        "24/7 priority support",
        "Complete patient verification",
        "Advanced analytics & insights",
        "Custom integrations",
        "Dedicated success manager",
        "White-label solutions",
        "API access",
        "Custom training sessions",
        "Multi-location support",
        "Advanced reporting suite",
        "Priority lead allocation",
        "Custom development support"
      ],
      popular: false,
      cta: "Contact Sales",
      savings: billingCycle === 'yearly' ? "Save 17%" : null
    }
  ];

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
      feature: "Qualified Leads per Month",
      basic: "Up to 20",
      standard: "Up to 50",
      premium: "Unlimited"
    },
    {
      feature: "Lead Management Dashboard",
      basic: "Basic",
      standard: "Advanced",
      premium: "Full-featured"
    },
    {
      feature: "Support",
      basic: "Email",
      standard: "Phone & Email",
      premium: "24/7 Priority"
    },
    {
      feature: "Patient Verification",
      basic: "Included",
      standard: "Enhanced",
      premium: "Complete"
    },
    {
      feature: "Analytics & Reporting",
      basic: "Basic",
      standard: "Detailed",
      premium: "Advanced Suite"
    },
    {
      feature: "Custom Lead Criteria",
      basic: "Standard",
      standard: "Custom",
      premium: "Advanced"
    },
    {
      feature: "Account Management",
      basic: "Self-service",
      standard: "Dedicated Manager",
      premium: "Success Manager"
    },
    {
      feature: "API Access",
      basic: "No",
      standard: "No",
      premium: "Yes"
    },
    {
      feature: "White-label Solutions",
      basic: "No",
      standard: "No",
      premium: "Yes"
    },
    {
      feature: "Custom Training",
      basic: "No",
      standard: "No",
      premium: "Yes"
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
      answer: "For Basic and Standard plans, you can purchase additional leads at a discounted rate. Premium plans include unlimited leads."
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

            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-6 sm:mb-8">
              <span className={`mr-3 sm:mr-4 text-base sm:text-lg font-medium ${billingCycle === 'monthly' ? 'text-gray-800' : 'text-gray-500'}`}>Monthly</span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative inline-flex h-7 sm:h-8 w-14 sm:w-16 items-center rounded-full transition-colors duration-300 ${
                  billingCycle === 'yearly' ? 'bg-gradient-to-r from-cyan-500 to-teal-500' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-5 sm:h-6 w-5 sm:w-6 transform rounded-full bg-white transition-transform duration-300 ${
                    billingCycle === 'yearly' ? 'translate-x-8 sm:translate-x-9' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`ml-3 sm:ml-4 text-base sm:text-lg font-medium ${billingCycle === 'yearly' ? 'text-gray-800' : 'text-gray-500'}`}>
                Yearly
                {billingCycle === 'yearly' && <span className="ml-1 sm:ml-2 text-xs sm:text-sm text-cyan-600 font-bold">Save 17%</span>}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              Choose Your <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Plan</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Start with what you need and scale as you grow. All plans include our comprehensive lead guarantee.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border-2 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 ${
                plan.popular ? 'border-cyan-500' : 'border-gray-100'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                {plan.savings && (
                  <div className="absolute -top-3 sm:-top-4 right-3 sm:right-4">
                    <span className="bg-green-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-bold">
                      {plan.savings}
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                  <div className="mb-3 sm:mb-4">
                    <span className="text-3xl sm:text-4xl font-bold text-gray-800">
                      {billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    <span className="text-gray-600 text-sm sm:text-base">/{plan.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <i className="fa-solid fa-check text-cyan-500 mr-2 sm:mr-3 text-sm sm:text-base"></i>
                      <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white hover:from-cyan-600 hover:to-teal-600'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                <div className="text-center font-bold text-gray-800 text-sm sm:text-base">Basic</div>
                <div className="text-center font-bold text-gray-800 text-sm sm:text-base">Standard</div>
                <div className="text-center font-bold text-gray-800 text-sm sm:text-base">Premium</div>
              </div>

              {/* Features */}
              {comparisonFeatures.map((feature, index) => (
                <div key={index} className={`grid grid-cols-4 p-4 sm:p-6 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                  <div className="font-semibold text-gray-800 text-sm sm:text-base">{feature.feature}</div>
                  <div className="text-center text-gray-600 text-sm sm:text-base">{feature.basic}</div>
                  <div className="text-center text-gray-600 text-sm sm:text-base">{feature.standard}</div>
                  <div className="text-center text-gray-600 text-sm sm:text-base">{feature.premium}</div>
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
