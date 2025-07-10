
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Fish, Award, Leaf, Users } from 'lucide-react';
import Layout from '../components/Layout';

const Index = () => {
  const sections = [
    {
      title: 'Fischzucht',
      description: 'Nachhaltige Aufzucht von Premium-Forellen in den kristallklaren Gewässern des Schwarzwalds.',
      icon: Fish,
      path: '/fischzucht',
      image: 'fish_farm_luxury_a9f8b7c6_001.png?prompt=luxury%20sustainable%20trout%20fish%20farm%20in%20black%20forest%20germany%20crystal%20clear%20mountain%20water%20dark%20elegant%20premium%20quality%20gold%20accents&key=BT4VR'
    },
    {
      title: 'Über uns',
      description: 'Drei Generationen Expertise in traditioneller Fischzucht mit modernen, nachhaltigen Methoden.',
      icon: Users,
      path: '/ueber-uns',
      image: 'about_us_luxury_b8e7d6c5_002.png?prompt=traditional%20german%20fish%20farm%20family%20business%20three%20generations%20black%20forest%20heritage%20luxury%20dark%20elegant%20gold%20details&key=BT4VR'
    },
    {
      title: 'Partner',
      description: 'Vertrauensvolle Zusammenarbeit mit den besten Restaurants und Händlern der Region.',
      icon: Award,
      path: '/partner',
      image: 'partners_luxury_c7d6e5f4_003.png?prompt=premium%20restaurant%20partnership%20high%20end%20gastronomy%20fresh%20trout%20delivery%20luxury%20dark%20elegant%20professional%20collaboration&key=BT4VR'
    },
    {
      title: 'Shop',
      description: 'Frische Forellen direkt vom Erzeuger. Online bestellen und bequem nach Hause liefern lassen.',
      icon: Leaf,
      path: '/shop',
      image: 'shop_luxury_d6e5f4g3_004.png?prompt=fresh%20trout%20premium%20packaging%20online%20shop%20delivery%20luxury%20fish%20products%20dark%20elegant%20gold%20accents%20sustainable&key=BT4VR'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://vibemedia.space/hero_luxury_main_e5f4g3h2_005.png?prompt=pristine%20mountain%20lake%20black%20forest%20germany%20crystal%20clear%20water%20surrounded%20by%20dense%20pine%20forest%20misty%20morning%20luxury%20dark%20elegant%20atmosphere&key=BT4VR')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-deep-black/70 via-deep-black/40 to-deep-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center text-ivory-white max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl font-bold mb-6"
          >
            Alpirsbach
            <span className="block text-rich-gold animate-gold-shimmer bg-gold-gradient bg-clip-text text-transparent bg-[length:200%_100%]">
              Fischzucht
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 font-light text-ivory-white/90"
          >
            Premium Forellen aus dem Herzen des Schwarzwalds
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              to="/shop"
              className="bg-rich-gold hover:bg-rich-gold/90 text-deep-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-rich-gold/25 inline-flex items-center gap-2"
            >
              Jetzt bestellen
              <ArrowRight size={20} />
            </Link>
            <Link 
              to="/fischzucht"
              className="border-2 border-rich-gold hover:bg-rich-gold hover:text-deep-black text-rich-gold px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Mehr erfahren
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Sections Overview */}
      <section className="py-20 bg-luxury-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-ivory-white mb-6">
              Tradition trifft <span className="text-rich-gold">Innovation</span>
            </h2>
            <p className="text-ivory-white/80 text-lg max-w-3xl mx-auto">
              Seit drei Generationen züchten wir in den kristallklaren Gewässern des Schwarzwalds 
              Forellen von außergewöhnlicher Qualität. Entdecken Sie unsere Welt der nachhaltigen Fischzucht.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group bg-charcoal-gray/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl hover:shadow-rich-gold/10 transition-all duration-500 hover:scale-105 border border-rich-gold/10 hover:border-rich-gold/30"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={`https://vibemedia.space/${section.image}`}
                    alt={section.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <section.icon className="h-6 w-6 text-rich-gold" />
                    <h3 className="font-serif text-2xl font-semibold text-ivory-white">
                      {section.title}
                    </h3>
                  </div>
                  <p className="text-ivory-white/70 mb-6 leading-relaxed">
                    {section.description}
                  </p>
                  <Link 
                    to={section.path}
                    className="inline-flex items-center gap-2 text-rich-gold hover:text-rich-gold/80 font-semibold transition-all duration-300 hover:gap-3"
                  >
                    Mehr erfahren
                    <ArrowRight size={16} className="transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-deep-black border-t border-rich-gold/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-ivory-white">
              Bereit für den Geschmack des <span className="text-rich-gold">Schwarzwalds</span>?
            </h2>
            <p className="text-xl mb-8 text-ivory-white/80">
              Bestellen Sie noch heute unsere frischen Premium-Forellen 
              und erleben Sie Qualität, die Sie schmecken können.
            </p>
            <Link 
              to="/shop"
              className="bg-rich-gold hover:bg-rich-gold/90 text-deep-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-rich-gold/25 inline-flex items-center gap-2"
            >
              Zum Shop
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
