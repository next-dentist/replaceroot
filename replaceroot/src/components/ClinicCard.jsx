import { useState } from 'react';
import { Link } from 'react-router-dom';

const ClinicCard = ({ clinic }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  // Generate clinic URL slug from name
  const clinicSlug = clinic.name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden border border-gray-100 group transform hover:-translate-y-2 transition-all duration-300">
      <Link to={`/clinic/${clinicSlug}`} className="block">
        <div className="relative">
          <img 
            src={clinic.image} 
            alt={clinic.name}
            className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://placehold.co/400x300/1F2937/9CA3AF?text=Clinic';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <img 
            src={clinic.logo} 
            alt={`${clinic.name} Logo`}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-white absolute bottom-0 left-4 sm:left-5 translate-y-1/2 shadow-md"
          />
        </div>
        
        <div className="p-4 sm:p-5 pt-6 sm:pt-8">
          <h3 className="font-bold text-base sm:text-lg text-gray-800 group-hover:text-cyan-600 transition-colors">{clinic.name}</h3>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">{clinic.description}</p>
        </div>
      </Link>
      
      <div className="px-4 sm:px-5 pb-4 mt-2 flex justify-end items-center text-gray-500">
        <button 
          onClick={toggleFavorite}
          className={`hover:text-cyan-600 transition-all duration-300 ${isFavorited ? 'text-red-500' : ''}`}
        >
          <i className={`fa-solid fa-heart text-lg sm:text-xl ${isFavorited ? 'text-red-500' : ''}`}></i>
        </button>
      </div>
    </div>
  );
};

export default ClinicCard;
