# RAJU SHEIKH — Portfolio

A high-performance, single-page portfolio built with **React 19**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Framer Motion**. Features a dark, premium creative-studio aesthetic with smooth Lenis scrolling, custom cursor and cursor-reactive animations, PWA support, and lazy-loaded sections.

## Tech Stack

- **React 19** + **TypeScript** — component architecture with lazy-loaded sections
- **Vite 6** — fast dev server, optimized production builds (Terser + manual chunks)
- **Tailwind CSS 3** — custom design tokens (colors, fluid type, motion keyframes)
- **Framer Motion** — scroll/visibility animations
- **Lenis** — buttery smooth scrolling
- **Vite PWA** — installable app with manifest + runtime image caching

## Project Structure

```
├── public/                 # Static assets served at the root
│   ├── images/             # Optimized WebP artwork per project
│   ├── favicon.svg
│   ├── manifest.json
│   ├── robots.txt
│   └── sitemap.xml
├── src/                    # Application source
│   ├── components/         # Page sections (Hero, Work, About, ...)
│   │   └── ui/            # Reusable UI primitives (Reveal, MagneticButton, ...)
│   ├── data/               # Content / copy (projects, brands, socials)
│   ├── hooks/              # Shared React hooks (useInView, useMediaQuery, ...)
│   ├── App.tsx             # Root app composition
│   ├── index.css           # Global styles + Tailwind directives
│   └── index.tsx           # Entry point
├── scripts/                # Developer utilities
│   └── convert-images.mjs  # Regenerates WebP assets from PNG sources
├── docs/                   # Project notes & plans
├── index.html              # HTML shell (meta, SEO, PWA, entry script)
├── tailwind.config.js      # Design system tokens
├── vite.config.ts          # Build / dev / PWA configuration
└── tsconfig.json           # TypeScript config (path alias: @/* → src/*)
```

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server (http://localhost:3000)
npm run dev

# Type-check + production build (outputs to /dist)
npm run build

# Preview the production build
npm run preview

# Lint
npm run lint
```

## Paths & Aliasing

- `@/*` resolves to `./src/*` (configured in both `tsconfig.json` and `vite.config.ts`).

## Images & Performance

- All artwork is served as **WebP** from `/public/images/<project>/`.
- `scripts/convert-images.mjs` regenerates WebP files from PNG sources (requires `sharp-cli`):
  ```bash
  node scripts/convert-images.mjs
  ```
- PWA uses runtime caching for ImageKit and Google Fonts, and ignores the local `images/` folder in the precache to keep the install payload small.

## Author

**RAJU SHEIKH** — Creative Developer & Brand Designer

- Website: https://raju-sheikh.dev
- Instagram: [@kreative.ai](https://www.instagram.com/kreative.ai)
