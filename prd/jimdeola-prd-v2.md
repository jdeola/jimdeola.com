# jimdeola.com — Product Requirements Document

**Version**: v2 (post-gap-analysis)
**Date**: 2026-04-08
**Author**: Claude + Jim Deola
**Status**: Approved

---

## 1. Executive Summary

jimdeola.com is a personal brand website for Jim Deola (James A. Deola Jr.) — a full-stack developer, AI engineer, SEO strategist, fitness coach, and founder of Rhize Media and Freeform Fitness, based in South Jersey. The primary goal is to become the #1 Google result for "Jim Deola" and "James Deola," displacing an unrelated 2008 court record and a family obituary that currently pollute search results. The site serves as a credible authority hub linking to both businesses while reflecting Jim's personality — entrepreneurial, technical, biohacker, no-bullshit NJ guy.

## 2. System Architecture

```
┌──────────────────────────────────────────────────────────────┐
│                        jimdeola.com                           │
│                 Next.js 15 (App Router)                       │
│            TypeScript + Tailwind CSS v4                       │
├──────────────────────────────────────────────────────────────┤
│  Pages (Static/SSG)           │  Blog (MDX)                  │
│  ├── / (Home)                 │  ├── /blog                   │
│  ├── /about                   │  ├── /blog/[slug]            │
│  ├── /work                    │  ├── /blog/category/[cat]    │
│  ├── /stack                   │  └── /blog/tag/[tag]         │
│  └── /contact                 │                              │
├──────────────────────────────────────────────────────────────┤
│  Dynamic OG Images                                            │
│  └── /api/og → @vercel/og (ImageResponse)                    │
├──────────────────────────────────────────────────────────────┤
│  SEO Layer                                                    │
│  ├── JSON-LD (Person + WebSite + BlogPosting)                │
│  ├── OpenGraph + Twitter Cards (dynamic OG images)           │
│  ├── sitemap.ts (dynamic, includes blog posts)               │
│  ├── robots.ts                                               │
│  └── Per-page metadata via generateMetadata / metadata       │
├──────────────────────────────────────────────────────────────┤
│  Analytics: PostHog (posthog-js)                             │
├──────────────────────────────────────────────────────────────┤
│  Contact Form → Next.js Route Handler → Resend API           │
│                                       → jim@rhize.media      │
├──────────────────────────────────────────────────────────────┤
│  Deployment: Vercel (Production)                             │
│  Domain: jimdeola.com (owned, DNS pointed to Vercel)         │
│  Repo: github.com/jdeola/jimdeola.com                        │
└──────────────────────────────────────────────────────────────┘
```

### Key Architectural Decisions

- **Static-first**: All pages are statically generated at build time. No database, no CMS for v1.
- **MDX for blog**: Content-as-code approach — blog posts are `.mdx` files in the repo, compiled at build time via `next-mdx-remote`. Enables code blocks, custom components, and zero runtime cost.
- **Tailwind CSS v4**: CSS-first configuration (no `tailwind.config.ts`). Custom theme defined in `globals.css` via `@theme` directive.
- **Framer Motion**: Page transitions, scroll-triggered animations, and micro-interactions. Kept subtle — every motion serves a purpose.
- **Resend for contact**: Simple API-based email delivery. No form backend to maintain.
- **PostHog for analytics**: Captures traffic from day one. Client-side initialization in root layout.
- **Dynamic OG images**: `@vercel/og` generates unique social preview images per blog post with title + branding. Static pages use a designed default.
- **In-memory rate limiting**: Simple Map-based rate limiter for the contact form. Resets on cold starts — acceptable for personal site volume.

## 3. Feature Overview

### 3.1 Hero Section (Homepage)
- Full-viewport hero with Jim's name, tagline, and dual identity (tech + fitness)
- Animated text entrance (Framer Motion)
- Photo placeholder (designed to work without photo, photo added pre-launch)
- Clear CTAs: "See my work" + "Read the blog"
- Social links strip

