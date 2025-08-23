-- Fix RLS policies for dentist_clinics table
-- This ensures anonymous clinic registrations work properly

-- First, disable RLS temporarily to check if the table works without it
ALTER TABLE dentist_clinics DISABLE ROW LEVEL SECURITY;

-- Test if we can insert without RLS
-- (This is just to verify the table structure is correct)

-- Now re-enable RLS
ALTER TABLE dentist_clinics ENABLE ROW LEVEL SECURITY;

-- Drop ALL existing policies to start fresh
DROP POLICY IF EXISTS "Allow insert for clinic registrations" ON dentist_clinics;
DROP POLICY IF EXISTS "Allow view approved clinics" ON dentist_clinics;
DROP POLICY IF EXISTS "Allow users to view own clinic data" ON dentist_clinics;
DROP POLICY IF EXISTS "Allow users to update own clinic data" ON dentist_clinics;
DROP POLICY IF EXISTS "Allow users to delete own clinic data" ON dentist_clinics;
DROP POLICY IF EXISTS "Allow service role full access" ON dentist_clinics;

-- Create a simple, permissive insert policy for anonymous users
CREATE POLICY "Allow anonymous insert" ON dentist_clinics
    FOR INSERT 
    WITH CHECK (true);

-- Create a simple select policy for approved clinics
CREATE POLICY "Allow view approved clinics" ON dentist_clinics
    FOR SELECT 
    USING (status = 'approved');

-- Create a policy for authenticated users to view their own data
CREATE POLICY "Allow users to view own data" ON dentist_clinics
    FOR SELECT 
    USING (auth.uid()::text = email);

-- Create a policy for authenticated users to update their own data
CREATE POLICY "Allow users to update own data" ON dentist_clinics
    FOR UPDATE 
    USING (auth.uid()::text = email);

-- Create a policy for authenticated users to delete their own data
CREATE POLICY "Allow users to delete own data" ON dentist_clinics
    FOR DELETE 
    USING (auth.uid()::text = email);

-- Create a policy for service role (admin access)
CREATE POLICY "Allow service role access" ON dentist_clinics
    FOR ALL 
    USING (auth.role() = 'service_role');

-- Grant necessary permissions
GRANT ALL ON dentist_clinics TO anon;
GRANT ALL ON dentist_clinics TO authenticated;
GRANT ALL ON dentist_clinics TO service_role;

-- Verify the policies were created
SELECT 
    policyname, 
    cmd, 
    permissive,
    roles,
    qual,
    with_check
FROM pg_policies 
WHERE tablename = 'dentist_clinics'
ORDER BY policyname;
