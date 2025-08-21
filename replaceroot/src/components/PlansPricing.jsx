const PlansPricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$299',
      period: '/month',
      features: [
        'Up to 50 leads per month',
        'Basic lead filtering',
        'Email support',
        'Standard reporting'
      ],
      popular: false
    },
    {
      name: 'Standard',
      price: '$599',
      period: '/month',
      features: [
        'Up to 150 leads per month',
        'Advanced lead filtering',
        'Priority support',
        'Detailed analytics',
        'Custom lead scoring'
      ],
      popular: true
    },
    {
      name: 'Premium',
      price: '$999',
      period: '/month',
      features: [
        'Unlimited leads',
        'Premium lead filtering',
        'Dedicated account manager',
        'Advanced analytics',
        'Custom integrations',
        'White-label options'
      ],
      popular: false
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-br from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-tl from-teal-200/10 to-cyan-200/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-700 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <i className="fa-solid fa-tags mr-2"></i>
            Plans & Pricing
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
            Choose Your <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Growth Plan</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Flexible pricing plans designed to scale with your practice growth
          </p>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`relative group ${plan.popular ? 'md:-mt-4' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Most Popular
                </div>
              )}
              <div className={`bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 h-full ${
                plan.popular ? 'border-cyan-500' : 'border-gray-100'
              }`}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl sm:text-5xl font-bold text-gray-800">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <i className="fa-solid fa-check text-cyan-500 mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white shadow-lg hover:shadow-xl' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}>
                  Choose {plan.name}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 sm:mt-16">
          <a 
            href="/pricing" 
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-lg sm:text-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 space-x-3"
          >
            <i className="fa-solid fa-list text-xl"></i>
            <span>See Full Pricing</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PlansPricing;
