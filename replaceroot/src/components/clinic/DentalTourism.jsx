import { getClinic, getDisplayName } from '../../content/clinics';

const DentalTourism = ({ clinicName = 'amaravati' }) => {
  const displayName = getDisplayName(clinicName);
  const clinic = getClinic(clinicName);
  const tourism = clinic.tourism;
  if (!tourism) return null;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <div className="inline-flex items-center px-3 py-2 bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-700 rounded-full text-xs sm:text-sm font-medium mb-4">
            <i className="fa-solid fa-plane-departure mr-2"></i>
            Dental Tourism
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Dental Tourism <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">in {displayName}</span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">{tourism.intro}</p>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">{tourism.pointsTitle}</h3>
          <ul className="space-y-2 text-gray-700">
            {tourism.places.map((p, idx) => (
              <li key={idx} className="flex items-center">
                <i className="fa-solid fa-check text-teal-500 mr-2"></i>
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center">
          <img
            src={tourism.image}
            alt={`Tourism in ${displayName}`}
            className="rounded-xl shadow-xl w-full h-auto object-cover max-w-xl md:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default DentalTourism;


