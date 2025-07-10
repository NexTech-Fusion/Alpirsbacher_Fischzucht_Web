
import React from 'react';
import { motion } from 'framer-motion';
import { ChefHat, Store, Award, Handshake } from 'lucide-react';
import Layout from '../components/Layout';

const Partner = () => {
  const partnerCategories = [
    {
      icon: ChefHat,
      title: 'Sterne-Restaurants',
      description: 'Exklusive Partnerschaften mit den besten Restaurants der Region',
      partners: ['Restaurant Schwarzwaldstube', 'Gasthof zur Krone', 'Hotel Traube Tonbach']
    },
    {
      icon: Store,
      title: 'Feinkosthändler',
      description: 'Vertrauensvolle Zusammenarbeit mit ausgewählten Feinkostgeschäften',
      partners: ['Delikatessen Müller', 'Schwarzwald Feinkost', 'Genuss & Co.']
    },
    {
      icon: Award,
      title: 'Zertifizierte Partner',
      description: 'Partner, die unsere hohen Qualitätsstandards teilen',
      partners: ['Bio-Markt Stuttgart', 'Regionale Vermarkter e.V.', 'Slow Food Baden']
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://vibemedia.space/partner_hero_j0k9l8m7_010.png?prompt=premium%20restaurant%20kitchen%20chef%20preparing%20fresh%20trout%20professional%20gastronomy%20luxury%20culinary%20partnership&key=BT4VR')`
          }}
        >
          <div className="absolute inset-0 bg-forest-green/70"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl font-bold mb-6"
          >
            Unsere <span className="text-brushed-brass">Partner</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-light"
          >
            Gemeinsam für höchste Qualität
          </motion.p>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="py-20 bg-stone-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest-green mb-6">
              Qualität verbindet
            </h2>
            <p className="text-walnut-brown text-lg max-w-3xl mx-auto">
              Wir arbeiten ausschließlich mit Partnern zusammen, die unsere Leidenschaft 
              für Qualität und Nachhaltigkeit teilen.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {partnerCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <category.icon className="h-16 w-16 text-brushed-brass mb-6" />
                <h3 className="font-serif text-2xl font-semibold text-forest-green mb-4">
                  {category.title}
                </h3>
                <p className="text-walnut-brown mb-6 leading-relaxed">
                  {category.description}
                </p>
                <div className="space-y-3">
                  {category.partners.map((partner, partnerIndex) => (
                    <div key={partnerIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-brushed-brass rounded-full"></div>
                      <span className="text-walnut-brown font-medium">{partner}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-4xl font-bold text-forest-green mb-6">
                Warum uns Gastronomen vertrauen
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-brushed-brass rounded-full flex items-center justify-center text-white font-bold">✓</div>
                  <div>
                    <h3 className="font-semibold text-walnut-brown mb-2">Zuverlässige Lieferung</h3>
                    <p className="text-walnut-brown">Pünktliche Belieferung mit frischesten Forellen</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-brushed-brass rounded-full flex items-center justify-center text-white font-bold">✓</div>
                  <div>
                    <h3 className="font-semibold text-walnut-brown mb-2">Konsistente Qualität</h3>
                    <p className="text-walnut-brown">Gleichbleibend hohe Standards bei jeder Lieferung</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-brushed-brass rounded-full flex items-center justify-center text-white font-bold">✓</div>
                  <div>
                    <h3 className="font-semibold text-walnut-brown mb-2">Persönliche Betreuung</h3>
                    <p className="text-walnut-brown">Individuelle Beratung und maßgeschneiderte Lösungen</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-brushed-brass rounded-full flex items-center justify-center text-white font-bold">✓</div>
                  <div>
                    <h3 className="font-semibold text-walnut-brown mb-2">Regional & Nachhaltig</h3>
                    <p className="text-walnut-brown">Kurze Wege und umweltschonende Produktion</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://vibemedia.space/restaurant_k9l8m7n6_011.png?prompt=premium%20restaurant%20fresh%20trout%20dish%20presentation%20fine%20dining%20culinary%20excellence%20professional%20plating&key=BT4VR"
                alt="Restaurant Partnerschaft"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-20 bg-forest-green text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Handshake className="h-16 w-16 text-brushed-brass mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Werden Sie unser Partner
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Interessieren Sie sich für eine Partnerschaft? Wir freuen uns auf 
              ein persönliches Gespräch über die Möglichkeiten einer Zusammenarbeit.
            </p>
            <div className="space-y-4">
              <div className="text-lg">
                <strong>Kontaktieren Sie uns:</strong>
              </div>
              <div className="text-brushed-brass">
                <div>Tel: +49 7444 1234567</div>
                <div>E-Mail: partner@alpirsbach-fischzucht.de</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Partner;
