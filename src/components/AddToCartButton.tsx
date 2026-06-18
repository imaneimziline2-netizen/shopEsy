// components/AddToCartButton.tsx
"use client";

import { useCart } from "../context/cartContext";
import { Product } from "../types/Product";
import { ShoppingCart } from "lucide-react";

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <button
      onClick={handleAddToCart}
      className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white py-4 px-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 font-medium text-lg flex items-center justify-center gap-2"
    >
      <ShoppingCart size={20} />
      Ajouter au panier
    </button>
  );
}