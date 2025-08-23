-- Temporarily disable RLS to test clinic registration form
-- This will allow the form to work while we debug the RLS policies

-- Disable Row Level Security temporarily
ALTER TABLE dentist_clinics DISABLE ROW LEVEL SECURITY;

-- Grant all permissions to ensure access
GRANT ALL ON dentist_clinics TO anon;
GRANT ALL ON dentist_clinics TO authenticated;
GRANT ALL ON dentist_clinics TO service_role;

-- Verify RLS is disabled
SELECT 
    schemaname,
    tablename,
    rowsecurity
FROM pg_tables 
WHERE tablename = 'dentist_clinics';

-- Test insert (optional - you can run this to test)
-- INSERT INTO dentist_clinics (
--     dentist_name, 
--     clinic_name, 
--     email, 
--     phone, 
--     city, 
--     state, 
--     address, 
--     specialization, 
--     experience, 
--     consultation_fee, 
--     additional_info, 
--     status
-- ) VALUES (
--     'Test Doctor',
--     'Test Clinic',
--     'test@example.com',
--     '+91-1234567890',
--     'Test City',
--     'Test State',
--     'Test Address',
--     'Dental Implants',
--     '3-5 years',
--     1000.00,
--     'Test registration',
--     'pending'
-- );
