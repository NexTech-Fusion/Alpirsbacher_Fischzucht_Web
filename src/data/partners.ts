import { LucideIcon, Truck, Utensils, Wine } from 'lucide-react';
import goExpressLogo from '@/assets/go-express-logo.png';
import culinaryLogo from '@/assets/culinarico-logo.avif';
import heinrichLogo from '@/assets/heinrich-weingut-logo.png';

export interface Partner {
  id: string;
  name: string;
  logo: string;
  icon: LucideIcon;
  category: string;
  description: string;
  location: string;
  since?: string;
}

export const partnersData: Partner[] = [
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
    name: 'culinarico',
    logo: culinaryLogo,
    icon: Utensils,
    category: 'Gewürzlieferant',
    description: 'Für unsere Fischspezialitäten vertrauen wir auf die erlesenen Gewürzmischungen von culinarico aus Karlsruhe. Ob klassisch, mediterran oder exotisch – hier findet sich das perfekte Aroma für jeden Geschmack. Qualität, die man schmeckt!',
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