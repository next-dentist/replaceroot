import { useParams } from 'react-router-dom';
import {
  ClinicHeader,
  ClinicHero,
  ClinicFacilities,
  ClinicPrideSection,
  WhyImplantTreatmentIncreasing,
  CausesSection,
  InnovationSection,
  ServicesAndBenefits,
  ImplantStages,
  PricingSection,
  ClinicExperts,
  DentalTourism,
  ClinicGallery,
  ImplantParts,
  ContactSection,
  ClinicFooter,
  WhyChooseBerhampore
} from '../components/clinic';
import { getClinic } from '../content/clinics';

const ClinicPage = () => {
  const { clinicName } = useParams();
  
  // Default to Amaravati if no clinic name specified
  const displayClinicName = clinicName || 'amaravati';
  const clinicData = getClinic(displayClinicName);
  const hideStagesAndParts = clinicData.displayName === 'Belgaum';
  
  return (
    <div className="font-inter bg-gray-50 text-gray-700">
      <ClinicHeader />
      <main>
        <ClinicHero clinicName={displayClinicName} />
        <ClinicFacilities />
        <ClinicPrideSection clinicName={displayClinicName} />
        <PricingSection clinicName={displayClinicName} />
        <ClinicExperts clinicName={displayClinicName} />
        <DentalTourism clinicName={displayClinicName} />
        <ClinicGallery clinicName={displayClinicName} />
        <div id="section_1">
          {displayClinicName === 'berhampore' ? (
            <WhyChooseBerhampore />
          ) : (
            <WhyImplantTreatmentIncreasing clinicName={displayClinicName} />
          )}
        </div>
        <ContactSection clinicName={displayClinicName} />
        <ServicesAndBenefits clinicName={displayClinicName} />
        <CausesSection clinicName={displayClinicName} />
        <InnovationSection clinicName={displayClinicName} />
        {!hideStagesAndParts && <ImplantStages />}
        {!hideStagesAndParts && <ImplantParts />}

      </main>
      <ClinicFooter />
    </div>
  );
};

export default ClinicPage;
