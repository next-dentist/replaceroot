const FinalFeatures = () => {
  const features = [
    'Most Trusted Clinics',
    'Full Jaw Rehabilitation',
    'Fix All Teeth in 3 Days',
    'Recommended by Dentists',
    'Multiple Implants Options',
    'Same Day Implants'
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-primary-dark border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 gap-y-3 sm:gap-y-4 text-text-medium">
          {features.map((feature, index) => (
            <p key={index} className="flex items-start sm:items-center">
              <i className="fa-solid fa-shield-halved text-primary-accent mr-2 sm:mr-3 flex-shrink-0 mt-0.5 sm:mt-0 text-sm sm:text-base"></i>
              <span className="text-xs sm:text-sm md:text-base">{feature}</span>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinalFeatures;
