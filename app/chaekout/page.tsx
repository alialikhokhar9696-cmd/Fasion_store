"use client";

import { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '../src/context/CartContext';

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, clearCart, totalItems } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
  });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderTime, setOrderTime] = useState('');
  const [orderId, setOrderId] = useState('');

  // Agar cart empty hai to home page redirect karo
  if (cart.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <Link href="/" className="bg-amber-500 text-white px-6 py-3 rounded-lg">Continue Shopping</Link>
        </div>
      </div>
    );
  }

  // Subtotal calculation
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 5000 ? 0 : 200;
  const total = subtotal + shipping;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Generate order ID
    const newOrderId = 'ORD-' + Math.floor(Math.random() * 1000000);
    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-PK', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    const formattedTime = now.toLocaleTimeString('en-PK', {
      hour: '2-digit',
      minute: '2-digit',
    });

    setOrderId(newOrderId);
    setOrderTime(`${formattedDate}, ${formattedTime}`);
    setOrderPlaced(true);
    clearCart(); // Cart empty karo
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
              ✓
            </div>
            <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
            <p className="text-gray-600 mb-4">Thank you for shopping with ANAS ALI FASHION</p>
            <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left">
              <p className="font-semibold">Order ID: <span className="text-amber-600">{orderId}</span></p>
              <p className="font-semibold mt-2">Date & Time: <span className="text-amber-600">{orderTime}</span></p>
              <div className="border-t mt-4 pt-4">
                <p className="font-bold">Items:</p>
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between text-sm mt-1">
                    <span>{item.name} (x{item.quantity})</span>
                    <span>Rs. {(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
                <div className="flex justify-between font-bold mt-3 pt-2 border-t">
                  <span>Total Paid</span>
                  <span className="text-amber-600">Rs. {total.toLocaleString()}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-4 justify-center">
              <Link href="/" className="px-6 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600">Continue Shopping</Link>
              <Link href="/account/orders" className="px-6 py-2 border border-amber-500 text-amber-600 rounded-lg hover:bg-amber-50">View Orders</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Checkout form */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Shipping Details</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className="w-full p-3 border rounded-lg" />
                <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className="w-full p-3 border rounded-lg" />
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className="w-full p-3 border rounded-lg" />
                <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required className="w-full p-3 border rounded-lg" />
              </div>
              <div className="mb-4">
                <textarea name="address" rows={3} placeholder="Street Address" value={formData.address} onChange={handleChange} required className="w-full p-3 border rounded-lg"></textarea>
              </div>
              <div className="mb-4">
                <input type="text" name="postalCode" placeholder="Postal Code" value={formData.postalCode} onChange={handleChange} required className="w-full p-3 border rounded-lg" />
              </div>
              <button type="submit" className="w-full py-3 bg-amber-500 text-white rounded-lg font-semibold hover:bg-amber-600 transition">
                Place Order
              </button>
            </form>
          </div>

          {/* Order summary */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-3 text-gray-600">
              {cart.map(item => (
                <div key={item.id} className="flex justify-between">
                  <span>{item.name} (x{item.quantity})</span>
                  <span>Rs. {(item.price * item.quantity).toLocaleString()}</span>
                </div>
              ))}
              <div className="border-t pt-3 mt-3">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>Rs. {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "Free" : `Rs. ${shipping}`}</span>
                </div>
                <div className="flex justify-between font-bold text-lg mt-2 pt-2 border-t">
                  <span>Total</span>
                  <span className="text-amber-600">Rs. {total.toLocaleString()}</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">* You will be able to review order before final confirmation.</p>
          </div>
        </div>
      </div>
    </div>
  );
}