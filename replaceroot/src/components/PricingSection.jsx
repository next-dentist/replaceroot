import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PricingFormModal from './PricingFormModal';

const PricingSection = ({ title = "Choose Your Plan", subtitle = "Start with what you need and scale as you grow. All plans include our comprehensive lead guarantee." }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('Growth');

  const handleGetStarted = (planName) => {
    setSelectedPlan(planName);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const plans = [
    {
      name: "Starter",
      price: "₹9,999",
      period: "per year",
      description: "Ideal for practices launching implant services or with limited capacity; steady lead flow to build initial momentum.",
      leadsPerMonth: "10",
      totalLeadsPerYear: "120",
      popular: false,
      cta: "Get Started"
    },
    {
      name: "Growth",
      price: "₹19,999",
      period: "per year",
      description: "For expanding clinics; higher lead volume to increase consultations and conversions.",
      leadsPerMonth: "30",
      totalLeadsPerYear: "360",
      popular: true,
      cta: "Get Started"
    },
    {
      name: "Unlimited",
      price: "₹39,999",
      period: "per year",
      description: "Best for high-volume or multi-location practices; maximize patient acquisition with no lead cap.",
      leadsPerMonth: "Unlimited",
      totalLeadsPerYear: "Unlimited",
      popular: false,
      cta: "Get Started"
    }
  ];

  return (
    <>
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              {title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              {subtitle}
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
                      {plan.price}
                    </span>
                    <span className="text-gray-600 text-sm sm:text-base">/{plan.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base">{plan.description}</p>
                </div>
                
                <div className="mb-6 sm:mb-8">
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-gray-800 mb-2">
                      {plan.leadsPerMonth}
                    </div>
                    <div className="text-gray-600 text-sm">Patient Leads per Month</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-800 mb-2">
                      {plan.totalLeadsPerYear}
                    </div>
                    <div className="text-gray-600 text-sm">Total Leads per Year</div>
                  </div>
                </div>
                
                <button 
                  onClick={() => handleGetStarted(plan.name)}
                  className={`w-full py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg transition-all duration-300 ${
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

      {/* Pricing Form Modal */}
      <PricingFormModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        selectedPlan={selectedPlan}
      />
    </>
  );
};

export default PricingSection;
