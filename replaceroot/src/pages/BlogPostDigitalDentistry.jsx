import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer } from '../components';

// Custom styles for blog content
const blogContentStyles = `
  .blog-content h2 {
    color: #1f2937;
    font-size: 2.25rem;
    font-weight: 700;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    line-height: 1.2;
    border-bottom: 2px solid #e5e7eb;
    padding-bottom: 0.5rem;
  }
  
  .blog-content h3 {
    color: #1f2937;
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 2rem;
    margin-bottom: 1rem;
    line-height: 1.3;
  }
  
  .blog-content p {
    color: #4b5563;
    font-size: 1.125rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }
  
  .blog-content ul {
    color: #4b5563;
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
  }
  
  .blog-content li {
    margin-bottom: 0.75rem;
    line-height: 1.7;
  }
  
  .blog-content strong {
    color: #1f2937;
    font-weight: 600;
  }
  
  .blog-content h2:first-child {
    margin-top: 0;
  }
  
  .blog-content {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }
`;

const BlogPostDigitalDentistry = () => {
  const blogPost = {
    id: 3,
    category: 'educational',
    title: 'Digital Dentistry Revolution: How Technology is Transforming Implant Procedures',
    excerpt: 'Explore the latest digital technologies in implant dentistry, from 3D scanning to guided surgery and their benefits.',
    author: 'Dr. Emily Rodriguez',
    authorTitle: 'Digital Dentistry Specialist',
    authorBio: 'Dr. Emily Rodriguez is a leading digital dentistry specialist with over 12 years of experience in advanced implant technologies. She has pioneered the integration of 3D scanning, guided surgery, and digital workflows in implant dentistry, helping hundreds of practices transition to modern digital protocols.',
    date: 'March 5, 2024',
    readTime: '10 min read',
    image: '/images/blog/digital-dentistry.jpg',
    tags: ['Digital Dentistry', 'Technology', '3D Scanning', 'Guided Surgery'],
    content: `
      <h2>What is Digital Dentistry?</h2>
      <p>Digital dentistry represents a revolutionary shift in how dental implant procedures are planned, executed, and monitored. It encompasses a range of advanced technologies that use digital data and computer-aided design to enhance precision, predictability, and patient outcomes in implant dentistry.</p>

      <h2>The Evolution of Implant Technology</h2>
      <p>From traditional analog methods to cutting-edge digital workflows, implant dentistry has undergone a remarkable transformation. Today's digital technologies offer unprecedented accuracy, reduced treatment time, and improved patient comfort compared to conventional approaches.</p>

      <h3>Key Digital Technologies in Implant Dentistry:</h3>
      <ul>
        <li><strong>3D Cone Beam Computed Tomography (CBCT):</strong> High-resolution 3D imaging for precise bone assessment</li>
        <li><strong>Intraoral Scanners:</strong> Digital impressions that eliminate messy traditional molds</li>
        <li><strong>Computer-Aided Design (CAD):</strong> Digital planning and design of implant restorations</li>
        <li><strong>Computer-Aided Manufacturing (CAM):</strong> Precise fabrication of implant components</li>
        <li><strong>Guided Surgery Systems:</strong> Surgical guides for precise implant placement</li>
        <li><strong>Digital Smile Design:</strong> Virtual treatment planning and patient communication</li>
      </ul>

      <h2>3D Scanning and Digital Impressions</h2>

      <h3>Intraoral Scanning Technology</h3>
      <p>Modern intraoral scanners use advanced optical technology to capture detailed 3D images of your mouth. These digital impressions are more comfortable, faster, and more accurate than traditional putty impressions.</p>

      <h3>Benefits of Digital Impressions:</h3>
      <ul>
        <li>No gag reflex or discomfort from traditional molds</li>
        <li>Immediate visualization of scan results</li>
        <li>Higher accuracy and detail capture</li>
        <li>Faster processing and turnaround times</li>
        <li>Easy sharing with dental laboratories</li>
        <li>Reduced material waste and environmental impact</li>
      </ul>

      <h2>Computer-Aided Design (CAD) in Implant Planning</h2>

      <h3>Digital Treatment Planning</h3>
      <p>CAD software allows dentists to create detailed virtual models of your mouth and plan implant placement with millimeter precision. This digital approach enables comprehensive treatment planning before any surgical intervention.</p>

      <h3>Virtual Implant Placement</h3>
      <p>Using specialized software, dentists can virtually place implants in the optimal position, considering bone density, nerve locations, and aesthetic requirements. This virtual planning ensures the best possible outcome before surgery begins.</p>

      <h2>Guided Surgery: Precision in Practice</h2>

      <h3>What is Guided Surgery?</h3>
      <p>Guided surgery uses computer-generated surgical guides that fit precisely over your teeth and gums. These guides have pre-drilled holes that direct the implant placement exactly as planned in the digital treatment plan.</p>

      <h3>Types of Surgical Guides:</h3>
      <ul>
        <li><strong>Tooth-Supported Guides:</strong> Rest on existing teeth for single implant cases</li>
        <li><strong>Tissue-Supported Guides:</strong> Rest on gum tissue for multiple implant cases</li>
        <li><strong>Bone-Supported Guides:</strong> Attach directly to bone for complex cases</li>
        <li><strong>Flapless Surgery:</strong> Minimally invasive approach with no gum incisions</li>
      </ul>

      <h3>Benefits of Guided Surgery:</h3>
      <ul>
        <li>Increased precision and accuracy</li>
        <li>Reduced surgical time</li>
        <li>Minimized post-operative discomfort</li>
        <li>Better preservation of surrounding tissues</li>
        <li>Improved predictability of outcomes</li>
        <li>Enhanced patient safety</li>
      </ul>

      <h2>3D Printing in Implant Dentistry</h2>

      <h3>Custom Surgical Guides</h3>
      <p>3D printing technology enables the creation of custom surgical guides that are perfectly tailored to each patient's anatomy. These guides are printed using biocompatible materials and provide precise guidance during implant placement.</p>

      <h3>Provisional Restorations</h3>
      <p>3D printing also allows for the rapid fabrication of temporary crowns and bridges that can be placed immediately after implant surgery, providing patients with functional and aesthetic restorations while permanent ones are being made.</p>

      <h2>Digital Smile Design (DSD)</h2>

      <h3>Virtual Treatment Preview</h3>
      <p>Digital Smile Design software allows patients to see a preview of their final results before treatment begins. This technology uses facial analysis and digital manipulation to show how implants will look in their final position.</p>

      <h3>Enhanced Patient Communication</h3>
      <p>By visualizing the expected outcome, patients can better understand their treatment plan and make informed decisions about their care. This leads to higher patient satisfaction and better treatment acceptance.</p>

      <h2>Artificial Intelligence in Implant Planning</h2>

      <h3>AI-Powered Treatment Planning</h3>
      <p>Artificial intelligence algorithms can analyze thousands of successful implant cases to suggest optimal implant placement and treatment approaches. This technology continues to evolve and improve treatment outcomes.</p>

      <h3>Predictive Analytics</h3>
      <p>AI can help predict treatment success rates, healing times, and potential complications based on patient-specific factors, allowing for more personalized treatment planning.</p>

      <h2>Digital Workflow Integration</h2>

      <h3>Seamless Data Transfer</h3>
      <p>Modern digital systems allow for seamless integration between different technologies. Data from 3D scans, digital impressions, and treatment planning software can be shared instantly between dental offices and laboratories.</p>

      <h3>Cloud-Based Solutions</h3>
      <p>Cloud-based digital platforms enable secure storage and sharing of patient data, treatment plans, and imaging studies, facilitating collaboration between dental professionals and improving patient care.</p>

      <h2>Patient Benefits of Digital Dentistry</h2>

      <h3>Enhanced Comfort</h3>
      <ul>
        <li>No uncomfortable traditional impressions</li>
        <li>Reduced treatment time</li>
        <li>Minimally invasive procedures</li>
        <li>Faster recovery times</li>
      </ul>

      <h3>Improved Accuracy</h3>
      <ul>
        <li>Precise implant placement</li>
        <li>Better-fitting restorations</li>
        <li>Reduced need for adjustments</li>
        <li>Higher success rates</li>
      </ul>

      <h3>Better Communication</h3>
      <ul>
        <li>Visual treatment planning</li>
        <li>Clear understanding of procedures</li>
        <li>Realistic outcome expectations</li>
        <li>Enhanced patient education</li>
      </ul>

      <h2>Cost Considerations and Accessibility</h2>

      <h3>Investment in Technology</h3>
      <p>While digital dentistry requires significant initial investment in equipment and training, the long-term benefits often outweigh the costs through improved efficiency, reduced treatment time, and higher patient satisfaction.</p>

      <h3>Insurance Coverage</h3>
      <p>Many dental insurance plans now cover digital procedures, recognizing their value in improving treatment outcomes. Patients should check with their insurance providers about coverage for digital implant procedures.</p>

      <h2>Future Trends in Digital Implant Dentistry</h2>

      <h3>Emerging Technologies and Strategies</h3>
      <ul>
        <li><strong>Augmented Reality (AR):</strong> AR technology is being developed to provide real-time guidance during implant surgery, overlaying digital information onto the surgical field to enhance precision and safety.</li>
        <li><strong>Virtual Reality (VR):</strong> VR is being used for patient education and surgical training, allowing patients to virtually experience their procedure and helping dentists practice complex cases.</li>
        <li><strong>Robotic Surgery:</strong> Robotic systems are being developed to assist with implant placement, offering even greater precision and consistency in surgical procedures.</li>
      </ul>

      <h2>Choosing a Digital Dentistry Practice</h2>

      <h3>What to Look For:</h3>
      <ul>
        <li>Advanced digital imaging equipment (CBCT)</li>
        <li>Intraoral scanning capabilities</li>
        <li>Guided surgery experience</li>
        <li>Digital treatment planning software</li>
        <li>3D printing capabilities</li>
        <li>Ongoing technology training</li>
      </ul>

      <h3>Questions to Ask:</h3>
      <ul>
        <li>What digital technologies do you use for implant planning?</li>
        <li>Do you offer guided surgery for implant placement?</li>
        <li>Can I see a preview of my treatment outcome?</li>
        <li>How does digital technology improve my treatment?</li>
        <li>What training do you have in digital procedures?</li>
      </ul>

      <h2>Conclusion</h2>
      <p>The digital revolution in implant dentistry has transformed how we approach tooth replacement, offering unprecedented precision, comfort, and predictability. From 3D scanning to guided surgery, these technologies are making implant procedures more successful and patient-friendly than ever before.</p>

      <p>As digital technologies continue to evolve, patients can expect even better outcomes, shorter treatment times, and more comfortable experiences. The future of implant dentistry is digital, and the benefits are clear: better results, improved patient satisfaction, and enhanced treatment predictability.</p>

      <p>If you're considering dental implants, seek out a practice that embraces digital dentistry. The investment in technology and expertise will translate to better outcomes and a more comfortable treatment experience for you.</p>
    `
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-white to-cyan-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-teal-200/10 to-cyan-200/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8 bg-white px-4 py-3 rounded-xl shadow-sm border border-gray-200">
              <Link to="/" className="hover:text-cyan-600 font-medium">Home</Link>
              <span className="text-gray-400">→</span>
              <Link to="/blog" className="hover:text-cyan-600 font-medium">Blog</Link>
              <span className="text-gray-400">→</span>
              <span className="text-gray-800 font-medium truncate">{blogPost.title}</span>
            </nav>

            {/* Article Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-6">
                <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">
                  Educational Content
                </span>
                <span className="text-gray-500 text-sm">{blogPost.readTime}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                {blogPost.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                {blogPost.excerpt}
              </p>
              
              {/* Author Info */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
                  <i className="fa-solid fa-user text-white text-xl"></i>
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-800 text-lg">{blogPost.author}</div>
                  <div className="text-cyan-600 font-medium">{blogPost.authorTitle}</div>
                  <div className="text-gray-500 text-sm">{blogPost.date}</div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-2">
                {blogPost.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-700 rounded-full text-sm font-medium border border-cyan-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white">
              <style>{blogContentStyles}</style>
              <div 
                className="blog-content prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: blogPost.content }} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">About the Author</h3>
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-user text-white text-2xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{blogPost.author}</h4>
                  <p className="text-cyan-600 font-medium mb-3">{blogPost.authorTitle}</p>
                  <p className="text-gray-600 leading-relaxed">{blogPost.authorBio}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Stay <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Informed</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get the latest dental implant insights, educational content, and industry updates delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-8 py-4 rounded-xl font-bold hover:from-cyan-600 hover:to-teal-600 transition-all duration-300">
                Subscribe
              </button>
            </div>
            
            <p className="text-gray-500 text-sm mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPostDigitalDentistry;
