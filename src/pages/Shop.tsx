
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
  Clock
} from 'lucide-react';
import Layout from '../components/Layout';
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
        <Layout>
      {/* Shop Section - No Hero */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search & Filter Toolbar */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8 text-black">
            {/* Search */}
            <div className="flex-1 max-w-md relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Produkte suchen..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Category */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white min-w-[140px]"
              >
                {getCategories().map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'Alle' : category}
                  </option>
                ))}
              </select>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white min-w-[120px]"
              >
                <option value="name">Name</option>
                <option value="price-low">Preis ↑</option>
                <option value="price-high">Preis ↓</option>
                <option value="rating">Bewertung</option>
              </select>

              {/* Clear Filters */}
              {(searchTerm || selectedCategory !== 'all' || sortBy !== 'name') && (
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSortBy('name');
                  }}
                  className="p-3 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  title="Filter zurücksetzen"
                >
                  <X size={20} />
                </button>
              )}

              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 transition-colors ${
                    viewMode === 'grid' ? 'bg-emerald-600 text-white' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                  title="Raster-Ansicht"
                >
                  <Grid3X3 size={18} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 transition-colors ${
                    viewMode === 'list' ? 'bg-emerald-600 text-white' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                  title="Listen-Ansicht"
                >
                  <List size={18} />
                </button>
              </div>

              {/* Shopify Settings */}
              <button
                onClick={() => setShowShopifyConfig(true)}
                className="p-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                title="Shopify Einstellungen"
              >
                <Settings size={18} />
              </button>
            </div>
          </div>

          {/* Results Info */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div className="flex flex-wrap items-center gap-4">
              <p className="text-gray-600">
                {loading ? 'Lade Produkte...' : `${filteredProducts.length} von ${products.length} Produkten`}
              </p>
              {shopifyConnected && (
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-100 text-emerald-800 text-sm rounded-full">
                  <CheckCircle size={14} />
                  Shopify
                </span>
              )}
            </div>
            
            {/* Quick info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Truck size={14} />
                Versandkostenfrei ab 50€
              </span>
              <span className="flex items-center gap-1">
                <Award size={14} />
                Premium Qualität
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Products Grid/List */}
          {loading ? (
            <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm border overflow-hidden">
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
            <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group bg-white rounded-xl shadow-sm border hover:shadow-lg transition-all duration-300 overflow-hidden ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  {/* Product Image */}
                  <div className={`${viewMode === 'list' ? 'w-48' : 'aspect-square'} overflow-hidden relative`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://vibemedia.space/fallback_${product.name}.png?prompt=${encodeURIComponent(product.name + ' premium fish product black forest germany')}&key=NOGON`;
                      }}
                    />
                    {product.inStock === false && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="text-white font-semibold">Ausverkauft</span>
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-6 flex-1">

                    {/* Product Name */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                      {product.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {product.description}
                    </p>

                    {/* Price and Controls */}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-emerald-600">
                          €{product.price.toFixed(2)}
                        </span>
                        <span className="text-gray-500 text-sm ml-1">
                          /{product.unit || product.weight || 'Stück'}
                        </span>
                      </div>

                      {product.inStock !== false ? (
                        cart[product.id] ? (
                          <div className="flex items-center gap-3 text-black">
                            <button
                              onClick={() => removeFromCart(product.id)}
                              className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="font-semibold text-lg">{cart[product.id]}</span>
                            <button
                              onClick={() => addToCart(product.id)}
                              className="p-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => addToCart(product.id)}
                            className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors"
                          >
                            <ShoppingCart size={16} />
                            <span className="hidden sm:inline">In den Warenkorb</span>
                          </button>
                        )
                      ) : (
                        <span className="text-red-500 font-medium">Nicht verfügbar</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Floating Cart Button */}
      {getTotalItems() > 0 && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          onClick={() => setShowCart(true)}
          className="fixed bottom-6 right-6 z-50 bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-lg transition-colors"
        >
          <div className="relative">
            <ShoppingCart size={24} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
              {getTotalItems()}
            </span>
          </div>
        </motion.button>
      )}

      {/* Cart Sidebar */}
      <AnimatePresence>
        {showCart && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setShowCart(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Cart Header */}
              <div className="p-6 border-b bg-gray-50">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Warenkorb ({getTotalItems()})</h2>
                  <button
                    onClick={() => setShowCart(false)}
                    className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6">
                {Object.entries(cart).map(([productId, quantity]) => {
                  const product = products.find(p => p.id === productId);
                  if (!product) return null;

                  return (
                    <div key={productId} className="flex items-center gap-4 py-4 border-b last:border-b-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded-lg"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://vibemedia.space/cart_fallback_4j7k9l2m_888${product.name}.png?prompt=${encodeURIComponent(product.name + ' fish product icon')}&key=NOGON`;
                        }}
                      />
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{product.name}</h3>
                        <p className="text-emerald-600 font-semibold">€{product.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => removeFromCart(productId)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center">{quantity}</span>
                        <button
                          onClick={() => addToCart(productId)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Cart Footer */}
              <div className="p-6 border-t bg-gray-50">
                <div className="flex justify-between text-xl font-bold mb-4">
                  <span>Gesamt:</span>
                  <span className="text-emerald-600">€{getTotalPrice().toFixed(2)}</span>
                </div>
                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold transition-colors">
                  Zur Kasse
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Shopify Configuration Modal */}
      <AnimatePresence>
        {showShopifyConfig && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl p-6 w-full max-w-md"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Shopify Konfiguration
              </h3>
              
              {shopifyConnected && (
                <div className="mb-4 p-3 bg-emerald-100 text-emerald-800 rounded-lg flex items-center gap-2">
                  <CheckCircle size={16} />
                  <span className="text-sm">Mit Shopify verbunden</span>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Shop Domain
                  </label>
                  <input
                    type="text"
                    value={shopifyCredentials.shopDomain}
                    onChange={(e) => setShopifyCredentials(prev => ({ ...prev, shopDomain: e.target.value }))}
                    placeholder="mein-shop"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Storefront Access Token
                  </label>
                  <input
                    type="password"
                    value={shopifyCredentials.storefrontToken}
                    onChange={(e) => setShopifyCredentials(prev => ({ ...prev, storefrontToken: e.target.value }))}
                    placeholder="Ihr Token"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="flex gap-2 mt-6">
                <button
                  onClick={() => setShowShopifyConfig(false)}
                  className="flex-1 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg transition-colors"
                >
                  Abbrechen
                </button>
                {shopifyConnected && (
                  <button
                    onClick={disconnectShopify}
                    className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                  >
                    Trennen
                  </button>
                )}
                <button
                  onClick={connectToShopify}
                  className="flex-1 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors"
                >
                  {shopifyConnected ? 'Aktualisieren' : 'Verbinden'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Shop;
