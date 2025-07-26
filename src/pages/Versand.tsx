import React from 'react';
import Layout from '../components/Layout';
import { Fish, Package, Truck, Clock, MapPin, Euro, AlertTriangle, Snowflake, Recycle } from 'lucide-react';

const Versand = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 relative">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative container mx-auto px-4 py-8 lg:py-16">
          {/* Header Section */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent mb-4">
              Versand
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Informationen zu Verpackung, Lieferung und Versandkosten
            </p>
          </div>

          {/* Content Sections */}
          <div className="max-w-4xl mx-auto space-y-8">

            {/* Packaging and Cooling */}
            <div className="backdrop-blur-sm bg-card/50 border border-border/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] animate-fade-in">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Snowflake className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Verpackung und Kühlung</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Unsere Fischprodukte werden stets frisch verarbeitet, vakuumiert und in einer hochwertigen Isolierverpackung (XPS-Box) versendet. Um die Kühlkette zuverlässig für 24 bis 48 Stunden – je nach Außentemperatur – zu gewährleisten, legen wir der Sendung ausreichend wasserbasierte Kühlelemente bei.
                  </p>
                  <div className="bg-muted/30 rounded-lg p-4 border-l-4 border-primary">
                    <div className="flex items-start gap-3">
                      <Recycle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Die Kühlelemente sind ungefährlich und ungiftig, können problemlos wiederverwendet oder – nach Entleerung – in der gelben Tonne entsorgt werden. Auch die XPS-Isolierbox ist recyclingfähig und darf ebenfalls über die gelbe Tonne entsorgt oder privat weiterverwendet werden (z. B. zur Kühlung eigener Lebensmittel).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Shipping Service and Delivery Times */}
            <div className="backdrop-blur-sm bg-card/50 border border-border/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] animate-fade-in">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Versanddienstleister und Lieferzeiten</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Der Versand erfolgt ausschließlich mit unserem zuverlässigen Express-Partner GO! Express im Modus "Next Day – Zustellung bis 12 Uhr".
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Lieferungen erfolgen von Dienstag bis Samstag. Montags erfolgt keine Zustellung, da eine frische Anlieferung am Wochenbeginn nicht gewährleistet werden kann.
                  </p>

                  <div className="bg-muted/30 rounded-lg p-4 border-l-4 border-primary">
                    <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      Versandzeiten im Überblick:
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Bestellungen bis 14:00 Uhr (mit Zahlungseingang) werden noch am selben Tag versendet.</li>
                      <li>• Bestellungen nach 14:00 Uhr oder mit späterem Zahlungseingang werden am folgenden Versandtag verschickt.</li>
                      <li>• Auf Wunsch kann im Bestellprozess ein Wunschtermin für die Zustellung angegeben werden.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Shipping Costs */}
            <div className="backdrop-blur-sm bg-card/50 border border-border/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] animate-fade-in">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Euro className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Versandkosten</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-muted/30 rounded-lg p-4 border border-border/30">
                      <h3 className="font-semibold text-foreground mb-2">Dienstag bis Freitag</h3>
                      <p className="text-2xl font-bold text-primary">9,90 €</p>
                      <p className="text-sm text-muted-foreground">inkl. MwSt. (Expressversandpauschale)</p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4 border border-border/30">
                      <h3 className="font-semibold text-foreground mb-2">Samstagszustellung</h3>
                      <p className="text-2xl font-bold text-primary">19,90 €</p>
                      <p className="text-sm text-muted-foreground">inkl. MwSt. (inkl. Samstagszuschlag)</p>
                    </div>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-4 border-l-4 border-primary mt-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground text-sm">
                        <strong>Versand auf deutsche Inseln:</strong> Bitte vor Bestellung eine individuelle Versandkostenanfrage an <a href="mailto:info@alpirsbacher-fischzucht.de" className="text-primary hover:underline">info@alpirsbacher-fischzucht.de</a> senden.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Minimum Order Value */}
            <div className="backdrop-blur-sm bg-card/50 border border-border/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] animate-fade-in">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Mindestbestellwert</h2>
                  <div className="bg-muted/30 rounded-lg p-6 text-center border border-border/30">
                    <p className="text-3xl font-bold text-primary mb-2">39 €</p>
                    <p className="text-muted-foreground">inkl. MwSt. (Warengesamtwert)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Delivery and Acceptance Notes */}
            <div className="backdrop-blur-sm bg-card/50 border border-border/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] animate-fade-in">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-amber-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Hinweise zur Lieferung und Annahme</h2>
                  <ul className="space-y-3 text-muted-foreground leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Bitte stellen Sie sicher, dass die Sendung am Liefertag persönlich entgegengenommen werden kann.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Da es sich um verderbliche Ware handelt, ist eine fristgerechte Annahme notwendig.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Ein verspäteter Empfang kann die Qualität der Produkte beeinträchtigen und schließt eine Rücknahme oder Erstattung aus.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Liability Notice */}
            <div className="backdrop-blur-sm bg-destructive/5 border border-destructive/20 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] animate-fade-in">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Wichtiger Hinweis zur Haftung</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Wir garantieren eine durchgehende Kühlkette bis zur ersten Zustellung. Sollte die Annahme der Sendung vom Empfänger nicht erfolgen oder ein Ablageort ohne Kühlmöglichkeit vereinbart worden sein, übernehmen wir keine Haftung für Qualitätseinbußen.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Versand;