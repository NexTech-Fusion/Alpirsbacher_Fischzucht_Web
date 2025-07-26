import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

interface FloatingCartButtonProps {
  totalItems: number;
  onClick: () => void;
}

export const FloatingCartButton: React.FC<FloatingCartButtonProps> = ({
  totalItems,
  onClick
}) => {
  if (totalItems === 0) return null;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <button
        onClick={onClick}
        className="group relative flex items-center justify-center gap-3 px-4 py-4 md:px-6 md:py-4 rounded-full shadow-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
        style={{ backgroundColor: 'rgb(181, 140, 103)' }}
      >
        <ShoppingCart size={24} className="flex-shrink-0" />
        <span className="hidden md:inline font-semibold text-lg">Warenkorb</span>
        <span className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold shadow-lg">
          {totalItems}
        </span>
      </button>
    </motion.div>
  );
}; 