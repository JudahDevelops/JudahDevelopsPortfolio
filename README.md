# Judah Oka — portfolio

Portfolio for Judah Oka, Chief AI Officer for Nigerian businesses. Live at https://judah-develops-portfolio.vercel.app (Vercel deploys from `main`).

Next.js 16 (App Router), plain CSS, Archivo via `next/font/google`. The page is a server component with no client JavaScript; the hero animation is CSS-only.

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm run lint
```

## Where things are

- `lib/content.ts` — all copy and project data. Edit content here.
- `app/page.tsx` — the page, including the hero `Slips` figure.
- `app/globals.css` — design tokens (light and dark) and every section's layout.
- `CLAUDE.md` — design concept, content rules and project map.
