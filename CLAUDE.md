# Portfolio Website — Claude Code Instructions

## Quick Start

Dev server: `npm run dev` (port 3000)
Build: `npm run build`
Lint: `npm run lint`
No test suite configured.

## Project Map

Single-page portfolio built with Next.js 16 (App Router) and plain CSS. The hero animation is CSS-only; the only client JS is `CabinetMotion`.

- `app/page.tsx` — Header, hero (with the `Slips` figure), `<Cabinet />`, contact
- `components/Cabinet.tsx` — The six content sections as folders (clients, method, builds, websites, tools, experience). Folder specs and card markup live here; server component
- `components/CabinetMotion.tsx` — The only client JS. Adds `is-live` to the cabinet and drives the folder stack and card shuffle from scroll. Off under reduced motion
- `app/cabinet.css` — Folder/card styles: static layout by default, sticky stack under `.cabinet.is-live`
- `scrollcraft/` — scroll-craft BRIEF.md and FINGERPRINTS.md; `lab/` (screenshots) is gitignored
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

## The Filing Cabinet

Every section between the hero and contact is a paper folder (`Cabinet.tsx`). Live mode: folders are sticky siblings in one `.cabinet`, each sticking `--peek` px lower than the last, so earlier folders stay behind with their tabs showing (tabs are links that jump to that folder). After each folder a `.folder-run` spacer (`--n` cards × `--step` svh) gives scroll room for the shuffle: a card slides out of the pocket, then files back into the back of the pile as the next one comes out. Desktop: pocket left, card right. Phone: card in the middle, pocket below, cards swap sideways.

- Static fallback (no JS, reduced motion) is the same markup as a normal grid. Keep it working.
- To add a card: add data in `lib/content.ts`; the folder's scroll length grows automatically.
- Verify with the scroll-craft harness: `?sc-verify` in the URL adds harness markers and `html.sc-ready`. Run from a dir with `playwright-core` (e.g. `~/Work/group39-learn`): `SCROLLCRAFT_CHROME=/usr/bin/brave node ~/.claude/skills/scroll-craft/scripts/shoot.mjs --url "http://localhost:3000/?sc-verify" --out <repo>/scrollcraft/lab/shots`, plus `--width 390 --height 844` and `--height 664` for phones.

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
