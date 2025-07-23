
import React from 'react';
import { motion } from 'framer-motion';
import { Fish, Droplets, Factory, ShoppingCart, Leaf, Heart, Award, Clock, Shield, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import troutFarmHeroImg from '@/assets/facility.webp';
import fishLogoSvg from '@/assets/fish_logo.svg';
import processingHeroImg from '@/assets/prepared_fish.jpg';
import directMarketingHeroImg from '@/assets/black_forest.png';

const Fischzucht = () => {
  const productionFeatures = [
    {
      icon: Droplets,
      title: 'Naturnahe Aquakultur',
      description: 'Ständig durchströmtes System ohne Kreisläufe, Pumpen oder Chemie – wie in der freien Natur.'
    },
    {
      icon: Leaf,
      title: 'Quellfrisches Wasser',
      description: 'Direktversorgung durch quellnahen Bach und zwei eigene Quellen mit Trinkwasserqualität.'
    },
    {
      icon: Heart,
      title: 'Artgerechte Haltung',
      description: 'Komplett ohne Medikamente – vom Brutfisch bis zur ausgewachsenen Speiseforelle.'
    },
    {
      icon: Award,
      title: 'Premium Futter',
      description: 'Ausschließlich hochwertiges Bio Mar Futter – reich an Proteinen und nachhaltig produziert.'
    }
  ];

  const processingFeatures = [
    {
      icon: Factory,
      title: 'Frische Verarbeitung',
      description: 'Direktschlachtung nach Bestellung in unserem hofeigenen Verarbeitungsgebäude.'
    },
    {
      icon: Shield,
      title: 'Höchste Hygiene',
      description: 'Gründliche Reinigung und Desinfektion bei jedem Verarbeitungsschritt.'
    },
    {
      icon: Clock,
      title: 'Keine Lagerung',
      description: 'Garantiert frische Ware ohne Tiefkühlung oder tagelange Zwischenlagerung.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={directMarketingHeroImg}
            alt="Forellenzucht im Schwarzwald"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20"></div>
        </div>

        <div className="relative h-full flex items-center px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="max-w-3xl"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mb-6"
              >
                <img src={fishLogoSvg} alt="Fish Logo" className="h-24 w-24 mb-6" />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight"
              >
                Unsere <span className="text-primary">Fischzucht</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-xl md:text-2xl text-white/90 font-light mb-8"
              >
                Naturnahe Aufzucht im Herzen des Schwarzwalds
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Jetzt bestellen
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Zucht & Produktion Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Zucht & <span className="text-primary">Produktion</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Unsere Forellenzucht steht für eine naturnahe und nachhaltige Aquakultur.
              In einer Teichanlage, die einem natürlichen Bachlauf nachempfunden ist,
              wachsen unsere Fische in einem ständig durchströmten System auf.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Ganz ohne geschlossene Kreisläufe, Pumpen oder chemische Zusätze.
                  Die Frischwasserversorgung erfolgt durch einen quellnahen Bach sowie
                  zwei eigene Quellen mit Trinkwasserqualität.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  Die ständige Strömung fördert eine gesunde Entwicklung von Muskulatur
                  und Knochen – ähnlich wie in freier Wildbahn. Unterstützt wird die
                  Wasserqualität durch ein natürliches Vorfiltersystem aus Kieselsteinen
                  und Gestein, das das Wasser auf natürliche Weise mit Kalk anreichert.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  Wir verzichten komplett auf Medikamente wie Antibiotika. Dabei züchten
                  wir verschiedene Salmonidenarten wie <span className="font-semibold text-foreground">
                    Regenbogenforelle, Lachsforelle, Goldene Lachsforelle und Saibling</span>.
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
                  src={troutFarmHeroImg}
                  alt="Natürliche Forellenzucht"
                  className="w-full h-[400px] object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productionFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group text-center p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border backdrop-blur-sm hover:scale-105 transition-all duration-500"
                style={{
                  background: 'linear-gradient(135deg, rgba(132, 161, 160, 0.15), rgba(181, 140, 103, 0.1))',
                  borderColor: 'rgba(132, 161, 160, 0.3)'
                }}
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center transition-colors duration-300" style={{ backgroundColor: 'rgba(181, 140, 103, 0.2)' }}>
                    <feature.icon className="h-8 w-8" style={{ color: 'rgb(181, 140, 103)' }} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="leading-relaxed text-white/80">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Verarbeitung & Veredelung Section */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, rgb(26, 61, 59) 0%, rgb(16, 43, 42) 50%, rgb(12, 37, 36) 100%)' }}>
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
              Verarbeitung & <span style={{ color: 'rgb(181, 140, 103)' }}>Veredelung</span>
            </h2>
            <div className="w-24 h-0.5 mx-auto mb-8" style={{ background: 'linear-gradient(90deg, transparent, rgb(181, 140, 103), transparent)' }}></div>
            <p className="text-xl text-white/80 max-w-4xl mx-auto">
              Bei uns kommt alles aus einer Hand: von der Aufzucht bis zur Verarbeitung.
              So können wir eine gleichbleibend hohe Qualität garantieren.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={processingHeroImg}
                  alt="Fischverarbeitung"
                  className="w-full h-[400px] object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 order-1 lg:order-2"
            >
              <p className="text-lg leading-relaxed text-white/90">
                In unserem hofeigenen Verarbeitungsgebäude werden die Fische direkt
                nach der Bestellung frisch geschlachtet, hygienisch verarbeitet und
                küchenfertig verpackt – ganz ohne Zwischenlagerung oder Tiefkühlung.
              </p>

              <p className="text-lg leading-relaxed text-white/90">
                Unsere Fischprodukte sind in vielfältigen Varianten erhältlich:
                <span className="font-semibold" style={{ color: 'rgb(181,140,103)' }}> küchenfertig im Ganzen,
                  als Filet oder geräuchert</span> – wahlweise am Stück oder als feines Räucherfilet.
              </p>

              <p className="text-lg leading-relaxed text-white/90">
                Für die Grillsaison bieten wir eine besondere Auswahl an vier verschiedenen
                Grillfischprodukten – bereits frisch mariniert und grillfertig.
              </p>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <h4 className="text-xl font-semibold text-white mb-3">Unser Qualitätsversprechen</h4>
                <p className="text-white/90">
                  Bei uns wird nur auf Bestellung verarbeitet. Der Fisch wird erst dann
                  geschlachtet, wenn er tatsächlich gebraucht wird – für garantiert frische Ware.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Processing Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processingFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group text-center"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                  viewport={{ once: true }}
                  className="mb-8 flex justify-center"
                >
                  <div className="relative">
                    <div className="w-20 h-20 border-2 rounded-full flex items-center justify-center group-hover:border-opacity-80 transition-colors duration-500" style={{ borderColor: 'rgb(181, 140, 103)' }}>
                      <feature.icon
                        className="w-8 h-8 group-hover:opacity-90 transition-colors duration-300"
                        style={{ color: 'rgb(181, 140, 103)' }}
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                </motion.div>

                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-white/80 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center rounded-3xl shadow-xl p-12 border backdrop-blur-sm"
            style={{
              background: 'linear-gradient(135deg, rgba(132, 161, 160, 0.15), rgba(181, 140, 103, 0.1))',
              borderColor: 'rgba(132, 161, 160, 0.3)'
            }}
          >
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white">
              Bereit für frischen <span style={{ color: 'rgb(181, 140, 103)' }}>Fisch von der Quelle</span>?
            </h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/80">
              Entdecken Sie unsere Auswahl an frischen Forellen und weiteren Spezialitäten
              aus nachhaltiger regionaler Zucht.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-xl text-xl font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <ShoppingCart className="h-6 w-6" />
              Zum Shop
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Fischzucht;
