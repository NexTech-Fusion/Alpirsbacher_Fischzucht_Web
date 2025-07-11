
import React from 'react';
import { motion } from 'framer-motion';
import { Fish, Heart, Mountain, Leaf } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import familyTraditionImg from '@/assets/family-tradition.png';
import processingFacilityImg from '@/assets/processing-facility.png';

const UeberUns = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={familyTraditionImg} 
            alt="Familienbetrieb Alpirsbacher Fischzucht" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
        </div>
        
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mb-8"
            >
              <Fish className="h-16 w-16 text-primary mx-auto mb-4" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight"
            >
              Unsere Geschichte
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="text-xl md:text-2xl text-white/90 font-light"
            >
              mit Herzblut zur modernen Forellenzucht
            </motion.p>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-16 bg-gradient-to-b from-transparent via-white to-transparent rounded-full"
          />
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 mb-6"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-primary font-semibold text-lg">Die Übernahme</span>
                </motion.div>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-lg leading-relaxed text-muted-foreground"
                >
                  Am 20. September 2022 wurde die im Jahr 1973 erbaute Forellenzucht von 
                  <span className="font-semibold text-foreground"> Tobias Semke</span> und 
                  <span className="font-semibold text-foreground"> Thomas Betz</span> übernommen. 
                  In den darauffolgenden drei Jahren wurde die gesamte Anlage umfassend modernisiert 
                  und komplett erneuert – mit viel Leidenschaft, Know-how und dem festen Willen, 
                  eine nachhaltige, zukunftsfähige Fischzucht aufzubauen.
                </motion.p>
              </div>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 mb-6"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mountain className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-primary font-semibold text-lg">Die Lage</span>
                </motion.div>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="text-lg leading-relaxed text-muted-foreground"
                >
                  Die Anlage liegt idyllisch im kleinen, verträumten Dörfchen 
                  <span className="font-semibold text-foreground"> Reinerzau</span>, 
                  einem Ortsteil der Stadt Alpirsbach im Schwarzwald. Eingebettet in ein 
                  malerisches Tal, umgeben von Bergen, Wiesen und dichten Wäldern, spürt 
                  man hier unmittelbar die tiefe Verbundenheit zur Natur.
                </motion.p>
              </div>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 mb-6"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Leaf className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-primary font-semibold text-lg">Das Familienunternehmen</span>
                </motion.div>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  viewport={{ once: true }}
                  className="text-lg leading-relaxed text-muted-foreground"
                >
                  Das inhabergeführte Familienunternehmen wurde von Tobias Semke und Thomas Betz 
                  von Anfang an selbst aufgebaut – und wird bis heute mit großem persönlichem 
                  Engagement geführt.
                </motion.p>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={processingFacilityImg} 
                  alt="Moderne Verarbeitungsanlage" 
                  className="w-full h-[600px] object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -left-6 bg-primary text-white px-6 py-4 rounded-xl shadow-lg"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold">1973</div>
                  <div className="text-sm opacity-90">Gegründet</div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
                className="absolute -top-6 -right-6 bg-white text-primary px-6 py-4 rounded-xl shadow-lg border-2 border-primary/20"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold">2022</div>
                  <div className="text-sm text-muted-foreground">Übernommen</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Unsere Werte
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Was uns antreibt und unsere Arbeit täglich prägt
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Leidenschaft",
                description: "Mit Herzblut und persönlichem Engagement für beste Qualität",
                color: "text-red-500"
              },
              {
                icon: Leaf,
                title: "Nachhaltigkeit", 
                description: "Umweltbewusste und zukunftsfähige Fischzucht",
                color: "text-green-500"
              },
              {
                icon: Mountain,
                title: "Tradition",
                description: "Verwurzelt im Schwarzwald, verbunden mit der Natur",
                color: "text-blue-500"
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border">
                  <div className={`w-16 h-16 ${value.color} bg-opacity-10 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className={`h-8 w-8 ${value.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-4 text-center">
                    {value.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UeberUns;
