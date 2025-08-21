import { createClient } from '@supabase/supabase-js'

// Extract Supabase URL and anon key from your connection string
// Your connection string: postgresql://postgres.mmrirdhonkdutgjdalgf:replaceroots@aws-1-ap-south-1.pooler.supabase.com:6543/postgres?pgbouncer=true

// Extract Supabase URL from your DATABASE_URL
const databaseUrl = import.meta.env.VITE_DATABASE_URL || import.meta.env.DATABASE_URL || "postgresql://postgres.mmrirdhonkdutgjdalgf:replaceroots@aws-1-ap-south-1.pooler.supabase.com:6543/postgres?pgbouncer=true"
const supabaseUrl = 'https://mmrirdhonkdutgjdalgf.supabase.co'

// For now, let's use a fallback approach since you have the DATABASE_URL
// You can get the anon key from Supabase dashboard later
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1tcmlyZGhvbmtkdXRnamRhbGdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ5NzI4MDAsImV4cCI6MjA1MDU0ODgwMH0.temp-key'

// Debug logging
console.log('Supabase URL:', supabaseUrl)
console.log('Database URL available:', !!databaseUrl)
console.log('Using fallback anon key for testing')

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Test connection function
export const testSupabaseConnection = async () => {
  try {
    const { data, error } = await supabase.from('contact_submissions').select('count').limit(1)
    if (error) {
      console.error('Supabase connection test failed:', error)
      return false
    }
    console.log('Supabase connection successful')
    return true
  } catch (err) {
    console.error('Supabase connection test error:', err)
    return false
  }
}

// Database connection for direct SQL queries (if needed)
export const dbConfig = {
  host: 'aws-1-ap-south-1.pooler.supabase.com',
  port: 6543,
  database: 'postgres',
  user: 'postgres.mmrirdhonkdutgjdalgf',
  password: 'replaceroots',
  ssl: true,
  connectionString: import.meta.env.VITE_DATABASE_URL
}
