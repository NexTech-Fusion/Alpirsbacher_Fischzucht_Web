import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Fish } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Fischzucht', path: '/fischzucht' },
    { name: 'Über uns', path: '/ueber-uns' },
    { name: 'Partner', path: '/partner' },
    { name: 'Kontakt', action: 'contact' },
    { name: 'Shop', path: '/shop' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-2xl border-b border-border/20' 
          : 'bg-slate-900/95 backdrop-blur-md'
      }`}
    >
      {/* Top Bar */}
      <div className="border-b border-primary/20 bg-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="hidden md:flex items-center text-slate-300">
              <span className="font-medium">Öffnungszeiten:</span>
              <span className="ml-2 text-slate-400">Mo - Fr: 9:00 - 18:00</span>
            </div>
            
            {/* Center Logo for smaller screens */}
            <div className="md:hidden flex-1 text-center">
              <Link to="/" className="inline-flex items-center space-x-2">
                <Fish className="h-6 w-6 text-primary" />
                <span className="font-serif text-lg font-bold text-white">
                  Alpirsbacher Fischzucht
                </span>
              </Link>
            </div>
            
            <div className="hidden md:block text-slate-300">
              <span className="text-slate-400">Frische Forellen aus dem Schwarzwald</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Desktop Logo */}
          <div className="hidden md:block">
            <Link to="/" className="flex items-center space-x-3">
              <Fish className="h-10 w-10 text-primary" />
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-white leading-tight">
                  Alpirsbacher
                </span>
                <span className="font-serif text-lg text-primary leading-tight">
                  Fischzucht
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            {navItems.map((item) => (
              item.action === 'contact' ? (
                <button
                  key={item.name}
                  onClick={() => {
                    if (location.pathname !== '/') {
                      window.location.href = '/#contact';
                    } else {
                      scrollToContact();
                    }
                  }}
                  className="relative font-medium text-white hover:text-primary transition-all duration-300 py-2 px-1 group"
                >
                  {item.name}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></div>
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative font-medium transition-all duration-300 py-2 px-1 group ${
                    location.pathname === item.path
                      ? 'text-primary'
                      : 'text-white hover:text-primary'
                  }`}
                >
                  {item.name}
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></div>
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white hover:text-primary transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-800/95 backdrop-blur-md rounded-lg mt-2 p-4 border border-primary/20"
          >
            {navItems.map((item) => (
              item.action === 'contact' ? (
                <button
                  key={item.name}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    if (location.pathname !== '/') {
                      window.location.href = '/#contact';
                    } else {
                      scrollToContact();
                    }
                  }}
                  className="block py-3 font-medium transition-all duration-300 text-white hover:text-primary hover:pl-2 text-left w-full"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block py-3 font-medium transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'text-primary border-l-4 border-primary pl-4'
                      : 'text-white hover:text-primary hover:pl-2'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;