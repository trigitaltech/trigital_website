# Trigital Technologies — Marketing Website

A modern marketing website for Trigital Technologies built with Next.js, React, and TypeScript. It highlights AI agentic services, the Nipige platform, data and BI services, custom development, and the company’s contact details.

## Tech stack

- Next.js 14
- React 18
- TypeScript
- App Router

## Run locally

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.

## Build

```bash
npm run build
```

The app is configured for static export, so the generated output can be deployed to a static host.

## Project structure

```text
app/            # Route-based pages using the Next.js App Router
components/     # Reusable UI sections such as header, footer, and forms
public/         # Static assets, robots.txt, and sitemap.xml
next.config.js  # Static export configuration
```

## Deployment

The project is set up to export a static site. After building, deploy the generated output from the build directory to a host such as Netlify, Vercel, GitHub Pages, or any other static hosting service.

## Notes

- The site uses shared layout and section components for consistent navigation and footer content.
- Static assets and SEO files are stored in the public directory.
