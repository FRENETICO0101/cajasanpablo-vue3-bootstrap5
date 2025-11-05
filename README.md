# 🏦 Caja San Pablo - Vue 3 + Bootstrap 5 Website

[![Vue 3](https://img.shields.io/badge/Vue-3.5.18-4FC08D?style=flat&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.0-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-7952B3?style=flat&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Vite](https://img.shields.io/badge/Vite-7.0.6-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)

Modern, responsive website for Caja Popular San Pablo, a Mexican credit union providing financial services to its members. Built with Vue 3, TypeScript, and Bootstrap 5 for optimal performance and user experience.

## 🌟 Features

- **Modern Architecture**: Vue 3 Composition API with TypeScript
- **Responsive Design**: Bootstrap 5 grid system with mobile-first approach
- **Comprehensive Services**: Credit services, deposit accounts, member benefits
- **Interactive Components**: Event grids, image galleries, and dynamic content
- **Performance Optimized**: WebP images, code splitting, and efficient bundling
- **Accessibility**: ARIA labels and semantic HTML structure

## 🛠️ Tech Stack

### Core Technologies
- **Vue 3.5.18** - Progressive JavaScript framework
- **TypeScript 5.8.0** - Type-safe JavaScript
- **Vue Router 4.5.1** - Official router for Vue.js
- **Bootstrap 5.3.8** - CSS framework for responsive design
- **Vite 7.0.6** - Fast build tool and development server

### UI & Icons
- **@mdi/js 7.4.47** - Material Design Icons
- **@popperjs/core 2.11.8** - Tooltip and popover positioning

### Development Tools
- **ESLint 9.31.0** - Code linting
- **Prettier 3.6.2** - Code formatting
- **vue-tsc 3.0.4** - TypeScript compiler for Vue

## 📁 Project Structure

```
src/
├── components/
│   ├── beneficios/          # Member benefit components
│   ├── btns/               # Button and resource components
│   ├── info/               # Information pages
│   ├── servicio/           # Service-related components
│   ├── CpsHeader.vue       # Main header component
│   ├── CpsFooter.vue       # Main footer component
│   └── CpsNavBar.vue       # Navigation component
├── assets/
│   ├── css/               # Stylesheets
│   ├── img-*/             # Image directories
│   └── pdf/               # Document files
├── router/
│   └── index.ts           # Vue Router configuration
├── App.vue                # Root component
└── main.ts                # Application entry point
```

## 🚀 Quick Start

### Prerequisites

- **Node.js**: v20.19.0 or >=22.12.0
- **npm** or **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/steeledward/cajasanpablo-vue3-bootstrap5.git

# Navigate to project directory
cd cajasanpablo-vue3-bootstrap5

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Open browser to http://localhost:5173
```

### Build for Production

```bash
# Type check and build
npm run build

# Preview production build
npm run preview
```

### Code Quality

```bash
# Lint code
npm run lint

# Format code
npm run format
```

## 🎨 Styling & Theming

### CSS Variables
```css
--color-primario: #3066be     /* Primary blue */
--color-secundario: #6d9dc5   /* Secondary blue */
--color-azul-oscuro: #003063  /* Dark blue */
--color-naranja: #dc9c48      /* Orange accent */
--color-blanco: white         /* White */
--color-negro: black          /* Black */
--color-gris: #dfdfdf         /* Gray */
```

### Component Styling
- **Modular CSS**: Separate stylesheets for different components
- **Scoped Styles**: Component-specific styling with Vue's scoped CSS
- **Responsive Design**: Bootstrap grid system with custom breakpoints
- **Animations**: Custom CSS animations for enhanced user experience

## 🔧 Configuration

### Vite Configuration
- **Alias**: `@` points to `src` directory
- **Vue DevTools**: Enabled for development
- **Build Optimization**: Asset optimization and chunking

### TypeScript Configuration
- **Strict Mode**: Enhanced type checking
- **Path Mapping**: Simplified imports with `@/` prefix
- **Vue Support**: Full TypeScript support for Vue SFCs

## 📱 Routes

### Main Sections
- **Home** (`/`) - Main landing page
- **Services** (`/servicio/*`) - Financial services
- **Benefits** (`/beneficios/*`) - Member benefits
- **Information** (`/info/*`) - Company information
- **Resources** (`/btns/*`) - Magazines and partnerships

### Key Pages
- Credit Services (Consumer, Commercial, Housing)
- Deposit Accounts
- Branch Locations
- Member Benefits (Medical, Funeral, Advisory)
- Company History and Legal Information

## 🚀 Deployment

### Production Deployment

```bash
# Navigate to server directory
cd /home/developer/cajasanpablo-vue3-bootstrap5

# Pull latest changes
git pull origin main

# Build for production
npm run build

# Deploy to web server
cp -var dist/* /usr/share/nginx/html/
```

### Environment Setup
- **Node.js**: Ensure compatible version is installed
- **Nginx**: Configure to serve static files from `/usr/share/nginx/html/`
- **SSL**: Configure HTTPS for secure financial transactions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential. All rights reserved by Caja Popular San Pablo.

## 🆘 Support

For technical support or questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation in `/docs` folder

---

**Made with ❤️ for Caja Popular San Pablo members**
