const Footer = () => {
  const quickLinks = [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about' },
    { label: 'Services', to: '/#services' },
    { label: 'For Dentists', to: '/for-dentists' },
    { label: 'For Patients', to: '/for-patients' },
    { label: 'Pricing & Plans', to: '/pricing' },
    { label: 'Case Studies', to: '/case-studies' },
    { label: 'Blog', to: '/blog' },
    { label: 'FAQs', to: '/faqs' },
   
  ];

  const dentalServices = [
    { name: 'Single Tooth Implant', path: '/services/single-tooth-implant' },
    { name: 'Multiple Tooth Implants', path: '/services/multiple-tooth-implants' },
    { name: 'Full Mouth Dental Implants', path: '/services/full-mouth-dental-implants' },
    { name: 'All-on-4 Implants', path: '/services/all-on-4-implants' },
    { name: 'All-on-6 Implants', path: '/services/all-on-6-implants' },
    { name: 'Immediate (Same Day) Implants', path: '/services/immediate-implants' },
    { name: 'Mini Dental Implants', path: '/services/mini-implants' },
    { name: 'Zygomatic Implants', path: '/services/zygomatic-implants' },
    { name: 'Basal (Cortical) Implants', path: '/services/basal-implants' },
    { name: 'Implant-Supported Overdentures', path: '/services/overdentures' },
    { name: 'Bone Grafting', path: '/services/bone-grafting' },
    { name: 'Sinus Lift Surgery', path: '/services/sinus-lift' },
    { name: 'Guided Digital Implants', path: '/services/guided-implants' }
  ];

  const forDentists = [
    { name: 'How We Generate Leads', path: '/leads/how-we-generate-leads' },
    { name: 'Benefits of Joining Replace Roots', path: '/leads/benefits-for-dentists' },
    { name: 'Lead Generation Process', path: '/leads/process-explanation' },
    { name: 'Packages & Pricing', path: '/pricing' }
  ];

  const forPatients = [
    'Why Choose a Replace Roots Dentist', 'Find an Implant Specialist',
    'Submit an Inquiry', 'Contact Us'
  ];

  const legal = [
    'Privacy Policy', 'Terms & Conditions', 'Cookie Policy'
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'fa-facebook-f', url: '#' },
    { name: 'LinkedIn', icon: 'fa-linkedin-in', url: '#' },
    { name: 'Instagram', icon: 'fa-instagram', url: '#' },
    { name: 'YouTube', icon: 'fa-youtube', url: '#' }
  ];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Column 1: About & Contact */}
          <div className="space-y-6">
            {/* Logo & About */}
                         <div>
               <div className="flex items-center space-x-3 mb-4">
                 <img src="/images/rr-logo.webp" alt="Replace Roots Logo" className="h-10 w-auto" />
               </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                A trusted global platform connecting patients with verified implant specialists and helping dentists grow their practice with high-quality leads.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <h4 className="font-semibold text-white text-sm uppercase tracking-wide">Contact</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <i className="fa-solid fa-map-marker-alt text-cyan-400 w-4"></i>
                  <span className="text-gray-300">Global Headquarters: [Address]</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fa-solid fa-envelope text-cyan-400 w-4"></i>
                  <span className="text-gray-300">[Email]</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fa-solid fa-phone text-cyan-400 w-4"></i>
                  <span className="text-gray-300">[Phone]</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold text-white text-sm uppercase tracking-wide mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name}
                    href={social.url}
                    className="w-8 h-8 bg-gray-700 hover:bg-cyan-600 rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <i className={`fa-brands ${social.icon} text-sm`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

                     {/* Column 2: Services */}
           <div className="space-y-6">
             <h4 className="font-semibold text-white text-sm uppercase tracking-wide">Dental Implant Services</h4>
             <div className="grid grid-cols-1 gap-2">
               {dentalServices.map((service, index) => (
                 <a key={index} href={service.path} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                   {service.name}
                 </a>
               ))}
             </div>
          </div>

          {/* Column 3: Quick Links & For Users */}
          <div className="space-y-6 md:col-span-2 lg:col-span-1">
            <div>
              <h4 className="font-semibold text-white text-sm uppercase tracking-wide mb-3">Quick Links</h4>
              <div className="grid grid-cols-1 gap-2">
                {quickLinks.map((link, index) => (
                  <a key={index} href={link.to} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white text-sm uppercase tracking-wide mb-3">For Dentists</h4>
              <div className="grid grid-cols-1 gap-2">
                {forDentists.map((item, index) => (
                  <a key={index} href={item.path} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white text-sm uppercase tracking-wide mb-3">For Patients</h4>
              <div className="grid grid-cols-1 gap-2">
                {forPatients.map((item, index) => (
                  <a key={index} href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Replace Roots. All Rights Reserved.
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6">
              {legal.map((item, index) => (
                <a key={index} href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
