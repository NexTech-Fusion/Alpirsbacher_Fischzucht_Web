
import React from 'react';
import { motion } from 'framer-motion';
import { Fish, Heart, Mountain, Leaf, Calendar, MapPin, Users, Award } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import heroSchwarzwaldImg from '@/assets/hero-schwarzwald.png';
import familyTraditionImg from '@/assets/family-tradition.png';
import farmStoryImg from '@/assets/farm-story.png';
import sustainabilityImg from '@/assets/sustainability.png';
import mapLocationImg from '@/assets/map-location.png';
import harvestTimeImg from '@/assets/harvest-time.png';

const UeberUns = () => {
  const galleryImages = [
    {
      src: farmStoryImg,
      title: "Der Beginn",
      year: "2022",
      description: "Übernahme und erste Modernisierungsarbeiten"
    },
    {
      src: sustainabilityImg,
      title: "Nachhaltigkeit",
      year: "2023",
      description: "Umweltfreundliche Technologien implementiert"
    },
    {
      src: mapLocationImg,
      title: "Unser Standort",
      year: "2024",
      description: "Perfekte Lage im Herzen des Schwarzwalds"
    },
    {
      src: harvestTimeImg,
      title: "Erste Ernte",
      year: "2025",
      description: "Qualitätsforellen aus modernster Zucht"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Compact Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroSchwarzwaldImg} 
            alt="Schwarzwald Landschaft" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative h-full flex items-center px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="max-w-2xl"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mb-6"
              >
                <Fish className="h-12 w-12 text-primary mb-4" />
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 leading-tight"
              >
                Unsere Geschichte
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-xl md:text-2xl text-white/90 font-light"
              >
                mit Herzblut zur modernen Forellenzucht
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section with Founders */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Story Text */}
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
                    <Calendar className="h-6 w-6 text-primary" />
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
                    <MapPin className="h-6 w-6 text-primary" />
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
                    <Users className="h-6 w-6 text-primary" />
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

            {/* Founders Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src={familyTraditionImg} 
                  alt="Gründer Tobias Semke und Thomas Betz" 
                  className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                
              </div>
              
              {/* Timeline Badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
                className="absolute -top-6 -right-6 bg-primary text-white px-6 py-4 rounded-xl shadow-lg"
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
                className="absolute -bottom-6 -left-6 bg-white text-primary px-6 py-4 rounded-xl shadow-lg border-2 border-primary/20"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold">2022</div>
                  <div className="text-sm text-muted-foreground">Neustart mit den Gründern Tobias Semke & Thomas Betz</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Gallery Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Unsere Reise
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Von der Übernahme 2022 bis zur modernen Forellenzucht heute – 
              ein Blick auf unseren Wandel
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                </div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {image.year}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">{image.title}</h3>
                  <p className="text-white/90 text-sm">{image.description}</p>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
              </motion.div>
            ))}
          </div>

          {/* Timeline Connector */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary/30 via-primary to-primary/30 rounded-full mx-auto max-w-md mb-12"
          ></motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #ffffff 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Unsere Werte
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto"></div>
          </motion.div>

          {/* Values Grid - Inspired by the reference image */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              {
                icon: Heart,
                title: "Leidenschaft",
                description: "Mit Herzblut und persönlichem Engagement schaffen wir täglich beste Qualität für unsere Forellen."
              },
              {
                icon: Leaf,
                title: "Nachhaltigkeit", 
                description: "Umweltbewusste und zukunftsfähige Fischzucht im Einklang mit der Natur des Schwarzwalds."
              },
              {
                icon: Mountain,
                title: "Tradition",
                description: "Verwurzelt im Schwarzwald, verbunden mit der Natur und überliefertem Wissen seit Generationen."
              },
              {
                icon: Award,
                title: "Qualität",
                description: "Höchste Standards für unsere Forellen und Produkte – Exzellenz in jedem Arbeitsschritt."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group text-center"
              >
                {/* Icon Container */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                  viewport={{ once: true }}
                  className="mb-8 flex justify-center"
                >
                  <div className="relative">
                    {/* Icon Background Circle */}
                    <div className="w-24 h-24 border-2 border-yellow-400/30 rounded-full flex items-center justify-center group-hover:border-yellow-400/60 transition-colors duration-500">
                      <value.icon 
                        className="w-10 h-10 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" 
                        strokeWidth={1.5}
                      />
                    </div>
                    {/* Decorative Corner Lines */}
                    <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-yellow-400/40"></div>
                    <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-yellow-400/40"></div>
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-yellow-400/40"></div>
                    <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-yellow-400/40"></div>
                  </div>
                </motion.div>

                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
                  viewport={{ once: true }}
                  className="text-2xl md:text-3xl font-serif font-bold text-white mb-6"
                >
                  {value.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.15 }}
                  viewport={{ once: true }}
                  className="text-white/70 leading-relaxed text-lg max-w-xs mx-auto group-hover:text-white/90 transition-colors duration-300"
                >
                  {value.description}
                </motion.p>

                {/* Bottom Accent Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 + index * 0.15 }}
                  viewport={{ once: true }}
                  className="mt-8 w-16 h-0.5 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent mx-auto"
                ></motion.div>
              </motion.div>
            ))}
          </div>

          {/* Decorative Bottom Border */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1.2, delay: 1.0 }}
            viewport={{ once: true }}
            className="mt-20 mx-auto max-w-4xl"
          >
            <div className="h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"></div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UeberUns;
