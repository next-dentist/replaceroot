import shared from './shared';

const ambala = {
  displayName: 'Ambala',
  hero: {
    description:
      'For dental implants in Ambala, ReplaceRoots Approved Centre delivers advanced solutions — Single Tooth Implants, Immediate Implants, Basal Implants, Zygomatic Implants, and All-on-4/All-on-6 full-arch rehabilitation. With digital diagnostics, guided surgery and globally trusted systems, we restore function, aesthetics and confidence with precision and comfort.',
    image: '/images/Ambala/b1.webp',
    altText: 'Dental Clinic in Ambala'
  },
  prideImage: '/images/Ambala/b2.webp',
  pricing: {
    description:
      'Dental implant cost in Ambala varies by implant brand, bone condition, number of teeth, and whether procedures like bone grafting or sinus lift are needed. Our ReplaceRoots-approved clinic follows transparent pricing, uses genuine materials and prioritizes long-term function and aesthetics. Schedule a consultation for a personalized quote.',
    data: [
      { type: 'Single Dental Implant', priceINR: '20,000*', priceUSD: '$281.27*' },
      { type: 'Single Basal Implant', priceINR: '30,000*', priceUSD: '$421.90*' },
      { type: 'Zygoma Implant', priceINR: '50,000*', priceUSD: '$703.17*' },
      { type: "'All-on-4' dental implants", priceINR: '450,000*', priceUSD: '$6328.54*' }
    ]
  },
  pridePoints: [
    'Ambala-focused digital planning and diagnostics for precise implant placement',
    'Experienced implantologists for single, multiple and full-arch cases',
    'Only proven global implant systems and evidence-based biomaterials',
    'Minimally invasive, guided surgery for faster recovery and comfort',
    'Strict sterilization and infection control protocols',
    'Prosthetic-driven planning for stable, natural-looking results',
    'Comprehensive aftercare and maintenance programs'
  ],
  whyFeatures: [
    { icon: 'fa-tooth', title: 'Expert Implantologists', description: 'Highly skilled and experienced dental implant specialists in Ambala.' },
    { icon: 'fa-microchip', title: 'Advanced Technology', description: 'Utilizing the latest digital imaging and guided surgery for precision.' },
    { icon: 'fa-shield-alt', title: 'Quality Materials', description: 'Only globally trusted and biocompatible implant systems are used.' },
    { icon: 'fa-hand-holding-heart', title: 'Patient-Centric Care', description: 'Personalized treatment plans focused on comfort and long-term success.' },
    { icon: 'fa-wallet', title: 'Transparent Pricing', description: 'Clear and upfront cost estimates with no hidden charges.' },
    { icon: 'fa-calendar-check', title: 'Flexible Appointments', description: 'Convenient scheduling options to fit your busy lifestyle.' },
    { icon: 'fa-hospital', title: 'Modern Facilities', description: 'State-of-the-art clinic with a comfortable and sterile environment.' },
    { icon: 'fa-smile', title: 'Guaranteed Satisfaction', description: 'Committed to restoring your smile and confidence with lasting results.' }
  ],
  innovation: {
    excellence: 'Our Ambala center is renowned for its exceptional success rates and patient satisfaction in dental implant procedures, backed by years of proven results and happy patients.',
    technology: 'We utilize state-of-the-art 3D imaging and computer-guided implant placement technology to ensure precision and optimal results for every patient in Ambala.'
  },
  contact: {
    phone: '+91 9328036817',
    email: 'info@replaceroots.com',
    address: 'Dental Implant Center, Ambala, Haryana',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.5!2d76.7833!3d30.3750!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f8b8b8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sAmbala%2C%20Haryana!5e0!3m2!1sen!2sin!4v1642688554521!5m2!1sen!2sin'
  },
  benefits: shared.benefits,
  treatments: shared.treatments,
  causes: shared.causes,
  ...shared
};

export default ambala;
