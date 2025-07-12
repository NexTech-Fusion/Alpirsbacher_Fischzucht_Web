import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Waves, 
  Fish, 
  Heart, 
  Shield, 
  Droplets, 
  Leaf,
  ChefHat,
  Package,
  Truck,
  ShoppingCart,
  Award,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';
import troutFarmHero from '@/assets/trout-farm-hero.png';
import processingHero from '@/assets/processing-hero.png';
import directMarketingHero from '@/assets/direct-marketing-hero.png';

const Fischzucht = () => {

  const features = [
    {
      icon: Droplets,
      title: "Trinkwasserqualität",
      description: "Frischwasser aus quellnahem Bach und zwei eigenen Quellen"
    },
    {
      icon: Waves,
      title: "Natürliche Strömung",
      description: "Ständig durchströmtes System ohne geschlossene Kreisläufe"
    },
    {
      icon: Shield,
      title: "Ohne Medikamente",
      description: "Komplett ohne Antibiotika und chemische Zusätze"
    },
    {
      icon: Leaf,
      title: "Nachhaltiges Futter",
      description: "Hochwertiges Bio Mar Futter für optimale Entwicklung"
    }
  ];

  const processingFeatures = [
    {
      icon: Clock,
      title: "Nur auf Bestellung",
      description: "Frische Verarbeitung erst bei tatsächlichem Bedarf"
    },
    {
      icon: ChefHat,
      title: "Vielfältige Varianten",
      description: "Ganz, als Filet, geräuchert oder mariniert"
    },
    {
      icon: Award,
      title: "Höchste Hygiene",
      description: "Gründliche Reinigung bei jedem Verarbeitungsschritt"
    },
    {
      icon: Package,
      title: "Küchenfertig",
      description: "Direkt verpackt ohne Zwischenlagerung"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${troutFarmHero})`,
            filter: 'brightness(0.4)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-primary/60" />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className="relative z-10 text-center text-white max-w-4xl mx-auto px-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-secondary">Naturnahe</span><br />
            Forellenzucht
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Von der Quelle bis zum Teller – nachhaltige Aquakultur 
            in einem ständig durchströmten System
          </p>
          <Button 
            asChild
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-primary font-semibold px-8 py-4 text-lg"
          >
            <Link to="/shop">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Jetzt bestellen
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </motion.div>
      </section>

      {/* Zucht & Produktion Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-primary">
                  Zucht & Produktion
                </h2>
                <div className="w-24 h-1 bg-secondary rounded" />
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Unsere Forellenzucht steht für eine naturnahe und nachhaltige Aquakultur. 
                In einer Teichanlage, die einem natürlichen Bachlauf nachempfunden ist, 
                wachsen unsere Fische in einem ständig durchströmten System auf – 
                ganz ohne geschlossene Kreisläufe, Pumpen oder chemische Zusätze.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Die Frischwasserversorgung erfolgt durch einen quellnahen Bach sowie 
                zwei eigene Quellen mit Trinkwasserqualität. Die ständige Strömung 
                fördert eine gesunde Entwicklung von Muskulatur und Knochen – 
                ähnlich wie in freier Wildbahn.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mt-12">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={troutFarmHero} 
                  alt="Forellenzucht" 
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Verarbeitung & Veredelung Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={processingHero} 
                  alt="Verarbeitung" 
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/30 to-transparent" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8 lg:order-2"
            >
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-primary">
                  Verarbeitung & Veredelung
                </h2>
                <div className="w-24 h-1 bg-secondary rounded" />
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Bei uns kommt alles aus einer Hand: von der Aufzucht bis zur Verarbeitung. 
                In unserem hofeigenen Verarbeitungsgebäude werden die Fische direkt nach 
                der Bestellung frisch geschlachtet, hygienisch verarbeitet und küchenfertig verpackt.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Ein zentraler Qualitätsvorteil: Bei uns wird nur auf Bestellung verarbeitet. 
                Das bedeutet, der Fisch wird erst dann geschlachtet, wenn er tatsächlich 
                gebraucht wird. So stellen wir sicher, dass unsere Kundinnen und Kunden 
                ausschließlich absolut frische Ware erhalten.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mt-12">
                {processingFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Direktvermarktung Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-primary">
                  Direktvermarktung
                </h2>
                <div className="w-24 h-1 bg-secondary rounded" />
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Um unseren Kundinnen und Kunden größtmögliche Flexibilität zu bieten, 
                stehen zwei komfortable Bezugsmöglichkeiten zur Auswahl. Zum einen kann 
                der Fisch auf Vorbestellung direkt vor Ort abgeholt werden.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Wer es lieber bequem mag, kann sich den Fisch auch ganz einfach nach 
                Hause liefern lassen. Über die benutzerfreundliche myfishmeal.de-App 
                oder den Online-Shop lassen sich unsere Produkte schnell und unkompliziert bestellen.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mt-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-4">
                    <Package className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">Abholung vor Ort</h3>
                  <p className="text-sm text-muted-foreground">
                    Persönliche Abholung mit zusätzlichen Produkten wie Gewürze und Weine
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-4">
                    <Truck className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">Lieferung nach Hause</h3>
                  <p className="text-sm text-muted-foreground">
                    Express-Versand bis 12 Uhr am Folgetag – frisch, gekühlt und qualitätsgeprüft
                  </p>
                </motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="pt-8"
              >
                <Button 
                  asChild
                  size="lg" 
                  className="bg-secondary hover:bg-secondary/90 text-primary font-semibold px-8 py-4 text-lg w-full sm:w-auto"
                >
                  <Link to="/shop">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Jetzt im Shop bestellen
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={directMarketingHero} 
                  alt="Direktvermarktung" 
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                
                {/* Floating Badge */}
                <div className="absolute top-6 right-6 bg-secondary text-primary px-4 py-2 rounded-full font-semibold shadow-lg">
                  <Fish className="inline w-4 h-4 mr-2" />
                  Frisch & Regional
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Bereit für frischen Fisch aus regionaler Zucht?
            </h2>
            <p className="text-xl text-gray-200">
              Entdecken Sie unser vollständiges Sortiment und bestellen Sie noch heute.
            </p>
            <Button 
              asChild
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-primary font-semibold px-8 py-4 text-lg"
            >
              <Link to="/shop">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Zum Shop
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Fischzucht;