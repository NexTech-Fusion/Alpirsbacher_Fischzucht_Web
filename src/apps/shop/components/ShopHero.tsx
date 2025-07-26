import React from 'react';
import { motion } from 'framer-motion';
import { Fish } from 'lucide-react';

export const ShopHero: React.FC = () => {
  return (
    <section className="relative h-[50vh] overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgb(26, 61, 59) 0%, rgb(16, 43, 42) 50%, rgb(12, 37, 36) 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #ffffff 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
      </div>

      <div className="relative h-full flex items-center px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            {/* Logo Section with Decorative Dividers */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center justify-center mb-8"
            >
              {/* Left Decorative Divider */}
              <div className="flex-1 flex items-center justify-end pr-8">
                <div className="w-32 h-px bg-gradient-to-r from-transparent to-primary opacity-60"></div>
                <div className="w-2 h-2 bg-primary rounded-full ml-2 opacity-80"></div>
              </div>

              {/* Centered Logo */}
              <div className="flex items-center space-x-2">
                <Fish className="h-12 w-12 text-primary" />
                <div className="flex flex-col text-center">
                  <span className="font-serif text-3xl font-bold text-white leading-tight">
                    Alpirsbacher
                  </span>
                  <span className="font-serif text-lg text-primary leading-tight opacity-90">
                    Fischzucht
                  </span>
                </div>
              </div>

              {/* Right Decorative Divider */}
              <div className="flex-1 flex items-center justify-start pl-8">
                <div className="w-2 h-2 bg-primary rounded-full mr-2 opacity-80"></div>
                <div className="w-32 h-px bg-gradient-to-l from-transparent to-primary opacity-60"></div>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6"
            >
              Unser <span style={{ color: 'rgb(181, 140, 103)' }}>Shop</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-xl text-white/90 max-w-2xl mx-auto"
            >
              Frische Forellen aus dem Schwarzwald – direkt vom Erzeuger
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 