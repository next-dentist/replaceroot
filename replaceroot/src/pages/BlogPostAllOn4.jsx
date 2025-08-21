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

const BlogPostAllOn4 = () => {
  const blogPost = {
    id: 1,
    category: 'educational',
    title: 'Complete Guide to All-on-4 Dental Implants: What Patients Need to Know',
    excerpt: 'Everything you need to know about All-on-4 implants, from candidacy to recovery. Learn about this revolutionary treatment option.',
    author: 'Dr. Sarah Johnson',
    authorTitle: 'Implant Specialist & Prosthodontist',
    authorBio: 'Dr. Sarah Johnson is a board-certified prosthodontist with over 12 years of experience in implant dentistry. She has successfully placed over 1,500 All-on-4 implants and is a recognized expert in full-arch restoration techniques. Dr. Johnson is passionate about helping patients regain their confidence through advanced implant solutions.',
    date: 'March 15, 2024',
    readTime: '8 min read',
    image: '/images/blog/all-on-4-guide.jpg',
    tags: ['All-on-4', 'Patient Education', 'Treatment Guide', 'Dental Implants', 'Full Arch Restoration'],
    content: `
      <h2>What Are All-on-4 Dental Implants?</h2>
      <p>All-on-4 dental implants represent a revolutionary approach to full-arch tooth replacement that has transformed the lives of countless patients worldwide. This innovative technique uses just four strategically placed dental implants to support a complete set of upper or lower replacement teeth, offering a permanent solution that looks, feels, and functions like natural teeth.</p>
      
      <p>Unlike traditional dentures that can slip, cause discomfort, and require messy adhesives, All-on-4 implants provide a secure, stable foundation that allows patients to eat, speak, and smile with confidence. The procedure is designed to maximize the use of available bone, often eliminating the need for bone grafting procedures that can add months to the treatment timeline.</p>

      <h2>Who Is a Good Candidate for All-on-4?</h2>
      <p>All-on-4 dental implants are an excellent option for patients who:</p>
      <ul>
        <li><strong>Have lost most or all of their teeth</strong> in one or both arches</li>
        <li><strong>Are currently wearing dentures</strong> and are dissatisfied with their fit, comfort, or function</li>
        <li><strong>Have sufficient bone density</strong> in the jaw to support the implants</li>
        <li><strong>Are in good overall health</strong> and free from conditions that would impair healing</li>
        <li><strong>Are committed to maintaining good oral hygiene</strong> and regular dental visits</li>
        <li><strong>Want a permanent solution</strong> that doesn't require removal for cleaning</li>
      </ul>

      <p>During your consultation, your implant specialist will evaluate your oral health, bone density, and overall medical condition to determine if All-on-4 is the right treatment option for you. Advanced imaging technology, such as 3D cone beam CT scans, helps create a precise treatment plan tailored to your unique anatomy.</p>

      <h2>The All-on-4 Procedure: What to Expect</h2>
      <h3>Pre-Treatment Planning</h3>
      <p>Your journey begins with a comprehensive consultation and treatment planning phase. Your implant specialist will:</p>
      <ul>
        <li>Conduct a thorough oral examination and review your medical history</li>
        <li>Take detailed 3D scans and impressions of your mouth</li>
        <li>Create a digital treatment plan using advanced software</li>
        <li>Design your new teeth to match your facial features and preferences</li>
        <li>Discuss anesthesia options and answer all your questions</li>
      </ul>

      <h3>The Surgical Procedure</h3>
      <p>The All-on-4 procedure is typically performed under sedation or general anesthesia to ensure your comfort. The surgery involves:</p>
      <ul>
        <li><strong>Tooth extraction</strong> (if needed) and preparation of the implant sites</li>
        <li><strong>Strategic placement of four implants</strong> at precise angles to maximize bone contact</li>
        <li><strong>Immediate attachment of temporary teeth</strong> that you can wear home the same day</li>
        <li><strong>Minimal incisions</strong> and advanced techniques to reduce swelling and discomfort</li>
      </ul>

      <p>The entire procedure typically takes 2-4 hours per arch, and many patients are able to return to light activities within a few days.</p>

      <h2>Recovery and Healing Process</h2>
      <h3>Immediate Post-Surgery (First 24-48 Hours)</h3>
      <p>After your All-on-4 procedure, you can expect:</p>
      <ul>
        <li><strong>Some swelling and bruising</strong> around the face and neck (normal and temporary)</li>
        <li><strong>Mild discomfort</strong> that can be managed with prescribed medications</li>
        <li><strong>Ability to eat soft foods</strong> with your new temporary teeth</li>
        <li><strong>Clear instructions</strong> for oral hygiene and care</li>
      </ul>

      <h3>First Week to Month</h3>
      <p>During the initial healing period:</p>
      <ul>
        <li>Swelling gradually subsides, typically within 3-7 days</li>
        <li>You can gradually return to a normal diet, avoiding very hard or sticky foods</li>
        <li>Follow-up appointments ensure proper healing and implant integration</li>
        <li>Your temporary teeth help you adjust to your new smile</li>
      </ul>

      <h3>Osseointegration Period (3-6 Months)</h3>
      <p>The most critical phase is osseointegration, where your jawbone fuses with the implants:</p>
      <ul>
        <li>Implants become permanently anchored in your jawbone</li>
        <li>You can eat most foods with confidence</li>
        <li>Regular check-ups monitor healing progress</li>
        <li>Your final, permanent teeth are being crafted in the dental laboratory</li>
      </ul>

      <h2>Benefits of All-on-4 Dental Implants</h2>
      <h3>Immediate Results</h3>
      <p>One of the most significant advantages of All-on-4 is the ability to walk out of the dental office with a complete set of functional teeth on the same day as your surgery. This immediate transformation can dramatically improve your quality of life and self-confidence.</p>

      <h3>Superior Function and Comfort</h3>
      <p>All-on-4 implants provide:</p>
      <ul>
        <li><strong>Natural chewing ability</strong> - eat your favorite foods without restrictions</li>
        <li><strong>Clear speech</strong> - no more slurring or clicking sounds</li>
        <li><strong>No slipping or movement</strong> - implants are permanently secured</li>
        <li><strong>No messy adhesives</strong> - clean and convenient</li>
        <li><strong>Preserved facial structure</strong> - prevents bone loss and facial collapse</li>
      </ul>

      <h3>Long-term Durability</h3>
      <p>With proper care, All-on-4 implants can last a lifetime. They're designed to withstand the forces of chewing and provide a permanent solution to tooth loss. Regular dental check-ups and good oral hygiene are essential for long-term success.</p>

      <h2>Caring for Your All-on-4 Implants</h2>
      <h3>Daily Oral Hygiene</h3>
      <p>Maintaining your All-on-4 implants requires a consistent oral hygiene routine:</p>
      <ul>
        <li><strong>Brush twice daily</strong> with a soft-bristled toothbrush</li>
        <li><strong>Floss daily</strong> using implant-specific floss or water flossers</li>
        <li><strong>Use antimicrobial mouthwash</strong> as recommended by your dentist</li>
        <li><strong>Clean around the implant abutments</strong> to prevent gum disease</li>
      </ul>

      <h3>Professional Maintenance</h3>
      <p>Regular professional care is crucial for the long-term success of your implants:</p>
      <ul>
        <li>Schedule check-ups every 3-6 months</li>
        <li>Professional cleanings to remove plaque and tartar</li>
        <li>Monitoring of implant health and gum condition</li>
        <li>Adjustments to your bite if needed</li>
      </ul>

      <h2>Cost Considerations and Value</h2>
      <p>While All-on-4 implants represent a significant investment, they offer exceptional value when compared to the long-term costs of traditional dentures. Consider that:</p>
      <ul>
        <li>Traditional dentures typically need replacement every 5-7 years</li>
        <li>Denture adhesives and cleaning products add ongoing costs</li>
        <li>All-on-4 implants can last a lifetime with proper care</li>
        <li>The improved quality of life and confidence are invaluable</li>
      </ul>

      <p>Many dental practices offer flexible payment plans and financing options to make All-on-4 treatment more accessible. Additionally, some dental insurance plans may provide partial coverage for implant procedures.</p>

      <h2>Choosing the Right Implant Specialist</h2>
      <p>Selecting an experienced and qualified implant specialist is crucial for the success of your All-on-4 treatment. Look for a dentist who:</p>
      <ul>
        <li>Has extensive training and experience in implant dentistry</li>
        <li>Uses advanced technology and techniques</li>
        <li>Provides comprehensive treatment planning</li>
        <li>Offers ongoing support and maintenance</li>
        <li>Has a proven track record of successful All-on-4 cases</li>
      </ul>

      <h2>Conclusion</h2>
      <p>All-on-4 dental implants represent a life-changing solution for patients with extensive tooth loss. This innovative treatment offers immediate results, superior function, and long-term durability that can restore your smile, confidence, and quality of life.</p>

      <p>If you're considering All-on-4 implants, schedule a consultation with an experienced implant specialist to learn more about how this revolutionary treatment can benefit you. With proper care and maintenance, your All-on-4 implants can provide a permanent, natural-looking solution that allows you to eat, speak, and smile with confidence for years to come.</p>
    `
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-white to-cyan-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-teal-200/10 to-cyan-200/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
              <Link to="/" className="hover:text-cyan-600 transition-colors">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-cyan-600 transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-gray-800">All-on-4 Guide</span>
            </nav>

            {/* Article Header */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-6">
                <span className="px-4 py-2 bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-700 rounded-full text-sm font-medium">
                  {blogPost.category === 'educational' ? 'Educational Content' : blogPost.category}
                </span>
                <span className="text-gray-500 text-sm">{blogPost.readTime}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-800 leading-tight">
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

export default BlogPostAllOn4;
