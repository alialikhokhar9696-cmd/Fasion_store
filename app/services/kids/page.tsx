"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '../../src/context/CartContext';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  ageGroup?: string;
}

const products: Product[] = [
  // 👶 Baby Girls (0-2 years)
  { 
    id: 1, 
    name: "Baby Girl Floral Dress", 
    price: 2499, 
    image: "kid1.jfif", 
    category: "Baby Girls", 
    ageGroup: "0-2 years" 
  },
  { 
    id: 2, 
    name: "Baby Girl Pink Romper", 
    price: 1899, 
    image: "kid1.jfif", 
    category: "Baby Girls", 
    ageGroup: "0-2 years" 
  },
  { 
    id: 3, 
    name: "Baby Girl Winter Set", 
    price: 3299, 
    image: "kid2.jfif", 
    category: "Baby Girls", 
    ageGroup: "0-2 years" 
  },
  
  // 👶 Baby Boys (0-2 years)
  { 
    id: 4, 
    name: "Baby Boy Romper", 
    price: 1899, 
    image: "https://images.pexels.com/photos/3926128/pexels-photo-3926128.jpeg?auto=compress&w=400", 
    category: "Baby Boys", 
    ageGroup: "0-2 years" 
  },
  { 
    id: 5, 
    name: "Baby Boy Tracksuit", 
    price: 2799, 
    image: "https://images.pexels.com/photos/4329102/pexels-photo-4329102.jpeg?auto=compress&w=400", 
    category: "Baby Boys", 
    ageGroup: "0-2 years" 
  },
  { 
    id: 6, 
    name: "Baby Boy Shirt Set", 
    price: 2999, 
    image: "https://images.pexels.com/photos/3786182/pexels-photo-3786182.jpeg?auto=compress&w=400", 
    category: "Baby Boys", 
    ageGroup: "0-2 years" 
  },
  
  // 👧 Girls (3-10 years)
  { 
    id: 7, 
    name: "Girls Party Dress", 
    price: 3999, 
    image: "https://images.pexels.com/photos/3617803/pexels-photo-3617803.jpeg?auto=compress&w=400", 
    category: "Girls", 
    ageGroup: "3-10 years" 
  },
  { 
    id: 8, 
    name: "Girls Casual Top", 
    price: 1799, 
    image: "https://images.pexels.com/photos/4329103/pexels-photo-4329103.jpeg?auto=compress&w=400", 
    category: "Girls", 
    ageGroup: "3-10 years" 
  },
  { 
    id: 9, 
    name: "Girls Denim Jeans", 
    price: 2499, 
    image: "https://images.pexels.com/photos/4307691/pexels-photo-4307691.jpeg?auto=compress&w=400", 
    category: "Girls", 
    ageGroup: "3-10 years" 
  },
  { 
    id: 10, 
    name: "Girls Floral Skirt", 
    price: 1999, 
    image: "https://images.pexels.com/photos/4329104/pexels-photo-4329104.jpeg?auto=compress&w=400", 
    category: "Girls", 
    ageGroup: "3-10 years" 
  },
  { 
    id: 11, 
    name: "Girls Winter Sweater", 
    price: 2899, 
    image: "https://images.pexels.com/photos/4329101/pexels-photo-4329101.jpeg?auto=compress&w=400", 
    category: "Girls", 
    ageGroup: "3-10 years" 
  },
  { 
    id: 12, 
    name: "Girls School Uniform", 
    price: 3499, 
    image: "https://images.pexels.com/photos/4307693/pexels-photo-4307693.jpeg?auto=compress&w=400", 
    category: "Girls", 
    ageGroup: "3-10 years" 
  },
  
  // 👦 Boys (3-10 years)
  { 
    id: 13, 
    name: "Boys Casual Shirt", 
    price: 1899, 
    image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&w=400", 
    category: "Boys", 
    ageGroup: "3-10 years" 
  },
  { 
    id: 14, 
    name: "Boys Denim Jeans", 
    price: 2499, 
    image: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&w=400", 
    category: "Boys", 
    ageGroup: "3-10 years" 
  },
  { 
    id: 15, 
    name: "Boys Tracksuit", 
    price: 3499, 
    image: "https://images.pexels.com/photos/4329099/pexels-photo-4329099.jpeg?auto=compress&w=400", 
    category: "Boys", 
    ageGroup: "3-10 years" 
  },
  { 
    id: 16, 
    name: "Boys Winter Jacket", 
    price: 3999, 
    image: "https://images.pexels.com/photos/4307690/pexels-photo-4307690.jpeg?auto=compress&w=400", 
    category: "Boys", 
    ageGroup: "3-10 years" 
  },
  
  // 👟 Kids Shoes
  { 
    id: 17, 
    name: "Baby Girl Floral Shoes", 
    price: 1899, 
    image: "https://images.pexels.com/photos/4329106/pexels-photo-4329106.jpeg?auto=compress&w=400", 
    category: "Shoes", 
    ageGroup: "All" 
  },
  { 
    id: 18, 
    name: "Baby Boy Sneakers", 
    price: 1999, 
    image: "https://images.pexels.com/photos/3965534/pexels-photo-3965534.jpeg?auto=compress&w=400", 
    category: "Shoes", 
    ageGroup: "All" 
  },
  { 
    id: 19, 
    name: "Girls School Shoes", 
    price: 2499, 
    image: "https://images.pexels.com/photos/4329107/pexels-photo-4329107.jpeg?auto=compress&w=400", 
    category: "Shoes", 
    ageGroup: "3-10 years" 
  },
  { 
    id: 20, 
    name: "Boys Sports Shoes", 
    price: 2799, 
    image: "https://images.pexels.com/photos/3965535/pexels-photo-3965535.jpeg?auto=compress&w=400", 
    category: "Shoes", 
    ageGroup: "3-10 years" 
  },
  
  // 🎒 Accessories
  { 
    id: 21, 
    name: "Kids Baseball Cap", 
    price: 899, 
    image: "https://images.pexels.com/photos/4329109/pexels-photo-4329109.jpeg?auto=compress&w=400", 
    category: "Accessories", 
    ageGroup: "All" 
  },
  { 
    id: 22, 
    name: "Kids Sunglasses", 
    price: 1299, 
    image: "https://images.pexels.com/photos/3965537/pexels-photo-3965537.jpeg?auto=compress&w=400", 
    category: "Accessories", 
    ageGroup: "All" 
  },
  { 
    id: 23, 
    name: "Kids Backpack", 
    price: 2499, 
    image: "https://images.pexels.com/photos/4329110/pexels-photo-4329110.jpeg?auto=compress&w=400", 
    category: "Accessories", 
    ageGroup: "All" 
  },
  
  // 🧸 Toys
  { 
    id: 24, 
    name: "Soft Teddy Bear", 
    price: 1999, 
    image: "https://images.pexels.com/photos/4500531/pexels-photo-4500531.jpeg?auto=compress&w=400", 
    category: "Toys", 
    ageGroup: "All" 
  },
  { 
    id: 25, 
    name: "Building Blocks", 
    price: 2999, 
    image: "https://images.pexels.com/photos/4329111/pexels-photo-4329111.jpeg?auto=compress&w=400", 
    category: "Toys", 
    ageGroup: "3+ years" 
  },
  { 
    id: 26, 
    name: "Doll House", 
    price: 5999, 
    image: "https://images.pexels.com/photos/3965539/pexels-photo-3965539.jpeg?auto=compress&w=400", 
    category: "Toys", 
    ageGroup: "3+ years" 
  },
  { 
    id: 27, 
    name: "Toy Car Set", 
    price: 2499, 
    image: "https://images.pexels.com/photos/4329112/pexels-photo-4329112.jpeg?auto=compress&w=400", 
    category: "Toys", 
    ageGroup: "3+ years" 
  },
  
  // 🎉 Special Occasion
  {
    id: 28,
    name: "Kids Eid Collection",
    price: 3999,
    image: "https://images.pexels.com/photos/3965541/pexels-photo-3965541.jpeg?auto=compress&w=400",
    category: "Special Occasion",
    ageGroup: "All"
  }
];

