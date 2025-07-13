import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Fish, Award, Leaf, Users, ChevronRight, MapPin, Phone, Mail, Clock, Truck, Utensils, Wine, ShoppingCart, Droplets, CheckCircle } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import Layout from '../components/Layout';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import goExpressLogo from '@/assets/go-express-logo.png';
import culinaryLogo from '@/assets/culinarico-logo.png';
import heinrichLogo from '@/assets/heinrich-weingut-logo.png';
import directMarketingHeroImg from '@/assets/direct-marketing-hero.png';
import productFishImg from '@/assets/product-fish.png';

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

  const partners = [
    {
      id: 'go-express',
      name: 'GO! Express & Logistics',
      logo: goExpressLogo,
      icon: Truck,
      category: 'Versandpartner',
      description: 'Für den schnellen und sicheren Versand unserer Boxen setzen wir auf einen starken regionalen Partner: GO! Express & Logistics mit Sitz in Ettlingen. Als Spezialist für Expressversand sorgt GO! dafür, dass jede Sendung termingerecht und zuverlässig bei unseren Kundinnen und Kunden ankommt – und das mit persönlichem Service und höchster Sorgfalt. Mit der regionalen Nähe und langjährigen Erfahrung ist GO! der perfekte Partner für unsere anspruchsvolle Logistik.',
      location: 'Ettlingen'
    },
    {
      id: 'culinarico',
      name: 'Culinarico',
      logo: culinaryLogo,
      icon: Utensils,
      category: 'Gewürzlieferant',
      description: 'Für unsere Fischspezialitäten vertrauen wir auf die erlesenen Gewürzmischungen von Culinarico aus Karlsruhe. Ob klassisch, mediterran oder exotisch – hier findet sich das perfekte Aroma für jeden Geschmack. Qualität, die man schmeckt!',
      location: 'Karlsruhe'
    },
    {
      id: 'heinrich',
      name: 'Weingut Heinrich',
      logo: heinrichLogo,
      icon: Wine,
      category: 'Weinlieferant',
      description: 'Seit 1545 steht das Weingut Heinrich aus Heilbronn für erstklassigen Weinbau mit Leidenschaft und Familienhandwerk. Mit jeder Flasche erleben wir die perfekte Verbindung aus Tradition, Qualität und Charakter – echte Weinkultur, die begeistert!',
      location: 'Heilbronn',
      since: '1545'
    }
  ];

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
      <section className="min-h-[700px] lg:h-[900px] flex flex-col lg:flex-row">
        {/* Content Section - First on mobile, second on desktop */}
        <div className="lg:w-1/2 bg-background flex items-center justify-center min-h-[400px] lg:h-full p-6 lg:p-12 order-1 lg:order-2">
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
                  Frische Forellen direkt von der Quelle
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
              <div className="flex flex-col sm:flex-row gap-4">
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

        {/* Image Gallery Section - Second on mobile, first on desktop */}
        <div className="lg:w-1/2 h-full relative overflow-hidden flex items-center justify-center order-2 lg:order-1">
          <div className="w-full h-[400px] lg:h-[700px] relative overflow-hidden">
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
      </section>

      {/* Fresh Trout Product Section - Redesigned */}
      <section className="py-20 bg-gradient-to-br from-background via-accent/5 to-background relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header */}
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
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Alles aus einer Hand: von der Aufzucht bis zur Verarbeitung
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Side - Quality Features (4 columns) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-4 space-y-6"
            >
              {/* Aquaculture Features */}
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Premium Qualität</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
                    <Droplets className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">Quellfrisches Wasser</h4>
                      <p className="text-xs text-muted-foreground">Direktversorgung durch Bach und zwei eigene Quellen</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-secondary/10 to-secondary/5 border border-secondary/20">
                    <Fish className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">Naturnahe Aquakultur</h4>
                      <p className="text-xs text-muted-foreground">Durchströmtes System ohne Kreisläufe oder Chemie</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20">
                    <Leaf className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">Artgerechte Haltung</h4>
                      <p className="text-xs text-muted-foreground">Komplett ohne Medikamente vom Brutfisch an</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/5 border border-primary/20">
                    <Award className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">Premium Futter</h4>
                      <p className="text-xs text-muted-foreground">Bio Mar Futter – proteinreich und nachhaltig</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Center - Creative Collage Layout (4 columns) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-4 relative"
            >
              <div className="relative h-[400px] lg:h-[500px]">
                {/* Background Image - Large detailed trout */}
                <div className="absolute top-8 right-0 w-[70%] h-[75%] overflow-hidden rounded-2xl shadow-2xl transform rotate-2">
                  <img 
                    src="https://vibemedia.space/trout_detailed_8h9i0j1k.png" 
                    alt="Detailed trout background" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/20"></div>
                </div>
                
                {/* Foreground Image - Product presentation (overlapping) */}
                <div className="absolute top-0 left-0 w-[60%] h-[70%] transform -rotate-1 z-10">
                  <div className="relative w-full h-full overflow-hidden rounded-xl shadow-2xl bg-white border-4 border-white">
                    <img 
                      src={productFishImg} 
                      alt="Frische Forellen von der Alpirsbacher Fischzucht" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent"></div>
                  </div>
                </div>
                
                
                {/* Decorative floating elements */}
                <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-primary/20 rounded-full blur-sm transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-1/4 left-1/4 w-6 h-6 bg-secondary/15 rounded-full blur-md"></div>
              </div>
            </motion.div>

            {/* Right Side - Processing & Variants (4 columns) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-4 space-y-6"
            >
              {/* Processing Information */}
              <div className="bg-gradient-to-br from-card/80 to-muted/20 backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-lg">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Frische Verarbeitung</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Direkt nach Bestellung frisch geschlachtet und küchenfertig verpackt – 
                  ohne Zwischenlagerung oder Tiefkühlung.
                </p>
              </div>

              {/* Product Variants */}
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 border border-primary/20 shadow-lg">
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Utensils className="w-5 h-5 text-primary" />
                  Verfügbare Varianten
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: 'Ganze Forelle', desc: 'Küchenfertig' },
                    { name: 'Filet', desc: 'Grätenfrei' },
                    { name: 'Geräuchert', desc: 'Am Stück' },
                    { name: 'Räucherfilet', desc: 'Zart & fein' }
                  ].map((variant, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 rounded-lg bg-white/50">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{variant.name}</p>
                        <p className="text-xs text-muted-foreground">{variant.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/shop"
                    className="w-full inline-flex items-center justify-center px-6 py-4 bg-primary text-primary-foreground rounded-2xl font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/25 group"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Jetzt bestellen
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/fischzucht"
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-secondary/10 text-secondary border border-secondary/20 rounded-2xl font-medium hover:bg-secondary/20 transition-all duration-300 group"
                  >
                    <Fish className="w-4 h-4 mr-2" />
                    Fischzucht entdecken
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Direktvermarktung Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              <span className="text-primary">Direktvermarktung</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Größtmögliche Flexibilität durch zwei komfortable Bezugsmöglichkeiten – 
              ganz wie es für Sie am besten passt.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <ShoppingCart className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-primary font-semibold text-xl">Vor Ort Abholung</span>
                </div>
                
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Der Fisch kann auf Vorbestellung direkt vor Ort abgeholt werden. 
                  Bei der persönlichen Abholung in unserem Hofabholgebäude profitieren 
                  Sie von ergänzenden Produkten wie hochwertigen Fischgewürzen, 
                  ausgewählten Weinen oder weiteren Spezialitäten.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Truck className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-primary font-semibold text-xl">Bequeme Lieferung</span>
                </div>
                
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Über die benutzerfreundliche <span className="font-semibold text-foreground">
                  myfishmeal.de-App</span> oder den Online-Shop lassen sich unsere Produkte 
                  schnell bestellen. Lieferung zu Ihrem Wunschtermin oder per Expressversand 
                  bereits am Folgetag bis spätestens 12 Uhr.
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
                  src={directMarketingHeroImg} 
                  alt="Direktvermarktung" 
                  className="w-full h-[400px] object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Partner Section */}
      <section className="py-20 bg-gradient-to-br from-[rgb(26,61,59)] via-[rgb(16,43,42)] to-[rgb(12,37,36)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Unsere <span style={{ color: 'rgb(181,140,103)' }}>Partner</span>
            </h2>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              Vertrauen Sie auf starke Partnerschaften. Gemeinsam mit ausgewählten Experten 
              bringen wir Ihnen Qualität vom Feinsten direkt nach Hause.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 hover:bg-white/15 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-xl">
                      <div className="text-center space-y-6">
                        <div className="mx-auto w-32 h-32 bg-white rounded-lg p-4 flex items-center justify-center overflow-hidden">
                          <img 
                            src={partner.logo} 
                            alt={partner.name}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center justify-center gap-2 mb-2">
                            <partner.icon className="w-5 h-5" style={{ color: 'rgb(181,140,103)' }} />
                            <span className="text-sm text-white/70 font-medium">
                              {partner.category}
                            </span>
                          </div>
                          <h3 className="font-serif text-xl font-bold text-white">
                            {partner.name}
                          </h3>
                          <p className="text-white/60 text-sm">
                            {partner.location}{partner.since && ` • Seit ${partner.since}`}
                          </p>
                        </div>
                        
                        <div className="pt-4">
                          <span className="text-sm font-medium group-hover:text-white transition-colors duration-300" style={{ color: 'rgb(181,140,103)' }}>
                            Mehr erfahren →
                          </span>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  
                  <DialogContent className="max-w-2xl bg-card border-border">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-3 text-2xl">
                        <partner.icon className="w-6 h-6 text-primary" />
                        {partner.name}
                      </DialogTitle>
                    </DialogHeader>
                    
                    <div className="space-y-6">
                      <div className="flex items-center justify-center p-6 bg-muted rounded-lg">
                        <img 
                          src={partner.logo} 
                          alt={partner.name}
                          className="max-w-48 max-h-24 object-contain"
                        />
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                            {partner.category}
                          </span>
                          <span className="text-muted-foreground text-sm">
                            {partner.location}{partner.since && ` • Seit ${partner.since}`}
                          </span>
                        </div>
                        
                        <p className="text-muted-foreground leading-relaxed">
                          {partner.description}
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
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
