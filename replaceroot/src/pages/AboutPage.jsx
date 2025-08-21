import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer } from '../components';

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      position: "Founder & CEO",
      image: "/images/team/sarah.jpg",
      description: "Leading dental implant specialist with 15+ years of experience in global healthcare solutions.",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Dr. Michael Chen",
      position: "Chief Technology Officer",
      image: "/images/team/michael.jpg", 
      description: "Expert in healthcare technology and digital transformation with a focus on patient care.",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Dr. Emily Rodriguez",
      position: "Head of Clinical Operations",
      image: "/images/team/emily.jpg",
      description: "Specialized in clinical excellence and quality assurance for dental implant procedures.",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Dr. James Wilson",
      position: "Director of Global Partnerships",
      image: "/images/team/james.jpg",
      description: "Building strategic partnerships with dental professionals worldwide for better patient care.",
      linkedin: "#",
      twitter: "#"
    }
  ];

  const uniqueSellingPoints = [
    {
      icon: "fa-globe",
      title: "Global Network",
      description: "Connecting patients with verified implant specialists across 50+ countries worldwide."
    },
    {
      icon: "fa-shield-check", 
      title: "Quality Assurance",
      description: "Rigorous verification process ensures only qualified and experienced dentists join our platform."
    },
    {
      icon: "fa-chart-line",
      title: "Proven Results",
      description: "Over 10,000 successful implant procedures and growing patient satisfaction rates."
    },
    {
      icon: "fa-users",
      title: "Patient-Centric",
      description: "Dedicated to providing personalized care and support throughout the implant journey."
    }
  ];

      return (
      <div className="bg-gray-50 min-h-screen">
        <Header />
        {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-white to-cyan-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-teal-200/10 to-cyan-200/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-700 rounded-full text-sm font-medium mb-6">
              <i className="fa-solid fa-info-circle mr-2"></i>
              About Replace Roots
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-gray-800">
              About <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Replace Roots</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Revolutionizing dental implant care through technology, trust, and global connectivity
            </p>
          </div>
        </div>
      </section>

      {/* Company Background */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Our <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Story</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2020, Replace Roots emerged from a simple yet powerful vision: to bridge the gap between patients seeking quality dental implant care and skilled specialists worldwide.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                What started as a local initiative has grown into a global platform connecting patients with verified implant dentists across 50+ countries. Our journey has been driven by the belief that everyone deserves access to world-class dental care, regardless of their location.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we're proud to have facilitated over 10,000 successful implant procedures and continue to expand our network of trusted dental professionals committed to excellence.
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-500 to-teal-500 rounded-3xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">50+</div>
                    <div className="text-cyan-100">Countries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">500+</div>
                    <div className="text-cyan-100">Verified Dentists</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">10K+</div>
                    <div className="text-cyan-100">Successful Procedures</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">98%</div>
                    <div className="text-cyan-100">Patient Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Mission & Vision</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driving innovation in dental care through technology and human connection
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                <i className="fa-solid fa-bullseye text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To democratize access to high-quality dental implant care by connecting patients with verified specialists worldwide, ensuring every individual can restore their smile with confidence and trust.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                <i className="fa-solid fa-eye text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the world's most trusted platform for dental implant care, where technology meets human expertise to create seamless, accessible, and exceptional patient experiences globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Replace Roots */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Why <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Replace Roots?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what makes us the preferred choice for dental implant care worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {uniqueSellingPoints.map((point, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <i className={`fa-solid ${point.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{point.title}</h3>
                <p className="text-gray-600 leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Meet Our <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate professionals behind Replace Roots' mission to transform dental care
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 text-center group hover:shadow-2xl transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-cyan-600 font-semibold mb-4">{member.position}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{member.description}</p>
                <div className="flex justify-center space-x-3">
                  <a href={member.linkedin} className="w-8 h-8 bg-gray-100 hover:bg-cyan-500 hover:text-white rounded-full flex items-center justify-center transition-all duration-300">
                    <i className="fa-brands fa-linkedin-in text-sm"></i>
                  </a>
                  <a href={member.twitter} className="w-8 h-8 bg-gray-100 hover:bg-cyan-500 hover:text-white rounded-full flex items-center justify-center transition-all duration-300">
                    <i className="fa-brands fa-twitter text-sm"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-teal-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join Our Mission?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Whether you're a dental professional looking to expand your practice or a patient seeking quality care, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/for-dentists" 
              className="bg-white text-cyan-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg transform hover:-translate-y-1"
            >
              Join as Dentist
            </Link>
            <Link 
              to="/for-patients" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-cyan-600 transition-all duration-300"
            >
              Find a Dentist
            </Link>
          </div>
                  </div>
        </section>
        <Footer />
      </div>
    );
};

export default AboutPage;
