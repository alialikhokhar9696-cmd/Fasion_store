'use client';

import Link from 'next/link';

const categories = [
  {
    name: "Men Fashion",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&h=700&fit=crop", // 👨 New stylish men
    href: "/services/men",
    items: "45+ items"
  },
  {
    name: "Women Fashion",
    image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=600&h=700&fit=crop", // 👩 New elegant women
    href: "/services/women",
    items: "60+ items"
  },
  {
    name: "Kids Collection",
    image: "https://images.unsplash.com/photo-1503919545889-a8a2c1e7e6c9?w=600&h=700&fit=crop", // 👶 Cute kids
    href: "/services/kids",
    items: "30+ items"
  },
  {
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1523772721666-22ad3c3b6f90?w=600&h=700&fit=crop", // 🕶️ New accessories
    href: "/services/accessories",
    items: "25+ items"
  }
];

export default function CategoriesSection() {
  return (
    <section className="py-20 px-4 animate-fadeIn">
      <div className="container mx-auto">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-rose-800 animate-slideDown">
          Shop by Category
        </h2>
        
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto animate-fadeUp">
          Find exactly what you're looking for in our curated collections
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative h-80 overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fadeUp"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Text content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-1">{category.name}</h3>
                <p className="text-sm text-gray-200">{category.items}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}