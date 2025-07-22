import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ShoppingCart,
  Plus,
  Minus,
  Truck,
  Award,
  Package,
  Star,
  Fish,
  Info
} from 'lucide-react';
import { Product } from '@/types/product';
import { shopifyService } from '@/lib/shopify';

interface ProductVariant {
  id: string;
  title: string;
  price: number;
  weight?: string;
  sku?: string;
  quantityAvailable: number;
  availableForSale: boolean;
  variantGid: string;
}

interface ProductDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  productId: string;
  cart: { [key: string]: number };
  onAddToCart: (productId: string) => void;
  onRemoveFromCart: (productId: string) => void;
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  isOpen,
  onClose,
  productId,
  cart,
  onAddToCart,
  onRemoveFromCart
}) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [variants, setVariants] = useState<ProductVariant[]>([]);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);
  const [loading, setLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  // Extract base product ID (remove variant suffix if present)
  const baseProductId = productId.includes('-') ? productId.split('-')[0] : productId;

  useEffect(() => {
    if (isOpen && productId) {
      loadProductDetails();
    }
  }, [isOpen, productId]);

  const loadProductDetails = async () => {
    setLoading(true);
    try {
      // Get product details with all variants
      const productDetails = await shopifyService.getProductWithAllVariants(baseProductId);

      if (productDetails) {
        setProduct(productDetails.product);
        setVariants(productDetails.variants);

        // Set default selected variant (first available one)
        const availableVariant = productDetails.variants.find(v => v.availableForSale && v.quantityAvailable > 0);
        setSelectedVariant(availableVariant || productDetails.variants[0] || null);
      }
    } catch (error) {
      console.error('Failed to load product details:', error);
    }
    setLoading(false);
  };

  const handleVariantSelect = (variant: ProductVariant) => {
    setSelectedVariant(variant);
  };

  const getVariantCartKey = (variant: ProductVariant) => {
    // Use variant GID as cart key to ensure uniqueness
    return variant.variantGid;
  };

  const handleAddToCart = () => {
    if (selectedVariant) {
      const variantCartKey = getVariantCartKey(selectedVariant);
      onAddToCart(variantCartKey);
    }
  };

  const handleRemoveFromCart = () => {
    if (selectedVariant) {
      const variantCartKey = getVariantCartKey(selectedVariant);
      onRemoveFromCart(variantCartKey);
    }
  };

  const getCartQuantity = () => {
    if (!selectedVariant) return 0;
    const variantCartKey = getVariantCartKey(selectedVariant);
    return cart[variantCartKey] || 0;
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgb(181, 140, 103)' }}>
                <Fish className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Produktdetails</h2>
                <p className="text-sm text-gray-500">Alpirsbacher Fischzucht</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-xl transition-colors hover:bg-gray-100"
            >
              <X size={24} />
            </button>
          </div>

          <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full"></div>
              </div>
            ) : product ? (
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Product Image */}
                  <div className="space-y-4">
                    <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 relative">
                      <img
                        src={imageError ? 'https://vibemedia.space/fallback_Fischbr%C3%A4ter%2051,5%20x%2013%20x%201%20cm.png' : product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        onError={() => setImageError(true)}
                      />


                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="space-y-6">
                    {/* Category */}
                    <div>
                      <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: 'rgba(132, 161, 160, 0.1)', color: 'rgb(132, 161, 160)' }}>
                        {product.category}
                      </span>
                    </div>

                    {/* Product Name */}
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        {product.name.replace(/ - .*$/, '')} {/* Remove variant suffix for clean display */}
                      </h1>
                      <div className="flex items-center gap-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                        ))}
                        <span className="text-sm text-gray-500 ml-1">(Premium Qualität)</span>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="py-4 border-y border-gray-100">
                      <div className="text-4xl font-bold mb-1" style={{ color: 'rgb(181, 140, 103)' }}>
                        {selectedVariant ? selectedVariant.price.toFixed(2) : '0.00'}€
                      </div>
                      <p className="text-gray-500">
                        pro {selectedVariant?.weight && selectedVariant.weight !== 'N/A' ? selectedVariant.weight : 'Stück'}
                        {selectedVariant?.sku && (
                          <span className="ml-2 text-xs">• SKU: {selectedVariant.sku}</span>
                        )}
                      </p>
                    </div>

                    {/* Variant Selection */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">Produktvarianten wählen</h3>
                      <div className="grid grid-cols-1 gap-3">
                        {variants.map((variant, index) => (
                          <div
                            key={variant.id}
                            onClick={() => handleVariantSelect(variant)}
                            className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${selectedVariant?.id === variant.id
                                ? 'border-primary bg-primary/5'
                                : 'border-gray-200 hover:border-gray-300'
                              } ${!variant.availableForSale || variant.quantityAvailable === 0
                                ? 'opacity-50 cursor-not-allowed'
                                : ''
                              }`}
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-semibold text-gray-900">{variant.title}</div>
                                <div className="text-sm text-gray-500">
                                  {variant.availableForSale && variant.quantityAvailable > 0
                                    ? `${variant.quantityAvailable} verfügbar`
                                    : 'Ausverkauft'
                                  }
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="font-bold text-lg" style={{ color: 'rgb(181, 140, 103)' }}>
                                  {variant.price.toFixed(2)}€
                                </div>
                                {variant.weight && variant.weight !== 'N/A' && (
                                  <div className="text-sm text-gray-500">pro {variant.weight}</div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Add to Cart */}
                    <div className="space-y-4">
                      {selectedVariant && selectedVariant.availableForSale && selectedVariant.quantityAvailable > 0 ? (
                        <div className="flex items-center gap-4">
                          {getCartQuantity() > 0 ? (
                            <div className="flex items-center gap-3">
                              <button
                                onClick={handleRemoveFromCart}
                                className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors text-white"
                                style={{ backgroundColor: 'rgb(132, 161, 160)' }}
                              >
                                <Minus size={20} />
                              </button>
                              <span className="font-bold text-2xl min-w-[3rem] text-center text-gray-900">
                                {getCartQuantity()}
                              </span>
                              <button
                                onClick={handleAddToCart}
                                className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors text-white"
                                style={{ backgroundColor: 'rgb(181, 140, 103)' }}
                              >
                                <Plus size={20} />
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={handleAddToCart}
                              className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg text-white flex-1"
                              style={{ backgroundColor: 'rgb(181, 140, 103)' }}
                            >
                              <ShoppingCart size={20} />
                              In den Warenkorb
                            </button>
                          )}
                        </div>
                      ) : (
                        <button
                          disabled
                          className="w-full py-4 bg-gray-300 text-gray-500 rounded-xl font-semibold cursor-not-allowed"
                        >
                          Nicht verfügbar
                        </button>
                      )}

                      {/* Additional Info */}
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-2">
                          <Truck size={16} />
                          Versandkostenfrei ab 149€
                        </span>
                        <span className="flex items-center gap-2">
                          <Package size={16} />
                          Frisch geliefert
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product Description */}
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Info size={20} />
                    Produktbeschreibung
                  </h3>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Tags */}
                  {product.tags && product.tags.length > 0 && (
                    <div className="mt-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Eigenschaften</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20">
                <Package className="w-16 h-16 text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Produkt nicht gefunden</h3>
                <p className="text-gray-500">Das angeforderte Produkt konnte nicht geladen werden.</p>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductDetailModal; 