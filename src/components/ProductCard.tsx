import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../types/Product';
import { Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-48 w-full overflow-hidden bg-white/5">
        <Image
          src={product.image}
          alt={product.alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-4">
        <div className="mb-1">
          <span className="text-[10px] font-semibold text-pink-400 bg-pink-500/20 px-2 py-0.5 rounded-full uppercase tracking-wider border border-pink-400/20">
            {product.category}
          </span>
        </div>
        <h3 className="text-white font-semibold text-base mb-1 truncate group-hover:text-pink-300 transition-colors">
          {product.name}
        </h3>
        <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400 mb-3">
          {product.price} DH
        </p>
        <Link
          href={`/products/${product.slug}`}
          className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white text-sm font-semibold py-2.5 px-4 rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-lg"
        >
          <Eye size={16} />
          Voir détails
        </Link>
      </div>
    </div>
  );
}