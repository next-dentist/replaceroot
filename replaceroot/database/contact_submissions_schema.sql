-- Contact Submissions Table Schema
-- This table stores contact form submissions for admin dashboard

CREATE TABLE IF NOT EXISTS contact_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    message TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'converted', 'lost')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- RLS Policies for contact_submissions
-- Allow anyone to insert (for contact form submissions)
CREATE POLICY "Allow insert for contact submissions" ON contact_submissions
    FOR INSERT WITH CHECK (true);

-- Allow authenticated users to view all submissions (for admin dashboard)
CREATE POLICY "Allow view all contact submissions" ON contact_submissions
    FOR SELECT USING (true);

-- Allow authenticated users to update submissions
CREATE POLICY "Allow update contact submissions" ON contact_submissions
    FOR UPDATE USING (true);

-- Allow authenticated users to delete submissions
CREATE POLICY "Allow delete contact submissions" ON contact_submissions
    FOR DELETE USING (true);

-- Grant permissions
GRANT ALL ON contact_submissions TO anon;
GRANT ALL ON contact_submissions TO authenticated;
GRANT ALL ON contact_submissions TO service_role;

-- Create a function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_contact_submissions_updated_at 
    BEFORE UPDATE ON contact_submissions 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Insert some sample data for testing
INSERT INTO contact_submissions (name, email, phone, message, status) VALUES
('John Doe', 'john@example.com', '+1234567890', 'I am interested in dental implants for my practice.', 'new'),
('Jane Smith', 'jane@example.com', '+0987654321', 'Looking for information about your services.', 'contacted'),
('Dr. Mike Johnson', 'mike@clinic.com', '+1122334455', 'Would like to discuss partnership opportunities.', 'converted'),
('Sarah Wilson', 'sarah@email.com', '+1555666777', 'Need consultation for multiple tooth replacement.', 'new'),
('Dr. Robert Brown', 'robert@dental.com', '+1444333222', 'Interested in your lead generation services.', 'contacted');
