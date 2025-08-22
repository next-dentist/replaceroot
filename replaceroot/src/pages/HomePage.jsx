import {
  Header,
  Hero,
  QuickOverview,
  CoreServices,
  ForPatients,
  WhyChooseUs,
  Testimonials,
  PlansPricing,
  Footer
} from '../components';
import Layout from '../components/Layout';

const HomePage = () => {
  return (
    <Layout
      title="ReplaceRoot - Dental Implant Solutions | Home"
      description="Discover ReplaceRoot's comprehensive dental implant services, expert care, and innovative solutions. Connect with qualified specialists and find the perfect implant treatment for your needs."
      keywords={['dental implants', 'implant specialists', 'dental care', 'tooth replacement', 'implant surgery', 'dental specialists', 'implant consultation', 'dental health', 'ReplaceRoot']}
      canonical="/"
      og={{
        title: "ReplaceRoot - Leading Dental Implant Solutions & Patient Care",
        description: "Discover ReplaceRoot's comprehensive dental implant services, expert care, and innovative solutions. Connect with qualified specialists and find the perfect implant treatment for your needs.",
        type: 'website',
        image: "https://replaceroot.com/images/home-hero.jpg",
        site_name: "ReplaceRoot"
      }}
      twitter={{ card: 'summary_large_image' }}
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'ReplaceRoot',
        description: 'Leading dental implant solutions and patient care platform',
        url: 'https://replaceroot.com',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://replaceroot.com/search?q={search_term_string}',
          'query-input': 'required name=search_term_string'
        },
        publisher: {
          '@type': 'Organization',
          name: 'ReplaceRoot',
          logo: {
            '@type': 'ImageObject',
            url: 'https://replaceroot.com/logo.png'
          }
        }
      }}
    >
      <div className="font-inter bg-gray-50 text-gray-700">
        <Header />
        <main>
          <Hero />
          <QuickOverview />
          <CoreServices />
          <ForPatients />
          <WhyChooseUs />
          <Testimonials />
          <PlansPricing />
        </main>
        <Footer />
      </div>
    </Layout>
  );
};

export default HomePage;
