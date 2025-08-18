const FeatureSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-primary-dark">
      <div className="container mx-auto px-4 space-y-16 sm:space-y-20 md:space-y-28">
        {/* Expertise and Experience */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">Expertise and Experience</h2>
            <p className="text-text-medium leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
              Replace Roots boasts a team of dental implant experts with years of experience, using the latest techniques and technologies to ensure patients receive the best possible care.
            </p>
            <a 
              href="#" 
              className="bg-primary-accent text-primary-dark px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-primary-accent/90 transition-all duration-300 shadow-lg shadow-primary-accent/20 inline-block text-sm sm:text-base"
            >
              Explore Our Experts
            </a>
          </div>
          <div>
            <img 
              src="http://googleusercontent.com/file_content/3" 
              alt="Expertise illustration" 
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>

        {/* High-Quality Treatment */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          <div className="md:order-2 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">High-Quality Treatment</h2>
            <p className="text-text-medium leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
              Our focus is on top-notch treatment without compromise. We use only the best materials and follow strict sterilization protocols for a safe, hygienic, and effective experience.
            </p>
            <a 
              href="#" 
              className="bg-primary-accent text-primary-dark px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-primary-accent/90 transition-all duration-300 shadow-lg shadow-primary-accent/20 inline-block text-sm sm:text-base"
            >
              Learn About Quality
            </a>
          </div>
          <div className="md:order-1">
            <img 
              src="http://googleusercontent.com/file_content/4" 
              alt="Treatment illustration" 
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
