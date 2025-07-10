
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
      image: 'fish_farm_a9f8b7c6_001.png?prompt=sustainable%20trout%20fish%20farm%20in%20black%20forest%20germany%20crystal%20clear%20mountain%20water%20natural%20environment%20premium%20quality&key=BT4VR'
    },
    {
      title: 'Über uns',
      description: 'Drei Generationen Expertise in traditioneller Fischzucht mit modernen, nachhaltigen Methoden.',
      icon: Users,
      path: '/ueber-uns',
      image: 'about_us_b8e7d6c5_002.png?prompt=traditional%20german%20fish%20farm%20family%20business%20three%20generations%20black%20forest%20heritage%20authentic&key=BT4VR'
    },
    {
      title: 'Partner',
      description: 'Vertrauensvolle Zusammenarbeit mit den besten Restaurants und Händlern der Region.',
      icon: Award,
      path: '/partner',
      image: 'partners_c7d6e5f4_003.png?prompt=premium%20restaurant%20partnership%20high%20end%20gastronomy%20fresh%20trout%20delivery%20professional%20collaboration&key=BT4VR'
    },
    {
      title: 'Shop',
      description: 'Frische Forellen direkt vom Erzeuger. Online bestellen und bequem nach Hause liefern lassen.',
      icon: Leaf,
      path: '/shop',
      image: 'shop_d6e5f4g3_004.png?prompt=fresh%20trout%20premium%20packaging%20online%20shop%20delivery%20luxury%20fish%20products%20sustainable&key=BT4VR'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://vibemedia.space/hero_main_e5f4g3h2_005.png?prompt=pristine%20mountain%20lake%20black%20forest%20germany%20crystal%20clear%20water%20surrounded%20by%20dense%20pine%20forest%20misty%20morning%20luxury%20nature&key=BT4VR')`
          }}
        >
          <div className="absolute inset-0 bg-forest-green/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl font-bold mb-6"
          >
            Alpirsbach
            <span className="block text-brushed-brass">Fischzucht</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 font-light"
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
              className="bg-brushed-brass hover:bg-brushed-brass/90 text-forest-green px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
            >
              Jetzt bestellen
              <ArrowRight size={20} />
            </Link>
            <Link 
              to="/fischzucht"
              className="border-2 border-white hover:bg-white hover:text-forest-green text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Mehr erfahren
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Sections Overview */}
      <section className="py-20 bg-stone-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest-green mb-6">
              Tradition trifft Innovation
            </h2>
            <p className="text-walnut-brown text-lg max-w-3xl mx-auto">
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
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={`https://vibemedia.space/${section.image}`}
                    alt={section.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <section.icon className="h-6 w-6 text-brushed-brass" />
                    <h3 className="font-serif text-2xl font-semibold text-forest-green">
                      {section.title}
                    </h3>
                  </div>
                  <p className="text-walnut-brown mb-6 leading-relaxed">
                    {section.description}
                  </p>
                  <Link 
                    to={section.path}
                    className="inline-flex items-center gap-2 text-forest-green hover:text-brushed-brass font-semibold transition-colors duration-300"
                  >
                    Mehr erfahren
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-forest-green text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Bereit für den Geschmack des Schwarzwalds?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Bestellen Sie noch heute unsere frischen Premium-Forellen 
              und erleben Sie Qualität, die Sie schmecken können.
            </p>
            <Link 
              to="/shop"
              className="bg-brushed-brass hover:bg-brushed-brass/90 text-forest-green px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
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
