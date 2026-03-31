'use client';

import { useRef, useEffect, useState } from 'react';

// 20 HD women fashion images (Pexels - all different, English style)
const instagramPosts = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/6319861/pexels-photo-6319861.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
    caption: 'Elegant summer dress 🌸',
    likes: 345,
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/6319884/pexels-photo-6319884.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
    caption: 'Classic denim jacket 👖',
    likes: 412,
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/6319900/pexels-photo-6319900.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
    caption: 'Designer handbag collection ✨',
    likes: 289,
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/6319921/pexels-photo-6319921.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
    caption: 'Leather ankle boots 🥾',
    likes: 176,
  },
  {
    id: 5,
    image: 'https://images.pexels.com/photos/6319945/pexels-photo-6319945.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
    caption: 'Silk blouse & accessories 👚',
    likes: 523,
  },
  {
    id: 6,
    image: 'https://images.pexels.com/photos/6319967/pexels-photo-6319967.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
    caption: 'High-waist jeans trend 👖',
    likes: 298,
  },
  {
    id: 7,
    image: 'https://images.pexels.com/photos/6319989/pexels-photo-6319989.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
    caption: 'Oversized sweater style 🧥',
    likes: 401,
  },
  {
    id: 8,
    image: 'https://images.pexels.com/photos/6320012/pexels-photo-6320012.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
    caption: 'Leather handbag & gloves 👜',
    likes: 267,
  },
  {
    id: 9,
    image: 'https://images.pexels.com/photos/6320034/pexels-photo-6320034.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
    caption: 'Casual chic outfit 👗',
    likes: 389,
  },
  {
    id: 10,
    image: 'https://images.pexels.com/photos/6320056/pexels-photo-6320056.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
    caption: 'Evening gown collection 🌙',
    likes: 612,
  },
  {
    id: 11,
    image: 'https://images.pexels.com/photos/6320078/pexels-photo-6320078.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
    caption: 'Stylish sunglasses 🕶️',
    likes: 234,
  },
  {
    id: 12,
    image: 'https://images.pexels.com/photos/6320100/pexels-photo-6320100.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
    caption: 'Gold jewelry set 💎',
    likes: 178,
  },
  {
    id: 13,
    image: 'https://images.pexels.com/photos/6320123/pexels-photo-6320123.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
    caption: 'Winter coat fashion ❄️',
    likes: 345,
  },
  {
    id: 14,
    image: 'https://images.pexels.com/photos/6320145/pexels-photo-6320145.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
    caption: 'Silk scarf collection 🧣',
    likes: 156,
  },
  {
    id: 15,
    image: 'https://images.pexels.com/photos/6320167/pexels-photo-6320167.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
    caption: 'Casual sneakers 👟',
    likes: 289,
  },
  {
    id: 16,
    image: 'https://images.pexels.com/photos/6320189/pexels-photo-6320189.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
    caption: 'Designer belt collection 💫',
    likes: 201,
  },
  {
    id: 17,
    image: 'https://images.pexels.com/photos/6320211/pexels-photo-6320211.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
    caption: 'Party wear dress 🎉',
    likes: 456,
  },
  {
    id: 18,
    image: 'https://images.pexels.com/photos/6320233/pexels-photo-6320233.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
    caption: 'Casual weekend look 👜',
    likes: 312,
  },
  {
    id: 19,
    image: 'https://images.pexels.com/photos/6320255/pexels-photo-6320255.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
    caption: 'Fashion accessories 🕶️',
    likes: 198,
  },
  {
    id: 20,
    image: 'https://images.pexels.com/photos/6320277/pexels-photo-6320277.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
    caption: 'New collection preview ✨',
    likes: 567,
  },
];

export default function InstagramFeed() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const nextIndex = (currentIndex + 1) % instagramPosts.length;
        const scrollAmount = nextIndex * (272 + 24); // card width + gap
        scrollRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
        setCurrentIndex(nextIndex);
      }
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const newIndex = (currentIndex - 1 + instagramPosts.length) % instagramPosts.length;
      const scrollAmount = newIndex * (272 + 24);
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      setCurrentIndex(newIndex);
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const newIndex = (currentIndex + 1) % instagramPosts.length;
      const scrollAmount = newIndex * (272 + 24);
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      setCurrentIndex(newIndex);
    }
  };

  return (
    <section className="py-20 px-4 bg-amber-50">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-rose-800 mb-4 animate-slideDown">
            Instagram Feed 📸
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fadeUp">
            Follow us on Instagram for daily fashion inspiration
          </p>
        </div>

        {/* Scroll Buttons (Desktop) */}
        <div className="hidden md:flex justify-end gap-2 mb-4">
          <button
            onClick={scrollLeft}
            className="p-2 bg-rose-600 text-white rounded-full hover:bg-rose-700 transition"
          >
            ←
          </button>
          <button
            onClick={scrollRight}
            className="p-2 bg-rose-600 text-white rounded-full hover:bg-rose-700 transition"
          >
            →
          </button>
        </div>

        {/* Horizontal Scrollable Feed */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {instagramPosts.map((post, index) => (
            <div
              key={post.id}
              className="flex-none w-64 sm:w-72 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 snap-start animate-fadeUp"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative h-64 overflow-hidden rounded-t-2xl">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    // Agar image fail ho to placeholder dikhao
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x600?text=Fashion';
                  }}
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-700 mb-2">{post.caption}</p>
                <div className="flex items-center text-rose-600">
                  <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span className="text-sm font-semibold">{post.likes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile hint */}
        <p className="text-center text-sm text-gray-500 mt-4 md:hidden animate-fadeIn">
          ← Swipe to see more →
        </p>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {instagramPosts.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (scrollRef.current) {
                  const scrollAmount = index * (272 + 24);
                  scrollRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
                  setCurrentIndex(index);
                }
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index ? 'w-6 bg-rose-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}