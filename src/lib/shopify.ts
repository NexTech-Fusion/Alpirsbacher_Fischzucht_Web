import { Product } from '@/types/product';

// Utility functions for handling Shopify Global IDs (GIDs)
export const extractIdFromGid = (gid: string): string => {
  // Extract numeric ID from GID format: gid://shopify/Product/123456 -> 123456
  const parts = gid.split('/');
  return parts[parts.length - 1];
};

export const createGid = (type: string, id: string): string => {
  // Create GID from numeric ID: 123456 -> gid://shopify/Product/123456
  return `gid://shopify/${type}/${id}`;
};

interface StorefrontCredentials {
  shopDomain: string;
  storefrontToken: string;  // Different from Admin API token
}

interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  body_html: string;
  vendor: string;
  product_type: string;
  created_at: string;
  updated_at: string;
  published_at: string;
  template_suffix: string;
  status: string;
  published_scope: string;
  tags: string;
  admin_graphql_api_id: string;
  variants: ShopifyVariant[];
  options: ShopifyOption[];
  images: ShopifyImage[];
  image: ShopifyImage;
}

interface ShopifyVariant {
  id: string;
  product_id: string;
  title: string;
  price: string;
  sku: string;
  position: number;
  inventory_policy: string;
  compare_at_price: string;
  fulfillment_service: string;
  inventory_management: string;
  option1: string;
  option2: string;
  option3: string;
  created_at: string;
  updated_at: string;
  taxable: boolean;
  barcode: string;
  grams: number;
  image_id: string;
  weight: number;
  weight_unit: string;
  inventory_item_id: string;
  inventory_quantity: number;
  old_inventory_quantity: number;
  requires_shipping: boolean;
  admin_graphql_api_id: string;
}

interface ShopifyOption {
  id: string;
  product_id: string;
  name: string;
  position: number;
  values: string[];
}

interface ShopifyImage {
  id: string;
  product_id: string;
  position: number;
  created_at: string;
  updated_at: string;
  alt: string;
  width: number;
  height: number;
  src: string;
  variant_ids: string[];
  admin_graphql_api_id: string;
}

interface ShopifyProductsResponse {
  products: ShopifyProduct[];
}

class ShopifyService {
  private getCredentials(): StorefrontCredentials | null {
    const stored = localStorage.getItem('shopify_credentials');
    if (!stored) return null;
    return JSON.parse(stored);
  }

  public saveCredentials(credentials: StorefrontCredentials): void {
    localStorage.setItem('shopify_credentials', JSON.stringify(credentials));
  }

  public clearCredentials(): void {
    localStorage.removeItem('shopify_credentials');
    localStorage.removeItem('shopify_products_cache');
  }

  public hasCredentials(): boolean {
    return !!this.getCredentials();
  }

  private async makeStorefrontRequest(query: string, variables: any = {}): Promise<any> {
    const credentials = this.getCredentials();
    if (!credentials) {
      throw new Error('No Shopify credentials found. Please configure your store settings.');
    }

    const url = `https://${credentials.shopDomain}.myshopify.com/api/2023-10/graphql.json`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'X-Shopify-Storefront-Access-Token': credentials.storefrontToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, variables }),
    });

    if (!response.ok) {
      throw new Error(`Shopify Storefront API error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  public async testConnection(): Promise<boolean> {
    try {
      // Test with a simple query to get shop information
      const query = `
        query {
          shop {
            name
          }
        }
      `;
      
      await this.makeStorefrontRequest(query);
      return true;
    } catch (error) {
      console.error('Shopify connection test failed:', error);
      return false;
    }
  }

  public async fetchProducts(limit: number = 50): Promise<Product[]> {
    try {
      const query = `
        query getProducts($first: Int!) {
          products(first: $first) {
            edges {
              node {
                id
                title
                description
                productType
                variants(first: 1) {
                  edges {
                    node {
                      price {
                        amount
                      }
                      weight
                      weightUnit
                    }
                  }
                }
                images(first: 1) {
                  edges {
                    node {
                      url
                      altText
                    }
                  }
                }
              }
            }
          }
        }
      `;

      const response = await this.makeStorefrontRequest(query, { first: limit });
      
      const products: Product[] = response.data.products.edges.map((edge: any) => {
        const product = edge.node;
        const variant = product.variants.edges[0]?.node;
        const image = product.images.edges[0]?.node;
        
        return {
          id: extractIdFromGid(product.id), // Use numeric ID for routing
          name: product.title,
          price: parseFloat(variant?.price.amount || '0'),
          image: image?.url || 'https://via.placeholder.com/400x300?text=No+Image',
          description: product.description || 'No description available',
          category: product.productType || 'General',
          weight: variant?.weight ? `${variant.weight}${variant.weightUnit}` : 'N/A',
          shopifyGid: product.id // Store the full GID for API calls
        };
      });

      // Cache products for offline access
      localStorage.setItem('shopify_products_cache', JSON.stringify(products));
      localStorage.setItem('shopify_products_cache_time', Date.now().toString());

      return products;
    } catch (error) {
      console.error('Failed to fetch Shopify products:', error);
      
      // Try to use cached products
      const cached = localStorage.getItem('shopify_products_cache');
      if (cached) {
        console.log('Using cached Shopify products');
        return JSON.parse(cached);
      }
      
      throw error;
    }
  }

  public getCachedProducts(): Product[] | null {
    const cached = localStorage.getItem('shopify_products_cache');
    if (!cached) return null;
    return JSON.parse(cached);
  }

  public async getProduct(productId: string): Promise<Product | null> {
    try {
      // Check if the provided ID is numeric (from URL) or already a GID
      const gid = productId.startsWith('gid://') ? productId : createGid('Product', productId);
      
      const query = `
        query getProduct($id: ID!) {
          product(id: $id) {
            id
            title
            description
            productType
            variants(first: 1) {
              edges {
                node {
                  price {
                    amount
                  }
                  weight
                  weightUnit
                }
              }
            }
            images(first: 1) {
              edges {
                node {
                  url
                  altText
                }
              }
            }
          }
        }
      `;

      const response = await this.makeStorefrontRequest(query, { id: gid });
      
      if (!response.data.product) {
        return null;
      }

      const product = response.data.product;
      const variant = product.variants.edges[0]?.node;
      const image = product.images.edges[0]?.node;
      
      return {
        id: extractIdFromGid(product.id), // Use numeric ID for routing
        name: product.title,
        price: parseFloat(variant?.price.amount || '0'),
        image: image?.url || 'https://via.placeholder.com/400x300?text=No+Image',
        description: product.description || 'No description available',
        category: product.productType || 'General',
        weight: variant?.weight ? `${variant.weight}${variant.weightUnit}` : 'N/A',
        shopifyGid: product.id // Store the full GID for API calls
      };
    } catch (error) {
      console.error('Failed to fetch Shopify product:', error);
      return null;
    }
  }
}

export const shopifyService = new ShopifyService();
export type { StorefrontCredentials };