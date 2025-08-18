import { getClinic } from '../../content/clinics';

const ClinicGallery = ({ clinicName = 'amaravati' }) => {
  const clinic = getClinic(clinicName);
  const gallery = clinic.gallery;
  if (!gallery || !gallery.images?.length) return null;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center px-3 py-2 bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-700 rounded-full text-xs sm:text-sm font-medium mb-4">
            <i className="fa-solid fa-images mr-2"></i>
            {gallery.title || 'Clinic Images'}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Clinic <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Images</span></h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.images.map((src, idx) => (
            <img key={idx} src={src} alt={`Clinic image ${idx + 1}`} className="rounded-xl shadow-lg object-cover w-full h-full" />)
          )}
        </div>
      </div>
    </section>
  );
};

export default ClinicGallery;


