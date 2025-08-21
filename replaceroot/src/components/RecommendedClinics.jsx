import ClinicCard from './ClinicCard';

const RecommendedClinics = () => {
  const clinics = [
    {
      id: 1,
      name: 'Esthetica Dental Clinic',
      description: 'Simply Stunning Dentistry',
      image: 'http://googleusercontent.com/file_content/1',
      logo: 'https://placehold.co/40x40/00d1c5/111827?text=E'
    },
    {
      id: 2,
      name: 'Perfect Smile Super Speciality',
      description: '813-700-7311 Brandon',
      image: 'http://googleusercontent.com/file_content/2',
      logo: 'https://placehold.co/40x40/f97316/111827?text=P'
    },
    {
      id: 3,
      name: 'Brandon Perfect Dental',
      description: 'Your local dental expert.',
      image: 'https://placehold.co/400x300/1F2937/9CA3AF?text=Clinic',
      logo: 'https://placehold.co/40x40/3b82f6/111827?text=B'
    },
    {
      id: 4,
      name: 'Dr Gogia\'s Super Speciality',
      description: 'Best Dentist in Rohtak',
      image: 'https://placehold.co/400x300/f59e0b/1F2937?text=Clinic',
      logo: 'https://placehold.co/40x40/10b981/111827?text=D'
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
            Expert Recommendations
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
            Recommended By Our <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base max-w-2xl mx-auto">Handpicked clinics with exceptional care and quality.</p>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {clinics.map((clinic) => (
            <ClinicCard key={clinic.id} clinic={clinic} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedClinics;
