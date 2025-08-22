const QuickOverview = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-br from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-tl from-teal-200/10 to-cyan-200/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-700 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <i className="fa-solid fa-globe mr-2"></i>
            About Replace Roots
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 sm:mb-8">
            Connecting <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Implant Patients</span> with Verified Dentists Globally
          </h2>
          
          <div className="space-y-4 sm:space-y-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
            <p>
              Replace Roots is a trusted global platform that connects patients seeking dental implant treatments with verified, experienced implant specialists worldwide.
            </p>
            <p>
              We focus on building trust through verified leads, ensuring quality care, and providing global reach for both patients and dentists in the dental implant industry.
            </p>
            <p>
              Our platform serves as the bridge between patients looking for reliable implant solutions and dentists seeking high-quality patient leads to grow their practice.
            </p>
          </div>
          
          <div className="mt-8 sm:mt-12 flex flex-row gap-2 sm:gap-4 justify-center items-center">
            <div className="flex items-center space-x-2 text-cyan-600">
              <i className="fa-solid fa-shield-check text-lg sm:text-xl"></i>
              <span className="font-semibold text-sm sm:text-base">Verified Leads</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center space-x-2 text-cyan-600">
              <i className="fa-solid fa-globe text-lg sm:text-xl"></i>
              <span className="font-semibold text-sm sm:text-base">Global Reach</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center space-x-2 text-cyan-600">
              <i className="fa-solid fa-star text-lg sm:text-xl"></i>
              <span className="font-semibold text-sm sm:text-base">Quality Care</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickOverview;
