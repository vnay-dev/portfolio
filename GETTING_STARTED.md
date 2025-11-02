# Getting Started Guide 🚀

Welcome! This guide provides a detailed walkthrough of everything that's been set up in your portfolio codebase. Your project is bootstrapped with all the necessary tools and configurations for building a beautiful, performant, and responsive website.

## ✨ What's Included

### 1. Core Framework & Language

- ✅ Next.js 14 with App Router
- ✅ TypeScript with strict mode
- ✅ React 19

### 2. Styling & Design

- ✅ Tailwind CSS v4
- ✅ Custom CSS with Gilroy font configuration
- ✅ Dark mode support
- ✅ Custom color scheme (easily customizable)
- ✅ Responsive utilities ()
- ✅ Custom scrollbar styles

### 3. Animation & Interactions

- ✅ Framer Motion (v12)
- ✅ Lenis smooth scrolling
- ✅ Three.js & React Three Fiber (for 3D effects)
- ✅ Pre-built animation variants (fadeInUp, scaleIn, etc.)
- ✅ Reduced motion support for accessibility
- ✅ Custom animation hooks (useScrollProgress, useParallax)

### 4. Development Tools

- ✅ ESLint (Next.js config)
- ✅ Prettier with Tailwind plugin
- ✅ TypeScript strict configuration
- ✅ VS Code settings (format on save, Tailwind IntelliSense)
- ✅ Git configuration (.gitignore)

### 5. Project Structure

```
portfolio/
├── app/                    # Next.js app directory
├── components/            # Component directories (common, sections, layout)
├── hooks/                 # Custom React hooks
├── lib/                   # Third-party integrations
├── utils/                 # Utility functions
├── types/                 # TypeScript definitions
├── constants/             # App constants & config
└── public/fonts/          # Custom fonts directory
```

### 6. Custom Hooks Created

- ✅ `useReducedMotion` - Detects user motion preferences
- ✅ `useScrollProgress` - Tracks scroll position
- ✅ `useParallax` - Creates parallax effects

### 7. Utility Functions

- ✅ `cn()` - Tailwind class merger (clsx + tailwind-merge)
- ✅ `clamp()`, `mapRange()`, `lerp()` - Math utilities
- ✅ `debounce()`, `throttle()` - Performance utilities

### 8. Configuration Files

- ✅ `.cursorrules` - Comprehensive development guidelines
- ✅ `next.config.ts` - Performance & security optimizations
- ✅ `tsconfig.json` - Strict TypeScript settings
- ✅ `.prettierrc` - Code formatting rules
- ✅ `.vscode/settings.json` - Editor configuration

### 9. Performance Optimizations

- ✅ Image optimization (AVIF, WebP support)
- ✅ Package import optimization
- ✅ Console removal in production
- ✅ Security headers
- ✅ Font optimization (font-display: swap)

### 10. Accessibility Features

- ✅ Semantic HTML structure
- ✅ Focus styles
- ✅ Reduced motion support
- ✅ Proper ARIA setup ready
- ✅ Keyboard navigation ready

### 11. Icons & Typography

- ✅ Material Icons (@mui/icons-material)
- ✅ Google Fonts integrated (Gabarito for headings, Hanken Grotesk for body)
- ✅ Optimized font loading with Next.js font system

## 📋 Next Steps

### 1. Start Development

```bash
npm run dev
```

Visit http://localhost:3000 to see your portfolio!

### 2. Customize

- Update site metadata in `app/layout.tsx`
- Modify colors in `app/globals.css` (`:root` variables)
- Configure navigation in `constants/index.ts`
- Adjust animations in `constants/animations.ts`

### 3. Start Building

Now you can start building components! The foundation is ready for:

- Hero sections
- About sections
- Project showcases
- Contact forms
- Navigation
- Footers
- And any other stunning components you envision!

## 🎨 Design Principles Applied

1. **Mobile-First**: All utilities and base styles are mobile-first
2. **Performance-First**: Optimized for Core Web Vitals
3. **Accessibility-First**: WCAG compliant structure
4. **Type-Safe**: Full TypeScript coverage
5. **Maintainable**: Clean architecture with separation of concerns

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Lint code
npm run format       # Format code with Prettier
npm run format:check # Check formatting
```

## 📚 Key Files to Read

1. **`.cursorrules`** - Development guidelines and best practices
2. **`README.md`** - Complete project documentation
3. **`constants/animations.ts`** - Animation variants and configs
4. **`app/globals.css`** - Global styles and theme

## 🎯 Quality Metrics Ensured

- ✅ **Responsive**: Mobile-first with proper breakpoints
- ✅ **Fast**: Optimized bundle size and rendering
- ✅ **Accessible**: Semantic HTML and ARIA ready
- ✅ **Type-Safe**: Strict TypeScript configuration
- ✅ **Maintainable**: Clean architecture and code organization
- ✅ **Scalable**: Modular component structure

## 💡 Pro Tips

1. Use the `cn()` utility for dynamic className management
2. Leverage the pre-built animation variants in `constants/animations.ts`
3. Follow the component structure: common → sections → pages
4. Use the custom hooks for scroll and motion detection
5. Test on real devices, not just browser DevTools
6. Keep accessibility in mind with every component
7. Use Next.js Image component for all images
8. Implement lazy loading for components below the fold

## 🚀 Ready to Build!

Your portfolio foundation is now complete. You can start building components gradually, and the system is set up to ensure:

- Beautiful, smooth animations
- Responsive design across all devices
- High performance (fast load times, smooth interactions)
- Clean, maintainable code
- Type safety
- Accessibility

Happy coding! 🎨✨

---

Need help? Check the comprehensive guidelines in `.cursorrules` or refer to the documentation in `README.md`.
