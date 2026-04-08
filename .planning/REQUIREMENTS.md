# jimdeola.com — Requirements

## Functional Requirements

### FR-01: Navigation & Layout
- FR-01.1: Sticky header with name/logo, nav links (Home, About, Work, Stack, Blog, Contact), mobile hamburger
- FR-01.2: Header transparent → solid dark on scroll
- FR-01.3: Mobile nav: full-screen overlay with smooth animation
- FR-01.4: Active page indicator in nav
- FR-01.5: Footer with social links, copyright, site links
- FR-01.6: Page transitions via Framer Motion AnimatePresence
- FR-01.7: Skip-to-content link
- FR-01.8: Focus trap in mobile menu

### FR-02: Hero Section
- FR-02.1: Full-viewport, "Jim Deola" as H1
- FR-02.2: Tagline: "Full-Stack Developer · AI Engineer · Founder"
- FR-02.3: Subtitle establishing dual identity
- FR-02.4: Animated text entrance (staggered reveal)
- FR-02.5: Photo placeholder (works without photo, prop-ready)
- FR-02.6: Two CTAs: "See My Work" → /work, "Read the Blog" → /blog
- FR-02.7: Social links strip
- FR-02.8: Subtle background animation (respects reduced motion)

### FR-03: About Page
- FR-03.1: SEO-optimized H1
- FR-03.2: Personal narrative
- FR-03.3: Distinguish as James A. Deola Jr. (not his father)
- FR-03.4: Key facts sidebar
- FR-03.5: Philosophy section
- FR-03.6: Scroll-triggered reveals
- FR-03.7: Person JSON-LD schema

### FR-04: Work Page
- FR-04.1: Two business cards, side-by-side (desktop) / stacked (mobile)
- FR-04.2: Rhize Media card → https://rhize.media
- FR-04.3: Freeform Fitness card → https://freeformnutrition.net
- FR-04.4: Hover animation (lift/glow)
- FR-04.5: External links with noopener noreferrer

### FR-05: Skills/Stack Page
- FR-05.1: Categorized tech stack (7 categories)
- FR-05.2: Card/badge per technology with SVG icon + label
- FR-05.3: Staggered scroll animation per category
- FR-05.4: 24 technologies listed
- FR-05.5: Responsive grid
- FR-05.6: Data in constants file

### FR-06: Blog System (MDX)
- FR-06.1: Blog index at /blog with filterable grid
- FR-06.2: Post pages at /blog/[slug] with next-mdx-remote
- FR-06.3: Category pages at /blog/category/[category]
- FR-06.4: Tag pages at /blog/tag/[tag]
- FR-06.5: 6 categories (Tech, AI, SEO, Fitness, Business, Biohacking)
- FR-06.6: Frontmatter schema (title, description, date, updated, category, tags, author, image, published)
- FR-06.7: Code highlighting via rehype-pretty-code + shiki with copy button
- FR-06.8: Custom MDX components (Callout, CodeBlock, MdxImage, YouTube, LinkCard)
- FR-06.9: Auto reading time (words / 200 wpm)
- FR-06.10: RSS feed at /feed.xml
- FR-06.11: Post list: title, date, category badge, reading time, excerpt
- FR-06.12: Graceful empty state
- FR-06.13: Table of contents (auto from headings)
- FR-06.14: Prev/next post navigation

### FR-07: Contact Form
- FR-07.1: Dedicated /contact page
- FR-07.2: Fields: Name, Email, Subject (dropdown), Message
- FR-07.3: Route handler at /api/contact
- FR-07.4: Resend API → jim@rhize.media
- FR-07.5: Client-side validation
- FR-07.6: Server-side validation + sanitization
- FR-07.7: Animated success state
- FR-07.8: Error state with retry
- FR-07.9: In-memory rate limiting (3/IP/hour)
- FR-07.10: Social links alongside form
- FR-07.11: Honeypot field

### FR-08: SEO Implementation
- FR-08.1: Title template "%s | Jim Deola"
- FR-08.2: Per-page metadata
- FR-08.3: OpenGraph tags on every page
- FR-08.4: Twitter Cards
- FR-08.5: JSON-LD Person schema (homepage + about)
- FR-08.6: JSON-LD WebSite schema (homepage)
- FR-08.7: JSON-LD BlogPosting schema (each post)
- FR-08.8: Dynamic sitemap.ts
- FR-08.9: robots.ts
- FR-08.10: Semantic HTML
- FR-08.11: Canonical URLs
- FR-08.12: Alt text on all images
- FR-08.13: Default OG image for static pages

### FR-09: Dynamic OG Images
- FR-09.1: API route at /api/og using @vercel/og
- FR-09.2: Accepts title + category params
- FR-09.3: Generates 1200×630 branded image
- FR-09.4: Blog posts reference in OG metadata
- FR-09.5: CDN cached

### FR-10: Analytics (PostHog)
- FR-10.1: PostHog JS initialized in root layout
- FR-10.2: Automatic pageview tracking
- FR-10.3: Config via NEXT_PUBLIC_POSTHOG_KEY
- FR-10.4: Config via NEXT_PUBLIC_POSTHOG_HOST
- FR-10.5: Respect Do Not Track
- FR-10.6: Disabled in development

## Non-Functional Requirements

### NFR-01: Performance
- Lighthouse ≥ 95 all categories
- FCP < 1.5s, LCP < 2.5s, CLS < 0.1
- JS bundle < 200KB gzipped
- next/image optimization, lazy loading

### NFR-02: Accessibility
- WCAG 2.1 AA
- Keyboard navigable
- Focus management on route changes
- Contrast ≥ 4.5:1 body, ≥ 3:1 large text
- Skip-to-content, reduced motion, focus trap, ARIA labels

### NFR-03: Responsiveness
- Mobile-first, breakpoints: 640/768/1024/1280
- Touch targets ≥ 44px
- No horizontal scroll

### NFR-04: Security
- Input sanitization, rate limiting, honeypot
- RESEND_API_KEY server-side only
- CSP headers via next.config.ts
- noopener noreferrer on external links

### NFR-05: Developer Experience
- TypeScript strict, ESLint + Prettier
- Clean component architecture
- README with full docs
- .env.example

### NFR-06: Deployment
- Vercel auto-deploy from GitHub main
- jimdeola.com DNS → Vercel
- 5 env vars: RESEND_API_KEY, CONTACT_EMAIL, NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_POSTHOG_KEY, NEXT_PUBLIC_POSTHOG_HOST
