import Footer from "../components/Footer";
import Header from "../components/Header";
import "./globals.css"

import { CartProvider } from "../context/cartContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <CartProvider>
          <Header />

          <main>{children}</main>

          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}