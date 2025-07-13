import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Fish } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
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
    { name: 'Kontakt', action: 'contact' },
    { name: 'Shop', path: '/shop' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Set scrolled state
      setIsScrolled(currentScrollY > 50);
      
      // Handle navigation visibility
      if (currentScrollY < 100) {
        // Always show at top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 200) {
        // Scrolling down - hide
        setIsVisible(false);
        setIsMobileMenuOpen(false); // Close mobile menu when hiding
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-2xl border-b border-border/20' 
          : 'bg-[rgb(16,43,42)]/95 backdrop-blur-md'
      }`}
    >
      {/* Logo Section with Decorative Dividers */}
      <div className="border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-3">
            {/* Left Decorative Divider */}
            <div className="flex-1 flex items-center justify-end pr-8">
              <div className="w-32 h-px bg-gradient-to-r from-transparent to-primary opacity-60"></div>
              <div className="w-2 h-2 bg-primary rounded-full ml-2 opacity-80"></div>
            </div>
            
            {/* Centered Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <Fish className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              <div className="flex flex-col text-center">
                <span className="font-serif text-2xl font-bold text-white leading-tight group-hover:text-primary transition-colors duration-300">
                  Alpirsbacher
                </span>
                <span className="font-serif text-sm text-primary leading-tight opacity-90">
                  Fischzucht
                </span>
              </div>
            </Link>
            
            {/* Right Decorative Divider */}
            <div className="flex-1 flex items-center justify-start pl-8">
              <div className="w-2 h-2 bg-primary rounded-full mr-2 opacity-80"></div>
              <div className="w-32 h-px bg-gradient-to-l from-transparent to-primary opacity-60"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center py-2">
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
                  className="relative font-medium text-white hover:text-primary transition-all duration-300 py-2 px-4 group"
                >
                  {item.name}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></div>
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative font-medium transition-all duration-300 py-2 px-4 group ${
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
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[rgb(26,61,59)]/95 backdrop-blur-md rounded-lg mt-2 mb-4 p-4 border border-primary/20"
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