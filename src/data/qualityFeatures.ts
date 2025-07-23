import { LucideIcon, Droplets, Fish, Leaf, Award } from 'lucide-react';

export interface QualityFeature {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  borderColor: string;
  iconColor: string;
}

export const qualityFeaturesData: QualityFeature[] = [
  {
    icon: Droplets,
    title: 'Quellfrisches Wasser',
    description: 'Direktversorgung durch Bach und zwei eigene Quellen',
    gradient: 'from-primary/10 to-primary/5',
    borderColor: 'border-primary/20',
    iconColor: 'text-primary'
  },
  {
    icon: Fish,
    title: 'Naturnahe Aquakultur',
    description: 'Durchströmtes System ohne Kreisläufe oder Chemie',
    gradient: 'from-secondary/10 to-secondary/5',
    borderColor: 'border-secondary/20',
    iconColor: 'text-primary'
  },
  {
    icon: Leaf,
    title: 'Artgerechte Haltung',
    description: 'Komplett ohne Medikamente vom Brutfisch an',
    gradient: 'from-accent/10 to-accent/5',
    borderColor: 'border-accent/20',
    iconColor: 'text-accent'
  },
  {
    icon: Award,
    title: 'Premium Futter',
    description: 'Bio Mar Futter – proteinreich und nachhaltig',
    gradient: 'from-secondary/10 to-secondary/5',
    borderColor: 'border-primary/20',
    iconColor: 'text-primary'
  }
]; 