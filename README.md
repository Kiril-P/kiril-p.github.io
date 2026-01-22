# Portfolio Website

A modern, high-performance portfolio website showcasing my work as a Full Stack Developer and Cloud Solutions Engineer. Built with cutting-edge web technologies for optimal performance and user experience.

[![Deployed on GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-181717?style=flat&logo=github)](https://kiril-p.github.io)
[![Built with Astro](https://img.shields.io/badge/Built%20with-Astro-FF5D01?style=flat&logo=astro)](https://astro.build)
[![Lighthouse Score](https://img.shields.io/badge/Lighthouse-95%2B-brightgreen?style=flat&logo=lighthouse)](https://developers.google.com/web/tools/lighthouse)

## ✨ Features

- **Modern Design**: Glassmorphic UI with smooth animations and transitions
- **3D Interactive Globe**: Three.js powered network visualization
- **Smooth Scrolling**: Lenis-powered smooth scroll with GSAP animations
- **Dark/Light Theme**: Seamless theme switching with persistent preference
- **Responsive Design**: Mobile-first approach, optimized for all devices
- **Performance Optimized**: 95+ Lighthouse score across all metrics
- **SEO Optimized**: Full meta tags, Open Graph, JSON-LD structured data
- **Contact Form**: Integrated Web3Forms with CAPTCHA protection
- **Dynamic Projects**: Auto-fetched from GitHub API with custom configurations

## 🚀 Tech Stack

### Core
- **[Astro 5](https://astro.build)** - Static site generator with islands architecture
- **[React 19](https://react.dev)** - UI components with client-side interactivity
- **[TypeScript](https://www.typescriptlang.org)** - Type-safe development
- **[Tailwind CSS 4](https://tailwindcss.com)** - Utility-first styling

### Animations & Interactions
- **[GSAP](https://greensock.com/gsap/)** - Professional-grade animations
- **[Lenis](https://lenis.studiofreight.com/)** - Smooth scroll library
- **[Framer Motion](https://www.framer.com/motion/)** - React animation library
- **[Three.js](https://threejs.org/)** - 3D graphics and visualizations

### UI & Icons
- **[Lucide React](https://lucide.dev)** - Beautiful, consistent SVG icons

### Integration
- **[Web3Forms](https://web3forms.com)** - Serverless contact form handling
- **[GitHub API](https://docs.github.com/en/rest)** - Dynamic project fetching

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/kiril-p/kiril-p.github.io.git
   cd kiril-p.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment (optional)**
   - Update `src/lib/projects-config.ts` with your featured projects
   - Replace GitHub username in `src/pages/index.astro`
   - Update contact information in components

4. **Start development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:4321`

## 🛠️ Development

### Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Run Astro CLI commands |

### Project Structure

```
/
├── public/              # Static assets
│   ├── CNAME           # Custom domain configuration
│   ├── robots.txt      # SEO crawler instructions
│   └── *.pdf           # Downloadable files (CV, etc.)
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── About.astro
│   │   ├── ContactCard.astro
│   │   ├── ContactForm.astro
│   │   ├── Footer.astro
│   │   ├── MagneticButton.tsx
│   │   ├── Navigation.astro
│   │   ├── NetworkGlobe.tsx
│   │   ├── TechStack.astro
│   │   └── ThemeToggle.tsx
│   ├── layouts/        # Page layouts
│   │   └── MainLayout.astro
│   ├── lib/            # Utilities and configs
│   │   ├── github.ts           # GitHub API integration
│   │   └── projects-config.ts  # Project configurations
│   ├── pages/          # Route pages
│   │   └── index.astro
│   └── styles/         # Global styles
│       └── global.css
├── astro.config.mjs    # Astro configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## 🚀 Deployment

The site is configured for deployment on **GitHub Pages** with automated builds via GitHub Actions.

### Deploy to GitHub Pages

1. **Update configuration**
   - Set your custom domain in `public/CNAME` (or remove file for GitHub subdomain)
   - Update `site` in `astro.config.mjs`

2. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **Configure GitHub Pages**
   - Go to repository Settings > Pages
   - Set source to "GitHub Actions"
   - The site will build and deploy automatically

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

## 🎨 Customization

### Personal Information
- Update bio, experience, and education in `src/components/About.astro`
- Modify tech stack in `src/components/TechStack.astro`
- Change contact details in `src/components/ContactCard.astro`

### Projects
- Configure featured projects in `src/lib/projects-config.ts`
- Projects are automatically fetched from GitHub API

### Theming
- Customize colors in `tailwind.config.js` and `src/styles/global.css`
- Modify animations in component `<script>` sections

### Contact Form
- Replace Web3Forms access key in `src/components/ContactForm.astro`
- Get your free key at [web3forms.com](https://web3forms.com)

## 📄 License

This project is open source and available for personal and educational use. Feel free to fork and customize for your own portfolio.

## 📧 Contact

**Kiril Petrovski**
- Website: [kiril-p.github.io](https://kiril-p.github.io)
- GitHub: [@kiril-p](https://github.com/kiril-p)
- LinkedIn: [kiril-petrovski](https://linkedin.com/in/kiril-petrovski)
- Email: kirilpetrovski2005@gmail.com

---

<div align="center">
  <p>Built with ❤️ using Astro, React, and modern web technologies</p>
  <p>© 2026 Kiril Petrovski. All rights reserved.</p>
</div>
