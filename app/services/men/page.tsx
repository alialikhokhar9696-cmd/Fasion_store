'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '../../src/context/CartContext';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const products: Product[] = [
  // Blazers
  { id: 1, name: "Classic Navy Blazer", price: 8999, image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&w=400", category: "Blazers" },
  { id: 2, name: "Black Formal Blazer", price: 9999, image: "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&w=400", category: "Blazers" },
  
  // Shirts
  { id: 3, name: "White Casual Shirt", price: 2499, image: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&w=400", category: "Shirts" },
  { id: 4, name: "Blue Formal Shirt", price: 2999, image: "https://images.pexels.com/photos/2773906/pexels-photo-2773906.jpeg?auto=compress&w=400", category: "Shirts" },
  { id: 5, name: "Black Slim Fit Shirt", price: 2799, image: "https://images.pexels.com/photos/2417860/pexels-photo-2417860.jpeg?auto=compress&w=400", category: "Shirts" },
  
  // Jeans
  { id: 6, name: "Slim Fit Denim Jeans", price: 3999, image: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&w=400", category: "Jeans" },
  { id: 7, name: "Black Skinny Jeans", price: 3499, image: "https://images.pexels.com/photos/1082526/pexels-photo-1082526.jpeg?auto=compress&w=400", category: "Jeans" },
  
  // Shoes
  { id: 8, name: "Brown Leather Shoes", price: 6999, image: "https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg?auto=compress&w=400", category: "Shoes" },
  { id: 9, name: "Black Formal Shoes", price: 7499, image: "https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&w=400", category: "Shoes" },
  { id: 10, name: "White Sneakers", price: 5499, image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&w=400", category: "Shoes" },
  
  // Sweaters
  { id: 11, name: "Wool Crewneck Sweater", price: 4999, image: "https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&w=400", category: "Sweaters" },
  { id: 12, name: "Cashmere Sweater", price: 7999, image: "https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&w=400", category: "Sweaters" },
  
  // Jackets
  { id: 13, name: "Leather Jacket", price: 12999, image: "https://images.pexels.com/photos/3485175/pexels-photo-3485175.jpeg?auto=compress&w=400", category: "Jackets" },
  { id: 14, name: "Denim Jacket", price: 5999, image: "https://images.pexels.com/photos/1898267/pexels-photo-1898267.jpeg?auto=compress&w=400", category: "Jackets" },
  
  // Trousers
  { id: 15, name: "Formal Trousers", price: 3499, image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&w=400", category: "Trousers" },
  { id: 16, name: "Chino Pants", price: 2999, image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&w=400", category: "Trousers" },
  
  // Accessories
  { id: 17, name: "Leather Belt", price: 1999, image: "https://images.pexels.com/photos/1598506/pexels-photo-1598506.jpeg?auto=compress&w=400", category: "Accessories" },
  { id: 18, name: "Designer Watch", price: 8999, image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&w=400", category: "Accessories" },
  { id: 19, name: "Sunglasses", price: 2999, image: "https://images.pexels.com/photos/258293/pexels-photo-258293.jpeg?auto=compress&w=400", category: "Accessories" },
  { id: 20, name: "Tie & Hanky Set", price: 1499, image: "https://images.pexels.com/photos/1927436/pexels-photo-1927436.jpeg?auto=compress&w=400", category: "Accessories" }
];

export default function MenFashionPage() {
  const { addToCart } = useCart();
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  };

  return (
    <div className="py-20 px-4 bg-linear-to-b from-gray-50 to-white min-h-screen">
      <div className="container mx-auto max-w-7xl">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-rose-800 mb-4">
            Men Fashion
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the latest trends in men's clothing
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative h-56 overflow-hidden rounded-t-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&w=400';
                  }}
                />
                <span className="absolute top-3 left-3 bg-rose-600 text-white text-xs px-2 py-1 rounded-full">
                  {product.category}
                </span>
                <div className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${hoveredId === product.id ? 'opacity-100' : 'opacity-0'}`}>
                  <button className="bg-white text-rose-800 px-4 py-2 rounded-lg font-semibold hover:bg-rose-100 transition">
                    Quick View
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-rose-600 transition-colors line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-xl font-bold text-rose-800 mb-3">
                  Rs. {product.price.toLocaleString()}
                </p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-rose-600 text-white py-2 rounded-lg hover:bg-rose-700 transition transform hover:scale-105"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/services">
            <button className="px-6 py-3 border-2 border-rose-600 text-rose-600 rounded-lg font-semibold hover:bg-rose-50 transition transform hover:scale-105">
              ← Back to All Services
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}