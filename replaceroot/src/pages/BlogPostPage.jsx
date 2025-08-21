import React from 'react';
import { Link, useParams } from 'react-router-dom';
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

const BlogPostPage = () => {
  const { id } = useParams();

  // This would typically come from an API or database
  // For now, we'll hardcode the building trust online article
  const blogPost = {
    id: 6,
    category: 'marketing',
    title: 'Building Trust Online: How to Create Compelling Before-and-After Content',
    excerpt: 'Learn how to showcase your implant work effectively while building patient trust and confidence.',
    author: 'Dr. Lisa Wang',
    authorTitle: 'Cosmetic Dentist & Content Creator',
    authorBio: 'Dr. Lisa Wang is a leading cosmetic dentist with over 10 years of experience in dental implant procedures and digital content creation. She has built a strong online presence through educational content and compelling before-and-after showcases, helping thousands of patients understand the transformative power of dental implants.',
    date: 'March 8, 2024',
    readTime: '8 min read',
    image: '/images/blog/before-after-content.jpg',
    tags: ['Content Marketing', 'Patient Trust', 'Before & After', 'Digital Presence'],
         content: `
       <h2>The Power of Before-and-After Content in Dental Marketing</h2>
       <p>Before-and-after content is one of the most powerful tools in dental implant marketing. It provides visual proof of your expertise, demonstrates the transformative impact of your work, and builds trust with potential patients who are considering implant procedures.</p>

       <h2>Why Before-and-After Content Builds Trust</h2>
       <p>In the digital age, patients are increasingly skeptical of marketing claims. Before-and-after content offers tangible evidence of your capabilities and results, making it easier for potential patients to visualize their own transformation and build confidence in your practice.</p>

       <h3>Key Benefits of Before-and-After Content:</h3>
       <ul>
         <li><strong>Visual Proof:</strong> Demonstrates actual results and outcomes</li>
         <li><strong>Patient Education:</strong> Shows what's possible with implant treatment</li>
         <li><strong>Trust Building:</strong> Provides evidence of your expertise and success</li>
         <li><strong>Emotional Connection:</strong> Helps patients envision their own transformation</li>
         <li><strong>Competitive Advantage:</strong> Sets your practice apart from competitors</li>
       </ul>

       <h2>Legal and Ethical Considerations</h2>

       <h3>Patient Consent and Privacy</h3>
       <p>Before creating any before-and-after content, it's essential to obtain proper written consent from patients. This protects both your practice and your patients while ensuring compliance with privacy regulations.</p>

       <h3>Essential Consent Elements:</h3>
       <ul>
         <li>Clear explanation of how images will be used</li>
         <li>Specific platforms where content will be shared</li>
         <li>Patient's right to withdraw consent at any time</li>
         <li>Protection of patient identity and privacy</li>
         <li>Compliance with HIPAA and other regulations</li>
       </ul>

       <h3>Best Practices for Patient Privacy:</h3>
       <ul>
         <li>Use patient initials or first names only</li>
         <li>Avoid including identifiable personal information</li>
         <li>Consider using before-and-after images without faces</li>
         <li>Maintain secure storage of original images</li>
         <li>Regularly review and update consent forms</li>
       </ul>

       <h2>Creating High-Quality Before-and-After Images</h2>

       <h3>Photography Standards</h3>
       <p>Professional-quality photography is essential for effective before-and-after content. Consistent lighting, angles, and composition help showcase your work in the best possible way.</p>

       <h3>Photography Guidelines:</h3>
       <ul>
         <li><strong>Consistent Lighting:</strong> Use the same lighting setup for all images</li>
         <li><strong>Standardized Angles:</strong> Maintain consistent camera angles and positioning</li>
         <li><strong>High Resolution:</strong> Use high-quality cameras and settings</li>
         <li><strong>Proper Focus:</strong> Ensure images are sharp and clear</li>
         <li><strong>Color Accuracy:</strong> Maintain true-to-life colors</li>
       </ul>

       <h3>Essential Equipment:</h3>
       <ul>
         <li>Professional dental camera or high-quality DSLR</li>
         <li>Consistent lighting setup (ring light or studio lighting)</li>
         <li>Standardized background and positioning guides</li>
         <li>Color calibration tools</li>
         <li>Secure storage and backup systems</li>
       </ul>

       <h2>Types of Before-and-After Content</h2>

       <h3>Still Photography</h3>
       <p>Traditional before-and-after photos remain the most effective form of content for showcasing dental implant results. They provide clear, immediate visual comparison of treatment outcomes.</p>

       <h3>Video Content</h3>
       <p>Video before-and-after content can be even more compelling, showing the transformation process and allowing patients to see results from multiple angles.</p>

       <h3>Content Formats to Consider:</h3>
       <ul>
         <li><strong>Side-by-Side Comparisons:</strong> Classic before-and-after format</li>
         <li><strong>Slideshow Presentations:</strong> Multiple angles and views</li>
         <li><strong>Video Transformations:</strong> Dynamic presentation of results</li>
         <li><strong>Patient Testimonial Videos:</strong> Combined with visual results</li>
         <li><strong>Case Study Presentations:</strong> Detailed treatment explanations</li>
       </ul>

       <h2>Optimizing Before-and-After Content for Different Platforms</h2>

       <h3>Website Gallery</h3>
       <p>Your practice website should feature a comprehensive before-and-after gallery that showcases your best work and demonstrates your expertise across different types of cases.</p>

       <h3>Website Gallery Features:</h3>
       <ul>
         <li>Organized by procedure type</li>
         <li>Detailed case descriptions</li>
         <li>Easy navigation and filtering</li>
         <li>High-resolution image viewing</li>
         <li>Patient testimonials integration</li>
       </ul>

       <h3>Social Media Optimization</h3>
       <p>Different social media platforms require different approaches to before-and-after content. Tailor your content to each platform's unique characteristics and audience expectations.</p>

       <h3>Platform-Specific Strategies:</h3>
       <ul>
         <li><strong>Instagram:</strong> Focus on visual appeal and storytelling</li>
         <li><strong>Facebook:</strong> Include detailed descriptions and patient stories</li>
         <li><strong>YouTube:</strong> Create longer-form video content</li>
         <li><strong>LinkedIn:</strong> Professional case studies and outcomes</li>
         <li><strong>TikTok:</strong> Quick, engaging transformation videos</li>
       </ul>

       <h2>Storytelling with Before-and-After Content</h2>

       <h3>Patient Journey Narratives</h3>
       <p>Beyond just showing results, effective before-and-after content tells a story. Include patient challenges, treatment process, and life-changing outcomes to create emotional connections.</p>

       <h3>Storytelling Elements:</h3>
       <ul>
         <li><strong>Patient Challenges:</strong> What problems did they face?</li>
         <li><strong>Treatment Process:</strong> What was involved in their care?</li>
         <li><strong>Results and Impact:</strong> How did treatment change their life?</li>
         <li><strong>Patient Perspective:</strong> Include patient quotes and testimonials</li>
         <li><strong>Professional Insight:</strong> Add your expertise and observations</li>
       </ul>

       <h2>Technical Considerations for Digital Content</h2>

       <h3>Image Optimization</h3>
       <p>Proper image optimization ensures your before-and-after content loads quickly and looks great across all devices and platforms.</p>

       <h3>Optimization Techniques:</h3>
       <ul>
         <li>Compress images for web without losing quality</li>
         <li>Use appropriate file formats (JPEG for photos, PNG for graphics)</li>
         <li>Implement responsive image sizing</li>
         <li>Add alt text for accessibility</li>
         <li>Optimize for mobile viewing</li>
       </ul>

       <h3>Content Management</h3>
       <p>Organize and manage your before-and-after content effectively to maintain quality and consistency across all marketing channels.</p>

       <h2>Measuring the Impact of Before-and-After Content</h2>

       <h3>Key Metrics to Track</h3>
       <p>Monitor the performance of your before-and-after content to understand what resonates with your audience and drives patient engagement.</p>

       <h3>Important Metrics:</h3>
       <ul>
         <li><strong>Engagement Rates:</strong> Likes, comments, shares, and saves</li>
         <li><strong>Click-Through Rates:</strong> How many people click on your content</li>
         <li><strong>Conversion Rates:</strong> Content leading to consultations</li>
         <li><strong>Time on Page:</strong> How long visitors view your gallery</li>
         <li><strong>Patient Inquiries:</strong> Direct inquiries about specific cases</li>
       </ul>

       <h2>Common Mistakes to Avoid</h2>

       <h3>Content Quality Issues</h3>
       <ul>
         <li><strong>Poor Image Quality:</strong> Blurry, poorly lit, or inconsistent photos</li>
         <li><strong>Incomplete Documentation:</strong> Missing before or after images</li>
         <li><strong>Lack of Context:</strong> No explanation of treatment or results</li>
         <li><strong>Over-Editing:</strong> Unrealistic or misleading enhancements</li>
         <li><strong>Inconsistent Presentation:</strong> Varying styles and formats</li>
       </ul>

       <h3>Legal and Ethical Pitfalls</h3>
       <ul>
         <li><strong>Missing Consent:</strong> Using images without proper permission</li>
         <li><strong>Privacy Violations:</strong> Sharing identifiable patient information</li>
         <li><strong>Misleading Claims:</strong> Overstating results or outcomes</li>
         <li><strong>Incomplete Disclaimers:</strong> Not explaining individual results may vary</li>
         <li><strong>Outdated Content:</strong> Using old images without updating</li>
       </ul>

       <h2>Creating a Before-and-After Content Strategy</h2>

       <h3>Content Planning</h3>
       <p>Develop a comprehensive strategy for creating, organizing, and sharing your before-and-after content to maximize its impact and reach.</p>

       <h3>Strategy Components:</h3>
       <ul>
         <li><strong>Content Calendar:</strong> Regular posting schedule</li>
         <li><strong>Case Selection:</strong> Choose diverse and compelling cases</li>
         <li><strong>Platform Mix:</strong> Distribute across multiple channels</li>
         <li><strong>Quality Control:</strong> Review and approval process</li>
         <li><strong>Performance Review:</strong> Regular analysis and optimization</li>
       </ul>

       <h2>Advanced Techniques and Trends</h2>

       <h3>Interactive Content</h3>
       <p>Modern technology allows for more interactive before-and-after presentations that engage patients and provide deeper insights into treatment processes.</p>

       <h3>Interactive Features:</h3>
       <ul>
         <li><strong>360-Degree Views:</strong> Rotating images from multiple angles</li>
         <li><strong>Zoom Functionality:</strong> Detailed examination of results</li>
         <li><strong>Before/After Sliders:</strong> Interactive comparison tools</li>
         <li><strong>Virtual Consultations:</strong> Real-time case discussions</li>
         <li><strong>Augmented Reality:</strong> AR previews of potential results</li>
       </ul>

       <h2>Building Patient Trust Through Transparency</h2>

       <h3>Authentic Presentation</h3>
       <p>Authenticity is crucial for building trust. Present your before-and-after content honestly and transparently, avoiding over-editing or misleading representations.</p>

       <h3>Transparency Practices:</h3>
       <ul>
         <li>Show realistic, unedited results</li>
         <li>Include detailed case information</li>
         <li>Explain treatment limitations</li>
         <li>Share both successful and challenging cases</li>
         <li>Provide honest patient testimonials</li>
       </ul>

       <h2>Conclusion</h2>
       <p>Before-and-after content is a powerful tool for building trust and demonstrating expertise in dental implant marketing. When created thoughtfully and ethically, it can significantly impact patient confidence and practice growth.</p>

       <p>Focus on quality, authenticity, and patient privacy while creating compelling visual stories that showcase your expertise and the transformative power of dental implants. Remember that the goal is not just to attract patients, but to build lasting trust and relationships.</p>

       <p>By implementing these strategies consistently and maintaining high ethical standards, you can create before-and-after content that not only showcases your work but also builds the foundation for long-term patient relationships and practice success.</p>
     `,
    relatedPosts: [
      {
        id: 1,
        title: 'Complete Guide to All-on-4 Dental Implants: What Patients Need to Know',
        excerpt: 'Everything you need to know about All-on-4 implants, from candidacy to recovery.',
        author: 'Dr. Sarah Johnson',
        date: 'March 15, 2024',
        readTime: '8 min read'
      },
      {
        id: 3,
        title: 'Digital Dentistry Revolution: How Technology is Transforming Implant Procedures',
        excerpt: 'Explore the latest digital technologies in implant dentistry.',
        author: 'Dr. Emily Rodriguez',
        date: 'March 5, 2024',
        readTime: '10 min read'
      },
      {
        id: 4,
        title: 'Implant Maintenance: Long-term Care for Lasting Results',
        excerpt: 'Essential maintenance tips and care instructions for dental implants.',
        author: 'Dr. David Kim',
        date: 'February 28, 2024',
        readTime: '5 min read'
      }
    ]
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

export default BlogPostPage;
