# Replace Roots - Dental Implants Finder

A modern React application for finding dental implant specialists and clinics. Built with React, Vite, and Tailwind CSS.

## 🚀 **Admin Dashboard & Lead Management System**

This application includes a comprehensive admin dashboard for managing leads from various contact forms and clinic registrations.

### **🔐 Admin Access**

**Login Credentials:**
- **Email:** `admin@replaceroots.com`
- **Password:** `admin123`
- **Access Level:** Super Admin

**Admin Routes:**
- **Login Page:** `/admin/login`
- **Dashboard:** `/admin/dashboard`

### **📊 Admin Dashboard Features**

**Lead Management:**
- ✅ **Patient Leads** - Contact form submissions from patients
- ✅ **Dentist Leads** - Clinic registration submissions from dentists
- ✅ **General Inquiries** - General contact form submissions

**Lead Actions:**
- ✅ **View Complete Details** - Full form data in organized modal
- ✅ **Status Management** - Update lead status (New, Contacted, Converted, Lost)
- ✅ **Search & Filter** - Find leads by name, email, or status
- ✅ **Delete Leads** - Remove unwanted submissions
- ✅ **Real-time Updates** - Live data from database

**Email Notifications:**
- ✅ **Web3Forms Integration** - Automatic email notifications
- ✅ **Notification Email:** `nextdentist.com@gmail.com`
- ✅ **Form Types:** Patient contacts, dentist registrations, general inquiries
- ✅ **Complete Data** - All form fields included in emails

### **🎯 Admin Dashboard Usage**

**1. Accessing the Dashboard:**
```bash
# Navigate to admin login
http://localhost:5173/admin/login

# Use credentials:
Email: admin@replaceroots.com
Password: admin123
```

**2. Managing Leads:**
- **Switch Tabs:** Click between "Patient Leads", "Dentist Leads", "General Inquiries"
- **View Details:** Click "View Details" to see complete form data
- **Update Status:** Use dropdown to change lead status
- **Search:** Use search bar to find specific leads
- **Filter:** Use status filter to view leads by status

**3. Lead Details Modal:**
- **Complete Information:** All form fields displayed
- **Organized Sections:** Data grouped by category
- **System Information:** Record ID, timestamps
- **Professional Layout:** Easy to read and manage

### **📧 Email Notification System**

**Web3Forms Configuration:**
- **Access Key:** `4b1cd135-6c65-4efa-ac6a-2ba4771a0881`
- **Notification Email:** `nextdentist.com@gmail.com`
- **Automatic Triggers:** All form submissions

**Email Content:**
- **Patient Contacts:** Patient details, treatment info, message
- **Dentist Registrations:** Professional details, clinic info, contact
- **General Inquiries:** Contact details, subject, message

### **🔒 Security Features**

**Authentication:**
- ✅ **Database-based authentication** (not static)
- ✅ **Session management** with expiration
- ✅ **Protected routes** - redirects unauthenticated users
- ✅ **Secure password hashing** with bcryptjs

**Access Control:**
- ✅ **Admin-only routes** - `/admin/*`
- ✅ **Session validation** on each request
- ✅ **Automatic logout** on session expiry

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
46.	dental-implants-Udaipur

1.	dental-implants-nashik
2.	dental-implants-Bhubaneswar
3.	dental-implants-mysore
4.	dental-implants-Pimpri-Chinchwad
5.	dental-implants-Kanpur
6.	dental-implants-ajmer
7.	dental-implants-Ludhiana
8.	dental-implants-Faridabad ✔
9.	dental-implants-Asansol ✔
10.	dental-implants-anand ✔
11.	dental-implants-Nellore ✔
12.	dental-implants-Aligarh ✔
13.	dental-implants-Durgapur ✔
14.	dental-implants-Saharanpur ✔
15.	dental-implants-latur ✔
16.	dental-implants-Bareilly ✔
17.	dental-implants-vellore ✔
18.	dental-implants-Tirupati ✔
19.	dental-implants-sri-ganganagar ✔
20.	dental-implants-mehsana ✔
21.	dental-implants-ichalkaranji ✔
22.	dental-implants-berhampore ✔


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
- Supabase account and project

