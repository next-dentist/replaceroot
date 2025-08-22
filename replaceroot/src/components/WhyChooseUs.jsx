const WhyChooseUs = () => {
  const uspHighlights = [
    {
      icon: 'fa-check-circle',
      title: 'Verified Implant Leads',
      description: 'All patient leads are pre-screened and verified for quality and intent, ensuring you receive genuine implant inquiries.'
    },
    {
      icon: 'fa-globe',
      title: 'Global Patient Reach',
      description: 'Access patients from around the world seeking dental implant treatments, expanding your practice reach globally.'
    },
    {
      icon: 'fa-user-md',
      title: '100% Dentist-Focused Platform',
      description: 'Built specifically for implant dentists, with features and tools designed to maximize your practice growth.'
    },
    {
      icon: 'fa-chart-line',
      title: 'Proven Growth Results',
      description: 'Join hundreds of successful dentists who have grown their implant practice through our proven lead generation system.'
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-br from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-tl from-teal-200/10 to-cyan-200/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-700 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <i className="fa-solid fa-star mr-2"></i>
            Why Choose Replace Roots
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
            Our <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Unique Advantages</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover why leading implant dentists choose Replace Roots for their practice growth
          </p>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {uspHighlights.map((highlight, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 h-full">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <i className={`fa-solid ${highlight.icon} text-white text-2xl`}></i>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 leading-tight group-hover:text-cyan-600 transition-colors text-center">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors text-center">
                  {highlight.description}
                </p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full mx-auto"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl p-8 sm:p-10 text-white shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Ready to Grow Your Implant Practice?</h3>
            <p className="text-cyan-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Join hundreds of successful dentists who trust Replace Roots for their lead generation and practice growth.
            </p>
            <a 
              href="/join-us" 
              className="bg-white text-cyan-600 px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg transform hover:-translate-y-1 inline-block"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
