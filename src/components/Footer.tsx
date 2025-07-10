import React from 'react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-[rgb(16,43,42)] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[rgb(181,140,103)]">Fischzucht Dummerstorf</h3>
            <p className="text-[rgb(132,161,160)] leading-relaxed">
              Ihr vertrauensvoller Partner für hochwertige Fischzucht und nachhaltige Aquakultur.
            </p>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[rgb(181,140,103)]">Rechtliches</h4>
            <div className="space-y-2">
              <a href="/impressum" className="block text-[rgb(132,161,160)] hover:text-white transition-colors duration-200">
                Impressum
              </a>
              <a href="/datenschutz" className="block text-[rgb(132,161,160)] hover:text-white transition-colors duration-200">
                Datenschutzerklärung
              </a>
              <a href="/agb" className="block text-[rgb(132,161,160)] hover:text-white transition-colors duration-200">
                AGB
              </a>
              <a href="/widerruf" className="block text-[rgb(132,161,160)] hover:text-white transition-colors duration-200">
                Widerrufsrecht
              </a>
            </div>
          </div>

          {/* Service Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[rgb(181,140,103)]">Service</h4>
            <div className="space-y-2">
              <a href="/versand" className="block text-[rgb(132,161,160)] hover:text-white transition-colors duration-200">
                Versand
              </a>
              <button className="text-[rgb(132,161,160)] hover:text-white transition-colors duration-200 text-left">
                Cookie-Einstellungen
              </button>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-[rgb(26,61,59)]" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-[rgb(132,161,160)] text-sm">
            © {new Date().getFullYear()} Fischzucht Dummerstorf. Alle Rechte vorbehalten.
          </div>
          <div className="text-[rgb(132,161,160)] text-sm">
            Built by{' '}
            <span className="text-[rgb(181,140,103)] font-medium">NexTech Fusion</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;