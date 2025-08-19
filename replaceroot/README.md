# Replace Roots - Dental Implants Finder

A modern React application for finding dental implant specialists and clinics. Built with React, Vite, and Tailwind CSS.

# pages done
1.	dental-implants-Thrissur [done]
2.	dental-implants-Guwahati [done]
3.	dental-implants-Tiruchirappalli [done]
4.	dental-implants-Dehradun [done]
5.	dental-implants-belgaum [done]
6.	dental-implants-Aizawl [done]
7.	dental-implants-Nagercoil [done]
8.	dental-implants-Shimla[done]
9.	dental-implants-Guntur [done]
10.	dental-implants-akola [done]
11.	dental-implants-Ahmedabad [done]
12.	dental-implants-Bhopal [done]
13.	dental-implants-Amritsar [done]
14.	dental-implants-Coimbatore [done]
15.	dental-implants-Siliguri [done]
16.	dental-implants-mangalore [done]
17.	dental-implants-Gorakhpur[done]
18.	dental-implants-Patiala [done]
19.	dental-implants-sangli-miraj-kupwad
20.	dental-implants-Kozhikode
21.	dental-implants-yamunanagar
22.	dental-implants-bellary
23.	dental-implants-Anantapur
24.	dental-implants-dindigul
25.	dental-implants-bhusawal
26.	dental-implants-bettiah
27.	dental-implants-Hyderabad
28.	dental-implants-indore
29.	dental-implants-Kottayam
30.	dental-implants-patna
31.	dental-implants-Pondicherry
32.	dental-implants-varanasi 
33.	dental-implants-kota
34.	dental-implants-Muzaffarpur
35.	dental-implants-Solapur
36.	dental-implants-ambala
37.	dental-implants-thoothukudi
38.	dental-implants-Bathinda
39.	dental-implants-Gulbarga
40.	dental-implants-satara
41.	dental-implants-ongole
42.	dental-implants-howrah
43.	dental-implants-Bhavnagar
44.	dental-implants-Dhule
45.	dental-implants-parbhani
46.	dental-implants-udaipur

## Features

- 🦷 Find dental implant specialists near you
- 🏥 Browse recommended clinics with ratings
- 📱 Fully responsive design
- 🌙 Dark theme with custom color palette
- ⚡ Fast and modern React with Vite
- 🎨 Beautiful UI with Tailwind CSS
- 💫 Interactive components with smooth animations

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd replaceroot
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Routes

The application now includes proper URL-based routing:

- `/` - Home page (landing page with search and clinic recommendations)
- `/clinic` - Default clinic page (Amaravati)
- `/clinic/:clinicName` - Dynamic clinic pages (e.g., `/clinic/esthetica-dental-clinic`)
- `*` - 404 page for invalid routes

### Navigation Features:
- **Logo clicks** navigate to home page
- **Clinic cards** link to individual clinic pages
- **Header navigation** includes proper routing
- **Mobile-responsive** navigation menus

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Tech Stack

- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Font Awesome** - Icons
- **Google Fonts (Inter)** - Typography

## Project Structure

```
src/
├── components/           # React components
│   ├── Header.jsx       # Navigation header
│   ├── Hero.jsx         # Hero section with search
│   ├── ClinicCard.jsx   # Individual clinic card
│   ├── RecommendedClinics.jsx
│   ├── FeatureSection.jsx
│   ├── WhyChooseUs.jsx
│   ├── FinalFeatures.jsx
│   ├── Footer.jsx
│   └── clinic/          # Clinic page components
│       ├── ClinicHeader.jsx
│       ├── ClinicHero.jsx
│       ├── ClinicFacilities.jsx
│       ├── ClinicPrideSection.jsx
│       ├── WhyChooseAmaravati.jsx
│       ├── WhyImplantTreatmentIncreasing.jsx
│       ├── CausesSection.jsx
│       ├── InnovationSection.jsx
│       ├── ServicesAndBenefits.jsx
│       ├── ImplantStages.jsx
│       ├── PricingSection.jsx
│       ├── ImplantParts.jsx
│       ├── ContactSection.jsx
│       └── ClinicFooter.jsx
├── pages/               # Page components
│   ├── HomePage.jsx     # Main landing page
│   ├── ClinicPage.jsx   # Clinic detail page
│   └── NotFound.jsx     # 404 error page
├── App.jsx              # Main app component with routing
├── main.jsx             # App entry point
└── index.css            # Global styles
```

## Customization

### Colors

The app uses a custom color palette defined in `tailwind.config.js`:
- Primary Dark: #111827
- Primary Light: #1F2937  
- Primary Accent: #00d1c5
- Text Light: #E5E7EB
- Text Medium: #9CA3AF
- Teal (for clinic pages): #14b8a6 and variants

### Components

All components are modular and can be easily customized or extended. State management is handled with React hooks.

## License

© 2025 Replace Roots. All Rights Reserved.