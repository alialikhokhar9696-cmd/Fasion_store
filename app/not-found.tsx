'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Parallax effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-rose-900 via-rose-800 to-amber-700 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Floating 404 numbers with parallax */}
      <div 
        className="absolute text-[15rem] md:text-[25rem] font-bold text-white/5 select-none pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      >
        404
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        
        {/* Animated 404 */}
        <div className="relative mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-white animate-bounce">
            404
          </h1>
          <div className="absolute -top-6 -right-6 w-20 h-20 bg-amber-400 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-rose-400 rounded-full blur-2xl animate-pulse animation-delay-500"></div>
        </div>

        {/* Error Message */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 animate-slideDown">
          Page Not Found
        </h2>
        
        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl mx-auto animate-fadeUp">
          Oops! The page you're looking for doesn't exist or has been moved. 
          Let's get you back to fashion!
        </p>

        {/* Fun fact or suggestion */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-8 border border-white/20 animate-fadeUp animation-delay-200">
          <p className="text-white/90 text-sm md:text-base">
            💡 Did you know? We have over 100+ fashion items waiting for you!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slideUp">
          <Link href="/">
            <button className="px-8 py-3 bg-white text-rose-800 rounded-lg font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:bg-amber-50">
              🏠 Back to Home
            </button>
          </Link>
          <Link href="/services">
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white/10 transform hover:scale-105 transition-all duration-300">
              🛍️ Browse Services
            </button>
          </Link>
        </div>

        {/* Search Bar (optional) */}
        <div className="mt-12 max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full py-3 px-5 pl-12 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:border-amber-400 transition"
            />
            <svg
              className="w-5 h-5 text-white/60 absolute left-4 top-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-10 text-white/20 text-sm">
        <span className="animate-pulse">✦</span> ANAS ALI FASHION <span className="animate-pulse">✦</span>
      </div>
    </div>
  );
}