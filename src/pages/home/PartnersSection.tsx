import React from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { partnersData } from '@/data/partners';

export const PartnersSection: React.FC = () => {
  return (
    <section 
      className="py-20 bg-gradient-to-br from-[rgb(26,61,59)] via-[rgb(16,43,42)] to-[rgb(12,37,36)] relative overflow-hidden"
      aria-labelledby="partners-heading"
      role="region"
    >
      {/* Dotted Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #ffffff 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 
            id="partners-heading"
            className="font-serif text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Unsere <span style={{ color: 'rgb(181,140,103)' }}>Partner</span>
          </h2>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            Vertrauen Sie auf starke Partnerschaften. Gemeinsam mit ausgewählten Experten 
            bringen wir Ihnen Qualität vom Feinsten direkt nach Hause.
          </p>
        </motion.div>

        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          role="list"
          aria-label="Unsere Partnerunternehmen"
        >
          {partnersData.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
              role="listitem"
            >
              <Dialog>
                <DialogTrigger asChild>
                  <button 
                    className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 hover:bg-white/15 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-transparent"
                    aria-label={`Mehr über ${partner.name}, ${partner.category} aus ${partner.location} erfahren`}
                    aria-describedby={`partner-${partner.id}-description`}
                  >
                    <div className="text-center space-y-6">
                      <div 
                        className="mx-auto w-32 h-32 bg-white rounded-lg p-4 flex items-center justify-center overflow-hidden"
                        role="img"
                        aria-label={`Logo von ${partner.name}`}
                      >
                        <img 
                          src={partner.logo} 
                          alt={`${partner.name} Logo - ${partner.category}`}
                          className="max-w-full max-h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <partner.icon 
                            className="w-5 h-5" 
                            style={{ color: 'rgb(181,140,103)' }}
                            aria-hidden="true"
                          />
                          <span className="text-sm text-white/70 font-medium">
                            {partner.category}
                          </span>
                        </div>
                        <h3 className="font-serif text-xl font-bold text-white">
                          {partner.name}
                        </h3>
                        <p 
                          className="text-white/60 text-sm"
                          id={`partner-${partner.id}-description`}
                        >
                          {partner.location}{partner.since && ` • Seit ${partner.since}`}
                        </p>
                      </div>
                      
                      <div className="pt-4">
                        <span 
                          className="text-sm font-medium group-hover:text-white transition-colors duration-300" 
                          style={{ color: 'rgb(181,140,103)' }}
                          aria-hidden="true"
                        >
                          Mehr erfahren →
                        </span>
                      </div>
                    </div>
                  </button>
                </DialogTrigger>
                
                <DialogContent 
                  className="max-w-2xl bg-card border-border"
                  aria-describedby={`partner-${partner.id}-modal-description`}
                >
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-3 text-2xl">
                      <partner.icon 
                        className="w-6 h-6 text-primary" 
                        aria-hidden="true"
                      />
                      {partner.name}
                    </DialogTitle>
                  </DialogHeader>
                  
                  <div className="space-y-6">
                    <div 
                      className="flex items-center justify-center p-6 bg-white rounded-lg"
                      role="img"
                      aria-label={`Detailansicht des ${partner.name} Logos`}
                    >
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} - ${partner.category} aus ${partner.location}`}
                        className="max-w-48 max-h-24 object-contain"
                        loading="lazy"
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
                      
                      <p 
                        className="text-muted-foreground leading-relaxed"
                        id={`partner-${partner.id}-modal-description`}
                      >
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
  );
}; 