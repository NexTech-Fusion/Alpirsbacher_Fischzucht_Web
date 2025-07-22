# Alpirsbacher Fischzucht Web

Eine moderne React-Anwendung für die Alpirsbacher Fischzucht mit integriertem Shop-System.

## Architektur: Multi-Entry Build

Diese Anwendung nutzt ein Multi-Entry Build-System, das es ermöglicht, den Shop als separate Anwendung zu deployen, während alle Komponenten und das Styling geteilt werden.

### Verfügbare Anwendungen

1. **Hauptanwendung** (`index.html`): Vollständige Website mit Home, Fischzucht, Über uns, etc.
2. **Shop-Anwendung** (`shop.html`): Standalone Shop mit vereinfachter Navigation

## Entwicklung

### Installation
```bash
npm install
```

### Entwicklungsserver starten
```bash
# Hauptanwendung (läuft auf http://localhost:8080)
npm run dev

# Shop-Anwendung separat testen
npm run dev:shop
```

### Build

```bash
# Beide Anwendungen bauen
npm run build

# Nur Hauptanwendung bauen  
npm run build:main

# Nur Shop-Anwendung bauen
npm run build:shop
```

### Preview

```bash
# Hauptanwendung preview
npm run preview

# Shop-Anwendung preview  
npm run preview:shop
```

## Deployment Strategien

### Strategie 1: Separate Domains
- **Hauptseite**: `yoursite.com` → Deploy `dist/index.html` und Assets
- **Shop**: `shop.yoursite.com` → Deploy `dist/shop.html` und Assets

### Strategie 2: Subdomains
- **Hauptseite**: `alpirsbacher-fischzucht.de`
- **Shop**: `shop.alpirsbacher-fischzucht.de`

### Strategie 3: Separate Pfade
- **Hauptseite**: `yoursite.com/` 
- **Shop**: `yoursite.com/shop/` (mit entsprechender Server-Konfiguration)

## Shared Components

Beide Anwendungen teilen sich:
- ✅ **UI Components** (`src/components/ui/`)
- ✅ **Styling** (TailwindCSS, alle Farben und Themes)
- ✅ **Business Logic** (Shopify Integration, etc.)
- ✅ **Assets** (Bilder, Logos, etc.)
- ✅ **Types** und **Utilities**

## Unterschiede zwischen den Anwendungen

| Feature | Hauptanwendung | Shop-Anwendung |
|---------|---------------|----------------|
| Navigation | Vollständige Navigation | Vereinfachte Shop-Navigation |
| Footer | Umfangreicher Footer | Kompakter Shop-Footer |
| Routing | Alle Seiten | Nur Shop-relevante Features |
| Bundle Größe | Vollständig | Optimiert für Shop |

## Vorteile dieser Architektur

1. **Geteilte Codebasis**: Ein Repository für beide Anwendungen
2. **Konsistentes Design**: Identische UI-Components und Styling
3. **Flexible Deployment**: Unabhängige Deployment-Optionen
4. **Performance**: Optimierte Bundles für jeden Use Case
5. **Wartbarkeit**: Änderungen am Design betreffen beide Apps automatisch

## Shopify Integration

Die Shop-Anwendung kann mit verschiedenen Shopify-Einstellungen konfiguriert werden:

- Lokale Fallback-Produkte für Entwicklung
- Shopify Storefront API Integration
- Automatisches Caching und Offline-Support

## Technologie Stack

- **React 18** mit TypeScript
- **Vite** für Multi-Entry Builds
- **TailwindCSS** für Styling
- **Framer Motion** für Animationen
- **Shopify Storefront API** für E-Commerce
- **Shadcn/ui** für UI-Komponenten
