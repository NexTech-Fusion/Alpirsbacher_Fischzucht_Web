
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Fish, Award, Leaf, Users, ChevronRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import Layout from '../components/Layout';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Nachricht gesendet!",
      description: "Vielen Dank für Ihre Nachricht. Wir melden uns bald bei Ihnen.",
    });
    setFormData({ name: '', email: '', message: '' });
  };


  const heroImages = [
    {
      url: 'https://vibemedia.space/black_forest_hero_004.png',
      alt: 'Schwarzwald Landschaft'
    },
    {
      url: 'https://vibemedia.space/partners_luxury_c7d6e5f4_003.png',
      alt: 'Premium Partner'
    },
    {
      url: 'https://vibemedia.space/fresh_trout_m7n6o5p4_013.png',
      alt: 'Frische Forelle'
    },
    {
      url: 'https://vibemedia.space/fish_hero_1a2b3c4d.png',
      alt: 'Fischzucht'
    },
    {
      url: 'https://vibemedia.space/salmon_gourmet_2j3k4l5m.png',
      alt: 'Gourmet Lachs'
    }
  ];

  const [activeSlide, setActiveSlide] = useState(0);

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
      {/* Hero Section - Split Screen Design */}
      <section className="h-[700px] lg:h-[800px] flex flex-col lg:flex-row">
        {/* Left Side - Image Swiper */}
        <div className="lg:w-1/2 h-full relative overflow-hidden flex items-center justify-center">
          <div className="w-full h-96 lg:h-[500px] relative overflow-hidden">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={1200}
            onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
            className="w-full h-full"
          >
            {heroImages.map((image, index) => (
              <SwiperSlide key={index}>
                <motion.div 
                  className="w-full h-full bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url('${image.url}')` }}
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    duration: 1.5,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/30"></div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Vertical Dot Indicators */}
          <div className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 flex flex-col gap-3">
            {heroImages.map((_, index) => (
              <motion.div
                key={index}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-500 ${
                  activeSlide === index 
                    ? 'bg-primary shadow-lg shadow-primary/50 scale-125' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              />
            ))}
           </div>
          
          {/* Overlay gradient for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background/60 lg:to-background/30 pointer-events-none"></div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="lg:w-1/2 bg-background flex items-center justify-center h-full p-6 lg:p-12">
          <div className="max-w-xl w-full text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Title */}
              <div className="space-y-4">
                <h1 className="font-serif text-4xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
                  Alpirsbacher
                  <span className="block text-primary mt-2">
                    Fischzucht
                  </span>
                </h1>
                
                {/* Subtitle */}
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-md">
                  Frische Forellen aus dem Herzen des Schwarzwalds
                </p>
              </div>

              {/* Description */}
              <p className="text-primary text-sm lg:text-base leading-relaxed font-medium max-w-lg">
                Regional. Nachhaltig. Persönlich.
              </p>

              {/* Action Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link to="/shop">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center w-32 h-32 lg:w-40 lg:h-40 border-2 border-primary rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 group cursor-pointer"
                  >
                    <div className="text-center">
                      <div className="text-sm lg:text-base font-medium mb-1">Unser</div>
                      <div className="text-xs lg:text-sm font-light opacity-75">Shop</div>
                      <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5 mx-auto mt-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </motion.div>
                </Link>
              </motion.div>

              {/* Secondary Actions */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  to="/fischzucht"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-all duration-300 group"
                >
                  Fischzucht entdecken
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <button 
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 font-medium transition-all duration-300 group"
                >
                  Kontakt aufnehmen
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fresh Trout Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Frische Forellen direkt von der <span className="text-primary">Quelle</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Main Description */}
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Du suchst frischen Fisch aus nachhaltiger Zucht? Dann bist Du bei uns genau richtig. 
                  Unsere Forellen stammen direkt aus eigener Zucht – regional, verantwortungsvoll und 
                  mit viel Sorgfalt aufgezogen.
                </p>
              </div>

              {/* How it works */}
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <Fish className="w-6 h-6 text-primary" />
                  So funktioniert's
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Damit Du beste Qualität bekommst, bieten wir unsere Forellen nur auf Vorbestellung an. 
                  Du holst Deinen frisch verarbeiteten Fisch nach Vereinbarung einfach bei uns vor Ort ab – 
                  in unserem Wirtschaftsgebäude bei der Zuchtanlage.
                </p>
              </div>

              {/* More than trout */}
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <Award className="w-6 h-6 text-secondary" />
                  Mehr als nur Forelle
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Vor Ort findest Du auch eine Auswahl an hochwertigen Produkten, die perfekt zu unserem 
                  Fisch passen – darunter ausgesuchte Weine und feine Gewürze.
                </p>
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Values */}
              <div className="bg-gradient-to-br from-accent/20 to-muted/30 rounded-2xl p-8 border border-accent/30">
                <h3 className="font-serif text-3xl font-bold text-foreground mb-6 text-center">
                  Regional. Nachhaltig. Persönlich.
                </h3>
                <p className="text-muted-foreground leading-relaxed text-center">
                  Bei uns steht der respektvolle Umgang mit Natur und Tier im Mittelpunkt. 
                  Kurze Wege, ehrliche Produkte und direkter Kontakt mit Dir als Kundin oder Kunde – 
                  dafür stehen wir.
                </p>
              </div>

              {/* CTAs */}
              <div className="text-center space-y-6">
                <p className="font-serif text-xl text-foreground font-semibold">
                  Wir freuen uns auf Deine Bestellung!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {/* Contact CTA */}
                  <motion.button
                    onClick={() => {
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/25 group"
                  >
                    Kontakt aufnehmen
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>

                  {/* Shop CTA */}
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to="/shop"
                      className="inline-flex items-center justify-center px-8 py-4 bg-card border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/25 group"
                    >
                      Unser Shop
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sections Overview */}
      <section className="py-20 bg-sage-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Tradition trifft <span className="text-primary">Innovation</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
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
                className="group bg-card backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:scale-105 border border-border hover:border-primary/30"
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
                    <section.icon className="h-6 w-6 text-primary" />
                    <h3 className="font-serif text-2xl font-semibold text-foreground">
                      {section.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {section.description}
                  </p>
                  <Link 
                    to={section.path}
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-all duration-300 hover:gap-3"
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
      <section className="py-20 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Bereit für den Geschmack des <span className="text-primary">Schwarzwalds</span>?
            </h2>
            <p className="text-xl mb-8 text-muted-foreground">
              Bestellen Sie noch heute unsere frischen Premium-Forellen 
              und erleben Sie Qualität, die Sie schmecken können.
            </p>
            <Link 
              to="/shop"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 inline-flex items-center gap-2"
            >
              Zum Shop
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Kontakt
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Haben Sie Fragen zu unseren Produkten oder möchten Sie uns besuchen? 
              Wir freuen uns auf Ihre Nachricht.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-6">
                  Kontaktinformationen
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Adresse</h4>
                      <p className="text-muted-foreground">
                        Musterstraße 123<br />
                        72275 Alpirsbach<br />
                        Deutschland
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Telefon</h4>
                      <p className="text-muted-foreground">+49 (0) 7444 123456</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">E-Mail</h4>
                      <p className="text-muted-foreground">info@fischzucht-alpirsbach.de</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Support-Zeiten</h4>
                      <p className="text-muted-foreground">
                        Montag bis Freitag<br />
                        9:00–18:00 Uhr
                      </p>
                    </div>
                  </div>
                </div>

                </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8"
            >
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-6">
                Nachricht senden
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-background/50 border-border focus:border-primary"
                    placeholder="Ihr vollständiger Name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">E-Mail *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-background/50 border-border focus:border-primary"
                    placeholder="ihre.email@beispiel.de"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Nachricht *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-background/50 border-border focus:border-primary min-h-[120px]"
                    placeholder="Wie können wir Ihnen helfen?"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3"
                >
                  Nachricht senden
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
