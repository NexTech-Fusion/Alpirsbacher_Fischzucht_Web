import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Plus, Minus, Truck, Package } from 'lucide-react';
import { LocalProduct, ViewMode, CartState } from '../types';

interface ProductCardProps {
  product: LocalProduct;
  index: number;
  viewMode: ViewMode;
  cart: CartState;
  onAddToCart: (cartKey: string) => void;
  onRemoveFromCart: (cartKey: string) => void;
  onProductClick: (productId: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  index,
  viewMode,
  cart,
  onAddToCart,
  onRemoveFromCart,
  onProductClick
}) => {
  const cartKey = product.variantGid || product.id;
  const cartQuantity = cart[cartKey] || 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => onProductClick(product.id)}
      className={`group bg-white rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-500 overflow-hidden backdrop-blur-sm cursor-pointer ${viewMode === 'list' ? 'flex' : ''
        }`}
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(247,250,252,0.95))',
        borderColor: 'rgba(132, 161, 160, 0.2)'
      }}
    >
      {/* Product Image */}
      <div className={`${viewMode === 'list' ? 'w-64' : 'aspect-square'} overflow-hidden relative`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://vibemedia.space/fallback_Fischbr%C3%A4ter%2051,5%20x%2013%20x%201%20cm.png';
          }}
        />
        {(product.inStock === false || product.quantityAvailable === 0) && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="text-white font-semibold bg-red-600 px-4 py-2 rounded-lg">Ausverkauft</span>
          </div>
        )}

        {/* Premium Badge - TEMPORÄR DEAKTIVIERT
        <div className="absolute top-4 left-4">
          <div className="px-3 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: 'rgba(181, 140, 103, 0.9)' }}>
            Premium
          </div>
        </div>
*/}
      </div>

      {/* Product Info */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Category & Variants Badge */}
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-medium px-2 py-1 rounded-full" style={{ backgroundColor: 'rgba(132, 161, 160, 0.1)', color: 'rgb(132, 161, 160)' }}>
            {product.category}
          </span>
          {product.variantCount && product.variantCount > 1 && (
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-200">
              {product.variantCount} Varianten
            </span>
          )}
        </div>

        {/* Product Name */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow">
          {product.description}
        </p>

        {/* Features & Stock Info */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="flex items-center gap-1 text-xs text-gray-500">
            <Truck size={12} />
            Frisch
          </span>
          {product.quantityAvailable !== undefined && product.quantityAvailable > 0 && (
            <span className="flex items-center gap-1 text-xs text-gray-500">
              <Package size={12} />
              {product.quantityAvailable} verfügbar
            </span>
          )}
          {product.sku && (
            <span className="text-xs text-gray-400">
              SKU: {product.sku}
            </span>
          )}
        </div>

        {/* Price and Controls */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <span className="text-2xl font-bold" style={{ color: 'rgb(181, 140, 103)' }}>
              {product.priceRange ?
                `ab ${product.priceRange.min.toFixed(2)}€` :
                `${product.price.toFixed(2)}€`
              }
            </span>
            <span className="text-gray-500 text-sm ml-1">
              /{product.unit && product.unit !== 'N/A' ? product.unit : (product.weight && product.weight !== 'N/A' ? product.weight : 'Stück')}
            </span>
            {product.priceRange && (
              <div className="text-sm text-gray-500">
                {product.priceRange.min.toFixed(2)}€ - {product.priceRange.max.toFixed(2)}€
              </div>
            )}
          </div>

          {(product.inStock !== false && product.quantityAvailable !== 0) ? (
            cartQuantity ? (
              <div className="flex items-center gap-3">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemoveFromCart(cartKey);
                  }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors text-white"
                  style={{ backgroundColor: 'rgb(132, 161, 160)' }}
                >
                  <Minus size={16} />
                </button>
                <span className="font-semibold text-lg min-w-[2rem] text-center text-gray-900">
                  {cartQuantity}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onAddToCart(cartKey);
                  }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors text-white"
                  style={{ backgroundColor: 'rgb(181, 140, 103)' }}
                >
                  <Plus size={16} />
                </button>
              </div>
            ) : (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onAddToCart(cartKey);
                }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg text-white"
                style={{ backgroundColor: 'rgb(181, 140, 103)' }}
              >
                <ShoppingCart size={16} />
                <span className="hidden sm:inline">In den Warenkorb</span>
              </button>
            )
          ) : (
            <button
              disabled
              onClick={(e) => e.stopPropagation()}
              className="px-6 py-3 bg-gray-300 text-gray-500 rounded-xl font-semibold cursor-not-allowed"
            >
              Ausverkauft
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}; 