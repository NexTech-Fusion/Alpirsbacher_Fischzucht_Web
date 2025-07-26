import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, X, Plus, Minus, Truck } from 'lucide-react';
import { LocalProduct, CartState } from '../types';

interface CartSidebarProps {
  showCart: boolean;
  setShowCart: (show: boolean) => void;
  cart: CartState;
  hasCartItems: boolean;
  getTotalItems: () => number;
  getTotalPrice: (products: LocalProduct[]) => number;
  getProductByCartKey: (cartKey: string, products: LocalProduct[]) => LocalProduct | undefined;
  onAddToCart: (cartKey: string) => void;
  onRemoveFromCart: (cartKey: string) => void;
  clearCart: () => void;
  handleCheckout: () => void;
  checkoutLoading: boolean;
  isRedirecting: boolean;
  checkoutError: string | null;
  setCheckoutError: (error: string | null) => void;
  shopifyConnected: boolean;
  setShowShopifyConfig: (show: boolean) => void;
  products: LocalProduct[];
}

export const CartSidebar: React.FC<CartSidebarProps> = ({
  showCart,
  setShowCart,
  cart,
  hasCartItems,
  getTotalItems,
  getTotalPrice,
  getProductByCartKey,
  onAddToCart,
  onRemoveFromCart,
  clearCart,
  handleCheckout,
  checkoutLoading,
  isRedirecting,
  checkoutError,
  setCheckoutError,
  shopifyConnected,
  setShowShopifyConfig,
  products
}) => {
  const totalPrice = getTotalPrice(products);

  return (
    <AnimatePresence>
      {showCart && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={() => setShowCart(false)}
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-100 flex-shrink-0">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <ShoppingCart size={24} />
                  Warenkorb
                </h3>
                <button
                  onClick={() => setShowCart(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 rounded-lg transition-colors hover:bg-gray-100"
                >
                  <X size={20} />
                </button>
              </div>
              {hasCartItems && (
                <div className="flex justify-between items-center mt-2">
                  <p className="text-sm text-gray-500">
                    {getTotalItems()} {getTotalItems() === 1 ? 'Artikel' : 'Artikel'} im Warenkorb
                  </p>
                  <button
                    onClick={clearCart}
                    className="text-xs text-red-600 hover:text-red-800 hover:underline transition-colors"
                  >
                    Warenkorb leeren
                  </button>
                </div>
              )}
            </div>

            {/* Cart Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {!hasCartItems ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingCart size={64} className="text-gray-300 mb-4" />
                  <h4 className="text-lg font-semibold text-gray-600 mb-2">Ihr Warenkorb ist leer</h4>
                  <p className="text-gray-500 mb-6">Entdecken Sie unsere frischen Forellen-Spezialitäten</p>
                  <button
                    onClick={() => setShowCart(false)}
                    className="px-6 py-3 rounded-xl font-semibold text-white transition-colors"
                    style={{ backgroundColor: 'rgb(181, 140, 103)' }}
                  >
                    Weiter einkaufen
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {Object.entries(cart).map(([cartKey, count]) => {
                    const product = getProductByCartKey(cartKey, products);
                    if (!product) return null;

                    return (
                      <motion.div
                        key={cartKey}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl hover:shadow-sm transition-shadow"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = 'https://vibemedia.space/fallback_Fischbr%C3%A4ter%2051,5%20x%2013%20x%201%20cm.png';
                          }}
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-sm truncate">{product.name}</h4>
                          <p className="text-sm text-gray-500">
                            {product.price.toFixed(2)}€ / {product.unit && product.unit !== 'N/A' ? product.unit : 'Stück'}
                          </p>
                          <p className="text-sm font-semibold mt-1" style={{ color: 'rgb(181, 140, 103)' }}>
                            Zwischensumme: {(product.price * count).toFixed(2)}€
                          </p>
                        </div>
                        <div className="flex flex-col items-center gap-2 flex-shrink-0">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onRemoveFromCart(cartKey);
                              }}
                              className="w-8 h-8 rounded-lg flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                              style={{ backgroundColor: 'rgb(132, 161, 160)' }}
                            >
                              <Minus size={14} />
                            </button>
                            <span className="w-8 text-center font-semibold text-gray-900">{count}</span>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onAddToCart(cartKey);
                              }}
                              className="w-8 h-8 rounded-lg flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                              style={{ backgroundColor: 'rgb(181, 140, 103)' }}
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer - Checkout Section */}
            {hasCartItems && (
              <div className="p-6 border-t border-gray-100 bg-gray-50 flex-shrink-0">
                <div className="space-y-4">
                  {/* Summary */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span>Zwischensumme:</span>
                      <span>{totalPrice.toFixed(2)}€</span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>Versandkosten:</span>
                      <span>{totalPrice >= 149 ? 'Kostenlos' : 'Wird beim Checkout berechnet'}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-2">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold">Gesamt:</span>
                        <span className="text-xl font-bold" style={{ color: 'rgb(181, 140, 103)' }}>
                          {totalPrice.toFixed(2)}€
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Shipping Info */}
                  {totalPrice >= 149 && (
                    <div className="flex items-center gap-2 text-sm text-green-600 bg-green-50 px-3 py-2 rounded-lg">
                      <Truck size={16} />
                      <span>Versandkostenfrei ab 149€ erreicht!</span>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <button
                      onClick={handleCheckout}
                      disabled={checkoutLoading || isRedirecting || !shopifyConnected}
                      className={`w-full py-4 rounded-xl font-semibold text-white transition-all hover:shadow-lg flex items-center justify-center gap-2 ${checkoutLoading || isRedirecting || !shopifyConnected
                        ? 'opacity-60 cursor-not-allowed'
                        : 'hover:shadow-lg'
                        }`}
                      style={{ backgroundColor: 'rgb(181, 140, 103)' }}
                    >
                      {checkoutLoading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Checkout wird erstellt...
                        </>
                      ) : isRedirecting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Weiterleitung zur Kasse...
                        </>
                      ) : (
                        <>
                          <ShoppingCart size={16} />
                          Zur Kasse ({getTotalItems()} Artikel)
                        </>
                      )}
                    </button>

                    {/* Error Display */}
                    {checkoutError && (
                      <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-800 text-sm">{checkoutError}</p>
                        <button
                          onClick={() => setCheckoutError(null)}
                          className="text-red-600 text-xs mt-1 hover:underline"
                        >
                          Schließen
                        </button>
                      </div>
                    )}

                    {/* Shopify Connection Warning */}
                    {!shopifyConnected && (
                      <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <p className="text-yellow-800 text-sm">
                          ⚠️ Shopify-Verbindung erforderlich für den Checkout
                        </p>
                        <button
                          onClick={() => setShowShopifyConfig(true)}
                          className="text-yellow-600 text-xs mt-1 hover:underline"
                        >
                          Jetzt konfigurieren
                        </button>
                      </div>
                    )}

                    <button
                      onClick={() => setShowCart(false)}
                      className="w-full py-3 rounded-xl font-semibold text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 transition-colors"
                    >
                      Weiter einkaufen
                    </button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}; 