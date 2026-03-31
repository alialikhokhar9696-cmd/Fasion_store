"use client";

import Link from 'next/link';
import { useCart } from '../../context/CartContext';

interface ProductProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    category?: string;
  };
}

export default function ProductCard({ product }: ProductProps) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition group">
      <Link href={`/product/${product.id}`} className="block overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
        />
      </Link>
      <div className="p-5">
        <Link href={`/product/${product.id}`}>
          <h3 className="font-semibold text-lg hover:text-amber-600 transition">
            {product.name}
          </h3>
        </Link>
        <p className="text-amber-600 font-bold mt-2">
          Rs. {product.price.toLocaleString()}
        </p>
        <button
          onClick={() => addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image
          })}
          className="mt-4 w-full bg-amber-500 text-white py-2 rounded-lg hover:bg-amber-600 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}