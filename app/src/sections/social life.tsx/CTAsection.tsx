'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function CTASection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Yahan API call kar sakte ho
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-24 px-4 bg-linear-to-r from-rose-800 to-amber-700 text-white overflow-hidden relative">
      
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-slideDown">
            Apni Story Share Karein! 💬
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto animate-fadeUp">
            Kya aap ne hum se khareeda hai? Apna experience likhein aur doosron ko inspire karein.
          </p>
        </div>

        {/* Share Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slideUp">
          <Link href="/contact">
            <button className="px-10 py-4 bg-white text-rose-800 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              ✍️ Apni Review Likhein
            </button>
          </Link>
          <Link href="/products">
            <button className="px-10 py-4 border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white/10 transform hover:scale-105 transition-all duration-300">
              🛍️ Shopping Continue Karein
            </button>
          </Link>
        </div>

        {/* Newsletter Signup */}
        <div className="max-w-xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 animate-fadeUp animation-delay-200">
          <h3 className="text-2xl font-bold text-center mb-4">
            Latest Updates Paane Ke Liye Subscribe Karein
          </h3>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Aapna email address likhein"
              required
              className="flex-1 px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-amber-600 hover:bg-amber-500 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Subscribe
            </button>
          </form>
          {submitted && (
            <p className="text-center mt-4 text-green-200 animate-fadeIn">
              ✅ Shukriya! Ab aapko updates milte rahenge.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}