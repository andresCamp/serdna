---
layout: ../layouts/Layout.astro
title: Resume — Andrés Campos
---

# ANDRÉS CAMPOS

**Senior Full-Stack Engineer (AI/LLM)**

andres@onc9.com · linkedin.com/in/andres-l-campos · github.com/andresCamp · serdna.dev
US / EU / Mexico citizen, work authorized in the US, EU, and LATAM, no sponsorship needed

---

## Summary

Senior full-stack engineer specializing in AI products. 8 shipped applications in 2 years, all 0-to-1, all in production. 356K+ lines of TypeScript and Python. 5 LLM providers integrated in production (Anthropic, OpenAI, Gemini, Groq, xAI). Deep experience with agentic architectures, voice AI, real-time systems, and multi-tenant SaaS. B.A. English, Vanderbilt 2021.

---

## Experience

### Founding Engineer · MyStory Digital Archive
*Jan 2024 – Present · mystory.bio · 192K LOC*

AI-powered life story platform. Voice AI conducts documentary-style interviews, then a separate biographer agent synthesizes structured biographical content across sessions.

- Architected distributed system across 6 services (Vercel web, Cloudflare Workers auth, Fly.io API and Python voice agents) with GitHub Actions CI/CD syncing deploys, migrations, and 60+ env vars
- Built two-agent voice AI system (LiveKit + Deepgram STT + Hume TTS): real-time Interview Agent + async Biographer Agent. Solved turn-taking failures that broke the single-agent baseline
- Engineered chunked video upload pipeline to Mux with IndexedDB buffer: zero data loss across hour-long sessions, survives page refreshes and network drops
- Built Neo4j knowledge graph as the core data layer with an agentic gap-analysis system that tracks coverage across sessions and identifies narrative holes
- Integrated 5 LLM providers in production (Anthropic, OpenAI, Gemini, Groq, xAI) with prompt management and cost optimization
- Migrated GraphQL to tRPC with a real-data integration test harness to ensure exact parity, no test database
- Led 5-person dev team, managed 20+ contributors including a 15-intern summer program
- Shipped 35+ PostgreSQL tables via Drizzle, Better Auth session management, Stripe trials/subscriptions/gifts, and a 200-person organic waitlist with early revenue
- Stack: Next.js 16, React 19, TypeScript, tRPC 11 on Hono, Drizzle, PostgreSQL, Neo4j, LiveKit, Mux, Stripe

### Lead Engineer · Envoy
*Jan – Feb 2026 · envoy.cd · 103K LOC*

Multi-tenant SaaS for embassy and consular email processing: AI classification, enrichment, and routing.

- Built per-country database isolation for data sovereignty plus per-embassy PostgreSQL Row-Level Security; embassy_id enforced server-side via JWT to eliminate URL-tampering risk
- Shipped NestJS + Next.js stack on Fly.io and Vultr with 50+ tRPC procedures and 40 database models
- Integrated 3 email providers (Gmail, Outlook, Resend) and 3 LLM providers (OpenAI, Gemini, Mistral)
- Inngest orchestration for email sync and async AI processing
- Hexagonal architecture with config-driven adapters (LLM, database, email) selected per-country deployment
- Built from a 1-hour recorded discovery conversation with embassy staff; secured ambassador buy-in for the Mexican embassy pilot, awaiting formal government approval

### Lead Engineer · DeepMesh and Feast.wtf
*Feb 2026 · deepmesh.io, feast.wtf*

WhatsApp AI research platform. AI agents conduct conversational research via WhatsApp; consumer brand pays students with free food for voice notes.

- **4th place out of 60+ teams** at Compiled hackathon (Abu Dhabi, 150+ attendees). $800 prize plus YC partner office hours
- Next.js frontend on Vercel + FastAPI backend on Fly.io + PydanticAI agent on Google Gemini 2.5 Flash
- Twilio WhatsApp integration with multi-mode agent architecture (onboarding, bounty, campaign, general)
- Shared Neon PostgreSQL, Doppler secrets, GitHub Actions CI/CD across 4-person team
- Led vision, deployment, and demo polish; YC partner feedback: *"start discovery calls immediately"*

