const WhyChooseAmaravati = () => {
  const features = [
    {
      icon: 'fa-bullseye',
      title: 'Only Implants Oriented Approach',
      description: 'Our purpose-designed and custom-built clinic in Amaravati lets us provide you acme resources Implants in pleasant, comfortable surroundings.'
    },
    {
      icon: 'fa-user-md',
      title: 'Most Implant Experts',
      description: 'All of the dentists at Replace Roots in Amaravati are devoted about their work and are committed to delivering you premium-quality dentistry.'
    },
    {
      icon: 'fa-map-marker-alt',
      title: 'Centrally Located',
      description: 'Find us quickly and easily. Replace Roots, is in the centre of Amaravati in the Intense city Area, within walking distance of near bus stop and other public transports.'
    },
    {
      icon: 'fa-clock',
      title: 'Flexible Opening Hours',
      description: 'We are open six days a week, starting at 9:00 am each morning. We also offer late evening dates if you prefer to attend after work.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="relative mb-16 flex justify-center">
            <h2 className="text-4xl font-semibold text-gray-800 pb-3 relative text-center">
              Why Amaravati for Dental Implants?
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-teal-400 rounded"></span>
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 translate-x-14 w-2 h-2 border-2 border-teal-400 rounded-full bg-white"></span>
            </h2>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <i className={`fa-solid ${feature.icon} text-4xl text-teal-500`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseAmaravati;
