import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useContactForm } from '@/hooks/useContactForm';

export const ContactForm: React.FC = () => {
  const { formData, isSubmitting, handleInputChange, handleSubmit } = useContactForm();

  return (
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
            disabled={isSubmitting}
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
            disabled={isSubmitting}
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
            disabled={isSubmitting}
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3"
        >
          {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
        </Button>
      </form>
    </motion.div>
  );
}; 