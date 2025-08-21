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

const HomePage = () => {
  return (
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
  );
};

export default HomePage;
