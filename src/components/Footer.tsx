import React from 'react';
import { Link } from 'react-router-dom';
import logoVertical from '@/assets/logo_vertical.png';

const Footer = () => {
  return (
    <footer className="bg-[rgb(14,33,34)] text-white relative overflow-hidden">
      <div className="relative">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
            {/* Logo Section - Left Side */}
            <div className="lg:col-span-2 flex items-center justify-center">
              <img 
                src={logoVertical} 
                alt="Alpirsbacher Fischzucht" 
                className="h-48 w-auto"
              />
            </div>

            {/* Legal Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-[rgb(181,140,103)] mb-4">Rechtliches</h4>
              <div className="space-y-3">
                <Link to="/impressum" className="block text-[rgb(132,161,160)] hover:text-[rgb(181,140,103)] transition-all duration-300 hover:translate-x-1">
                  Impressum
                </Link>
                <a href="/datenschutz" className="block text-[rgb(132,161,160)] hover:text-[rgb(181,140,103)] transition-all duration-300 hover:translate-x-1">
                  Datenschutzerklärung
                </a>
                <Link to="/agb" className="block text-[rgb(132,161,160)] hover:text-[rgb(181,140,103)] transition-all duration-300 hover:translate-x-1">
                  AGB
                </Link>
                <Link to="/widerrufsrecht" className="block text-[rgb(132,161,160)] hover:text-[rgb(181,140,103)] transition-all duration-300 hover:translate-x-1">
                  Widerrufsrecht
                </Link>
              </div>
            </div>

            {/* Service Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-[rgb(181,140,103)] mb-4">Service</h4>
              <div className="space-y-3">
                <Link to="/versand" className="block text-[rgb(132,161,160)] hover:text-[rgb(181,140,103)] transition-all duration-300 hover:translate-x-1">
                  Versand
                </Link>
                <button className="text-[rgb(132,161,160)] hover:text-[rgb(181,140,103)] transition-all duration-300 hover:translate-x-1 text-left">
                  Cookie-Einstellungen
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer - Same Background Color */}
        <div className="bg-[rgb(14,33,34)] border-t border-[rgb(26,61,59)]">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-[rgb(132,161,160)] text-sm flex items-center space-x-2">
                <span>© {new Date().getFullYear()} Alpirsbacher Fischzucht.</span>
                <span className="hidden md:inline">•</span>
                <span>Alle Rechte vorbehalten.</span>
              </div>
              <div className="text-[rgb(132,161,160)] text-sm flex items-center space-x-2">
                <span>Built by</span>
                <a 
                  href="https://www.nextech-fusion.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[rgb(181,140,103)] font-semibold hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  NexTech Fusion
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;