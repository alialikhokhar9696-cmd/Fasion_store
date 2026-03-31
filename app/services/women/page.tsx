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
}

const products: Product[] = [
  // Dresses
  { id: 1, name: "Elegant Floral Dress", price: 5999, image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400&h=500&fit=crop", category: "Dresses" },
  { id: 2, name: "Evening Gown", price: 12999, image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&h=500&fit=crop", category: "Dresses" },
  { id: 3, name: "Summer Maxi Dress", price: 4499, image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=500&fit=crop", category: "Dresses" },
  
  // Tops & Blouses
  { id: 4, name: "Silk Blouse", price: 3499, image: "https://images.unsplash.com/photo-1604695573705-6f53c2f94d4f?w=400&h=500&fit=crop", category: "Tops" },
  { id: 5, name: "Cotton T-Shirt", price: 1999, image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=500&fit=crop", category: "Tops" },
  
  // Jeans & Pants
  { id: 6, name: "High-Waist Jeans", price: 3999, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=500&fit=crop", category: "Jeans" },
  { id: 7, name: "Skinny Jeans", price: 3799, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=500&fit=crop", category: "Jeans" },
  { id: 8, name: "Culottes", price: 3299, image: "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=400&h=500&fit=crop", category: "Pants" },
  
  // Jackets & Coats
  { id: 9, name: "Classic Denim Jacket", price: 6999, image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=500&fit=crop", category: "Jackets" },
  { id: 10, name: "Leather Jacket", price: 12999, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop", category: "Jackets" },
  
  // Shoes
  { id: 11, name: "Leather Ankle Boots", price: 7999, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=500&fit=crop", category: "Shoes" },
  { id: 12, name: "White Sneakers", price: 5499, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop", category: "Shoes" },
  { id: 13, name: "Stiletto Heels", price: 6999, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=500&fit=crop", category: "Shoes" },
  
  // Bags
  { id: 14, name: "Designer Handbag", price: 8999, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop", category: "Bags" },
  { id: 15, name: "Crossbody Bag", price: 4999, image: "https://images.unsplash.com/photo-1591561954555-607968c9ab12?w=400&h=500&fit=crop", category: "Bags" },
  { id: 16, name: "Tote Bag", price: 3999, image: "https://images.unsplash.com/photo-1591561954555-607968c9ab12?w=400&h=500&fit=crop", category: "Bags" },
  
  // Accessories
  { id: 17, name: "Stylish Sunglasses", price: 2999, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=500&fit=crop", category: "Accessories" },
  { id: 18, name: "Gold Plated Necklace", price: 12999, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=500&fit=crop", category: "Jewelry" },
  { id: 19, name: "Pearl Earrings", price: 3999, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=500&fit=crop", category: "Jewelry" },
  { id: 20, name: "Silk Scarf", price: 1999, image: "https://images.unsplash.com/photo-1601924921557-45e6dea0a157?w=400&h=500&fit=crop", category: "Accessories" },
  
  // Activewear
  { id: 21, name: "Yoga Leggings", price: 2999, image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&h=500&fit=crop", category: "Activewear" },
  { id: 22, name: "Sports Bra", price: 1999, image: "https://images.unsplash.com/photo-1518310383802-640c2de61b3e?w=400&h=500&fit=crop", category: "Activewear" },
];

export default function WomenFashionPage() {
  const { addToCart } = useCart();   // ✅ global addToCart use karo
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
    // ✅ alert hata diya
  };

  // Get unique categories
  const categories = ["All", ...new Set(products.map(p => p.category))];

  // Filter products by category
  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-gray-50 to-white min-h-screen">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-800 mb-3 md:mb-4">
            Women Fashion
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Discover the latest trends in women's clothing and accessories
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 md:mb-12 px-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-amber-600 text-white shadow-md scale-105'
                  : 'bg-gray-200 text-gray-700 hover:bg-amber-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 50}ms` }}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image container */}
              <div className="relative h-48 xs:h-52 sm:h-56 overflow-hidden rounded-t-xl sm:rounded-t-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400';
                  }}
                />
                <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-amber-600 text-white text-[10px] xs:text-xs px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full">
                  {product.category}
                </span>
                {/* Quick view overlay */}
                <div className={`hidden sm:flex absolute inset-0 bg-black/50 items-center justify-center transition-opacity duration-300 ${hoveredId === product.id ? 'opacity-100' : 'opacity-0'}`}>
                  <button className="bg-white text-amber-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold hover:bg-amber-100 transition">
                    Quick View
                  </button>
                </div>
              </div>

              {/* Product details */}
              <div className="p-3 sm:p-4">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-1 group-hover:text-amber-600 transition-colors line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-base sm:text-lg md:text-xl font-bold text-amber-800 mb-2 sm:mb-3">
                  Rs. {product.price.toLocaleString()}
                </p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-amber-600 text-white py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm hover:bg-amber-700 transition transform hover:scale-105"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Services link */}
        <div className="text-center mt-12 sm:mt-16">
          <Link href="/services">
            <button className="px-4 sm:px-6 py-2 sm:py-3 border-2 border-amber-600 text-amber-600 rounded-lg text-sm sm:text-base font-semibold hover:bg-amber-50 transition transform hover:scale-105">
              ← Back to All Services
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}