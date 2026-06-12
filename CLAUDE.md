# Portfolio Website — Claude Code Instructions

## Who You Are Building This For

**Name:** Judah  
**Age:** 16 (born November 15, 2008)  
**Education:** Computer Science student at Nile University of Abuja  
**GitHub:** JudahDevelops  

Judah is a 16-year-old CS student who builds production-grade automation systems and web applications. The portfolio should communicate maturity, technical depth, and real execution ability — not a student project. The age is not something to hide, but it should not be the first thing a visitor reads either. Let the work speak first.

---

## The Target Job

**Company:** 8cast Corporation  
**Role:** Sales Automation Specialist (Contract / Remote)  
**What they do:** Fractional CFO services, bookkeeping, fundraising prep, and financial education for small businesses, startups, and entrepreneurs.

**What they need:**
- Someone who has *actually built* cold email campaigns — not just browsed the UI
- Hands-on with Apollo.io, Instantly.ai, Clay, Evaboot
- AI-powered outreach copy generation at scale
- CRM automation (HubSpot) — routing leads, Slack alerts, tagging contacts by behavior
- Data hygiene — no duplicates, no stale records
- ABM campaign execution (targeted account lists, multi-touchpoint outreach)
- n8n / Zapier / Make automation experience
- This is an **execution role**, not strategy — they want someone who runs the system clean and fast

**How to apply:**
- Resume
- 2–3 examples of campaigns or outbound systems built (screenshots, metrics, description)
- Tools used and how long
- 3–5 sentence note on why it's a fit
- Available hours/week and start date

---

## Judah's Skills & Tools

**Automation:**
- n8n — production workflows (built, deployed, iterated — not tutorials)
- HubSpot — contact management, deal pipelines, lead status routing
- Instantly.ai — campaign setup, lead enrollment, reply handling
- Hunter.io — email verification, domain search

**Development:**
- React.js
- Next.js
- TypeScript / JavaScript
- Python (basic scripts)
- HTML / CSS

**AI Tools:**
- Claude (used to generate and personalize outreach copy at scale)
- DeepSeek (integrated into n8n pipelines for classification and icebreaker generation)

---

## Portfolio Projects to Feature

These are the three n8n workflow projects built specifically for this application. Each has a GitHub repo, a workflow screenshot, and a YouTube demo video.

### 1. AI Lead Enrichment Pipeline
- **What it does:** Reads raw leads from a Google Sheet, verifies emails with Hunter.io, generates personalized AI icebreaker lines with DeepSeek, and writes enriched leads to an output sheet. Batched processing, Slack summary on completion.
- **Relevance to 8cast:** Direct match to "scrape and enrich lead lists" and "use AI to write personalized outreach copy at scale"
- **GitHub:** https://github.com/JudahDevelops/n8n-ai-lead-enrichment-pipeline
- **Demo:** https://www.youtube.com/watch?v=UClQIUK7IYc
- **Stack:** n8n, Hunter.io, DeepSeek, Google Sheets, Slack

### 2. Sheet → HubSpot + Instantly Campaign Launcher
- **What it does:** Reads enriched leads from Google Sheets, creates/updates HubSpot contacts, enrolls each lead in an Instantly.ai campaign with AI-generated personalized copy, marks enrolled leads in the sheet, posts Slack summary.
- **Relevance to 8cast:** Direct match to "build and launch cold email campaigns", "ensure contacts are properly logged in CRM", "data hygiene"
- **GitHub:** https://github.com/JudahDevelops/n8n-sheet-to-hubspot-instantly
- **Demo:** https://www.youtube.com/watch?v=UhG0-olnHBM
- **Stack:** n8n, Google Sheets, HubSpot, Instantly.ai, DeepSeek, Slack

