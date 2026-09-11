# Carnes Carneiro

Website for Carnes Carneiro — Matadouro Industrial e Salsicharia (Francisco Alves Carneiro & Filhos, Lda), Lousado, Vila Nova de Famalicão. Fumeiro tradicional desde 1984.

This repo currently holds a click-through demo exported from the [Carnes Carneiro Design System](https://claude.ai/design/p/2087cc48-ed74-4744-a8b0-cc4467af0a61) (built in Claude Design), covering:

- **Início** — homepage
- **Catálogo** — product listing with category filter
- **Ficha de produto** — product detail page
- **A Nossa História** — company history/timeline
- **Contacto** — contact form + location

## Structure

```
index.html                   redirects to the demo below
ui_kits/website/index.html   the demo app (entry point)
ui_kits/website/*.jsx        page components (Home, Catalog, ProductDetailPage, History, Contact)
styles.css                   imports the design tokens
tokens/*.css                 colors, typography, spacing, fonts
_ds_bundle.js                compiled shared components (Header, Footer, Button, ProductCard, etc.)
assets/                      logo, fonts, photography
.nojekyll                    tells GitHub Pages not to ignore _ds_bundle.js
```

It's a static, dependency-free page: React, ReactDOM and Babel load from a CDN and JSX is compiled in the browser, so no build step is needed.

## Deploying

GitHub Pages is configured to deploy from the `main` branch. Once enabled (Settings → Pages → Deploy from a branch → `main` / root), the site is served at `https://tiagocarneiro93.github.io/carnescarneiro/`.

## Known gaps

A few photography assets referenced by the design system couldn't be pulled into this repo yet — they exceed a 256KB per-file transfer limit on the design-sync tool used to export them (their embedded content-credential metadata inflates the file size well past the actual image content):

- `fresh-barriga.jpg`, `fresh-presunto.jpg`, `fresh-pa.jpg`, `fresh-lombada.jpg`, `fresh-carcaca.jpg`, `fresh-lombo.jpg`, `lagoncinha-1.jpg`

The affected pages degrade gracefully without them (blank card imagery instead of a broken image), but production photography should be added under `assets/photography/` to match the design system exactly.
