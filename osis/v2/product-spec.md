# serdna.dev v2 — Product Spec

Source of truth for what's on the page. The [vision doc](vision.md) owns the narrative. This doc owns the implementation.

---

## Page Structure

Seven sections. One scroll. No routing.

---

### 1. Hero

**Purpose:** Install the core claim in under 5 seconds. Pillar: All four.

**Layout:**
- Fixed section, full viewport height
- Portrait center-bottom (parallax WebGL depth map — already shipped)
- Digital rain canvas behind everything (already shipped)
- GSAP scroll-away: hero scales down + vignette as scrollable content rises with `rounded-t-[3.5rem]` lip

**Content:**
- **Name:** Andrés Campos
- **Title:** Product Engineer
- **Claim line:** "I ship production AI systems end-to-end. Seven products across seven domains in 14 months — from voice AI to embassy intelligence to bilingual marketing."
- **CTAs:** Email (primary), LinkedIn (secondary), Resume download (tertiary)
- **Stats column** (desktop right side): 7 products, 5 LLM providers, 14 months, 20+ contributors — with progress bars
- **Citizenship flags:** US, MX, DE, UAE with custom cursor labels on hover. "Available Globally" underneath.

**Status:** Built. Needs final copy polish only.

**Copy decision needed:** The claim line works but could be sharper. Consider: "I build products people love. Seven shipped in 14 months." — leads with the builder identity, not the AI angle. Final copy TBD during build.

---

### 2. Work (Bento Grid)

**Purpose:** Prove the claim with shipped products. Pillars: Unreasonably Effective, Builder with Taste.

**Layout:** 3-column bento grid. Mixed card sizes. All link externally.

**Products (5):**
1. **MyStory** — AI life story platform. Col 1, rows 1-2. Large card. Screenshot + logo. → mystory.bio
2. **InitialCommit** — Abu Dhabi builder community. Col 2, top half. Image cycling (dhow/dunes/mangroves). → initialcommit.ae
3. **Envoy** — Sovereign AI for diplomatic communications. Col 2, bottom half. Screenshot + logo. → envoy.cd
4. **DeepMesh** — WhatsApp research marketplace. Col 3, full height. Video background + logo. "4th Place" badge. → deepmesh.io
5. **RPT** — Bilingual EN/AR marketing. Col 1, row 3. Screenshot + logo. → rotatingpower.net

**Status:** Built and polished. No changes needed.

---

### 3. Open Source

**Purpose:** Show the tool-building instinct. Pillar: Builder with Taste.

**Layout:** Three cards in a row. GitHub icon + name + description + link.

**Projects:**
1. **Osis** — Product management in the codebase
2. **Prompt Eval** — Multi-model prompt testing across 6 providers
3. **Spectr** — Docs UX tool

**Status:** Built. No changes needed.

---

### 4. How I Build (Taste Section) — NEW

**Purpose:** Communicate the first principles of Andrés' craft. Make taste visible. Pillar: Builder with Taste, Judgment Over Hype.

**Layout:** Full-bleed, `100dvh`. Four equal quadrants. Each quadrant has a background image/video and a principle title. On hover, the quadrant reveals Andrés' own words about how he applies the principle.

**The Four Principles:**

#### Q1: Start with the User
- **Visual:** Steve Jobs video (`sj.mov` — already in `public/`)
- **Title:** "Start with the user experience and work backwards to the technology"
- **Hover copy:** How Andrés runs discovery before writing code. The CrowdSolve lesson — the product is adoption, not code. Every product starts with: what does the user need, what's the simplest path to that.
- **Copy TBD during build — needs to be in Andrés' voice, 2-3 sentences max.**

#### Q2: Simplify Ruthlessly
- **Visual:** SpaceX Raptor engine image (NEEDS SOURCING)
- **Title:** "Simplify ruthlessly"
- **Hover copy:** How Andrés fights complexity. Cutting scope to the essential. The site itself is an example — what's not on the page matters as much as what is. Three similar lines of code is better than a premature abstraction.
- **Copy TBD during build.**

#### Q3: Spec-Driven Development
- **Visual:** CLI/terminal aesthetic image (NEEDS SOURCING)
- **Title:** "Spec-driven development"
- **Hover copy:** How Andrés uses Osis — specs as the source of truth, CLI agents as the execution engine, human as the decision maker. The AI writes the code, but the human owns the product. This is how 7 products ship in 14 months.
- **Copy TBD during build.**

