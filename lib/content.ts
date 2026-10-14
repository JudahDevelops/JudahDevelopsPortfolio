export type Engagement = {
  who: string;
  where: string;
  role: string;
  status: string;
  summary: string;
  systems: string[];
  tint: "pink" | "yellow" | "white";
};

export const engagements: Engagement[] = [
  {
    who: "Multonion",
    where: "B2B marketplace digitising African trade",
    role: "Chief AI Officer",
    status: "2026 to present",
    summary:
      "I own the company's AI strategy. I map how each team works, rate every opportunity on impact and effort, then build and roll out the automations that rank highest.",
    systems: [
      "Workflow map of the business",
      "Prioritised automation backlog",
      "n8n automations in production",
    ],
    tint: "white",
  },
  {
    who: "Property developer",
    where: "Abuja",
    role: "Discovery and system design",
    status: "Proposal delivered, Sep 2026",
    summary:
      "A growing developer running procurement, units and buyer payments on spreadsheets. Three site visits with the director, storekeeper, secretary and accountant, then a four-phase plan to move it into one controlled system.",
    systems: [
      "Procurement and expenditure control",
      "Property and document register",
      "Service charge and resident billing",
      "Buyer accounts and payment plans",
    ],
    tint: "pink",
  },
  {
    who: "Project management and design practice",
    where: "Abuja",
    role: "Discovery, proposal and working demo",
    status: "Demo built, Sep 2026",
    summary:
      "A design and project management practice that wants spending, hours and instructions on every job recorded in one place. I built a working demo the principal can open on a phone before committing to anything.",
    systems: ["Expenditure tracking", "Time tracking", "Project control"],
    tint: "yellow",
  },
  {
    who: "Events and leisure centre",
    where: "Abuja",
    role: "Discovery, proposal and proposal site",
    status: "Proposal delivered, Sep 2026",
    summary:
      "A gym, an events venue and a restaurant, each keeping its own books. One system in three phases, with a dashboard the board reads on their phones.",
    systems: [
      "Gym entry and memberships",
      "Events office: enquiries, venue calendar, deposits",
      "Kitchen and lounge sales",
    ],
    tint: "white",
  },
];

export const method: { step: string; detail: string }[] = [
  { step: "Understand", detail: "How the business makes money, who does what, where it slows down." },
  { step: "Map", detail: "Every repeatable process: trigger, steps, people, tools, output." },
  { step: "Suggest", detail: "Where automation or AI removes work from each process." },
  { step: "Check feasibility", detail: "What can be built, with which tools, at what effort." },
  { step: "Prioritise", detail: "High impact and low effort goes first." },
  { step: "Build", detail: "Working systems, mostly in n8n with Claude or DeepSeek." },
  { step: "Present", detail: "Show it running on the client's own data." },
  { step: "Implement", detail: "Put it into daily use, one phase at a time." },
  { step: "Train", detail: "The people using it can run it without me." },
  { step: "Review", detail: "Measure what changed, then pick the next process." },
];

export type Build = {
  title: string;
  description: string;
  stack: string[];
  github: string;
  demo?: string;
};

