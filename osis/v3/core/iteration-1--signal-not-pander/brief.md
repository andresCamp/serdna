# Signal, Don't Pander — Iteration 1 Brief

**Version:** v3
**Date:** 2026-05-12
**Status:** active

## Signals

- Andrés needs revenue now. Going to start cold outreach to founders who recently raised, offering contract work at $2k+/week.
- Current twin JTBD targets recruiters + hiring managers + CTOs for FTE evaluation. Current site copy and structure follow that posture.
- E-shape positioning (software + design + product) is the intended read but is not yet structurally proven by the artifact.
- MyStory (flagship project per cloudnine CLAUDE.md) is publicly gated. It currently sits in the featured bento as if clickable; destination is effectively dead from a visitor's perspective.
- `/resume.pdf` is linked from the hero, returns 404.
- Featured project copy reads as feature-list summaries more than problem/bet/outcome framing.
- Existing site has real craft signal: the parallax portrait engine (shipped, performant) and the sliding wordmark (shipped) both communicate taste before any text is read.

## Insight

The pitch lives in the DM. The proof lives on the portfolio. A site that names the ICP or sells the offer flips the polarity and reads as a job board, which kills the signal for the exact founders Andrés is targeting. A site that just IS the kind of work those founders want will attract on tone, taste, and shipped credibility alone.

The principle is *signal, don't pander*: the artifact qualifies the maker, the copy never does. Founders who recognize a peer reply. Founders who don't recognize a peer were never the buyer.

## Bet

If v3 serdna.dev becomes a craft artifact that signals product-engineer caliber (software + design + product) without claiming it, then cold-DM'd founders who land on it will recognize a peer and respond. The portfolio's job is not to convert; it is to not break the credibility the DM established.

**Bucket target.** Research across 24 sources places the inbound contractor market in 2026 into 6 buckets: vibe coder ($25-60/hr), offshore-priced AI freelancer ($50-100/hr), solid AI engineer ($100-175/hr), AI product engineer / 0->1 builder ($175-275/hr, $7K-$11K/wk), fractional CTO ($250-350/hr, $10K-$15K/mo retainer), and named operator (founders chase). The iteration's job is to signal Bucket 4. Andres self-assesses as Bucket 3/4 with capability at Bucket 4 and a slightly thinner track record. The $2K+/wk floor is foot-in-door anchoring, not market rate; Bucket 4 retainer math runs 3-5x that. Bucket lock happens in 30-60 seconds, driven dominantly by visual gestalt, work-list shape, and the first project a visitor clicks. The site must lock at Bucket 4 within Frame 1 (0-3 seconds) and confirm through Frames 2-4. See research synthesis recorded in session.

**Load-bearing assumption:** Recently-funded founders extract positioning from artifacts faster than from copy. They can tell taste, framing, and shipped work in under 60 seconds and use that as the qualification signal.

**Wrong if:** Founders need explicit packaging (rates, scope, "I help with X") to take the next step, and the absence of pitch language causes drop-off instead of resonance.

**Right if:** The site reads as a peer's work and not a candidate's resume; cold-DM'd founders treat the site as confirmation and reply to the DM.

**Mechanism:** design quality + project framing + shipped evidence → recognition → reply

## What Changes

| Area | Before | After |
|---|---|---|
| Hero copy | Implicit candidate posture (looking-for-role energy) | Declarative tone; no job-search signal, no implicit availability copy, no role-as-title subtitle |
| Hero stats column | Resume-coded bullets ("14 months to ship all of it", "20+ contributors led") | Dropped entirely; research is unambiguous that stats columns read as resume regardless of content |
| Featured slate | MyStory, DeepMesh, Osis, Envoy (4 alternating-side cards) | Osis, Art Direct, RPT, Envoy, DeepMesh (5 alternating-side cards). MyStory removed; Art Direct promoted from carousel; RPT added linking to `onc9.com/work/rpt`. Osis-1 leads with substrate AI / multi-surface product (Tauri + web portal + agent backend). |
| Featured framing | Feature-list paragraphs, tech stack as prose | Problem / bet / outcome (3 lines per block); tech stack as logos. DeepMesh hackathon framing dropped (toy-project signal). |
| Featured destinations | Some 404, some gated, some live | Every click lands on a live Bucket 4-grade artifact: `osis.dev` (Osis), live URL (Art Direct), `onc9.com/work/rpt` case study (RPT), `onc9.com/work/envoy` case study (Envoy), `deepmesh.io` (DeepMesh) |
| Carousel section | 3 cards (Art Direct, InitialCommit, Spectr) | Replaced with a simple list of open-source projects (title + description) pulled from GitHub. The carousel pattern reads as agency-grid; the list pattern reads as builder. |
| MyStory link target | Dead `#` link, gated `mystory.bio` destination | MyStory removed from featured slate entirely. Gated flagship is a Bucket 3 trap per research; removing it is cleaner than building a case-study scroll. |
| `/resume.pdf` | 404 from hero link | Link removed from hero. No resume PDF as a primary affordance (research: resume-as-CTA codes as job-seeker, drops bucket). |
| Contact section | Pitch copy ("Available for contract work and full-time remote roles...") + email + Calendly | Email-only contact. Calendly removed: research places calendar embeds as Bucket 5 (fractional CTO) signal, which downgrades a Bucket 4 candidate. |
| Site `<title>` | "Andrés Campos — Senior Product Engineer" | "Andrés Campos" (or a craft tagline). No role-as-title in the head; it persists across every tab, share preview, and search snippet. |
| Sticky nav `Get in touch` button | Persistent candidate-asking-for-conversation surface across every page | Removed. Anchor link to `#contact` in the nav covers the affordance without the pitch. |
| ICP / offer copy | Mostly absent today; must stay absent | Explicitly excluded everywhere: no "for founders", no "available for contracts", no rate card, no /work-with-me page. Unchanged from original brief; restated for emphasis. |

