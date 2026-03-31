"use client";

import Link from 'next/link';
import { useCart } from '../src/context/CartContext';

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Your cart is empty</h2>
          <Link href="/" className="mt-4 inline-block bg-amber-500 text-white px-6 py-3 rounded-lg">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 5000 ? 0 : 200;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cart.map(item => (
              <div key={item.id} className="bg-white rounded-xl shadow-md p-4 flex gap-4">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-amber-600 font-bold mt-1">Rs. {item.price.toLocaleString()}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-1 border rounded">-</button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1 border rounded">+</button>
                    <button onClick={() => removeFromCart(item.id)} className="text-red-500 ml-4">Remove</button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold">Rs. {(item.price * item.quantity).toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-3">
              <div className="flex justify-between"><span>Subtotal</span><span>Rs. {subtotal.toLocaleString()}</span></div>
              <div className="flex justify-between"><span>Shipping</span><span>{shipping === 0 ? "Free" : `Rs. ${shipping}`}</span></div>
              <div className="border-t pt-3 mt-3"><div className="flex justify-between font-bold text-lg"><span>Total</span><span className="text-amber-600">Rs. {total.toLocaleString()}</span></div></div>
            </div>
            <Link href="/checkout" className="mt-6 block w-full bg-amber-500 text-white text-center py-3 rounded-lg">Proceed to Checkout</Link>
          </div>
        </div>
      </div>
    </div>
  );
}