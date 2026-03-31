'use client';

import Link from 'next/link';
import Button from '../../components/Button';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category?: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
      
      {/* Product Image with Hover Zoom */}
      <div className="relative h-56 overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {product.category && (
          <span className="absolute top-2 left-2 bg-rose-600 text-white text-xs px-2 py-1 rounded-full">
            {product.category}
          </span>
        )}
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1 hover:text-rose-700 transition-colors">
          <Link href={`/products/${product.id}`}>
            {product.name}
          </Link>
        </h3>
        <p className="text-xl font-bold text-rose-800 mb-3">
          Rs. {product.price.toLocaleString()}
        </p>
        
        {/* Add to Cart Button */}
        <Button 
          variant="primary" 
          size="sm" 
          className="w-full"
          onClick={() => console.log('Add to cart:', product.id)} // Yahan actual addToCart function lage ga
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}