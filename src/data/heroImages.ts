import blackForestDustImg from '@/assets/black_forest_dust.webp';
import gourmetImg from '@/assets/gourmet.webp';
import fishesImg from '@/assets/forellen.webp';
import forelleCookedImg from '@/assets/forelle_cooked.webp';

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