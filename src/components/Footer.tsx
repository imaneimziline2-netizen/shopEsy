import { Heart } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white/80 backdrop-blur-md border-t border-white/20">
            <div className="container mx-auto px-4 py-8">
                <div className="text-center">
                    <p className="text-gray-600 mb-2">
                        ShopEasy - Votre boutique en ligne moderne
                    </p>
                    <p className="text-gray-500 text-sm flex items-center justify-center gap-1">
                        © {currentYear} Tous droits réservés | Fait avec
                        <Heart size={14} className="text-pink-500 inline" />
                        au Maroc
                    </p>
                </div>
            </div>
        </footer>
    );
}