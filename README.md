# Portfolio

A beautiful, performance-optimized portfolio website built with modern web technologies. Features smooth animations, responsive design, and stunning visual effects.

## 🚀 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scrolling**: [Lenis](https://lenis.darkroom.engineering/)
- **3D Effects**: [Three.js](https://threejs.org/) & [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- **Icons**: [Material Icons](https://mui.com/material-ui/material-icons/)

## ✨ Features

- 🎨 Stunning, modern UI design
- ⚡ Blazing fast performance
- 📱 Fully responsive (mobile-first approach)
- 🎭 Smooth animations and interactions
- 🌈 Beautiful transitions and effects
- ♿ Accessible (WCAG compliant)
- 🎯 SEO optimized
- 🌗 Dark mode support
- 🔄 Smooth scrolling with Lenis
- 🎪 Reduced motion support for accessibility

## 📋 Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git

## 🛠️ Installation

1. **Clone the repository** (or you already have it)

```bash
git clone <your-repo-url>
cd portfolio
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables** (optional)

Create a `.env` file in the root directory:

```env
# See .env.example for available options
```

4. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📚 Documentation

- **[Getting Started Guide](GETTING_STARTED.md)** - Detailed walkthrough of everything that's been set up
- **[Custom Instructions](.cursorrules)** - Development guidelines and best practices
- **[Public Assets](public/README.md)** - Guide for adding images, icons, and other assets
- **[Custom Fonts](public/fonts/README.md)** - Instructions for adding custom fonts

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── common/           # Reusable UI components
│   ├── sections/         # Page sections
│   └── layout/           # Layout components
├── hooks/                # Custom React hooks
│   ├── useReducedMotion.ts
│   └── useScrollProgress.ts
├── lib/                  # Third-party integrations
│   └── lenis.tsx        # Smooth scroll provider
├── utils/               # Utility functions
│   ├── cn.ts           # Class name merger
│   └── index.ts        # Common utilities
├── types/              # TypeScript type definitions
│   └── index.ts
├── constants/          # App constants
│   ├── animations.ts  # Animation variants
│   └── index.ts       # Site config
├── public/            # Static assets
│   └── fonts/        # Custom fonts
└── .cursorrules      # Development guidelines

```

## 🎨 Customization

### Update Site Metadata

Edit `app/layout.tsx` to update site title, description, and SEO metadata.

### Configure Navigation

Edit `constants/index.ts` to customize navigation items and social links.

### Modify Animations

Edit `constants/animations.ts` to adjust animation durations, easings, and variants.

### Change Theme Colors

Edit `app/globals.css` to modify the color scheme in the `:root` variables.

## 🎯 Development Guidelines

This project follows strict guidelines for:

- **Responsiveness**: Mobile-first approach
- **Code Quality**: TypeScript strict mode, proper component architecture
- **Performance**: Image optimization, code splitting, lazy loading
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation

See `.cursorrules` for comprehensive development guidelines.

## 🏗️ Building for Production

```bash
npm run build
npm start
```

The production build will:

- Optimize images automatically
- Remove console logs
- Minify CSS and JavaScript
- Generate static pages where possible

## 📊 Performance Optimization

- **Images**: Always use Next.js `Image` component
- **Code Splitting**: Automatic route-based splitting
- **Lazy Loading**: Use dynamic imports for heavy components
- **Font Optimization**: Self-hosted fonts with `font-display: swap`
- **Animations**: GPU-accelerated transforms, respects `prefers-reduced-motion`

## 🧪 Code Quality

```bash
# Lint code
npm run lint

# Format code
npx prettier --write .
```

## 🤝 Contributing

1. Follow the guidelines in `.cursorrules`
2. Write clean, typed TypeScript code
3. Test on multiple devices/screen sizes
4. Ensure accessibility standards are met

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Framer Motion for smooth animations
- Lenis for buttery smooth scrolling
- Tailwind CSS for utility-first styling

---

Built with ❤️ and modern web technologies
