import React from 'react';
import Layout from '../components/Layout';
import { Fish, Mail, ArrowLeft, Clock, Package, AlertTriangle, RefreshCw, Shield, CheckCircle, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Widerrufsrecht = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 relative">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative container mx-auto px-4 py-8 lg:py-16">
          {/* Back Link */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Zurück zur Startseite
          </Link>

          {/* Header Section */}
          <div className="text-center mb-12 animate-fade-in">
            {/* Company Logo with Decorative Lines */}
            <div className="flex items-center justify-center mb-8">
              <div className="hidden md:block h-px bg-gradient-to-r from-transparent via-border to-border flex-1 max-w-24"></div>
              <div className="flex items-center space-x-3 mx-4">
                <Fish className="h-10 w-10 text-primary" />
                <div className="flex flex-col">
                  <span className="font-serif text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                    Alpirsbacher
                  </span>
                  <span className="font-serif text-lg lg:text-xl text-primary leading-tight opacity-90">
                    Fischzucht
                  </span>
                </div>
              </div>
              <div className="hidden md:block h-px bg-gradient-to-l from-transparent via-border to-border flex-1 max-w-24"></div>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent mb-4">
              Widerrufsrecht
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Informationen zu Ihrem Widerrufsrecht und Rückgabebedingungen
            </p>
          </div>

          {/* Content Sections */}
          <div className="max-w-4xl mx-auto space-y-8">

            {/* 14-Day Return Policy */}
            <div className="backdrop-blur-sm bg-card/50 border border-border/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] animate-fade-in">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">14-Tägiges Rückgaberecht</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Wir gewähren ein 14-tägiges Rückgaberecht. Das bedeutet, dass du nach Erhalt deines Artikels 14 Tage Zeit hast, um eine Rückgabe anzufordern.
                  </p>
                </div>
              </div>
            </div>

            {/* Return Conditions */}
            <div className="backdrop-blur-sm bg-card/50 border border-border/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] animate-fade-in">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Rückgabebedingungen</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Um für eine Rückgabe berechtigt zu sein, muss sich der Artikel in demselben Zustand befinden, in dem du ihn erhalten hast, ungenutzt und mit Etiketten versehen sein und sich in der Originalverpackung befinden. Außerdem benötigst du den Beleg oder einen anderen Kaufnachweis.
                  </p>
                </div>
              </div>
            </div>

            {/* How to Initiate Return */}
            <div className="backdrop-blur-sm bg-card/50 border border-border/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] animate-fade-in">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Rückgabe einleiten</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Um eine Rückgabe einzuleiten, kannst du uns unter <a href="mailto:info@alpirsbacher-fischzucht.de" className="text-primary hover:underline">info@alpirsbacher-fischzucht.de</a> kontaktieren. Bitte beachte, dass Rückgaben an die folgende Adresse gesendet werden müssen:
                  </p>
                  <div className="bg-muted/30 rounded-lg p-4 border-l-4 border-primary">
                    <p className="font-semibold text-foreground">Alpirsbacher Fischzucht, Semke & Betz GbR</p>
                    <p className="text-muted-foreground">Reinerzauer Talstraße 260</p>
                    <p className="text-muted-foreground">72275 Alpirsbach</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Wenn deine Rückgabe akzeptiert wird, erhältst du von uns ein Rücksendeetikett sowie Anweisungen, wie und wohin du das Paket versenden sollst. Artikel, die an uns zurückgesendet werden, ohne dass zuvor eine Rückgabe angefordert wurde, werden nicht akzeptiert.
                  </p>
                </div>
              </div>
            </div>

            {/* Damages and Problems */}
            <div className="backdrop-blur-sm bg-card/50 border border-border/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] animate-fade-in">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Schäden und Probleme</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Bitte überprüfe deine Bestellung bei Erhalt und kontaktiere uns sofort, wenn der Artikel defekt oder beschädigt ist oder wenn du einen falschen Artikel erhalten hast, damit wir das Problem auswerten und beheben können.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Bei Fragen zur Rückgabe kannst du uns jederzeit unter <a href="mailto:info@alpirsbacher-fischzucht.de" className="text-primary hover:underline">info@alpirsbacher-fischzucht.de</a> kontaktieren.
                  </p>
                </div>
              </div>
            </div>

            {/* Exceptions */}
            <div className="backdrop-blur-sm bg-card/50 border border-border/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] animate-fade-in">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center">
                  <XCircle className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Ausnahmen / nicht für eine Rückgabe berechtigte Artikel</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Bestimmte Artikel können nicht zurückgegeben werden, z. B. verderbliche Waren (z. B. Lebensmittel wie Fisch, Blumen oder Pflanzen) und Sonderanfertigungen (z. B. Sonderbestellungen oder personalisierte Artikel). Wir akzeptieren auch keine Rückgaben von gefährlichen Materialien, entflammbaren Flüssigkeiten oder Gasen. Bitte setze dich mit uns in Verbindung, wenn du Fragen oder Bedenken zu einem speziellen Artikel hast.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Leider können wir keine Rückgaben von Angebotsartikeln oder Gutscheinen akzeptieren.
                  </p>
                </div>
              </div>
            </div>

            {/* No Withdrawal Right for Perishable Goods */}
            <div className="backdrop-blur-sm bg-card/50 border border-border/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] animate-fade-in">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center">
                  <Package className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">1. Kein Widerrufsrecht bei schnell verderblichen Waren</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Gemäß § 312g Abs. 2 Nr. 2 BGB besteht kein Widerrufsrecht bei Verträgen zur Lieferung von Waren, die schnell verderben können oder deren Verfallsdatum schnell überschritten würde.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Dazu zählen insbesondere unsere frischen und geräucherten Fischprodukte, die unter Einhaltung der Kühlkette in Isolierboxen versendet werden. Ein Widerruf oder eine Rückgabe dieser Waren ist daher ausgeschlossen.
                  </p>
                </div>
              </div>
            </div>

            {/* Withdrawal Right for Non-Perishable Goods */}
            <div className="backdrop-blur-sm bg-card/50 border border-border/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] animate-fade-in">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">2. Widerrufsrecht für nicht-verderbliche Waren</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Für alle anderen Produkte, wie z. B. Gewürze, Weine, Zubehör oder andere haltbare Artikel, gilt das gesetzliche Widerrufsrecht wie folgt:
                  </p>
                </div>
              </div>
            </div>

            {/* Withdrawal Instruction */}
            <div className="backdrop-blur-sm bg-card/50 border border-border/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] animate-fade-in">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <RefreshCw className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Widerrufsbelehrung (für nicht-verderbliche Waren)</h3>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Widerrufsrecht</h4>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Sie haben das Recht, binnen 14 Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Die Widerrufsfrist beträgt 14 Tage ab dem Tag,<br/>
                    – an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die Ware(n) in Besitz genommen haben bzw. hat,<br/>
                    – im Falle einer Teillieferung: an dem Sie oder ein Dritter die letzte Teilsendung erhalten haben.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Um Ihr Widerrufsrecht auszuüben, müssen Sie uns
                  </p>
                  <div className="bg-muted/30 rounded-lg p-4 border-l-4 border-primary mb-4">
                    <p className="font-semibold text-foreground">Alpirsbacher Fischzucht</p>
                    <p className="font-semibold text-foreground">Semke & Betz GbR</p>
                    <p className="text-muted-foreground">Reinerzauer Talstraße 260</p>
                    <p className="text-muted-foreground">72275 Alpirsbach</p>
                    <p className="text-muted-foreground">E-Mail: info@alpirsbacher-fischzucht.de</p>
                    <p className="text-muted-foreground">Telefon: 0151-54888979</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    mittels einer eindeutigen Erklärung (z. B. per E-Mail oder Post) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren.
                  </p>
                </div>
              </div>
            </div>

            {/* Consequences of Withdrawal */}
            <div className="backdrop-blur-sm bg-card/50 border border-border/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] animate-fade-in">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Folgen des Widerrufs</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Wenn Sie diesen Vertrag widerrufen, erstatten wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme etwaiger zusätzlicher Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen 14 Tagen ab dem Tag, an dem die Mitteilung über Ihren Widerruf bei uns eingegangen ist.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Für die Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, es wurde ausdrücklich etwas anderes vereinbart.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Wir können die Rückzahlung verweigern, bis wir die Waren zurückerhalten haben oder Sie den Nachweis erbracht haben, dass Sie die Waren zurückgesandt haben – je nachdem, welches der frühere Zeitpunkt ist.
                  </p>
                </div>
              </div>
            </div>

            {/* Return of Goods */}
            <div className="backdrop-blur-sm bg-card/50 border border-border/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] animate-fade-in">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Rücksendung der Ware</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Sie haben die Waren unverzüglich und in jedem Fall spätestens binnen 14 Tagen ab dem Tag, an dem Sie uns über den Widerruf informieren, an uns zurückzusenden oder zu übergeben.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Die unmittelbaren Kosten der Rücksendung tragen Sie selbst.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Für einen etwaigen Wertverlust der Waren müssen Sie nur aufkommen, wenn dieser auf einen zur Prüfung der Beschaffenheit, Eigenschaften und Funktionsweise der Waren nicht notwendigen Umgang mit ihnen zurückzuführen ist.
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

export default Widerrufsrecht;