### 3.2 About Page
- Personal narrative — builder, biohacker, entrepreneur, Jersey guy
- Two-column layout: story on left, key facts/stats on right
- Explicitly establishes Jim as "the Jr." — distinguishes from father (James A. Deola Sr., mechanical engineer and inventor, passed 2024)
- Philosophy section: how he thinks about building things
- Scroll-triggered section reveals

### 3.3 Work Page
- Two prominent cards: Rhize Media + Freeform Fitness
- Each card includes: logo/icon area, tagline, brief description, CTA linking to external site
- Rhize Media → rhize.media
- Freeform Fitness → freeformnutrition.net (placeholder for now)
- Optional: highlight section for notable projects/case studies (v2)

### 3.4 Skills/Stack Page
- Visual, interactive tech stack representation
- Categorized: Frontend, Backend, CMS, Infrastructure, AI/ML, SEO, Design
- Animated on scroll (staggered entrance)
- Each tech item has icon + label

### 3.5 Blog/Media Section
- Full MDX blog system: categories, tags, reading time, code highlighting, custom components
- Blog index with filterable grid
- Individual post pages with BlogPosting structured data
- Dynamic OG images per post
- RSS feed generation
- Graceful empty state for v1 launch

### 3.6 Contact Page
- Social links: LinkedIn, GitHub (personal + company), Instagram, X
- Contact form (Resend API) with validation, rate limiting, honeypot
- Email address displayed: jim@rhize.media

### 3.7 Global Components
- Sticky header with scroll-based transparency transition
- Mobile hamburger menu (full-screen overlay)
- Footer with social links and site links
- Page transitions (Framer Motion)
- Custom 404 page
- Scroll-to-top button

## 4. Functional Requirements

### FR-01: Navigation & Layout

- **FR-01.1**: Sticky header with name/logo, nav links (Home, About, Work, Stack, Blog, Contact), and mobile hamburger menu
- **FR-01.2**: Header transitions from transparent (on hero) to solid dark background on scroll
- **FR-01.3**: Mobile navigation: full-screen overlay menu with smooth open/close animation
- **FR-01.4**: Active page indicator in navigation (underline or color change)
- **FR-01.5**: Footer with social links (LinkedIn, GitHub ×2, Instagram, X), copyright notice ("© 2026 Jim Deola"), and internal site links
- **FR-01.6**: Smooth page transitions using Framer Motion `AnimatePresence`
- **FR-01.7**: Skip-to-content link (accessibility)
- **FR-01.8**: Focus trap in mobile menu when open

### FR-02: Hero Section

- **FR-02.1**: Full-viewport section with name "Jim Deola" as primary heading (H1)
- **FR-02.2**: Tagline: "Full-Stack Developer · AI Engineer · Founder" (or similar — direct, no fluff)
- **FR-02.3**: Subtitle text establishing dual identity (tech + fitness founder)
- **FR-02.4**: Animated text entrance (staggered word/line reveal)
- **FR-02.5**: Photo placeholder area — works aesthetically without image, ready for photo addition via simple component prop
- **FR-02.6**: Two CTAs: primary ("See My Work" → /work) and secondary ("Read the Blog" → /blog)
- **FR-02.7**: Social links strip (icon buttons) at bottom of hero
- **FR-02.8**: Subtle background animation or gradient shift (not distracting, respects `prefers-reduced-motion`)

### FR-03: About Page

- **FR-03.1**: H1: "About" or "Who I Am" — page title for SEO
- **FR-03.2**: Personal narrative section: background story, entrepreneurial journey, philosophy
- **FR-03.3**: Distinguish Jim as James A. Deola Jr. — the tech/fitness founder, not to be confused with his father (James A. Deola Sr., mechanical engineer and inventor)
- **FR-03.4**: Key facts sidebar/section: location (South Jersey), companies (Rhize Media, Freeform Fitness), focus areas
- **FR-03.5**: Philosophy/approach section: how Jim thinks about building, biohacking, fitness
- **FR-03.6**: Scroll-triggered section reveals using Framer Motion
- **FR-03.7**: Person JSON-LD schema included on this page (in addition to homepage)

### FR-04: Work Page

