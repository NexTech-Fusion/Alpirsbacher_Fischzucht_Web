import { Product } from '@/types/product';

export interface LocalProduct extends Product {
  unit: string;
  rating: number;
  inStock: boolean;
}

export type ViewMode = 'grid' | 'list';
export type SortOption = 'name' | 'price-low' | 'price-high' | 'rating' | 'category';

export interface CartState {
  [key: string]: number;
}

export interface ShopifyCredentials {
  shopDomain: string;
  storefrontToken: string;
}

export interface CategoryPriority {
  [key: string]: number;
}

export const categoryPriority: CategoryPriority = {
  'Fischprodukte frisch und geräuchert': 1,
  'Grillfischprodukte mariniert': 2,
  'Gewürzprodukte': 3,
  'Weinprodukte': 4,
  'Zubehörprodukte': 5
}; 