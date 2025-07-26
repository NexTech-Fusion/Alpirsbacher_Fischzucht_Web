import { useState, useEffect } from 'react';
import { LocalProduct, ViewMode, SortOption, categoryPriority } from '../types';

export const useProductFilters = (products: LocalProduct[]) => {
  const [filteredProducts, setFilteredProducts] = useState<LocalProduct[]>([]);
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState<SortOption>('category');

  const sortCategoriesByPriority = (categories: string[]): string[] => {
    return categories.sort((a, b) => {
      if (a === 'all') return -1;
      if (b === 'all') return 1;

      const priorityA = categoryPriority[a as keyof typeof categoryPriority] || 999;
      const priorityB = categoryPriority[b as keyof typeof categoryPriority] || 999;

      return priorityA - priorityB;
    });
  };

  const getCategories = () => {
    const categories = [...new Set(products.map(p => p.category))];
    const allCategories = ['all', ...categories];
    return sortCategoriesByPriority(allCategories);
  };

  // Filter and sort products when dependencies change
  useEffect(() => {
    let filtered = [...products];

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        case 'category':
          const priorityA = categoryPriority[a.category as keyof typeof categoryPriority] || 999;
          const priorityB = categoryPriority[b.category as keyof typeof categoryPriority] || 999;
          if (priorityA !== priorityB) {
            return priorityA - priorityB;
          }
          // If same category priority, sort by name within category
          return a.name.localeCompare(b.name);
        default:
          return a.name.localeCompare(b.name);
      }
    });

    setFilteredProducts(filtered);
  }, [products, searchTerm, selectedCategory, sortBy]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSortBy('category');
  };

  const hasActiveFilters = () => {
    return Boolean(searchTerm || selectedCategory !== 'all' || sortBy !== 'category');
  };

  return {
    filteredProducts,
    viewMode,
    setViewMode,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy,
    getCategories,
    clearFilters,
    hasActiveFilters
  };
}; 