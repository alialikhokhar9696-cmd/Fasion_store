'use client';

import { useInView } from 'react-intersection-observer';

export default function AboutMission() {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const missionItems = [
    {
      icon: "🎯",
      title: "Our Mission",
      description: "To provide fashionable, high-quality clothing that makes our customers feel confident and stylish, while ensuring exceptional service and affordable prices.",
      color: "from-rose-500 to-rose-600",
    },
    {
      icon: "👁️",
      title: "Our Vision",
      description: "To become Pakistan's most loved fashion destination, known for quality, trust, and trendsetting designs that inspire confidence and self-expression.",
      color: "from-amber-500 to-amber-600",
    },
    {
      icon: "💎",
      title: "Our Promise",
      description: "We promise quality you can feel, styles you'll love, and service you can trust. Every piece is carefully selected to bring you the best.",
      color: "from-purple-500 to-purple-600",
    },
  ];

  // Stats data with better icons and styling
  const stats = [
    { number: "5000+", label: "Happy Customers", icon: "😊", color: "rose" },
    { number: "1000+", label: "Products", icon: "👕", color: "amber" },
    { number: "50+", label: "Brands", icon: "🏷️", color: "purple" },
    { number: "24/7", label: "Support", icon: "💬", color: "blue" },
  ];

  return (
    <section className="py-24 px-4 bg-white overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-10 w-72 h-72 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-40 left-1/2 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl md:text-5xl font-bold text-rose-800 mb-4">
            Our Mission & Vision
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Driving fashion forward with purpose and passion
          </p>
        </div>

        {/* Main Content Grid */}
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missionItems.map((item, index) => (
            <div
              key={index}
              className={`relative group transform transition-all duration-700 ${
                inView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Card */}
              <div className="relative h-full bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
                
                {/* Gradient Border on Hover */}
                <div className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Top Accent Line */}
                <div className={`h-2 w-full bg-linear-to-r ${item.color}`}></div>
                
                {/* Content */}
                <div className="p-8 text-center">
                  
                  {/* Icon with Animation */}
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-linear-to-r ${item.color} rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                    <span className="relative text-6xl inline-block transform group-hover:scale-110 group-hover:rotate-6 group-hover:drop-shadow-lg transition-all duration-300">
                      {item.icon}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-rose-700 transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                  
                  {/* Decorative Element */}
                  <div className={`absolute bottom-0 right-0 w-24 h-24 bg-linear-to-br ${item.color} opacity-5 rounded-tl-full group-hover:opacity-10 transition-opacity duration-300`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Stats Section */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
            Our Achievements
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fadeUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-linear-to-br from-${stat.color}-500 to-${stat.color}-600 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                
                {/* Icon with circle background */}
                <div className={`relative mx-auto mb-4 w-20 h-20 flex items-center justify-center rounded-full bg-${stat.color}-100 group-hover:bg-${stat.color}-200 transition-colors duration-300`}>
                  <span className="text-4xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    {stat.icon}
                  </span>
                </div>
                
                {/* Number */}
                <div className={`text-3xl md:text-4xl font-bold text-${stat.color}-600 mb-2`}>
                  {stat.number}
                </div>
                
                {/* Label */}
                <p className="text-gray-600 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}