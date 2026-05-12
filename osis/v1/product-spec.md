# serdna.dev v1 — Product Spec

Source of truth for what's on the page. The [vision doc](vision.md) owns the narrative. This doc owns the implementation.

---

## Page Structure

Four sections. One scroll. No routing.

---

### 1. Hero

**Purpose:** Install the core claim in under 5 seconds. Pillar: All four — this is the full first impression.

**Layout:**
- Fixed section, full viewport height
- Two-column grid: text left, parallax portrait right
- GSAP scroll-away: hero scales down + vignette as scrollable content rises over it with `rounded-t-[3.5rem]` lip

**Content:**
- **Name:** Andres Campos
- **Title:** Senior Product Engineer
- **Claim line:** One sharp sentence. Not a tagline — a positioning statement. Something in the register of: "I ship production AI systems end-to-end. Seven products. Seven domains. Two years." Final copy TBD during build, but it must hit unreasonably effective without saying it.
- **CTAs:** Email (primary), LinkedIn (secondary), Resume download (tertiary)
- **Citizenship flags:** US, MX, DE, UAE with custom cursor labels on hover. "Available Globally" underneath.

**Kept from current:** Parallax 2.5D portrait (WebGL depth map), flag row with cursor interaction, GSAP scroll-away animation, overall grid layout.

**Changed from current:**
- Kill the stats row. The numbers belong in the claim line copy, not a separate element. Stats as a standalone block reads like a resume — the claim line should absorb the proof naturally.
- Subtitle changes from "Full-Stack Engineer & AI Product Builder" to "Senior Product Engineer" — simpler, maps to actual job titles hiring managers search for.
- Tighten the body copy. Current version is three sentences doing the work of one.

---

### 2. Work

**Purpose:** Prove the claim with three tiers of evidence. Pillars: First Principles Thinker, Unreasonably Effective.

**Layout:**
Three distinct tiers, stacked vertically. Each tier has a label and its own visual treatment. The tiers are:

#### Tier 1: Shipped Work

Grid of products and projects. Mix of cards — some with screenshots/video, some compact. All link externally.

**Products (5):**
1. **MyStory** — AI life story platform. Flagship. Large card. Screenshot + logo. → mystory.bio
2. **InitialCommit** — Abu Dhabi builder community. Image cycling (dhow/dunes/mangroves). Logo overlay. → initialcommit.ae
3. **Envoy** — Sovereign AI for diplomatic communications. Screenshot + logo overlay. → envoy.cd
4. **RPT** — Bilingual marketing for GCC engineering consultancy. Screenshot + logo overlay. → rotatingpower.net
5. **DeepMesh** — WhatsApp research marketplace. Hackathon video background + logo. "4th Place" badge. → deepmesh.io

**Open Source (3):**
1. **Osis** — Product management in the codebase. GitHub link.
2. **Prompt Eval** — Multi-model prompt testing across 6 providers. GitHub link.
3. **Spectr** — Docs UX tool. GitHub link.

All 8 items live in the same grid. Products are bigger cards with visuals. Open source items are smaller, quieter — name, one-liner, GitHub icon. The mix signals both shipping output and tool-building instinct without needing separate tiers or labels.

**Kept from current:** Bento grid layout, card designs, image cycling on IC, video on DeepMesh.

**Changed from current:**
- Remove CloudCapture — not impressive enough to earn a spot.
- Add Osis, Prompt Eval, Spectr as compact cards in the grid.
- All `href` values point to external URLs (live products or GitHub repos). No internal `/work/[slug]` pages.
- WorkCard component needs `target="_blank"` + `rel="noopener noreferrer"` for external links.

#### Tier 3: Systems (technology grid)

This is where first principles thinking becomes visible. A grid of technology logos/names — compact, scannable, signals breadth at a glance. The depth is in the interaction.

**Surface:** Grid of tech icons/names. Clean, tight. A CTO scanning for specific tech (Inngest, LiveKit, tRPC, etc.) finds it instantly.

**Depth:** Hover or click a technology → reveals how it was used. Not "I know Mux" but "Built real-time segmented video uploads with chunked streaming so hour-long sessions don't explode browser memory." Each reveal ties the technology to a real system shipped in a real product.

**Technologies (non-exhaustive, curate during build):**
- **Mux** — Real-time segmented video uploads, chunked streaming, webhook-based asset resolution (MyStory)
- **LiveKit** — Two-agent voice AI with turn-taking and silence classification (MyStory)
- **Inngest** — Email sync orchestration, multi-step processing pipelines (Envoy)
- **tRPC** — Type-safe APIs, migrated from GraphQL with real-data integration testing (MyStory)
- **Neo4j** — Knowledge graph for narrative mapping across interview sessions (MyStory)
- **Neon** — Multi-tenant PostgreSQL with per-country database isolation (Envoy)
- **PydanticAI** — Type-safe agent responses for structured research output (DeepMesh)
- **Twilio** — WhatsApp-native conversational research interface (DeepMesh)
- **Stripe** — Complex billing: trials, subscriptions, one-time purchases, gift flows, coupon system (MyStory)
- **Astro** — Static-first bilingual site with React islands, custom i18n, full RTL support (RPT)
- **Drizzle** — 35+ table schema, production ORM (MyStory)
- **NestJS** — Hexagonal architecture with pluggable infrastructure adapters (Envoy)
- **Ably** — Real-time pub/sub for live state sync (specify product during build)
- **Anthropic / OpenAI / Gemini / Groq / xAI** — 5 LLM providers in production, routed by task requirements not preference

