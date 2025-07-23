import blackForestDustImg from '@/assets/black_forest_dust.png';
import gourmetImg from '@/assets/gourmet.png';
import fishesImg from '@/assets/forellen.jpg';
import forelleCookedImg from '@/assets/forelle_cooked.jpg';

export interface HeroImage {
  url: string;
  alt: string;
}

export const heroImagesData: HeroImage[] = [
  {
    url: blackForestDustImg,
    alt: 'Schwarzwald Landschaft'
  },
  {
    url: gourmetImg,
    alt: 'Gourmet Spezialitäten'
  },
  {
    url: fishesImg,
    alt: 'Frische Fische'
  },
  {
    url: forelleCookedImg,
    alt: 'Zubereitete Forelle'
  }
]; 