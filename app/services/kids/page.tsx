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
  // 👶 Baby Girls (0-2 years) - Cute pink/soft images
  { 
    id: 1, 
    name: "Baby Girl Floral Dress", 
    price: 2499, 
    image: "https://images.pexels.com/photos/3965533/pexels-photo-3965533.jpeg?auto=compress&w=400", 
    category: "Baby Girls", 
    ageGroup: "0-2 years" 
  },
  { 
    id: 2, 
    name: "Baby Girl Romper", 
    price: 1899, 
    image: "https://images.pexels.com/photos/3786186/pexels-photo-3786186.jpeg?auto=compress&w=400", 
    category: "Baby Girls", 
    ageGroup: "0-2 years" 
  },
  { 
    id: 3, 
    name: "Baby Girl Pink Jumpsuit", 
    price: 2799, 
    image: "https://images.pexels.com/photos/4329105/pexels-photo-4329105.jpeg?auto=compress&w=400", 
    category: "Baby Girls", 
    ageGroup: "0-2 years" 
  },
  
  // 👶 Baby Boys (0-2 years) - Blue/cute images
  { 
    id: 4, 
    name: "Baby Boy Romper", 
    price: 1899, 
    image: "https://images.pexels.com/photos/3965531/pexels-photo-3965531.jpeg?auto=compress&w=400", 
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
  
  // 👧 Girls (3-10 years) - Stylish girls wear
  { 
    id: 7, 
    name: "Girls Party Dress", 
    price: 3999, 
    image: "https://images.pexels.com/photos/4307692/pexels-photo-4307692.jpeg?auto=compress&w=400", 
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
  
  // 👦 Boys (3-10 years) - Cool boys wear
  { 
    id: 13, 
    name: "Boys Casual Shirt", 
    price: 1899, 
    image: "https://images.pexels.com/photos/4329100/pexels-photo-4329100.jpeg?auto=compress&w=400", 
    category: "Boys", 
    ageGroup: "3-10 years" 
  },
  { 
    id: 14, 
    name: "Boys Denim Jeans", 
    price: 2499, 
    image: "https://images.pexels.com/photos/4307689/pexels-photo-4307689.jpeg?auto=compress&w=400", 
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
  { 
    id: 17, 
    name: "Boys Shorts Set", 
    price: 1499, 
    image: "https://images.pexels.com/photos/4329098/pexels-photo-4329098.jpeg?auto=compress&w=400", 
    category: "Boys", 
    ageGroup: "3-10 years" 
  },
  { 
    id: 18, 
    name: "Boys Formal Suit", 
    price: 5999, 
    image: "https://images.pexels.com/photos/3965532/pexels-photo-3965532.jpeg?auto=compress&w=400", 
    category: "Boys", 
    ageGroup: "3-10 years" 
  },
  
  // 👟 Kids Shoes - All in one
  { 
    id: 19, 
    name: "Baby Girl Floral Shoes", 
    price: 1899, 
    image: "https://images.pexels.com/photos/4329106/pexels-photo-4329106.jpeg?auto=compress&w=400", 
    category: "Shoes", 
    ageGroup: "All" 
  },
  { 
    id: 20, 
    name: "Baby Boy Sneakers", 
    price: 1999, 
    image: "https://images.pexels.com/photos/3965534/pexels-photo-3965534.jpeg?auto=compress&w=400", 
    category: "Shoes", 
    ageGroup: "All" 
  },
  { 
    id: 21, 
    name: "Girls School Shoes", 
    price: 2499, 
    image: "https://images.pexels.com/photos/4329107/pexels-photo-4329107.jpeg?auto=compress&w=400", 
    category: "Shoes", 
    ageGroup: "3-10 years" 
  },
  { 
    id: 22, 
    name: "Boys Sports Shoes", 
    price: 2799, 
    image: "https://images.pexels.com/photos/3965535/pexels-photo-3965535.jpeg?auto=compress&w=400", 
    category: "Shoes", 
    ageGroup: "3-10 years" 
  },
  { 
    id: 23, 
    name: "Kids Party Sandals", 
    price: 1499, 
    image: "https://images.pexels.com/photos/4329108/pexels-photo-4329108.jpeg?auto=compress&w=400", 
    category: "Shoes", 
    ageGroup: "All" 
  },
  
  // 🎒 Kids Accessories
  { 
    id: 24, 
    name: "Baby Girl Hair Bows Set", 
    price: 499, 
    image: "https://images.pexels.com/photos/3965536/pexels-photo-3965536.jpeg?auto=compress&w=400", 
    category: "Accessories", 
    ageGroup: "All" 
  },
  { 
    id: 25, 
    name: "Kids Baseball Cap", 
    price: 899, 
    image: "https://images.pexels.com/photos/4329109/pexels-photo-4329109.jpeg?auto=compress&w=400", 
    category: "Accessories", 
    ageGroup: "All" 
  },
  { 
    id: 26, 
    name: "Kids Polarized Sunglasses", 
    price: 1299, 
    image: "https://images.pexels.com/photos/3965537/pexels-photo-3965537.jpeg?auto=compress&w=400", 
    category: "Accessories", 
    ageGroup: "All" 
  },
  { 
    id: 27, 
    name: "Kids Cartoon Backpack", 
    price: 2499, 
    image: "https://images.pexels.com/photos/4329110/pexels-photo-4329110.jpeg?auto=compress&w=400", 
    category: "Accessories", 
    ageGroup: "All" 
  },
  
  // 🧸 Kids Toys
  { 
    id: 28, 
    name: "Soft Teddy Bear", 
    price: 1999, 
    image: "https://images.pexels.com/photos/3965538/pexels-photo-3965538.jpeg?auto=compress&w=400", 
    category: "Toys", 
    ageGroup: "All" 
  },
  { 
    id: 29, 
    name: "Building Blocks Set", 
    price: 2999, 
    image: "https://images.pexels.com/photos/4329111/pexels-photo-4329111.jpeg?auto=compress&w=400", 
    category: "Toys", 
    ageGroup: "3+ years" 
  },
  { 
    id: 30, 
    name: "Dream Doll House", 
    price: 5999, 
    image: "https://images.pexels.com/photos/3965539/pexels-photo-3965539.jpeg?auto=compress&w=400", 
    category: "Toys", 
    ageGroup: "3+ years" 
  },
  { 
    id: 31, 
    name: "Toy Car Collection", 
    price: 2499, 
    image: "https://images.pexels.com/photos/4329112/pexels-photo-4329112.jpeg?auto=compress&w=400", 
    category: "Toys", 
    ageGroup: "3+ years" 
  },
  
  // 🎉 Special Occasion Wear
  { 
    id: 32, 
    name: "Girls Birthday Gown", 
    price: 4999, 
    image: "https://images.pexels.com/photos/3965540/pexels-photo-3965540.jpeg?auto=compress&w=400", 
    category: "Special Occasion", 
    ageGroup: "All" 
  },
  { 
    id: 33, 
    name: "Boys Wedding Suit", 
    price: 5999, 
    image: "https://images.pexels.com/photos/4329113/pexels-photo-4329113.jpeg?auto=compress&w=400", 
    category: "Special Occasion", 
    ageGroup: "All" 
  },
  { 
    id: 34, 
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
  const [hoveredId, setHoveredId] = useState<number | null>(null);

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
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-purple-50 to-white min-h-screen">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-800 mb-3 md:mb-4">
            Kids Collection 👶
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Everything your little ones need – from baby wear to toys and accessories
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 md:mb-12 space-y-4">
          <div className="flex flex-wrap justify-center gap-2 px-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white shadow-md scale-105'
                    : 'bg-gray-200 text-gray-700 hover:bg-purple-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-2 px-2">
            {ageGroups.map((age) => (
              <button
                key={age}
                onClick={() => setSelectedAge(age)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-full transition-all duration-300 ${
                  selectedAge === age
                    ? 'bg-purple-600 text-white shadow-md scale-105'
                    : 'bg-gray-200 text-gray-700 hover:bg-purple-100'
                }`}
              >
                {age}
              </button>
            ))}
          </div>
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
              <div className="relative h-48 xs:h-52 sm:h-56 overflow-hidden rounded-t-xl sm:rounded-t-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.pexels.com/photos/3965533/pexels-photo-3965533.jpeg?auto=compress&w=400';
                  }}
                />
                <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-purple-600 text-white text-[10px] xs:text-xs px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full">
                  {product.category}
                </span>
                {product.ageGroup && (
                  <span className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-amber-500 text-white text-[10px] xs:text-xs px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full">
                    {product.ageGroup}
                  </span>
                )}
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-1 group-hover:text-purple-600 transition-colors line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-base sm:text-lg md:text-xl font-bold text-purple-800 mb-2 sm:mb-3">
                  Rs. {product.price.toLocaleString()}
                </p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-purple-600 text-white py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm hover:bg-purple-700 transition transform hover:scale-105"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Services */}
        <div className="text-center mt-12 sm:mt-16">
          <Link href="/services">
            <button className="px-4 sm:px-6 py-2 sm:py-3 border-2 border-purple-600 text-purple-600 rounded-lg text-sm sm:text-base font-semibold hover:bg-purple-50 transition transform hover:scale-105">
              ← Back to All Services
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}