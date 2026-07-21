# PRD: Trigital Technologies Marketing Website

**Status**: v1 built, pre-launch
**Owner**: Trigital Technologies (trigitaltech@gmail.com)
**Last updated**: 2026-07-21

## Problem

Trigital Technologies (Hyderabad) sells four practices — business apps on the Nipige Platform, AI & agentic engineering, data migration & BI, and custom development — but has no web presence to convert enterprise buyers. Prospects can't evaluate the "evidence over promises" pitch (free working blueprint, weekly demos) without a site that explains it and routes them to contact.

## Goal

A fast, credible, zero-backend marketing site that:
1. Positions the four practices with a page each, anchored by the Nipige Platform.
2. Drives one primary conversion: **Book a Demo / contact** (email via mailto — no server, nothing stored).
3. Looks intentional and enterprise-grade (custom design system from the brand logo gradients).

## Non-Goals

- No CMS, no blog, no backend, no form storage (mailto only, stated on the form).
- No analytics/tracking in v1.
- No careers, case-study, or legal (privacy/terms) pages in v1.

## Solution Overview

Static hand-authored site — 8 HTML pages sharing one stylesheet and one vanilla JS file. No build step, no dependencies beyond Google Fonts. Deployable to any static host.

| Page | Purpose |
|---|---|
| `index.html` | Home — hero, four practices, Nipige highlight, approach, testimonials, CTA |
| `platform.html` | Nipige Platform — commerce core, modules, agent-native, governance |
| `ai-agents.html` | AI & Agentic Engineering practice |
| `data-bi.html` | Data Migration & BI practice |
| `custom-development.html` | Custom development — evidence-first approach |
| `services.html` | Portfolio overview + supporting services + industries |
| `company.html` | Story, values, testimonials |
| `contact.html` | Contact form (mailto) + what-happens-next |

**Design system** (`css/styles.css`): brand tokens as CSS custom properties (violet/warm/blue gradients from the logo, signature red dot), Outfit display + Inter body, light theme with dark accent sections, scroll-reveal animations respecting `prefers-reduced-motion`.

**Behavior** (`js/main.js`): sticky header shadow, mobile nav toggle, IntersectionObserver scroll reveal, animated stat counters, contact form → mailto, footer year.

## Success Criteria

- All pages render correctly at 320 / 768 / 1024 / 1440 with no horizontal overflow.
- Lighthouse: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 90 on every page.
- Contact form opens a prefilled email to hello@trigitaltech.com.
- Works with JS disabled (content readable; reveal/counters degrade gracefully).

## Delivery Milestones

| # | Milestone | Status | Plan |
|---|---|---|---|
| 1 | v1: 8 pages, design system, nav/reveal/counters/contact JS | done | — |
| 2 | Launch readiness: fix review issues (counter bug, OG tags, canonical URLs), add robots.txt + sitemap.xml + 404 page, optimize images | done (2026-07-21) | — |
| 3 | Post-launch: structured data (Organization schema), analytics decision, legal pages | pending | — |

## Risks

| Risk | Level | Note |
|---|---|---|
| Unverifiable marketing claims (500+ enterprises, 90% cost reduction, 99.9% SLA, anonymous testimonials) | HIGH | Business owner must confirm before launch — these are on index, platform and company pages |
| mailto-only contact loses leads whose devices have no mail client configured | MEDIUM | Acceptable for v1; revisit with a form service if drop-off observed |
| Google Fonts dependency (privacy/perf) | LOW | Self-host fonts if needed |
