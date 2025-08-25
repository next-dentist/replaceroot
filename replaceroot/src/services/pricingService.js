import { supabase } from '../lib/supabase'
import { web3formsService } from './web3formsService'

// Pricing service using Supabase
export const pricingService = {
  // Submit pricing form data to Supabase
  async submitPricingForm(formData) {
    try {
      console.log('Submitting pricing form data:', formData)
      
      const { data, error } = await supabase
        .from('pricing_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            clinic_name: formData.clinicName,
            location: formData.location,
            selected_plan: formData.plan,
            message: formData.message,
            status: 'new', // Default status for new submissions
            created_at: new Date().toISOString()
          }
        ])
        .select()

      if (error) {
        console.error('Supabase error details:', error)
        if (error.code === 'PGRST116') {
          throw new Error('Table "pricing_submissions" does not exist. Please run the SQL schema script in Supabase.')
        } else if (error.code === 'PGRST301') {
          throw new Error('Invalid API key. Please check your VITE_SUPABASE_ANON_KEY in .env file.')
        } else {
          throw new Error(`Database error: ${error.message}`)
        }
      }

      console.log('Pricing form submitted successfully:', data)
      
      // Send email notification
      try {
        await web3formsService.sendPricingFormNotification(formData);
        console.log('Email notification sent for pricing form');
      } catch (emailError) {
        console.error('Failed to send email notification:', emailError);
        // Don't throw error here - form submission was successful, email is secondary
      }
      
      return { success: true, data }
    } catch (error) {
      console.error('Pricing form submission failed:', error)
      throw error
    }
  },

  // Get all pricing submissions (for admin panel)
  async getPricingSubmissions() {
    try {
      const { data, error } = await supabase
        .from('pricing_submissions')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        throw error
      }

      return data
    } catch (error) {
      console.error('Error fetching pricing submissions:', error)
      throw error
    }
  },

  // Update pricing submission status (for admin panel)
  async updateSubmissionStatus(id, status) {
    try {
      const { data, error } = await supabase
        .from('pricing_submissions')
        .update({ 
          status: status,
          updated_at: new Date().toISOString()
        })
        .eq('id', id)
        .select()

      if (error) {
        throw error
      }

      return data
    } catch (error) {
      console.error('Error updating pricing submission status:', error)
      throw error
    }
  }
}
