-- Remove unique constraint from email field in dentist_clinics table
-- This allows multiple clinics to register with the same email address

-- Drop the unique constraint on email
ALTER TABLE dentist_clinics DROP CONSTRAINT IF EXISTS dentist_clinics_email_key;

-- Drop the index on email (since it was created for the unique constraint)
DROP INDEX IF EXISTS idx_dentist_clinics_email;

-- Create a new non-unique index on email for better query performance
CREATE INDEX IF NOT EXISTS idx_dentist_clinics_email ON dentist_clinics(email);

-- Drop ALL existing RLS policies to avoid conflicts
DROP POLICY IF EXISTS "Allow insert for clinic registrations" ON dentist_clinics;
DROP POLICY IF EXISTS "Allow view approved clinics" ON dentist_clinics;
DROP POLICY IF EXISTS "Allow users to view own clinic data" ON dentist_clinics;
DROP POLICY IF EXISTS "Allow users to update own clinic data" ON dentist_clinics;
DROP POLICY IF EXISTS "Allow users to delete own clinic data" ON dentist_clinics;
DROP POLICY IF EXISTS "Allow service role full access" ON dentist_clinics;

-- Recreate all RLS policies for multiple clinics per email
-- Allow anyone to insert (for clinic registrations) - NO AUTHENTICATION REQUIRED
CREATE POLICY "Allow insert for clinic registrations" ON dentist_clinics
    FOR INSERT WITH CHECK (true);

-- Allow anyone to view approved clinics (for public display)
CREATE POLICY "Allow view approved clinics" ON dentist_clinics
    FOR SELECT USING (status = 'approved');

-- Allow authenticated users to view their own clinic data (multiple clinics per email)
CREATE POLICY "Allow users to view own clinic data" ON dentist_clinics
    FOR SELECT USING (auth.uid()::text = email);

-- Allow authenticated users to update their own clinic data (multiple clinics per email)
CREATE POLICY "Allow users to update own clinic data" ON dentist_clinics
    FOR UPDATE USING (auth.uid()::text = email);

-- Allow authenticated users to delete their own clinic data (multiple clinics per email)
CREATE POLICY "Allow users to delete own clinic data" ON dentist_clinics
    FOR DELETE USING (auth.uid()::text = email);

-- Allow service role to perform all operations (for admin panel)
CREATE POLICY "Allow service role full access" ON dentist_clinics
    FOR ALL USING (auth.role() = 'service_role');

-- Verify the changes
-- You can run these queries to confirm the changes:
-- SELECT constraint_name, constraint_type 
-- FROM information_schema.table_constraints 
-- WHERE table_name = 'dentist_clinics' AND constraint_name LIKE '%email%';
--
-- SELECT policyname, cmd, qual 
-- FROM pg_policies 
-- WHERE tablename = 'dentist_clinics';
