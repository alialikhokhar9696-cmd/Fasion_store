"use client";

import { useCart } from '../../context/CartContext';

export default function AddToCartButton({ product }: { product: any }) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      className="mt-6 px-8 py-3 bg-linear-to-r from-amber-500 to-amber-600 text-white rounded-xl font-semibold hover:scale-105 transition"
    >
      Add to Cart
    </button>
  );
}