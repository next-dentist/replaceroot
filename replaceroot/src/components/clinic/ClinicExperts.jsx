import { getClinic, getDisplayName } from '../../content/clinics';

const StarRating = ({ value = 4.8, outOf = 5 }) => {
  const stars = Array.from({ length: outOf }, (_, i) => i < Math.round(value) ? 'fa-star' : 'fa-star');
  return (
    <div className="flex items-center space-x-1 text-amber-400">
      {stars.map((icon, idx) => (
        <i key={idx} className={`fa-solid ${icon}`}></i>
      ))}
    </div>
  );
};

const ClinicExperts = ({ clinicName = 'amaravati' }) => {
  const displayName = getDisplayName(clinicName);
  const clinic = getClinic(clinicName);
  const experts = clinic.experts || [];

  if (!experts.length) return null;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-2 bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-700 rounded-full text-xs sm:text-sm font-medium mb-4">
            <i className="fa-solid fa-user-doctor mr-2"></i>
            Dental Experts
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Dental Implant's experts <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">in {displayName}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experts.map((doc, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-10 mb-10">
              <div className="flex flex-col items-center">
                <img src={doc.image} alt={doc.name} className="w-full max-w-md rounded-xl shadow-md object-cover mb-6" />
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800">{doc.name}</h3>
                {doc.qual && (
                  <div className="text-teal-600 text-sm md:text-base mt-2">{doc.qual}</div>
                )}
                {doc.bio && (
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-6 text-center">{doc.bio}</p>
                )}
                {(doc.rating || doc.ratingText) && (
                  <div className="mt-6 flex items-center space-x-3 text-gray-600">
                    <span className="text-sm">{doc.ratingText || `Rated by Patients ${doc.rating}/5`}</span>
                    <StarRating value={doc.rating || 5} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClinicExperts;


