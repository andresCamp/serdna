# serdna Twin

Personal portfolio and hiring site for Andrés Campos. Static Astro app on Cloudflare Workers, large media on R2. One scroll, one pitch.

Last updated: 2026-05-12

---

## Master Diagram

```
                          serdna.dev
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
        ▼                     ▼                     ▼
   ┌─────────┐         ┌────────────┐         ┌───────────┐
   │   /     │         │ /projects  │         │/components│
   │  (Home) │         │ (Feed grid)│         │ (Showcase)│
   └────┬────┘         └─────┬──────┘         └─────┬─────┘
        │                    │                      │
   Hero · Parallax           Bento of 5             Digital Rain
   Featured Work (4)         work cards             experiment
   Carousel (3)              + IC cycle
   Contact                   + DM video
        │
        ▼
   ┌────────────────────────────────────────┐
   │  Outbound CTAs                         │
   │  mailto · LinkedIn · GitHub · Calendly │
   │  /resume.pdf (currently 404)           │
   └────────────────────────────────────────┘

   Persistent shell: sticky nav (serdna⇄andres sliding wordmark),
                     footer (email · LinkedIn · GitHub)
```

---

## Systems

### Home page (`/`)
**What:** Single-scroll pitch — the canonical surface.
**Capabilities:** Fixed parallax portrait hero with stats column and citizenship strip; four alternating featured projects (MyStory, DeepMesh, Osis, Envoy) each with hover-to-reveal ASCII architecture diagram; carousel of three secondary projects (Art Direct, InitialCommit, Spectr) with a "See all projects" CTA card; contact block with mailto + Calendly.
**Maturity:** solid.

### Projects page (`/projects`)
**What:** Compact feed of everything worth showing.
**Capabilities:** 5-card bento grid — MyStory, InitialCommit (cycling hero images), Envoy, DeepMesh (R2-hosted MP4 background), RPT. Each card is an external link with logo overlay and gradient legibility wash.
**Maturity:** basic.

### Components page (`/components`)
**What:** Showcase of visual experiments.
**Capabilities:** Currently a single framed Digital Rain demo.
**Maturity:** thin.

### Parallax portrait engine
**What:** Memorable hero — a 2.5D portrait that tracks the mouse.
**Capabilities:** WebGL fragment shader displaces portrait pixels by a pre-blurred depth mask; mouse-driven with smoothing; dynamic CSS drop-shadow synced to displacement; overscan + edge fade hide border artifacts.
**Maturity:** mature.

### Sliding wordmark
**What:** Brand reinforcement of "serdna = andres reversed".
**Capabilities:** React/motion island in the nav; per-letter split-flap that always cycles forward through the alphabet on hover.
**Maturity:** mature.

### Featured project block
**What:** The unit each home-page featured project renders into.
**Capabilities:** Two-column layout (image left or right), preview image or autoplay video, hover swap to ASCII architecture diagram, tech-stack pill rail with monochrome SVG/PNG logos, optional stats, optional language bar, optional secondary links.
**Maturity:** solid.

### Scroll choreography
**What:** GSAP-driven feel on the home page.
**Capabilities:** Hero scales down and fades as the rounded scroll content rises over it; image carousels (InitialCommit) cycle on a 6s interval; per-flag citizenship hover spawns a colored cursor pill.
**Maturity:** solid.

---

## Canonical Entities

- **Project** — title, category, description, optional backstory, href, optional preview image, optional video URL (R2), optional logo, tech stack, optional stats, optional language breakdown, optional ASCII diagram, image position (left/right). Currently expressed as inline props in `index.astro` and `projects.astro` — no content collection.
- **Bio** — name, role, tagline, four citizenship/visa flags, four headline stats. Inline in `index.astro`.
- **Tech logo** — mapping from tech name to a wordmark/lockup asset under `public/tech/`, with optional per-icon width override.
- **Visitor** — implicit. No analytics, no sessions, no auth.

Relationships are flat: the Home page composes Bio + an ordered list of featured Projects + a carousel list of Projects. The Projects page composes a separate list of Projects. There is no canonical project store — each page hand-picks.

---

## Interfaces

- **Page-level only.** Astro routes serve pre-rendered HTML; React islands hydrate where needed (`SlidingText` in the nav; `GitHubStars` exists but isn't currently mounted on a page).
- **Asset imports.** Local logos and previews come from `src/assets/work/<project>/` via Astro's `Image`; the build copies static assets from `public/` (favicons, tech logos, flags, portrait, depth mask).
- **CDN fetch.** Heavy media references `https://cdn.serdna.dev/<file>` (Cloudflare R2) directly via `<video src>` — currently only `deepmesh.mp4`.
- **Outbound.** All conversions are plain anchors: `mailto:andres@onc9.com`, LinkedIn, GitHub, Calendly, `/resume.pdf`. No form, no API.
- **Fonts.** Google Fonts (`Caudex`, `Instrument Serif`) loaded via `<link>` in the layout.

---

## Architecture

```
  Source ────────────────────────────────────────────────
   Astro 6.1.3 (static output) + React 19 islands
   Tailwind v4 (Vite plugin) · GSAP/ScrollTrigger · motion
   WebGL (raw, no library) for portrait
        │
        │  astro build
        ▼
   dist/  ────────────────────────────────────────────────
        │
        │  wrangler deploy   (assets.directory = ./dist/)
        ▼
  Edge ─────────────────────────────────────────────────
   Cloudflare Workers (static assets binding)
   compatibility_date 2026-05-12
        │
        ├──▶  serdna.dev          (HTML, JS, CSS, small images)
        │
        └──▶  cdn.serdna.dev      (R2 bucket: serdna-assets)
                                  currently: deepmesh.mp4
```

No server runtime, no database, no edge logic. The Worker exists only to serve `./dist/` and to hold the future seam for anything dynamic.

---

## Dependencies

- **Cloudflare Workers** — hosting (static-assets mode).
- **Cloudflare R2** — bucket `serdna-assets` exposed at `cdn.serdna.dev` for media too heavy to ship in `dist/`.
- **Google Fonts** — `Caudex`, `Instrument Serif`.
- **External links only** — Calendly, LinkedIn, GitHub, mailto. No SDKs.

Build-time only: Astro, React, Tailwind v4 (Vite), GSAP, motion, hover-tilt, `@chenglou/pretext`, `react-use-measure`.

---

## Known Gaps

- **`/resume.pdf` 404s** — hero links to it, file isn't in `public/`.
- **No case-study deep dives.** Featured projects link straight to live products; "Case study" link on MyStory is `href="#"`.
- **No content collection.** Project data is duplicated between `index.astro` and `projects.astro`; adding a project requires editing both.
- **`/components` is a stub.** One Digital Rain frame.
- **Unused code paths.** `DigitalRain.astro` only renders on `/components`; `GitHubStars.tsx` isn't mounted anywhere; `AsciiHero.astro` exists in the components folder but isn't imported by any page.
- **R2 has one asset.** Only `deepmesh.mp4` — image-heavy work previews still ship from `public/` and `src/assets/`, including 3-4 MB portrait/depth-mask PNGs.
- **No analytics, no SEO infra.** No PostHog, no OG images, no sitemap, no robots.txt, no JSON-LD.
- **Mobile not audited.** Stats column and parallax hero are desktop-tuned; mobile path is "it doesn't break", not "it's designed".
- **Citizen-cursor and IC carousel scripts** are inline `<script>` blocks tied to specific selectors — they break silently if classes are renamed.
