'use client';

import Link from 'next/link';
import { useCart } from '../context/CartContext';   // ✅ import cart

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category?: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();   // ✅ addToCart function le lo
  console.log("useCart loaded, addToCart type:", typeof addToCart);

  const handleAddToCart = () => {
    console.log("Adding to cart:", product);  // console mein check karne ke liye
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
      
      {/* Image Container with Hover Zoom */}
      <div className="relative h-56 overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600';
          }}
        />
        {product.category && (
          <span className="absolute top-2 left-2 bg-rose-600 text-white text-xs px-2 py-1 rounded-full">
            {product.category}
          </span>
        )}
      </div>

      {/* Product Details */}
      <div className="p-4">
        <Link href={`/product/${product.id}`}>   {/* ✅ product detail page link */}
          <h3 className="text-lg font-semibold text-gray-800 mb-1 hover:text-rose-700 transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-xl font-bold text-rose-800 mb-3">
          Rs. {product.price.toLocaleString()}
        </p>
        
        {/* Add to Cart Button - Ab sahi se kaam karega */}
        <button
          onClick={handleAddToCart}
          className="w-full bg-amber-500 text-white py-2 rounded-lg font-semibold hover:bg-amber-600 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}