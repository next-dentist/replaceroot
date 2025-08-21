import { useState } from 'react';

const ContactForm = ({ clinicName, displayName }) => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate form submission - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Reset form on success
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
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
      <div className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white p-4 sm:p-6">
        <div className="flex items-center justify-center space-x-2">
          <i className="fa-solid fa-envelope text-lg sm:text-2xl"></i>
          <h3 className="text-lg sm:text-xl font-bold">Contact Form</h3>
        </div>
      </div>
      
      <div className="p-6 sm:p-8">
        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
            <div className="flex items-center space-x-2">
              <i className="fa-solid fa-check-circle text-green-500"></i>
              <span className="text-green-700 font-medium">Thank you! Your message has been sent successfully. We'll get back to you soon.</span>
            </div>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
            <div className="flex items-center space-x-2">
              <i className="fa-solid fa-exclamation-circle text-red-500"></i>
              <span className="text-red-700 font-medium">Something went wrong. Please try again or contact us directly.</span>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                placeholder="Enter your full name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                placeholder="Enter your phone number"
              />
            </div>
            
            <div>
              <label htmlFor="treatmentType" className="block text-sm font-medium text-gray-700 mb-2">
                Treatment Type
              </label>
              <select
                id="treatmentType"
                name="treatmentType"
                value={formData.treatmentType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
              >
                <option value="">Select treatment type</option>
                <option value="dental-implant">Dental Implant</option>
                <option value="basal-implant">Basal Implant</option>
                <option value="all-on-4">All-on-4 Implants</option>
                <option value="zygoma-implant">Zygoma Implant</option>
                <option value="consultation">General Consultation</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Date
              </label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
              />
            </div>
            
            <div>
              <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Time
              </label>
              <select
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
              >
                <option value="">Select time</option>
                <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                <option value="afternoon">Afternoon (12:00 PM - 3:00 PM)</option>
                <option value="evening">Evening (3:00 PM - 7:00 PM)</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none"
              placeholder="Tell us about your dental concerns or questions..."
            />
          </div>

          <div className="flex items-center space-x-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:transform-none disabled:shadow-none"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-2">
                  <i className="fa-solid fa-paper-plane"></i>
                  <span>Send Message</span>
                </div>
              )}
            </button>
          </div>

          <div className="text-xs text-gray-500 text-center">
            <p>By submitting this form, you agree to our privacy policy and consent to being contacted regarding your inquiry.</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
