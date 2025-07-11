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
}

export interface CartItem {
  productId: string;
  quantity: number;
  product: Product;
} 