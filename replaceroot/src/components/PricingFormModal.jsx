import React, { useState } from 'react';
import { pricingService } from '../services/pricingService';

const PricingFormModal = ({ isOpen, onClose, selectedPlan }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    clinicName: '',
    location: '',
    plan: selectedPlan || 'Growth',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await pricingService.submitPricingForm(formData);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        clinicName: '',
        location: '',
        plan: selectedPlan || 'Growth',
        message: ''
      });
      
      setSubmitStatus('success');
      
      // Close modal after 3 seconds
      setTimeout(() => {
        onClose();
        setSubmitStatus(null);
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4 bg-black/50 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-sm sm:max-w-2xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
        {/* Enhanced Header with Gradient */}
        <div className="relative overflow-hidden rounded-t-xl sm:rounded-t-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-600"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-teal-400/20"></div>
          <div className="relative flex items-center justify-between p-4 sm:p-6 text-white">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center backdrop-blur-sm">
                <i className="fa-solid fa-tags text-sm sm:text-xl"></i>
              </div>
              <div>
                <h2 className="text-lg sm:text-2xl font-bold">Get Started</h2>
                <p className="text-cyan-100 mt-0.5 sm:mt-1 text-xs sm:text-sm">Join our {selectedPlan} Plan</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-white hover:bg-white/20 rounded-full transition-colors backdrop-blur-sm"
            >
              <i className="fa-solid fa-times text-sm sm:text-xl"></i>
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          {/* Success/Error Messages */}
          {submitStatus === 'success' && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl">
              <div className="flex items-center">
                <i className="fa-solid fa-check-circle text-green-500 mr-2 text-sm sm:text-base"></i>
                <span className="text-sm sm:text-base">Thank you! Your application has been submitted successfully.</span>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl">
              <div className="flex items-center">
                <i className="fa-solid fa-exclamation-triangle text-red-500 mr-2 text-sm sm:text-base"></i>
                <span className="text-sm sm:text-base">Sorry, there was an error submitting your application. Please try again.</span>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label htmlFor="modal-name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
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
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 pr-8 sm:pr-10 border border-gray-300 rounded-lg sm:rounded-xl bg-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                  placeholder="Enter your full name"
                />
                <div className="pointer-events-none absolute inset-y-0 right-2 sm:right-3 flex items-center text-gray-400">
                  <i className="fa-solid fa-user text-sm sm:text-base"></i>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="modal-email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
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
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 pr-8 sm:pr-10 border border-gray-300 rounded-lg sm:rounded-xl bg-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                  placeholder="Enter your email address"
                />
                <div className="pointer-events-none absolute inset-y-0 right-2 sm:right-3 flex items-center text-gray-400">
                  <i className="fa-solid fa-envelope text-sm sm:text-base"></i>
                </div>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="modal-phone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
              Phone Number *
            </label>
            <div className="relative">
              <input
                type="tel"
                id="modal-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 pr-8 sm:pr-10 border border-gray-300 rounded-lg sm:rounded-xl bg-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                placeholder="Enter your phone number"
              />
              <div className="pointer-events-none absolute inset-y-0 right-2 sm:right-3 flex items-center text-gray-400">
                <i className="fa-solid fa-phone text-sm sm:text-base"></i>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label htmlFor="modal-clinic" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                Clinic Name *
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="modal-clinic"
                  name="clinicName"
                  value={formData.clinicName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 pr-8 sm:pr-10 border border-gray-300 rounded-lg sm:rounded-xl bg-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                  placeholder="Enter your clinic name"
                />
                <div className="pointer-events-none absolute inset-y-0 right-2 sm:right-3 flex items-center text-gray-400">
                  <i className="fa-solid fa-hospital text-sm sm:text-base"></i>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="modal-location" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                Location *
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="modal-location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 pr-8 sm:pr-10 border border-gray-300 rounded-lg sm:rounded-xl bg-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                  placeholder="Enter your clinic location"
                />
                <div className="pointer-events-none absolute inset-y-0 right-2 sm:right-3 flex items-center text-gray-400">
                  <i className="fa-solid fa-map-marker-alt text-sm sm:text-base"></i>
                </div>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="modal-plan" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
              Selected Plan
            </label>
            <div className="relative">
              <select
                id="modal-plan"
                name="plan"
                value={formData.plan}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 pr-8 sm:pr-10 border border-gray-300 rounded-lg sm:rounded-xl bg-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base appearance-none"
              >
                <option value="Starter">Starter - ₹9,999/year</option>
                <option value="Growth">Growth - ₹19,999/year</option>
                <option value="Unlimited">Unlimited - ₹39,999/year</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-2 sm:right-3 flex items-center text-gray-400">
                <i className="fa-solid fa-chevron-down text-sm sm:text-base"></i>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="modal-message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
              Additional Message
            </label>
            <div className="relative">
              <textarea
                id="modal-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl bg-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base resize-none"
                placeholder="Any additional information or questions..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2 sm:pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm sm:text-base"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <i className="fa-solid fa-spinner fa-spin mr-2 text-sm sm:text-base"></i>
                  <span>Submitting Application...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <i className="fa-solid fa-paper-plane mr-2 text-sm sm:text-base"></i>
                  <span>Submit Application</span>
                </div>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PricingFormModal;
