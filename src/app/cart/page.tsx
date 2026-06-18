// app/cart/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../../context/cartContext";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, getTotalItems, getTotalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-12 text-center">
          <div className="flex justify-center mb-6">
            <ShoppingBag size={80} className="text-gray-300" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Votre panier est vide</h1>
          <p className="text-gray-600 mb-8">Découvrez nos produits et ajoutez-les à votre panier !</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-8 py-3 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 font-medium"
          >
            Continuer les achats
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-8">🛒 Mon Panier</h1>

      <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-8">
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center gap-6 p-4 border-b border-gray-100 last:border-0"
            >
              {/* Image du produit */}
              <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 96px, 96px"
                />
              </div>

              {/* Informations */}
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                <p className="text-xl font-bold text-indigo-600">{item.price} DH</p>
              </div>

              {/* Contrôles de quantité */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center"
                  aria-label="Diminuer la quantité"
                >
                  <Minus size={18} className="text-gray-600" />
                </button>
                <span className="text-xl font-bold text-gray-800 min-w-[40px] text-center">
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center"
                  aria-label="Augmenter la quantité"
                >
                  <Plus size={18} className="text-gray-600" />
                </button>
              </div>

              {/* Prix total de l'article */}
              <div className="min-w-[100px] text-center">
                <p className="text-sm text-gray-500">Sous-total</p>
                <p className="text-lg font-bold text-pink-600">
                  {item.price * item.quantity} DH
                </p>
              </div>

              {/* Bouton suppression */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700 transition-colors p-2 hover:bg-red-50 rounded-full"
                aria-label="Supprimer du panier"
              >
                <Trash2 size={22} />
              </button>
            </div>
          ))}
        </div>

        {/* Total général */}
        <div className="mt-8 pt-6 border-t-2 border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-center sm:text-left">
              <p className="text-gray-600">
                Nombre d articles : <span className="font-bold">{getTotalItems()}</span>
              </p>
            </div>
            <div className="text-center sm:text-right">
              <p className="text-sm text-gray-500">Total à payer</p>
              <p className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
                {getTotalPrice()} DH
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-end">
            <Link
              href="/"
              className="text-center px-6 py-3 rounded-xl border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition-all duration-300 font-medium"
            >
              Continuer les achats
            </Link>
            <button
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-pink-600 text-white hover:shadow-lg transition-all duration-300 hover:scale-105 font-medium"
            >
              Passer la commande
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}