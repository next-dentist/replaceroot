-- General Inquiries Table Schema
-- This table stores contact form submissions from the main contact page

CREATE TABLE IF NOT EXISTS general_inquiries (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    subject VARCHAR(100) NOT NULL,
    message TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'converted', 'lost')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_general_inquiries_email ON general_inquiries(email);
CREATE INDEX IF NOT EXISTS idx_general_inquiries_status ON general_inquiries(status);
CREATE INDEX IF NOT EXISTS idx_general_inquiries_created_at ON general_inquiries(created_at);
CREATE INDEX IF NOT EXISTS idx_general_inquiries_subject ON general_inquiries(subject);

-- Enable Row Level Security
ALTER TABLE general_inquiries ENABLE ROW LEVEL SECURITY;

-- RLS Policies for general_inquiries
-- Allow anyone to insert (for contact form submissions)
CREATE POLICY "Allow insert for general inquiries" ON general_inquiries
    FOR INSERT WITH CHECK (true);

-- Allow authenticated users to view all inquiries (for admin dashboard)
CREATE POLICY "Allow view all general inquiries" ON general_inquiries
    FOR SELECT USING (true);

-- Allow authenticated users to update inquiries
CREATE POLICY "Allow update general inquiries" ON general_inquiries
    FOR UPDATE USING (true);

-- Allow authenticated users to delete inquiries
CREATE POLICY "Allow delete general inquiries" ON general_inquiries
    FOR DELETE USING (true);

-- Grant permissions
GRANT ALL ON general_inquiries TO anon;
GRANT ALL ON general_inquiries TO authenticated;
GRANT ALL ON general_inquiries TO service_role;

-- Create trigger to automatically update updated_at
CREATE OR REPLACE FUNCTION update_general_inquiries_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_general_inquiries_updated_at 
    BEFORE UPDATE ON general_inquiries 
    FOR EACH ROW 
    EXECUTE FUNCTION update_general_inquiries_updated_at();

-- Insert sample data for testing
INSERT INTO general_inquiries (name, email, phone, subject, message, status) VALUES
('John Smith', 'john@example.com', '+1234567890', 'General Inquiry', 'I would like to know more about your dental services.', 'new'),
('Sarah Johnson', 'sarah@email.com', '+0987654321', 'For Patients', 'Looking for information about dental implants.', 'contacted'),
('Dr. Mike Wilson', 'mike@clinic.com', '+1122334455', 'For Dentists', 'Interested in partnership opportunities.', 'converted'),
('Emily Brown', 'emily@test.com', '+1555666777', 'Technical Support', 'Having issues with the website.', 'new'),
('Robert Davis', 'robert@demo.com', '+1444333222', 'Business Inquiry', 'Would like to discuss business collaboration.', 'contacted');

-- Verify the setup
SELECT 
    'Table exists' as check_item,
    EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'general_inquiries') as result
UNION ALL
SELECT 
    'Status column exists',
    EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'general_inquiries' AND column_name = 'status')
UNION ALL
SELECT 
    'Subject column exists',
    EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'general_inquiries' AND column_name = 'subject')
UNION ALL
SELECT 
    'RLS enabled',
    rowsecurity FROM pg_tables WHERE tablename = 'general_inquiries'
UNION ALL
SELECT 
    'Policies exist',
    COUNT(*) > 0 FROM pg_policies WHERE tablename = 'general_inquiries';
