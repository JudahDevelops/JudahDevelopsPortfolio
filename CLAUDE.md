# Portfolio Website — Claude Code Instructions

## Quick Start

Dev server: `npm run dev` (port 3000)
Build: `npm run build`
Lint: `npm run lint`
No test suite configured.

## Project Map

Single-page portfolio built with Next.js 16 (App Router) and plain CSS. No client JavaScript: the page is a server component and the hero animation is CSS-only.

- `app/page.tsx` — The whole page: header, hero (with the `Slips` figure), clients, method, builds, websites, tools, experience, contact
- `app/globals.css` — Design tokens on `:root` (light + dark), type scale, every section's layout
- `app/layout.tsx` — Archivo (variable, with `wdth` axis) via `next/font/google`, metadata
- `lib/content.ts` — All copy and project data: `engagements`, `method`, `builds`, `sites`, `tools`, `experience`. Edit content here, not in the page
- `public/` — Static images. Remote images must be allowlisted in `next.config.ts`

## Design

- **Concept:** the carbon-copy paperwork Nigerian businesses run on (requisition → purchase order → delivery note → payment voucher). The hero fans four slips of one purchase and a ballpoint-blue line draws the price check a system adds. That is the page's one bold element; everything else stays quiet.
- **Palette:** `--paper` cool bond, `--ink` blue-black, `--biro` ballpoint blue (the only accent), `--copy-pink` / `--copy-yellow` duplicate sheets, `--flag` red for serial numbers. Dark mode is ink-blue, set under `prefers-color-scheme` and `[data-theme]`.
- **Type:** Archivo only. Headlines use `font-stretch: 125%` (expanded); body at normal width.
- **Numbering** appears only on the 10-step method, because it is a real sequence.
- **Avoid:** all-caps eyebrow labels, monospace data labels, arrows on links, gradient glows, identical card grids.

## Content Rules

- Positioning: Chief AI Officer for Nigerian businesses (Chief AI Officer at Multonion; independent consulting in Abuja; frontend developer at Belsoft).
- **Consulting clients are anonymised** — sector and city only. No client names, no prices, no internal findings.
- Name things in plain standard terms ("Expenditure tracking"), not slogans.
- Gender-neutral wording for clients and their staff.
- Write like someone who ships: specific tools, specific outcomes, active verbs.

## Pitfalls

- The hero `.slips` figure is one scaled canvas: slips, pen SVG (viewBox 480×440) and note are all sized in `--u` (one design pixel, `100cqw / --d`), so they stay aligned at any width. Phones use a 400-wide design and shift the pen path by `translateX(-66px)`. If you move a slip or edit the pen path, re-check the ring against the price at 1280px and 375px. `overflow-x: clip` on `.canvas` stops the wider SVG from causing horizontal scroll.

- `AGENTS.md` holds Next.js 16 agent rules — read `node_modules/next/dist/docs/` before using unfamiliar Next.js APIs.
- Git over SSH fails from Claude's sandbox; push with `git -c credential.helper='!gh auth git-credential' push https://github.com/JudahDevelops/JudahDevelopsPortfolio.git main`.
