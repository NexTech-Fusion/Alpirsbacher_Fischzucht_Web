import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingCart, 
  Search, 
  Grid3X3, 
  List, 
  Plus, 
  Minus, 
  X,
  Settings,
  CheckCircle,
  Truck,
  Award,
  Clock,
  Star,
  Filter,
  Package,
  Fish
} from 'lucide-react';
import ShopLayout from '../components/ShopLayout';
import { Product } from '@/types/product';
import { shopifyService } from '@/lib/shopify';

interface LocalProduct extends Product {
  unit: string;
  rating: number;
  inStock: boolean;
}

type ViewMode = 'grid' | 'list';
type SortOption = 'name' | 'price-low' | 'price-high' | 'rating';

const Shop = () => {
  // State management
  const [products, setProducts] = useState<LocalProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<LocalProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState<{[key: string]: number}>({});
  const [showCart, setShowCart] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState<SortOption>('name');
  
  // Shopify integration
  const [shopifyConnected, setShopifyConnected] = useState(false);
  const [showShopifyConfig, setShowShopifyConfig] = useState(false);
  const [shopifyCredentials, setShopifyCredentials] = useState({
    shopDomain: 'fgrm5g-x8',
    storefrontToken: '46a26b4da210d901626ba1f855d1e407'
  });

  // Local fallback products
  const localProducts: LocalProduct[] = [
    {
      id: '1',
      name: 'Premium Schwarzwald Forelle',
      price: 22.90,
      unit: 'kg',
      description: 'Frisch aus unserem kristallklaren Bergwasser. Diese Forellen wachsen in natürlicher Umgebung und bieten ein unvergleichliches Geschmackserlebnis.',
      image: 'https://vibemedia.space/fresh_trout_9k2m8n4p_001.png?prompt=fresh%20rainbow%20trout%20fish%20on%20ice%20premium%20quality%20black%20forest%20germany%20crystal%20clear%20mountain%20water%20natural%20environment&key=NOGON',
      category: 'Frischer Fisch',
      rating: 5,
      inStock: true
    },
    {
      id: '2',
      name: 'Geräucherte Forelle Deluxe',
      price: 28.50,
      unit: 'kg',
      description: 'Nach traditionellem Familienrezept über Buchenholz geräuchert. Ein Gaumenschmaus für besondere Anlässe.',
      image: 'https://vibemedia.space/smoked_trout_7h5j9k3l_002.png?prompt=smoked%20trout%20golden%20brown%20traditional%20beech%20wood%20smoking%20german%20delicacy%20artisanal%20family%20recipe&key=NOGON',
      category: 'Geräucherte Spezialitäten',
      rating: 5,
      inStock: true
    },
    {
      id: '3',
      name: 'Forellen-Filet Premium',
      price: 35.00,
      unit: 'kg',
      description: 'Sorgfältig von Hand filetiert. Küchenfertig und perfekt für die gehobene Küche.',
      image: 'https://vibemedia.space/trout_fillet_5d8f6g2h_003.png?prompt=fresh%20trout%20fillets%20hand%20cut%20professional%20kitchen%20ready%20pink%20flesh%20premium%20restaurant%20quality&key=NOGON',
      category: 'Verarbeitete Produkte',
      rating: 5,
      inStock: true
    },
    {
      id: '4',
      name: 'Familien-Paket "Schwarzwald"',
      price: 49.90,
      unit: 'Paket',
      description: 'Perfekt für Familien: 3kg gemischte Forellen-Spezialitäten in praktischer Kühlbox.',
      image: 'https://vibemedia.space/family_package_3x9c7v1b_004.png?prompt=family%20fish%20package%20assorted%20trout%20products%20cooling%20box%20black%20forest%20germany%20premium%20presentation%20variety&key=NOGON',
      category: 'Pakete',
      rating: 5,
      inStock: true
    },
    {
      id: '5',
      name: 'Gourmet Selection Box',
      price: 89.00,
      unit: 'Box',
      description: 'Exklusive Auswahl unserer feinsten Forellen-Delikatessen. Ideal als Geschenk.',
      image: 'https://vibemedia.space/gourmet_box_8a4s2q9w_005.png?prompt=luxury%20gourmet%20smoked%20fish%20gift%20box%20elegant%20packaging%20premium%20delicacies%20black%20forest%20specialty&key=NOGON',
      category: 'Gourmet',
      rating: 5,
      inStock: false
    },
    {
      id: '6',
      name: 'Schwarzwald Forellen-Kaviar',
      price: 120.00,
      unit: '100g',
      description: 'Seltene Delikatesse aus eigener Produktion. Limitierte Verfügbarkeit.',
      image: 'https://vibemedia.space/trout_caviar_6r3t8y5u_006.png?prompt=premium%20trout%20caviar%20orange%20pearls%20glass%20jar%20luxury%20delicacy%20black%20forest%20limited%20production&key=NOGON',
      category: 'Delikatessen',
      rating: 5,
      inStock: true
    }
  ];

  // Load products on component mount
  useEffect(() => {
    loadProducts();
  }, []);

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
        default:
          return a.name.localeCompare(b.name);
      }
    });

    setFilteredProducts(filtered);
  }, [products, searchTerm, selectedCategory, sortBy]);

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
        setProducts(localProducts);
        setShopifyConnected(false);
        console.log('⚠️ Using local products as fallback');
      }
    } else {
      setProducts(localProducts);
      console.log('📦 Using local products');
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
    setProducts(localProducts);
  };

  // Cart functions
  const addToCart = (productId: string) => {
    setCart(prev => ({ ...prev, [productId]: (prev[productId] || 0) + 1 }));
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => {
      if (prev[productId] <= 1) {
        const newCart = { ...prev };
        delete newCart[productId];
        return newCart;
      }
      return { ...prev, [productId]: prev[productId] - 1 };
    });
  };

  const getTotalItems = () => Object.values(cart).reduce((sum, count) => sum + count, 0);
  const getTotalPrice = () => {
    return Object.entries(cart).reduce((sum, [productId, count]) => {
      const product = products.find(p => p.id === productId);
      return sum + (product ? product.price * count : 0);
    }, 0);
  };

  const getCategories = () => {
    const categories = [...new Set(products.map(p => p.category))];
    return ['all', ...categories];
  };

  return (
    <ShopLayout>
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgb(26, 61, 59) 0%, rgb(16, 43, 42) 50%, rgb(12, 37, 36) 100%)' }}>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #ffffff 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}></div>
          </div>
        </div>
        
        <div className="relative h-full flex items-center px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              {/* Logo Section with Decorative Dividers */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex items-center justify-center mb-8"
              >
                {/* Left Decorative Divider */}
                <div className="flex-1 flex items-center justify-end pr-8">
                  <div className="w-32 h-px bg-gradient-to-r from-transparent to-primary opacity-60"></div>
                  <div className="w-2 h-2 bg-primary rounded-full ml-2 opacity-80"></div>
                </div>
                
                {/* Centered Logo */}
                <div className="flex items-center space-x-2">
                  <Fish className="h-12 w-12 text-primary" />
                  <div className="flex flex-col text-center">
                    <span className="font-serif text-3xl font-bold text-white leading-tight">
                      Alpirsbacher
                    </span>
                    <span className="font-serif text-lg text-primary leading-tight opacity-90">
                      Fischzucht
                    </span>
                  </div>
                </div>
                
                {/* Right Decorative Divider */}
                <div className="flex-1 flex items-center justify-start pl-8">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2 opacity-80"></div>
                  <div className="w-32 h-px bg-gradient-to-l from-transparent to-primary opacity-60"></div>
                </div>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6"
              >
                Unser <span style={{ color: 'rgb(181, 140, 103)' }}>Shop</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-xl text-white/90 max-w-2xl mx-auto"
              >
                Frische Forellen aus dem Schwarzwald – direkt vom Erzeuger
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
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
                        {getCategories().map(category => (
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
                          className={`px-4 py-3 transition-all ${
                            viewMode === 'grid' 
                              ? 'bg-primary text-white shadow-lg' 
                              : 'text-white/70 hover:text-white hover:bg-white/10'
                          }`}
                          title="Raster-Ansicht"
                        >
                          <Grid3X3 size={18} />
                        </button>
                        <button
                          onClick={() => setViewMode('list')}
                          className={`px-4 py-3 transition-all ${
                            viewMode === 'list' 
                              ? 'bg-primary text-white shadow-lg' 
                              : 'text-white/70 hover:text-white hover:bg-white/10'
                          }`}
                          title="Listen-Ansicht"
                        >
                          <List size={18} />
                        </button>
                      </div>

                      {/* Clear Filters */}
                      {(searchTerm || selectedCategory !== 'all' || sortBy !== 'name') && (
                        <button
                          onClick={() => {
                            setSearchTerm('');
                            setSelectedCategory('all');
                            setSortBy('name');
                          }}
                          className="px-4 py-3 text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-all border border-white/20 backdrop-blur-sm"
                          title="Filter zurücksetzen"
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
                      {loading ? 'Lade Produkte...' : `${filteredProducts.length} von ${products.length} Produkten gefunden`}
                    </p>
                  </div>
                  
                  {/* Quality Badges */}
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 border border-white/20">
                      <Truck size={14} />
                      Versandkostenfrei ab 50€
                    </span>
                    <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 border border-white/20">
                      <Award size={14} />
                      Premium Qualität
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
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
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group bg-white rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-500 overflow-hidden backdrop-blur-sm ${
                    viewMode === 'list' ? 'flex' : ''
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
                    {product.inStock === false && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <span className="text-white font-semibold bg-red-600 px-4 py-2 rounded-lg">Ausverkauft</span>
                      </div>
                    )}
                    
                    {/* Premium Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="px-3 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: 'rgba(181, 140, 103, 0.9)' }}>
                        Premium
                      </div>
                    </div>

                  </div>

                  {/* Product Info */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Category */}
                    <div className="mb-3">
                      <span className="text-xs font-medium px-2 py-1 rounded-full" style={{ backgroundColor: 'rgba(132, 161, 160, 0.1)', color: 'rgb(132, 161, 160)' }}>
                        {product.category}
                      </span>
                    </div>

                    {/* Product Name */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap items-center gap-2 mb-6">
                      <span className="flex items-center gap-1 text-xs text-gray-500">
                        <Truck size={12} />
                        Frisch
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-500">
                        <Award size={12} />
                        Bio-Qualität
                      </span>
                    </div>

                    {/* Price and Controls */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div>
                        <span className="text-2xl font-bold" style={{ color: 'rgb(181, 140, 103)' }}>
                          {product.price.toFixed(2)}€
                        </span>
                        <span className="text-gray-500 text-sm ml-1">
                          /{product.unit && product.unit !== 'N/A' ? product.unit : (product.weight && product.weight !== 'N/A' ? product.weight : 'Stück')}
                        </span>
                      </div>

                      {product.inStock !== false ? (
                        cart[product.id] ? (
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => removeFromCart(product.id)}
                              className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors text-white"
                              style={{ backgroundColor: 'rgb(132, 161, 160)' }}
                            >
                              <Minus size={16} />
                            </button>
                            <span className="font-semibold text-lg min-w-[2rem] text-center">
                              {cart[product.id]}
                            </span>
                            <button
                              onClick={() => addToCart(product.id)}
                              className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors text-white"
                              style={{ backgroundColor: 'rgb(181, 140, 103)' }}
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => addToCart(product.id)}
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
                          className="px-6 py-3 bg-gray-300 text-gray-500 rounded-xl font-semibold cursor-not-allowed"
                        >
                          Ausverkauft
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
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
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Keine Produkte gefunden</h3>
              <p className="text-gray-500 mb-6">
                Versuchen Sie andere Suchbegriffe oder Filter
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSortBy('name');
                }}
                className="px-6 py-3 rounded-xl font-semibold text-white transition-colors"
                style={{ backgroundColor: 'rgb(181, 140, 103)' }}
              >
                Filter zurücksetzen
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Floating Cart Button */}
      {getTotalItems() > 0 && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <button
            onClick={() => setShowCart(true)}
            className="w-16 h-16 rounded-full shadow-lg flex items-center justify-center text-white relative transition-all duration-300 hover:scale-110"
            style={{ backgroundColor: 'rgb(181, 140, 103)' }}
          >
            <ShoppingCart size={24} />
            <span className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
              {getTotalItems()}
            </span>
          </button>
        </motion.div>
      )}

      {/* Cart Modal */}
      <AnimatePresence>
        {showCart && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowCart(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl w-full max-w-md max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-gray-100">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">Warenkorb</h3>
                  <button
                    onClick={() => setShowCart(false)}
                    className="p-2 text-gray-400 hover:text-gray-600 rounded-lg transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>
              
              <div className="p-6 max-h-96 overflow-y-auto">
                {Object.entries(cart).length === 0 ? (
                  <p className="text-center text-gray-500 py-8">Ihr Warenkorb ist leer</p>
                ) : (
                  <div className="space-y-4">
                    {Object.entries(cart).map(([productId, count]) => {
                      const product = products.find(p => p.id === productId);
                      if (!product) return null;
                      
                      return (
                        <div key={productId} className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-16 h-16 object-cover rounded-lg"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = 'https://vibemedia.space/fallback_Fischbr%C3%A4ter%2051,5%20x%2013%20x%201%20cm.png';
                            }}
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold text-sm">{product.name}</h4>
                            <p className="text-sm text-gray-500">{product.price.toFixed(2)}€ / {product.unit && product.unit !== 'N/A' ? product.unit : 'Stück'}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => removeFromCart(productId)}
                              className="w-8 h-8 rounded-lg flex items-center justify-center text-white"
                              style={{ backgroundColor: 'rgb(132, 161, 160)' }}
                            >
                              <Minus size={14} />
                            </button>
                            <span className="w-8 text-center font-semibold">{count}</span>
                            <button
                              onClick={() => addToCart(productId)}
                              className="w-8 h-8 rounded-lg flex items-center justify-center text-white"
                              style={{ backgroundColor: 'rgb(181, 140, 103)' }}
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
              
              {Object.entries(cart).length > 0 && (
                <div className="p-6 border-t border-gray-100">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold">Gesamt:</span>
                    <span className="text-xl font-bold" style={{ color: 'rgb(181, 140, 103)' }}>
                      {getTotalPrice().toFixed(2)}€
                    </span>
                  </div>
                  <button 
                    className="w-full py-4 rounded-xl font-semibold text-white transition-colors"
                    style={{ backgroundColor: 'rgb(181, 140, 103)' }}
                  >
                    Zur Kasse
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Shopify Configuration Modal */}
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
    </ShopLayout>
  );
};

export default Shop;