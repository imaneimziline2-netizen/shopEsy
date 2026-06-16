import Link from 'next/link';
import { ShoppingCart, Package } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-white/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-gradient-to-r from-indigo-600 to-pink-600 p-2 rounded-xl group-hover:scale-110 transition-transform duration-300">
              <Package className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
              ShopEasy
            </span>
          </Link>
          <nav className="flex gap-6">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-indigo-600 transition-all duration-300 font-medium hover:scale-105"
            >
              Accueil
            </Link>
            <Link 
              href="/cart" 
              className="text-gray-700 hover:text-indigo-600 transition-all duration-300 font-medium hover:scale-105 flex items-center gap-1"
            >
              <ShoppingCart size={20} />
              <span>Panier</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}