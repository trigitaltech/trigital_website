# Trigital Technologies — Marketing Website

Static marketing site for Trigital Technologies (Hyderabad): AI agentic services, the Nipige business-app platform, data migration & BI, and custom development.

No build step, no framework, no backend. Plain HTML + CSS + vanilla JS.

## Run locally

Open `index.html` directly, or serve the folder:

```bash
python -m http.server 8000
# → http://localhost:8000
```

## Structure

```
├── index.html               # Home
├── platform.html            # Nipige Platform (anchors: #commerce, #modules, #governance)
├── ai-agents.html           # AI & Agentic Engineering
├── data-bi.html             # Data Migration & BI (anchors: #migration, #bi)
├── custom-development.html  # Custom development approach (#approach)
├── services.html            # All services + industries
├── company.html             # About / values (#values)
├── contact.html             # Contact form (mailto — nothing stored server-side)
├── css/styles.css           # Entire design system (single stylesheet)
├── js/main.js               # Nav, scroll reveal, stat counters, contact form, footer year
└── assets/                  # Logos + app icon
```

## Conventions

- **Design tokens** live at the top of `css/styles.css` as CSS custom properties (brand gradients `--grad-tri` / `--grad-warm` / `--grad-blue`, red dot `--red-dot`, type scale, spacing). Change tokens, not scattered values.
- **Fonts**: Outfit (display) + Inter (body) via Google Fonts.
- **Animations**: elements with class `reveal` fade in on scroll; `[data-count]` + `data-suffix` elements animate as counters. Both respect `prefers-reduced-motion` and degrade to static content without JS — always put the final value in the HTML.
- **Shared chrome**: header, nav and footer are duplicated in every page (no templating). Editing them means editing all 8 files — keep them identical.
- **Contact**: form submits via `mailto:hello@trigitaltech.com`; no data is stored.

## Deploying

Any static host (GitHub Pages, Netlify, Cloudflare Pages, S3). Upload the repo root as-is. `robots.txt`, `sitemap.xml` and `404.html` are included; canonical/OG URLs assume the site lives at `https://trigitaltech.com/` — update them if the domain differs.

Remaining pre-launch item (see `.claude/prds/trigital-website.prd.md`): business sign-off on the marketing claims (500+ enterprises, 99.9% SLA, testimonials).
