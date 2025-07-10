
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Plus, Minus, Star, Truck, Award } from 'lucide-react';
import Layout from '../components/Layout';

interface Product {
  id: number;
  name: string;
  price: number;
  unit: string;
  description: string;
  image: string;
  rating: number;
  inStock: boolean;
}

const Shop = () => {
  const [cart, setCart] = useState<{[key: number]: number}>({});

  const products: Product[] = [
    {
      id: 1,
      name: 'Frische Forelle',
      price: 18.90,
      unit: 'kg',
      description: 'Frisch gefangene Forellen aus unserem eigenen Zuchtbetrieb. Perfekt für das Grillen oder Braten.',
      image: 'fresh_trout_m7n6o5p4_013.png?prompt=fresh%20rainbow%20trout%20fish%20premium%20quality%20on%20ice%20luxury%20presentation%20black%20forest%20germany&key=BT4VR',
      rating: 5,
      inStock: true
    },
    {
      id: 2,
      name: 'Räucherforelle',
      price: 24.50,
      unit: 'kg',
      description: 'Traditionell geräucherte Forellen nach altem Familienrezept. Ein Genuss für besondere Anlässe.',
      image: 'smoked_trout_n6o5p4q3_014.png?prompt=smoked%20trout%20traditional%20german%20preparation%20golden%20brown%20artisanal%20quality%20premium%20delicacy&key=BT4VR',
      rating: 5,
      inStock: true
    },
    {
      id: 3,
      name: 'Forellenfilet',
      price: 32.00,
      unit: 'kg',
      description: 'Sorgfältig filetierte Forellen, küchenfertig und von höchster Qualität.',
      image: 'trout_fillet_o5p4q3r2_015.png?prompt=fresh%20trout%20fillets%20professional%20cut%20premium%20quality%20restaurant%20grade%20pink%20flesh&key=BT4VR',
      rating: 5,
      inStock: true
    },
    {
      id: 4,
      name: 'Forellen-Paket Familie',
      price: 45.00,
      unit: 'Paket',
      description: 'Perfekt für Familien: 3kg gemischte Forellen-Produkte in einer praktischen Kühlbox.',
      image: 'family_package_p4q3r2s1_016.png?prompt=family%20fish%20package%20assorted%20trout%20products%20cooling%20box%20premium%20presentation%20variety&key=BT4VR',
      rating: 5,
      inStock: true
    },
    {
      id: 5,
      name: 'Gourmet Räucherbox',
      price: 65.00,
      unit: 'Box',
      description: 'Exklusive Auswahl verschiedener geräucherter Forellen-Spezialitäten für Feinschmecker.',
      image: 'gourmet_box_q3r2s1t0_017.png?prompt=luxury%20gourmet%20smoked%20fish%20gift%20box%20premium%20assortment%20elegant%20packaging%20delicacy&key=BT4VR',
      rating: 5,
      inStock: false
    },
    {
      id: 6,
      name: 'Forellen-Kaviar',
      price: 85.00,
      unit: '100g',
      description: 'Exklusiver Forellen-Kaviar aus eigener Produktion. Eine seltene Delikatesse.',
      image: 'trout_caviar_r2s1t0u9_018.png?prompt=premium%20trout%20caviar%20luxury%20delicacy%20small%20glass%20jar%20orange%20pearls%20gourmet%20presentation&key=BT4VR',
      rating: 5,
      inStock: true
    }
  ];

  const addToCart = (productId: number) => {
    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
  };

  const removeFromCart = (productId: number) => {
    if (cart[productId] > 1) {
      setCart(prev => ({
        ...prev,
        [productId]: prev[productId] - 1
      }));
    } else {
      setCart(prev => {
        const newCart = { ...prev };
        delete newCart[productId];
        return newCart;
      });
    }
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, count) => sum + count, 0);
  };

  const getTotalPrice = () => {
    return Object.entries(cart).reduce((sum, [productId, count]) => {
      const product = products.find(p => p.id === parseInt(productId));
      return sum + (product ? product.price * count : 0);
    }, 0);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://vibemedia.space/shop_hero_s1t0u9v8_019.png?prompt=premium%20fish%20market%20display%20fresh%20trout%20elegant%20presentation%20luxury%20food%20shopping%20experience&key=BT4VR')`
          }}
        >
          <div className="absolute inset-0 bg-forest-green/70"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="text-brushed-brass">Shop</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-light"
          >
            Frische Premium-Forellen direkt zu Ihnen
          </motion.p>
        </div>

        {/* Cart Indicator */}
        {getTotalItems() > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="fixed top-24 right-4 z-50 bg-brushed-brass text-forest-green px-4 py-2 rounded-full shadow-lg"
          >
            <div className="flex items-center gap-2">
              <ShoppingCart size={20} />
              <span className="font-semibold">{getTotalItems()}</span>
              <span className="text-sm">€{getTotalPrice().toFixed(2)}</span>
            </div>
          </motion.div>
        )}
      </section>

      {/* Features */}
      <section className="py-12 bg-stone-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Truck className="h-12 w-12 text-brushed-brass mx-auto mb-4" />
              <h3 className="font-semibold text-forest-green mb-2">Kostenloser Versand</h3>
              <p className="text-walnut-brown">Ab 50€ Bestellwert</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-brushed-brass mx-auto mb-4" />
              <h3 className="font-semibold text-forest-green mb-2">Premium Qualität</h3>
              <p className="text-walnut-brown">Direkt vom Erzeuger</p>
            </div>
            <div className="text-center">
              <Star className="h-12 w-12 text-brushed-brass mx-auto mb-4" />
              <h3 className="font-semibold text-forest-green mb-2">100% Frische</h3>
              <p className="text-walnut-brown">Kühl geliefert</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl font-bold text-forest-green mb-6">
              Unsere Produktauswahl
            </h2>
            <p className="text-walnut-brown text-lg max-w-3xl mx-auto">
              Entdecken Sie unsere frischen Forellen-Spezialitäten, 
              alle direkt aus unserer eigenen Zucht im Schwarzwald.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-stone-beige rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={`https://vibemedia.space/${product.image}`}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${i < product.rating ? 'fill-brushed-brass text-brushed-brass' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  
                  <h3 className="font-serif text-xl font-semibold text-forest-green mb-2">
                    {product.name}
                  </h3>
                  
                  <p className="text-walnut-brown text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-forest-green">
                      €{product.price.toFixed(2)}
                      <span className="text-sm text-walnut-brown font-normal">/{product.unit}</span>
                    </div>
                    {!product.inStock && (
                      <span className="text-sm text-red-600 font-medium">
                        Ausverkauft
                      </span>
                    )}
                  </div>
                  
                  {product.inStock ? (
                    <div className="flex items-center gap-2">
                      {cart[product.id] ? (
                        <div className="flex items-center gap-2 flex-1">
                          <button
                            onClick={() => removeFromCart(product.id)}
                            className="bg-walnut-brown hover:bg-walnut-brown/90 text-white p-2 rounded-lg transition-colors duration-300"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="flex-1 text-center font-semibold text-forest-green">
                            {cart[product.id]}
                          </span>
                          <button
                            onClick={() => addToCart(product.id)}
                            className="bg-brushed-brass hover:bg-brushed-brass/90 text-forest-green p-2 rounded-lg transition-colors duration-300"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => addToCart(product.id)}
                          className="w-full bg-forest-green hover:bg-forest-green/90 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                        >
                          <ShoppingCart size={18} />
                          In den Warenkorb
                        </button>
                      )}
                    </div>
                  ) : (
                    <button
                      disabled
                      className="w-full bg-gray-300 text-gray-500 px-4 py-3 rounded-lg font-semibold cursor-not-allowed"
                    >
                      Nicht verfügbar
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Info */}
      <section className="py-20 bg-forest-green text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Bestellung & Lieferung
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-left">
              <div>
                <h3 className="font-semibold text-brushed-brass mb-4">Bestellung:</h3>
                <ul className="space-y-2 text-sm opacity-90">
                  <li>• Online-Bestellung bis 16:00 Uhr</li>
                  <li>• Telefonische Bestellung: +49 7444 1234567</li>
                  <li>• Mindestbestellwert: 25€</li>
                  <li>• Zahlung per PayPal, Kreditkarte oder Rechnung</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-brushed-brass mb-4">Lieferung:</h3>
                <ul className="space-y-2 text-sm opacity-90">
                  <li>• Versand jeden Dienstag und Freitag</li>
                  <li>• Kostenlose Lieferung ab 50€</li>
                  <li>• Kühlkettenversand mit Trockeneis</li>
                  <li>• Lieferzeit: 1-2 Werktage</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
