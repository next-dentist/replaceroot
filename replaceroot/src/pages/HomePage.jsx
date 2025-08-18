import {
  Header,
  Hero,
  RecommendedClinics,
  FeatureSection,
  WhyChooseUs,
  FinalFeatures,
  Footer
} from '../components';

const HomePage = () => {
  return (
    <div className="font-inter bg-primary-dark text-text-light">
      <Header />
      <main>
        <Hero />
        <RecommendedClinics />
        <FeatureSection />
        <WhyChooseUs />
        <FinalFeatures />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