- **FR-04.1**: Two business cards laid out side-by-side (desktop) / stacked (mobile)
- **FR-04.2**: Rhize Media card: icon/logo area, tagline ("Web Development · AI · SEO · Automation"), brief description, CTA → https://rhize.media
- **FR-04.3**: Freeform Fitness card: icon/logo area, tagline ("Personal Fitness Coaching"), brief description, CTA → https://freeformnutrition.net
- **FR-04.4**: Cards have hover animation (subtle lift/glow effect)
- **FR-04.5**: Each card links externally with `target="_blank"` and `rel="noopener noreferrer"`

### FR-05: Skills/Stack Page

- **FR-05.1**: Tech stack organized into categories: Frontend, Backend/Database, CMS, Cloud/Infrastructure, AI & Automation, SEO & Analytics, Other Tools
- **FR-05.2**: Each technology rendered as a card/badge with SVG icon and label
- **FR-05.3**: Staggered scroll-triggered entrance animation per category
- **FR-05.4**: Technologies to include: Next.js, React, TypeScript, Tailwind CSS, Supabase, PostgreSQL, Sanity, Payload CMS, GCP, Vercel, n8n, Python, Claude/LLMs, OpenAI, DataForSEO, Google Analytics, Google Search Console, PostHog, Sentry, Resend, Twilio, Figma, Git
- **FR-05.5**: Responsive grid layout — adjusts columns by viewport
- **FR-05.6**: Technology data defined in a constants file for easy updates

### FR-06: Blog System (MDX)

- **FR-06.1**: Blog index page at `/blog` showing all posts in a filterable grid
- **FR-06.2**: Individual post pages at `/blog/[slug]` with full MDX rendering via `next-mdx-remote`
- **FR-06.3**: Category pages at `/blog/category/[category]` filtering posts by category
- **FR-06.4**: Tag pages at `/blog/tag/[tag]` filtering posts by tag
- **FR-06.5**: Categories: Tech, AI, SEO, Fitness, Business, Biohacking (extensible via constants)
- **FR-06.6**: Post frontmatter schema:
  ```yaml
  title: string (required)
  description: string (required)
  date: string ISO date (required)
  updated: string ISO date (optional)
  category: string (required, one of defined categories)
  tags: string[] (optional)
  author: string (default: "Jim Deola")
  image: string path (optional — for custom OG, otherwise auto-generated)
  published: boolean (default: false — must be true to appear)
  ```
- **FR-06.7**: Code syntax highlighting via `rehype-pretty-code` + `shiki` with language indicator and copy-to-clipboard button
- **FR-06.8**: Custom MDX components: Callout (info/warning/tip), CodeBlock (enhanced), Image (with caption + next/image optimization), YouTube embed, LinkCard
- **FR-06.9**: Reading time auto-calculation (words / 200 wpm, rounded up)
- **FR-06.10**: RSS feed at `/feed.xml` generated at build time via `feed` package
- **FR-06.11**: Post list shows: title, date, category badge, reading time, excerpt (first 160 chars of description)
- **FR-06.12**: Graceful empty state: blog index shows "Posts coming soon" with a brief message when no published posts exist
- **FR-06.13**: Table of contents component for longer posts (auto-generated from headings)
- **FR-06.14**: Previous/next post navigation at bottom of each post

### FR-07: Contact Form

- **FR-07.1**: Contact section on dedicated `/contact` page
- **FR-07.2**: Form fields: Name (required), Email (required, validated), Subject (dropdown: Business Inquiry, Fitness Coaching, Collaboration, Other), Message (required, min 10 chars)
- **FR-07.3**: Server-side form handler using Next.js Route Handler (`app/api/contact/route.ts`)
- **FR-07.4**: Email delivery via Resend API to jim@rhize.media
- **FR-07.5**: Client-side validation with inline error messages
- **FR-07.6**: Server-side validation: sanitize inputs, validate email format, check required fields
- **FR-07.7**: Success state: animated confirmation message with checkmark
- **FR-07.8**: Error state: clear error message with retry option
- **FR-07.9**: Rate limiting: in-memory Map, max 3 submissions per IP per hour (resets on cold start — acceptable for personal site)
- **FR-07.10**: Social links displayed alongside form (LinkedIn, GitHub, Instagram, X, email)
- **FR-07.11**: Honeypot field (`website` field, hidden via CSS, reject if filled)

