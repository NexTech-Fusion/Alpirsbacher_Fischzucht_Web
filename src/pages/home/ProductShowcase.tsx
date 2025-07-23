import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingCart, ArrowRight, Fish } from 'lucide-react';
import { QualityFeatures } from '@/components/home/QualityFeatures';
import premiumFiletImg from '@/assets/premium_filet.jpg';

export const ProductShowcase: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-accent/5 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Frische Forellen direkt von der <span className="text-primary">Quelle</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Alles aus einer Hand: von der Aufzucht bis zur Verarbeitung
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Side - Quality Features */}
          <QualityFeatures />

          {/* Center - Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 relative"
          >
            <div className="relative h-[400px] lg:h-[500px]">
              <img 
                src={premiumFiletImg} 
                alt="Frische Forelle von der Alpirsbacher Fischzucht" 
                className="w-full h-full object-cover shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Right Side - Product Actions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-4 space-y-6"
          >
            {/* Processing Information */}
            <div className="bg-gradient-to-br from-card/80 to-muted/20 backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-lg">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Frische Verarbeitung</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Direkt nach Bestellung frisch geschlachtet und küchenfertig verpackt – 
                ohne Zwischenlagerung oder Tiefkühlung.
              </p>
            </div>

            {/* Product Variants */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 border border-primary/20 shadow-lg">
              <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Fish className="w-5 h-5 text-primary" />
                Verfügbare Varianten
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'Ganze Forelle', desc: 'Küchenfertig' },
                  { name: 'Filet', desc: 'Grätenfrei' },
                  { name: 'Geräuchert', desc: 'Am Stück' },
                  { name: 'Räucherfilet', desc: 'Zart & fein' }
                ].map((variant, index) => (
                  <div key={index} className="flex items-center gap-2 p-2 rounded-lg bg-white/50">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{variant.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/shop"
                  className="w-full inline-flex items-center justify-center px-6 py-4 bg-primary text-primary-foreground rounded-2xl font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/25 group"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Jetzt bestellen
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/fischzucht"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-secondary/10 text-secondary border border-secondary/20 rounded-2xl font-medium hover:bg-secondary/20 transition-all duration-300 group"
                >
                  <Fish className="w-4 h-4 mr-2" />
                  Fischzucht entdecken
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 