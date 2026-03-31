'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '../../src/context/CartContext';   // ✅ global cart import

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  gender?: string; // men, women, kids, unisex
}

// Fallback image agar original fail ho jaye
const FALLBACK_IMAGE = 'https://via.placeholder.com/600x700?text=Product';

// Mega product list – 24 items (6 per category)
const products: Product[] = [
  // 👨 MEN'S ACCESSORIES (6)
  {
    id: 1,
    name: "Men's Leather Watch",
    price: 7999,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=700&fit=crop",
    category: "Watches",
    gender: "Men"
  },
  {
    id: 2,
    name: "Men's Sunglasses",
    price: 3499,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=700&fit=crop",
    category: "Sunglasses",
    gender: "Men"
  },
  {
    id: 3,
    name: "Men's Leather Belt",
    price: 2499,
    image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=600&h=700&fit=crop",
    category: "Belts",
    gender: "Men"
  },
  {
    id: 4,
    name: "Men's Wallet",
    price: 1999,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=700&fit=crop",
    category: "Wallets",
    gender: "Men"
  },
  {
    id: 5,
    name: "Men's Cufflinks",
    price: 3999,
    image: "https://images.unsplash.com/photo-1583227067882-2c200158e2b2?w=600&h=700&fit=crop",
    category: "Jewelry",
    gender: "Men"
  },
  {
    id: 6,
    name: "Men's Backpack",
    price: 5499,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=700&fit=crop",
    category: "Bags",
    gender: "Men"
  },

  // 👩 WOMEN'S ACCESSORIES (6)
  {
    id: 7,
    name: "Women's Gold Necklace",
    price: 12999,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=700&fit=crop",
    category: "Jewelry",
    gender: "Women"
  },
  {
    id: 8,
    name: "Women's Sunglasses",
    price: 3999,
    image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600&h=700&fit=crop",
    category: "Sunglasses",
    gender: "Women"
  },
  {
    id: 9,
    name: "Women's Watch",
    price: 6999,
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&h=700&fit=crop",
    category: "Watches",
    gender: "Women"
  },
  {
    id: 10,
    name: "Silk Scarf",
    price: 1499,
    image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&h=700&fit=crop",
    category: "Scarves",
    gender: "Women"
  },
  {
    id: 11,
    name: "Pearl Earrings",
    price: 5999,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=700&fit=crop",
    category: "Jewelry",
    gender: "Women"
  },
  {
    id: 12,
    name: "Women's Handbag",
    price: 8999,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=700&fit=crop",
    category: "Bags",
    gender: "Women"
  },

  // 👶 KIDS' ACCESSORIES (6)
  {
    id: 13,
    name: "Kids' Sunglasses",
    price: 1499,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=700&fit=crop",
    category: "Sunglasses",
    gender: "Kids"
  },
  {
    id: 14,
    name: "Kids' Watch",
    price: 2499,
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&h=700&fit=crop",
    category: "Watches",
    gender: "Kids"
  },
  {
    id: 15,
    name: "Kids' Backpack",
    price: 2999,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=700&fit=crop",
    category: "Bags",
    gender: "Kids"
  },
  {
    id: 16,
    name: "Kids' Hair Bows",
    price: 499,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=700&fit=crop",
    category: "Accessories",
    gender: "Kids"
  },
  {
    id: 17,
    name: "Kids' Cap",
    price: 899,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=700&fit=crop",
    category: "Accessories",
    gender: "Kids"
  },
  {
    id: 18,
    name: "Kids' Bracelet",
    price: 699,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=700&fit=crop",
    category: "Jewelry",
    gender: "Kids"
  },

  // 🎒 UNISEX / OTHER ACCESSORIES (6)
  {
    id: 19,
    name: "Classic Leather Belt",
    price: 1999,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=700&fit=crop",
    category: "Belts",
    gender: "Unisex"
  },
  {
    id: 20,
    name: "Minimalist Watch",
    price: 4999,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&h=700&fit=crop",
    category: "Watches",
    gender: "Unisex"
  },
  {
    id: 21,
    name: "Travel Backpack",
    price: 6499,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=700&fit=crop",
    category: "Bags",
    gender: "Unisex"
  },
  {
    id: 22,
    name: "Leather Wallet",
    price: 1499,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=700&fit=crop",
    category: "Wallets",
    gender: "Unisex"
  },
  {
    id: 23,
    name: "Aviator Sunglasses",
    price: 3499,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=700&fit=crop",
    category: "Sunglasses",
    gender: "Unisex"
  },
  {
    id: 24,
    name: "Silk Scarf",
    price: 1299,
    image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&h=700&fit=crop",
    category: "Scarves",
    gender: "Unisex"
  }
];

export default function Accessories() {
  const { addToCart } = useCart();   // ✅ global addToCart use karo
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
    // ✅ alert hata diya
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = FALLBACK_IMAGE;
  };

  return (
    <div className="py-20 px-4 bg-linear-to-b from-gray-50 to-white min-h-screen">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            Accessories
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complete your look with our premium accessories for men, women & kids
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image container */}
              <div className="relative h-56 overflow-hidden rounded-t-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={handleImageError}
                />
                {/* Gender badge */}
                <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                  {product.gender}
                </span>
                {/* Category badge */}
                <span className="absolute top-3 right-3 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
                  {product.category}
                </span>
                {/* Quick view overlay */}
                <div className={`hidden sm:flex absolute inset-0 bg-black/50 items-center justify-center transition-opacity duration-300 ${hoveredId === product.id ? 'opacity-100' : 'opacity-0'}`}>
                  <button className="bg-white text-blue-800 px-4 py-2 rounded-lg font-semibold hover:bg-blue-100 transition">
                    Quick View
                  </button>
                </div>
              </div>

              {/* Product details */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-xl font-bold text-blue-800 mb-3">
                  Rs. {product.price.toLocaleString()}
                </p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition transform hover:scale-105"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Services link */}
        <div className="text-center mt-16">
          <Link href="/services">
            <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition transform hover:scale-105">
              ← Back to All Services
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}