### 3. Gmail Reply Classifier & CRM Router
- **What it does:** Monitors Gmail inbox every minute, checks if the sender is a HubSpot contact, classifies reply intent with DeepSeek AI (Interested, Meeting Booked, Unsubscribe, Referral, Not Interested, Wrong Person, Out of Office, Needs More Info, Unrelated), routes to appropriate HubSpot action (update contact, create deal, create task), posts Slack alert.
- **Relevance to 8cast:** Direct match to "route qualified leads", "trigger Slack alerts", "tag contacts based on behavior", "track account-level engagement and flag high-intent signals"
- **GitHub:** https://github.com/JudahDevelops/n8n-gmail-reply-classifier-crm-router
- **Demo:** https://www.youtube.com/watch?v=jd1gciIHBGo
- **Stack:** n8n, Gmail, DeepSeek, HubSpot, Slack

### Other GitHub Projects (secondary — use if needed to fill the page)
- **academic-planner** — React/TypeScript app for assignment and deadline tracking
- **belsoftLandingPage** — TypeScript landing page
- **JudahDevPortfolio** — previous portfolio (CSS)
- **Data viz projects** — chloropleth map, heat map, scatterplot, GDP chart (D3/JavaScript)

---

## Website Goals

1. **Primary goal:** Get Judah the 8cast contract. The site should function as a living application — it IS the "2–3 examples of campaigns you've built" requirement.
2. **Secondary goal:** General developer/automation portfolio for future opportunities.

The visitor (an 8cast hiring manager) should land, immediately understand what Judah builds, watch or click through the three workflow demos, and feel confident enough to respond.

---

## Design Direction

**Vibe:** Minimal but standout. Not a generic dev portfolio. Clean, confident, slightly editorial.  
**References to aim for:** Linear.app aesthetic — lots of whitespace, sharp typography, subtle motion, dark mode preferred.  
**Color palette:** Dark background (near black), white/light text, one accent color (electric blue or lime green — pick whichever fits better).  
**Typography:** Sharp, modern sans-serif. Large headings. Not rounded or playful.  
**No:** Stock illustrations, generic hero text like "I build things", cluttered layouts, light pastel themes.

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion for subtle entrance animations
- **Deployment:** Vercel

---

## Site Structure

### Hero Section
- Name: Judah
- One-line descriptor — something sharp, not generic. E.g.: *"I build outbound systems that run themselves."*
- Two CTAs: **View Projects** (scrolls down) | **GitHub** (links out)
- Subtle background animation or grid — nothing heavy

### About (keep short)
- 3–4 sentences: CS student at Nile University, 16, builds automation pipelines and web apps, currently specialising in sales automation and AI-powered outreach systems
- Do NOT lead with age — lead with what he builds

### Projects Section (the main event)
- Three workflow cards, each with:
  - Project title
  - 1–2 sentence description
  - Stack tags (n8n, HubSpot, DeepSeek, etc.)
  - YouTube thumbnail that plays inline or links to YouTube
  - GitHub button
- These three should be visually prominent — this is the portfolio's core

### Skills / Tools Section
- Clean icon grid or tag list
- Group by category: Automation Tools | Development | AI Tools

### Contact / Apply Section
- Since this is aimed at 8cast, include a short "Why I'm a fit" note (3–5 sentences, tailored to the role)
- Email link or contact form
- Links: GitHub, YouTube channel (if applicable)

---

## Tone & Copy Guidelines

- Write like someone who ships, not someone who studies
- Avoid: "passionate about", "love to learn", "aspiring"
- Use: specific tools, specific outcomes, active verbs
- The 8cast job description values execution over theory — the copy should reflect that
- Age-aware but not apologetic — frame youth as "already doing this at 16" not "despite being 16"

---

## Key Constraints

- Do not use placeholder lorem ipsum anywhere — write real copy
- Every section must be complete before considering the site done
- Mobile responsive is required
- The three n8n projects are non-negotiable feature items — they must be on the page
- YouTube videos should be embeddable or link directly — not hidden behind a "projects" tab
- Keep it to one page (single scroll) unless there's a strong reason to split
