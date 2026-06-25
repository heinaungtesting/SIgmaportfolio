# Portfolio — sigmahein.me

Personal portfolio site for job-hunting (27卒 / 2027 new-grad).

## Stack

- **Next.js 16** (App Router, Turbopack)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** (scroll-triggered animations, stagger, hover micro-interactions)
- **lucide-react** icons
- **Vercel** hosting

## Features

- Bilingual (EN / JA) with localStorage persistence
- 5 sections: Hero, About, Skills, Projects, Experience, Contact
- Framer Motion scroll reveals, hover effects, animated stats, gradient borders
- Real avatar (`/public/avatar.jpg`)
- SEO: OpenGraph, Twitter cards, JP keywords for Japanese recruiter search
- Fully responsive, accessible (semantic HTML, ARIA, keyboard-navigable)

## Develop

```bash
npm install
npm run dev
# http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Deploy

Pushes to `main` auto-deploy via Vercel.

## Repo notes

- Single source of content: `lib/content.ts` (bilingual)
- Components in `components/`
- Custom SVG icon for GitHub (lucide-react dropped trademark-protected icons)