### FR-08: SEO Implementation (Critical)

- **FR-08.1**: Root layout metadata: site title template `"%s | Jim Deola"`, default title "Jim Deola — Full-Stack Developer, AI Engineer & Founder"
- **FR-08.2**: Per-page metadata via `generateMetadata` (blog) or static `metadata` export (static pages)
- **FR-08.3**: OpenGraph tags on every page: og:title, og:description, og:image, og:url, og:type, og:site_name
- **FR-08.4**: Twitter Card tags: twitter:card (summary_large_image), twitter:creator (@ames_deann)
- **FR-08.5**: JSON-LD Person schema on homepage and about page:
  ```json
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Jim Deola",
    "alternateName": ["James A. Deola Jr.", "James Deola", "James A. Deola"],
    "jobTitle": ["Full-Stack Developer", "AI Engineer", "SEO Strategist", "Fitness Coach", "Founder"],
    "url": "https://jimdeola.com",
    "sameAs": [
      "https://linkedin.com/in/jim-deola-jr",
      "https://github.com/jdeola",
      "https://github.com/rhize-media",
      "https://instagram.com/ames_dean",
      "https://x.com/ames_deann"
    ],
    "worksFor": [
      {
        "@type": "Organization",
        "name": "Rhize Media",
        "url": "https://rhize.media"
      },
      {
        "@type": "Organization",
        "name": "Freeform Fitness",
        "url": "https://freeformnutrition.net"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "NJ",
      "addressCountry": "US"
    },
    "knowsAbout": ["Full-Stack Development", "AI Engineering", "SEO", "Fitness Coaching", "Web Development", "TypeScript", "Next.js", "Python"]
  }
  ```
- **FR-08.6**: JSON-LD WebSite schema on homepage with `potentialAction` SearchAction
- **FR-08.7**: JSON-LD BlogPosting schema on each blog post with author, datePublished, dateModified, headline, description
- **FR-08.8**: `sitemap.ts` dynamically generating sitemap from all static pages + all published blog posts
- **FR-08.9**: `robots.ts` allowing all crawlers, pointing to sitemap URL
- **FR-08.10**: Semantic HTML throughout: proper heading hierarchy (single H1 per page), landmark elements (`<nav>`, `<main>`, `<article>`, `<footer>`, `<aside>`)
- **FR-08.11**: Canonical URLs on every page via metadata API
- **FR-08.12**: All images must have descriptive alt text
- **FR-08.13**: Default OG image (designed, on-brand) for static pages; dynamic OG images for blog posts

### FR-09: Dynamic OG Images

- **FR-09.1**: API route at `/api/og` using `@vercel/og` (ImageResponse)
- **FR-09.2**: Accepts query params: `title`, `category` (optional)
- **FR-09.3**: Generates 1200×630 image with: dark background matching site palette, "Jim Deola" branding, post title in large text, category badge if provided
- **FR-09.4**: Blog posts reference this endpoint in their OpenGraph metadata: `/api/og?title=${encodeURIComponent(post.title)}&category=${post.category}`
- **FR-09.5**: Cached by Vercel CDN (immutable content-based URLs)

### FR-10: Analytics (PostHog)

- **FR-10.1**: PostHog JS client initialized in root layout (client component wrapper)
- **FR-10.2**: Automatic pageview tracking
- **FR-10.3**: PostHog key via `NEXT_PUBLIC_POSTHOG_KEY` environment variable
- **FR-10.4**: PostHog host via `NEXT_PUBLIC_POSTHOG_HOST` environment variable (default: `https://us.i.posthog.com`)
- **FR-10.5**: Respect Do Not Track browser setting
- **FR-10.6**: No tracking in development mode

## 5. Non-Functional Requirements

