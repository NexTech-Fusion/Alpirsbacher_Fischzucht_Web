import React from 'react';
import Layout from '../components/Layout';
import { Fish, MapPin, Phone, Mail, Globe, FileText, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const Impressum = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section with Company Branding */}
        <section className="relative py-20 bg-gradient-to-br from-card/30 to-background overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {/* Company Logo and Name - Matching Header Style */}
              <motion.div 
                className="flex items-center justify-center space-x-2 mb-8"
                variants={fadeInUp}
              >
                <Fish className="h-8 w-8 text-primary" />
                <div className="flex flex-col text-center">
                  <span className="font-serif text-2xl font-bold text-foreground leading-tight">
                    Alpirsbacher
                  </span>
                  <span className="font-serif text-sm text-primary leading-tight opacity-90">
                    Fischzucht
                  </span>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-4">
                <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Impressum
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Rechtliche Angaben gemäß § 5 TMG
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Company Information */}
                <motion.div 
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 space-y-6"
                  variants={fadeInUp}
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Firmeninformationen</h2>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">Alpirsbacher Fischzucht</h3>
                      <p className="text-muted-foreground">Semke & Betz GbR</p>
                    </div>

                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div className="space-y-1">
                        <p className="text-foreground font-medium">Adresse</p>
                        <div className="text-muted-foreground space-y-1">
                          <p>Reinerzauer Talstraße 260</p>
                          <p>72275 Alpirsbach</p>
                          <p>Deutschland</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted/20 rounded-xl p-4">
                      <h4 className="font-semibold text-foreground mb-2">Vertreten durch die Gesellschafter</h4>
                      <p className="text-sm text-muted-foreground mb-2">(persönlich haftend, gesamtschuldnerisch)</p>
                      <div className="space-y-1 text-foreground">
                        <p>• Tobias Semke</p>
                        <p>• Thomas Betz</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Contact Information */}
                <motion.div 
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 space-y-6"
                  variants={fadeInUp}
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Kontakt</h2>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-foreground font-medium">Telefon</p>
                        <a 
                          href="tel:0151-54888979" 
                          className="text-primary hover:text-primary/80 transition-colors duration-300"
                        >
                          0151-54888979
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-foreground font-medium">E-Mail</p>
                        <a 
                          href="mailto:info@alpirsbacher-fischzucht.de" 
                          className="text-primary hover:text-primary/80 transition-colors duration-300"
                        >
                          info@alpirsbacher-fischzucht.de
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Globe className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-foreground font-medium">Website</p>
                        <a 
                          href="https://www.alpirsbacher-fischzucht.de" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition-colors duration-300"
                        >
                          www.alpirsbacher-fischzucht.de
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Tax Information */}
                <motion.div 
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 space-y-6"
                  variants={fadeInUp}
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Steuern</h2>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-foreground font-medium mb-2">Umsatzsteuer-ID gemäß § 27a UStG</p>
                      <p className="text-primary font-mono text-lg">DE368803896</p>
                    </div>
                  </div>
                </motion.div>

                {/* Regulatory Authority */}
                <motion.div 
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 space-y-6"
                  variants={fadeInUp}
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Aufsichtsbehörde</h2>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-foreground font-medium mb-2">Veterinär- und Verbraucherschutzbehörde Freudenstadt</p>
                      <div className="text-muted-foreground space-y-1">
                        <p>Reichsstraße 11</p>
                        <p>72250 Freudenstadt</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Additional Legal Notice */}
              <motion.div 
                className="mt-12 bg-muted/20 rounded-2xl p-8 text-center"
                variants={fadeInUp}
              >
                <div className="max-w-3xl mx-auto">
                  <h3 className="text-xl font-bold text-foreground mb-4">Rechtlicher Hinweis</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Die auf dieser Website bereitgestellten Informationen dienen ausschließlich zu Informationszwecken. 
                    Trotz sorgfältiger Überprüfung übernehmen wir keine Haftung für die Vollständigkeit, Richtigkeit 
                    und Aktualität der Inhalte. Alle Angaben erfolgen ohne Gewähr.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Impressum;