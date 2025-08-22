-- Create dentist_clinics table for storing clinic registration data
CREATE TABLE IF NOT EXISTS dentist_clinics (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    dentist_name VARCHAR(255) NOT NULL,
    clinic_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone VARCHAR(50) NOT NULL,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    address TEXT NOT NULL,
    specialization VARCHAR(100) NOT NULL,
    experience VARCHAR(50) NOT NULL,
    consultation_fee DECIMAL(10,2),
    additional_info TEXT,
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected', 'active', 'inactive')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for better query performance
CREATE INDEX IF NOT EXISTS idx_dentist_clinics_email ON dentist_clinics(email);
CREATE INDEX IF NOT EXISTS idx_dentist_clinics_status ON dentist_clinics(status);
CREATE INDEX IF NOT EXISTS idx_dentist_clinics_city ON dentist_clinics(city);
CREATE INDEX IF NOT EXISTS idx_dentist_clinics_created_at ON dentist_clinics(created_at);

-- Create trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_dentist_clinics_updated_at 
    BEFORE UPDATE ON dentist_clinics 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE dentist_clinics ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow insert for clinic registrations" ON dentist_clinics;
DROP POLICY IF EXISTS "Allow users to view own clinic data" ON dentist_clinics;
DROP POLICY IF EXISTS "Allow users to update own clinic data" ON dentist_clinics;
DROP POLICY IF EXISTS "Allow service role full access" ON dentist_clinics;

-- Create policies for RLS
-- Allow anyone to insert (for clinic registrations) - NO AUTHENTICATION REQUIRED
CREATE POLICY "Allow insert for clinic registrations" ON dentist_clinics
    FOR INSERT WITH CHECK (true);

-- Allow anyone to view approved clinics (for public display)
CREATE POLICY "Allow view approved clinics" ON dentist_clinics
    FOR SELECT USING (status = 'approved');

-- Allow authenticated users to view their own clinic data
CREATE POLICY "Allow users to view own clinic data" ON dentist_clinics
    FOR SELECT USING (auth.uid()::text = email);

-- Allow authenticated users to update their own clinic data
CREATE POLICY "Allow users to update own clinic data" ON dentist_clinics
    FOR UPDATE USING (auth.uid()::text = email);

-- Allow service role to perform all operations (for admin panel)
CREATE POLICY "Allow service role full access" ON dentist_clinics
    FOR ALL USING (auth.role() = 'service_role');

-- Insert some sample data for testing (optional)
INSERT INTO dentist_clinics (
    dentist_name, 
    clinic_name, 
    email, 
    phone, 
    city, 
    state, 
    address, 
    specialization, 
    experience, 
    consultation_fee, 
    additional_info, 
    status
) VALUES 
(
    'Dr. Priya Sharma',
    'Dental Excellence Clinic',
    'priya.sharma@dentalexcellence.com',
    '+91-9876543210',
    'Mumbai',
    'Maharashtra',
    '123 Marine Drive, Colaba, Mumbai - 400001',
    'Dental Implants',
    '11-15 years',
    1500.00,
    'Specialized in All-on-4 and immediate loading implants',
    'approved'
),
(
    'Dr. Rajesh Kumar',
    'Smile Dental Care',
    'rajesh.kumar@smiledental.com',
    '+91-9876543211',
    'Delhi',
    'Delhi',
    '456 Connaught Place, New Delhi - 110001',
    'Oral Surgery',
    '16-20 years',
    2000.00,
    'Expert in complex implant cases and bone grafting',
    'approved'
),
(
    'Dr. Anjali Patel',
    'Advanced Dental Solutions',
    'anjali.patel@advanceddental.com',
    '+91-9876543212',
    'Bangalore',
    'Karnataka',
    '789 MG Road, Bangalore - 560001',
    'Prosthodontics',
    '6-10 years',
    1200.00,
    'Specialized in full mouth rehabilitation',
    'pending'
)
ON CONFLICT (email) DO NOTHING;

-- Grant necessary permissions
GRANT ALL ON dentist_clinics TO authenticated;
GRANT ALL ON dentist_clinics TO service_role;
GRANT ALL ON dentist_clinics TO anon;
GRANT USAGE ON SCHEMA public TO authenticated;
GRANT USAGE ON SCHEMA public TO service_role;
GRANT USAGE ON SCHEMA public TO anon;
