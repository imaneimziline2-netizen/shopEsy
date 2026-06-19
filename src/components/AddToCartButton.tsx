'use client';

import { useCart } from '../context/cartContext';
import { ShoppingCart } from 'lucide-react';

interface AddToCartButtonProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      className="w-full bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 flex items-center justify-center gap-2"
    >
      <ShoppingCart size={20} />
      Ajouter au panier
    </button>
  );
}