'use client';

import Link from 'next/link';
import Button from '../../components/Button';


export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-rose-900 via-rose-800 to-amber-700">
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Decorative blurred circles with pulse animation */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        
        {/* Pre-heading */}
        <p className="text-sm md:text-base uppercase tracking-[0.3em] text-amber-200 mb-4 animate-fadeIn">
          Welcome to
        </p>

        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slideDown">
          ANAS FASHION
          <span className="block text-amber-200 text-2xl md:text-3xl mt-2 tracking-widest">
            STORE
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl lg:text-2xl mb-10 text-white/90 max-w-2xl mx-auto animate-fadeIn">
          Discover the latest trends in fashion – quality clothing for men, women, and kids.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slideUp">
          <Link href="/products">
            <Button 
              variant="primary" 
              size="lg" 
              className="w-full sm:w-auto min-w-50 transform hover:scale-105 transition-transform duration-300"
            >
              Shop Now
            </Button>
          </Link>
          <Link href="/about">
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto min-w-50 border-white text-white hover:bg-white/10 transform hover:scale-105 transition-transform duration-300"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll indicator with bounce animation (Tailwind built-in) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#featured" className="block">
          <svg 
            className="w-6 h-6 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7-7-7m14-6l-7 7-7-7" 
            />
          </svg>
        </a>
      </div>

      {/* Invisible anchor for smooth scroll */}
      <div id="featured" className="absolute invisible"></div>
    </section>
  );
}
