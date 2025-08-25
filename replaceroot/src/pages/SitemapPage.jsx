import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Header, Footer } from '../components';

const SitemapPage = () => {
  return (
    <Layout
      title="Sitemap | ReplaceRoots"
      description="Complete sitemap of ReplaceRoots dental implant website. Find all our pages, services, clinic locations, and resources."
      keywords={['sitemap', 'dental implants', 'ReplaceRoots', 'website navigation']}
      canonical="/sitemap"
    >
      <div className="font-inter bg-gray-50 text-gray-700">
        <Header />

        <main className="pt-20 pb-16">
          <div className="container mx-auto px-4 sm:px-6">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Website Sitemap
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Navigate through all pages of ReplaceRoots dental implant website. Find information about our services, clinic locations, and resources.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Main Pages */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <i className="fa-solid fa-home text-cyan-500 mr-3"></i>
                  Main Pages
                </h2>
                <ul className="space-y-3">
                  <li>
                    <Link to="/" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/for-dentists" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">
                      For Dentists
                    </Link>
                  </li>
                  <li>
                    <Link to="/for-patients" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">
                      For Patients
                    </Link>
                  </li>
                  <li>
                    <Link to="/pricing" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link to="/case-studies" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">
                      Case Studies
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/faqs" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <i className="fa-solid fa-tooth text-cyan-500 mr-3"></i>
                  Dental Services
                </h2>
                <ul className="space-y-3">
                  <li>
                    <Link to="/services/single-tooth-implant" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">
                      Single Tooth Implant
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/multiple-tooth-implants" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">
                      Multiple Tooth Implants
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/full-mouth-dental-implants" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">
                      Full Mouth Dental Implants
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/all-on-4-implants" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">
                      All-on-4 Implants
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/all-on-6-implants" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">
                      All-on-6 Implants
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/immediate-implants" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">
                      Immediate Implants
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/mini-implants" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">
                      Mini Implants
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/zygomatic-implants" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">
                      Zygomatic Implants
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/basal-implants" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">
                      Basal Implants
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/overdentures" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">
                      Overdentures
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/bone-grafting" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">
                      Bone Grafting
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/sinus-lift" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">
                      Sinus Lift
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/guided-implants" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">
                      Guided Implants
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Lead Generation */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <i className="fa-solid fa-chart-line text-cyan-500 mr-3"></i>
                  Lead Generation
                </h2>
                <ul className="space-y-3">
                  <li>
                    <Link to="/leads/how-we-generate-leads" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">
                      How We Generate Leads
                    </Link>
                  </li>
                  <li>
                    <Link to="/leads/benefits-for-dentists" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">
                      Benefits for Dentists
                    </Link>
                  </li>
                  <li>
                    <Link to="/leads/process-explanation" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">
                      Process Explanation
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Blog Posts */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <i className="fa-solid fa-blog text-cyan-500 mr-3"></i>
                  Blog Posts
                </h2>
                <ul className="space-y-3">
                  <li>
                    <Link to="/blog/bone-grafting" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">
                      Bone Grafting Guide
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog/digital-dentistry" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">
                      Digital Dentistry
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog/implant-maintenance" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">
                      Implant Maintenance
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog/marketing-strategies" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">
                      Marketing Strategies
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog/building-trust" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">
                      Building Trust
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog/all-on-4-guide" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">
                      All-on-4 Guide
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog/social-media-success" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">
                      Social Media Success
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog/patient-referral-programs" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">
                      Patient Referral Programs
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog/market-trends" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">
                      Market Trends
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog/fda-approvals" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">
                      FDA Approvals
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog/dental-tourism" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">
                      Dental Tourism
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog/regulatory-changes" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">
                      Regulatory Changes
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Clinic Locations */}
            <div className="mt-12">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <i className="fa-solid fa-map-marker-alt text-cyan-500 mr-3"></i>
                  Clinic Locations
                </h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  <Link to="/dental-implants-belgaum" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Belgaum</Link>
                  <Link to="/dental-implants-coimbatore" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Coimbatore</Link>
                  <Link to="/dental-implants-hyderabad" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Hyderabad</Link>
                  <Link to="/dental-implants-indore" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Indore</Link>
                  <Link to="/dental-implants-bhopal" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Bhopal</Link>
                  <Link to="/dental-implants-patna" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Patna</Link>
                  <Link to="/dental-implants-varanasi" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Varanasi</Link>
                  <Link to="/dental-implants-pondicherry" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Pondicherry</Link>
                  <Link to="/dental-implants-udaipur" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Udaipur</Link>
                  <Link to="/dental-implants-nashik" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Nashik</Link>
                  <Link to="/dental-implants-bhubaneswar" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Bhubaneswar</Link>
                  <Link to="/dental-implants-mysore" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Mysore</Link>
                  <Link to="/dental-implants-kanpur" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Kanpur</Link>
                  <Link to="/dental-implants-ludhiana" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Ludhiana</Link>
                  <Link to="/dental-implants-amritsar" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Amritsar</Link>
                  <Link to="/dental-implants-guwahati" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Guwahati</Link>
                  <Link to="/dental-implants-mangalore" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Mangalore</Link>
                  <Link to="/dental-implants-gorakhpur" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Gorakhpur</Link>
                  <Link to="/dental-implants-patiala" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Patiala</Link>
                  <Link to="/dental-implants-thrissur" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Thrissur</Link>
                  <Link to="/dental-implants-tiruchirappalli" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Tiruchirappalli</Link>
                  <Link to="/dental-implants-dehradun" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Dehradun</Link>
                  <Link to="/dental-implants-aizawl" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Aizawl</Link>
                  <Link to="/dental-implants-nagercoil" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Nagercoil</Link>
                  <Link to="/dental-implants-shimla" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Shimla</Link>
                  <Link to="/dental-implants-guntur" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Guntur</Link>
                  <Link to="/dental-implants-akola" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Akola</Link>
                  <Link to="/dental-implants-ahmedabad" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Ahmedabad</Link>
                  <Link to="/dental-implants-siliguri" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Siliguri</Link>
                  <Link to="/dental-implants-kozhikode" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Kozhikode</Link>
                  <Link to="/dental-implants-yamunanagar" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Yamunanagar</Link>
                  <Link to="/dental-implants-bellary" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Bellary</Link>
                  <Link to="/dental-implants-anantapur" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Anantapur</Link>
                  <Link to="/dental-implants-dindigul" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Dindigul</Link>
                  <Link to="/dental-implants-bhusawal" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Bhusawal</Link>
                  <Link to="/dental-implants-bettiah" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Bettiah</Link>
                  <Link to="/dental-implants-kottayam" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Kottayam</Link>
                  <Link to="/dental-implants-kota" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Kota</Link>
                  <Link to="/dental-implants-muzaffarpur" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Muzaffarpur</Link>
                  <Link to="/dental-implants-solapur" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Solapur</Link>
                  <Link to="/dental-implants-ambala" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Ambala</Link>
                  <Link to="/dental-implants-thoothukudi" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Thoothukudi</Link>
                  <Link to="/dental-implants-bathinda" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Bathinda</Link>
                  <Link to="/dental-implants-gulbarga" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Gulbarga</Link>
                  <Link to="/dental-implants-satara" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Satara</Link>
                  <Link to="/dental-implants-ongole" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Ongole</Link>
                  <Link to="/dental-implants-howrah" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Howrah</Link>
                  <Link to="/dental-implants-bhavnagar" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Bhavnagar</Link>
                  <Link to="/dental-implants-dhule" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Dhule</Link>
                  <Link to="/dental-implants-parbhani" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Parbhani</Link>
                  <Link to="/dental-implants-pimpri-chinchwad" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Pimpri-Chinchwad</Link>
                  <Link to="/dental-implants-ajmer" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Ajmer</Link>
                  <Link to="/dental-implants-faridabad" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Faridabad</Link>
                  <Link to="/dental-implants-asansol" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Asansol</Link>
                  <Link to="/dental-implants-anand" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Anand</Link>
                  <Link to="/dental-implants-nellore" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Nellore</Link>
                  <Link to="/dental-implants-aligarh" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Aligarh</Link>
                  <Link to="/dental-implants-durgapur" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Durgapur</Link>
                  <Link to="/dental-implants-saharanpur" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Saharanpur</Link>
                  <Link to="/dental-implants-latur" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Latur</Link>
                  <Link to="/dental-implants-bareilly" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Bareilly</Link>
                  <Link to="/dental-implants-vellore" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Vellore</Link>
                  <Link to="/dental-implants-tirupati" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Tirupati</Link>
                  <Link to="/dental-implants-sri-ganganagar" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Sri Ganganagar</Link>
                  <Link to="/dental-implants-mehsana" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Mehsana</Link>
                  <Link to="/dental-implants-ichalkaranji" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Ichalkaranji</Link>
                  <Link to="/dental-implants-berhampore" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Berhampore</Link>
                  <Link to="/dental-implants-sangli-miraj-kupwad" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Sangli-Miraj & Kupwad</Link>
                  <Link to="/amaravati" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Amaravati</Link>
                  <Link to="/dental-implants-amaravati" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Dental Implants Amaravati</Link>
                  <Link to="/bahraich" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Bahraich</Link>
                  <Link to="/dental-implants-bahraich" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Dental Implants Bahraich</Link>
                  <Link to="/berhampore" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Berhampore</Link>
                  <Link to="/dental-implants-berhampore" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Dental Implants Berhampore</Link>
                  <Link to="/bhagalpur" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Bhagalpur</Link>
                  <Link to="/dental-implants-bhagalpur" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Dental Implants Bhagalpur</Link>
                  <Link to="/bihar-sharif" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Bihar Sharif</Link>
                  <Link to="/dental-implants-bihar-sharif" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Dental Implants Bihar Sharif</Link>
                  <Link to="/coimbatore" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Coimbatore</Link>
                  <Link to="/dental-implants-coimbatore" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Dental Implants Coimbatore</Link>
                  <Link to="/danapur" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Danapur</Link>
                  <Link to="/dental-implants-danapur" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">Dental Implants Danapur</Link>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-12 bg-gradient-to-r from-cyan-50 to-teal-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Need Help Finding Something?</h3>
              <p className="text-gray-600 mb-4">
                If you can't find what you're looking for, feel free to contact us directly. Our team is here to help you find the information you need about dental implants and our services.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <i className="fa-solid fa-envelope mr-2"></i>
                Contact Us
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </Layout>
  );
};

export default SitemapPage;
