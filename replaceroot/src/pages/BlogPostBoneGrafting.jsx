import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer } from '../components';
import Layout from '../components/Layout';

// Custom styles for blog content
const blogContentStyles = `
  .blog-content h2 {
    color: #1f2937;
    font-size: 1.75rem;
    font-weight: 700;
    margin-top: 2.5rem;
    margin-bottom: 1.25rem;
    line-height: 1.2;
    border-bottom: 2px solid #e5e7eb;
    padding-bottom: 0.5rem;
  }
  
  .blog-content h3 {
    color: #1f2937;
    font-size: 1.25rem;
    font-weight: 600;
    margin-top: 1.75rem;
    margin-bottom: 0.75rem;
    line-height: 1.3;
  }
  
  .blog-content p {
    color: #4b5563;
    font-size: 1rem;
    line-height: 1.7;
    margin-bottom: 1.25rem;
  }
  
  .blog-content ul {
    color: #4b5563;
    margin-bottom: 1.25rem;
    padding-left: 1.25rem;
  }
  
  .blog-content li {
    margin-bottom: 0.5rem;
    line-height: 1.6;
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
  
  @media (min-width: 640px) {
    .blog-content h2 {
      font-size: 2rem;
      margin-top: 2.75rem;
      margin-bottom: 1.5rem;
    }
    
    .blog-content h3 {
      font-size: 1.375rem;
      margin-top: 2rem;
      margin-bottom: 1rem;
    }
    
    .blog-content p {
      font-size: 1.0625rem;
      line-height: 1.75;
      margin-bottom: 1.5rem;
    }
    
    .blog-content ul {
      margin-bottom: 1.5rem;
      padding-left: 1.5rem;
    }
    
    .blog-content li {
      margin-bottom: 0.625rem;
      line-height: 1.65;
    }
  }
  
  @media (min-width: 768px) {
    .blog-content h2 {
      font-size: 2.25rem;
      margin-top: 3rem;
      margin-bottom: 1.5rem;
    }
    
    .blog-content h3 {
      font-size: 1.5rem;
      margin-top: 2rem;
      margin-bottom: 1rem;
    }
    
    .blog-content p {
      font-size: 1.125rem;
      line-height: 1.8;
      margin-bottom: 1.5rem;
    }
    
    .blog-content ul {
      margin-bottom: 1.5rem;
      padding-left: 1.5rem;
    }
    
    .blog-content li {
      margin-bottom: 0.75rem;
      line-height: 1.7;
    }
  }
`;

