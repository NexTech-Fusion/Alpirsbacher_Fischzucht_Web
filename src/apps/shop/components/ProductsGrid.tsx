import React from 'react';
import { motion } from 'framer-motion';
import { Package } from 'lucide-react';
import { LocalProduct, ViewMode, CartState } from '../types';
import { ProductCard } from './ProductCard';

interface ProductsGridProps {
  loading: boolean;
  filteredProducts: LocalProduct[];
  allProducts: LocalProduct[];
  viewMode: ViewMode;
  cart: CartState;
  onAddToCart: (cartKey: string) => void;
  onRemoveFromCart: (cartKey: string) => void;
  onProductClick: (productId: string) => void;
  shopifyConnected: boolean;
  setShowShopifyConfig: (show: boolean) => void;
  clearFilters: () => void;
}

export const ProductsGrid: React.FC<ProductsGridProps> = ({
  loading,
  filteredProducts,
  allProducts,
  viewMode,
  cart,
  onAddToCart,
  onRemoveFromCart,
  onProductClick,
  shopifyConnected,
  setShowShopifyConfig,
  clearFilters
}) => {
  return (
    <section className="py-12 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Products Grid/List */}
        {loading ? (
          <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg border overflow-hidden">
                <div className="aspect-square bg-gray-200 animate-pulse"></div>
                <div className="p-6 space-y-3">
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-20 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={`grid gap-8 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                viewMode={viewMode}
                cart={cart}
                onAddToCart={onAddToCart}
                onRemoveFromCart={onRemoveFromCart}
                onProductClick={onProductClick}
              />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            {allProducts.length === 0 ? (
              <>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Keine Produkte verfügbar</h3>
                <p className="text-gray-500 mb-6">
                  {!shopifyConnected
                    ? 'Shopify-Verbindung erforderlich um Produkte zu laden'
                    : 'Keine Produkte im Shop gefunden'
                  }
                </p>
                {!shopifyConnected && (
                  <button
                    onClick={() => setShowShopifyConfig(true)}
                    className="px-6 py-3 rounded-xl font-semibold text-white transition-colors"
                    style={{ backgroundColor: 'rgb(181, 140, 103)' }}
                  >
                    Shopify konfigurieren
                  </button>
                )}
              </>
            ) : (
              <>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Keine Produkte gefunden</h3>
                <p className="text-gray-500 mb-6">
                  Versuchen Sie andere Suchbegriffe oder Filter
                </p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-3 rounded-xl font-semibold text-white transition-colors"
                  style={{ backgroundColor: 'rgb(181, 140, 103)' }}
                >
                  Filter zurücksetzen
                </button>
              </>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}; 