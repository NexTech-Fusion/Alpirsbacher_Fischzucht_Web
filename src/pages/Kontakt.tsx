
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import Layout from '../components/Layout';

const Kontakt = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Vielen Dank für Ihre Nachricht! Wir melden uns bald bei Ihnen.');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://vibemedia.space/contact_hero_l8m7n6o5_012.png?prompt=black%20forest%20germany%20landscape%20with%20traditional%20german%20house%20fish%20farm%20contact%20peaceful%20rural%20setting&key=BT4VR')`
          }}
        >
          <div className="absolute inset-0 bg-forest-green/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="text-brushed-brass">Kontakt</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-light"
          >
            Wir freuen uns auf Ihre Nachricht
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-stone-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-serif text-3xl font-bold text-forest-green mb-6">
                  Sprechen Sie uns an
                </h2>
                <p className="text-walnut-brown text-lg leading-relaxed">
                  Haben Sie Fragen zu unseren Produkten, möchten eine Bestellung aufgeben 
                  oder sind interessiert an einer Partnerschaft? Wir sind gerne für Sie da.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-brushed-brass mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-forest-green mb-1">Adresse</h3>
                    <p className="text-walnut-brown">
                      Alpirsbach Fischzucht<br />
                      Familie Müller<br />
                      Forellenweg 15<br />
                      72275 Alpirsbach<br />
                      Deutschland
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-brushed-brass mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-forest-green mb-1">Telefon</h3>
                    <p className="text-walnut-brown">
                      +49 7444 1234567<br />
                      Mobil: +49 170 1234567
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-brushed-brass mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-forest-green mb-1">E-Mail</h3>
                    <p className="text-walnut-brown">
                      info@alpirsbach-fischzucht.de<br />
                      bestellung@alpirsbach-fischzucht.de
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-brushed-brass mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-forest-green mb-1">Öffnungszeiten</h3>
                    <div className="text-walnut-brown">
                      <p>Montag - Freitag: 8:00 - 17:00 Uhr</p>
                      <p>Samstag: 8:00 - 14:00 Uhr</p>
                      <p>Sonntag: Nach Vereinbarung</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="font-serif text-2xl font-bold text-forest-green mb-6">
                Schreiben Sie uns
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-walnut-brown font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-stone-beige rounded-lg focus:ring-2 focus:ring-brushed-brass focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-walnut-brown font-medium mb-2">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-stone-beige rounded-lg focus:ring-2 focus:ring-brushed-brass focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-walnut-brown font-medium mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-stone-beige rounded-lg focus:ring-2 focus:ring-brushed-brass focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-walnut-brown font-medium mb-2">
                    Betreff *
                  </label>
                  <select
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-stone-beige rounded-lg focus:ring-2 focus:ring-brushed-brass focus:border-transparent"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="bestellung">Bestellung</option>
                    <option value="partnerschaft">Partnerschaft</option>
                    <option value="allgemein">Allgemeine Anfrage</option>
                    <option value="besichtigung">Betriebsbesichtigung</option>
                  </select>
                </div>

                <div>
                  <label className="block text-walnut-brown font-medium mb-2">
                    Nachricht *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-stone-beige rounded-lg focus:ring-2 focus:ring-brushed-brass focus:border-transparent resize-none"
                    placeholder="Teilen Sie uns mit, wie wir Ihnen helfen können..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-forest-green hover:bg-forest-green/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Nachricht senden
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Kontakt;
