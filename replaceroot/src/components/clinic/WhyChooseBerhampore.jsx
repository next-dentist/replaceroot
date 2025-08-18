const WhyChooseBerhampore = () => {
  const features = [
    {
      icon: 'fa-bullseye',
      title: 'Only Implants Oriented Approach',
      description: 'Our purpose-designed and custom-built clinic in Berhampore lets us provide you acme attachments Implants in pleasant, comfortable surroundings.'
    },
    {
      icon: 'fa-user-md',
      title: 'Most qualified Implant Experts',
      description: 'All of the dentists at Replace Roots in Berhampore are passionate about their work and are committed to delivering you premium-quality dentistry.'
    },
    {
      icon: 'fa-map-marker-alt',
      title: 'Centrally Located',
      description: 'Find us quickly and easily. Replace Roots, is in the middle of Berhampore in the intense city Area, within walking distance of near bus stop and other public transports.'
    },
    {
      icon: 'fa-clock',
      title: 'Flexible Opening Hours',
      description: 'We are open six days a week, starting at 9:00 am each morning. We also offer late evening dates if you prefer to attend after work.'
    },
    {
      icon: 'fa-microscope',
      title: 'Latest Technology',
      description: 'We use the latest technology to provide your care, including digital imaging for picture-taking, X-Ray, and teeth shade range.'
    },
    {
      icon: 'fa-mobile-alt',
      title: 'SMS and Email Appointment Reminders',
      description: "We like to remind you about your dental dates via SMS and Email except, of course, you'd favor receiving a message or telephone call from us."
    },
    {
      icon: 'fa-shield-virus',
      title: 'Sterilization and hygiene',
      description: 'Are of paramount importance at Replace Roots, Berhampore. We are beset with cleanliness, have a dedicated decontamination room, and follow rigorous guidelines to ensure patient safety.'
    },
    {
      icon: 'fa-users',
      title: 'Helpful Staff',
      description: 'Our patients are our highest priority and we hope to win your trust and confidence.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="relative mb-16 flex justify-center">
            <h2 className="text-4xl font-semibold text-gray-800 pb-3 relative text-center">
              Why Berhampore for Dental Implants?
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

export default WhyChooseBerhampore;
