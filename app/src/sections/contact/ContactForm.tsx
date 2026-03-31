'use client';

import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name as keyof FormData]) {
      setErrors({ ...errors, [e.target.name]: undefined });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(formData);
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <section className="py-20 px-4 bg-linear-to-br from-amber-50 to-white relative overflow-hidden">
      
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-rose-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-100 rounded-full blur-3xl opacity-30 animate-pulse animation-delay-1000"></div>

      <div className="container mx-auto max-w-4xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-rose-800 mb-4 animate-slideDown">
            Send Us a Message
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fadeUp">
            We’d love to hear from you. Fill out the form and we’ll get back to you within 24 hours.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8 border border-white/20 animate-fadeUp">
          
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name & Email - side by side on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-gray-700 font-medium">
                  Your Name <span className="text-rose-600">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                      errors.name ? 'border-red-500' : 'border-gray-200'
                    } focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition`}
                    placeholder="John Doe"
                  />
                </div>
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-gray-700 font-medium">
                  Email Address <span className="text-rose-600">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                      errors.email ? 'border-red-500' : 'border-gray-200'
                    } focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition`}
                    placeholder="john@example.com"
                  />
                </div>
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
            </div>

            {/* Subject */}
            <div className="space-y-2">
              <label htmlFor="subject" className="block text-gray-700 font-medium">
                Subject <span className="text-gray-400 text-sm">(optional)</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition"
                  placeholder="What's this about?"
                />
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="message" className="block text-gray-700 font-medium">
                Your Message <span className="text-rose-600">*</span>
              </label>
              <div className="relative">
                <div className="absolute top-3 left-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                    errors.message ? 'border-red-500' : 'border-gray-200'
                  } focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition`}
                  placeholder="Write your message here..."
                />
              </div>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-linear-to-r from-rose-600 to-amber-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Sending...
                </span>
              ) : (
                'Send Message'
              )}
            </button>

            {/* Success Message */}
            {submitSuccess && (
              <div className="flex items-center justify-center space-x-2 text-green-600 animate-bounce">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold">Thank you! Your message has been sent.</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}