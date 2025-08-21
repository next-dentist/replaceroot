const Testimonials = () => {
  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      location: 'New York, USA',
      image: '/images/testimonial-1.jpg',
      quote: 'Replace Roots transformed my implant practice. The quality of leads is exceptional, and I\'ve seen a 300% increase in my implant cases within 6 months.',
      rating: 5
    },
    {
      name: 'Dr. Rajesh Kumar',
      location: 'Mumbai, India',
      image: '/images/testimonial-2.jpg',
      quote: 'The platform is incredibly user-friendly and the patient leads are highly qualified. My practice has grown significantly since joining Replace Roots.',
      rating: 5
    },
    {
      name: 'Dr. Maria Rodriguez',
      location: 'Barcelona, Spain',
      image: '/images/testimonial-3.jpg',
      quote: 'As a specialist in All-on-4 implants, I needed a platform that understood my niche. Replace Roots delivers exactly the right patients for my practice.',
      rating: 5
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-bl from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-tr from-teal-200/10 to-cyan-200/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-700 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <i className="fa-solid fa-quote-left mr-2"></i>
            Success Stories
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
            What Our <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Dentists Say</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Real testimonials from implant specialists who have grown their practice with Replace Roots
          </p>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg mr-4">
                    <i className="fa-solid fa-user text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                    <div className="flex items-center mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i key={i} className="fa-solid fa-star text-yellow-400 text-sm"></i>
                      ))}
                    </div>
                  </div>
                </div>
                
                <blockquote className="text-gray-600 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-cyan-600">
                    <i className="fa-solid fa-chart-line"></i>
                    <span className="text-sm font-medium">Practice Growth</span>
                  </div>
                  <i className="fa-solid fa-quote-right text-cyan-200 text-2xl"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 sm:mt-16">
          <a 
            href="/case-studies" 
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-lg sm:text-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 space-x-3"
          >
            <i className="fa-solid fa-book-open text-xl"></i>
            <span>Read More Case Studies</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
