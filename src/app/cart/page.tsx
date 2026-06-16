import Link from "next/link";

export default function CartPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">
        Mon Panier
      </h1>

      <div className="bg-white p-6 rounded-xl shadow">
        <p className="text-gray-600 mb-4">
          Votre panier est vide.
        </p>

        <Link
          href="/"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Continuer les achats
        </Link>
      </div>
    </div>
  );
}