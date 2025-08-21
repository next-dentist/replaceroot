const FeatureSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-bl from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-tr from-teal-200/10 to-cyan-200/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 space-y-16 sm:space-y-20 md:space-y-28 relative z-10">
        {/* Expertise and Experience */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-700 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <i className="fa-solid fa-star mr-2"></i>
              Expertise
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
              Expertise and <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
              Replace Roots boasts a team of dental implant experts with years of experience, using the latest techniques and technologies to ensure patients receive the best possible care.
            </p>
            <a 
              href="#" 
              className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-block text-sm sm:text-base"
            >
              Explore Our Experts
            </a>
          </div>
          <div className="group">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <img 
                src="http://googleusercontent.com/file_content/3" 
                alt="Expertise illustration" 
                className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* High-Quality Treatment */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          <div className="md:order-2 text-center md:text-left">
            <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-700 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <i className="fa-solid fa-award mr-2"></i>
              Quality
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
              High-Quality <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Treatment</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
              Our focus is on top-notch treatment without compromise. We use only the best materials and follow strict sterilization protocols for a safe, hygienic, and effective experience.
            </p>
            <a 
              href="#" 
              className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-block text-sm sm:text-base"
            >
              Learn About Quality
            </a>
          </div>
          <div className="md:order-1 group">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <img 
                src="http://googleusercontent.com/file_content/4" 
                alt="Treatment illustration" 
                className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