### NFR-01: Performance
- Lighthouse score ≥ 95 on all four categories (Performance, Accessibility, Best Practices, SEO)
- First Contentful Paint < 1.5s
- Largest Contentful Paint < 2.5s
- Cumulative Layout Shift < 0.1
- Total bundle size (JS) < 200KB gzipped
- Images: `next/image` with automatic optimization, WebP/AVIF serving, lazy loading
- Fonts: self-hosted Inter + JetBrains Mono via `next/font` (no external requests)

### NFR-02: Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigable throughout
- Proper focus management on route changes
- Color contrast ratios ≥ 4.5:1 for body text, ≥ 3:1 for large text
- Skip-to-content link
- Reduced motion support (`prefers-reduced-motion` disables all Framer Motion animations)
- Focus trap in mobile menu
- ARIA labels on icon-only buttons (social links)

### NFR-03: Responsiveness
- Mobile-first design
- Breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- Touch-friendly tap targets (≥ 44px)
- No horizontal scroll at any viewport width

### NFR-04: Security
- Contact form: input sanitization (strip HTML), rate limiting, honeypot
- Resend API key in server-side environment variable (never in `NEXT_PUBLIC_*`)
- Content Security Policy headers via `next.config.ts` headers config
- Strict `rel="noopener noreferrer"` on all external links
- No inline scripts (CSP compatible)

### NFR-05: Developer Experience
- TypeScript strict mode enabled
- ESLint (Next.js config) + Prettier configured
- Clean component architecture: pages are thin, logic in lib/, presentation in components/
- README with: project overview, setup instructions, development commands, deployment guide, environment variable reference
- Environment variables documented in `.env.example`
- Git hooks: none for v1 (keep it simple)

### NFR-06: Deployment
- Vercel deployment via GitHub integration (auto-deploy on push to `main`)
- Domain: jimdeola.com pointed to Vercel
- Environment variables: `RESEND_API_KEY`, `CONTACT_EMAIL`, `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_POSTHOG_KEY`, `NEXT_PUBLIC_POSTHOG_HOST`
- Build must succeed with zero errors (warnings acceptable for v1)

## 6. Design System

### Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-primary` | `#0A0A0B` | Page backgrounds |
| `--bg-secondary` | `#111113` | Card surfaces, elevated areas |
| `--bg-tertiary` | `#1A1A1E` | Hover states, subtle borders |
| `--text-primary` | `#F5F5F7` | Headings, body text |
| `--text-secondary` | `#A1A1AA` | Muted text, labels, captions |
| `--accent` | `#6366F1` | Links, CTAs, highlights (indigo) |
| `--accent-hover` | `#818CF8` | Hover state for accent |
| `--accent-secondary` | `#22D3EE` | Secondary highlights, gradients (cyan) |
| `--success` | `#22C55E` | Success states |
| `--error` | `#EF4444` | Error states |

### Typography
- **Headings**: Inter — bold (700), tracking: -0.02em
- **Body**: Inter — regular (400), line-height: 1.6
- **Code**: JetBrains Mono — regular (400)
- **Loading**: `next/font/google` for Inter, self-hosted JetBrains Mono via `next/font/local`
- **Scale**: Base 16px, heading sizes from 2xl (1.5rem) to 6xl (3.75rem) for hero

### Animation Principles
- Duration: 300-600ms for section transitions, 150-200ms for micro-interactions
- Easing: `easeOut` for entrances, `easeInOut` for transitions
- Scroll-triggered: elements animate in once (IntersectionObserver), do not re-animate
- **`prefers-reduced-motion`**: All Framer Motion animations wrapped in a hook that returns `{}` variants when reduced motion is preferred
- No animation for animation's sake — every motion must serve readability or delight

### Component Style
- Cards: subtle border (`border-white/5`), `bg-secondary`, hover: slight translateY(-2px) + border glow
- Buttons: solid accent background, `rounded-lg`, hover: `accent-hover`, active: scale(0.98)
- Links: accent color, underline-offset-4, hover: underline
- Sections: generous vertical padding (`py-24` to `py-32`), max-width container (`max-w-6xl mx-auto`)
- Dividers: `border-white/5` horizontal rules between major sections

## 7. Integration Map

