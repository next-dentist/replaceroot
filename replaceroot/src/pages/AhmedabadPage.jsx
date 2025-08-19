import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getClinic, getDisplayName } from '../content/clinics.js';
import Layout from '../components/Layout.jsx';

const AhmedabadPage = () => {
  const clinicName = 'ahmedabad';
  const displayName = getDisplayName(clinicName);
  const clinic = getClinic(clinicName);
  const clinicContent = (clinic && clinic.hero) || { image: '/images/rr-logo.webp', altText: `Dental Clinic in ${displayName}` };
  const pricingContent = (clinic && clinic.pricing) || {};
  const pricingData = pricingContent.data || [
    { type: 'Single Dental Implant', priceINR: '20,000*', priceUSD: '$281.27*' },
    { type: 'Single Basal Implant', priceINR: '30,000*', priceUSD: '$421.90*' },
    { type: 'Zygoma Implant', priceINR: '50,000*', priceUSD: '$703.17*' },
    { type: "'All-on-4' dental implants", priceINR: '450,000*', priceUSD: '$6328.54*' }
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const facilities = [
    { icon: 'fa-car', name: 'Parking', available: true },
    { icon: 'fa-wheelchair', name: 'Handicapped', available: true },
    { icon: 'fa-plane', name: 'Near Airport', available: true },
    { icon: 'fa-stethoscope', name: 'Modern Equipment', available: true },
    { icon: 'fa-dollar-sign', name: 'Reasonable Price', available: true }
  ];

  const pridePoints = [
    
  ];

  const whyFeatures = [
    {
      icon: 'fa-check-circle',
      title: 'Only Implants Oriented Approach',
      description:
        'Our purpose-designed and custom-built clinic in Ahmedabad lets us provide you acme resources Implants in pleasant, comfortable surroundings.'
    },
    {
      icon: 'fa-check-circle',
      title: 'Most Implant Experts',
      description:
        'All of the dentists at Replace Roots in Ahmedabad are devoted about their work and are committed to delivering you premium-quality dentistry.'
    },
    {
      icon: 'fa-check-circle',
      title: 'Centrally Located',
      description:
        'Find us quickly and easily. Replace Roots is in the centre of Ahmedabad, within walking distance of nearby bus stops and other public transports.'
    },
    {
      icon: 'fa-check-circle',
      title: 'Flexible Opening Hours',
      description:
        'We are open six days a week, starting at 9:00 am each morning. We also offer late evening dates if you prefer to attend after work.'
    },
    {
      icon: 'fa-check-circle',
      title: 'Latest Technology',
      description:
        'We use the latest technology to provide your care, including digital imaging for picture-taking, X-Ray, and teeth shade range.'
    },
    {
      icon: 'fa-check-circle',
      title: 'SMS and Email Appointment Reminders',
      description:
        "We like to remind you about your dental dates via SMS and Email except, of course, you'd favor receiving a message or telephone call from us."
    },
    {
      icon: 'fa-check-circle',
      title: 'Sterilization and hygiene',
      description:
        'Are of paramount importance at Replace Roots, Ahmedabad. We are beset with cleanliness, have a dedicated decontamination room, and follow rigorous guidelines to ensure patient safety.'
    },
    {
      icon: 'fa-check-circle',
      title: 'Helpful Staff',
      description:
        'Our patients are our highest priority and we hope to win your trust and confidence.'
    }
  ];

  const benefits = [
    {
      title: 'Cost-Effective',
      items: ['One Centre, One Price', 'Affordable procedure for patients']
    },
    {
      title: 'Simple Technique',
      items: ['Primary finger and thumb driven instrumentation', '5-step placement protocol']
    },
    {
      title: 'Minimally Invasive',
      items: ['Painless', 'No flap for most cases', 'No osteotomy (1.1-mm starter pilot hole)']
    },
    {
      title: 'Immediate Load',
      items: ['Teeth in a Day variant', 'Quick Solution', 'No waiting Time']
    }
  ];

  const treatments = [
    'Dental Implants',
    'Basal Implants',
    'Zygoma Implants',
    'Fix teeth in 3 days',
    'Sinus Lift',
    'Bone Grafting',
    'Nerve Lateralization',
    'Total Oral Rehabilitation'
  ];

  const causes = [
    'Implant success has been validated over prolonged periods.',
    'The population is aging; tooth loss increases with age',
    'Traditional restorative dentistry procedures have a limited life span.',
    'Dentures deliver relatively poor function.',
    'Tooth loss and removable prostheses generate negative psychology for a patient.',
    'Dental implant treatment is viewed positively by the public.'
  ];

  const experts = [
    {
      image: '/images/Dr-kairavi-buch-replace-roots.jpg',
      name: 'Dr Kairavi Buch',
      qual: 'Conventional & Basal Implantologist · Diplomate in Implant Dentistry (NYU College of Dentistry & Smile Care, India)',
      bio: 'Diplomate in Implant Dentistry from faculties of New York University College of Dentistry and Smile Care, India. Wide experience working as a dental surgeon in SHALBY HOSPITAL. Former tutor in the Department of Pedodontics for a year. Worked in Vijay Vallabh Trust and Su Ravi Trust Hospital. Wide expertise in Implants, Full Mouth Rehabilitation, and Bone Surgery. Caters to dental tourism for patients from USA, UAE, UK, Australia, Nairobi, Tanzania, and more.',
      rating: 4.7,
      ratingText: 'Rated by Patients 4.7/5 5/5'
    }
  ];

  const tourism = {
    intro:
      'Arrange your next dental tour at Ahmedabad. Located in the heart of Gujarat, the city offers diverse cultural heritage and modern attractions worth exploring. Popular places in Ahmedabad include Sabarmati Ashram, Adalaj Stepwell, Sidi Saiyyed Mosque, and Kankaria Lake among many others.',
    pointsTitle: 'Places to visit in Ahmedabad',
    places: [
      'Sabarmati Ashram',
      'Kankaria Lake',
      'Adalaj Stepwell',
      'Sidi Saiyyed Mosque',
      'Hutheesing Jain Temple',
      'Science City',
      'Sarkhej Roza',
      'Calico Museum of Textiles',
      'Bhadra Fort',
      'Law Garden'
    ]
  };

  // Safeguard for tourism image if not provided in clinic content
  const tourismImage = (clinic && clinic.tourism && clinic.tourism.image) || '/images/amravati1.webp';

  // SEO configuration (no UI changes)
  const canonicalPath = '/dental-implants-ahmedabad';
  const title = `Dental Implants in ${displayName} | ReplaceRoots Dental Clinic`;
  const description = `Get premium, affordable dental implants in ${displayName}. Approved ReplaceRoots Dental Implant Centre offering same-day consultation, modern equipment, and expert implantologists.`;
  const keywords = [
    `dental implants ${displayName.toLowerCase()}`,
    `best dental implant clinic ${displayName.toLowerCase()}`,
    'affordable dental implants India',
    'full mouth dental implants',
    'zygomatic implants',
    'same day dental implants'
  ];
  const og = {
    title,
    description,
    type: 'website',
    image: (clinic && clinic.hero && clinic.hero.image) || '/images/rr-logo.webp',
    url: typeof window !== 'undefined' ? `${window.location.origin}${canonicalPath}` : undefined,
  };
  const twitter = {
    card: 'summary_large_image',
    title,
    description,
    image: og.image,
  };
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: `ReplaceRoots Dental Clinic - ${displayName}`,
    url: typeof window !== 'undefined' ? `${window.location.origin}${canonicalPath}` : undefined,
    image: og.image,
    medicalSpecialty: 'Dentistry',
    address: {
      '@type': 'PostalAddress',
      addressLocality: displayName,
      addressCountry: 'IN',
    },
    telephone: (clinic && clinic.contact && clinic.contact.phone) || undefined,
  };

  return (
    <Layout
      title={title}
      description={description}
      keywords={keywords}
      canonical={canonicalPath}
      og={og}
      twitter={twitter}
      jsonLd={jsonLd}
    >
    <div className="font-inter bg-gray-50 text-gray-700">
      {/* Header (exact ClinicHeader) */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img src="/images/rr-logo.webp" alt="Replace Roots Logo" className="h-10 w-auto transition-transform group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-teal-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">ReplaceRoots Dental</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-cyan-600 font-medium transition-all duration-300 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <a href="#about" className="text-gray-700 hover:text-cyan-600 font-medium transition-all duration-300 relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#services" className="text-gray-700 hover:text-cyan-600 font-medium transition-all duration-300 relative group">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-cyan-600 font-medium transition-all duration-300 relative group">
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contact" className="text-gray-700 hover:text-cyan-600 font-medium transition-all duration-300 relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
          <a href="#appointment" className="hidden md:block bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            <i className="fa-solid fa-calendar-check mr-2"></i>
            Book Appointment
          </a>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-gray-600 focus:outline-none">
            <i className={`fa-solid ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
              <div className="px-6 py-4 space-y-4">
                <Link to="/" className="block text-gray-600 hover:text-teal-500 transition">Home</Link>
                <a href="#about" className="block text-gray-600 hover:text-teal-500 transition">About</a>
                <a href="#services" className="block text-gray-600 hover:text-teal-500 transition">Services</a>
                <a href="#pricing" className="block text-gray-600 hover:text-teal-500 transition">Pricing</a>
                <a href="#contact" className="block text-gray-600 hover:text-teal-500 transition">Contact</a>
                <a href="#appointment" className="block bg-teal-500 hover:bg-teal-600 text-white font-semibold px-5 py-2 rounded-lg transition text-center">Book Appointment</a>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-white to-cyan-50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-br from-cyan-200/30 to-teal-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-tl from-teal-200/20 to-cyan-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
              <div className="text-center md:text-left">
                <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-700 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                  <i className="fa-solid fa-star mr-2"></i>
                  Premium Dental Care
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
                  <span className="text-gray-800">Approved Dental Implant Centre,</span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">{displayName}</span>
                </h1>
                
                <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto md:mx-0">
                  Replace Roots centre in Ahmedabad, is the highest quality of periodontal care and dental implant services. We accomplish this by combining the latest technology with traditional techniques while treating you like family.
                </p>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto md:mx-0">
                  Our services include traditional periodontal treatment, dental implant surgery including same day implants, minimally invasive gum surgery, and treatment of gum recession.
                </p>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto md:mx-0">
                  We aim to create a caring environment to help each patient with their individual periodontal needs – and overall dental health. We strive to create a stress-free environment and offer a wide variety of treatment options.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="#appointment" 
                    className="inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <i className="fa-regular fa-calendar-days mr-2 sm:mr-3"></i>
                    Book Appointment
                  </a>
                </div>
                
                <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-6 text-xs sm:text-sm text-gray-500">
                  <div className="flex items-center">
                    <i className="fa-solid fa-check-circle text-cyan-500 mr-2"></i>
                    <span>Certified Implant Specialists</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fa-solid fa-clock text-cyan-500 mr-2"></i>
                    <span>Same Day Consultation</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fa-solid fa-shield-alt text-cyan-500 mr-2"></i>
                    <span>100% Safe & Secure</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative z-10">
                  <img 
                    src="/images/ahem/am1.webp" 
                    alt={`Dental Clinic in ${displayName}`} 
                    className="rounded-2xl shadow-2xl w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/20 rounded-2xl"></div>
                </div>
                
                <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white rounded-xl shadow-xl p-4 sm:p-6 border border-gray-100">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center">
                      <i className="fa-solid fa-tooth text-white text-lg sm:text-xl"></i>
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-gray-800">500+</div>
                      <div className="text-xs sm:text-sm text-gray-600">Successful Implants</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Section (match component label) */}
        <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-white to-cyan-50 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-br from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 sm:w-80 h-64 sm:h-80 bg-gradient-to-tl from-teal-200/15 to-cyan-200/15 rounded-full blur-3xl"></div>
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <div className="inline-flex items-center px-3 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-700 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-sm">
                <i className="fa-solid fa-building mr-2 sm:mr-2.5"></i>
                Our Facilities
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
                Clinic <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Facilities</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8 px-4">State-of-the-art facilities designed for your comfort and safety</p>
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full shadow-sm"></div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 max-w-6xl mx-auto">
              {facilities.map((facility, index) => (
                <div key={index} className="group h-full">
                  <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden h-full flex flex-col min-h-[160px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10 text-center flex flex-col h-full items-center justify-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <i className={`fa-solid ${facility.icon} text-white text-base sm:text-2xl`}></i>
                      </div>
                      <h3 className="mt-3 font-bold text-gray-800 text-sm sm:text-lg group-hover:text-cyan-600 transition-colors leading-tight">{facility.name}</h3>
                    </div>
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

       

        {/* Pride Section (exact ClinicPrideSection markup) */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              {/* Section Title */}
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                    <i className="fa-solid fa-tooth text-teal-600 text-xl"></i>
                  </div>
                  <div className="relative">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 inline-block pb-3 relative">
                      Why Choose Replace Roots in Ahmedabad?
                      <span className="absolute bottom-0 right-0 w-24 h-1 bg-teal-400 rounded"></span>
                      <span className="absolute -bottom-1 right-0 translate-x-14 w-2 h-2 border-2 border-teal-400 rounded-full bg-white"></span>
                    </h2>
                  </div>
                </div>
                {/* User-provided introductory content */}
                <div className="max-w-4xl mx-auto text-left px-4">
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
                    Our dental implant clinic serves patients requiring treatments at very competitive prices from all over the Satellite region. We offer our patients a variety of dental treatments including implant dentistry, oral surgery, dental CBCT scans and other oral treatment such as soft tissue grafting, teeth whitening and general dental hygiene.
                  </p>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
                    The surgery rooms are very clean, air-conditioned and friendly decorated for your comfort. It is important for the dentistry that every patient is treated very professionally so that they feel completely safe at the clinic. The dental clinic is situated in a beautiful residential area in the Satellite side of the city.
                  </p>
                </div>
              </div>

              {/* Content Grid */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left - Image */}
                <div className="order-2 lg:order-1">
                  <div className="relative">
                    <img 
                      src="/images/ahem/am2.webp" 
                      alt={`Dental Clinic in ${displayName} - Premium Care`} 
                      className="rounded-xl shadow-2xl w-full h-auto"
                    />
                    {/* Overlay badge */}
                    <div className="absolute top-4 right-4 bg-teal-500 text-white px-4 py-2 rounded-lg shadow-lg">
                      <div className="flex items-center space-x-2">
                        <i className="fa-solid fa-award"></i>
                        <span className="font-semibold">Premium Care</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right - Checklist */}
                <div className="order-1 lg:order-2 space-y-6">
                  {pridePoints.map((point, index) => (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className="flex-shrink-0 w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mt-1 group-hover:bg-teal-600 transition-colors">
                        <i className="fa-solid fa-check text-white text-sm"></i>
                      </div>
                      <p className="text-gray-700 text-lg leading-relaxed group-hover:text-gray-900 transition-colors">
                        {point}
                      </p>
                    </div>
                  ))}

                  {/* Additional Call-to-Action */}
                  <div className="mt-8 p-6 bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl border border-teal-100">
                    <div className="flex items-center space-x-3 mb-3">
                      <i className="fa-solid fa-star text-teal-600 text-xl"></i>
                      <h3 className="text-xl font-semibold text-gray-800">Experience Excellence</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Our commitment to quality and patient care makes us the preferred choice for dental implants in {displayName}.
                    </p>
                    <a 
                      href="#contact" 
                      className="inline-flex items-center space-x-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg transition"
                    >
                      <i className="fa-solid fa-phone"></i>
                      <span>Contact Us Today</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reasons Section: Why implant treatment is increasing */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Reasons of why implant treatment is&nbsp;increasing in Replace Roots?
              </h2>
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full"></div>
            </div>
            <div className="max-w-5xl mx-auto">
              <ul className="space-y-3 text-gray-700 text-base md:text-lg leading-relaxed">
                <li className="flex items-start"><i className="fa-solid fa-check text-teal-500 mr-3 mt-1"></i>Implant success has been validated over prolonged periods.</li>
                <li className="flex items-start"><i className="fa-solid fa-check text-teal-500 mr-3 mt-1"></i>The population is aging; tooth loss increases with age.</li>
                <li className="flex items-start"><i className="fa-solid fa-check text-teal-500 mr-3 mt-1"></i>Traditional restorative dentistry procedures have a limited life span.</li>
                <li className="flex items-start"><i className="fa-solid fa-check text-teal-500 mr-3 mt-1"></i>Dentures deliver relatively poor function.</li>
                <li className="flex items-start"><i className="fa-solid fa-check text-teal-500 mr-3 mt-1"></i>Tooth loss and removable prostheses generate negative psychology for a patient.</li>
                <li className="flex items-start"><i className="fa-solid fa-check text-teal-500 mr-3 mt-1"></i>Dental implant treatment is viewed positively by the public.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pricing Section (exact PricingSection markup) */}
        <section id="pricing" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-48 sm:w-80 h-48 sm:h-80 bg-gradient-to-br from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-tl from-teal-200/10 to-cyan-200/10 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-700 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <i className="fa-solid fa-tags mr-2"></i>
                Transparent Pricing
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
                How Much Do Dental Implants Cost in <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">{displayName}</span>?
              </h2>
              
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full mb-6 sm:mb-8"></div>
              
              <p className="max-w-4xl mx-auto text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed px-4">
                A full mouth dental implant procedure can cost in Ahmedabad between 450,000 INR and 900,000 INR($6500 to $10000). It also depends upon several factors like Type of Implant, Complexity of the case, and duration of Treatment.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                <div className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white p-4 sm:p-6">
                  <div className="flex items-center justify-center space-x-2">
                    <i className="fa-solid fa-coins text-lg sm:text-2xl"></i>
                    <h3 className="text-lg sm:text-2xl font-bold">Dental Implant Pricing</h3>
                  </div>
                </div>
                
                {/* Desktop Table View */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-gradient-to-r from-cyan-50 to-teal-50">
                      <tr>
                        <th className="p-6 font-bold text-lg text-gray-800">Treatment Type</th>
                        <th className="p-6 font-bold text-lg text-gray-800 text-center">Price (INR)</th>
                        <th className="p-6 font-bold text-lg text-gray-800 text-center">Price (USD)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pricingData.map((item, index) => (
                        <tr key={index} className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                          index % 2 === 1 ? 'bg-gray-50/50' : 'bg-white'
                        }`}>
                          <td className="p-6 font-semibold text-gray-800">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center">
                                <i className="fa-solid fa-tooth text-white text-sm"></i>
                              </div>
                              <span>{item.type}</span>
                            </div>
                          </td>
                          <td className="p-6 text-center">
                            <span className="text-2xl font-bold text-cyan-600">{item.priceINR}</span>
                          </td>
                          <td className="p-6 text-center">
                            <span className="text-lg font-semibold text-gray-700">{item.priceUSD}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Card View */}
                <div className="md:hidden">
                  <div className="p-4 space-y-4">
                    {pricingData.map((item, index) => (
                      <div key={index} className="bg-gradient-to-r from-cyan-50 to-teal-50 rounded-xl p-4 border border-cyan-100">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center">
                            <i className="fa-solid fa-tooth text-white text-sm"></i>
                          </div>
                          <span className="font-semibold text-gray-800 text-sm">{item.type}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-center">
                            <div className="text-xs text-gray-600 mb-1">Price (INR)</div>
                            <div className="text-lg font-bold text-cyan-600">{item.priceINR}</div>
                          </div>
                          <div className="text-center">
                            <div className="text-xs text-gray-600 mb-1">Price (USD)</div>
                            <div className="text-sm font-semibold text-gray-700">{item.priceUSD}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-cyan-50 to-teal-50 p-4 sm:p-6 border-t border-gray-100">
                  <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <i className="fa-solid fa-info-circle text-cyan-500"></i>
                      <span className="text-xs sm:text-sm">*Prices may vary based on individual case requirements</span>
                    </div>
                    <a href="#contact" className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm sm:text-base">
                      <i className="fa-solid fa-phone mr-2"></i>
                      Get Free Consultation
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {true && (
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <div className="inline-flex items-center px-3 py-2 bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-700 rounded-full text-xs sm:text-sm font-medium mb-4"><i className="fa-solid fa-plane-departure mr-2"></i>Dental Tourism</div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Dental Tourism <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">in {displayName}</span></h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    The city is the largest in the state of Gujarat. A busy urban metropolis, an educational centre, a textile hub, and a city with a glorious past. Enjoy comfortable air-conditioned city tour and sightseeing with a knowledgeable and professional Replace Roots Guide.
                  </p>
                  <p>
                    The city is known for its high-quality services and dramatically low prices; it is becoming a top destination for dental tourism.
                  </p>
                  <h3 className="text-lg font-semibold text-gray-800 mt-4">Prime Benefits of teeth in this city</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Quality Care &amp; Safety</li>
                    <li>A Variety of Dental Treatments</li>
                    <li>Patient Friendly Centers</li>
                    <li>Save Money</li>
                  </ul>
                  <p>
                    We Aim to Inspire Perfect Whites. Dental Cosmetic and Replace Roots Centre offers a host of treatments and cures for a wide range of dental ailments faced by the patients.
                  </p>
                  <p>
                    The clinic provides fillings and tooth repair, undertaking root canal surgeries, applying crowns (caps), bridges and implants, teeth whitening as well as extractions (surgical removal) of cavities/milky/disfigured/wisdom teeth.
                  </p>
                  <p>
                    Our Goal to Excellence: Our team of highly experienced dentists, surgeons, and nurses use the latest dentistry techniques to provide the highest quality of care at competitive prices.
                  </p>
                  <p>
                    The clinic ensures that patients receive the highest standards of best possible care, procedures, and ethics, with the patient’s safety and precautions.
                  </p>
                  <p>
                    We understand that some dental treatments can cause discomfort, and we ensure to make your experience at our clinic the most comfortable possible.
                  </p>
                  <p>
                    The Best Quality: We operate tooth replacement-focused dental clinics across India providing quality dental implant treatment at an affordable price. Our focus on dental implant treatment means that our expert dental team is restoring teeth through dental implant treatment daily at our practices. It also means that through the volume of implant work we do, we can provide our patients with very competitive prices in comparison to the average India prices for dental implant treatment.
                  </p>
                </div>
              </div>
              <div className="flex justify-center"><img src={tourismImage} alt={`Tourism in ${displayName}`} className="rounded-xl shadow-xl w-full h-auto object-cover max-w-xl md:max-w-lg" /></div>
            </div>
          </section>
        )}

        <section id="section_1" className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-teal-200/10 to-cyan-200/10 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20"><div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-700 rounded-full text-sm font-medium mb-6"><i className="fa-solid fa-star mr-2"></i>Why Choose Us</div><h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Why <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">{displayName}</span> for Dental Implants?</h2><div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full"></div></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{whyFeatures.map((feature, index) => (<div key={index} className="group"><div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 h-full"><div className="flex justify-center mb-6"><div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"><i className={`fa-solid ${feature.icon} text-2xl text-white`}></i></div></div><h3 className="text-xl font-bold text-gray-800 mb-4 leading-tight group-hover:text-cyan-600 transition-colors">{feature.title}</h3><p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">{feature.description}</p><div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"><div className="w-8 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full mx-auto"></div></div></div></div>))}</div>
              <div className="mt-16 text-center"><div className="inline-flex items-center space-x-4"><div className="flex items-center space-x-2 text-gray-500"><i className="fa-solid fa-check-circle text-cyan-500"></i><span className="text-sm font-medium">8 Key Advantages</span></div><div className="w-px h-4 bg-gray-300"></div><div className="flex items-center space-x-2 text-gray-500"><i className="fa-solid fa-award text-cyan-500"></i><span className="text-sm font-medium">Proven Excellence</span></div></div></div>
            </div>
          </div>
        </section>

        {/* Contact Section - Improved UI */}
        <section id="contact" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-bl from-cyan-200/30 to-teal-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-tr from-teal-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-700 rounded-full text-sm font-medium mb-6 shadow-sm">
                <i className="fa-solid fa-phone mr-2"></i>
                Get In Touch
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                Contact us at <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">{displayName}</span>
              </h2>
              
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
              {/* Left Column - Contact Information */}
              <div className="space-y-6">
                {/* Phone Card */}
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                      <i className="fa-solid fa-phone text-white text-xl"></i>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-700 mb-2">Phone</h3>
                      <a 
                        href={`tel:${(clinic.contact.phone || '').replace(/\s+/g, '')}`}
                        className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent hover:from-cyan-700 hover:to-teal-700 transition-all duration-300 block"
                      >
                        {clinic.contact.phone || '+91 9328036817'}
                      </a>
                      <p className="text-sm text-gray-500 mt-1">Available 24/7 for emergencies</p>
                    </div>
                  </div>
                </div>
                
                {/* Email Card */}
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                      <i className="fa-solid fa-envelope text-white text-xl"></i>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-700 mb-2">Email</h3>
                      <a 
                        href="mailto:info@replaceroots.com" 
                        className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent hover:from-cyan-700 hover:to-teal-700 transition-all duration-300 block"
                      >
                        info@replaceroots.com
                      </a>
                      <p className="text-sm text-gray-500 mt-1">We'll respond within 2 hours</p>
                    </div>
                  </div>
                </div>
                
                {/* Working Hours Card */}
                <div className="bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl p-6 text-white shadow-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                      <i className="fa-solid fa-clock text-white text-xl"></i>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">Working Hours</h3>
                      <p className="text-lg font-medium">Monday to Saturday 10:00 AM - 7:15 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Map and Address */}
              <div className="relative">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                  <div className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white p-6">
                    <div className="flex items-center justify-center space-x-3">
                      <i className="fa-solid fa-map-marker-alt text-2xl"></i>
                      <h3 className="text-2xl font-bold">Our Location</h3>
                    </div>
                  </div>
                  <div className="relative">
                    <iframe 
                      src={clinic.contact.mapEmbedUrl}
                      width="100%" 
                      height="350" 
                      style={{ border: 0 }}
                      allowFullScreen="" 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`${displayName} Location Map`}
                      className="w-full"
                    />
                  </div>
                </div>
                

                
                {/* Book Appointment Card */}
                <div className="mt-6 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl p-6 text-white shadow-lg">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <i className="fa-solid fa-calendar-check text-white text-2xl"></i>
                    </div>
                    <h4 className="text-xl font-bold mb-2">Book Appointment</h4>
                    <p className="text-white/90 mb-4">Get your free consultation today</p>
                    <a 
                      href="#appointment" 
                      className="inline-flex items-center bg-white text-cyan-600 font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:bg-gray-50"
                    >
                      <i className="fa-solid fa-arrow-right mr-2"></i>
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services & Benefits Section */}
        <section id="services" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-bl from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-tr from-teal-200/10 to-cyan-200/10 rounded-full blur-3xl"></div>
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12 sm:mb-16">
                <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-700 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                  <i className="fa-solid fa-tooth mr-2"></i>
                  Benefits & Highlights
                </div>
                <div className="flex items-center justify-center mb-4 sm:mb-6">
                  <i className="fa-solid fa-tooth text-teal-500 mr-2 sm:mr-3 text-lg sm:text-xl"></i>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
                    The benefit of having <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">dental implants Highlights</span>
                  </h2>
                </div>
                <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="group">
                    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 h-full">
                      <div className="flex items-center mb-4 sm:mb-6">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <i className="fa-solid fa-check text-white text-sm sm:text-lg"></i>
                        </div>
                        <h3 className="font-bold text-lg sm:text-xl text-gray-800 ml-3 sm:ml-4 group-hover:text-cyan-600 transition-colors">{benefit.title}</h3>
                      </div>
                      <ul className="space-y-3 sm:space-y-4">
                        {benefit.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start group/item">
                            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-cyan-100 to-teal-100 rounded-full flex items-center justify-center mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0 group-hover/item:scale-110 transition-transform">
                              <i className="fa-solid fa-check text-cyan-600 text-xs"></i>
                            </div>
                            <span className="text-sm sm:text-base text-gray-700 group-hover/item:text-gray-800 transition-colors">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mb-12 sm:mb-16 mt-12">
                <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-700 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                  <i className="fa-solid fa-stethoscope mr-2"></i>
                  Available Treatments
                </div>
                <div className="flex items-center justify-center mb-4 sm:mb-6">
                  <i className="fa-solid fa-tooth text-teal-500 mr-2 sm:mr-3 text-lg sm:text-xl"></i>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
                    Other Implants Treatments <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">at {displayName}</span>
                  </h2>
                </div>
                <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {treatments.map((treatment, index) => (
                  <div key={index} className="group">
                    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                      <div className="flex items-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                          <i className="fa-solid fa-check text-white text-xs sm:text-sm"></i>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 font-semibold ml-3 sm:ml-4 group-hover:text-cyan-600 transition-colors">{treatment}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 sm:mt-16 text-center">
                <div className="inline-flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
                  <div className="flex items-center space-x-2 text-gray-500"><i className="fa-solid fa-check-circle text-cyan-500"></i><span className="text-sm font-medium">4 Key Benefits</span></div>
                  <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
                  <div className="flex items-center space-x-2 text-gray-500"><i className="fa-solid fa-list-check text-cyan-500"></i><span className="text-sm font-medium">8 Treatment Options</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

         {/* Causes Section (moved just below Other Implants Treatments) */}
         <section className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-teal-200/10 to-cyan-200/10 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-700 rounded-full text-sm font-medium mb-6">
                  <i className="fa-solid fa-chart-line mr-2"></i>
                  Market Trends
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Causes why implant treatment is increasing in <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">{displayName}</span>?
                </h2>
                
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="space-y-6">
                  {causes.slice(0, 3).map((cause, index) => (
                    <div key={index} className="group">
                      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors">{cause}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-6">
                  {causes.slice(3).map((cause, index) => (
                    <div key={index + 3} className="group">
                      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                            {index + 4}
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors">{cause}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <div className="group">
                  <div className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                    <i className="fa-solid fa-tooth text-white mr-3 text-xl group-hover:scale-110 transition-transform duration-300"></i>
                    <span className="text-white font-semibold text-lg group-hover:text-white transition-colors">Leading the Future of Dental Implants</span>
                  </div>
                </div>
                
                <div className="mt-12 flex justify-center items-center space-x-8">
                  <div className="flex items_center space-x-2 text-gray-500">
                    <i className="fa-solid fa-trending-up text-cyan-500"></i>
                    <span className="text-sm font-medium">Growing Demand</span>
                  </div>
                  <div className="w-px h-4 bg-gray-300"></div>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <i className="fa-solid fa-users text-cyan-500"></i>
                    <span className="text-sm font-medium">6 Key Factors</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        

        {/* Innovation Section (exact InnovationSection markup) */}
        <section className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-200/10 to-cyan-200/10 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-700 rounded-full text-sm font-medium mb-6">
                  <i className="fa-solid fa-lightbulb mr-2"></i>
                  Cutting-Edge Innovation
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Our <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Innovation</span> in Dental Implants
                </h2>
                
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full"></div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="group">
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mr-6">
                          <i className="fa-solid fa-shield-alt text-white text-2xl"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 group-hover:text-cyan-600 transition-colors">Proven Excellence</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors">Credibility and reputation have been achieved through research and variation, service, and quality control. The Replace Roots Centre in Ahmedabad is widely trusted and may be considered a reference Clinic.</p>
                    </div>
                  </div>

                  <div className="group">
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mr-6">
                          <i className="fa-solid fa-microchip text-white text-2xl"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 group-hover:text-cyan-600 transition-colors">Advanced Technology</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors">Modern dental implant systems include a comprehensive array of accuracy instruments, components, interactive software, and techniques for the creation of implant restorations suited for most surgical and restorative situations.</p>
                    </div>
                  </div>
                </div>

                <div className="text-center lg:text-left">
                  <div className="group">
                    <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                      <div className="mb-8">
                        <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg mx-auto lg:mx-0 mb-6 group-hover:scale-110 transition-transform duration-300">
                          <i className="fa-solid fa-calendar-check text-white text-3xl"></i>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-800 mb-6 group-hover:text-cyan-600 transition-colors">Plan Your Treatment</h3>
                        <p className="text-gray-600 leading-relaxed text-lg mb-8 group-hover:text-gray-700 transition-colors">
                          Plan your Dental Implants in India with Replace Roots. Schedule for your next dental appointment 
                          at your convenience – anytime, anywhere!
                        </p>
                      </div>

                      <div className="space-y-6 mb-8">
                        <div className="flex items-center justify-center lg:justify-start space-x-4 group/item">
                          <div className="w-8 h-8 bg-gradient-to-r from-cyan-100 to-teal-100 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform">
                            <i className="fa-solid fa-check text-cyan-600 text-sm"></i>
                          </div>
                          <span className="text-gray-700 font-medium group-hover/item:text-gray-800 transition-colors">Flexible Scheduling</span>
                        </div>
                        <div className="flex items-center justify-center lg:justify-start space-x-4 group/item">
                          <div className="w-8 h-8 bg-gradient-to-r from-cyan-100 to-teal-100 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform">
                            <i className="fa-solid fa-check text-cyan-600 text-sm"></i>
                          </div>
                          <span className="text-gray-700 font-medium group-hover/item:text-gray-800 transition-colors">Expert Consultation</span>
                        </div>
                        <div className="flex items-center justify-center lg:justify-start space-x-4 group/item">
                          <div className="w-8 h-8 bg-gradient-to-r from-cyan-100 to-teal-100 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform">
                            <i className="fa-solid fa-check text-cyan-600 text-sm"></i>
                          </div>
                          <span className="text-gray-700 font-medium group-hover/item:text-gray-800 transition-colors">Advanced Treatment Plans</span>
                        </div>
                      </div>

                      <div className="text-center lg:text-left">
                        <a 
                          href="#appointment" 
                          className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 space-x-3"
                        >
                          <i className="fa-regular fa-calendar-days text-xl"></i>
                          <span className="text-lg">Schedule Appointment</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-16 text-center">
                <div className="inline-flex items-center space-x-8">
                  <div className="flex items-center space-x-2 text-gray-500">
                    <i className="fa-solid fa-award text-cyan-500"></i>
                    <span className="text-sm font-medium">Proven Excellence</span>
                  </div>
                  <div className="w-px h-4 bg-gray-300"></div>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <i className="fa-solid fa-microchip text-cyan-500"></i>
                    <span className="text-sm font-medium">Advanced Technology</span>
                  </div>
                  <div className="w-px h-4 bg-gray-300"></div>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <i className="fa-solid fa-calendar-check text-cyan-500"></i>
                    <span className="text-sm font-medium">Easy Scheduling</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* More About Dental Implant Clinic */}
       <section className="py-16 bg-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
         <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-teal-200/15 to-cyan-200/15 rounded-full blur-3xl"></div>
         
         <div className="container mx-auto px-6 relative z-10">
           <div className="text-center mb-16">
             <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-700 rounded-full text-sm font-medium mb-6">
               <i className="fa-solid fa-tooth mr-2"></i>
               About Our Clinic
             </div>
             
             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
               More about <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Our Clinic</span>
             </h2>
             
             <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full mb-8"></div>
           </div>
           
           <div className="max-w-4xl mx-auto">
             <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 lg:p-12 mb-12">
               <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">The Highest Quality with Affordable Dental Care</h3>
               
               <div className="space-y-5 text-gray-700 text-base md:text-lg leading-relaxed">
                 <p>
                   The clinic established in the year 2013, Perfect Whites Dental Cosmetic and Implant Centre in Satellite is one of the most preferred surgeons in the City. The doctor is known to have extensive dental training and to treat all dental problems with efficiency, dedication, and precision.
                 </p>
                 <p>
                   The patients visit our clinic most frequently by residing in India as well as from across the globe. We also have plans on expanding its business in the years to come, because of immense success and widespread popularity.
                 </p>
                 <p>
                   The doctor aims at focusing on the patient's satisfaction and making it a pleasant experience for them and has earned a loyal clientele over the years. Their state-of-the-art clinic is well-equipped with the latest technological instruments to provide high-quality dental treatment to patients. It can also be easily found as it is in the proximity of Shyamal Cross Road.
                 </p>
                 <p className="text-lg font-semibold text-cyan-700 mt-8 border-l-4 border-cyan-500 pl-4 py-2">
                   It is a priority for us that you leave our clinic completely satisfied with your treatment and care.
                 </p>
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* Implant Stages (exact ImplantStages markup) */}
       <section className="py-20 bg-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-teal-200/15 to-cyan-200/15 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-700 rounded-full text-sm font-medium mb-6">
                <i className="fa-solid fa-list-ol mr-2"></i>
                Treatment Process
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                Stages in <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Dental Implants</span>
              </h2>
              
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                Our comprehensive 7-stage process ensures optimal results for your dental implant treatment
              </p>
              
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="hidden lg:block relative">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-500 rounded-full shadow-lg"></div>
                
                <div className="relative z-10 flex justify-between items-start pt-8">
                  {[{number:1,title:'Extract the Tooth',description:'Remove the damaged tooth to prepare for implant placement'},{number:2,title:'Graft the Socket',description:'Add bone graft material to strengthen the jawbone'},{number:3,title:'Allow Healing',description:'Wait for the grafted site to heal and integrate'},{number:4,title:'Place Implant',description:'Insert the titanium implant via flapless surgery'},{number:5,title:'Healing Abutment',description:'Attach temporary abutment for gum healing'},{number:6,title:'Final Impression',description:'Take precise measurements for custom crown'},{number:7,title:'Deliver Crown',description:'Place the final screw-retained crown'}].map((stage) => (
                    <div key={stage.number} className="flex flex-col items-center group">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-xl group-hover:scale-110 transition-transform duration-300 border-4 border-white relative z-20 -mt-8">
                        {stage.number}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
                      </div>
                      
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

              <div className="lg:hidden">
                <div className="space-y-8">
                  {[{number:1,title:'Extract the Tooth',description:'Remove the damaged tooth to prepare for implant placement'},{number:2,title:'Graft the Socket',description:'Add bone graft material to strengthen the jawbone'},{number:3,title:'Allow Healing',description:'Wait for the grafted site to heal and integrate'},{number:4,title:'Place Implant',description:'Insert the titanium implant via flapless surgery'},{number:5,title:'Healing Abutment',description:'Attach temporary abutment for gum healing'},{number:6,title:'Final Impression',description:'Take precise measurements for custom crown'},{number:7,title:'Deliver Crown',description:'Place the final screw-retained crown'}].map((stage) => (
                    <div key={stage.number} className="flex items-start space-x-4 group">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300 border-2 border-white">
                        {stage.number}
                      </div>
                      
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

        {/* Implant Parts + More Specialty (exact ImplantParts markup) */}
        <section className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-200/10 to-cyan-200/10 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-700 rounded-full text-sm font-medium mb-6">
                <i className="fa-solid fa-puzzle-piece mr-2"></i>
                Implant Components
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Parts of <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Dental Implants</span>
              </h2>
              
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="max-w-4xl mx-auto mb-20">
              <div className="group">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                  <img 
                    src="/images/tooth.webp" 
                    alt="Dental implant parts diagram showing crown, abutment, and fixture" 
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-6 bg-gradient-to-r from-cyan-50 to-teal-50">
                    <div className="flex items-center justify-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-700">Crown</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-700">Abutment</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-cyan-600 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-700">Fixture</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  More <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Specialty</span> of Clinic
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full"></div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {[ 'Helpful Doctors','Comfortable Office','Laser Dentistry','Family Helpful','Convenient Location','Little to no Wait Time','Free Consultation','Satisfaction Guarantee','Accessibility','Modern Equipment','High-Quality resources','Digital 3D X-Ray' ].map((specialty, index) => (
                  <div key={index} className="group">
                    <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                          <i className="fa-solid fa-check text-white text-sm"></i>
                        </div>
                        <span className="text-sm font-medium text-gray-700 group-hover:text-cyan-600 transition-colors">{specialty}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-16 text-center">
                <div className="inline-flex items-center space-x-8">
                  <div className="flex items-center space-x-2 text-gray-500">
                    <i className="fa-solid fa-star text-cyan-500"></i>
                    <span className="text-sm font-medium">12 Specialties</span>
                  </div>
                  <div className="w-px h-4 bg-gray-300"></div>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <i className="fa-solid fa-award text-cyan-500"></i>
                    <span className="text-sm font-medium">Premium Care</span>
                  </div>
                  <div className="w-px h-4 bg-gray-300"></div>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <i className="fa-solid fa-heart text-cyan-500"></i>
                    <span className="text-sm font-medium">Patient Focused</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Removed to reorder per /clinic route: Experts, Tourism, Gallery, Why (will be re-added after Pricing) */}
        

        
      </main>

      {/* Footer (ClinicFooter) */}
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <p>&copy; 2024 ReplaceRoots Dental Clinic. All Rights Reserved.</p>
            <p className="text-sm text-gray-400 mt-2">Designed to bring back your fearless smile.</p>
          </div>
        </div>
      </footer>
    </div>
    </Layout>
  );
};

export default AhmedabadPage;


