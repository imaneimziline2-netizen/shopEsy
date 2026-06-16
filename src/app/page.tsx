'use client';

import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Sparkles, ShoppingBag, Truck, Shield } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section avec animation */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20" />
        <div className="container mx-auto px-4 py-20 text-center relative">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 mb-6">
            <Sparkles size={16} className="text-yellow-400" />
            <span className="text-white text-sm">Découvrez nos nouveautés</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Bienvenue chez{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
              ShopEasy
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Découvrez une expérience d achat unique avec nos produits high-tech premium
          </p>
       
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white/80 backdrop-blur-md py-12 mt-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="text-indigo-600" size={32} />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Livraison Rapide</h3>
              <p className="text-gray-600">Livraison gratuite à partir de 500 DH</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-pink-600" size={32} />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Paiement Sécurisé</h3>
              <p className="text-gray-600">100% sécurisé avec SSL</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="text-indigo-600" size={32} />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Meilleurs Prix</h3>
              <p className="text-gray-600">Qualité au meilleur prix</p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Nos Produits <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">Phare</span>
          </h2>
          <p className="text-white/80 text-lg">Découvrez notre sélection de produits de qualité</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}