const BlogPostBoneGrafting = () => {
  const blogPost = {
    id: 2,
    category: 'educational',
    title: 'Understanding Bone Grafting: When and Why It\'s Needed for Implants',
    excerpt: 'A comprehensive overview of bone grafting procedures, their importance in implant success, and what patients can expect.',
    author: 'Dr. Michael Chen',
    authorTitle: 'Oral & Maxillofacial Surgeon',
    authorBio: 'Dr. Michael Chen is a board-certified oral and maxillofacial surgeon with over 15 years of experience in dental implant surgery and bone grafting procedures. He has performed over 2,000 successful implant cases and is a recognized expert in advanced grafting techniques.',
    date: 'March 10, 2024',
    readTime: '6 min read',
    image: '/images/blog/bone-grafting.jpg',
    tags: ['Bone Grafting', 'Surgical Procedures', 'Patient Care', 'Dental Implants'],
    content: `
      <h2>What is Bone Grafting?</h2>
      <p>Bone grafting is a surgical procedure that replaces missing bone with material from the patient's own body, an artificial, synthetic, or natural substitute. In the context of dental implants, bone grafting is often necessary when there isn't enough healthy bone in the jaw to support an implant.</p>

      <h2>Why is Bone Grafting Needed for Dental Implants?</h2>
      <p>Dental implants require a solid foundation of healthy bone to be successful. When teeth are lost, the surrounding bone can begin to deteriorate over time due to lack of stimulation. This bone loss can make it impossible to place implants without first rebuilding the bone structure.</p>

      <h3>Common Reasons for Bone Loss:</h3>
      <ul>
        <li><strong>Periodontal Disease:</strong> Advanced gum disease can destroy the bone supporting teeth</li>
        <li><strong>Tooth Extraction:</strong> Bone naturally resorbs after tooth removal</li>
        <li><strong>Trauma:</strong> Injuries to the face or jaw can damage bone structure</li>
        <li><strong>Long-term Denture Wear:</strong> Can cause bone atrophy over time</li>
        <li><strong>Developmental Defects:</strong> Some people are born with insufficient bone</li>
      </ul>

      <h2>Types of Bone Grafting Procedures</h2>

      <h3>1. Socket Preservation (Ridge Preservation)</h3>
      <p>This procedure is performed immediately after tooth extraction to prevent bone loss. The empty socket is filled with bone graft material and covered with a membrane to promote healing.</p>

      <h3>2. Ridge Augmentation</h3>
      <p>When the jawbone is too narrow or short to support implants, ridge augmentation can increase the width and height of the bone. This procedure involves placing bone graft material on top of the existing bone.</p>

      <h3>3. Sinus Lift (Sinus Augmentation)</h3>
      <p>For implants in the upper jaw, especially in the back, a sinus lift may be necessary. This procedure raises the sinus floor and adds bone below the sinus to create adequate space for implants.</p>

      <h3>4. Block Bone Grafting</h3>
      <p>For severe bone loss, a block of bone may be taken from another part of the body (usually the chin or hip) and secured to the jaw with small screws.</p>

      <h2>Bone Graft Materials</h2>

      <h3>Autografts (Your Own Bone)</h3>
      <p>The gold standard for bone grafting, autografts use bone from your own body. This provides the best results but requires an additional surgical site.</p>

      <h3>Allografts (Donor Bone)</h3>
      <p>Processed bone from human donors, thoroughly tested and sterilized. This eliminates the need for a second surgical site.</p>

      <h3>Xenografts (Animal Bone)</h3>
      <p>Usually bovine (cow) bone, processed to be safe and effective. This material provides a framework for new bone growth.</p>

      <h3>Synthetic Materials</h3>
      <p>Man-made materials that stimulate bone growth. These are often used in combination with other graft materials.</p>

      <h2>The Bone Grafting Procedure</h2>

      <h3>Pre-Procedure</h3>
      <ul>
        <li>Comprehensive examination and imaging (CT scan, X-rays)</li>
        <li>Medical history review and health assessment</li>
        <li>Discussion of anesthesia options</li>
        <li>Pre-operative instructions</li>
      </ul>

      <h3>During the Procedure</h3>
      <ul>
        <li>Local anesthesia or sedation is administered</li>
        <li>Small incision is made in the gum tissue</li>
        <li>Bone graft material is placed in the deficient area</li>
        <li>Membrane may be placed over the graft</li>
        <li>Gum tissue is sutured closed</li>
      </ul>

      <h3>Recovery Process</h3>
      <ul>
        <li><strong>First 24-48 hours:</strong> Swelling, discomfort, and minor bleeding are normal</li>
        <li><strong>First week:</strong> Soft diet, gentle oral hygiene, avoid smoking</li>
        <li><strong>2-4 weeks:</strong> Gradual return to normal activities</li>
        <li><strong>3-6 months:</strong> Bone healing and integration period</li>
      </ul>

      <h2>What to Expect After Bone Grafting</h2>

      <h3>Immediate Post-Operative Care</h3>
      <p>You'll receive detailed instructions for care, including:</p>
      <ul>
        <li>Pain management with prescribed medications</li>
        <li>Ice packs to reduce swelling</li>
        <li>Soft diet recommendations</li>
        <li>Oral hygiene instructions</li>
        <li>Activity restrictions</li>
      </ul>

      <h3>Healing Timeline</h3>
      <p>Bone grafting requires patience, as the healing process typically takes 3-6 months. During this time:</p>
      <ul>
        <li>New bone cells gradually replace the graft material</li>
        <li>The graft integrates with your existing bone</li>
        <li>Your body creates a strong foundation for implants</li>
      </ul>

      <h2>Success Rates and Factors</h2>
      <p>Bone grafting success rates are generally high (85-95%) when performed by experienced surgeons. Success depends on:</p>
      <ul>
        <li>Patient's overall health and healing ability</li>
        <li>Type and extent of bone loss</li>
        <li>Quality of the graft material used</li>
        <li>Patient compliance with post-operative care</li>
        <li>Surgeon's experience and technique</li>
      </ul>

      <h2>Risks and Complications</h2>
      <p>While bone grafting is generally safe, potential risks include:</p>
      <ul>
        <li>Infection at the graft site</li>
        <li>Graft failure or rejection</li>
        <li>Nerve damage (rare)</li>
        <li>Excessive bleeding</li>
        <li>Delayed healing</li>
      </ul>

      <h2>Cost Considerations</h2>
      <p>Bone grafting costs vary depending on:</p>
      <ul>
        <li>Type of grafting procedure needed</li>
        <li>Amount of bone to be grafted</li>
        <li>Type of graft material used</li>
        <li>Geographic location</li>
        <li>Surgeon's experience</li>
      </ul>
      <p>Generally, bone grafting can cost between $1,500 to $5,000 per site, though this varies significantly by region and complexity.</p>

      <h2>Preparing for Your Consultation</h2>
      <p>To get the most from your bone grafting consultation, come prepared with:</p>
      <ul>
        <li>Complete medical history</li>
        <li>List of current medications</li>
        <li>Previous dental records and X-rays</li>
        <li>Questions about the procedure</li>
        <li>Understanding of your treatment goals</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Bone grafting is a well-established and highly successful procedure that makes dental implants possible for many patients who would otherwise not be candidates. While the process requires time and patience, the results can be life-changing, providing a stable foundation for dental implants that look, feel, and function like natural teeth.</p>

      <p>If you're considering dental implants but have been told you don't have enough bone, don't lose hope. Modern bone grafting techniques have made it possible for most patients to receive the dental implants they need for a confident, healthy smile.</p>
    `
  };

  return (
    <Layout
      title="Understanding Bone Grafting: When and Why It's Needed for Implants | ReplaceRoot"
      description="Learn about bone grafting procedures for dental implants. Comprehensive guide covering types, materials, recovery, success rates, and what to expect from this essential implant procedure."
      keywords={['bone grafting', 'dental implants', 'oral surgery', 'implant dentistry', 'bone augmentation', 'sinus lift', 'ridge augmentation', 'dental bone graft', 'implant preparation', 'ReplaceRoot']}
      canonical="/blog/bone-grafting"
      og={{
        title: "Understanding Bone Grafting: When and Why It's Needed for Implants",
        description: "Learn about bone grafting procedures for dental implants. Comprehensive guide covering types, materials, recovery, success rates, and what to expect from this essential implant procedure.",
        type: 'article',
        image: "https://replaceroot.com/images/blog/bone-grafting.jpg",
        article: {
          author: "Dr. Michael Chen",
          publishedTime: "2024-03-10T00:00:00Z",
          section: "Educational Content",
          tag: ["Bone Grafting", "Surgical Procedures", "Patient Care", "Dental Implants"]
        }
      }}
      twitter={{ card: 'summary_large_image' }}
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: 'Understanding Bone Grafting: When and Why It\'s Needed for Implants',
        description: 'Learn about bone grafting procedures for dental implants. Comprehensive guide covering types, materials, recovery, success rates, and what to expect from this essential implant procedure.',
        author: {
          '@type': 'Person',
          name: 'Dr. Michael Chen'
        },
        publisher: {
          '@type': 'Organization',
          name: 'ReplaceRoot',
          logo: {
            '@type': 'ImageObject',
            url: 'https://replaceroot.com/logo.png'
          }
        },
        datePublished: '2024-03-10T00:00:00Z',
        dateModified: '2024-03-10T00:00:00Z',
        image: 'https://replaceroot.com/images/blog/bone-grafting.jpg',
        url: typeof window !== 'undefined' ? window.location.href : undefined,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://replaceroot.com/blog/bone-grafting'
        }
      }}
    >
    <div className="bg-gray-50 min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-40 sm:pt-24 md:pt-32 pb-12 sm:pb-16 bg-gradient-to-br from-white to-cyan-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-gradient-to-br from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-gradient-to-tl from-teal-200/10 to-cyan-200/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 mb-6 sm:mb-8 bg-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl shadow-sm border border-gray-200">
              <Link to="/" className="hover:text-cyan-600 font-medium">Home</Link>
              <span className="text-gray-400">→</span>
              <Link to="/blog" className="hover:text-cyan-600 font-medium">Blog</Link>
              <span className="text-gray-400">→</span>
              <span className="text-gray-800 font-medium truncate">{blogPost.title}</span>
            </nav>

            {/* Article Header */}
            <div className="text-center mb-8 sm:mb-12">
              <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
                <span className="px-2 sm:px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs sm:text-sm font-medium">
                  Educational Content
                </span>
                <span className="text-gray-500 text-xs sm:text-sm">{blogPost.readTime}</span>
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
                {blogPost.title}
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
                {blogPost.excerpt}
              </p>
              
              {/* Author Info */}
              <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
                  <i className="fa-solid fa-user text-white text-sm sm:text-lg md:text-xl"></i>
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-800 text-base sm:text-lg">{blogPost.author}</div>
                  <div className="text-cyan-600 font-medium text-sm sm:text-base">{blogPost.authorTitle}</div>
                  <div className="text-gray-500 text-xs sm:text-sm">{blogPost.date}</div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
                {blogPost.tags.map((tag, index) => (
                  <span key={index} className="px-2 sm:px-3 py-1 bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-700 rounded-full text-xs sm:text-sm font-medium border border-cyan-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 sm:py-16 bg-white">
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
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">About the Author</h3>
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-user text-white text-lg sm:text-xl md:text-2xl"></i>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">{blogPost.author}</h4>
                  <p className="text-cyan-600 font-medium mb-2 sm:mb-3 text-sm sm:text-base">{blogPost.authorTitle}</p>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{blogPost.authorBio}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <Footer />
    </div>
    </Layout>
  );
};

export default BlogPostBoneGrafting;