## What Doesn't Change

- v3 structural skeleton from the 2026-04-07 reset: hero, featured work (alternating L/R), [open-source list replacing carousel], contact. Section ordering preserved; section composition updated per "What Changes."
- The four featured projects that survive (DeepMesh, Osis, Envoy) plus Art Direct (promoted from carousel) plus RPT (new). MyStory dropped.
- Parallax portrait engine and sliding wordmark stay. Both already signal craft; both are shipped.
- `/projects` feed and `/components` showcase remain as-is. Polish deferred to a later iteration.
- No new top-level pages.
- No analytics, no voice agent integration, no `/work/{slug}` case-study route system on serdna itself (case studies live on onc9.com for RPT and Envoy and are linked from the featured cards).

## Phases

Phases ship independently. The iteration lands when every phase has merged. Each phase carries the iteration's craft bar internally; there is no separate "polish" phase. Sibling phases (depends_on: []) can execute in any order or in parallel.

### mechanical-pass

```yaml
depends_on: []
```

Surgical removes and relabels with no copy authorship. Specifically: strip contact pander paragraph; remove `/resume.pdf` hero link; remove hero "Get in touch" CTA and sticky-nav "Get in touch" button; drop hero subtitle "Senior Product Engineer"; drop site `<title>` role suffix; drop hero stats column entirely; drop "Available Globally" caption (relabel "Citizenships" or remove); drop Calendly from contact; remove DeepMesh "4th Place Hackathon" subtitle framing; remove MyStory from featured slate. The mechanical pass makes the site DM-sendable without authoring new copy.

### slate-build

```yaml
depends_on: [mechanical-pass]
```

Add Art Direct as a featured card (promoted from carousel; live URL destination). Add RPT as a featured card (new; destination `onc9.com/work/rpt`). Reorder featured to Osis-1, AD-2, RPT-3, Envoy-4, DeepMesh-5. Replace the carousel section with a simple list of open-source projects fetched from GitHub (title + description). Pulls Envoy destination to `onc9.com/work/envoy` for substance.

### hero-pass

```yaml
depends_on: [mechanical-pass]
```

Author the hero copy. Voice direction: "this is who I am, what I do." Declarative, no qualifying, no seeking. Name + one-line identity assertion. The hero is the first 5 seconds; it must lock Bucket 4 by tone alone. Sibling to slate-build; both can run in parallel after mechanical-pass.

### featured-framing

```yaml
depends_on: [slate-build]
```

Rewrite the 5 featured project descriptions into problem / bet / outcome (3 lines per block). Tech stack rendered as logos, not paragraphs. Source material for RPT and Envoy already exists in `onc9.com/work/rpt` and `onc9.com/work/envoy` case study pages; lift the strongest framing from each. Osis framing reflects multi-surface reality (Tauri app live, web portal in flight, distributed backend for agents).

### contact-quiet

```yaml
depends_on: [mechanical-pass]
```

Strip pitch copy from the contact section heading. Email only; no Calendly (Bucket 5 signal); no preamble. Sibling to hero-pass and slate-build. Tests the bet by demonstrating the site does not need to ask for the conversion; the DM already did.

### writing-seed (deferred, possibly to iteration-2)

```yaml
depends_on: []
```

Ship one substrate-level essay on a non-obvious AI-product-engineering problem (eval design, agent reliability, prompt-as-spec, the failure modes of LLM features in production). Tier S proof per research. Deferred to iteration-2 if time pressure is acute; flagged here as the next-most-leverage move beyond iteration-1 surface changes.

## Success Criteria

Leading (observable on the artifact):
- [ ] Zero references to "available for", "open to", "looking for", "hire me", "contract work", or any named ICP anywhere on the site (audit pass on hero, contact, footer, nav, `<title>`, meta).
- [ ] Every featured project lands problem / bet / outcome within 3 lines per block; tech stack rendered as logos.
- [ ] No 404s reachable from the live site. No dead `#` links.
- [ ] Every featured-card click destination is a Bucket 4-grade artifact: live URL, named-client case study, or installable product. No case-study-landing-page-with-copy-only destinations.
- [ ] Site `<title>`, meta, footer, and sticky nav contain no role-as-title or marketplace-coded language.
- [ ] No Calendly embed visible on the home page (Bucket 5 signal). Email-only contact.
- [ ] No stats column on hero. No hackathon-place framing on any project card.

Lagging (observable in the world):
- [ ] At least 1 reply from cold-outreach DMs in the 2 weeks after ship, attributable to the portfolio (founder references a project or the site itself).
- [ ] At least 1 contract conversation gets to rate or scope discussion within 4 weeks.
- [ ] At least 1 conversation lands a rate above the $2K/wk foot-in-door floor within 8 weeks.

## Notes

- **Appetite:** ~2 weeks if phases land cleanly. Mechanical pass first (under an hour). Slate build and hero pass and contact quiet in parallel after mechanical. Featured framing follows slate build. Cut scope from the bottom (writing-seed, contact-quiet) before extending the timeline; mechanical + slate + hero carry the bet.
- **Operating constraint:** "Signal, don't pander" lives above every phase. Any copy decision that mentions the ICP or the offer is out of scope. The DM is the pitch surface; the site is the proof surface.
- **Voice direction:** "This is who I am, what I do." Declarative, no qualifying, no seeking. Identity over role. Specificity over volume. Omission is confidence.
- **Bucket-lock surface:** Frame 1 (0-3 seconds) above-the-fold visual is the highest-leverage surface. The hero must lock Bucket 4 by tone and density alone. Every other phase confirms; only the hero can lock.
