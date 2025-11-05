# Component Organization Structure

This document describes the new organized component structure for better maintainability and developer experience.

## Directory Structure

```
src/components/
├── layout/                    # Layout & Navigation Components
│   ├── CpsHeader.vue         # Main application header
│   ├── CpsNavBar.vue         # Navigation bar
│   ├── CpsFooter.vue         # Application footer
│   ├── CpsPageHeader.vue     # Page-specific headers
│   └── index.ts              # Barrel exports
│
├── cards/                     # Reusable Card Components
│   ├── CpsCard.vue           # Base card component
│   ├── CpsAlianzaCard.vue    # Alliance partner cards
│   ├── CpsCreditCard.vue     # Credit product cards
│   ├── CpsEventCard.vue      # Event display cards
│   ├── CpsRevistaCard.vue    # Magazine/publication cards
│   └── index.ts              # Barrel exports
│
├── ui/                        # UI Utility Components
│   ├── CpsErrorBoundary.vue  # Error boundary wrapper
│   ├── CpsErrorDisplay.vue   # Error message display
│   ├── CpsLoadingState.vue   # Loading state indicator
│   ├── CpsLazyImage.vue      # Lazy-loaded images
│   └── index.ts              # Barrel exports
│
├── content/                   # Content Display Components
│   ├── CpsEventosGrid.vue    # Event grid layout
│   ├── CpsEventosImage.vue   # Event image display
│   ├── CpsNovedadesEventos.vue # News & events section
│   ├── CpsIndex.vue          # Homepage content
│   ├── CpsIndexSlide.vue     # Homepage carousel slides
│   └── index.ts              # Barrel exports
│
├── media/                     # Media & Social Components
│   ├── CpsSocialMediaBlock.vue # Social media links
│   ├── CpsVideoGrid.vue      # Video gallery grid
│   ├── CpsVideoThumbnail.vue # Video thumbnail display
│   ├── CpsYouTubeChannel.vue # YouTube channel integration
│   └── index.ts              # Barrel exports
│
├── modals/                    # Modal Dialog Components
│   ├── CpsDepositAccountModal.vue # Deposit account details modal
│   └── index.ts              # Barrel exports
│
├── forms/                     # Form Components
│   ├── CpsPreguntasBuzon.vue # Questions/suggestion box form
│   └── index.ts              # (to be created)
│
├── financial/                 # Financial Service Components
│   ├── services/             # Financial Services
│   │   ├── CpsBlog.vue       # Blog/news service
│   │   ├── CpsBuzon.vue      # Suggestion box service
│   │   ├── CpsCreditos.vue   # Credit services overview
│   │   ├── CpsCreditosComercial.vue # Commercial credit
│   │   ├── CpsCreditosConsumo.vue # Consumer credit
│   │   ├── CpsCreditosVivienda.vue # Housing credit
│   │   ├── CpsCuentasDeposito.vue # Deposit accounts
│   │   ├── CpsEducoof.vue    # Educational services
│   │   ├── CpsMantenimiento.vue # Maintenance services
│   │   ├── CpsNovEventos.vue # News & events
│   │   ├── CpsSocio.vue      # Member services
│   │   └── CpsSucursales.vue # Branch locations
│   │
│   └── benefits/             # Member Benefits
│       ├── CpsAsesoria.vue   # Advisory services
│       ├── CpsMedico.vue     # Medical benefits
│       ├── CpsProtección.vue # Protection services
│       ├── CpsServicioApoyoFunerario.vue # Funeral support
│       └── CpsServicios.vue  # General services
│
├── pages/                     # Full Page Components
│   └── info/                 # Information Pages
│       ├── CpsAviso.vue      # Privacy notice
│       ├── CpsBuro.vue       # Credit bureau info
│       ├── CpsDespachosCobranza.vue # Collection services
│       ├── CpsHistoria.vue   # Company history
│       └── CpsTrabajo.vue    # Employment opportunities
│
├── btns/                      # Button/Action Components
│   ├── CpsAlianzas.vue       # Alliance partnerships
│   ├── CpsRevistas.vue       # Magazine access
│   ├── CpsRevistas2021.vue   # 2021 magazines
│   ├── CpsRevistas2022.vue   # 2022 magazines
│   ├── CpsRevistas2023.vue   # 2023 magazines
│   ├── CpsRevistas2024.vue   # 2024 magazines
│   └── CpsRevistas2025.vue   # 2025 magazines
│
├── icons/                     # Icon Components
│   ├── CpsFacebookIcon.vue   # Facebook icon
│   ├── CpsInstagramIcon.vue  # Instagram icon
│   ├── CpsTikTokIcon.vue     # TikTok icon
│   ├── CpsTwitterIcon.vue    # Twitter icon
│   ├── CpsYouTubeIcon.vue    # YouTube icon
│   └── index.ts              # Icon exports
│
├── types/                     # TypeScript Type Definitions
│   └── navbar.ts             # Navigation types
│
└── __tests__/                 # Component Tests
    ├── CpsCard.test.ts        # Card component tests
    ├── CpsErrorDisplay.test.ts # Error display tests
    └── CpsLazyImage.test.ts   # Lazy image tests
```

## Import Path Updates

All imports have been updated to use the new structure:

### Before:
```typescript
import CpsPageHeader from '@/components/CpsPageHeader.vue'
import CpsCard from '@/components/CpsCard.vue'
import CpsLazyImage from '@/components/CpsLazyImage.vue'
```

### After:
```typescript
import CpsPageHeader from '@/components/layout/CpsPageHeader.vue'
import CpsCard from '@/components/cards/CpsCard.vue'
import CpsLazyImage from '@/components/ui/CpsLazyImage.vue'
```

## Benefits of New Organization

1. **Clear Separation of Concerns**: Components are grouped by functionality
2. **Easier Navigation**: Developers can quickly find related components
3. **Better Maintainability**: Logical grouping makes updates easier
4. **Scalability**: New components have obvious placement locations
5. **Team Collaboration**: Clear structure helps multiple developers work efficiently

## Component Categories

- **Layout**: Navigation, headers, footers - structural components
- **Cards**: Reusable content cards for different data types
- **UI**: Utility components for common UI patterns
- **Content**: Content display and presentation components
- **Media**: Video, images, and social media components
- **Modals**: Dialog and overlay components
- **Forms**: User input and form components
- **Financial**: Business-specific financial service components
- **Pages**: Full page components for information display
- **Icons**: SVG icon components
- **Types**: TypeScript type definitions

This organization follows modern Vue.js best practices and makes the codebase more maintainable for current and future development.