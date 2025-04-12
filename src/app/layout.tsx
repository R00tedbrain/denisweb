import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from './components/Header';
import WhatsAppButton from './components/WhatsAppButton';

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dennys Calizaya - Fisioterapia y Quiropráctica",
  description: "Servicios profesionales de fisioterapia y quiropráctica a domicilio o en consulta",
  icons: {
    icon: [
      { url: '/favidenis.png' },
      { url: '/favidenis.png', type: 'image/png' }
    ],
    shortcut: '/favidenis.png',
    apple: '/favidenis.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="bg-background">
      <body className={`${inter.className} bg-background`} style={{backgroundColor: '#fdf8ec'}}>
        {/* Header section with beige background */}
        <div className="bg-background" style={{backgroundColor: '#fdf8ec'}}>
          <Header />
        </div>
        
        {/* Main content section with beige background */}
        <main className="bg-background min-h-screen pt-20" style={{backgroundColor: '#fdf8ec'}}>
          {children}
        </main>
        
        {/* Footer section with turquoise background */}
        <footer className="bg-primary py-8">
          <div className="container mx-auto px-4">
            <div className="text-white text-center">
              © 2024 Dennys Calizaya. Todos los derechos reservados.
            </div>
          </div>
        </footer>
        
        <WhatsAppButton />
      </body>
    </html>
  );
}
