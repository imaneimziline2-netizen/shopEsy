import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900/95 backdrop-blur-md border-t border-gray-700/50 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-gray-300 mb-2 font-medium">
            ShopEasy - Votre boutique en ligne moderne
          </p>
          <p className="text-gray-400 text-sm flex items-center justify-center gap-1">
            © {currentYear} Tous droits réservés | Fait avec 
            <Heart size={14} className="text-pink-400 inline" /> 
            au Maroc
          </p>
        </div>
      </div>
    </footer>
  );
}