#### Q4: Judgment Over Hype
- **Visual:** TBD (NEEDS SOURCING — something that communicates precision/restraint)
- **Title:** "Know when not to pull the trigger"
- **Hover copy:** The MyStory story — tried autonomous agents, measured the latency, chose stateless LLM calls because the UX demanded it. Knowing which AI architecture is wrong for the problem is rarer than knowing how to build with all of them.
- **Copy TBD during build.**

**Interaction:**
- Desktop: hover over quadrant → dark overlay lifts slightly, title stays, copy appears below it. Smooth transition.
- Mobile: tap to toggle. Or stack vertically as full-width cards with copy always visible.
- The section should feel cinematic. Full bleed, no padding, no max-width container. The visual impact is the point.

**Technical notes:**
- `sj.mov` needs to be converted to mp4 for web (mov is huge). Or use a poster frame + play on hover.
- All images/videos should be `object-cover` to fill quadrants regardless of aspect ratio.
- Consider `mix-blend-mode` or gradient overlays to ensure text readability over any visual.

---

### 5. Systems Shipped (Enhanced)

**Purpose:** Show depth and judgment. Not just what was used, but why. Pillars: Judgment Over Hype, Unreasonably Effective.

**Layout:** Two parts stacked.

#### Part A: Language Breakdown — NEW

A visual component showing the distribution of coding languages across all shipped products in the past year.

**Data (approximate — verify during build):**
- TypeScript — ~70% (Next.js, tRPC, Astro, React across 5+ products)
- Python — ~15% (PydanticAI agents, FastAPI services, DeepMesh backend)
- Swift — ~5% (MyStory iOS components)
- Other (SQL, shell, config) — ~10%

**Visual treatment:** Horizontal stacked bar, pie chart, or grid proportion visualization. Clean, data-forward. Should feel like a dashboard metric, not a decorative chart. Show the exact percentages.

**Why this works:** It answers "what does this person actually write day-to-day" in one glance. For a product engineer role, seeing 70% TypeScript is an instant qualification signal.

#### Part B: Technology Grid (Enhanced)

Interactive technology showcase — already built. Enhancement: add decision commentary.

**Current behavior:** Hover a tech → see name, product, and one-line detail.

**Enhanced behavior:** Add a "Why this, not that" line to each technology. The commentary shows architectural judgment, not just usage.

**Enhanced technology data:**

| Tech | Detail | Decision Commentary |
|------|--------|-------------------|
| LiveKit | Two-agent voice AI with turn-taking | Chose over Twilio Voice for real-time streaming and custom silence classification |
| Mux | Segmented video uploads, chunked streaming | Needed server-side processing hooks — YouTube/Vimeo don't expose these |
| Inngest | Email sync orchestration pipelines | Event-driven over cron — needed retry semantics and step functions |
| tRPC | Type-safe APIs, migrated from GraphQL | GraphQL was overkill — tRPC gave full type safety with zero schema overhead |
| Neo4j | Knowledge graph for narrative mapping | Relational couldn't express the recursive interview→insight→theme relationships |
| Neon | Multi-tenant PostgreSQL, per-country isolation | Data sovereignty required physical DB separation — Neon branching made this manageable |
| PydanticAI | Type-safe agent responses | Needed structured output guarantees — raw LLM responses were too unreliable for downstream parsing |
| Twilio | WhatsApp-native research interface | WhatsApp is 90%+ penetration in target market — web app would have been friction |
| Stripe | Complex billing: trials, subs, gifts, coupons | Built the billing system once, correctly — handles 6 different purchase flows |
| Drizzle | 35+ table schema, production ORM | Chose over Prisma for raw SQL escape hatches and bundle size in serverless |
| NestJS | Hexagonal architecture, pluggable adapters | Per-country infrastructure differences needed clean adapter boundaries |
| Astro | Bilingual static site, React islands, full RTL | Static-first for SEO + React islands only where interaction is needed |
| Next.js | App Router across 4 production apps | Default choice for interactive apps — SSR, RSC, and API routes in one framework |
| Anthropic | Production LLM integration | Claude for long-context reasoning tasks — measurably better than GPT-4 on structured output |
| OpenAI | Multi-provider routing | GPT-4o for classification tiers where speed > reasoning depth |
| Vercel | Edge deployment across 5 apps | Zero-config deploys from monorepo — no DevOps overhead for a solo builder |

