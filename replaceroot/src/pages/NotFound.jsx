import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-teal-500">404</h1>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-8">
            Sorry, the page you're looking for doesn't exist.
          </p>
        </div>
        
        <div className="space-x-4">
          <Link 
            to="/" 
            className="bg-teal-500 hover:bg-teal-600 text-white font-bold px-8 py-3 rounded-lg transition inline-block"
          >
            Go Home
          </Link>
          <Link 
            to="/clinic" 
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold px-8 py-3 rounded-lg transition inline-block"
          >
            View Clinics
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
