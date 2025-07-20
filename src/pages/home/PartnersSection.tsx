import React from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { partnersData } from '@/data/partners';

export const PartnersSection: React.FC = () => {
  return (
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
          {partnersData.map((partner, index) => (
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
                    <div className="flex items-center justify-center p-6 bg-white rounded-lg">
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
  );
}; 