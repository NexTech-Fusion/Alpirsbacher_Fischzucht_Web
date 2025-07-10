
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Clock, Heart, Star } from 'lucide-react';
import Layout from '../components/Layout';

const UeberUns = () => {
  const milestones = [
    { year: '1952', event: 'Gründung der Fischzucht durch Heinrich Müller' },
    { year: '1978', event: 'Übernahme durch Sohn Klaus Müller' },
    { year: '1995', event: 'Modernisierung der Anlagen' },
    { year: '2010', event: 'Einstieg der dritten Generation - Maria Müller' },
    { year: '2020', event: 'Zertifizierung als Bio-Betrieb' }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://vibemedia.space/about_hero_h2i1j0k9_008.png?prompt=traditional%20german%20family%20fish%20farm%20three%20generations%20black%20forest%20heritage%20authentic%20rural%20landscape%20sunset&key=BT4VR')`
          }}
        >
          <div className="absolute inset-0 bg-walnut-brown/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="text-brushed-brass">Familie</span> Müller
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-light"
          >
            Drei Generationen. Eine Leidenschaft.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-stone-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-4xl font-bold text-forest-green mb-6">
                Unsere Geschichte
              </h2>
              <div className="space-y-6 text-walnut-brown leading-relaxed">
                <p>
                  Was 1952 als kleiner Familienbetrieb im Herzen des Schwarzwalds begann, 
                  ist heute eine der renommiertesten Forellenzuchten der Region. Heinrich Müller 
                  legte den Grundstein für das, was heute in dritter Generation fortgeführt wird.
                </p>
                <p>
                  Unser Erfolgsgeheimnis liegt in der perfekten Verbindung von traditionellem 
                  Handwerk und modernen, nachhaltigen Methoden. Jede Generation hat ihre eigenen 
                  Innovationen eingebracht, ohne dabei die Werte und Qualitätsstandards zu vergessen, 
                  die uns seit jeher auszeichnen.
                </p>
                <p>
                  Heute führt Maria Müller den Betrieb in dritter Generation und setzt dabei 
                  auf Nachhaltigkeit, Qualität und den respektvollen Umgang mit der Natur.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://vibemedia.space/family_story_i1j0k9l8_009.png?prompt=three%20generations%20german%20family%20fish%20farmers%20portrait%20traditional%20black%20forest%20setting%20authentic%20heritage&key=BT4VR"
                alt="Familie Müller"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl font-bold text-forest-green mb-6">
              Meilensteine unserer Geschichte
            </h2>
            <p className="text-walnut-brown text-lg">
              Über 70 Jahre Erfahrung in der Fischzucht
            </p>
          </motion.div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex items-center gap-8 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}
              >
                <div className="w-1/3 text-center">
                  <div className="text-3xl font-bold text-brushed-brass font-serif">
                    {milestone.year}
                  </div>
                </div>
                <div className="w-8 h-8 bg-forest-green rounded-full flex-shrink-0"></div>
                <div className="w-1/3">
                  <p className="text-walnut-brown font-medium">
                    {milestone.event}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-forest-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl font-bold mb-6">
              Unsere Werte
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Was uns antreibt und leitet
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: 'Leidenschaft', description: 'Mit Herz und Seele für die beste Qualität' },
              { icon: Users, title: 'Familie', description: 'Traditionelle Werte in einem familiären Umfeld' },
              { icon: Star, title: 'Qualität', description: 'Kompromisslose Standards bei jedem Schritt' },
              { icon: Clock, title: 'Tradition', description: 'Über 70 Jahre Erfahrung und Expertise' }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <value.icon className="h-16 w-16 text-brushed-brass mx-auto mb-4" />
                <h3 className="font-serif text-xl font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="opacity-90 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UeberUns;
