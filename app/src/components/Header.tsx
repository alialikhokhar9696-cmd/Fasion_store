'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useCart } from '../context/CartContext';

import type { CartItem } from '../context/CartContext';
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [logoError, setLogoError] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  // Safely get cart
  let cart: CartItem[] = [];
  let cartCount = 0;
  try {
    const cartContext = useCart();
    cart = cartContext?.cart || [];
    cartCount = cartContext?.totalItems || 0;
  } catch {
    // CartContext not available
  }

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const services = [
    { name: 'Men Fashion', href: '/services/men' },
    { name: 'Women Fashion', href: '/services/women' },
    { name: 'Kids Collection', href: '/services/kids' },
    { name: 'Accessories', href: '/services/accessories' },
  ];

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '#', hasDropdown: true },
    { name: 'Social Life', href: '/social' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-linear-to-r from-rose-800 to-amber-700 shadow-xl py-2'
          : 'bg-linear-to-r from-rose-800 to-amber-700 shadow-lg py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
            <div className="w-10 h-10 relative">
              {!logoError ? (
                <img
                  src="/ceo.jpg"
                  alt="ANAS ALI FASHION"
                  className="w-full h-full rounded-full object-contain shadow "
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-rose-800 font-bold text-xl shadow-md">
                  AA
                </div>
              )}
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg md:text-xl lg:text-2xl font-bold text-white">
                ANAS ALI FASHION
              </span>
              <span className="text-xs md:text-sm tracking-widest text-amber-200">
                CLOTHING STORE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.hasDropdown ? (
                  <div
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button
                      className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-white hover:bg-white/20 ${
                        pathname.startsWith('/services') ? 'bg-white/30' : ''
                      }`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                      <span>{link.name}</span>
                      <svg
                        className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isServicesOpen && (
                      <div className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-xl py-2 z-50 border border-gray-100">
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-rose-50 hover:text-rose-800"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-white hover:bg-white/20 ${
                      pathname === link.href ? 'bg-white/30' : ''
                    }`}
                  >
                    {link.name === 'Home' && (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    )}
                    {link.name === 'About' && (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    {link.name === 'Social Life' && (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    )}
                    {link.name === 'Contact' && (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )}
                    <span>{link.name}</span>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-3">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="hidden md:block relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-64 py-2 pl-10 pr-4 rounded-full border border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/30 transition"
              />
              <button
                type="submit"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
                aria-label="Search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>

            {/* Cart */}
            <Link href="/cart" className="relative p-2 hover:bg-white/20 rounded-full transition-colors">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-linear-to-r from-amber-500 to-amber-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-md">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu (same as before, but keep it) */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="pt-4 pb-2 space-y-2 border-t border-white/20">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="flex items-center justify-between w-full text-white hover:bg-white/20 px-4 py-2 rounded-lg"
                    >
                      <span>{link.name}</span>
                      <svg
                        className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className={`pl-4 space-y-1 overflow-hidden transition-all ${isServicesOpen ? 'max-h-40' : 'max-h-0'}`}>
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block text-white/80 hover:bg-white/20 px-4 py-2 rounded-lg"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-white hover:bg-white/20 px-4 py-2 rounded-lg"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="px-4 py-2">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-full py-2 pl-10 pr-4 rounded-full border border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:border-white"
                />
                <button
                  type="submit"
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70"
                  aria-label="Search"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </form>
          </nav>
        </div>
      </div>
    </header>
  );
}