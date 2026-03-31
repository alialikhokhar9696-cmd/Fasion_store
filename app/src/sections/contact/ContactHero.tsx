'use client';

import { useEffect, useRef } from 'react';

export default function ContactHero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrolled = window.scrollY;
        (sectionRef.current!.style as any).backgroundPositionY = `${scrolled * 0.5}px`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-linear-to-br from-rose-900 via-rose-800 to-amber-700 bg-fixed"
    >
      {/* Animated overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl animate-spin-slow"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <p className="text-sm md:text-base uppercase tracking-[0.3em] text-amber-200 mb-4 animate-fadeIn">
          Get in Touch
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slideDown">
          Contact Us
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90 max-w-2xl mx-auto animate-fadeUp animation-delay-200">
          We’d love to hear from you. Reach out with any questions or feedback.
        </p>
      </div>
    </section>
  );
}