**Technology logos needed (collect during build):**

LiveKit, Mux, Inngest, tRPC, Neo4j, Neon, PydanticAI, Twilio, Stripe, Drizzle, NestJS, Astro, Next.js, Anthropic, OpenAI, Gemini, Vercel, Fly.io, Cloudflare, Ably

Use official SVG logos where available. Consistent sizing (24x24 or 32x32). Monochrome or full color — decide during build based on visual harmony.

---

### 6. The Path (Timeline)

**Purpose:** Show range as an asset. Pillar: All four.

**Layout:** Vertical alternating timeline. Center line on desktop, left-aligned on mobile.

**Entries (6):**
1. **2017–2021 — Vanderbilt University.** Literature + CS. Learned to deconstruct complex systems.
2. **2022 — CrowdSolve.** Head of Product Design. First startup. The product is adoption, not code.
3. **2022 — Arboreum.** Climate tech. CEO-level partnerships, industry conferences. Different domain, same approach.
4. **2023 — Abu Dhabi.** Fourth country. Built InitialCommit from scratch. 20 members, 100% repeat attendance.
5. **2024 — MyStory.** Flagship. 192K lines. Voice AI, knowledge graphs, 5 LLM providers.
6. **2024–2026 — Seven products, seven domains.** The output accelerated because the thinking was already there.

**Status:** Built. Copy is solid. No changes needed for v2.

---

### 7. Contact

**Purpose:** Zero-friction conversion. Lead with contract availability. Pillar: Team Multiplier.

**Layout:** Left-aligned block. Simple.

**Content:**
- **Headline:** "Let's build something."
- **Body:** "Available for contract work and full-time remote roles. Currently based in Abu Dhabi (UTC+4). I respond within 24 hours."
- **CTAs:** Email `andres@onc9.com` (primary), Calendly 30-min call (secondary)
- **Links:** LinkedIn, GitHub as text links

**Changed from v1:**
- Headline from "Let's talk" → "Let's build something" — matches builder positioning.
- Body leads with contract availability, adds timezone for remote work context.
- Resume download moved to hero only (not duplicated in contact).

---

## Assets Checklist

### Have
- [x] Portrait + depth mask (WebGL parallax)
- [x] Project screenshots (MyStory, Envoy, IC, RPT)
- [x] DeepMesh video (`deepmesh.mp4`)
- [x] Steve Jobs video (`sj.mov` — needs mp4 conversion)
- [x] IC cycling images (dhow, dunes, mangroves)
- [x] Project logos (MyStory, Envoy, RPT, DeepMesh)
- [x] Country flag images

### Need
- [ ] **SpaceX Raptor engine image** — for "Simplify Ruthlessly" quadrant
- [ ] **CLI/terminal image** — for "Spec-Driven Development" quadrant
- [ ] **Judgment visual** — for "Know When Not to Pull the Trigger" quadrant
- [ ] **Technology logos (20)** — SVGs for systems grid. Full list above.
- [ ] **Resume PDF** — in `public/resume.pdf`
- [ ] **OG image** — for social sharing (1200x630)
- [ ] **Convert `sj.mov` to mp4** — mov is too large for web delivery

### Copy Decisions (Write During Build)
- [ ] Hero claim line — final version
- [ ] How I Build — hover copy for all 4 quadrants (in Andrés' voice)
- [ ] Systems — decision commentary (use table above as starting point)
- [ ] Language breakdown percentages (verify against actual codebases)

---

## Shipping Notes

**Priority order for today (April 6):**
1. How I Build section (new — the differentiator)
2. Systems enhancement (language breakdown + decision commentary)
3. Contact copy update (contract-first)
4. Hero copy polish (if time)
5. Convert `sj.mov` → mp4
6. Deploy to serdna.dev

**What NOT to build today:**
- Case study pages — cut from v2 scope. Work cards link externally. No dead routes.
- Blog / signal section — cut.
- Voice agent / Talk to Me — cut.
- SEO (meta tags, OG, JSON-LD) — do after deploy, not before.
- Analytics (PostHog) — do after launch.
- Content collections migration — v3 concern.
- Mobile polish beyond "doesn't break" — desktop-first for the audience.

**The site itself is the first case study.** Every implementation decision should be made with that in mind.