| Service | Purpose | API/Protocol | Auth Method | Rate Limits | Env Var |
|---------|---------|-------------|-------------|-------------|---------|
| Resend | Contact form email delivery | REST API | API Key | 100 emails/day (free tier) | `RESEND_API_KEY` |
| PostHog | Analytics & event tracking | JS SDK | Project API Key | Generous free tier (1M events/mo) | `NEXT_PUBLIC_POSTHOG_KEY` |
| Vercel | Hosting + deployment + OG image generation | Git push → auto-deploy | GitHub integration | N/A | N/A |
| GitHub | Source control | Git | SSH key | N/A | N/A |
| @vercel/og | Dynamic OG image generation | Edge Runtime | N/A (server-side) | N/A | N/A |

## 8. SEO Strategy: Name Reputation Management

### Problem
Searching "Jim Deola" or "James Deola" currently surfaces an unrelated 2008 court record and a family obituary. The goal is to push jimdeola.com to position #1 and dominate the first page.

### Strategy

1. **Primary domain authority**: jimdeola.com as the authoritative source for "Jim Deola"
2. **Person schema markup**: JSON-LD with `alternateName` covering all name variations (Jim Deola, James Deola, James A. Deola Jr., James A. Deola)
3. **sameAs links**: Connect all social profiles to establish entity consolidation in Google's Knowledge Graph
4. **Content strategy**: Blog posts published under Jim's name build topical authority and create additional ranking URLs for "Jim Deola + [topic]"
5. **Internal linking**: Every page title, heading, and structured data reinforces the name entity
6. **Cross-linking**: Rhize Media and Freeform Fitness sites should link back to jimdeola.com (manual, post-launch)
7. **Social profile optimization**: Update LinkedIn, GitHub, Instagram, X bios to link to jimdeola.com (manual, post-launch)
8. **Google Knowledge Panel pursuit**: Structured data foundations laid now; Wikipedia/Wikidata citation potential (long-term)
9. **Dynamic OG images**: Every social share of a blog post carries Jim's name in the image — building brand impressions

### Target Keywords
- Primary: "Jim Deola", "James Deola", "James A. Deola Jr."
- Secondary: "Jim Deola developer", "Jim Deola AI", "Jim Deola Rhize Media", "Jim Deola fitness"
- Long-tail (blog): "Jim Deola [topic]" (each blog post creates a new ranking opportunity)

## 9. Content & Copy Direction

### Tone
- Direct, confident, human — not corporate
- First person where appropriate
- Short punchy sentences mixed with longer technical explanations
- No buzzword soup, no "passionate about leveraging synergies"
- Can be funny/casual in the right places (blog, about page)

### Key Copy Points
- Jim is a builder — he makes things that work
- Dual identity: tech founder by day, fitness coach, biohacker
- South Jersey roots — real, grounded
- "Jr." — distinct from his father, carries the name forward differently
- Companies are tools for impact, not ego
- Father tribute: James A. Deola Sr. was a mechanical engineer and inventor who passed in 2024. The About page acknowledges the lineage without being maudlin.

### Sample Taglines (to refine during build)
- "I build things that work."
- "Developer. Builder. Coach."
- "Full-Stack Developer · AI Engineer · Founder"

## 10. MCP Servers & Skills Map

| Phase | MCP Server / Skill | Purpose |
|-------|-------------------|---------|
| Build: Foundation | Context7 (`mcp__dff44f05`) | Next.js 15, Framer Motion, MDX documentation |
| Build: SEO | `seo-aeo-geo:nextjs-sanity-seo` | SEO implementation patterns for Next.js metadata, JSON-LD |
| Build: SEO | `seo-aeo-geo:content-seo` | Structured data validation, meta tag optimization |
| Build: Design | `frontend-design` | Component design system, Tailwind v4 patterns |
| Build: Contact | Resend MCP (`mcp__MCP_DOCKER__send-email`) | Test contact form email delivery |
| Verify | `engineering:code-review` | Review codebase for quality issues |
| Verify | `design:accessibility-review` | WCAG compliance check |
| Post-launch | DataForSEO (`mcp__dataforseo`) | Rank tracking for "Jim Deola" queries |
| Post-launch | `seo-aeo-geo:serp-intelligence` | Monitor SERP position changes |
| Post-launch | `seo-aeo-geo:aeo-geo-optimization` | AI search visibility optimization |

