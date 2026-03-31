'use client';

import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

export default function AboutStory() {
  const { ref: storyRef, inView: storyInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: timelineRef, inView: timelineInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const timeline = [
    {
      year: "2024",
      title: "The Beginning",
      description: "ANAS ALI FASHION was founded in Okara with a vision to provide quality fashion at affordable prices.",
      icon: "🌱",
      color: "rose"
    },
    {
      year: "2025",
      title: "First Expansion",
      description: "We expanded our collection to include women's and kids' fashion, becoming a complete family store.",
      icon: "📈",
      color: "amber"
    },
    {
      year: "2026",
      title: "Online Store Launch",
      description: "Launched our e-commerce website to serve customers across Pakistan with doorstep delivery.",
      icon: "🚀",
      color: "purple"
    }
  ];

  const values = [
    {
      icon: "❤️",
      title: "Customer First",
      description: "Your satisfaction is our priority"
    },
    {
      icon: "✨",
      title: "Quality Guaranteed",
      description: "We never compromise on quality"
    },
    {
      icon: "🤝",
      title: "Trust & Honesty",
      description: "Honest pricing, reliable service"
    },
    {
      icon: "🚚",
      title: "Fast Delivery",
      description: "Quick shipping across Pakistan"
    }
  ];

  return (
    <section className="py-24 px-4 bg-white overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl md:text-5xl font-bold text-rose-800 mb-4">
            Our Story
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From a small dream to a trusted fashion destination
          </p>
        </div>

        {/* Main Story Section */}
        <div 
          ref={storyRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24"
        >
          {/* Left side - Image */}
          <div 
            className={`relative transform transition-all duration-1000 ${
              storyInView ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              {/* ✅ FIXED: Changed from <Image> to <img> to avoid Next.js remotePatterns error */}
              <img
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=800&fit=crop"
                alt="Our Story"
                className="absolute inset-0 w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent"></div>
              
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                <span className="text-rose-600 font-bold">Since 2024</span>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-rose-200 rounded-full blur-2xl opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-amber-200 rounded-full blur-2xl opacity-60"></div>
          </div>

          {/* Right side - Content */}
          <div 
            className={`space-y-6 transform transition-all duration-1000 delay-300 ${
              storyInView ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
              A Journey of <span className="text-rose-600">Passion</span> & <span className="text-amber-600">Dedication</span>
            </h3>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              <span className="text-2xl font-serif text-rose-600 float-left mr-2">I</span>n 2024, <strong className="text-rose-700">ANAS ALI FASHION</strong> started with a simple vision: to provide high-quality, trendy clothing at affordable prices. Based in the heart of <strong className="text-amber-700">Okara</strong>, we began as a small store with big dreams.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Today, we've grown into a trusted name in fashion, serving thousands of happy customers across Pakistan. Our journey has been driven by one belief: that everyone deserves to look and feel their best without breaking the bank.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-600">5000+</div>
                <div className="text-sm text-gray-500">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">1000+</div>
                <div className="text-sm text-gray-500">Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">50+</div>
                <div className="text-sm text-gray-500">Brands</div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link href="/products">
                <button className="px-8 py-3 bg-linear-to-r from-rose-600 to-amber-600 text-white rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Explore Our Collection
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div ref={timelineRef} className="mb-24">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
            Our Journey
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-rose-400 via-amber-400 to-purple-400 hidden md:block"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center gap-8 transform transition-all duration-700 ${
                    timelineInView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white border-4 border-rose-500 rounded-full hidden md:flex items-center justify-center z-10">
                    <div className={`w-4 h-4 bg-${item.color}-500 rounded-full animate-pulse`}></div>
                  </div>

                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12 md:ml-auto'}`}>
                    <div className={`bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                      index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    }`}>
                      <div className="flex items-center gap-4 mb-3">
                        <span className={`text-4xl bg-${item.color}-100 w-16 h-16 rounded-full flex items-center justify-center`}>
                          {item.icon}
                        </span>
                        <div>
                          <span className={`text-sm font-bold text-${item.color}-600`}>{item.year}</span>
                          <h4 className="text-xl font-bold text-gray-800">{item.title}</h4>
                        </div>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-12">
            Why Choose <span className="text-rose-600">ANAS ALI FASHION</span>?
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fadeUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-linear-to-r from-rose-500 to-amber-500 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <span className="relative text-5xl inline-block transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    {value.icon}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-rose-600 transition-colors">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}