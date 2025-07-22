import React from 'react';
import { Fish, ArrowLeft } from 'lucide-react';

interface ShopLayoutProps {
  children: React.ReactNode;
}

const ShopLayout = ({ children }: ShopLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Simplified Navigation for Shop */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgb(16,43,42)]/95 backdrop-blur-md">
        <div className="border-b border-primary/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-3">
              {/* Back to main site link (optional) */}
              <div className="flex items-center">
                <a
                  href="/"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-200 text-sm"
                  title="Zurück zur Hauptseite"
                >
                  <ArrowLeft size={16} />
                  <span className="hidden sm:inline">Hauptseite</span>
                </a>
              </div>

              {/* Centered Logo */}
              <div className="flex items-center space-x-2 group">
                <Fish className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                <div className="flex flex-col text-center">
                  <span className="font-serif text-2xl font-bold text-white leading-tight group-hover:text-primary transition-colors duration-300">
                    Alpirsbacher
                  </span>
                  <span className="font-serif text-sm text-primary leading-tight opacity-90">
                    Fischzucht Shop
                  </span>
                </div>
              </div>

              {/* Right side - could add cart summary or user menu */}
              <div className="w-20 flex justify-end">
                {/* Placeholder for future features like cart icon */}
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="pt-[6rem]">
        {children}
      </main>
      
      {/* Simplified Footer for Shop */}
      <footer className="bg-[rgb(12,37,36)] text-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-[rgb(181,140,103)]/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-1/4 w-28 h-28 bg-[rgb(132,161,160)]/5 rounded-full blur-2xl"></div>
        </div>

        <div className="relative">
          <div className="container mx-auto px-4 py-8">
            {/* Shop Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Contact Info */}
              <div>
                <h4 className="font-serif text-lg font-bold text-white mb-4">Kontakt</h4>
                <div className="space-y-2 text-[rgb(132,161,160)] text-sm">
                  <p>Alpirsbacher Fischzucht</p>
                  <p>Schwarzwald, Deutschland</p>
                  <p>Email: info@alpirsbacher-fischzucht.de</p>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-serif text-lg font-bold text-white mb-4">Service</h4>
                <div className="space-y-2 text-[rgb(132,161,160)] text-sm">
                  <a href="/versand" className="block hover:text-white transition-colors">Versand & Lieferung</a>
                  <a href="/agb" className="block hover:text-white transition-colors">AGB</a>
                  <a href="/widerrufsrecht" className="block hover:text-white transition-colors">Widerrufsrecht</a>
                  <a href="/impressum" className="block hover:text-white transition-colors">Impressum</a>
                </div>
              </div>

              {/* Quality Features */}
              <div>
                <h4 className="font-serif text-lg font-bold text-white mb-4">Qualität</h4>
                <div className="space-y-2 text-[rgb(132,161,160)] text-sm">
                  <p>✓ Frisch aus dem Schwarzwald</p>
                  <p>✓ Nachhaltige Zucht</p>
                  <p>✓ Direkt vom Erzeuger</p>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-[rgb(26,61,59)] pt-6">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="text-[rgb(132,161,160)] text-sm flex items-center space-x-2">
                  <span>© {new Date().getFullYear()} Alpirsbacher Fischzucht.</span>
                  <span className="hidden md:inline">•</span>
                  <span>Alle Rechte vorbehalten.</span>
                </div>
                <div className="text-[rgb(132,161,160)] text-sm">
                  <span className="text-[rgb(181,140,103)] font-semibold">
                    Premium Schwarzwald Forellen
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ShopLayout; 