export default function KidsFashionPage() {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedAge, setSelectedAge] = useState<string>("All");

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  };

  // Get unique categories
  const categorySet = new Set(products.map(p => p.category));
  const categories = ["All", ...Array.from(categorySet)];

  // Get unique age groups
  const ageSet = new Set(products.map(p => p.ageGroup || "All"));
  const ageGroups = ["All", ...Array.from(ageSet).filter(age => age !== "All")];

  // Filter products
  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === "All" || product.category === selectedCategory;
    const ageMatch = selectedAge === "All" || product.ageGroup === selectedAge;
    return categoryMatch && ageMatch;
  });

  return (
    <div className="py-16 px-4 bg-linear-to-b from-purple-50 to-white min-h-screen">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-800 mb-3">
            Kids Collection 👶
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything your little ones need – from baby wear to toys
          </p>
        </div>

        {/* Filters */}
        <div className="mb-10 space-y-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'bg-gray-200 text-gray-700 hover:bg-purple-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {ageGroups.map((age) => (
              <button
                key={age}
                onClick={() => setSelectedAge(age)}
                className={`px-4 py-2 text-sm rounded-full transition-all duration-300 ${
                  selectedAge === age
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'bg-gray-200 text-gray-700 hover:bg-purple-100'
                }`}
              >
                {age}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden rounded-t-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.pexels.com/photos/2973382/pexels-photo-2973382.jpeg?auto=compress&w=400';
                  }}
                />
                <span className="absolute top-2 left-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
                  {product.category}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-1 line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-xl font-bold text-purple-800 mb-3">
                  Rs. {product.price.toLocaleString()}
                </p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-purple-600 text-white py-2 rounded-lg text-sm hover:bg-purple-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No products found */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No products found in this category.</p>
          </div>
        )}

        {/* Back to Services */}
        <div className="text-center mt-12">
          <Link href="/services">
            <button className="px-6 py-2 border-2 border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition">
              ← Back to All Services
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}