export const builds: Build[] = [
  {
    title: "Lead enrichment pipeline",
    description:
      "Reads raw leads from Google Sheets, verifies emails with Hunter.io, writes a personalised opening line for each with DeepSeek, and returns the enriched list with a Slack summary.",
    stack: ["n8n", "Apollo.io", "Hunter.io", "DeepSeek", "Google Sheets", "Slack"],
    github: "https://github.com/JudahDevelops/n8n-ai-lead-enrichment-pipeline",
    demo: "https://www.youtube.com/watch?v=UClQIUK7IYc",
  },
  {
    title: "Sheet to HubSpot and Instantly campaign launcher",
    description:
      "Creates or updates each lead in HubSpot, enrols them in an Instantly.ai campaign with personalised copy, marks them as sent and posts a summary to Slack.",
    stack: ["n8n", "HubSpot", "Instantly.ai", "DeepSeek", "Google Sheets", "Slack"],
    github: "https://github.com/JudahDevelops/n8n-sheet-to-hubspot-instantly",
    demo: "https://www.youtube.com/watch?v=UhG0-olnHBM",
  },
  {
    title: "Gmail reply classifier and CRM router",
    description:
      "Checks Gmail every minute, sorts each reply from a HubSpot contact into one of nine intents, updates the contact to match and alerts the team in Slack.",
    stack: ["n8n", "Gmail", "DeepSeek", "HubSpot", "Slack"],
    github: "https://github.com/JudahDevelops/n8n-gmail-reply-classifier-crm-router",
    demo: "https://www.youtube.com/watch?v=jd1gciIHBGo",
  },
  {
    title: "Support ticket triage and router",
    description:
      "Takes tickets from a webhook, classifies them with structured AI output, logs them, sends sales enquiries to HubSpot and replies to the customer automatically.",
    stack: ["n8n", "DeepSeek", "Gmail", "Google Sheets", "HubSpot", "Slack"],
    github: "https://github.com/JudahDevelops/n8n-ai-support-ticket-triage-router",
  },
  {
    title: "Invoice reminders and payment follow-up",
    description:
      "Every morning at 9, finds unpaid invoices past due, scores how urgent each is, sends a written reminder and escalates the overdue ones to Slack.",
    stack: ["n8n", "Google Sheets", "OpenAI", "Gmail", "Slack"],
    github: "https://github.com/JudahDevelops/n8n-smart-invoice-reminder-payment-reconciler",
  },
  {
    title: "Customer support chatbot",
    description:
      "A chat agent that answers support questions and remembers the conversation so far.",
    stack: ["n8n", "DeepSeek"],
    github: "https://github.com/JudahDevelops/n8n-clouddesk-support-chatbot",
  },
];

export type Site = {
  title: string;
  description: string;
  stack: string[];
  href: string;
  linkLabel: string;
  image?: string;
};

export const sites: Site[] = [
  {
    title: "Florece's Place",
    description:
      "Online store for a Nigerian fashion brand, with payments, naira and dollar pricing, and a CMS the brand updates without a developer.",
    stack: ["Next.js", "Sanity", "TypeScript", "Tailwind"],
    href: "https://www.florecersplace.com/",
    linkLabel: "Visit site",
    image: "https://www.florecersplace.com/images/hero-1.jpg",
  },
  {
    title: "Cannon Thoughts With IB",
    description:
      "Site for a leadership coach: programmes, articles, testimonials and an enquiry form.",
    stack: ["React", "Sanity", "Tailwind", "Framer Motion"],
    href: "https://www.cannonthoughtswithib.com/",
    linkLabel: "Visit site",
    image: "/cannon-hero.jpg",
  },
  {
    title: "The Father's Church",
    description:
      "Church website with sermons, events and a media gallery, all edited by the church team in Sanity.",
    stack: ["React", "Sanity", "Bootstrap"],
    href: "https://github.com/BELSOFT-SYSTEMS/tfc_website",
    linkLabel: "View code",
  },
  {
    title: "Belsoft admin dashboard",
    description:
      "Internal dashboard for job oversight, account management and performance metrics.",
    stack: ["React", "TypeScript", "Vite"],
    href: "https://github.com/JudahDevelops/belsoftLandingPage",
    linkLabel: "View code",
  },
];

export const tools: { title: string; description: string; href?: string }[] = [
  {
    title: "Timeblock",
    description:
      "A time-blocking calendar where every event opens into a full block editor, with two-way Google Calendar sync. In development.",
  },
  {
    title: "Prompt engineering skill for Claude Code",
    description: "Creates, reviews, debugs and scores prompts and CLAUDE.md files.",
    href: "https://github.com/JudahDevelops/prompt-engineering-skill",
  },
  {
    title: "Presentation outline skill for Claude Code",
    description: "Turns a topic into a slide-by-slide outline with a clear argument.",
    href: "https://github.com/JudahDevelops/presentation-outline-skill",
  },
];

export const experience: { org: string; role: string; when: string; detail: string }[] = [
  {
    org: "Multonion",
    role: "Chief AI Officer",
    when: "2026 to present",
    detail: "AI strategy and automation for a B2B trade marketplace.",
  },
  {
    org: "Independent",
    role: "AI and automation consultant",
    when: "2026 to present",
    detail: "Discovery, proposals and systems for businesses in Abuja.",
  },
  {
    org: "Belsoft Systems",
    role: "Frontend developer",
    when: "Jul 2025 to present",
    detail: "Production sites and dashboards for clients, design through deployment.",
  },
  {
    org: "Nile University of Abuja",
    role: "BSc Computer Science",
    when: "In progress",
    detail: "",
  },
];
