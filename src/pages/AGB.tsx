import React from 'react';
import Layout from '../components/Layout';
import { Fish, FileText, Shield, Scale, Truck, CreditCard, Clock, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

const AGB = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const sections = [
    {
      title: "1. Geltungsbereich",
      icon: Scale,
      content: "Diese Allgemeinen Geschäftsbedingungen gelten für alle Bestellungen, die Verbraucher (§ 13 BGB) über unseren Online-Shop tätigen. Ein Verbraucher ist jede natürliche Person, die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbstständigen beruflichen Tätigkeit zugerechnet werden können."
    },
    {
      title: "2. Vertragspartner, Vertragsschluss",
      icon: FileText,
      content: `Der Kaufvertrag kommt zustande mit:
Alpirsbacher Fischzucht – Semke & Betz GbR
Vertreten durch die Inhaber Tobias Semke und Thomas Betz
Reinerzauer Talstraße 260, 72275 Alpirsbach

E-Mail: info@alpirsbacher-fischzucht.de

Die Darstellung der Produkte im Online-Shop stellt kein rechtlich bindendes Angebot, sondern eine Aufforderung zur Bestellung dar. Durch Anklicken des Bestellbuttons geben Sie ein verbindliches Angebot zum Kauf der im Warenkorb befindlichen Waren ab. Die Bestätigung des Eingangs der Bestellung erfolgt per E-Mail unmittelbar nach dem Absenden der Bestellung. Der Kaufvertrag kommt mit unserer ausdrücklichen Bestellbestätigung oder spätestens mit Versand der Ware zustande.`
    },
    {
      title: "3. Preise und Versandkosten",
      icon: CreditCard,
      content: "Die auf den Produktseiten genannten Preise enthalten die gesetzliche Mehrwertsteuer und verstehen sich zuzüglich Versandkosten. Informationen zu Versandkosten und möglichen Kühlverpackungen finden Sie auf der Versandinformationsseite oder im Bestellvorgang."
    },
    {
      title: "4. Lieferung und Versandbedingungen",
      icon: Truck,
      content: `Die Lieferung erfolgt ausschließlich innerhalb Deutschlands, sofern nichts anderes vereinbart wurde. Frische- und Räucherfischprodukte werden in geeigneten Isolierboxen und ggf. über unseren Expressversanddienstleister GO! Express versendet. Der Versand erfolgt an die vom Kunden angegebene Lieferadresse.

Der Versand erfolgt an den vereinbarten Tagen und unter Einhaltung der gesetzlichen Kühlkettenpflicht. Eine Annahmeverweigerung oder verspätete Entgegennahme kann zum Verderb der Ware führen – hierfür übernehmen wir keine Haftung.`
    },
    {
      title: "5. Ausschluss des Widerrufsrechts bei verderblicher Ware",
      icon: AlertTriangle,
      content: `Ein Widerrufsrecht besteht nicht bei Verträgen zur Lieferung von Waren,
• die schnell verderben können oder
• deren Verfallsdatum schnell überschritten würde
(§ 312g Abs. 2 Nr. 2 BGB).

Dies betrifft insbesondere unsere frischen und geräucherten Fischprodukte.

Für andere, nicht-verderbliche Waren wie Gewürze, Weine oder Zubehör, besteht ein 14-tägiges Widerrufsrecht. Die Widerrufsbedingungen entnehmen Sie bitte der separaten Widerrufsbelehrung.`
    },
    {
      title: "6. Zahlung",
      icon: CreditCard,
      content: `Die Zahlung erfolgt wahlweise per
• Sofortüberweisung
• PayPal
• Kreditkarte
• oder anderen im Online-Shop angegebenen Zahlungsmethoden.

Die Zahlung ist mit Vertragsschluss fällig. Bei Zahlungsverzug behalten wir uns vor, Mahngebühren zu erheben.`
    },
    {
      title: "7. Eigentumsvorbehalt",
      icon: Shield,
      content: "Die Ware bleibt bis zur vollständigen Bezahlung unser Eigentum."
    },
    {
      title: "8. Transportschäden",
      icon: Truck,
      content: "Werden Waren mit offensichtlichen Transportschäden geliefert, reklamieren Sie solche Fehler bitte möglichst sofort beim Zusteller und setzen Sie sich schnellstmöglich mit uns in Verbindung. Die Versäumung einer Reklamation hat keine Konsequenzen für Ihre gesetzlichen Ansprüche, hilft uns aber bei der Durchsetzung gegenüber dem Versanddienstleister."
    },
    {
      title: "9. Gewährleistung",
      icon: Shield,
      content: "Es gelten die gesetzlichen Mängelhaftungsrechte. Bei Lebensmitteln ist die Haltbarkeit begrenzt. Beanstandungen müssen daher unverzüglich nach Erhalt gemeldet werden, insbesondere bei Frischware."
    },
    {
      title: "10. Jugendschutz",
      icon: AlertTriangle,
      content: "Der Verkauf von alkoholischen Produkten (z. B. Wein) erfolgt nur an Personen über 18 Jahre. Mit Absenden der Bestellung bestätigen Sie, dass Sie volljährig sind. Der Zusteller ist berechtigt, eine Altersverifikation bei Lieferung durchzuführen."
    },
    {
      title: "11. Streitbeilegung / Schlichtung",
      icon: Scale,
      content: `Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
https://ec.europa.eu/consumers/odr

Zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle sind wir nicht verpflichtet und nicht bereit.`
    },
    {
      title: "12. Schlussbestimmungen",
      icon: FileText,
      content: "Sollten einzelne Bestimmungen dieser AGB ganz oder teilweise unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts."
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section with Company Branding */}
        <section className="relative py-20 bg-gradient-to-br from-card/30 to-background overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
          </div>

          <div className="relative container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.div variants={fadeInUp} className="space-y-4">
                <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Allgemeine Geschäftsbedingungen
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Gültig für alle Bestellungen über unseren Online-Shop
                </p>
              </motion.div>

              {/* Company Information Header */}
              <motion.div
                className="mt-8 bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6"
                variants={fadeInUp}
              >
                <div className="text-center space-y-2">
                  <h2 className="text-xl font-bold text-foreground">Alpirsbacher Fischzucht – Semke & Betz GbR</h2>
                  <div className="text-muted-foreground space-y-1">
                    <p>Reinerzauer Talstraße 260</p>
                    <p>72275 Alpirsbach</p>
                    <p className="text-sm opacity-80">(im Folgenden „Verkäufer")</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-6xl mx-auto"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {sections.map((section, index) => (
                  <motion.div
                    key={index}
                    className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 space-y-4"
                    variants={fadeInUp}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                        <section.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="space-y-4 flex-1">
                        <h2 className="text-xl font-bold text-foreground">{section.title}</h2>
                        <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                          {section.content}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Important Notice */}
              <motion.div
                className="mt-12 bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center"
                variants={fadeInUp}
              >
                <div className="max-w-3xl mx-auto">
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Clock className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Wichtiger Hinweis für Frischware</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Bitte beachten Sie, dass für frische und geräucherte Fischprodukte aufgrund ihrer Verderblichkeit
                    besondere Bedingungen gelten. Diese Produkte sind vom Widerrufsrecht ausgeschlossen und müssen
                    unverzüglich nach Erhalt überprüft werden.
                  </p>
                </div>
              </motion.div>

              {/* Legal Disclaimer */}
              <motion.div
                className="mt-8 bg-muted/20 rounded-2xl p-8 text-center"
                variants={fadeInUp}
              >
                <div className="max-w-3xl mx-auto">
                  <h3 className="text-lg font-bold text-foreground mb-4">Stand der AGB</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Diese Allgemeinen Geschäftsbedingungen sind ab dem {new Date().toLocaleDateString('de-DE')} gültig.
                    Wir behalten uns vor, diese Bedingungen bei Bedarf anzupassen. Die jeweils aktuelle Fassung
                    finden Sie stets auf unserer Website.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AGB;