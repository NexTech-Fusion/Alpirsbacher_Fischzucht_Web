export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  weight?: string;
  unit?: string;
  rating?: number;
  inStock?: boolean;
  shopifyGid?: string; // For Shopify products
  variantGid?: string; // For Shopify variant tracking
  sku?: string;
  quantityAvailable?: number;
  tags?: string[];
  collections?: Collection[];
  variantCount?: number; // Number of available variants
  priceRange?: { min: number; max: number }; // Price range for variants
}

export interface Collection {
  id: string;
  title: string;
  handle: string;
}

export interface CartItem {
  productId: string;
  quantity: number;
  product: Product;
} 