### Lead Engineer · InitialCommit
*Jan – Feb 2026 · initialcommit.ae · 35K LOC*

Community platform for builders in Abu Dhabi: weekly events, sponsor CRM, hackathon registration.

- 4-app Turborepo monorepo (www, admin, hackathon registration, event pages)
- Polymorphic event system supporting Builder's Nights, Midnight Oil, Outings
- Sponsor CRM with Kanban pipeline and weighted forecasting
- Cloudflare R2 image pipeline with TinyPNG compression
- Outcome: 20 organic members, 100% repeat attendance, 200-person flagship event scaled before regional displacement

### Lead Engineer · Rotating Power Technologies (RPT)
*Dec 2025 – Jan 2026 · solo, 5 weeks*

Bilingual EN/AR marketing site for a gas and steam turbine engineering consultancy targeting the GCC market.

- Astro 5 + React islands with custom zero-dependency i18n (252 translation strings)
- Full RTL Arabic support with privacy-first geo region detection (Saudi visitors see local lab content)
- Discovery-first: full spec built from a 90-minute recorded conversation with the founder
- Client feedback: *"Blown away."* Circulated to peers, generated referral pipeline

### Lead Engineer · Schroff Boards
*Mar – Jun 2025 · 15.7K LOC*

E-commerce site for a legacy surfboard brand.

- Next.js 15 + Payload CMS 3.31, Stripe checkout, Vercel Blob image storage
- AI-assisted product photo cleanup (background removal, reframing) for non-technical client workflow
- Admin panel built for a non-technical client to manage inventory, orders, and content
- Client feedback: *"You totally nailed this."*

### Lead Engineer · Art Direct
*2026 · artdirect.dev · shipped in a day*

Visual responsive image art direction tool. Astro 6 + Svelte 5 + Tailwind class generator.

---

## Earlier

**Founder · Arboreum** *(2022 – 2023)*. Carbon offset platform for mass timber construction. Secured CEO-level partnerships with a top Canadian producer and leading carbon-offset providers; represented at Verge + Greenbuild SF. Wound down after the industry LCA standard shifted from 45 to 100 years and unit economics became non-viable.

**Instructor · Fullstack Founder** *(2023)*. Designed and led a 12-week web development curriculum with demo day; weekly lectures, 1:1 mentorship, Notion LMS.

**Web Developer · Estudio Jorge Campos** *(2023)*. Next.js 14 + Contentful CMS rebuild for an architecture firm in Mexico City. Interviewed 15 employees and delivered a business intelligence report on workflows.

---

## Education

**Vanderbilt University** · B.A. English, Business minor, 2021. Core CS coursework.

---

## Skills

**Languages:** TypeScript, Python, JavaScript, Swift
**Frontend:** React, Next.js (App Router), Astro, Svelte, Tailwind CSS, Framer Motion, Jotai
**Backend:** Node.js, tRPC, NestJS, Hono, Fastify, FastAPI, Prisma, Drizzle
**AI / LLM:** Anthropic, OpenAI, Gemini, Groq, xAI, Mistral, LiveKit, PydanticAI, Vercel AI SDK; agent architectures, RAG, voice AI, prompt engineering, real-time turn-taking
**Databases:** PostgreSQL (Neon), Neo4j, Redis, pgvector
**Infrastructure:** Vercel, Fly.io, Cloudflare Workers, Cloudflare R2, AWS, Vultr
**Workflows / Comms / Payments:** Inngest, Stripe, Twilio (WhatsApp + SMS), Resend, Mux
**CMS / Auth:** Payload CMS, Contentful, Better Auth
**Tooling:** Git, Turborepo, GitHub Actions, Docker, Doppler, Bun
