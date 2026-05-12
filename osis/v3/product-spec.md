# serdna.dev v3 — Product Spec

Source of truth for what's on the page. The [vision doc](vision.md) owns the why. This doc owns the what.

---

## Page Structure

Three sections. One scroll. Scannable in 10 seconds.

---

### 1. Hero

**Purpose:** Sharp identity claim in under 5 seconds.

**Layout:**
- Fixed section, full viewport height
- Portrait center-bottom (parallax WebGL depth map — shipped)
- GSAP scroll-away: hero scales down + vignette as content rises with `rounded-t-[3.5rem]` lip
- No digital rain (component preserved on `/components` page)

**Content:**
- Name: Andrés Campos
- Title: Product Engineer
- Claim line (from v2, polish TBD)
- CTAs: Email (primary), LinkedIn (secondary), Resume download (tertiary)
- Citizenship flags: US, MX, DE, UAE — "Available Globally"

**Status:** Built. Remove digital rain canvas, keep everything else.

---

### 2. Featured Work

**Purpose:** Prove the claim with four shipped products. Each project earns its spot by proving one specific thing.

**Layout:** Alternating left/right split sections. Full width.

Each project:
- **Image side:** Background image with project logo overlaid + tech stack icons at the bottom of the image
- **Text side:** Project title, one-line description, what it proves, "Read more" link (opens modal — later pass)

**The Four:**

#### 2a. MyStory — Flagship, Depth
- **Proves:** Full-stack + AI depth. Production system, not a prototype.
- **Image:** Product screenshot or hero visual
- **Logo:** MyStory logo
- **Tech stack:** Next.js, LiveKit, Neo4j, Mux, Stripe, Anthropic, OpenAI
- **Description:** AI life story platform. Voice interviews, knowledge graphs, 5 LLM providers. 192K lines of production code.
- **Link:** mystory.bio
- **Image position:** Left

#### 2b. DeepMesh — Hackathon Win, Speed
- **Proves:** Builds fast under pressure. Competitive output.
- **Image:** Product screenshot or video still
- **Logo:** DeepMesh logo
- **Tech stack:** Next.js, Twilio, PydanticAI, Neon
- **Description:** WhatsApp research marketplace. Built in 48 hours. 4th place finish.
- **Link:** deepmesh.io
- **Image position:** Right

#### 2c. Osis — 0-to-1, Tool-Maker
- **Proves:** Sees gaps, builds tools. The 0-to-1 instinct.
- **Image:** CLI screenshot or terminal visual
- **Logo:** Osis logo (or wordmark)
- **Tech stack:** TypeScript, Claude Code, Anthropic
- **Description:** Product management that lives in the codebase. Built because the workflow didn't exist.
- **Link:** GitHub repo
- **Image position:** Left

#### 2d. Envoy — Deep User Problem
- **Proves:** Solves real problems with judgment. Not building for the sake of building.
- **Image:** Product screenshot
- **Logo:** Envoy logo
- **Tech stack:** Next.js, Inngest, NestJS, Neon, Anthropic
- **Description:** Sovereign AI for diplomatic communications. Embassy inbox intelligence that respects data sovereignty.
- **Link:** envoy.cd
- **Image position:** Right

**Interaction:**
- Desktop: alternating L/R layout, generous whitespace
- Mobile: stacked — image on top, text below
- "Read more" opens modal overlay with case study deep dive (NOT built in this pass)

---

### 3. More Work (Carousel)

**Purpose:** Show range beyond the four featured projects. Drive to full feed.

**Layout:** Horizontal carousel with 3 smaller cards + CTA card linking to `/projects`.

**Cards:**

#### Art Direct
- **One-liner:** AI art direction tool. Built in one day.
- **Logo/image:** TBD

#### InitialCommit
- **One-liner:** Abu Dhabi builder community. 20 members, 100% repeat attendance.
- **Logo/image:** InitialCommit logo

#### Spectr
- **One-liner:** Docs UX tool. Open source.
- **Logo/image:** TBD

**CTA card:** "See all projects →" links to `/projects`

**Interaction:**
- Desktop: horizontal scroll or arrow navigation
- Mobile: swipeable

---

### 4. Contact

**Purpose:** Zero-friction conversion.

**Layout:** Simple. Left-aligned or centered.

**Content:**
- Headline: "Let's build something."
- Body: Available for contract work and full-time remote roles. UTC+4. 24-hour response.
- CTAs: Email `andres@onc9.com` (primary), Calendly 30-min (secondary)
- Links: LinkedIn, GitHub

---

## Additional Pages

### `/projects`
Full project feed. All projects listed. Card format TBD. Later pass — placeholder page is fine for now.

### `/components`
Showcase page for interactive components. Digital rain lives here. Anything else worth showing off goes here too.

---

## What's NOT in v3

- Modal deep dives (later pass — "read more" links are wired but modals not built)
- `/projects` feed page content (placeholder only)
- Blog / signal section
- Voice agent
- SEO infrastructure (meta, OG, JSON-LD)
- Analytics (PostHog)
- Content collections migration
- Mobile polish beyond "doesn't break"

---

## Implementation Notes

- Strip `index.astro` down to: Hero + Featured Work + Carousel + Contact
- Digital rain component moves to `/components` page, removed from hero
- Featured work is a new component — alternating split layout
- Carousel is a new component — horizontal scroll with cards
- All project data should eventually come from `packages/portfolio` but hardcoding is fine for this pass
- Tech stack icons: use official SVGs where possible, consistent sizing