### Environment Setup

1. Create a `.env` file in the root directory:
```bash
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

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

3. Set up the database:
   - Run the SQL schema files in your Supabase SQL editor
   - Start with `admin_auth_schema.sql` for admin authentication
   - Then run `dentist_clinics_schema.sql`, `contact_submissions_schema.sql`, and `general_inquiries_schema.sql`

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Admin Access Setup

1. **Access Admin Login:** Navigate to `/admin/login`
2. **Use Default Credentials:**
   - Email: `admin@replaceroots.com`
   - Password: `admin123`
3. **Access Dashboard:** After login, you'll be redirected to `/admin/dashboard`

## Routes

The application now includes proper URL-based routing:

### **Public Routes:**
- `/` - Home page (landing page with search and clinic recommendations)
- `/clinic` - Default clinic page (Amaravati)
- `/clinic/:clinicName` - Dynamic clinic pages (e.g., `/clinic/esthetica-dental-clinic`)
- `/contact` - Contact page with general inquiry form
- `/about` - About us page
- `/for-dentists` - Page for dentists
- `*` - 404 page for invalid routes

### **Admin Routes (Protected):**
- `/admin/login` - Admin authentication page
- `/admin/dashboard` - Admin dashboard for lead management

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

## Form Features

### **Contact Forms:**
- ✅ **Patient Contact Form** - For patients to contact clinics
- ✅ **Dentist Registration Form** - For dentists to register clinics
- ✅ **General Inquiry Form** - For general inquiries

### **Form Features:**
- ✅ **Real-time Validation** - Client-side form validation
- ✅ **Database Storage** - All submissions stored in Supabase
- ✅ **Email Notifications** - Automatic email alerts via Web3Forms
- ✅ **Admin Management** - Complete lead management in admin dashboard

### **Email Integration:**
- ✅ **Web3Forms Service** - Reliable email delivery
- ✅ **Formatted Content** - Professional email formatting
- ✅ **Reply-to Functionality** - Can reply directly to users
- ✅ **Complete Data** - All form fields included in notifications

## Tech Stack

- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Font Awesome** - Icons
- **Google Fonts (Inter)** - Typography
- **Supabase** - Database and authentication
- **Web3Forms** - Email notification service
- **bcryptjs** - Password hashing
- **react-phone-number-input** - Phone number input component

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
│   ├── Layout.jsx       # Layout wrapper component
│   ├── ProtectedRoute.jsx # Admin route protection
│   ├── AddClinicModal.jsx # Dentist registration modal
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
│   ├── ContactPage.jsx  # Contact page
│   ├── AboutPage.jsx    # About us page
│   ├── ForDentistsPage.jsx # For dentists page
│   ├── AdminLoginPage.jsx # Admin login
│   ├── AdminDashboardPage.jsx # Admin dashboard
│   └── NotFound.jsx     # 404 error page
├── services/            # Service layer
│   ├── contactService.js # Contact form services
│   ├── dentistService.js # Dentist registration services
│   ├── adminAuthService.js # Admin authentication
│   └── web3formsService.js # Email notification service
├── lib/                 # Library configurations
│   └── supabase.js     # Supabase client configuration
├── content/             # Content data
│   └── clinics/        # Clinic data files
├── App.jsx              # Main app component with routing
├── main.jsx             # App entry point
└── index.css            # Global styles
```

## Database Schema

The application uses Supabase with the following tables:

### **Tables:**
- **`dentist_clinics`** - Dentist clinic registrations
- **`contact_submissions`** - Patient contact form submissions
- **`general_inquiries`** - General inquiry form submissions
- **`admin_users`** - Admin user accounts
- **`admin_sessions`** - Admin session management

### **Database Files:**
- **`database/dentist_clinics_schema.sql`** - Dentist clinics table schema
- **`database/contact_submissions_schema.sql`** - Contact submissions schema
- **`database/general_inquiries_schema.sql`** - General inquiries schema
- **`database/admin_auth_schema.sql`** - Admin authentication schema

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