import { useState } from 'react';

const Hero = () => {
  return (
    <section className="relative pt-40 sm:pt-32 md:pt-36 pb-16 sm:pb-24 md:pb-32 min-h-screen bg-gradient-to-br from-gray-50 via-white to-cyan-50 overflow-hidden">
      {/* Background Image with enhanced overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: `url('/images/homepage.webp')`
        }}
      ></div>
      
      {/* Enhanced overlay with better gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/70 to-cyan-50/60"></div>
      
      {/* Enhanced decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-cyan-200/40 to-teal-200/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-tl from-teal-200/30 to-cyan-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-100/20 to-teal-100/20 rounded-full blur-3xl"></div>
      
      <div className="relative container mx-auto px-4 text-center z-10">
        {/* Enhanced Badge */}
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-700 rounded-full text-sm font-semibold shadow-xl border border-cyan-200/50 mb-8 animate-fade-in-up">
          <i className="fa-solid fa-globe mr-3 text-lg"></i>
          Global Platform for Dental Implants
        </div>

        {/* Enhanced Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 md:mb-10 leading-tight text-gray-800 animate-fade-in-up delay-200">
          Global Dental Implant 
          <span className="block bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent animate-gradient">
            Lead Network
          </span>
        </h1>
        
        {/* Enhanced Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8 sm:mb-12 md:mb-16 max-w-4xl mx-auto px-4 font-medium leading-relaxed animate-fade-in-up delay-400">
          Connecting Patients with 
          <span className="text-cyan-600 font-bold"> Trusted Implant Dentists</span>
        </p>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12 max-w-4xl mx-auto animate-fade-in-up delay-600">
          <div className="text-center group">
                         <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-all duration-500 shadow-xl sm:shadow-2xl group-hover:shadow-cyan-500/25">
               <i className="fa-solid fa-user-md text-white text-lg sm:text-xl md:text-3xl group-hover:rotate-12 transition-transform duration-500"></i>
             </div>
                         <div className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-800 mb-1 sm:mb-2 md:mb-3 group-hover:text-cyan-600 transition-colors duration-300">500+</div>
             <div className="text-gray-600 font-semibold text-xs sm:text-sm md:text-base lg:text-lg">Verified Dentists</div>
          </div>
          
          <div className="text-center group">
                         <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-all duration-500 shadow-xl sm:shadow-2xl group-hover:shadow-cyan-500/25">
               <i className="fa-solid fa-globe text-white text-lg sm:text-xl md:text-3xl group-hover:rotate-12 transition-transform duration-500"></i>
             </div>
                         <div className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-800 mb-1 sm:mb-2 md:mb-3 group-hover:text-cyan-600 transition-colors duration-300">50+</div>
             <div className="text-gray-600 font-semibold text-xs sm:text-sm md:text-base lg:text-lg">Cities Covered</div>
          </div>
          
          <div className="text-center group">
                         <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-all duration-500 shadow-xl sm:shadow-2xl group-hover:shadow-cyan-500/25">
               <i className="fa-solid fa-smile text-white text-lg sm:text-xl md:text-3xl group-hover:rotate-12 transition-transform duration-500"></i>
             </div>
                         <div className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-800 mb-1 sm:mb-2 md:mb-3 group-hover:text-cyan-600 transition-colors duration-300">10K+</div>
             <div className="text-gray-600 font-semibold text-xs sm:text-sm md:text-base lg:text-lg">Happy Patients</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-400 {
          animation-delay: 0.4s;
        }
        
        .delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
