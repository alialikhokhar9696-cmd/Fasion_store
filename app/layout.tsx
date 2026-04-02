import type { Metadata } from 'next';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import { CartProvider } from './src/context/CartContext';
import './globals.css';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'ANAS ALI FASHION - Premium Clothing Store',
  description: 'Shop the latest trends in men, women & kids fashion.',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">👕</text></svg>',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <CartProvider>
          <Header />
          <main className="grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}