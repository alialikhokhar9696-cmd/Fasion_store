'use client';

import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

export default function AboutTeam() {
  const { ref: teamRef, inView: teamInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const team = [
    {
      name: "Anas Ali",
      role: "Founder & CEO",
      image: "/ceo.jpg",
      bio: "Visionary leader with a passion for fashion and customer satisfaction.",
      social: { instagram: "#", linkedin: "#", twitter: "#" },
      color: "rose"
    },
    {
      name: "Sarah Khan",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop",
      bio: "Creative genius behind our most loved collections and trends.",
      social: { instagram: "#", linkedin: "#", twitter: "#" },
      color: "amber"
    },
    {
      name: "Ahmed Raza",
      role: "Marketing Manager",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      bio: "Expert in bringing fashion to the right audience with innovative campaigns.",
      social: { instagram: "#", linkedin: "#", twitter: "#" },
      color: "purple"
    },
    {
      name: "Fatima Ali",
      role: "Customer Care Lead",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      bio: "Dedicated to ensuring every customer has a perfect shopping experience.",
      social: { instagram: "#", linkedin: "#", twitter: "#" },
      color: "blue"
    }
  ];

  const stats = [
    { number: "5000+", label: "Happy Customers", icon: "😊" },
    { number: "1000+", label: "Products", icon: "👕" },
    { number: "50+", label: "Brands", icon: "🏷️" },
    { number: "24/7", label: "Support", icon: "💬" },
  ];

  return (
    <section className="py-24 px-4 bg-gray-50 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-20 w-72 h-72 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-40 left-1/3 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl md:text-5xl font-bold text-rose-800 mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The passionate people behind ANAS ALI FASHION
          </p>
        </div>

        {/* Team Grid */}
        <div 
          ref={teamRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {team.map((member, index) => (
            <div
              key={index}
              className={`group relative transform transition-all duration-700 ${
                teamInView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay gradient */}
                  <div className={`absolute inset-0 bg-linear-to-t from-${member.color}-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  {/* Social Icons - appear on hover */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <a href={member.social.instagram} className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-rose-600 hover:text-white transition-colors">
                      <span className="text-xl">📸</span>
                    </a>
                    <a href={member.social.linkedin} className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-amber-600 hover:text-white transition-colors">
                      <span className="text-xl">🔗</span>
                    </a>
                    <a href={member.social.twitter} className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors">
                      <span className="text-xl">🐦</span>
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-rose-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className={`text-${member.color}-600 font-semibold mb-3`}>
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {member.bio}
                  </p>
                </div>

                {/* Decorative bottom line */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-linear-to-r ${member.color === 'rose' ? 'from-rose-500 to-rose-600' : 
                  member.color === 'amber' ? 'from-amber-500 to-amber-600' :
                  member.color === 'purple' ? 'from-purple-500 to-purple-600' :
                  'from-blue-500 to-blue-600'} scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Values / Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {[
            { icon: "👥", text: "Expert Team" },
            { icon: "💡", text: "Creative Minds" },
            { icon: "🤝", text: "Customer Focused" },
            { icon: "🌟", text: "Passionate" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fadeUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="text-3xl mb-2 block">{item.icon}</span>
              <p className="text-gray-700 font-medium">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Join Us Section */}
        <div className="relative bg-linear-to-r from-rose-800 to-amber-700 rounded-3xl overflow-hidden shadow-2xl">
          {/* Decorative pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 p-12 text-center text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 animate-slideDown">
              Join Our Team
            </h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              We're always looking for passionate individuals to join our fashion family.
            </p>
            <Link href="/contact">
              <button className="px-8 py-3 bg-white text-rose-800 rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                View Careers
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}