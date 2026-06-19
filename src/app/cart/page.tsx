"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../../context/cartContext";
import { Trash2, Plus, Minus, ShoppingBag, ChevronDown } from "lucide-react";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, getTotalItems, getTotalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-[#1e293b] rounded-2xl shadow-2xl p-12 text-center border border-gray-700/50">
          <div className="flex justify-center mb-6">
            <ShoppingBag size={80} className="text-gray-500" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">Votre panier est vide</h1>
          <p className="text-gray-400 mb-8">Découvrez nos produits et ajoutez-les à votre panier !</p>
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
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">Mon Panier</h1>

      <div className="grid md:grid-cols-3 gap-8">
        
        {/* LEFT - Products (2/3) */}
        <div className="md:col-span-2 space-y-4">
          <div className="bg-[#1e293b] rounded-2xl shadow-2xl p-6 border border-gray-700/50">
            
            {/* Header */}
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-700">
              <h2 className="text-white font-semibold text-lg">Produits ({getTotalItems()})</h2>
              <button className="text-gray-400 hover:text-white transition-colors text-sm">
                Tout supprimer
              </button>
            </div>

            {/* Products List */}
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 pb-6 border-b border-gray-700 last:border-0 last:pb-0"
                >
                  {/* Image */}
                  <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-gray-800">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 96px, 96px"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-white font-semibold text-base">{item.name}</h3>
                        <p className="text-gray-400 text-sm">SKU#{item.id}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-500 hover:text-red-400 transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>

                    <div className="flex items-center gap-4 mt-2">
                      {/* Quantity */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors flex items-center justify-center"
                        >
                          <Minus size={14} className="text-gray-300" />
                        </button>
                        <span className="text-white font-semibold min-w-[24px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors flex items-center justify-center"
                        >
                          <Plus size={14} className="text-gray-300" />
                        </button>
                      </div>

                      <span className="text-white font-bold">
                        {item.price * item.quantity} DH
                      </span>
                    </div>

                    <div className="flex items-center gap-4 mt-2">
                      <button className="text-indigo-400 hover:text-indigo-300 text-sm transition-colors">
                        ❤️ Garder pour plus tard
                      </button>
                      <span className="text-gray-500 text-sm">|</span>
                      <span className="text-gray-400 text-sm">Livraison gratuite</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT - Order Summary (1/3) */}
        <div className="md:col-span-1">
          <div className="bg-[#1e293b] rounded-2xl shadow-2xl p-6 border border-gray-700/50 sticky top-24">
            <h2 className="text-white font-bold text-lg mb-6">Récapitulatif</h2>

            {/* Promo Code */}
            <div className="mb-6">
              <label className="text-gray-400 text-sm block mb-2">Code promo / Réduction</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Entrez le code"
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 text-sm"
                />
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl transition-colors text-sm font-medium">
                  Appliquer
                </button>
              </div>
            </div>

            {/* Totals */}
            <div className="space-y-3 pb-4 border-b border-gray-700">
              <div className="flex justify-between text-gray-400 text-sm">
                <span>Sous-total ({getTotalItems()} articles)</span>
                <span className="text-white font-semibold">{getTotalPrice()} DH</span>
              </div>
              <div className="flex justify-between text-gray-400 text-sm">
                <span>Livraison</span>
                <span className="text-green-400">Gratuite</span>
              </div>
              <div className="flex justify-between text-gray-400 text-sm">
                <span>Taxe estimée</span>
                <span className="text-gray-500">Calculée plus tard</span>
              </div>
            </div>

            {/* Total */}
            <div className="pt-4 pb-6">
              <div className="flex justify-between items-center">
                <span className="text-white font-bold text-lg">Total estimé</span>
                <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
                  {getTotalPrice()} DH
                </span>
              </div>
              <p className="text-gray-500 text-sm mt-1">
                ou à partir de {Math.round(getTotalPrice() / 24)} DH/mois pendant 24 mois
              </p>
            </div>

            {/* Checkout Buttons */}
            <div className="space-y-3">
              <button className="w-full bg-gradient-to-r from-indigo-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                Passer la commande
              </button>
              <button className="w-full bg-[#0070ba] text-white py-3 rounded-xl font-semibold hover:bg-[#003087] transition-colors flex items-center justify-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
                  <path d="M20.067 8.478c.492.88.556 1.852.152 2.795-.332.777-.984 1.442-1.811 1.853-.744.37-1.696.484-2.637.354-1.058-.146-2.094-.624-2.957-1.294-.82-.637-1.464-1.457-1.789-2.414-.279-.824-.278-1.724.014-2.56.31-.889.937-1.64 1.746-2.128.77-.464 1.698-.612 2.618-.486.927.127 1.829.565 2.568 1.207.714.621 1.246 1.394 1.516 2.26.047.15.088.302.118.455.033.167.02.335-.019.502-.086.355-.254.684-.49.966-.248.297-.57.516-.928.638-.318.109-.658.13-.985.06-.246-.053-.476-.179-.668-.361-.323-.307-.536-.713-.601-1.158-.01-.068-.011-.137-.005-.205.01-.102.034-.203.071-.3.089-.232.231-.437.411-.607.194-.183.434-.312.694-.371.238-.054.488-.039.717.043.092.033.178.079.256.135.066.048.123.106.168.172.064.093.11.198.137.31.045.183.035.373-.03.55-.058.15-.15.283-.268.392-.117.109-.255.191-.405.241-.075.025-.153.04-.232.044-.09.004-.179-.012-.262-.046-.084-.035-.158-.088-.22-.153-.064-.067-.113-.146-.144-.232-.031-.086-.044-.177-.036-.266.008-.089.034-.174.076-.25.042-.076.098-.141.165-.194.057-.045.123-.077.192-.097.042-.012.085-.018.128-.017.04.001.079.008.116.021.035.012.067.03.095.053.028.023.05.052.063.084.013.032.018.066.016.1-.002.023-.007.045-.015.066-.007.02-.017.038-.029.055-.012.017-.026.031-.042.043-.016.012-.034.021-.052.027-.018.006-.037.009-.056.009h-.019c-.036-.002-.071-.01-.103-.024-.032-.014-.06-.035-.083-.061-.023-.026-.04-.057-.051-.09-.011-.033-.016-.068-.015-.102v-.007c.002-.037.011-.073.026-.106.016-.033.038-.063.065-.087.027-.024.058-.043.092-.056.034-.013.071-.019.107-.018z"/>
                </svg>
                PayPal
              </button>
            </div>

            {/* Savings */}
            <div className="mt-6 pt-4 border-t border-gray-700">
              <div className="flex justify-between text-sm">
                <span className="text-green-400">💰 Économies totales</span>
                <span className="text-green-400 font-semibold">150 DH</span>
              </div>
              <div className="flex justify-between text-sm mt-1">
                <span className="text-gray-400">Réduction promotionnelle</span>
                <span className="text-gray-400">15 DH</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}