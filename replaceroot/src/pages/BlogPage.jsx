import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer } from '../components';

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', count: 12 },
    { id: 'educational', name: 'Educational Content', count: 4 },
    { id: 'marketing', name: 'Marketing Tips', count: 4 },
    { id: 'industry', name: 'Industry Updates', count: 4 }
  ];

  const blogPosts = [
    // Educational Content
    {
      id: 1,
      category: 'educational',
      title: 'Complete Guide to All-on-4 Dental Implants: What Patients Need to Know',
      excerpt: 'Everything you need to know about All-on-4 implants, from candidacy to recovery. Learn about this revolutionary treatment option.',
      author: 'Dr. Sarah Johnson',
      date: 'March 15, 2024',
      readTime: '8 min read',
      image: '/images/blog/all-on-4-guide.jpg',
      tags: ['All-on-4', 'Patient Education', 'Treatment Guide'],
      slug: 'all-on-4-guide'
    },
    {
      id: 2,
      category: 'educational',
      title: 'Understanding Bone Grafting: When and Why It\'s Needed for Implants',
      excerpt: 'A comprehensive overview of bone grafting procedures, their importance in implant success, and what patients can expect.',
      author: 'Dr. Michael Chen',
      date: 'March 10, 2024',
      readTime: '6 min read',
      image: '/images/blog/bone-grafting.jpg',
      tags: ['Bone Grafting', 'Surgical Procedures', 'Patient Care'],
      slug: 'bone-grafting'
    },
    {
      id: 3,
      category: 'educational',
      title: 'Digital Dentistry Revolution: How Technology is Transforming Implant Procedures',
      excerpt: 'Explore the latest digital technologies in implant dentistry, from 3D scanning to guided surgery and their benefits.',
      author: 'Dr. Emily Rodriguez',
      date: 'March 5, 2024',
      readTime: '10 min read',
      image: '/images/blog/digital-dentistry.jpg',
      tags: ['Digital Dentistry', 'Technology', 'Innovation'],
      slug: 'digital-dentistry'
    },
    {
      id: 4,
      category: 'educational',
      title: 'Implant Maintenance: Long-term Care for Lasting Results',
      excerpt: 'Essential maintenance tips and care instructions to ensure your dental implants last a lifetime.',
      author: 'Dr. David Kim',
      date: 'February 28, 2024',
      readTime: '5 min read',
      image: '/images/blog/implant-maintenance.jpg',
      tags: ['Maintenance', 'Aftercare', 'Longevity'],
      slug: 'implant-maintenance'
    },

    // Marketing Tips
    {
      id: 5,
      category: 'marketing',
      title: '10 Proven Marketing Strategies for Dental Implant Practices in 2024',
      excerpt: 'Discover the most effective marketing strategies that successful implant practices are using to attract and retain patients.',
      author: 'Marketing Team',
      date: 'March 12, 2024',
      readTime: '12 min read',
      image: '/images/blog/marketing-strategies.jpg',
      tags: ['Marketing', 'Practice Growth', 'Strategy'],
      slug: 'marketing-strategies'
    },
    {
      id: 6,
      category: 'marketing',
      title: 'Building Trust Online: How to Create Compelling Before-and-After Content',
      excerpt: 'Learn how to showcase your implant work effectively while building patient trust and confidence.',
      author: 'Dr. Lisa Wang',
      date: 'March 8, 2024',
      readTime: '7 min read',
      image: '/images/blog/before-after.jpg',
      tags: ['Content Marketing', 'Patient Trust', 'Case Studies'],
      slug: 'building-trust'
    },
    {
      id: 7,
      category: 'marketing',
      title: 'Social Media Success: Engaging Your Dental Practice\'s Online Community',
      excerpt: 'Practical tips for building an engaged social media presence that attracts qualified implant patients.',
      author: 'Digital Marketing Expert',
      date: 'March 3, 2024',
      readTime: '9 min read',
      image: '/images/blog/social-media.jpg',
      tags: ['Social Media', 'Community Building', 'Engagement'],
      slug: 'social-media-success'
    },
    {
      id: 8,
      category: 'marketing',
      title: 'Patient Referral Programs: Turning Satisfied Patients into Practice Advocates',
      excerpt: 'How to create effective referral programs that encourage satisfied patients to recommend your practice.',
      author: 'Practice Management Expert',
      date: 'February 25, 2024',
      readTime: '6 min read',
      image: '/images/blog/referral-programs.jpg',
      tags: ['Referrals', 'Patient Satisfaction', 'Growth'],
      slug: 'referral-programs'
    },

    // Industry Updates
    {
      id: 9,
      category: 'industry',
      title: 'Global Dental Implant Market Trends: What\'s Shaping the Industry in 2024',
      excerpt: 'An analysis of current market trends, emerging technologies, and what dental professionals need to know.',
      author: 'Industry Analyst',
      date: 'March 14, 2024',
      readTime: '11 min read',
      image: '/images/blog/market-trends.jpg',
      tags: ['Market Trends', 'Industry Analysis', 'Global'],
      slug: 'market-trends'
    },
    {
      id: 10,
      category: 'industry',
      title: 'New FDA Approvals: Latest Implant Technologies and Materials',
      excerpt: 'Stay updated on the newest FDA-approved implant technologies and materials hitting the market.',
      author: 'Dr. Robert Martinez',
      date: 'March 7, 2024',
      readTime: '8 min read',
      image: '/images/blog/fda-approvals.jpg',
      tags: ['FDA', 'Technology', 'Innovation'],
      slug: 'fda-approvals'
    },
    {
      id: 11,
      category: 'industry',
      title: 'International Dental Tourism: Opportunities and Challenges for Implant Practices',
      excerpt: 'Understanding the growing dental tourism market and how it affects implant practices worldwide.',
      author: 'Global Health Expert',
      date: 'March 1, 2024',
      readTime: '10 min read',
      image: '/images/blog/dental-tourism.jpg',
      tags: ['Dental Tourism', 'Global Market', 'Opportunities'],
      slug: 'dental-tourism'
    },
    {
      id: 12,
      category: 'industry',
      title: 'Regulatory Changes: How New Guidelines Affect Implant Practice Standards',
      excerpt: 'Important regulatory updates and how they impact implant practice standards and patient care.',
      author: 'Legal Expert',
      date: 'February 22, 2024',
      readTime: '7 min read',
      image: '/images/blog/regulatory-changes.jpg',
      tags: ['Regulations', 'Standards', 'Compliance'],
      slug: 'regulatory-changes'
    }
  ];

  const featuredPost = blogPosts[0];
  const filteredPosts = activeCategory === 'all' 
    ? blogPosts.filter(post => post.id !== 1)
    : blogPosts.filter(post => post.category === activeCategory && post.id !== 1);

  const popularTags = [
    'Dental Implants', 'Patient Education', 'Marketing', 'Technology', 
    'Practice Growth', 'Industry Trends', 'Patient Care', 'Innovation'
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
              <i className="fa-solid fa-blog mr-2"></i>
              Dental Implant Blog
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-gray-800">
              Insights & <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Education</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Stay informed with the latest educational content, marketing insights, and industry updates for dental implant professionals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="#featured" 
                className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg transform hover:-translate-y-1"
              >
                Read Featured Article
              </Link>
              <Link 
                to="#newsletter" 
                className="bg-white border-2 border-cyan-500 text-cyan-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-cyan-50 transition-all duration-300"
              >
                Subscribe to Newsletter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section id="featured" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Featured <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Article</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="h-64 md:h-full bg-gradient-to-br from-cyan-100 to-teal-100 flex items-center justify-center">
                    <i className="fa-solid fa-tooth text-6xl text-cyan-500"></i>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">
                      {categories.find(cat => cat.id === featuredPost.category)?.name}
                    </span>
                    <span className="text-gray-500 text-sm">{featuredPost.readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center">
                        <i className="fa-solid fa-user text-white"></i>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">{featuredPost.author}</div>
                        <div className="text-gray-500 text-sm">{featuredPost.date}</div>
                      </div>
                    </div>
                    
                    <Link 
                      to={featuredPost.slug ? `/blog/${featuredPost.slug}` : `/blog/${featuredPost.id}`}
                      className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-teal-600 transition-all duration-300"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-cyan-100 to-teal-100 flex items-center justify-center">
                  <i className="fa-solid fa-tooth text-4xl text-cyan-500"></i>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">
                      {categories.find(cat => cat.id === post.category)?.name}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center">
                        <i className="fa-solid fa-user text-white text-xs"></i>
                      </div>
                      <div className="text-sm">
                        <div className="font-semibold text-gray-800">{post.author}</div>
                        <div className="text-gray-500">{post.date}</div>
                      </div>
                    </div>
                    
                    <Link 
                      to={post.slug ? `/blog/${post.slug}` : `/blog/${post.id}`}
                      className="text-cyan-600 hover:text-cyan-700 font-semibold text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section id="newsletter" className="py-20 bg-gradient-to-br from-cyan-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Stay <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Updated</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get the latest insights, industry updates, and marketing tips delivered to your inbox every week.
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

      {/* Popular Tags */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Popular Topics</h3>
            <p className="text-gray-600">Explore articles by topic</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {popularTags.map((tag, index) => (
              <Link
                key={index}
                to={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-4 py-2 bg-gray-100 hover:bg-cyan-100 text-gray-700 hover:text-cyan-700 rounded-full text-sm font-medium transition-colors duration-300"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
