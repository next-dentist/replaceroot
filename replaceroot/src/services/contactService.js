import { supabase } from '../lib/supabase'

// Real contact service using Supabase
export const contactService = {
  // Submit contact form data to Supabase
  async submitContactForm(formData) {
    try {
      console.log('Submitting form data:', formData)
      
      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
            treatment_type: formData.treatmentType,
            preferred_date: formData.preferredDate,
            preferred_time: formData.preferredTime,
            clinic_name: formData.clinicName,
            created_at: new Date().toISOString()
          }
        ])
        .select()

      if (error) {
        console.error('Supabase error details:', error)
        if (error.code === 'PGRST116') {
          throw new Error('Table "contact_submissions" does not exist. Please run the SQL schema script in Supabase.')
        } else if (error.code === 'PGRST301') {
          throw new Error('Invalid API key. Please check your VITE_SUPABASE_ANON_KEY in .env file.')
        } else {
          throw new Error(`Database error: ${error.message}`)
        }
      }

      console.log('Form submitted successfully:', data)
      return { success: true, data }
    } catch (error) {
      console.error('Contact form submission failed:', error)
      throw error
    }
  },

  // Get all contact submissions (for admin panel)
  async getContactSubmissions() {
    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error fetching contact submissions:', error)
        throw new Error(error.message)
      }

      return data
    } catch (error) {
      console.error('Failed to fetch contact submissions:', error)
      throw error
    }
  },

  // Get contact submissions by clinic
  async getContactSubmissionsByClinic(clinicName) {
    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .eq('clinic_name', clinicName)
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error fetching clinic submissions:', error)
        throw new Error(error.message)
      }

      return data
    } catch (error) {
      console.error('Failed to fetch clinic submissions:', error)
      throw error
    }
  }
}
