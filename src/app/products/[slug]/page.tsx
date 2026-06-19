import Image from "next/image";
import { products } from "../../../data/products";
import Link from "next/link";
import { notFound } from "next/navigation";
import AddToCartButton from "../../../components/AddToCartButton";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        
        {/* LEFT - Image */}
        <div className="relative h-80 md:h-[500px] rounded-2xl overflow-hidden bg-gray-800">
          <Image
            src={product.image}
            alt={product.alt || product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* RIGHT - Details */}
        <div className="flex flex-col justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors mb-4 font-medium"
          >
            ← Retour aux produits
          </Link>

          <div className="mb-3">
            <span className="text-sm font-semibold text-pink-400 bg-pink-500/20 px-4 py-1.5 rounded-full border border-pink-400/20 inline-block">
              {product.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            {product.name}
          </h1>

          <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent mb-4">
            {product.price} DH
          </p>

          <div className="border-t border-b border-gray-700 py-4 my-4">
            <p className="text-gray-400 leading-relaxed text-base">
              {product.description}
            </p>
          </div>

          <div className="flex items-center gap-2 mb-6">
            <span className="text-gray-400 font-medium">Catégorie :</span>
            <span className="text-gray-300 bg-gray-700/50 px-3 py-1 rounded-full text-sm">
              {product.category}
            </span>
          </div>

          <AddToCartButton product={product} />
        </div>
      </div>
    </section>
  );
}