import { useState, useEffect } from 'react';
import { contactService } from '../../services/contactService';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

// Custom styles for enhanced phone input
const phoneInputStyles = `
  .PhoneInput {
    position: relative;
    display: flex;
    align-items: center;
    background: white;
    border: 1px solid #d1d5db;
    border-radius: 12px;
    transition: all 0.3s ease;
    overflow: hidden;
  }
  
  .PhoneInput:focus-within {
    border-color: #06b6d4;
    box-shadow: 0 0 0 2px rgba(6, 182, 212, 0.1);
  }
  
  .PhoneInputCountry {
    display: flex;
    align-items: center;
    padding: 12px 16px;
    background: #f9fafb;
    border-right: 1px solid #e5e7eb;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }
  
  .PhoneInputCountry:hover {
    background: #f3f4f6;
  }
  
  .PhoneInputCountrySelect {
    background: transparent;
    border: none;
    font-size: 14px;
    color: #374151;
    cursor: pointer;
    padding: 0;
    margin: 0;
    outline: none;
  }
  
  .PhoneInputCountryIcon {
    width: 20px;
    height: 15px;
    margin-right: 8px;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
  
  .PhoneInputCountrySelectArrow {
    width: 8px;
    height: 8px;
    margin-left: 8px;
    color: #6b7280;
  }
  
  .PhoneInputInput {
    flex: 1;
    padding: 12px 16px;
    border: none;
    background: transparent;
    font-size: 14px;
    color: #374151;
    outline: none;
    min-width: 0;
  }
  
  .PhoneInputInput::placeholder {
    color: #9ca3af;
  }
  
  .PhoneInputInput:focus {
    outline: none;
  }
`;

const ContactFormModal = ({ isOpen, onClose, clinicName, displayName }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredDate: '',
    preferredTime: '',
    treatmentType: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      if (document.body) {
        document.body.style.overflow = 'hidden';
      }
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      if (document.body) {
        document.body.style.overflow = 'unset';
      }
    };
  }, [isOpen, onClose]);

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        preferredDate: '',
        preferredTime: '',
        treatmentType: ''
      });
      setSubmitStatus(null);
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhoneChange = (value) => {
    setFormData(prev => ({
      ...prev,
      phone: value || ''
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await contactService.submitContactForm({
        ...formData,
        clinicName
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        preferredDate: '',
        preferredTime: '',
        treatmentType: ''
      });
      
      setSubmitStatus('success');
      
      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <style>{phoneInputStyles}</style>
      <div 
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        onClick={handleBackdropClick}
      >
        <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          {/* Enhanced Header with Gradient */}
          <div className="relative overflow-hidden rounded-t-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-600"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-teal-400/20"></div>
            <div className="relative flex items-center justify-between p-6 text-white">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <i className="fa-solid fa-calendar-check text-xl"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Book Appointment</h2>
                  <p className="text-cyan-100 mt-1">Get in touch with {displayName} clinic</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center text-white hover:bg-white/20 rounded-full transition-colors backdrop-blur-sm"
              >
                <i className="fa-solid fa-times text-xl"></i>
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl">
                <div className="flex items-center">
                  <i className="fa-solid fa-check-circle text-green-500 mr-2"></i>
                  <span>Thank you! Your appointment request has been submitted successfully.</span>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl">
                <div className="flex items-center">
                  <i className="fa-solid fa-exclamation-triangle text-red-500 mr-2"></i>
                  <span>Sorry, there was an error submitting your request. Please try again.</span>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="modal-name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="modal-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                    <i className="fa-solid fa-user"></i>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="modal-email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="modal-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="modal-phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <PhoneInput
                  international
                  defaultCountry="IN"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label htmlFor="modal-treatmentType" className="block text-sm font-medium text-gray-700 mb-2">
                  Treatment Type
                </label>
                <div className="relative">
                  <select
                    id="modal-treatmentType"
                    name="treatmentType"
                    value={formData.treatmentType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 appearance-none"
                  >
                    <option value="">Select treatment type</option>
                    <option value="dental-implant">Dental Implant</option>
                    <option value="basal-implant">Basal Implant</option>
                    <option value="all-on-4">All-on-4 Implants</option>
                    <option value="zygoma-implant">Zygoma Implant</option>
                    <option value="consultation">General Consultation</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                    <i className="fa-solid fa-chevron-down"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="modal-preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="modal-preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              
              <div>
                <label htmlFor="modal-preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Time
                </label>
                <div className="relative">
                  <select
                    id="modal-preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 appearance-none"
                  >
                    <option value="">Select time</option>
                    <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                    <option value="afternoon">Afternoon (12:00 PM - 3:00 PM)</option>
                    <option value="evening">Evening (3:00 PM - 7:00 PM)</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                    <i className="fa-solid fa-chevron-down"></i>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="modal-message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <div className="relative">
                <textarea
                  id="modal-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your dental concerns or specific requirements..."
                />
                <div className="pointer-events-none absolute top-3 right-3 text-gray-400">
                  <i className="fa-solid fa-comment"></i>
                </div>
              </div>
            </div>

            {/* Enhanced Submit Button */}
            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-xl hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <i className="fa-solid fa-paper-plane mr-2"></i>
                    Submit Request
                  </span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactFormModal;
