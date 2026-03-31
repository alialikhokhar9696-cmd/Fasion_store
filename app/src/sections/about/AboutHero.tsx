'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function AboutHero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrolled = window.scrollY;
        (sectionRef.current as HTMLElement).style.backgroundPositionY = `${scrolled * 0.5}px`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[70vh] md:h-[80vh] lg:h-[90vh] flex items-center justify-center overflow-hidden bg-linear-to-br from-rose-900 via-rose-800 to-amber-700"
    >
      {/* Animated gradient overlay – ✅ fixed line */}
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/30 to-transparent"></div>

      <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <p className="text-sm md:text-base uppercase tracking-[0.3em] text-amber-200 mb-4 animate-fadeUp">
          Welcome to
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slideDown">
          ANAS ALI FASHION
          <span className="block text-amber-200 text-2xl md:text-3xl lg:text-4xl mt-2 tracking-widest">
            About Us
          </span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-10 text-white/90 max-w-3xl mx-auto animate-fadeUp animation-delay-200">
          Quality clothing, premium service, and a passion for fashion since 2024.
          Based in Okara, serving customers across Pakistan with love and dedication.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeUp animation-delay-400">
          <Link href="/products">
            <button className="px-8 py-3 bg-amber-600 hover:bg-amber-500 text-white rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              Shop Now
            </button>
          </Link>
          <Link href="#story">
            <button className="px-8 py-3 border-2 border-white text-white hover:bg-white/10 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Read Our Story
            </button>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <a href="#story" className="block">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7m14-6l-7 7-7-7" />
          </svg>
        </a>
      </div>

      <div id="story" className="absolute invisible"></div>
    </section>
  );
}