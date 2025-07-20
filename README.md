# Alpirsbacher Fischzucht Web

> **Premium Trout Farm Website** - A modern, responsive web application for Alpirsbacher Fischzucht, showcasing sustainable fish farming in the German Black Forest with integrated e-commerce capabilities.

![Project Status](https://img.shields.io/badge/Status-Production%20Ready-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![Vite](https://img.shields.io/badge/Vite-5.4.1-purple)

## 🐟 Project Overview

Alpirsbacher Fischzucht is a sophisticated single-page application (SPA) that represents a premium trout farm business located in Alpirsbach, Germany. The website combines modern web technologies with elegant design to showcase sustainable aquaculture practices, direct marketing capabilities, and integrated e-commerce functionality.

### Business Context
- **Industry**: Sustainable Aquaculture & Direct Marketing
- **Location**: Alpirsbach, Black Forest Region, Germany
- **Focus**: Premium rainbow trout farming with traditional methods
- **Market**: B2C direct sales, local restaurants, and specialty food retailers

## 🚀 Technology Stack

### Core Framework
- **React 18.3.1** - Modern functional components with hooks
- **TypeScript 5.5.3** - Type-safe development
- **Vite 5.4.1** - Lightning-fast build tool and dev server

### Styling & UI
- **Tailwind CSS 3.4.11** - Utility-first CSS framework
- **shadcn/ui** - High-quality component library based on Radix UI
- **Framer Motion 12.23.3** - Advanced animations and interactions
- **Lucide React** - Beautiful SVG icons

### State Management & Routing
- **React Router DOM 6.26.2** - Client-side routing
- **TanStack Query 5.56.2** - Server state management
- **React Hook Form 7.53.0** - Form handling with validation

### E-commerce Integration
- **Shopify Storefront API** - Headless e-commerce backend
- **Custom Shopify Service** - Product management and cart functionality

### Developer Experience
- **ESLint** - Code linting and quality enforcement
- **PostCSS** - CSS processing and optimization
- **Lovable Tagger** - Development tool integration

## 📁 Project Architecture

```
Alpirsbacher_Fischzucht_Web/
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── ui/              # shadcn/ui component library
│   │   ├── home/            # Homepage-specific reusable components
│   │   ├── Layout.tsx       # Main layout wrapper
│   │   ├── Navigation.tsx   # Primary navigation component
│   │   ├── Footer.tsx       # Site footer
│   │   └── ScrollToTop.tsx  # Scroll behavior management
│   │
│   ├── pages/               # Page components (route handlers)
│   │   ├── Home.tsx         # Refactored homepage (previously Index.tsx)
│   │   ├── home/            # Homepage section components
│   │   ├── Fischzucht.tsx   # Fish farming information
│   │   ├── UeberUns.tsx     # About us / company story
│   │   ├── Shop.tsx         # E-commerce shop with Shopify integration
│   │   ├── Impressum.tsx    # Legal imprint (German law requirement)
│   │   ├── AGB.tsx          # Terms and conditions
│   │   ├── Widerrufsrecht.tsx # Right of withdrawal
│   │   ├── Versand.tsx      # Shipping information
│   │   └── NotFound.tsx     # 404 error page
│   │
│   ├── data/                # Static data and configuration
│   │   ├── partners.ts      # Business partner information
│   │   ├── heroImages.ts    # Homepage carousel images
│   │   └── qualityFeatures.ts # Product quality features
│   │
│   ├── lib/                 # Utility libraries and services
│   │   ├── shopify.ts       # Shopify Storefront API integration
│   │   └── utils.ts         # General utility functions
│   │
│   ├── types/               # TypeScript type definitions
│   │   └── product.ts       # Product and cart item interfaces
│   │
│   ├── hooks/               # Custom React hooks
│   │   ├── use-mobile.tsx   # Mobile detection hook
│   │   ├── use-toast.ts     # Toast notification management
│   │   ├── useContactForm.ts # Contact form state management
│   │   └── useHeroCarousel.ts # Carousel state management
│   │
│   ├── assets/              # Static media assets
│   │   ├── *.png            # Product images, logos, hero backgrounds
│   │   └── *.svg            # Vector graphics and icons
│   │
│   ├── App.tsx              # Root application component
│   ├── main.tsx             # Application entry point
│   ├── index.css            # Global styles and Tailwind imports
│   └── vite-env.d.ts        # Vite environment type definitions
│
├── public/                  # Static public assets
├── package.json             # Dependencies and scripts
├── vite.config.ts           # Vite configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── components.json          # shadcn/ui configuration
```

## 🏗️ Detailed Implementation Analysis

### 1. Homepage (`src/pages/Index.tsx`)
**Complexity**: High (791 lines)
- **Hero Section**: Split-screen design with image carousel and content
- **Product Showcase**: Premium trout presentation with quality features
- **Partner Integration**: Logos and descriptions of business partners
- **Contact Form**: Integrated contact functionality with toast notifications
- **Animations**: Sophisticated Framer Motion animations throughout

### 2. Navigation System (`src/components/Navigation.tsx`)
**Features**:
- Fixed header with scroll-based styling changes
- Mobile-responsive hamburger menu
- Decorative elements and logo presentation
- Smooth scroll integration for contact section
- Active route highlighting

### 3. E-commerce Shop (`src/pages/Shop.tsx`)
**Complexity**: High (906 lines)
- **Shopify Integration**: Full Storefront API implementation
- **Product Management**: Grid/list views, search, filtering, sorting
- **Shopping Cart**: Add/remove items, quantity management
- **Configuration**: Shopify credentials management
- **Responsive Design**: Mobile-optimized shopping experience

### 4. Shopify Service (`src/lib/shopify.ts`)
**Features**:
- **GraphQL Integration**: Storefront API queries
- **Data Transformation**: GID handling and product mapping
- **Caching Strategy**: Local storage for offline functionality
- **Error Handling**: Graceful fallbacks and connection testing
- **Type Safety**: Full TypeScript integration

### 5. Content Pages
- **Fish Farming** (`Fischzucht.tsx`): Detailed aquaculture process explanation
- **About Us** (`UeberUns.tsx`): Company history and values presentation
- **Legal Pages**: German law compliance (Impressum, AGB, etc.)

## 🎨 Design System

### Color Scheme
- **Primary**: Fish-inspired teal/green palette
- **Secondary**: Warm accent colors for CTAs
- **Background**: Clean, minimalist approach
- **Text**: High contrast for accessibility

### Component Architecture
- **Layout System**: Consistent page structure with `Layout.tsx`
- **UI Components**: shadcn/ui for consistent design language
- **Animations**: Framer Motion for smooth interactions
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

### Visual Elements
- **Typography**: Serif fonts for headings, clean sans-serif for body text
- **Images**: High-quality photography showcasing products and facilities
- **Icons**: Lucide React for consistent iconography
- **Spacing**: Consistent rhythm using Tailwind spacing scale

## 🔧 Setup and Development

### Prerequisites
- **Node.js**: Version 18+ recommended
- **npm**: Version 8+ or equivalent package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd Alpirsbacher_Fischzucht_Web

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
# Development server with hot reload
npm run dev

# Production build
npm run build

# Development build (for testing)
npm run build:dev

# Code linting
npm run lint

# Preview production build
npm run preview
```

### Environment Configuration

For Shopify integration, configure credentials in the shop settings:
- Shop Domain: Your Shopify store domain
- Storefront Access Token: Generate from Shopify Admin

## 🛒 E-commerce Features

### Shopify Integration
- **Headless Commerce**: Decoupled frontend from Shopify backend
- **Product Catalog**: Dynamic product loading from Shopify
- **Cart Management**: Local cart state with persistence
- **Responsive Design**: Mobile-optimized shopping experience

### Product Management
- **Categories**: Fish varieties and prepared products
- **Search & Filter**: Real-time product discovery
- **Image Optimization**: Automatic image handling
- **Inventory Tracking**: Stock status integration

## 🚀 Deployment

### Build Process
```bash
# Create production build
npm run build

# Output directory: dist/
# Ready for static hosting (Vercel, Netlify, etc.)
```

### Hosting Recommendations
- **Vercel**: Optimal for React/Vite applications
- **Netlify**: Excellent static site hosting
- **CDN**: Recommended for global distribution

## 🔍 Code Quality & Standards

### TypeScript Integration
- **Strict Mode**: Enhanced type safety
- **Interface Definitions**: Clear data contracts
- **Component Typing**: Props and state type safety

### Performance Optimizations
- **Code Splitting**: Automatic route-based splitting
- **Image Optimization**: Lazy loading and responsive images
- **Bundle Optimization**: Vite's built-in optimizations

### Accessibility
- **Semantic HTML**: Proper document structure
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG compliance

## 📱 Responsive Design

### Breakpoint Strategy
- **Mobile First**: Base styles for mobile devices
- **Tablet**: `md:` prefix (768px+)
- **Desktop**: `lg:` prefix (1024px+)
- **Large Screens**: `xl:` prefix (1280px+)

### Mobile Optimizations
- **Touch Targets**: Appropriate button sizes
- **Navigation**: Collapsible mobile menu
- **Images**: Responsive with art direction
- **Performance**: Optimized for mobile networks

## 🌐 Internationalization Ready

### Current Implementation
- **German Content**: Native German business content
- **URL Structure**: German route names (`/ueber-uns`, `/fischzucht`)
- **Legal Compliance**: German business law requirements

### Future I18n Considerations
- **Content Management**: Structured for translation
- **Route Architecture**: Language-agnostic design
- **Component Structure**: Separation of content and presentation

## 📊 Analytics & Monitoring

### Performance Metrics
- **Lighthouse Score**: Optimized for high scores
- **Core Web Vitals**: Excellent user experience metrics
- **Bundle Size**: Optimized with tree shaking

### Monitoring Recommendations
- **Error Tracking**: Sentry or similar service
- **Analytics**: Google Analytics 4 integration
- **Performance**: Real User Monitoring (RUM)

## 🔐 Security Considerations

### Data Protection
- **GDPR Compliance**: European privacy law adherence
- **Secure Communication**: HTTPS-only production
- **API Security**: Secure Shopify token handling

### Best Practices
- **Input Validation**: Form data sanitization
- **XSS Prevention**: React's built-in protections
- **CSRF Protection**: Stateless architecture

## 🤝 Contributing

### Development Workflow
1. **Fork** the repository
2. **Create** feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** changes (`git commit -m 'Add amazing feature'`)
4. **Push** to branch (`git push origin feature/amazing-feature`)
5. **Open** Pull Request

### Code Standards
- **ESLint**: Follow configured rules
- **TypeScript**: Maintain strict typing
- **Components**: Follow established patterns
- **Testing**: Add tests for new features

## 📄 License

This project is proprietary software for Alpirsbacher Fischzucht. All rights reserved.

## 📞 Support & Contact

For technical support or business inquiries:
- **Website**: [Live Site URL]
- **Email**: Contact through the website form
- **Business**: Alpirsbacher Fischzucht, Germany

---

*Built with ❤️ for sustainable aquaculture and premium fish products*
