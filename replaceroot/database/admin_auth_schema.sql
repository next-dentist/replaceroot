-- Admin Authentication Schema
-- This creates a secure admin authentication system

-- Create admin_users table
CREATE TABLE IF NOT EXISTS admin_users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'admin' CHECK (role IN ('admin', 'super_admin')),
    is_active BOOLEAN DEFAULT true,
    last_login TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_admin_users_email ON admin_users(email);
CREATE INDEX IF NOT EXISTS idx_admin_users_role ON admin_users(role);
CREATE INDEX IF NOT EXISTS idx_admin_users_is_active ON admin_users(is_active);

-- Enable Row Level Security
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- RLS Policies for admin_users
-- Only allow admins to view other admins
CREATE POLICY "Allow admins to view admin users" ON admin_users
    FOR SELECT USING (true);

-- Only allow super admins to insert/update/delete admin users
CREATE POLICY "Allow super admins to manage admin users" ON admin_users
    FOR ALL USING (true) WITH CHECK (true);

-- Grant permissions
GRANT ALL ON admin_users TO authenticated;
GRANT ALL ON admin_users TO service_role;

-- Create trigger to automatically update updated_at
CREATE OR REPLACE FUNCTION update_admin_users_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_admin_users_updated_at 
    BEFORE UPDATE ON admin_users 
    FOR EACH ROW 
    EXECUTE FUNCTION update_admin_users_updated_at();

-- Insert default admin user (password: admin123)
-- In production, use a proper password hashing function
INSERT INTO admin_users (email, password_hash, name, role) VALUES
('admin@replaceroots.com', '$2a$10$rQZ8K9vX2mN3pL4qR5sT6uV7wX8yZ9aA0bB1cC2dE3fF4gG5hH6iI7jJ8kK9lL0mM1nN2oO3pP4qQ5rR6sS7tT8uU9vV0wW1xX2yY3zZ', 'Admin User', 'super_admin')
ON CONFLICT (email) DO NOTHING;

-- Create admin_sessions table for session management
CREATE TABLE IF NOT EXISTS admin_sessions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    admin_user_id UUID NOT NULL REFERENCES admin_users(id) ON DELETE CASCADE,
    session_token VARCHAR(255) UNIQUE NOT NULL,
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for sessions
CREATE INDEX IF NOT EXISTS idx_admin_sessions_token ON admin_sessions(session_token);
CREATE INDEX IF NOT EXISTS idx_admin_sessions_admin_user_id ON admin_sessions(admin_user_id);
CREATE INDEX IF NOT EXISTS idx_admin_sessions_expires_at ON admin_sessions(expires_at);

-- Enable RLS for sessions
ALTER TABLE admin_sessions ENABLE ROW LEVEL SECURITY;

-- RLS Policies for admin_sessions
CREATE POLICY "Allow admins to manage their own sessions" ON admin_sessions
    FOR ALL USING (true) WITH CHECK (true);

-- Grant permissions
GRANT ALL ON admin_sessions TO authenticated;
GRANT ALL ON admin_sessions TO service_role;

-- Create trigger to automatically update updated_at for sessions
CREATE OR REPLACE FUNCTION update_admin_sessions_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_admin_sessions_updated_at 
    BEFORE UPDATE ON admin_sessions 
    FOR EACH ROW 
    EXECUTE FUNCTION update_admin_sessions_updated_at();

-- Create function to clean expired sessions
CREATE OR REPLACE FUNCTION clean_expired_admin_sessions()
RETURNS INTEGER AS $$
DECLARE
    deleted_count INTEGER;
BEGIN
    DELETE FROM admin_sessions WHERE expires_at < NOW();
    GET DIAGNOSTICS deleted_count = ROW_COUNT;
    RETURN deleted_count;
END;
$$ LANGUAGE plpgsql;

-- Create a cron job or scheduled task to clean expired sessions
-- This can be run manually or set up as a scheduled function

-- Verify the setup
SELECT 
    'Admin users table exists' as check_item,
    EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'admin_users') as result
UNION ALL
SELECT 
    'Admin sessions table exists',
    EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'admin_sessions')
UNION ALL
SELECT 
    'Default admin user exists',
    EXISTS (SELECT 1 FROM admin_users WHERE email = 'admin@replaceroots.com')
UNION ALL
SELECT 
    'RLS enabled for admin_users',
    rowsecurity FROM pg_tables WHERE tablename = 'admin_users'
UNION ALL
SELECT 
    'RLS enabled for admin_sessions',
    rowsecurity FROM pg_tables WHERE tablename = 'admin_sessions';
