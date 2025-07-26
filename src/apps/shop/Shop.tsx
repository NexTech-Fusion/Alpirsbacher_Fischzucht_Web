import React, { useState, useEffect } from 'react';
import ShopLayout from './ShopLayout';
import { LocalProduct, ShopifyCredentials } from './types';
import { shopifyService } from '@/lib/shopify';
import ProductDetailModal from '@/components/ProductDetailModal';
import { useToast } from '@/hooks/use-toast';

// Extracted components
import { ShopHero } from './components/ShopHero';
import { SearchAndFilters } from './components/SearchAndFilters';
import { ProductsGrid } from './components/ProductsGrid';
import { FloatingCartButton } from './components/FloatingCartButton';
import { CartSidebar } from './components/CartSidebar';
import { ShopifyConfigModal } from './components/ShopifyConfigModal';

// Extracted hooks
import { useCart } from './hooks/useCart';
import { useProductFilters } from './hooks/useProductFilters';

const Shop = () => {
  // State management
  const [products, setProducts] = useState<LocalProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCart, setShowCart] = useState(false);

  // Product detail modal state
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [showProductModal, setShowProductModal] = useState(false);

  // Shopify integration
  const [shopifyConnected, setShopifyConnected] = useState(false);
  const [showShopifyConfig, setShowShopifyConfig] = useState(false);
  const [shopifyCredentials, setShopifyCredentials] = useState<ShopifyCredentials>({
    shopDomain: 'fgrm5g-x8',
    storefrontToken: '46a26b4da210d901626ba1f855d1e407'
  });

  // Checkout state
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);
  const [isRedirecting, setIsRedirecting] = useState(false);

  // Toast hook for notifications
  const { toast } = useToast();

  // Custom hooks
  const cart = useCart();
  const filters = useProductFilters(products);

  // Load products on component mount
  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    setLoading(true);

    // Auto-save credentials if not already saved
    if (!shopifyService.hasCredentials() && shopifyCredentials.shopDomain && shopifyCredentials.storefrontToken) {
      shopifyService.saveCredentials(shopifyCredentials);
    }

    setShopifyConnected(shopifyService.hasCredentials());

    if (shopifyService.hasCredentials()) {
      try {
        // Test connection first
        const connected = await shopifyService.testConnection();
        if (connected) {
          const shopifyProducts = await shopifyService.fetchProducts();
          const convertedProducts: LocalProduct[] = shopifyProducts.map(product => ({
            ...product,
            unit: product.weight || 'Stück',
            rating: 5,
            inStock: true
          }));
          setProducts(convertedProducts);
          setShopifyConnected(true);
          console.log(`✅ Shopify connected! Loaded ${convertedProducts.length} products`);
        } else {
          throw new Error('Connection test failed');
        }
      } catch (error) {
        console.error('Failed to load Shopify products:', error);
        setProducts([]);
        setShopifyConnected(false);
        console.log('⚠️ Failed to load products - Shopify connection required');
      }
    } else {
      setProducts([]);
      console.log('📦 No Shopify connection - Please configure Shopify credentials');
    }
    setLoading(false);
  };

  const connectToShopify = async () => {
    if (!shopifyCredentials.shopDomain || !shopifyCredentials.storefrontToken) {
      alert('Bitte füllen Sie alle Felder aus');
      return;
    }

    shopifyService.saveCredentials(shopifyCredentials);

    const connected = await shopifyService.testConnection();
    if (connected) {
      setShopifyConnected(true);
      setShowShopifyConfig(false);
      loadProducts();
    } else {
      alert('Verbindung zu Shopify fehlgeschlagen. Bitte prüfen Sie Ihre Eingaben.');
      shopifyService.clearCredentials();
    }
  };

  const disconnectShopify = () => {
    shopifyService.clearCredentials();
    setShopifyConnected(false);
    setProducts([]);
  };

  // Checkout function
  const handleCheckout = async () => {
    if (!shopifyConnected) {
      toast({
        title: "Shopify-Verbindung erforderlich",
        description: "Bitte konfigurieren Sie Ihre Shopify-Verbindung für den Checkout.",
        variant: "destructive",
      });
      setShowShopifyConfig(true);
      return;
    }

    if (Object.keys(cart.cart).length === 0) {
      toast({
        title: "Warenkorb ist leer",
        description: "Fügen Sie Produkte zu Ihrem Warenkorb hinzu, bevor Sie zur Kasse gehen.",
        variant: "destructive",
      });
      return;
    }

    setCheckoutLoading(true);
    setCheckoutError(null);
    setIsRedirecting(false);

    try {
      console.log('Starting checkout process...', { cart: cart.cart, products: products.length });

      // Process checkout and get redirect URL
      const checkoutUrl = await shopifyService.processCheckout(cart.cart, products);

      if (!checkoutUrl) {
        throw new Error('Checkout-URL konnte nicht erstellt werden');
      }

      console.log('Checkout URL created:', checkoutUrl);

      // Switch to redirect state instead of showing success toast
      setCheckoutLoading(false);
      setIsRedirecting(true);
      setCheckoutError(null);
      window.location.href = checkoutUrl;

      await new Promise(resolve => setTimeout(resolve, 3000));

    } catch (error) {
      console.error('Checkout failed:', error);
      const errorMessage = error instanceof Error
        ? error.message
        : 'Checkout fehlgeschlagen. Bitte versuchen Sie es erneut.';

      setCheckoutError(errorMessage);
      setCheckoutLoading(false);
      setIsRedirecting(false);

      toast({
        title: "Checkout fehlgeschlagen",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  // Product detail modal functions
  const openProductModal = (productId: string) => {
    setSelectedProductId(productId);
    setShowProductModal(true);
  };

  const closeProductModal = () => {
    setShowProductModal(false);
    setSelectedProductId(null);
  };

  return (
    <ShopLayout>
      {/* Hero Section */}
      <ShopHero />

      {/* Search & Filter Section */}
      <SearchAndFilters
        viewMode={filters.viewMode}
        setViewMode={filters.setViewMode}
        searchTerm={filters.searchTerm}
        setSearchTerm={filters.setSearchTerm}
        selectedCategory={filters.selectedCategory}
        setSelectedCategory={filters.setSelectedCategory}
        sortBy={filters.sortBy}
        setSortBy={filters.setSortBy}
        categories={filters.getCategories()}
        loading={loading}
        filteredProductsLength={filters.filteredProducts.length}
        totalProductsLength={products.length}
        hasActiveFilters={filters.hasActiveFilters()}
        clearFilters={filters.clearFilters}
        shopifyConnected={shopifyConnected}
        setShowShopifyConfig={setShowShopifyConfig}
      />

      {/* Products Section */}
      <ProductsGrid
        loading={loading}
        filteredProducts={filters.filteredProducts}
        allProducts={products}
        viewMode={filters.viewMode}
        cart={cart.cart}
        onAddToCart={cart.addToCart}
        onRemoveFromCart={cart.removeFromCart}
        onProductClick={openProductModal}
        shopifyConnected={shopifyConnected}
        setShowShopifyConfig={setShowShopifyConfig}
        clearFilters={filters.clearFilters}
      />

      {/* Floating Cart Button */}
      <FloatingCartButton
        totalItems={cart.getTotalItems()}
        onClick={() => setShowCart(true)}
      />

      {/* Cart Sidebar */}
      <CartSidebar
        showCart={showCart}
        setShowCart={setShowCart}
        cart={cart.cart}
        hasCartItems={cart.hasCartItems()}
        getTotalItems={cart.getTotalItems}
        getTotalPrice={cart.getTotalPrice}
        getProductByCartKey={cart.getProductByCartKey}
        onAddToCart={cart.addToCart}
        onRemoveFromCart={cart.removeFromCart}
        clearCart={cart.clearCart}
        handleCheckout={handleCheckout}
        checkoutLoading={checkoutLoading}
        isRedirecting={isRedirecting}
        checkoutError={checkoutError}
        setCheckoutError={setCheckoutError}
        shopifyConnected={shopifyConnected}
        setShowShopifyConfig={setShowShopifyConfig}
        products={products}
      />

      {/* Shopify Configuration Modal */}
      <ShopifyConfigModal
        showShopifyConfig={showShopifyConfig}
        setShowShopifyConfig={setShowShopifyConfig}
        shopifyCredentials={shopifyCredentials}
        setShopifyCredentials={setShopifyCredentials}
        shopifyConnected={shopifyConnected}
        connectToShopify={connectToShopify}
        disconnectShopify={disconnectShopify}
      />

      {/* Product Detail Modal */}
      {selectedProductId && (
        <ProductDetailModal
          isOpen={showProductModal}
          onClose={closeProductModal}
          productId={selectedProductId}
          cart={cart.cart}
          onAddToCart={cart.addToCart}
          onRemoveFromCart={cart.removeFromCart}
        />
      )}
    </ShopLayout>
  );
};

export default Shop;