**Visual treatment:** Grid of small pills or icon cards. Monospace or clean sans. On hover/click, a tooltip or expanding card shows the one-liner about how it was used + which product. Should feel like a tech radar, not a logo wall.

**Interaction:** Desktop = hover to reveal. Mobile = tap to expand. Keep reveals short — 1-2 sentences max.

**New section — does not exist in current implementation.**

---

### 3. The Path (Timeline)

**Purpose:** Show that first principles thinking was built across different worlds — not an AI adoption story. Pillar: First Principles Thinker.

**Layout:** Vertical alternating timeline. Same visual structure as current — center line on desktop, left-aligned on mobile, dots at each node.

**Content reframe:** The current timeline tells an "AI tool adoption story" (First ChatGPT -> First Cursor -> First Claude Code -> AI writes 100%). That narrative positions Andres as someone who adopted tools. The correct narrative is: someone who learned to think from first principles across wildly different contexts, and that thinking is now amplified by AI tooling.

**Revised timeline entries:**

1. **2017-2021 — Vanderbilt University.** Literature + CS. Learned to deconstruct complex systems — whether that's Dostoevsky or distributed architectures. The nontraditional combination built the first principles instinct.

2. **2022 — CrowdSolve.** Head of Product Design. First startup. Learned that the product is adoption, not code. Ran discovery interviews before writing a single line.

3. **2022 — Arboreum.** DeFi protocol. Smart contracts, distributed systems. Different domain, same approach: understand the problem from the ground up.

4. **2023 — Abu Dhabi.** Moved to the UAE. Built InitialCommit from scratch — community platform, event production, brand identity. Fourth country, fourth context to adapt to.

5. **2024 — MyStory.** Flagship product. 192K lines. Multi-provider AI, knowledge graphs, voice pipeline. The project where every lesson converged.

6. **2024-2025 — Seven products, seven domains.** Envoy, DeepMesh, RPT, CloudCapture, Arabesq, Prompt Eval. The output accelerated because the thinking was already there. AI tooling amplified it — it didn't create it.

**Kept from current:** Alternating layout, dot styling, responsive behavior.

**Changed from current:**
- Removed the four "AI milestone" nodes (First ChatGPT, First Cursor, First Claude Code, AI writes 100%). These told the wrong story.
- Condensed from 9 nodes to 6. Tighter.
- The last node absorbs the "AI era" message without making it the headline. The point is range and compounding skill, with AI as accelerant — not the story itself.
- Subhead changes from "From Russian literature to agent-era engineering" to something like "First principles, built across different worlds." Final copy TBD.

---

### 4. Contact

**Purpose:** Zero-friction conversion. The entire site builds to this. Pillar: Team Multiplier (the final signal — this person is easy to work with).

**Layout:** Left-aligned block. Simple.

**Content:**
- **Headline:** "Let's talk."
- **Body:** One line about availability. "Currently open to full-time senior roles and select projects. I respond within 24 hours."
- **CTAs:** Email (primary button), Calendly 30-min call (secondary button)
- **Links:** LinkedIn, GitHub as text links

**Kept from current:** Everything. This section is nearly done.

**Changed from current:**
- Remove the "Talk to me" chat teaser at the bottom. It promises a feature that doesn't exist and isn't being built in v1.

---

## What's Cut

| Section | Reason |
|---------|--------|
| **Blog / Signal** (4 quote cards) | No posts exist. Cards link nowhere. Shipping empty content signals "coming soon" energy, which is the opposite of "unreasonably effective." Add a blog when there are real posts. |
| **Values / Taste** (Porsche + Steve Jobs cards) | Decorative. Showing taste through video cards of other people's work is indirect. The site itself is the taste proof — vision doc is explicit about this. Cut it. |
| **How I Build** (video + 5 pillar cards) | The video is a placeholder. The pillar cards (Literature Mind, Engineering Foundation, etc.) are telling instead of showing. The Systems tier in Work now does this job better — it shows the thinking through real decisions, not self-description. |
| **Stats row** | Absorbed into hero claim line copy. Stand-alone stats feel like a resume. |
| **Internal work routes** (`/work/[slug]`) | Case studies are replaced by the Systems tier. Work cards link to live products. No dead routes. |
| **"Talk to me" chat teaser** | Feature doesn't exist. Don't tease vaporware. |

---

## Shipping Notes

**Priority order for build:**
1. Hero refinements (copy, kill stats, update subtitle)
2. Work section restructure (three tiers, external links)
3. Timeline rewrite (new entries, kill AI milestone nodes)
4. Contact cleanup (kill chat teaser)
5. Delete dead sections (blog, values, how I build)
6. SEO basics (meta tags, OG image, JSON-LD, sitemap)

**Technical debt to address during build:**
- All project data is hardcoded in `index.astro`. Fine for v1 — extracting to content collections or `packages/portfolio` is a v2 concern. Don't let it block shipping.
- WorkCard component needs `target="_blank"` + `rel="noopener noreferrer"` for external links.
- Large assets in `public/` (portrait 3.9MB, depth mask 1.7MB, .mov files). Optimize the portrait and depth mask. The Steve Jobs .mov gets deleted with the Values section.
- No reduced-motion fallback for GSAP animations or WebGL portrait. Add `prefers-reduced-motion` checks.
- Zero SEO. After sections are built, add: `<title>`, `<meta description>`, OG tags, JSON-LD Person schema, sitemap.xml, robots.txt.

**What NOT to build today:**
- Blog / content system
- Chat widget
- Analytics integration (PostHog — do it after launch, not before)
- Content collections migration
- `packages/portfolio` integration

**The site itself is the first case study.** Every implementation decision should be made with that in mind. The craft of the build is part of the portfolio.
