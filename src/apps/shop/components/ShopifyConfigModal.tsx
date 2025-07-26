import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { ShopifyCredentials } from '../types';

interface ShopifyConfigModalProps {
  showShopifyConfig: boolean;
  setShowShopifyConfig: (show: boolean) => void;
  shopifyCredentials: ShopifyCredentials;
  setShopifyCredentials: React.Dispatch<React.SetStateAction<ShopifyCredentials>>;
  shopifyConnected: boolean;
  connectToShopify: () => void;
  disconnectShopify: () => void;
}

export const ShopifyConfigModal: React.FC<ShopifyConfigModalProps> = ({
  showShopifyConfig,
  setShowShopifyConfig,
  shopifyCredentials,
  setShopifyCredentials,
  shopifyConnected,
  connectToShopify,
  disconnectShopify
}) => {
  return (
    <AnimatePresence>
      {showShopifyConfig && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setShowShopifyConfig(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Shopify Konfiguration</h3>
                <button
                  onClick={() => setShowShopifyConfig(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Shop Domain
                  </label>
                  <input
                    type="text"
                    value={shopifyCredentials.shopDomain}
                    onChange={(e) => setShopifyCredentials(prev => ({ ...prev, shopDomain: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    placeholder="your-shop-name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Storefront Access Token
                  </label>
                  <input
                    type="text"
                    value={shopifyCredentials.storefrontToken}
                    onChange={(e) => setShopifyCredentials(prev => ({ ...prev, storefrontToken: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    placeholder="Ihr Shopify Storefront Token"
                  />
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                {shopifyConnected ? (
                  <button
                    onClick={disconnectShopify}
                    className="flex-1 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
                  >
                    Trennen
                  </button>
                ) : (
                  <button
                    onClick={connectToShopify}
                    className="flex-1 py-3 rounded-lg font-semibold text-white transition-colors"
                    style={{ backgroundColor: 'rgb(181, 140, 103)' }}
                  >
                    Verbinden
                  </button>
                )}
              </div>

              {shopifyConnected && (
                <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 text-sm">
                    ✅ Erfolgreich mit Shopify verbunden
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 