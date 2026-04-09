# jimdeola.com

Personal brand website for Jim Deola -- full-stack developer, AI engineer, SEO strategist, fitness coach, and founder.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 (CSS-first config)
- **Animations:** Framer Motion 11
- **Blog:** MDX via next-mdx-remote + rehype-pretty-code + shiki
- **Contact:** Resend API
- **Analytics:** PostHog
- **OG Images:** @vercel/og (dynamic generation)
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 20.x or later
- npm

### Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env.local`: `cp .env.example .env.local`
4. Fill in environment variables (see below)
5. Start dev server: `npm run dev`

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm start` | Serve production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── app/           # Next.js App Router pages
├── components/    # UI components (layout, sections, blog, mdx, ui, seo, providers)
├── content/blog/  # MDX blog posts
├── hooks/         # Custom React hooks
├── lib/           # Utility functions and services
├── styles/        # Global styles and Tailwind theme
└── types/         # TypeScript type definitions
```

## Blog

Add MDX posts to `src/content/blog/` with this frontmatter:

```yaml
---
title: "Post Title"
description: "Brief description"
date: "2026-04-08"
category: "Tech"  # Tech | AI | SEO | Fitness | Business | Biohacking
tags: ["tag1", "tag2"]
author: "Jim Deola"
published: true
---
```

## Environment Variables

| Variable | Type | Description |
|----------|------|-------------|
| `RESEND_API_KEY` | Server | Resend API key for contact form emails |
| `NEXT_PUBLIC_SITE_URL` | Public | Site URL (https://jimdeola.com) |
| `NEXT_PUBLIC_POSTHOG_KEY` | Public | PostHog project API key |
| `NEXT_PUBLIC_POSTHOG_HOST` | Public | PostHog API host URL |

## Performance

Run Lighthouse audits after deployment to verify:

- Performance score >= 90
- Accessibility score >= 95
- SEO score = 100
- Best Practices score >= 90

```bash
npx lighthouse https://jimdeola.com --view
```

## Deployment

Auto-deploys to Vercel from the `main` branch on GitHub.
