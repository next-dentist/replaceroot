import { supabase } from '../lib/supabase'

// Dentist service using Supabase
export const dentistService = {
  // Submit dentist clinic registration to Supabase
  async submitClinicRegistration(formData) {
    try {
      console.log('Submitting clinic registration:', formData)
      
      const { data, error } = await supabase
        .from('dentist_clinics')
        .insert([
          {
            dentist_name: formData.dentistName,
            clinic_name: formData.clinicName,
            email: formData.email,
            phone: formData.phone,
            city: formData.city,
            state: formData.state,
            address: formData.address,
            specialization: formData.specialization,
            experience: formData.experience,
            consultation_fee: formData.consultationFee ? parseFloat(formData.consultationFee) : null,
            additional_info: formData.message,
            status: 'pending', // Default status for new registrations
            created_at: new Date().toISOString()
          }
        ])
        .select()

      if (error) {
        console.error('Supabase error details:', error)
        if (error.code === 'PGRST116') {
          throw new Error('Table "dentist_clinics" does not exist. Please run the SQL schema script in Supabase.')
        } else if (error.code === 'PGRST301') {
          throw new Error('Invalid API key. Please check your VITE_SUPABASE_ANON_KEY in .env file.')
        } else {
          throw new Error(`Database error: ${error.message}`)
        }
      }

      console.log('Clinic registration submitted successfully:', data)
      return { success: true, data }
    } catch (error) {
      console.error('Clinic registration submission failed:', error)
      throw error
    }
  },

  // Get all dentist clinic registrations (for admin panel)
  async getClinicRegistrations() {
    try {
      const { data, error } = await supabase
        .from('dentist_clinics')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error fetching clinic registrations:', error)
        throw new Error(error.message)
      }

      return data
    } catch (error) {
      console.error('Failed to fetch clinic registrations:', error)
      throw error
    }
  },

  // Get clinic registrations by status
  async getClinicRegistrationsByStatus(status) {
    try {
      const { data, error } = await supabase
        .from('dentist_clinics')
        .select('*')
        .eq('status', status)
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error fetching clinic registrations by status:', error)
        throw new Error(error.message)
      }

      return data
    } catch (error) {
      console.error('Failed to fetch clinic registrations by status:', error)
      throw error
    }
  },

  // Get clinic registrations by city
  async getClinicRegistrationsByCity(city) {
    try {
      const { data, error } = await supabase
        .from('dentist_clinics')
        .select('*')
        .eq('city', city)
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error fetching clinic registrations by city:', error)
        throw new Error(error.message)
      }

      return data
    } catch (error) {
      console.error('Failed to fetch clinic registrations by city:', error)
      throw error
    }
  },

  // Update clinic registration status
  async updateClinicStatus(id, status) {
    try {
      const { data, error } = await supabase
        .from('dentist_clinics')
        .update({ 
          status: status,
          updated_at: new Date().toISOString()
        })
        .eq('id', id)
        .select()

      if (error) {
        console.error('Error updating clinic status:', error)
        throw new Error(error.message)
      }

      return data
    } catch (error) {
      console.error('Failed to update clinic status:', error)
      throw error
    }
  },

  // Check if email already exists
  async checkEmailExists(email) {
    try {
      const { data, error } = await supabase
        .from('dentist_clinics')
        .select('id, email')
        .eq('email', email)
        .limit(1)

      if (error) {
        console.error('Error checking email existence:', error)
        throw new Error(error.message)
      }

      return data.length > 0
    } catch (error) {
      console.error('Failed to check email existence:', error)
      throw error
    }
  }
}