## 11. File Structure

```
jimdeola.com/
├── public/
│   ├── fonts/                     # Self-hosted fonts (JetBrains Mono)
│   ├── images/
│   │   ├── og-default.png         # Default OG image for static pages
│   │   └── ...                    # Tech stack icons, etc.
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Root layout (fonts, PostHog, global meta)
│   │   ├── page.tsx               # Homepage (hero + intro sections)
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── work/
│   │   │   └── page.tsx
│   │   ├── stack/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx           # Blog index
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx       # Individual post
│   │   │   ├── category/
│   │   │   │   └── [category]/
│   │   │   │       └── page.tsx
│   │   │   └── tag/
│   │   │       └── [tag]/
│   │   │           └── page.tsx
│   │   ├── api/
│   │   │   ├── contact/
│   │   │   │   └── route.ts       # Contact form handler (Resend)
│   │   │   └── og/
│   │   │       └── route.tsx       # Dynamic OG image generation
│   │   ├── feed.xml/
│   │   │   └── route.ts           # RSS feed generation
│   │   ├── not-found.tsx          # Custom 404
│   │   ├── sitemap.ts             # Dynamic sitemap
│   │   └── robots.ts              # Robots config
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── MobileNav.tsx
│   │   │   └── PageTransition.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── AboutContent.tsx
│   │   │   ├── WorkCards.tsx
│   │   │   ├── TechStack.tsx
│   │   │   └── ContactForm.tsx
│   │   ├── blog/
│   │   │   ├── PostCard.tsx
│   │   │   ├── PostGrid.tsx
│   │   │   ├── CategoryBadge.tsx
│   │   │   ├── TableOfContents.tsx
│   │   │   ├── ReadingTime.tsx
│   │   │   ├── PostNavigation.tsx  # Prev/next post links
│   │   │   └── CopyButton.tsx     # Code block copy button
│   │   ├── mdx/
│   │   │   ├── Callout.tsx        # Info/warning/tip callout
│   │   │   ├── CodeBlock.tsx      # Enhanced code block
│   │   │   ├── MdxImage.tsx       # Image with caption
│   │   │   ├── YouTube.tsx        # YouTube embed
│   │   │   ├── LinkCard.tsx       # Rich link preview card
│   │   │   └── index.ts          # MDX component registry
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── SocialLinks.tsx
│   │   │   ├── SectionHeading.tsx
│   │   │   ├── AnimatedSection.tsx # Scroll-triggered animation wrapper
│   │   │   └── ScrollToTop.tsx
│   │   ├── seo/
│   │   │   └── JsonLd.tsx          # Reusable JSON-LD component
│   │   └── providers/
│   │       └── PostHogProvider.tsx  # PostHog client wrapper
│   ├── content/
│   │   └── blog/                  # MDX blog posts live here
│   │       └── .gitkeep
│   ├── lib/
│   │   ├── mdx.ts                # MDX compilation + file reading
│   │   ├── blog.ts               # Blog data: getAllPosts, getPostBySlug, getCategories, getTags
│   │   ├── resend.ts             # Resend client initialization
│   │   ├── rate-limit.ts         # In-memory rate limiter
│   │   ├── constants.ts          # Site metadata, social links, nav items, tech stack data
│   │   └── utils.ts              # cn(), readingTime(), formatDate()
│   ├── hooks/
│   │   ├── useScrollDirection.ts  # Header hide/show on scroll
│   │   ├── useReducedMotion.ts    # prefers-reduced-motion hook
│   │   └── useInView.ts          # IntersectionObserver hook (for scroll animations)
│   ├── styles/
│   │   └── globals.css            # Tailwind v4 @theme + @import + custom styles
│   └── types/
│       ├── blog.ts               # BlogPost, Category, Tag types
│       └── index.ts              # Shared types
├── .env.example                   # Environment variable template
├── .eslintrc.json
├── .prettierrc
├── .gitignore
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs             # PostCSS config (Tailwind v4)
├── package.json
└── README.md
```

