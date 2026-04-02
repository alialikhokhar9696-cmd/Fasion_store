"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { products } from '../src/data/products';
import ProductCard from '../src/components/Product';

export default function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchQuery, setSearchQuery] = useState(query);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

  useEffect(() => {
    if (query && products && products.length > 0) {
      const filtered = products.filter((product: any) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  }, [query]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  // Agar products available nahi hain
  if (!products || products.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-gray-500">No products available</p>
        <Link href="/" className="mt-4 inline-block text-amber-600 hover:underline">← Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Search Form */}
      <div className="max-w-2xl mx-auto mb-12">
        <form onSubmit={handleSearch} className="flex gap-2">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for products..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            autoFocus
          />
          <button
            type="submit"
            className="px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition"
          >
            Search
          </button>
        </form>
      </div>

      {/* Results */}
      {query ? (
        <>
          <h1 className="text-2xl font-bold mb-6">
            Search results for: <span className="text-amber-600">"{query}"</span>
          </h1>
          {filteredProducts.length > 0 ? (
            <>
              <p className="text-gray-600 mb-6">{filteredProducts.length} products found</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found for "{query}"</p>
              <Link href="/" className="mt-4 inline-block text-amber-600 hover:underline">
                ← Back to Home
              </Link>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Enter a search term to find products</p>
        </div>
      )}
    </div>
  );
}