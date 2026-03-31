'use client';

import { useState, useEffect } from 'react';

export default function MapSection() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [mapSrc, setMapSrc] = useState<string | null>(null);

  useEffect(() => {
    // Google Maps embed URL with Okara coordinates
    const src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.7267360828727!2d73.44527731504535!3d30.809344481948154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392244f3f1c1c1c1%3A0x1c1c1c1c1c1c1c1c!2sOkara%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1645567890123';
    setMapSrc(src);
  }, []);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-rose-800 mb-4 animate-slideDown">
            Find Us Here
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fadeUp">
            Visit our store in the heart of Okara.
          </p>
        </div>

        {/* Map Container */}
        <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl animate-fadeUp">
          
          {/* Loading Skeleton – tab tak dikhao jab tak mapSrc set na ho */}
          {(isLoading || !mapSrc) && !hasError && (
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-rose-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-600 animate-pulse">Loading map...</p>
              </div>
            </div>
          )}

          {/* Error State */}
          {hasError ? (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🗺️</div>
                <h3 className="text-xl font-bold text-rose-800 mb-2">Map Could Not Load</h3>
                <p className="text-gray-600 mb-4">Please try again later or use the directions button below.</p>
              </div>
            </div>
          ) : (
            // ✅ IFrame sirf tab render hoga jab mapSrc non‑null ho
            mapSrc && (
              <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                onLoad={handleIframeLoad}
                onError={handleIframeError}
                title="Google Map of Okara"
                className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
              />
            )
          )}
        </div>

        {/* Get Directions Button */}
        <div className="text-center mt-8 animate-fadeUp animation-delay-200">
          <a
            href="https://maps.google.com/?q=Main+Bazaar+Okara+Pakistan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-rose-600 text-white rounded-lg font-semibold hover:bg-rose-700 transition transform hover:scale-105"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
              />
            </svg>
            Get Directions
          </a>
        </div>

        {/* Address Card */}
        <div className="mt-8 text-center text-gray-600 animate-fadeUp animation-delay-400">
          <p className="flex items-center justify-center gap-2">
            <span className="text-rose-600">📍</span>
            <span>Main Bazaar, Okara, Punjab, Pakistan</span>
          </p>
        </div>
      </div>
    </section>
  );
}