-- Fix Contact Submissions Table Permissions and RLS
-- This script ensures the admin dashboard can properly update lead statuses

-- First, let's make sure the table exists with the correct structure
CREATE TABLE IF NOT EXISTS contact_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    message TEXT NOT NULL,
    treatment_type VARCHAR(100),
    preferred_date DATE,
    preferred_time VARCHAR(50),
    clinic_name VARCHAR(255),
    status VARCHAR(50) DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'converted', 'lost')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add missing columns if they don't exist
DO $$ 
BEGIN
    -- Add treatment_type column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'contact_submissions' AND column_name = 'treatment_type') THEN
        ALTER TABLE contact_submissions ADD COLUMN treatment_type VARCHAR(100);
    END IF;
    
    -- Add preferred_date column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'contact_submissions' AND column_name = 'preferred_date') THEN
        ALTER TABLE contact_submissions ADD COLUMN preferred_date DATE;
    END IF;
    
    -- Add preferred_time column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'contact_submissions' AND column_name = 'preferred_time') THEN
        ALTER TABLE contact_submissions ADD COLUMN preferred_time VARCHAR(50);
    END IF;
    
    -- Add clinic_name column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'contact_submissions' AND column_name = 'clinic_name') THEN
        ALTER TABLE contact_submissions ADD COLUMN clinic_name VARCHAR(255);
    END IF;
    
    -- Add status column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'contact_submissions' AND column_name = 'status') THEN
        ALTER TABLE contact_submissions ADD COLUMN status VARCHAR(50) DEFAULT 'new';
        ALTER TABLE contact_submissions ADD CONSTRAINT check_status 
            CHECK (status IN ('new', 'contacted', 'converted', 'lost'));
    END IF;
END $$;

-- Drop all existing RLS policies to start fresh
DROP POLICY IF EXISTS "Allow insert for contact submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Allow view all contact submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Allow update contact submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Allow delete contact submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Allow all operations for contact submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Allow insert contact submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Allow select contact submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Allow update contact submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Allow delete contact submissions" ON contact_submissions;

-- Disable RLS temporarily to ensure we can work with the table
ALTER TABLE contact_submissions DISABLE ROW LEVEL SECURITY;

-- Grant all necessary permissions
GRANT ALL ON contact_submissions TO anon;
GRANT ALL ON contact_submissions TO authenticated;
GRANT ALL ON contact_submissions TO service_role;

-- Re-enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create new, more permissive RLS policies
CREATE POLICY "Allow all operations for contact submissions" ON contact_submissions
    FOR ALL USING (true) WITH CHECK (true);

-- Alternative: Create specific policies if the above doesn't work
CREATE POLICY "Allow insert contact submissions" ON contact_submissions
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow select contact submissions" ON contact_submissions
    FOR SELECT USING (true);

CREATE POLICY "Allow update contact submissions" ON contact_submissions
    FOR UPDATE USING (true) WITH CHECK (true);

CREATE POLICY "Allow delete contact submissions" ON contact_submissions
    FOR DELETE USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_treatment_type ON contact_submissions(treatment_type);

-- Create or replace the update trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
DROP TRIGGER IF EXISTS update_contact_submissions_updated_at ON contact_submissions;
CREATE TRIGGER update_contact_submissions_updated_at 
    BEFORE UPDATE ON contact_submissions 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data if table is empty
INSERT INTO contact_submissions (name, email, phone, message, treatment_type, preferred_date, preferred_time, clinic_name, status)
SELECT * FROM (VALUES 
    ('John Doe', 'john@example.com', '+1234567890', 'I am interested in dental implants for my practice.', 'dental-implant', '2024-01-15', 'morning', 'Sample Clinic', 'new'),
    ('Jane Smith', 'jane@example.com', '+0987654321', 'Looking for information about your services.', 'consultation', '2024-01-20', 'afternoon', 'Dental Care Center', 'contacted'),
    ('Dr. Mike Johnson', 'mike@clinic.com', '+1122334455', 'Would like to discuss partnership opportunities.', 'basal-implant', '2024-01-25', 'evening', 'Advanced Dental', 'converted'),
    ('Sarah Wilson', 'sarah@email.com', '+1555666777', 'Need consultation for multiple tooth replacement.', 'all-on-4', '2024-01-30', 'morning', 'Implant Specialists', 'new'),
    ('Dr. Robert Brown', 'robert@dental.com', '+1444333222', 'Interested in your lead generation services.', 'zygoma-implant', '2024-02-05', 'afternoon', 'Premium Dental', 'contacted')
) AS v(name, email, phone, message, treatment_type, preferred_date, preferred_time, clinic_name, status)
WHERE NOT EXISTS (SELECT 1 FROM contact_submissions LIMIT 1);

-- Verify the setup
SELECT 
    'Table exists' as check_item,
    EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'contact_submissions') as result
UNION ALL
SELECT 
    'Status column exists',
    EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'contact_submissions' AND column_name = 'status')
UNION ALL
SELECT 
    'Treatment type column exists',
    EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'contact_submissions' AND column_name = 'treatment_type')
UNION ALL
SELECT 
    'RLS enabled',
    rowsecurity FROM pg_tables WHERE tablename = 'contact_submissions'
UNION ALL
SELECT 
    'Policies exist',
    COUNT(*) > 0 FROM pg_policies WHERE tablename = 'contact_submissions';
