import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Truck } from 'lucide-react';
import directMarketingHeroImg from '@/assets/direct_marketing.jpg';

export const DirectMarketing: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
            <span className="text-primary">Direktvermarktung</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Größtmögliche Flexibilität durch zwei komfortable Bezugsmöglichkeiten – 
            ganz wie es für Sie am besten passt.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <ShoppingCart className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold text-xl">Vor Ort Abholung</span>
              </div>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                Der Fisch kann auf Vorbestellung direkt vor Ort abgeholt werden. 
                Bei der persönlichen Abholung in unserem Hofabholgebäude profitieren 
                Sie von ergänzenden Produkten wie hochwertigen Fischgewürzen, 
                ausgewählten Weinen oder weiteren Spezialitäten.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold text-xl">Bequeme Lieferung</span>
              </div>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                Über die benutzerfreundliche <span className="font-semibold text-foreground">
                myfishmeal.de-App</span> oder den Online-Shop lassen sich unsere Produkte 
                schnell bestellen. Lieferung zu Ihrem Wunschtermin oder per Expressversand 
                bereits am Folgetag bis spätestens 12 Uhr.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img 
                src={directMarketingHeroImg} 
                alt="Direktvermarktung" 
                className="w-full h-[400px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 