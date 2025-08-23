import { supabase } from '../lib/supabase'
import { web3formsService } from './web3formsService'

// Real contact service using Supabase
export const contactService = {
  // Submit contact form data to Supabase (for clinic contact forms)
  async submitContactForm(formData) {
    try {
      console.log('Submitting clinic contact form data:', formData)
      
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

      console.log('Clinic contact form submitted successfully:', data)
      
      // Send email notification
      try {
        await web3formsService.sendClinicContactNotification(formData);
        console.log('Email notification sent for clinic contact');
      } catch (emailError) {
        console.error('Failed to send email notification:', emailError);
        // Don't throw error here - form submission was successful, email is secondary
      }
      
      return { success: true, data }
    } catch (error) {
      console.error('Clinic contact form submission failed:', error)
      throw error
    }
  },

  // Submit general inquiry form data to Supabase (for main contact page)
  async submitGeneralInquiry(formData) {
    try {
      console.log('Submitting general inquiry form data:', formData)
      
      const { data, error } = await supabase
        .from('general_inquiries')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            message: formData.message,
            created_at: new Date().toISOString()
          }
        ])
        .select()

      if (error) {
        console.error('Supabase error details:', error)
        if (error.code === 'PGRST116') {
          throw new Error('Table "general_inquiries" does not exist. Please run the SQL schema script in Supabase.')
        } else if (error.code === 'PGRST301') {
          throw new Error('Invalid API key. Please check your VITE_SUPABASE_ANON_KEY in .env file.')
        } else {
          throw new Error(`Database error: ${error.message}`)
        }
      }

      console.log('General inquiry submitted successfully:', data)
      
      // Send email notification
      try {
        await web3formsService.sendGeneralInquiryNotification(formData);
        console.log('Email notification sent for general inquiry');
      } catch (emailError) {
        console.error('Failed to send email notification:', emailError);
        // Don't throw error here - form submission was successful, email is secondary
      }
      
      return { success: true, data }
    } catch (error) {
      console.error('General inquiry submission failed:', error)
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
