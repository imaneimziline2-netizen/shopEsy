// app/products/[slug]/page.tsx
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
    <section className="max-w-5xl mx-auto px-4 py-8">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors mb-6 font-medium"
        >
          ← Retour aux produits
        </Link>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Image du produit */}
          <div className="relative h-80 md:h-[500px] rounded-xl overflow-hidden">
            <Image
              src={product.image}
              alt={product.alt || product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Détails du produit */}
          <div className="flex flex-col justify-center">
            <div className="mb-2">
              <span className="text-sm font-semibold text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full">
                {product.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {product.name}
            </h1>

            <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent mb-4">
              {product.price} DH
            </p>

            <p className="text-gray-600 leading-7 mb-6">
              {product.description}
            </p>

            {/* ✅ Utilisation du composant client pour le panier */}
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </section>
  );
}