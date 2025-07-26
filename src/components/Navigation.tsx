import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import fishLogoSvg from '@/assets/fish_logo.svg';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    if (location.pathname === '/') {
      scrollToContact();
    } else {
      navigate('/', { replace: true });
      // Use setTimeout to ensure navigation completes before scrolling
      setTimeout(() => {
        scrollToContact();
      }, 100);
    }
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Fischzucht', path: '/fischzucht' },
    { name: 'Über uns', path: '/ueber-uns' },
    { name: 'Kontakt', action: 'contact' },
    { name: 'Shop', path: '/shop', external: true }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Only track if scrolled for background changes
      setIsScrolled(currentScrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-2xl border-b border-border/20' 
          : 'bg-[rgb(16,43,42)]/95 backdrop-blur-md'
      }`}
    >
      {/* Logo Section with Decorative Dividers */}
      <div className="border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between lg:justify-center py-3">
            {/* Mobile Hamburger Menu - Left Side */}
            <button
              className="lg:hidden p-2 text-white hover:text-primary transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Left Decorative Divider - Hidden on Mobile */}
            <div className="hidden lg:flex flex-1 items-center justify-end pr-8">
              <div className="w-32 h-px bg-gradient-to-r from-transparent to-primary opacity-60"></div>
              <div className="w-2 h-2 bg-primary rounded-full ml-2 opacity-80"></div>
            </div>
            
            {/* Centered Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <img 
                src={fishLogoSvg} 
                alt="Fish Logo" 
                className="h-12 w-12 group-hover:scale-110 transition-transform duration-300" 
              />
              <div className="flex flex-col text-center">
                <span className="font-serif text-2xl font-bold text-white leading-tight group-hover:text-primary transition-colors duration-300">
                  Alpirsbacher
                </span>
                <span className="font-serif text-sm text-primary leading-tight opacity-90">
                  Fischzucht
                </span>
              </div>
            </Link>
            
            {/* Right Decorative Divider - Hidden on Mobile */}
            <div className="hidden lg:flex flex-1 items-center justify-start pl-8">
              <div className="w-2 h-2 bg-primary rounded-full mr-2 opacity-80"></div>
              <div className="w-32 h-px bg-gradient-to-l from-transparent to-primary opacity-60"></div>
            </div>

            {/* Invisible spacer for mobile to center logo */}
            <div className="lg:hidden w-10"></div>
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
                  onClick={handleContactClick}
                  className="relative font-medium text-white hover:text-primary transition-all duration-300 py-2 px-4 group"
                >
                  {item.name}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></div>
                </button>
              ) : item.external ? (
                <a
                  key={item.name}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative font-medium text-white hover:text-primary transition-all duration-300 py-2 px-4 group"
                >
                  {item.name}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></div>
                </a>
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

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden absolute left-4 right-4 top-full bg-[rgb(26,61,59)] backdrop-blur-md rounded-lg mt-2 p-6 border border-primary/20 shadow-2xl z-50"
            >
              {navItems.map((item) => (
                item.action === 'contact' ? (
                  <button
                    key={item.name}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      handleContactClick();
                    }}
                    className="block w-full py-4 px-2 font-medium transition-all duration-300 text-white hover:text-primary hover:pl-4 text-left border-b border-white/10 last:border-b-0"
                  >
                    {item.name}
                  </button>
                ) : item.external ? (
                  <a
                    key={item.name}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full py-4 px-2 font-medium transition-all duration-300 text-white hover:text-primary hover:pl-4 border-b border-white/10 last:border-b-0"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block w-full py-4 px-2 font-medium transition-all duration-300 border-b border-white/10 last:border-b-0 ${
                      location.pathname === item.path
                        ? 'text-primary border-l-4 border-primary pl-6 bg-primary/10'
                        : 'text-white hover:text-primary hover:pl-4'
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
      </div>
    </nav>
  );
};

export default Navigation;