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

interface CartLineItem {
  merchandiseId: string;
  quantity: number;
}

interface ShopifyCart {
  id: string;
  checkoutUrl: string;
  cost: {
    totalAmount: {
      amount: string;
      currencyCode: string;
    };
  };
  lines: {
    edges: Array<{
      node: {
        id: string;
        quantity: number;
        merchandise: {
          id: string;
          title: string;
          price: {
            amount: string;
          };
        };
      };
    }>;
  };
}

class ShopifyService {
  // Generic collection handles that should not be used as primary categories
  private readonly genericCollectionHandles = [
    'fischangebot',
    'produktubersicht', 
    'all-products', 
    'frontpage',
    'home',
    'alle-produkte'
  ];

  private selectPrimaryCategory(collections: any[], productType?: string): string {
    if (!collections || collections.length === 0) {
      return productType || 'General';
    }

    // Filter out generic collections
    const specificCollections = collections.filter((col: any) => 
      !this.genericCollectionHandles.includes(col.node.handle.toLowerCase())
    );
    
    // Use the most specific collection as category, fallback to first collection or productType
    const primaryCollection = specificCollections[0]?.node || collections[0]?.node;
    return primaryCollection?.title || productType || 'General';
  }

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
                tags
                collections(first: 10) {
                  edges {
                    node {
                      id
                      title
                      handle
                    }
                  }
                }
                variants(first: 10) {
                  edges {
                    node {
                      id
                      title
                      price {
                        amount
                      }
                      weight
                      weightUnit
                      availableForSale
                      quantityAvailable
                      sku
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
        const image = product.images.edges[0]?.node;
        const collections = product.collections?.edges || [];
        const category = this.selectPrimaryCategory(collections, product.productType);
        
        // Get all variants and calculate price range
        const variants = product.variants.edges.map((v: any) => v.node);
        const prices = variants.map((v: any) => parseFloat(v.price.amount || '0'));
        const minPrice = Math.min(...prices);
        const maxPrice = Math.max(...prices);
        
        // Find the first available variant or default to first variant
        const availableVariant = variants.find((v: any) => v.availableForSale && v.quantityAvailable > 0) || variants[0];
        
        return {
          id: extractIdFromGid(product.id), // Use base product ID
          name: product.title, // Use base product title without variant suffix
          price: availableVariant ? parseFloat(availableVariant.price.amount || '0') : minPrice,
          image: image?.url || 'https://via.placeholder.com/400x300?text=No+Image',
          description: product.description || 'No description available',
          category: category,
          weight: availableVariant?.weight ? `${availableVariant.weight}${availableVariant.weightUnit}` : 'N/A',
          shopifyGid: product.id,
          variantGid: availableVariant?.id,
          sku: availableVariant?.sku || '',
          inStock: variants.some((v: any) => v.availableForSale && v.quantityAvailable > 0),
          quantityAvailable: variants.reduce((total: number, v: any) => total + (v.quantityAvailable || 0), 0),
          tags: product.tags || [],
          collections: collections.map((col: any) => ({
            id: extractIdFromGid(col.node.id),
            title: col.node.title,
            handle: col.node.handle
          })),
          variantCount: variants.length,
          priceRange: minPrice !== maxPrice ? { min: minPrice, max: maxPrice } : undefined
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
            tags
            collections(first: 10) {
              edges {
                node {
                  id
                  title
                  handle
                }
              }
            }
            variants(first: 10) {
              edges {
                node {
                  id
                  title
                  price {
                    amount
                  }
                  weight
                  weightUnit
                  availableForSale
                  quantityAvailable
                  sku
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
      const variant = product.variants.edges[0]?.node; // Get first variant for single product view
      const image = product.images.edges[0]?.node;
      const collections = product.collections?.edges || [];
      
      // Use smart category selection
      const category = this.selectPrimaryCategory(collections, product.productType);
      
      return {
        id: extractIdFromGid(product.id), // Use numeric ID for routing
        name: variant?.title === 'Default Title' 
          ? product.title 
          : `${product.title} - ${variant?.title}`,
        price: parseFloat(variant?.price.amount || '0'),
        image: image?.url || 'https://via.placeholder.com/400x300?text=No+Image',
        description: product.description || 'No description available',
        category: category,
        weight: variant?.weight ? `${variant.weight}${variant.weightUnit}` : 'N/A',
        shopifyGid: product.id, // Store the full GID for API calls
        variantGid: variant?.id,
        sku: variant?.sku || '',
        inStock: variant?.availableForSale && (variant?.quantityAvailable > 0),
        quantityAvailable: variant?.quantityAvailable || 0,
        tags: product.tags || [],
        collections: collections.map((col: any) => ({
          id: extractIdFromGid(col.node.id),
          title: col.node.title,
          handle: col.node.handle
        }))
      };
    } catch (error) {
      console.error('Failed to fetch Shopify product:', error);
      return null;
    }
  }

  public async getProductWithAllVariants(productId: string): Promise<{
    product: Product;
    variants: Array<{
      id: string;
      title: string;
      price: number;
      weight?: string;
      sku?: string;
      quantityAvailable: number;
      availableForSale: boolean;
      variantGid: string;
    }>;
  } | null> {
    try {
      // Check if the provided ID is numeric (from URL) or already a GID
      const gid = productId.startsWith('gid://') ? productId : createGid('Product', productId);
      
      const query = `
        query getProductWithVariants($id: ID!) {
          product(id: $id) {
            id
            title
            description
            productType
            tags
            collections(first: 10) {
              edges {
                node {
                  id
                  title
                  handle
                }
              }
            }
            variants(first: 20) {
              edges {
                node {
                  id
                  title
                  price {
                    amount
                  }
                  weight
                  weightUnit
                  availableForSale
                  quantityAvailable
                  sku
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
      const image = product.images.edges[0]?.node;
      const collections = product.collections?.edges || [];
      
      // Use smart category selection
      const category = this.selectPrimaryCategory(collections, product.productType);
      
      // Create base product info
      const baseProduct: Product = {
        id: extractIdFromGid(product.id),
        name: product.title,
        price: 0, // Will be set by selected variant
        image: image?.url || 'https://via.placeholder.com/400x300?text=No+Image',
        description: product.description || 'No description available',
        category: category,
        shopifyGid: product.id,
        tags: product.tags || [],
        collections: collections.map((col: any) => ({
          id: extractIdFromGid(col.node.id),
          title: col.node.title,
          handle: col.node.handle
        }))
      };

      // Extract variants
      const variants = product.variants.edges.map((edge: any) => {
        const variant = edge.node;
        return {
          id: variant.id,
          title: variant.title,
          price: parseFloat(variant.price.amount || '0'),
          weight: variant.weight ? `${variant.weight}${variant.weightUnit}` : undefined,
          sku: variant.sku || undefined,
          quantityAvailable: variant.quantityAvailable || 0,
          availableForSale: variant.availableForSale || false,
          variantGid: variant.id
        };
      });

      return {
        product: baseProduct,
        variants: variants
      };
    } catch (error) {
      console.error('Failed to fetch Shopify product with variants:', error);
      return null;
    }
  }

  public async fetchCollections(limit: number = 50): Promise<any[]> {
    try {
      const query = `
        query getCollections($first: Int!) {
          collections(first: $first) {
            edges {
              node {
                id
                title
                handle
                description
                image {
                  url
                  altText
                }
                products(first: 1) {
                  edges {
                    node {
                      id
                    }
                  }
                }
              }
            }
          }
        }
      `;

      const response = await this.makeStorefrontRequest(query, { first: limit });
      
      return response.data.collections.edges.map((edge: any) => {
        const collection = edge.node;
        return {
          id: extractIdFromGid(collection.id),
          title: collection.title,
          handle: collection.handle,
          description: collection.description || '',
          image: collection.image?.url || '',
          productCount: collection.products.edges.length,
          shopifyGid: collection.id
        };
      });
    } catch (error) {
      console.error('Failed to fetch Shopify collections:', error);
      return [];
    }
  }

  /**
   * Create a new cart with line items
   */
  public async createCart(lineItems: CartLineItem[]): Promise<ShopifyCart | null> {
    try {
      const cartInput = lineItems.map(item => ({
        merchandiseId: item.merchandiseId,
        quantity: item.quantity
      }));

      const query = `
        mutation cartCreate($input: CartInput!) {
          cartCreate(input: $input) {
            cart {
              id
              checkoutUrl
              cost {
                totalAmount {
                  amount
                  currencyCode
                }
              }
              lines(first: 250) {
                edges {
                  node {
                    id
                    quantity
                    merchandise {
                      ... on ProductVariant {
                        id
                        title
                        price {
                          amount
                        }
                      }
                    }
                  }
                }
              }
            }
            userErrors {
              field
              message
            }
          }
        }
      `;

      const variables = {
        input: {
          lines: cartInput,
          note: "Return URL: " + (typeof window !== 'undefined' ? window.location.origin + "/shop.html" : "https://yourdomain.com/shop.html"),
          attributes: [
            {
              key: "return_url",
              value: typeof window !== 'undefined' ? window.location.origin + "/shop.html" : "https://yourdomain.com/shop.html"
            },
            {
              key: "continue_shopping_url", 
              value: typeof window !== 'undefined' ? window.location.origin + "/shop.html" : "https://yourdomain.com/shop.html"
            },
            {
              key: "checkout_return_page",
              value: "shop"
            }
          ]
        }
      };

      const response = await this.makeStorefrontRequest(query, variables);

      if (response.data.cartCreate.userErrors.length > 0) {
        throw new Error(response.data.cartCreate.userErrors[0].message);
      }

      return response.data.cartCreate.cart;
    } catch (error) {
      console.error('Failed to create Shopify cart:', error);
      return null;
    }
  }

  /**
   * Update existing cart with new line items
   */
  public async updateCart(cartId: string, lineItems: CartLineItem[]): Promise<ShopifyCart | null> {
    try {
      const cartInput = lineItems.map(item => ({
        merchandiseId: item.merchandiseId,
        quantity: item.quantity
      }));

      const query = `
        mutation cartLinesReplace($cartId: ID!, $lines: [CartLineInput!]!) {
          cartLinesReplace(cartId: $cartId, lines: $lines) {
            cart {
              id
              checkoutUrl
              cost {
                totalAmount {
                  amount
                  currencyCode
                }
              }
              lines(first: 250) {
                edges {
                  node {
                    id
                    quantity
                    merchandise {
                      ... on ProductVariant {
                        id
                        title
                        price {
                          amount
                        }
                      }
                    }
                  }
                }
              }
            }
            userErrors {
              field
              message
            }
          }
        }
      `;

      const variables = {
        cartId,
        lines: cartInput
      };

      const response = await this.makeStorefrontRequest(query, variables);

      if (response.data.cartLinesReplace.userErrors.length > 0) {
        throw new Error(response.data.cartLinesReplace.userErrors[0].message);
      }

      return response.data.cartLinesReplace.cart;
    } catch (error) {
      console.error('Failed to update Shopify cart:', error);
      return null;
    }
  }

  /**
   * Process checkout - creates cart and redirects to Shopify's hosted checkout
   */
  public async processCheckout(cart: { [key: string]: number }, products: Product[]): Promise<string | null> {
    try {
      // Convert cart to line items
      const lineItems: CartLineItem[] = Object.entries(cart).map(([cartKey, quantity]) => {
        const product = products.find(p => p.variantGid === cartKey || p.id === cartKey);
        if (!product) {
          throw new Error(`Product not found for cart key: ${cartKey}`);
        }
        
        // Use variantGid if available, otherwise create GID from product ID
        const merchandiseId = product.variantGid || createGid('ProductVariant', product.id);
        
        return {
          merchandiseId,
          quantity
        };
      });

      console.log('Creating cart with line items:', lineItems);

      // Create cart
      const shopifyCart = await this.createCart(lineItems);
      
      if (!shopifyCart) {
        throw new Error('Failed to create cart');
      }

      console.log('Cart created successfully:', shopifyCart);

      // Return the checkout URL for redirection
      return shopifyCart.checkoutUrl;
    } catch (error) {
      console.error('Failed to process checkout:', error);
      throw error;
    }
  }

  /**
   * Get cart by ID
   */
  public async getCart(cartId: string): Promise<ShopifyCart | null> {
    try {
      const query = `
        query getCart($id: ID!) {
          cart(id: $id) {
            id
            checkoutUrl
            cost {
              totalAmount {
                amount
                currencyCode
              }
            }
            lines(first: 250) {
              edges {
                node {
                  id
                  quantity
                  merchandise {
                    ... on ProductVariant {
                      id
                      title
                      price {
                        amount
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `;

      const response = await this.makeStorefrontRequest(query, { id: cartId });
      return response.data.cart;
    } catch (error) {
      console.error('Failed to get cart:', error);
      return null;
    }
  }
}

export const shopifyService = new ShopifyService();
export type { StorefrontCredentials, CartLineItem, ShopifyCart };