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
    <section className="py-16 sm:py-20 md:py-24 bg-primary-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Recommended By Our Team</h2>
          <p className="text-text-medium mt-2 text-sm sm:text-base">Handpicked clinics with exceptional care and quality.</p>
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
