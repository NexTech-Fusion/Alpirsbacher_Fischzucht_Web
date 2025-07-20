import React from 'react';
import { motion } from 'framer-motion';
import { qualityFeaturesData } from '@/data/qualityFeatures';

export const QualityFeatures: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="lg:col-span-4 space-y-6"
    >
      <div className="space-y-4">
        <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Premium Qualität</h3>
        
        <div className="space-y-4">
          {qualityFeaturesData.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r ${feature.gradient} border ${feature.borderColor}`}
              >
                <IconComponent className={`w-6 h-6 ${feature.iconColor} mt-1 flex-shrink-0`} />
                <div>
                  <h4 className="font-semibold text-foreground text-sm">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}; 