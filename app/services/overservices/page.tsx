"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

const services = [
  {
    id: 1,
    name: "Men's Fashion",
    description: "Premium quality shirts, blazers, jeans, shoes & accessories for men. Latest trends and classic styles.",
    icon: "👔",
    href: "/services/men",
    color: "from-blue-600 to-blue-800",
    bgColor: "bg-blue-50",
    features: ["Shirts & T-Shirts", "Blazers & Jackets", "Jeans & Trousers", "Shoes & Accessories"]
  },
  {
    id: 2,
    name: "Women's Fashion",
    description: "Elegant dresses, tops, jeans, bags & jewelry for women. Traditional and modern fusion.",
    icon: "👗",
    href: "/services/women",
    color: "from-pink-600 to-rose-600",
    bgColor: "bg-pink-50",
    features: ["Dresses & Tops", "Jeans & Pants", "Bags & Jewelry", "Shoes & Scarves"]
  },
  {
    id: 3,
    name: "Kids Collection",
    description: "Adorable clothing, shoes & accessories for baby boys, girls & kids of all ages.",
    icon: "🧸",
    href: "/services/kids",
    color: "from-green-600 to-emerald-600",
    bgColor: "bg-green-50",
    features: ["Baby Wear (0-2 years)", "Kids Wear (3-10 years)", "School Uniforms", "Toys & Accessories"]
  },
  {
    id: 4,
    name: "Accessories",
    description: "Premium watches, sunglasses, belts, bags, jewelry & more for men, women & kids.",
    icon: "🕶️",
    href: "/services/accessories",
    color: "from-purple-600 to-indigo-600",
    bgColor: "bg-purple-50",
    features: ["Watches & Sunglasses", "Belts & Wallets", "Bags & Backpacks", "Jewelry & Scarves"]
  },
  {
    id: 5,
    name: "Custom Stitching",
    description: "Get your dream outfit tailored just for you. Perfect fit guaranteed.",
    icon: "✂️",
    href: "/services/custom",
    color: "from-amber-600 to-orange-600",
    bgColor: "bg-amber-50",
    features: ["Bridal Wear", "Formal Suits", "Casual Outfits", "Alterations"]
  },
  {
    id: 6,
    name: "Wedding Collection",
    description: "Exclusive wedding wear for bride, groom & family. Traditional and modern designs.",
    icon: "💍",
    href: "/services/wedding",
    color: "from-rose-600 to-red-600",
    bgColor: "bg-rose-50",
    features: ["Bridal Dresses", "Groom Wear", "Family Coordination", "Accessories"]
  }
];

export default function ServicesPage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-amber-600">Services</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover premium fashion services tailored just for you. From everyday wear to special occasions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="p-8">
                {/* Icon */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-4xl mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-500`}>
                  {service.icon}
                </div>
                
                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-amber-600 transition-colors">
                  {service.name}
                </h2>
                
                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                      <span className="text-amber-500">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Learn More Button */}
                <div className={`inline-flex items-center gap-2 text-amber-600 font-semibold group-hover:gap-3 transition-all duration-300 ${hoveredId === service.id ? 'gap-3' : ''}`}>
                  <span>Learn More</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Custom Order Section */}
        <div className="mt-20 bg-gradient-to-r from-amber-600 to-rose-600 rounded-3xl overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Something Special?</h2>
              <p className="text-lg opacity-90 mb-6">
                Can't find what you're looking for? We offer custom orders and personalized styling services.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-white text-amber-600 rounded-lg font-semibold hover:scale-105 transition-transform"
                >
                  Contact Us
                </Link>
                <Link
                  href="/custom-order"
                  className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition"
                >
                  Custom Order
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-white text-center">
                <div className="text-5xl mb-3">✨</div>
                <p className="font-semibold">Free Consultation</p>
                <p className="text-sm opacity-80">For custom orders & styling advice</p>
                <p className="text-2xl font-bold mt-2">+92 300 1234567</p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose <span className="text-amber-600">ANAS ALI FASHION</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "⭐", title: "Premium Quality", desc: "Best materials & craftsmanship" },
              { icon: "🚚", title: "Fast Delivery", desc: "Free shipping on orders over Rs. 5,000" },
              { icon: "🔄", title: "Easy Returns", desc: "7-day return policy" },
              { icon: "💳", title: "Secure Payment", desc: "Multiple payment options" }
            ].map((item, idx) => (
              <div key={idx} className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}