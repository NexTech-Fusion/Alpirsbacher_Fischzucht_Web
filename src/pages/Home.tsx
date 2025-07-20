import React from 'react';
import Layout from '@/components/Layout';
import { HeroSection } from './home/HeroSection';
import { ProductShowcase } from './home/ProductShowcase';
import { DirectMarketing } from './home/DirectMarketing';
import { PartnersSection } from './home/PartnersSection';
import { CTASection } from './home/CTASection';
import { ContactSection } from './home/ContactSection';

/**
 * Home Page Component
 * 
 * Refactored from Index.tsx (791 lines) into modular sections.
 * Each section is a separate component for better maintainability,
 * testing, and reusability.
 */
const Home: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      <ProductShowcase />
      <DirectMarketing />
      <PartnersSection />
      <CTASection />
      <ContactSection />
    </Layout>
  );
};

export default Home; 