import React from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Grid3X3,
  List,
  X,
  Settings,
  Truck,
  Award,
  Clock,
  Filter
} from 'lucide-react';
import { ViewMode, SortOption, LocalProduct } from '../types';

interface SearchAndFiltersProps {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  sortBy: SortOption;
  setSortBy: (sort: SortOption) => void;
  categories: string[];
  loading: boolean;
  filteredProductsLength: number;
  totalProductsLength: number;
  hasActiveFilters: boolean;
  clearFilters: () => void;
  shopifyConnected: boolean;
  setShowShopifyConfig: (show: boolean) => void;
}

export const SearchAndFilters: React.FC<SearchAndFiltersProps> = ({
  viewMode,
  setViewMode,
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
  categories,
  loading,
  filteredProductsLength,
  totalProductsLength,
  hasActiveFilters,
  clearFilters,
  shopifyConnected,
  setShowShopifyConfig
}) => {
  return (
    <section className="py-12 relative">
      {/* Background with gradient */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(135deg, rgb(26, 61, 59) 0%, rgb(16, 43, 42) 50%, rgb(12, 37, 36) 100%)'
      }}>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #ffffff 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)'
          }}
        >
          {/* Header with decorative elements */}
          <div className="p-6 pb-4 border-b border-white/10">
            <div className="flex items-center justify-center mb-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
              <div className="px-4">
                <div className="w-2 h-2 bg-primary rounded-full mx-auto"></div>
              </div>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent via-primary/40 to-transparent"></div>
            </div>
            <h3 className="text-center text-white/90 font-serif text-lg">Produkte entdecken</h3>
          </div>

          {/* Search and Filters */}
          <div className="p-6">
            <div className="space-y-6">
              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative"
              >
                <div className="relative group">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 group-focus-within:text-primary transition-colors" size={20} />
                  <input
                    type="text"
                    placeholder="Nach Forellen-Spezialitäten suchen..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all"
                  />
                </div>
              </motion.div>

              {/* Filter Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Category Filter */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                >
                  <label className="block text-white/80 text-sm font-medium mb-2">Kategorie</label>
                  <div className="relative">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all appearance-none cursor-pointer"
                    >
                      {categories.map(category => (
                        <option key={category} value={category} className="bg-slate-800 text-white">
                          {category === 'all' ? 'Alle Kategorien' : category}
                        </option>
                      ))}
                    </select>
                    <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 pointer-events-none" size={16} />
                  </div>
                </motion.div>

                {/* Sort Filter */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative"
                >
                  <label className="block text-white/80 text-sm font-medium mb-2">Sortierung</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all appearance-none cursor-pointer"
                  >
                    <option value="category" className="bg-slate-800 text-white">Nach Kategorie</option>
                    <option value="name" className="bg-slate-800 text-white">Nach Name</option>
                    <option value="price-low" className="bg-slate-800 text-white">Preis aufsteigend</option>
                    <option value="price-high" className="bg-slate-800 text-white">Preis absteigend</option>
                    <option value="rating" className="bg-slate-800 text-white">Nach Bewertung</option>
                  </select>
                </motion.div>

                {/* View Mode & Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="relative"
                >
                  <label className="block text-white/80 text-sm font-medium mb-2">Ansicht</label>
                  <div className="flex items-center gap-2">
                    {/* View Mode Toggle */}
                    <div className="flex rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20">
                      <button
                        onClick={() => setViewMode('grid')}
                        className={`px-4 py-3 transition-all ${viewMode === 'grid'
                          ? 'bg-primary text-white shadow-lg'
                          : 'text-white/70 hover:text-white hover:bg-white/10'
                          }`}
                        title="Raster-Ansicht"
                      >
                        <Grid3X3 size={18} />
                      </button>
                      <button
                        onClick={() => setViewMode('list')}
                        className={`px-4 py-3 transition-all ${viewMode === 'list'
                          ? 'bg-primary text-white shadow-lg'
                          : 'text-white/70 hover:text-white hover:bg-white/10'
                          }`}
                        title="Listen-Ansicht"
                      >
                        <List size={18} />
                      </button>
                    </div>

                    {/* Clear Filters */}
                    {hasActiveFilters && (
                      <button
                        onClick={clearFilters}
                        className="px-4 py-3 text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-all border border-white/20 backdrop-blur-sm"
                        title="Filter und Sortierung zurücksetzen"
                      >
                        <X size={18} />
                      </button>
                    )}
                  </div>
                </motion.div>
              </div>

              {/* Results & Info Bar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-6 border-t border-white/10"
              >
                <div className="flex items-center gap-4">
                  <p className="text-white/80 font-medium">
                    {loading ? 'Lade Produkte...' : `${filteredProductsLength} von ${totalProductsLength} Produkten gefunden`}
                  </p>
                </div>

                {/* Quality Badges & Config */}
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 border border-white/20">
                    <Truck size={14} />
                    Versandkostenfrei ab 149€
                  </span>
                  <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 border border-white/20">
                    <Award size={14} />
                    Premium Qualität
                  </span>
                  <button
                    onClick={() => setShowShopifyConfig(true)}
                    className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 border border-white/20 hover:bg-white/20 transition-colors"
                    title="Shopify Einstellungen"
                  >
                    <Settings size={14} />
                    {shopifyConnected ? '✅ Shopify' : '⚠️ Shopify'}
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 