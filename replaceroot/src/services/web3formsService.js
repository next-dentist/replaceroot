// Web3Forms Service for Email Notifications
const WEB3FORMS_ACCESS_KEY = '4b1cd135-6c65-4efa-ac6a-2ba4771a0881';
const NOTIFICATION_EMAIL = 'nextdentist.com@gmail.com';

export const web3formsService = {
  // Send email notification for clinic contact form submissions
  async sendClinicContactNotification(formData) {
    try {
      const emailData = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `New Patient Contact - ${formData.clinicName || 'Clinic'}`,
        from_name: 'ReplaceRoots Contact Form',
        message: `
New patient contact form submission:

Patient Details:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone || 'Not provided'}

Treatment Information:
- Treatment Type: ${formData.treatmentType || 'Not specified'}
- Preferred Date: ${formData.preferredDate || 'Not specified'}
- Preferred Time: ${formData.preferredTime || 'Not specified'}

Message:
${formData.message}

Clinic: ${formData.clinicName || 'Not specified'}

Submitted on: ${new Date().toLocaleString()}
        `,
        replyto: formData.email
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData)
      });

      const result = await response.json();
      
      if (result.success) {
        console.log('Clinic contact email notification sent successfully');
        return { success: true };
      } else {
        throw new Error('Failed to send email notification');
      }
    } catch (error) {
      console.error('Error sending clinic contact email notification:', error);
      throw error;
    }
  },

  // Send email notification for general inquiry form submissions
  async sendGeneralInquiryNotification(formData) {
    try {
      const emailData = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `New General Inquiry - ${formData.subject}`,
        from_name: 'ReplaceRoots Contact Form',
        message: `
New general inquiry form submission:

Contact Details:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone || 'Not provided'}

Inquiry Details:
- Subject: ${formData.subject}
- Message: ${formData.message}

Submitted on: ${new Date().toLocaleString()}
        `,
        replyto: formData.email
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData)
      });

      const result = await response.json();
      
      if (result.success) {
        console.log('General inquiry email notification sent successfully');
        return { success: true };
      } else {
        throw new Error('Failed to send email notification');
      }
    } catch (error) {
      console.error('Error sending general inquiry email notification:', error);
      throw error;
    }
  },

  // Send email notification for dentist clinic registrations
  async sendDentistRegistrationNotification(formData) {
    try {
      const emailData = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `New Dentist Clinic Registration - ${formData.clinic_name}`,
        from_name: 'ReplaceRoots Registration Form',
        message: `
New dentist clinic registration:

Dentist Details:
- Name: ${formData.dentist_name}
- Email: ${formData.email}
- Phone: ${formData.phone || 'Not provided'}

Clinic Details:
- Clinic Name: ${formData.clinic_name}
- Location: ${formData.city}, ${formData.state}
- Address: ${formData.address}

Professional Information:
- Specialization: ${formData.specialization}
- Experience: ${formData.experience}
- Consultation Fee: ${formData.consultation_fee || 'Not specified'}

Additional Information:
${formData.additional_info || 'No additional information provided'}

Submitted on: ${new Date().toLocaleString()}
        `,
        replyto: formData.email
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData)
      });

      const result = await response.json();
      
      if (result.success) {
        console.log('Dentist registration email notification sent successfully');
        return { success: true };
      } else {
        throw new Error('Failed to send email notification');
      }
    } catch (error) {
      console.error('Error sending dentist registration email notification:', error);
      throw error;
    }
  }
};
