'use client';

import Link from 'next/link';
import { ShoppingCart, Package } from 'lucide-react';
import { useCart } from '../context/cartContext';

export default function Header() {
  const { getTotalItems } = useCart();

  return (
    <header className="bg-gray-900/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-700/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-gradient-to-r from-indigo-600 to-pink-600 p-2 rounded-xl group-hover:scale-110 transition-transform duration-300">
              <Package className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
              ShopEasy
            </span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className="text-gray-300 hover:text-indigo-400 transition-all duration-300 font-medium hover:scale-105"
            >
              Accueil
            </Link>
            <Link
              href="/cart"
              className="text-gray-300 hover:text-indigo-400 transition-all duration-300 font-medium hover:scale-105 flex items-center gap-1 relative"
            >
              <ShoppingCart size={20} />
              <span>Panier</span>
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-lg animate-pulse">
                  {getTotalItems()}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}