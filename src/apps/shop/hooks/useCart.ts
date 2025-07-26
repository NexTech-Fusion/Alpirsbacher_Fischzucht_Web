import { useState } from 'react';
import { CartState, LocalProduct } from '../types';
import { useToast } from '@/hooks/use-toast';

export const useCart = () => {
  const [cart, setCart] = useState<CartState>({});
  const { toast } = useToast();

  const addToCart = (cartKey: string) => {
    setCart(prev => ({ ...prev, [cartKey]: (prev[cartKey] || 0) + 1 }));
  };

  const removeFromCart = (cartKey: string) => {
    setCart(prev => {
      if (prev[cartKey] <= 1) {
        const newCart = { ...prev };
        delete newCart[cartKey];
        return newCart;
      }
      return { ...prev, [cartKey]: prev[cartKey] - 1 };
    });
  };

  const getTotalItems = () => Object.values(cart).reduce((sum, count) => sum + count, 0);

  const getTotalPrice = (products: LocalProduct[]) => {
    return Object.entries(cart).reduce((sum, [cartKey, count]) => {
      // Find product by variant GID or product ID for backward compatibility
      const product = products.find(p => p.variantGid === cartKey || p.id === cartKey);
      return sum + (product ? product.price * count : 0);
    }, 0);
  };

  const getProductByCartKey = (cartKey: string, products: LocalProduct[]) => {
    return products.find(p => p.variantGid === cartKey || p.id === cartKey);
  };

  const clearCart = () => {
    setCart({});
    toast({
      title: "Warenkorb geleert",
      description: "Alle Artikel wurden aus dem Warenkorb entfernt.",
    });
  };

  const hasCartItems = () => Object.keys(cart).length > 0;

  return {
    cart,
    addToCart,
    removeFromCart,
    getTotalItems,
    getTotalPrice,
    getProductByCartKey,
    clearCart,
    hasCartItems
  };
}; 