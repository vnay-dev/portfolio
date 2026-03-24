# Portfolio

A clean, minimal portfolio website built with Next.js and Tailwind CSS. This is a fresh foundation ready for building your next portfolio version.

## 🚀 Tech Stack

- **Framework**: [Next.js 15.5.9](https://nextjs.org/) (App Router with Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **React**: 19.1.0
- **Fonts**: 
  - [Gabarito](https://fonts.google.com/specimen/Gabarito) - Headings (h1-h6)
  - [Hanken Grotesk](https://fonts.google.com/specimen/Hanken+Grotesk) - Body text
  - PP Editorial New - Custom font for special typography

## ✨ Current State

- 🎨 **Hero Section** - Dynamic full-screen hero with animated background and profile content
- 🏗️ **Projects Showcase** - Featured projects section with case study links
- ⚡ **Optimized** - Next.js 15 with Turbopack for fast development
- 📱 **Responsive Ready** - Typography and styles configured for all devices
- 🎯 **SEO Ready** - Metadata structure in place
- 🔤 **Typography System** - Comprehensive, modular type scale ready to use
- 📦 **Organized Structure** - Clean code organization with constants and modular CSS
- 🧹 **Minimal Dependencies** - Only essential packages (Next.js, React, Tailwind)

## 📋 Prerequisites

- Node.js 18+ and npm
- Git

## 🛠️ Installation

1. **Clone the repository**

```bash
git clone <your-repo-url>
cd portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📚 Documentation

- **[Custom Instructions](.cursorrules)** - Development guidelines, testing requirements, and best practices
- **[Feature Flags Tracker](FEATURE_FLAGS.md)** - Implemented flags, env keys, and rollout status
- **Typography System** - Modular CSS files in `app/typography/` with Material Design type scale
- **Public Assets** - All images and fonts preserved in `public/` directory

## 📁 Project Structure

```
portfolio/
├── app/                          # Next.js app directory
│   ├── constants/               # App constants
│   │   ├── fonts.ts            # Font configuration reference (documentation)
│   │   ├── metadata.ts         # Site metadata
│   │   └── index.ts            # Constants exports
│   ├── typography/              # Typography system (modular CSS)
│   │   ├── display.css         # Display styles
│   │   ├── headline.css        # Headline styles
│   │   ├── title.css           # Title styles
│   │   ├── body.css            # Body text styles
│   │   ├── label.css           # Label styles
│   │   ├── utility.css         # Utility classes
│   │   ├── editorial.css       # Editorial font classes
│   │   ├── responsive.css      # Mobile responsive overrides
│   │   └── index.css           # Main typography import
│   ├── globals.css              # Global styles and Tailwind imports
│   ├── layout.tsx              # Root layout with fonts and metadata
│   └── page.tsx                # Home page with Hero and Projects
├── components/                  # React components
│   ├── home/                   # Home page components
│   │   ├── Hero.tsx           # Full-screen hero section
│   │   ├── Projects.tsx       # Featured projects showcase
│   │   └── index.ts           # Component exports
│   ├── shared/                 # Shared/reusable components
│   │   ├── composite/         # Complex composite components
│   │   │   ├── Container.tsx  # Layout container
│   │   │   ├── Footer.tsx     # Site footer
│   │   │   ├── Navbar.tsx     # Fixed navigation bar
│   │   │   └── index.ts       # Composite exports
│   │   └── atoms/             # Atomic components
│   ├── animations/             # Animation components
│   │   ├── ColorBends.tsx     # WebGL color animation
│   │   └── ColorBends.css     # Animation styles
│   └── projects/               # Project-specific components
├── public/                      # Static assets
│   ├── fonts/                  # Custom fonts (Editorial)
│   │   └── editorial/         # PP Editorial New font files
│   └── images/                 # Image assets (preserved)
├── .cursorrules                # Development guidelines and testing rules
├── next.config.ts              # Next.js configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies and scripts
```

## 🎨 Typography System

The project includes a comprehensive, modular typography system based on Material Design Type Scale:

- **Display**: `.display-large`, `.display-medium`, `.display-small`
- **Headline**: `.headline-large`, `.headline-medium`, `.headline-small`
- **Title**: `.title-large`, `.title-medium`, `.title-small`
- **Body**: `.body-large`, `.body-medium`, `.body-small`
- **Label**: `.label-large`, `.label-medium`, `.label-small`
- **Utility**: `.text-overline`, `.text-caption`
- **Editorial**: `.editorial-display`, `.editorial-headline`, `.editorial-body`, `.editorial-italic`

All typography styles are organized in separate CSS files under `app/typography/` for easy maintenance.

## 🎯 Development Guidelines

This project follows strict guidelines documented in `.cursorrules`:

### Testing Requirements

1. **Responsiveness Testing (REQUIRED)**
   - Website MUST be responsive on ALL pages
   - Test by resizing browser window
   - Verify consistent experience across devices and browsers
   - Use Chrome MCP for testing

2. **Performance Testing (REQUIRED)**
   - Test load times and rendering performance
   - Check asset loading during scroll
   - Verify scrolling smoothness (60fps)
   - Monitor network requests

3. **Lighthouse Score Verification (REQUIRED BEFORE PUSH)**
   - Run Lighthouse audit before any git push
   - Verify all scores (Performance, Accessibility, Best Practices, SEO)
   - Ensure scores meet thresholds (90+ recommended)

### Code Quality

- TypeScript strict mode
- Organized constants and typography
- Modular CSS architecture
- Clean component structure

## 🏗️ Building for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

The production build will:
- Optimize all assets automatically
- Generate static pages where possible
- Minify CSS and JavaScript
- Remove development code
- Optimize fonts and images

## 🧪 Code Quality

```bash
# Lint code
npm run lint

# Format code
npm run format

# Check formatting
npm run format:check
```

## 📝 Important Notes

- **Font Configuration**: Font values must be inline literals in `app/layout.tsx` (Next.js font loader requirement). Constants cannot be used for font weights or variables.
- **Typography System**: Modular CSS architecture - edit individual files in `app/typography/` as needed
- **Constants**: Metadata and other constants are organized in `app/constants/` for easy maintenance
- **Assets**: All images and fonts are preserved in `public/` directory
- **Current State**: Home page features dynamic hero section and projects showcase - ready for content updates

## 🤝 Contributing

1. Follow the guidelines in `.cursorrules`
2. Write clean, typed TypeScript code
3. Test responsiveness and performance
4. Run Lighthouse audit before pushing
5. Ensure accessibility standards are met

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Next.js and Tailwind CSS
