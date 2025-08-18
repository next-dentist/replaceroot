const WhyChooseUs = () => {
  const patientBenefits = [
    'Dental Implant Experts All Across India',
    'Easy to Find Clinic',
    'One Standard Price to All Clinics',
    'Helpful Staff',
    'Specialized only in Dental Implants',
    '24 x 7 Supports'
  ];

  const dentistBenefits = [
    'Experts in Only Dental Implants',
    'Strict Protocols',
    'High Quality Implant and Bone Materials',
    'Latest Technology and Techniques',
    'Value for Money',
    'Reputation'
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-primary-light">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
          <div className="text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">Why Patients Choose Us</h3>
            <ul className="space-y-3 sm:space-y-4 text-text-medium">
              {patientBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start sm:items-center">
                  <i className="fa-solid fa-check-circle text-primary-accent mr-3 text-lg sm:text-xl flex-shrink-0 mt-0.5 sm:mt-0"></i>
                  <span className="text-sm sm:text-base">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">Why Dentists Partner With Us</h3>
            <ul className="space-y-3 sm:space-y-4 text-text-medium">
              {dentistBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start sm:items-center">
                  <i className="fa-solid fa-check-circle text-primary-accent mr-3 text-lg sm:text-xl flex-shrink-0 mt-0.5 sm:mt-0"></i>
                  <span className="text-sm sm:text-base">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="text-center mt-12 sm:mt-16 md:mt-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Join Replace Roots Today</h3>
          <a 
            href="#" 
            className="bg-primary-accent text-primary-dark px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-primary-accent/90 transition-all duration-300 shadow-lg shadow-primary-accent/30 transform hover:scale-105 inline-block"
          >
            Join Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
