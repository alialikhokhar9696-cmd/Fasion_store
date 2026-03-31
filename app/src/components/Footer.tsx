'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Subscribed:', email);
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Social Life', href: '/social' },
    { name: 'Contact', href: '/contact' },
  ];

  const serviceLinks = [
    { name: 'Men Fashion', href: '/services/men' },
    { name: 'Women Fashion', href: '/services/women' },
    { name: 'Kids Collection', href: '/services/kids' },
    { name: 'Accessories', href: '/services/accessories' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'f', href: 'https://facebook.com/anasfashion', bgColor: 'bg-[#1877f2] hover:bg-[#0e5cbf]' },
    { name: 'Instagram', icon: 'ig', href: 'https://instagram.com/anasfashion', bgColor: 'bg-gradient-to-tr from-[#833ab4] via-[#fd1d1d] to-[#f77737] hover:opacity-90' },
    { name: 'TikTok', icon: 'tt', href: 'https://tiktok.com/@anasfashion', bgColor: 'bg-black hover:bg-gray-900' },
    { name: 'YouTube', icon: 'yt', href: 'https://youtube.com/anasfashion', bgColor: 'bg-[#ff0000] hover:bg-[#cc0000]' },
    { name: 'Twitter', icon: 'x', href: 'https://twitter.com/anasfashion', bgColor: 'bg-black hover:bg-gray-900' },
  ];

  return (
    <footer className="bg-linear-to-r from-rose-800 to-amber-700 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand & Social */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-rose-800 font-bold text-xl shadow-md">
                AF
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-bold text-white">ANAS FASHION</span>
                <span className="text-xs tracking-widest text-amber-200">STORE</span>
              </div>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              Premium fashion store for modern individuals.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-8 h-8 ${social.bgColor} rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-md`}
                  aria-label={social.name}
                >
                  <span className="text-xs font-bold text-white">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white border-b border-white/20 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className={`text-sm text-white/80 hover:text-white transition-colors duration-200 ${pathname === link.href ? 'text-amber-200' : ''}`}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white border-b border-white/20 pb-2">Our Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-sm text-white/80 hover:text-white transition-colors duration-200">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white border-b border-white/20 pb-2">Get in Touch</h3>
            <div className="space-y-3 text-sm">
              <p className="flex items-start space-x-2">
                <span className="text-amber-200">📍</span>
                <span className="text-white/80">Main Bazaar, Okara, Pakistan</span>
              </p>
              <p className="flex items-center space-x-2">
                <span className="text-amber-200">📞</span>
                <a href="tel:+923001234567" className="text-white/80 hover:text-white transition">
                  +92 3431220904
                </a>
              </p>
              <p className="flex items-center space-x-2">
                <span className="text-amber-200">✉️</span>
                {/* Email – ab white hai, black nahi */}
                <a 
                  href="mailto:info@anasfashion.com" 
                  className="text-white font-medium hover:text-amber-200 transition underline underline-offset-2"
                >
                  muhammadanasfashion.com
                </a>
              </p>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2 text-white">Subscribe to Newsletter</h4>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="px-3 py-2 rounded-lg text-white text-sm flex-1 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <button type="submit" className="bg-amber-600 hover:bg-amber-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:scale-105">
                  Subscribe
                </button>
              </form>
              {subscribed && <p className="text-xs text-green-200 mt-2">✅ Thanks for subscribing!</p>}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/70">
            <p>© {currentYear} ANAS FASHION STORE. All rights reserved. | Okara, Pakistan</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <Link href="/" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}