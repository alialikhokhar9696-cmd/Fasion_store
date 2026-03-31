"use client";

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg space-y-6">
      <h2 className="text-2xl font-bold mb-4">Send us a Message</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500" />
        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className="w-full p-3 border rounded-lg" />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full p-3 border rounded-lg" />
        <select name="subject" value={formData.subject} onChange={handleChange} required className="w-full p-3 border rounded-lg">
          <option value="">Select Subject</option>
          <option value="general">General Inquiry</option>
          <option value="order">Order Related</option>
          <option value="return">Return/Refund</option>
          <option value="wholesale">Wholesale</option>
        </select>
      </div>
      <textarea name="message" rows={5} placeholder="Your Message" value={formData.message} onChange={handleChange} required className="w-full p-3 border rounded-lg"></textarea>
      <button type="submit" disabled={status === 'sending'} className={`w-full py-3 rounded-lg font-semibold text-white transition ${status === 'sending' ? 'bg-gray-400' : 'bg-gradient-to-r from-rose-800 to-amber-700 hover:opacity-90'}`}>
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>
      {status === 'success' && <p className="text-green-600 text-center">✓ Message sent successfully!</p>}
      {status === 'error' && <p className="text-red-600 text-center">✗ Something went wrong. Please try again.</p>}
    </form>
  );
}