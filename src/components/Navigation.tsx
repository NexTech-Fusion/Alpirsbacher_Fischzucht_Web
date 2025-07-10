
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Fish } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Fischzucht', path: '/fischzucht' },
    { name: 'Über uns', path: '/ueber-uns' },
    { name: 'Partner', path: '/partner' },
    { name: 'Kontakt', path: '/kontakt' },
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
          ? 'bg-deep-black/90 backdrop-blur-md shadow-2xl border-b border-charcoal-gray' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <Fish className="h-8 w-8 text-rich-gold" />
            <span className="font-serif text-2xl font-bold text-ivory-white">
              Alpirsbach
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative font-medium transition-all duration-300 hover:scale-105 ${
                  location.pathname === item.path
                    ? 'text-rich-gold'
                    : 'text-ivory-white hover:text-rich-gold'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-rich-gold shadow-lg shadow-rich-gold/50"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-ivory-white hover:text-rich-gold transition-colors duration-300"
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
            className="lg:hidden bg-charcoal-gray/95 backdrop-blur-md rounded-lg mt-2 p-4 border border-rich-gold/20"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block py-3 font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-rich-gold border-l-4 border-rich-gold pl-4'
                    : 'text-ivory-white hover:text-rich-gold hover:pl-2'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
