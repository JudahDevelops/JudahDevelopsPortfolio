# Portfolio Website — Claude Code Instructions

## Quick Start

Dev server: `npm run dev` (port 3000)
Build: `npm run build`
Lint: `npm run lint`
No test suite configured.

## Project Map

Single-page portfolio built with Next.js 16 (App Router), Tailwind CSS v4, Framer Motion.

### Directory Structure
- `app/` — Next.js App Router. Single route: `page.tsx` renders all sections
- `app/globals.css` — All custom CSS: theme tokens, glow/aurora animations, gradient utilities
- `components/` — One component per section. No nesting, no shared state
- `public/` — Static images (logos, hero shots). Referenced via `/filename.ext`

### Section Render Order (in `app/page.tsx`)
`PageGlow → Hero → About → Experience → AutomationProjects → WebProjects → BelsoftProjects → Skills → Contact`

### Key Files
- `app/page.tsx` — Section composition and render order
- `app/globals.css` — Theme tokens (`--c-blue`, `--c-purple`, `--c-magenta`), all animation keyframes, glow/gradient utility classes
- `components/ProjectCard.tsx` — Shared card component with `Project` interface and `cardVariants`. Used by AutomationProjects, WebProjects, and BelsoftProjects
- `components/AutomationProjects.tsx` — The three n8n workflow projects (portfolio's core content)
- `components/Contact.tsx` — Email, WhatsApp, GitHub links + footer
- `next.config.ts` — Allowed remote image domains (media.licdn.com, florecersplace.com)

## Conventions

### Component Pattern
- All section components use `"use client"` (Framer Motion requires it)
- Default exports, one component per file, no index barrels
- Section id attributes for scroll targeting: `id="automation"` on AutomationProjects
- Framer Motion `motion.div` with `whileInView` + `viewport={{ once: true }}` for entrance animations

### Project Data Pattern
- Project data is defined inline as `const projects: Project[]` inside each section component (AutomationProjects, WebProjects, BelsoftProjects)
- `ProjectCard` handles three visual modes: YouTube embed (`youtubeEmbed`), image (`image`), or placeholder icon (`placeholderIcon`)
- Stack tags render as pill-shaped spans

### Styling
- Tailwind v4 with `@theme` block in `globals.css` for design tokens
- Color palette: `#0A0A0A` (background), `#111111` (surface), `#1F1F1F` (border), `#888888` (muted text), `#00D4FF` (accent)
- Gradient system: CSS variables `--grad`, `--grad-text`, `--grad-border` using blue→purple→magenta
- Utility classes defined in globals.css: `.gradient-text`, `.label-gradient`, `.gradient-border`, `.btn-gradient`, `.glow-card`
- Hardcoded hex values in component classNames (e.g. `text-[#888888]`, `bg-[#111111]`) — match the theme tokens above
- Import alias: `@/*` maps to project root (tsconfig.json)

### Visual Effects
- `PageGlow` renders full-page aurora blobs (12 animated blobs + 3 hero glow layers) — CSS-only, no JS
- `HeroGlow` is a separate component but currently not used in page.tsx
- Glow cards track pointer position via `--mouse-x`/`--mouse-y` CSS variables set in `onPointerMove`

## Common Pitfalls

- `AGENTS.md` contains Next.js 16 agent rules — Next.js 16 has breaking changes vs training data. Read `node_modules/next/dist/docs/` before using unfamiliar Next.js APIs
- YouTube embeds use `/embed/` URL format, not `/watch?v=`
- The `HeroGlow` component exists in `components/` but is NOT rendered — `PageGlow` handles all background effects
- Remote images require allowlisting in `next.config.ts` `remotePatterns`

---

## Who This Is For

**Name:** Judah Oka
**Age:** 17 (born November 15, 2008)
**Education:** CS student at Nile University of Abuja
**GitHub:** JudahDevelops
**Email:** judahdevelops@gmail.com

Judah builds production-grade automation systems and web applications. The portfolio should communicate maturity, technical depth, and real execution ability — not a student project. Let the work speak first.

## Target Role

**Company:** 8cast Corporation
**Role:** Sales Automation Specialist (Contract / Remote)
**What they do:** Fractional CFO services, bookkeeping, fundraising prep, and financial education for small businesses, startups, and entrepreneurs.

**What they need:** Someone who has actually built cold email campaigns. Hands-on with Apollo.io, Instantly.ai, Clay, Evaboot. AI-powered outreach copy at scale. CRM automation (HubSpot) — routing leads, Slack alerts, tagging contacts by behavior. Data hygiene. ABM campaign execution. n8n / Zapier / Make experience. This is an execution role.

## Portfolio Projects (Non-Negotiable)

These three n8n projects are the portfolio's core. Each has a GitHub repo and YouTube demo.

1. **AI Lead Enrichment Pipeline** — Reads raw leads from Google Sheets, verifies emails (Hunter.io), generates AI icebreakers (DeepSeek), writes enriched leads back. Stack: n8n, Hunter.io, DeepSeek, Google Sheets, Slack
2. **Sheet → HubSpot + Instantly Campaign Launcher** — Reads enriched leads, creates/updates HubSpot contacts, enrolls in Instantly.ai campaigns with AI copy, posts Slack summary. Stack: n8n, Google Sheets, HubSpot, Instantly.ai, DeepSeek, Slack
3. **Gmail Reply Classifier & CRM Router** — Monitors Gmail, classifies reply intent with DeepSeek (9 categories), routes to HubSpot actions, sends Slack alerts. Stack: n8n, Gmail, DeepSeek, HubSpot, Slack

## Design Direction

- **Aesthetic:** Linear.app-inspired — whitespace, sharp typography, subtle motion, dark mode
- **Palette:** Dark background (#0A0A0A), white text, blue→purple→magenta gradient accents
- **Typography:** Inter (Google Fonts), large headings, not rounded or playful
- **No:** Stock illustrations, generic hero text, cluttered layouts, light themes

## Copy Guidelines

- Write like someone who ships, not someone who studies
- Avoid: "passionate about", "love to learn", "aspiring"
- Use: specific tools, specific outcomes, active verbs
- Age-aware but not apologetic — frame youth as "already doing this at 17" not "despite being 17"
- Single-page scroll layout. No placeholder text anywhere.
