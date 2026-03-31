'use client';

import Link from 'next/link';
import Button from '../../components/Button';
import ProductCard from '../../components/Product';

// ✅ COMPLETELY NEW PICTURES – never used before
const products = [
  // Women – All new, never seen before
  { id: 1, name: "Elegant Floral Dress", price: 5999, image: "https://images.unsplash.com/photo-1556905055-8f358a7d47b2?w=600&h=700&fit=crop", category: "Women" },
  { id: 2, name: "Classic Denim Jacket", price: 6999, image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&h=700&fit=crop", category: "Women" },
  { id: 3, name: "Summer Maxi Dress", price: 4499, image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&h=700&fit=crop", category: "Women" },
  { id: 4, name: "Leather Handbag", price: 8999, image: "https://images.unsplash.com/photo-1591561954555-607968c9ab12?w=600&h=700&fit=crop", category: "Women" },
  { id: 5, name: "Stylish Sunglasses", price: 2999, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=700&fit=crop", category: "Women" },
  { id: 6, name: "Leather Ankle Boots", price: 7999, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&h=700&fit=crop", category: "Women" },
  
  // Men – All new, never seen before
  { id: 7, name: "Classic Blazer", price: 7999, image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=700&fit=crop", category: "Men" },
  { id: 8, name: "Casual Shirt", price: 2999, image: "https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=600&h=700&fit=crop", category: "Men" },
  { id: 9, name: "Denim Jeans", price: 3999, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&h=700&fit=crop", category: "Men" },
  { id: 10, name: "Leather Shoes", price: 6999, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=700&fit=crop", category: "Men" },
  { id: 11, name: "Wool Sweater", price: 4999, image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&h=700&fit=crop", category: "Men" },
  { id: 12, name: "Leather Belt", price: 1999, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=700&fit=crop", category: "Men" }
];

export default function FeaturedProducts() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-rose-800 mb-4">Featured Products</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover our hand-picked selection of the latest fashion trends</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/products">
            <Button variant="outline" size="lg">View All Products</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}