**Note**: No `tailwind.config.ts` — Tailwind v4 uses CSS-first configuration via `@theme` in `globals.css`.

## 12. Open Questions

All open questions from v1 have been resolved:

- ~~OG Image design~~ → Dynamic per-post via `@vercel/og`, branded default for static pages (FR-09)
- ~~Analytics~~ → PostHog for v1 (FR-10)
- ~~Freeform Fitness URL~~ → freeformnutrition.net (placeholder) (FR-04.3)
- ~~Font choice~~ → Inter for headings/body, JetBrains Mono for code (Design System §Typography)
- ~~Tailwind version~~ → Tailwind CSS v4, CSS-first config
- ~~MDX library~~ → `next-mdx-remote` + `gray-matter` + `rehype-pretty-code` + `shiki`
- ~~Rate limiting~~ → In-memory Map (FR-07.9)

**No open questions remain.**

## 13. Appendix

### A. Tech Dependencies (pinned)
```json
{
  "dependencies": {
    "next": "^15.1",
    "react": "^19.0",
    "react-dom": "^19.0",
    "framer-motion": "^11.0",
    "next-mdx-remote": "^5.0",
    "gray-matter": "^4.0",
    "rehype-pretty-code": "^0.14",
    "shiki": "^1.0",
    "resend": "^4.0",
    "posthog-js": "^1.160",
    "feed": "^4.2",
    "lucide-react": "^0.400",
    "clsx": "^2.0",
    "tailwind-merge": "^2.0"
  },
  "devDependencies": {
    "typescript": "^5.6",
    "tailwindcss": "^4.0",
    "@tailwindcss/postcss": "^4.0",
    "@types/node": "^22.0",
    "@types/react": "^19.0",
    "@types/react-dom": "^19.0",
    "@vercel/og": "^0.6",
    "eslint": "^9.0",
    "eslint-config-next": "^15.1",
    "prettier": "^3.0",
    "prettier-plugin-tailwindcss": "^0.6"
  }
}
```

### B. Environment Variables
```bash
# Server-side only
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL=jim@rhize.media

# Public (exposed to client)
NEXT_PUBLIC_SITE_URL=https://jimdeola.com
NEXT_PUBLIC_POSTHOG_KEY=phc_xxxxxxxxxxxx
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

### C. Deployment Configuration
- **Vercel**: Connect GitHub repo (`jdeola/jimdeola.com`), auto-deploy on push to `main`
- **Domain**: jimdeola.com → Vercel DNS or external DNS with CNAME to `cname.vercel-dns.com`
- **Build command**: `next build` (default)
- **Output directory**: `.next` (default)
- **Node.js version**: 20.x
- **Environment variables**: Set in Vercel dashboard (Production + Preview)

### D. Gap Analysis Changelog (v1 → v2)
1. Added PostHog analytics integration (FR-10)
2. Added dynamic OG image generation via @vercel/og (FR-09)
3. Resolved Freeform Fitness URL → freeformnutrition.net
4. Locked font choice: Inter + JetBrains Mono
5. Upgraded to Tailwind CSS v4 (CSS-first config, removed tailwind.config.ts)
6. Clarified MDX library: next-mdx-remote (not @next/mdx)
7. Added rehype-pretty-code + shiki for code syntax highlighting
8. Added feed package for RSS generation
9. Added PostHog environment variables
10. Resolved rate limiting → in-memory Map approach
11. Added accessibility requirements: focus trap, ARIA labels, skip-to-content (FR-01.7, FR-01.8, NFR-02)
12. Added prev/next post navigation (FR-06.14)
13. Added table of contents component (FR-06.13)
14. Added hooks directory with useScrollDirection, useReducedMotion, useInView
15. Added PostHogProvider component
16. Added MDX component directory (components/mdx/)
17. Removed tailwind.config.ts from file structure (v4 doesn't use it)
18. Added postcss.config.mjs to file structure (Tailwind v4 requirement)
