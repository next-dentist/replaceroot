# Database Setup for ReplaceRoot

This directory contains the database schema and setup instructions for the ReplaceRoot application.

## Tables

### 1. contact_submissions
- Stores patient contact form submissions
- Used by `ContactFormModal.jsx`

### 2. dentist_clinics (NEW)
- Stores dentist clinic registration data
- Used by `AddClinicModal.jsx`

## Setup Instructions

### For Supabase Database

1. **Access Supabase Dashboard**
   - Go to your Supabase project dashboard
   - Navigate to the SQL Editor

2. **Run the Schema Scripts**
   - Copy and paste the contents of `dentist_clinics_schema.sql`
   - Execute the script in the SQL Editor

3. **Verify Table Creation**
   - Go to Table Editor in Supabase
   - You should see the `dentist_clinics` table created
   - Check that the sample data was inserted

4. **Configure Row Level Security (RLS)**
   - The schema includes RLS policies
   - Make sure RLS is enabled for the table
   - Verify the policies are working correctly

### Table Structure: dentist_clinics

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key (auto-generated) |
| dentist_name | VARCHAR(255) | Name of the dentist |
| clinic_name | VARCHAR(255) | Name of the clinic |
| email | VARCHAR(255) | Email address (unique) |
| phone | VARCHAR(50) | Phone number |
| city | VARCHAR(100) | City name |
| state | VARCHAR(100) | State name |
| address | TEXT | Complete clinic address |
| specialization | VARCHAR(100) | Dental specialization |
| experience | VARCHAR(50) | Years of experience |
| consultation_fee | DECIMAL(10,2) | Consultation fee (optional) |
| additional_info | TEXT | Additional information |
| status | VARCHAR(20) | Registration status (pending/approved/rejected/active/inactive) |
| created_at | TIMESTAMP | Record creation timestamp |
| updated_at | TIMESTAMP | Record update timestamp |

### Status Values

- `pending`: New registration awaiting approval
- `approved`: Registration approved by admin
- `rejected`: Registration rejected by admin
- `active`: Clinic is active and receiving leads
- `inactive`: Clinic is temporarily inactive

### API Endpoints

The `dentistService.js` provides the following functions:

- `submitClinicRegistration(formData)` - Submit new clinic registration
- `getClinicRegistrations()` - Get all registrations (admin)
- `getClinicRegistrationsByStatus(status)` - Get registrations by status
- `getClinicRegistrationsByCity(city)` - Get registrations by city
- `updateClinicStatus(id, status)` - Update registration status
- `checkEmailExists(email)` - Check if email already exists

### Testing

1. **Test the Form**
   - Open the ForDentistsPage
   - Click "Add Your Clinic" button
   - Fill out the form and submit
   - Check Supabase table for new record

2. **Verify Data**
   - Go to Supabase Table Editor
   - View the `dentist_clinics` table
   - Confirm the new registration appears

### Troubleshooting

**Common Issues:**

1. **Table doesn't exist error**
   - Run the schema script again
   - Check for any SQL errors

2. **Permission denied error**
   - Verify RLS policies are correct
   - Check API key configuration

3. **Email already exists error**
   - The table enforces unique email constraint
   - Use a different email for testing

### Environment Variables

Make sure these are set in your `.env` file:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### Sample Data

The schema includes sample data for testing:
- Dr. Priya Sharma (Mumbai) - Approved
- Dr. Rajesh Kumar (Delhi) - Approved  
- Dr. Anjali Patel (Bangalore) - Pending
