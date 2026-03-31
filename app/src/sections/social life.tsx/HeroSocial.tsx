'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Post {
  id: number;
  user: string;
  avatar: string;
  content: string;
  likes: number;
  time: string;
  liked?: boolean;
}

const initialPosts: Post[] = [
  {
    id: 1,
    user: 'ali_raza',
    avatar: '👤',
    content: 'Maine yeh blue shirt khareeda hai. Bohot soft fabric hai! Delivery bhi fast thi. 👍',
    likes: 24,
    time: '2 hours ago',
  },
  {
    id: 2,
    user: 'sara_khan',
    avatar: '👩',
    content: 'Black jeans ki quality zabardast hai. Sab log pooch rahe hain kahan se liya! Highly recommended 👌',
    likes: 42,
    time: '5 hours ago',
  },
  {
    id: 3,
    user: 'zain_ahmed',
    avatar: '👨',
    content: 'Pehli dafa online kapray liye. Bilkul waise hi mile jaisay website par dikh raha tha. Thank you ANAS FASHION!',
    likes: 18,
    time: '1 day ago',
  },
  {
    id: 4,
    user: 'fatima_zahra',
    avatar: '👧',
    content: 'Bachon k liye bohat achi collection hai. Mera beta bohot khush hai 😊',
    likes: 31,
    time: '3 days ago',
  },
];

export default function HeroSocial() {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  const handleLike = (id: number) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id
          ? { ...post, likes: post.liked ? post.likes - 1 : post.likes + 1, liked: !post.liked }
          : post
      )
    );
  };

  return (
    <section className="py-20 px-4 bg-amber-50">
      <div className="container mx-auto max-w-4xl">
        
        {/* Section heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-rose-800 mb-4 animate-fadeIn">
          Customer Reviews
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto animate-fadeUp">
          Log kya keh rahe hain – suniye apne customers ki awaaz
        </p>

        {/* Posts grid */}
        <div className="space-y-6">
          {posts.map((post, index) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 animate-fadeUp"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start space-x-4">
                {/* Avatar */}
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-2xl">
                  {post.avatar}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-800">{post.user}</h3>
                    <span className="text-xs text-gray-500">{post.time}</span>
                  </div>
                  <p className="text-gray-700 mb-3">{post.content}</p>

                  {/* Like button */}
                  <button
                    onClick={() => handleLike(post.id)}
                    className="flex items-center space-x-2 text-gray-500 hover:text-rose-600 transition-colors"
                  >
                    <svg
                      className={`w-5 h-5 ${post.liked ? 'fill-rose-600 text-rose-600' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    <span>{post.likes} likes</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}