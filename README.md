# Developer Portfolio

A responsive, bilingual frontend portfolio built with React, TypeScript, Vite and Tailwind CSS. It presents selected public projects and provides ready-to-fill structures for professional experience, education and certificates.

## Stack

- React 19, TypeScript (strict), Vite 8
- Tailwind CSS 4 plus custom design tokens
- Motion, Lucide React, Simple Icons
- i18next and react-i18next
- GitHub Actions and GitHub Pages

## Features

- English and Russian UI, including project descriptions and metadata
- Shareable language URLs: `?lang=en` or `?lang=ru`
- Dark and light themes with saved preference and system default
- Responsive navigation, active section highlighting, reduced-motion support
- Typed content files for projects, skills, experience, education and certificates
- Accessible certificate viewer for real image or PDF files

## Run locally

Requires Node.js 24 or later and npm.

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite. Production checks:

```bash
npm run lint
npm run build
npm run preview
```

## Update content

Edit [`src/data/content.ts`](src/data/content.ts) to update personal links. The current email, LinkedIn and Telegram URLs come from the public GitHub profile README; the Codewars URL comes from the GitHub profile link. Put a real PDF in `public/cv/` before setting `profile.cv`. Missing links and the CV button are hidden automatically.

### Projects

Add an item to the typed `projects` array in `src/data/content.ts`. Include a working repository URL, localized title, description and features, technologies, sort order, and `featured: true` to show it on the page. A live URL is optional. For a real screenshot, place an optimized WebP/AVIF file in `public/projects/` and set `image` to its public path. Without an image, the card displays clearly editorial artwork.

### Experience and education

Add verified `TimelineItem` objects to `experience` and `education` in `src/data/content.ts`. Each supports an organization, localized role, period, description and achievements, technology tags and an optional URL. Empty sections show a neutral state rather than fabricated entries.

### Certificates

Put a real image or PDF in `public/certificates/` and add a `Certificate` item to `certificates` in `src/data/content.ts`. Set its localized title, issuer, date, document path, optional image and optional verification URL. The card and preview appear automatically.

### Skills and translations

Edit `src/data/skills.ts` to change the technology list. Brand icons use the Simple Icons package; text glyphs identify concepts without a suitable brand mark. Edit `src/i18n/index.ts` for all UI translations. Project, experience, education and certificate copy lives alongside each typed entry in `src/data/content.ts`.

## Structure

```text
src/components/    Reusable cards and timeline
src/data/          Typed personal and project content
src/i18n/          UI translations and language persistence
src/styles.css     Design system and responsive styles
public/            Favicon, SEO files and future media
.github/workflows/ GitHub Pages deployment
```

## GitHub Pages

The workflow builds on every push to `main` and supports manual runs. It runs `npm ci`, lint and build, uploads `dist`, then deploys with the official GitHub Pages actions. In repository **Settings → Pages → Build and deployment**, select **GitHub Actions** as the source. Vite uses `base: '/'` for the `makishima44.github.io` root domain. The canonical URL and sitemap are set to that domain.

## Attribution

Technology and contact marks come from [Simple Icons](https://simpleicons.org/) via `@icons-pack/react-simple-icons`, licensed under CC0-1.0. The local LinkedIn SVG comes from [Devicon](https://github.com/devicons/devicon) (MIT). Brand names and marks belong to their respective owners.
