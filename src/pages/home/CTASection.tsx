import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-card border-t border-border relative overflow-hidden">
      {/* Dotted Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%,rgb(255, 255, 255) 1px, 2px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Bereit für den Geschmack des <span className="text-primary">Schwarzwalds</span>?
          </h2>
          <p className="text-xl mb-8 text-muted-foreground">
            Bestellen Sie noch heute unsere frischen Premium-Forellen
            und erleben Sie Qualität, die Sie schmecken können.
          </p>
          <a
            href="/shop"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 inline-flex items-center gap-2"
          >
            Zum Shop
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}; 