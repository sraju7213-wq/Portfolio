import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
  plugins: [
    react({
      include: "**/*.{jsx,tsx}",
    }),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "apple-touch-icon.png"],
      manifest: {
        name: "RAJU SHEIKH - Creative Designer & AI Web Developer",
        short_name: "Raju Sheikh",
        description:
          "Creative Designer and AI Web Developer portfolio - Building high-performance web experiences that feel fast, look premium, and convert.",
        theme_color: "#00e5ff",
        background_color: "#07070a",
        display: "standalone",
        orientation: "portrait-primary",
        start_url: "/",
        scope: "/",
        lang: "en",
        categories: ["portfolio", "design", "development", "creative"],
        icons: [
          {
            src: "/favicon.svg",
            sizes: "any",
            type: "image/svg+xml",
            purpose: "any maskable",
          },
          {
            src: "/icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "View Portfolio",
            short_name: "Portfolio",
            description: "View my creative work and projects",
            url: "/#portfolio",
            icons: [{ src: "/favicon.svg", sizes: "96x96" }],
          },
          {
            name: "Contact Me",
            short_name: "Contact",
            description: "Get in touch for collaboration",
            url: "/#contact",
            icons: [{ src: "/favicon.svg", sizes: "96x96" }],
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,woff2}"],
        globIgnores: ["**/images/**"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/ik\.imagekit\.io\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "imagekit-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30,
              },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "google-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365,
              },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "gstatic-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365,
              },
            },
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve("."),
    },
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
  },
  build: {
    cssCodeSplit: true,
    reportCompressedSize: true,
    minify: "terser",
    target: "esnext",
    sourcemap: false,
    chunkSizeWarningLimit: 300,
    rollupOptions: {
      output: {
        manualChunks: {
          "framer-motion": ["framer-motion"],
          "react-vendor": ["react", "react-dom"],
          "lucide": ["lucide-react"],
          "lenis": ["lenis"],
        },
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
        compact: true,
        experimentalMinChunkSize: 20000,
      },
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom", "framer-motion", "lucide-react"],
    exclude: [],
  },
  css: {
    devSourcemap: false,
  },
});
