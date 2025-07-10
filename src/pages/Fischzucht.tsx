
import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Leaf, Award, Heart } from 'lucide-react';
import Layout from '../components/Layout';

const Fischzucht = () => {
  const features = [
    {
      icon: Droplets,
      title: 'Kristallklares Quellwasser',
      description: 'Unsere Forellen wachsen in den reinsten Quellen des Schwarzwalds auf, was ihnen ihren unverwechselbaren Geschmack verleiht.'
    },
    {
      icon: Leaf,
      title: 'Nachhaltige Zucht',
      description: 'Wir setzen auf umweltschonende Methoden und arbeiten im Einklang mit der Natur für eine nachhaltige Fischzucht.'
    },
    {
      icon: Award,
      title: 'Premium Qualität',
      description: 'Strenge Qualitätskontrollen und artgerechte Haltung garantieren Forellen von höchster Güte.'
    },
    {
      icon: Heart,
      title: 'Mit Leidenschaft',
      description: 'Drei Generationen Erfahrung und Liebe zum Handwerk machen unsere Fischzucht zu etwas Besonderem.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://vibemedia.space/fischzucht_hero_f4g3h2i1_006.png?prompt=trout%20fish%20farm%20ponds%20black%20forest%20germany%20aerial%20view%20crystal%20clear%20water%20surrounded%20by%20pine%20trees%20sustainable%20aquaculture&key=BT4VR')`
          }}
        >
          <div className="absolute inset-0 bg-forest-green/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl font-bold mb-6"
          >
            Unsere <span className="text-brushed-brass">Fischzucht</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-light"
          >
            Wo Tradition auf Innovation trifft
          </motion.p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-stone-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest-green mb-6">
              Was uns auszeichnet
            </h2>
            <p className="text-walnut-brown text-lg max-w-3xl mx-auto">
              Unsere Fischzucht vereint traditionelle Methoden mit modernster Technik 
              für die Aufzucht der besten Forellen im Schwarzwald.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
              >
                <feature.icon className="h-16 w-16 text-brushed-brass mx-auto mb-4" />
                <h3 className="font-serif text-xl font-semibold text-forest-green mb-3">
                  {feature.title}
                </h3>
                <p className="text-walnut-brown leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-4xl font-bold text-forest-green mb-6">
                Von der Brut bis zum Speisefisch
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-brushed-brass rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-walnut-brown mb-2">Brutaufzucht</h3>
                    <p className="text-walnut-brown">Sorgfältige Aufzucht der Jungfische in optimalen Bedingungen</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-brushed-brass rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-walnut-brown mb-2">Naturnahe Haltung</h3>
                    <p className="text-walnut-brown">Aufwachsen in natürlichen Teichen mit frischem Quellwasser</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-brushed-brass rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-walnut-brown mb-2">Qualitätskontrolle</h3>
                    <p className="text-walnut-brown">Regelmäßige Überwachung von Wasserqualität und Fischgesundheit</p>
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
                src="https://vibemedia.space/process_g3h2i1j0_007.png?prompt=trout%20farming%20process%20from%20fry%20to%20adult%20fish%20natural%20ponds%20sustainable%20aquaculture%20black%20forest%20environment&key=BT4VR"
                alt="Fischzucht Prozess"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Environmental Section */}
      <section className="py-20 bg-forest-green text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Nachhaltigkeit im Einklang mit der Natur
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Wir verstehen uns als Hüter der natürlichen Ressourcen des Schwarzwalds. 
              Unsere Fischzucht arbeitet nachhaltig und umweltschonend, um auch zukünftigen 
              Generationen diese einzigartige Naturlandschaft zu erhalten.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-brushed-brass mb-2">100%</div>
                <div className="text-sm">Natürliches Quellwasser</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brushed-brass mb-2">3</div>
                <div className="text-sm">Generationen Erfahrung</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brushed-brass mb-2">0</div>
                <div className="text-sm">Künstliche Zusätze</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Fischzucht;
