import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { useHeroCarousel } from '@/hooks/useHeroCarousel';
import { heroImagesData } from '@/data/heroImages';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

export const HeroSection: React.FC = () => {
  const { activeSlide, handleSlideChange } = useHeroCarousel();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Preload the first (LCP) image for better performance */}
      <link rel="preload" as="image" href={heroImagesData[0]?.url} />
      
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
                <a href="/shop" target="_blank" rel="noopener noreferrer">
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
                </a>
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
                  onClick={scrollToContact}
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
              onSlideChange={(swiper) => handleSlideChange(swiper.realIndex)}
              className="w-full h-full"
            >
              {heroImagesData.map((image, index) => (
                <SwiperSlide key={index}>
                  <motion.div 
                    className="w-full h-full relative overflow-hidden"
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ 
                      duration: 1.5,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                  >
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover object-center"
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding={index === 0 ? "sync" : "async"}
                      fetchPriority={index === 0 ? "high" : "low"}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      style={{
                        contentVisibility: index === 0 ? 'visible' : 'auto',
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/30"></div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Vertical Dot Indicators */}
            <div className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 flex flex-col gap-3">
              {heroImagesData.map((_, index) => (
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
    </>
  );
}; 