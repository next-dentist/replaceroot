const ImplantStages = () => {
  const stages = [
    { 
      number: 1, 
      title: 'Extract the Tooth', 
      description: 'Remove the damaged tooth to prepare for implant placement'
    },
    { 
      number: 2, 
      title: 'Graft the Socket', 
      description: 'Add bone graft material to strengthen the jawbone'
    },
    { 
      number: 3, 
      title: 'Allow Healing', 
      description: 'Wait for the grafted site to heal and integrate'
    },
    { 
      number: 4, 
      title: 'Place Implant', 
      description: 'Insert the titanium implant via flapless surgery'
    },
    { 
      number: 5, 
      title: 'Healing Abutment', 
      description: 'Attach temporary abutment for gum healing'
    },
    { 
      number: 6, 
      title: 'Final Impression', 
      description: 'Take precise measurements for custom crown'
    },
    { 
      number: 7, 
      title: 'Deliver Crown', 
      description: 'Place the final screw-retained crown'
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-teal-200/15 to-cyan-200/15 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          {/* Tag */}
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-700 rounded-full text-sm font-medium mb-6">
            <i className="fa-solid fa-list-ol mr-2"></i>
            Treatment Process
          </div>
          
          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Stages in <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Dental Implants</span>
          </h2>
          
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Our comprehensive 7-stage process ensures optimal results for your dental implant treatment
          </p>
          
          {/* Decorative line */}
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full"></div>
        </div>
        
        {/* Pipeline Layout */}
        <div className="max-w-6xl mx-auto">
          {/* Desktop View - Hidden on mobile */}
          <div className="hidden lg:block relative">
            {/* Pipeline Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-500 rounded-full shadow-lg"></div>
            
            {/* Stages */}
            <div className="relative z-10 flex justify-between items-start pt-8">
              {stages.map((stage, index) => (
                <div key={stage.number} className="flex flex-col items-center group">
                  {/* Stage Circle */}
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-xl group-hover:scale-110 transition-transform duration-300 border-4 border-white relative z-20 -mt-8">
                    {stage.number}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
                  </div>
                  
                  {/* Stage Content */}
                  <div className="mt-6 text-center max-w-40">
                    <h3 className="font-bold text-gray-800 text-lg mb-2 group-hover:text-cyan-600 transition-colors leading-tight">
                      {stage.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile View - Hidden on desktop */}
          <div className="lg:hidden">
            <div className="space-y-8">
              {stages.map((stage, index) => (
                <div key={stage.number} className="flex items-start space-x-4 group">
                  {/* Stage Circle */}
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300 border-2 border-white">
                    {stage.number}
                  </div>
                  
                  {/* Stage Content */}
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 text-lg mb-2 group-hover:text-cyan-600 transition-colors leading-tight">
                      {stage.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplantStages;
