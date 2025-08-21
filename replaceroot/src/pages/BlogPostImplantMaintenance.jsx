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

const BlogPostImplantMaintenance = () => {
  const blogPost = {
    id: 4,
    category: 'educational',
    title: 'Implant Maintenance: Long-term Care for Lasting Results',
    excerpt: 'Essential maintenance tips and care instructions to ensure your dental implants last a lifetime.',
    author: 'Dr. David Kim',
    authorTitle: 'Prosthodontist & Implant Specialist',
    authorBio: 'Dr. David Kim is a board-certified prosthodontist with over 18 years of experience in implant dentistry and long-term patient care. He specializes in implant maintenance protocols and has developed comprehensive care programs that have helped thousands of patients maintain their implants for decades.',
    date: 'February 28, 2024',
    readTime: '5 min read',
    image: '/images/blog/implant-maintenance.jpg',
    tags: ['Maintenance', 'Aftercare', 'Long-term Care', 'Dental Implants'],
    content: `
      <h2>Why Implant Maintenance Matters</h2>
      <p>Dental implants are designed to last a lifetime, but their longevity depends heavily on proper maintenance and care. Unlike natural teeth, implants cannot repair themselves, making regular maintenance essential for preventing complications and ensuring long-term success.</p>

      <h2>The Foundation of Implant Success</h2>
      <p>While dental implants have an impressive success rate of 95% or higher, their long-term success depends on three key factors: proper surgical placement, quality restoration, and consistent maintenance. The maintenance aspect is often the most overlooked but is crucial for preventing peri-implant disease and implant failure.</p>

      <h3>Key Components of Implant Maintenance:</h3>
      <ul>
        <li><strong>Daily Oral Hygiene:</strong> Proper brushing and flossing techniques</li>
        <li><strong>Professional Cleanings:</strong> Regular dental check-ups and cleanings</li>
        <li><strong>Lifestyle Factors:</strong> Diet, smoking, and overall health</li>
        <li><strong>Monitoring:</strong> Regular assessment of implant health</li>
        <li><strong>Preventive Care:</strong> Early detection and treatment of issues</li>
      </ul>

      <h2>Daily Oral Hygiene for Implants</h2>

      <h3>Brushing Techniques</h3>
      <p>Proper brushing is essential for maintaining implant health. Use a soft-bristled toothbrush and gentle, circular motions to clean around implants. Pay special attention to the gum line where bacteria can accumulate.</p>

      <h3>Recommended Brushing Routine:</h3>
      <ul>
        <li>Brush twice daily for at least two minutes</li>
        <li>Use a soft-bristled toothbrush</li>
        <li>Apply gentle pressure to avoid damaging gum tissue</li>
        <li>Clean all surfaces of the implant crown</li>
        <li>Don't forget to brush your tongue</li>
      </ul>

      <h3>Flossing and Interdental Cleaning</h3>
      <p>Flossing is crucial for removing plaque and food particles between implants and natural teeth. Use implant-specific floss or interdental brushes to clean around implant restorations effectively.</p>

      <h3>Interdental Cleaning Tools:</h3>
      <ul>
        <li><strong>Implant Floss:</strong> Specially designed for implant restorations</li>
        <li><strong>Interdental Brushes:</strong> Small brushes for cleaning between teeth</li>
        <li><strong>Water Flossers:</strong> Effective for cleaning around implants</li>
        <li><strong>Antimicrobial Rinses:</strong> Help reduce bacterial load</li>
      </ul>

      <h2>Professional Maintenance Schedule</h2>

      <h3>Regular Check-ups</h3>
      <p>Professional maintenance should occur every 3-6 months, depending on your individual risk factors. These visits allow your dentist to monitor implant health and catch potential issues early.</p>

      <h3>What Happens During Professional Maintenance:</h3>
      <ul>
        <li>Comprehensive oral examination</li>
        <li>Assessment of implant stability</li>
        <li>Professional cleaning around implants</li>
        <li>X-ray evaluation if needed</li>
        <li>Assessment of gum health</li>
        <li>Review of home care techniques</li>
      </ul>

      <h2>Peri-Implant Disease Prevention</h2>

      <h3>Understanding Peri-Implant Disease</h3>
      <p>Peri-implant disease is similar to gum disease but affects the tissues around dental implants. It can lead to bone loss and implant failure if not treated promptly.</p>

      <h3>Early Warning Signs:</h3>
      <ul>
        <li>Redness or swelling around implants</li>
        <li>Bleeding when brushing or flossing</li>
        <li>Bad taste or odor</li>
        <li>Loose implant restoration</li>
        <li>Pain or discomfort around implants</li>
      </ul>

      <h3>Prevention Strategies:</h3>
      <ul>
        <li>Maintain excellent oral hygiene</li>
        <li>Attend regular professional cleanings</li>
        <li>Quit smoking if applicable</li>
        <li>Manage systemic health conditions</li>
        <li>Use antimicrobial mouth rinses as recommended</li>
      </ul>

      <h2>Lifestyle Factors Affecting Implant Health</h2>

      <h3>Diet and Nutrition</h3>
      <p>A healthy diet supports overall oral health and implant success. Avoid excessive sugar and acidic foods that can contribute to bacterial growth and inflammation.</p>

      <h3>Recommended Dietary Practices:</h3>
      <ul>
        <li>Limit sugary and acidic foods</li>
        <li>Eat a balanced diet rich in vitamins and minerals</li>
        <li>Stay hydrated to maintain saliva flow</li>
        <li>Avoid hard foods that could damage restorations</li>
        <li>Consider supplements if recommended by your dentist</li>
      </ul>

      <h3>Smoking and Implant Health</h3>
      <p>Smoking significantly increases the risk of implant failure and peri-implant disease. The chemicals in tobacco can impair healing and reduce blood flow to the gums.</p>

      <h3>Impact of Smoking on Implants:</h3>
      <ul>
        <li>Reduced blood flow to gum tissues</li>
        <li>Impaired healing after implant placement</li>
        <li>Increased risk of peri-implant disease</li>
        <li>Higher failure rates</li>
        <li>Staining of implant restorations</li>
      </ul>

      <h2>Monitoring and Early Detection</h2>

      <h3>Self-Monitoring Techniques</h3>
      <p>Regular self-examination helps you identify potential issues early. Check your implants daily for any changes in appearance, feel, or function.</p>

      <h3>What to Monitor:</h3>
      <ul>
        <li>Gum color and texture around implants</li>
        <li>Any bleeding during brushing or flossing</li>
        <li>Changes in bite or chewing ability</li>
        <li>Loose or shifting restorations</li>
        <li>Unusual pain or sensitivity</li>
      </ul>

      <h3>When to Contact Your Dentist</h3>
      <p>Contact your dentist immediately if you notice any of the following:</p>
      <ul>
        <li>Persistent pain or discomfort</li>
        <li>Loose implant restoration</li>
        <li>Swelling or redness that doesn't improve</li>
        <li>Bleeding that continues after proper cleaning</li>
        <li>Changes in how your implant feels or functions</li>
      </ul>

      <h2>Advanced Maintenance Techniques</h2>

      <h3>Professional Deep Cleaning</h3>
      <p>Periodic deep cleaning around implants helps remove calculus and bacteria that regular cleaning cannot reach. This specialized cleaning uses instruments designed specifically for implant maintenance.</p>

      <h3>Implant-Specific Cleaning Tools:</h3>
      <ul>
        <li><strong>Plastic Scalers:</strong> Safe for implant surfaces</li>
        <li><strong>Air Polishing:</strong> Gentle cleaning with air and powder</li>
        <li><strong>Ultrasonic Scalers:</strong> With plastic tips for implants</li>
        <li><strong>Laser Therapy:</strong> For treating peri-implant disease</li>
      </ul>

      <h2>Long-term Success Factors</h2>

      <h3>Bone Health Maintenance</h3>
      <p>Maintaining healthy bone around implants is crucial for long-term success. Regular monitoring and early intervention can prevent bone loss and implant failure.</p>

      <h3>Factors Supporting Bone Health:</h3>
      <ul>
        <li>Proper oral hygiene</li>
        <li>Regular professional maintenance</li>
        <li>Healthy lifestyle choices</li>
        <li>Management of systemic conditions</li>
        <li>Adequate nutrition</li>
      </ul>

      <h2>Common Maintenance Mistakes to Avoid</h2>

      <h3>Over-brushing</h3>
      <p>Aggressive brushing can damage gum tissue and implant restorations. Use gentle pressure and let the bristles do the work.</p>

      <h3>Neglecting Professional Care</h3>
      <p>Skipping regular check-ups can allow problems to develop unnoticed. Professional maintenance is essential for long-term implant success.</p>

      <h3>Using Abrasive Products</h3>
      <p>Avoid abrasive toothpaste or cleaning products that can scratch implant surfaces and create areas for bacteria to accumulate.</p>

      <h2>Creating a Maintenance Routine</h2>

      <h3>Daily Routine Checklist:</h3>
      <ul>
        <li>Brush twice daily with soft-bristled brush</li>
        <li>Floss or use interdental cleaners</li>
        <li>Rinse with antimicrobial mouthwash if recommended</li>
        <li>Check for any changes or concerns</li>
      </ul>

      <h3>Weekly Maintenance:</h3>
      <ul>
        <li>Deep clean with water flosser</li>
        <li>Check for any loose restorations</li>
        <li>Monitor gum health</li>
      </ul>

      <h3>Monthly Assessment:</h3>
      <ul>
        <li>Review overall oral health</li>
        <li>Note any persistent issues</li>
        <li>Plan for next professional visit</li>
      </ul>

      <h2>Technology in Implant Maintenance</h2>

      <h3>Digital Monitoring</h3>
      <p>Modern technology allows for more precise monitoring of implant health through digital imaging and specialized software.</p>

      <h3>Advanced Diagnostic Tools:</h3>
      <ul>
        <li>Digital X-rays for bone assessment</li>
        <li>3D imaging for detailed evaluation</li>
        <li>Peri-implant probing measurements</li>
        <li>Bacterial testing for early detection</li>
      </ul>

      <h2>Cost-Effective Maintenance</h2>

      <h3>Prevention vs. Treatment</h3>
      <p>Regular maintenance is far more cost-effective than treating implant complications. Preventive care can save thousands of dollars in potential repair or replacement costs.</p>

      <h3>Insurance Coverage</h3>
      <p>Many dental insurance plans cover implant maintenance procedures. Check with your provider about coverage for professional cleanings and maintenance visits.</p>

      <h2>Conclusion</h2>
      <p>Proper implant maintenance is the key to long-term success and enjoying your dental implants for a lifetime. By following a comprehensive maintenance routine that includes daily care, regular professional visits, and healthy lifestyle choices, you can ensure your implants remain healthy and functional for years to come.</p>

      <p>Remember, your implants are an investment in your oral health and quality of life. The time and effort you invest in proper maintenance will pay dividends in the form of lasting function, comfort, and confidence in your smile.</p>

      <p>Work closely with your dental team to develop a maintenance plan tailored to your specific needs and risk factors. With proper care, your dental implants can provide a lifetime of reliable service and beautiful smiles.</p>
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

export default BlogPostImplantMaintenance;
