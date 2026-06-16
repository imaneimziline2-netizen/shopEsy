import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../types/Product';
import { Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={product.image}
          alt={product.alt}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <div className="mb-2">
          <span className="text-xs font-semibold text-pink-600 bg-pink-100 px-2 py-1 rounded-full">
            {product.category}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent mb-4">
          {product.price} DH
        </p>
        <Link
          href={`/products/${product.slug}`}
          className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-indigo-600 to-pink-600 text-white py-3 px-4 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 font-medium"
        >
          <Eye size={18} />
          Voir détails
        </Link>
      </div>
    </div>
  );
}