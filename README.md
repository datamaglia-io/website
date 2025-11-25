# Datamaglia Website

**AI-Powered Data Governance for Manufacturing & Supply Chain**

Modern, production-ready marketing website built with Next.js 14, TypeScript, and Tailwind CSS. Tailored for manufacturing, supply chain, distribution, and logistics companies.

## 🚀 Live Preview

- **Development**: http://localhost:3000
- **Production**: www.datamaglia.io (when deployed)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Key Pages](#key-pages)
- [Deployment](#deployment)
- [Industry Focus](#industry-focus)

## 🎯 Overview

This website showcases Datamaglia's AI-powered data governance platform designed specifically for:
- **Manufacturing** - Equipment data compliance, production quality records
- **Supply Chain** - Vendor verification, shipment tracking compliance
- **Distribution** - Warehouse data systems, customer PII protection
- **Logistics** - Driver privacy, GPS tracking compliance

## ✨ Features

### Design System
- **Isomorphic-inspired** clean, minimal aesthetic
- **Professional blue** color scheme (#2299DD)
- **Inter font family** for modern typography
- **Light/Dark theme** support with persistent storage
- **Fully responsive** mobile-first design

### Components
- **Animated hero section** with live dashboard preview
- **Industry-specific sections** for manufacturing, supply chain, distribution, logistics
- **Feature showcase** highlighting multi-agent AI capabilities
- **How it works** step-by-step workflow visualization
- **Social proof** and trust indicators
- **Conversion-optimized CTAs**

### Performance
- **Server-side rendering** for optimal SEO
- **Image optimization** with Next.js Image component
- **Code splitting** for faster page loads
- **Framer Motion animations** with performance in mind

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 14 | React framework with App Router |
| TypeScript | Type-safe development |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Smooth animations |
| React Icons | Icon library |
| Next Themes | Theme management |

## 🏁 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Navigate to website directory
cd /Users/balajee/workspace/src/bn/dm/website

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:3000
```

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
website/
├── app/                          # Next.js 14 App Router
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Homepage
│   ├── globals.css              # Global styles with Isomorphic design
│   ├── solutions/               # Solutions pages (to be built)
│   ├── platform/                # Platform pages (to be built)
│   ├── demo/                    # Demo pages (to be built)
│   ├── about/                   # About page (to be built)
│   └── contact/                 # Contact page (to be built)
├── components/
│   ├── shared/                  # Shared components
│   │   ├── Header.tsx          # Navigation with theme toggle
│   │   ├── Footer.tsx          # Footer with links
│   │   └── ThemeProvider.tsx   # Theme context
│   └── home/                    # Homepage sections
│       ├── Hero.tsx            # Hero section with animated dashboard
│       ├── Stats.tsx           # Key statistics
│       ├── IndustryProblems.tsx # Problem/solution section
│       ├── Features.tsx        # Platform features grid
│       ├── HowItWorks.tsx      # 4-step process
│       ├── Industries.tsx      # Industry-specific sections
│       └── CTA.tsx             # Call-to-action section
├── public/                      # Static assets
├── package.json
└── tailwind.config.ts
```

## 📄 Key Pages

### Homepage (✅ Completed)
**URL**: `/`

Comprehensive landing page with:
- Hero section with animated dashboard preview
- Real-time statistics (85% reduction, 90% faster, 99.9% accuracy)
- Industry-specific pain points
- 8 key platform features
- 4-step "How It Works" process
- Industry showcases (Manufacturing, Supply Chain, Distribution, Logistics)
- Conversion-focused CTA

### Solutions (🚧 To Build)
**URL**: `/solutions`

Industry-specific solutions:
- Manufacturing compliance
- Supply chain data governance
- Distribution center monitoring
- Logistics tracking compliance

### Platform (🚧 To Build)
**URL**: `/platform`

Deep dive into platform:
- Multi-agent AI architecture
- Real-time dashboard features
- Integrations and API
- Security and compliance
- Technical specifications

### Demo (🚧 To Build)
**URL**: `/demo`

Interactive demo:
- Live dashboard preview (embedded from platform)
- Video walkthrough
- Interactive tour
- Request demo form

### About & Contact (🚧 To Build)
**URLs**: `/about`, `/contact`

Company information and contact forms

## 🚢 Deployment

### Vercel (Recommended)

1. **Connect Repository**
   ```bash
   # Install Vercel CLI
   npm i -g vercel

   # Deploy
   cd /Users/balajee/workspace/src/bn/dm/website
   vercel
   ```

2. **Environment Variables** (if needed)
   - Set in Vercel dashboard

3. **Custom Domain**
   - Add `www.datamaglia.io` in Vercel domain settings

### Alternative: Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### Alternative: Self-Hosted

```bash
# Build
npm run build

# Serve with any Node.js server
npm start
# Or use PM2 for production
pm2 start npm --name "datamaglia-website" -- start
```

## 🏭 Industry Focus

### Manufacturing
- Equipment sensor data compliance
- Production quality records
- Supplier data management
- Intellectual property protection

### Supply Chain
- Vendor data verification
- Shipment tracking compliance
- Inventory data quality
- Cross-border data regulations

### Distribution
- Warehouse management data
- Customer PII protection
- Order fulfillment records
- Multi-location compliance

### Logistics
- Driver information protection
- GPS tracking compliance
- Shipment documentation
- Route optimization data

## 🎨 Design System

### Colors
```css
--primary-color: #2299DD        /* Professional Blue */
--primary-dark: #1A7AB8
--primary-light: #4DABEA
--manufacturing-accent: #8B5CF6 /* Purple */
--supply-chain-accent: #10B981  /* Green */
--logistics-accent: #F59E0B     /* Yellow */
--distribution-accent: #EF4444  /* Red */
```

### Typography
- Font Family: Inter
- Weights: 300, 400, 500, 600, 700, 800, 900

### Spacing
- Container max-width: 1280px
- Section padding: py-20 (5rem)
- Card border-radius: 0.75rem

## 🔧 Development Notes

### Adding New Pages

1. Create page directory:
   ```bash
   mkdir -p app/your-page
   ```

2. Add page.tsx:
   ```tsx
   import Header from '@/components/shared/Header';
   import Footer from '@/components/shared/Footer';

   export default function YourPage() {
     return (
       <div>
         <Header />
         <main>{/* Your content */}</main>
         <Footer />
       </div>
     );
   }
   ```

### Theme Customization

Edit `app/globals.css` to modify:
- Color variables
- Shadow values
- Border styles
- Typography scales

### Animation Customization

Components use Framer Motion. Adjust in individual component files:
```tsx
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
```

## 📝 Content Strategy

### Target Audience
- Manufacturing executives
- Supply chain managers
- Distribution center operators
- Logistics coordinators
- Compliance officers
- IT directors

### Key Messages
1. **Automated**: No manual compliance checks
2. **Intelligent**: Multi-agent AI learns and adapts
3. **Real-time**: Continuous 24/7 monitoring
4. **Visual**: Beautiful dashboards for insights
5. **Scalable**: Handles multiple datasets

### SEO Keywords
- Data governance for manufacturing
- Supply chain compliance monitoring
- AI-powered data quality
- Manufacturing data compliance
- Logistics data management
- Distribution center compliance

## 🚀 Next Steps

1. **Content**:
   - Add real customer testimonials
   - Create case studies
   - Write blog posts

2. **Pages to Build**:
   - Solutions page with industry deep-dives
   - Platform page with technical details
   - Demo page with live dashboard embed
   - Pricing page (if applicable)
   - Blog/resources section

3. **Integrations**:
   - Contact form (using Formspree, SendGrid, or custom API)
   - Analytics (Google Analytics, Vercel Analytics)
   - Chat widget (Intercom, Drift)

4. **Assets**:
   - Company logo
   - Product screenshots
   - Customer logos
   - Diagrams and illustrations

## 📞 Support

For questions or issues:
- **Email**: contact@datamaglia.io
- **Repository**: https://github.com/datamaglia-io/website

## 📄 License

Copyright © 2024 Datamaglia. All rights reserved.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
