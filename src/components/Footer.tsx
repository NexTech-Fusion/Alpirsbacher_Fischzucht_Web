import React from 'react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-[rgb(12,37,36)] text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[rgb(181,140,103)]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[rgb(132,161,160)]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative">
        {/* Logo Section with Decorative Dividers - Similar to Header */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center justify-center mb-12">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[rgb(181,140,103)] to-[rgb(181,140,103)] max-w-xs"></div>
            <div className="flex items-center space-x-3 mx-8">
              <div className="w-12 h-12 bg-[rgb(181,140,103)] rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-[rgb(12,37,36)] rounded-full"></div>
                </div>
              </div>
              <div className="text-center">
                <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-wide">
                  Fischzucht
                </h2>
                <p className="text-[rgb(181,140,103)] text-lg font-medium tracking-wider">
                  DUMMERSTORF
                </p>
              </div>
            </div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[rgb(181,140,103)] to-[rgb(181,140,103)] max-w-xs"></div>
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Company Description */}
            <div className="md:col-span-2 space-y-4">
              <p className="text-[rgb(132,161,160)] leading-relaxed text-lg">
                Ihr vertrauensvoller Partner für hochwertige Fischzucht und nachhaltige Aquakultur. 
                Mit jahrzehntelanger Erfahrung und modernster Technik.
              </p>
            </div>

            {/* Legal Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-[rgb(181,140,103)] mb-4">Rechtliches</h4>
              <div className="space-y-3">
                <a href="/impressum" className="block text-[rgb(132,161,160)] hover:text-[rgb(181,140,103)] transition-all duration-300 hover:translate-x-1">
                  Impressum
                </a>
                <a href="/datenschutz" className="block text-[rgb(132,161,160)] hover:text-[rgb(181,140,103)] transition-all duration-300 hover:translate-x-1">
                  Datenschutzerklärung
                </a>
                <a href="/agb" className="block text-[rgb(132,161,160)] hover:text-[rgb(181,140,103)] transition-all duration-300 hover:translate-x-1">
                  AGB
                </a>
                <a href="/widerruf" className="block text-[rgb(132,161,160)] hover:text-[rgb(181,140,103)] transition-all duration-300 hover:translate-x-1">
                  Widerrufsrecht
                </a>
              </div>
            </div>

            {/* Service Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-[rgb(181,140,103)] mb-4">Service</h4>
              <div className="space-y-3">
                <a href="/versand" className="block text-[rgb(132,161,160)] hover:text-[rgb(181,140,103)] transition-all duration-300 hover:translate-x-1">
                  Versand
                </a>
                <button className="text-[rgb(132,161,160)] hover:text-[rgb(181,140,103)] transition-all duration-300 hover:translate-x-1 text-left">
                  Cookie-Einstellungen
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Wave Separator */}
        <div className="relative">
          <svg 
            className="w-full h-4 text-[rgb(181,140,103)]/20" 
            preserveAspectRatio="none" 
            viewBox="0 0 1200 120" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" 
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Bottom Footer */}
        <div className="bg-[rgb(26,61,59)]/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-[rgb(132,161,160)] text-sm flex items-center space-x-2">
                <span>© {new Date().getFullYear()} Fischzucht Dummerstorf.</span>
                <span className="hidden md:inline">•</span>
                <span>Alle Rechte vorbehalten.</span>
              </div>
              <div className="text-[rgb(132,161,160)] text-sm flex items-center space-x-2">
                <span>Built by</span>
                <span className="text-[rgb(181,140,103)] font-semibold hover:text-white transition-colors duration-200 cursor-pointer">
                  NexTech Fusion
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;