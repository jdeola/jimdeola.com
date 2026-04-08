# jimdeola.com — Roadmap

## Milestone: v1.0 — Production Launch

### Phase 01: foundation (Week 1, Days 1-2)
**Goal**: Set up the Next.js project, install dependencies, configure Tailwind v4, establish the design system, and build the root layout with global styles.

**Plans**: 3 plans

Plans:
- [ ] 01-01-PLAN.md — Initialize Next.js 15 project with TypeScript, install all dependencies, configure tsconfig, ESLint, Prettier, postcss.config.mjs, next.config.ts
- [ ] 01-02-PLAN.md — Set up Tailwind v4 CSS-first config in globals.css (@theme with color palette, typography tokens), configure Inter + JetBrains Mono via next/font, create utility functions (cn, formatDate, readingTime)
- [ ] 01-03-PLAN.md — Build root layout.tsx (fonts, metadata template, skip-to-content), create constants.ts (site metadata, nav items, social links, tech stack data), create all TypeScript types (blog.ts, index.ts)

**Deliverables**: Working Next.js project with design system, fonts, and root layout

---

### Phase 02: layout-and-navigation (Week 1, Days 2-3)
**Goal**: Build the global layout components — header, footer, mobile nav, page transitions, and reusable UI primitives.

**Plans**: 4 plans

Plans:
- [ ] 02-01-PLAN.md — Build Header component (sticky, transparent→solid on scroll, active page indicator, responsive)
- [ ] 02-02-PLAN.md — Build MobileNav component (full-screen overlay, focus trap, smooth animation, hamburger button)
- [ ] 02-03-PLAN.md — Build Footer component (social links, site links, copyright) and ScrollToTop button
- [ ] 02-04-PLAN.md — Build reusable UI primitives: Button, Card, SocialLinks, SectionHeading, AnimatedSection (scroll-triggered Framer Motion wrapper with useReducedMotion), PageTransition component

**Deliverables**: Complete navigation system and reusable component library

---

### Phase 03: static-pages (Week 1, Days 3-5)
**Goal**: Build all five static pages — Hero/Homepage, About, Work, Stack, Contact (without form logic).

**Plans**: 5 plans

Plans:
- [ ] 03-01-PLAN.md — Build Hero section for homepage (H1, tagline, subtitle, animated text entrance, photo placeholder, CTAs, social strip, background animation)
- [ ] 03-02-PLAN.md — Build About page (personal narrative, Jr. distinction, key facts sidebar, philosophy section, scroll-triggered reveals)
- [ ] 03-03-PLAN.md — Build Work page (Rhize Media card → rhize.media, Freeform Fitness card → freeformnutrition.net, hover animations, responsive layout)
- [ ] 03-04-PLAN.md — Build Stack page (categorized tech grid with SVG icons, staggered scroll animations, responsive columns)
- [ ] 03-05-PLAN.md — Build Contact page layout (social links section, email display, form placeholder — actual form logic in Phase 05)

**Deliverables**: All 5 static pages fully styled and animated

---

### Phase 04: blog-system (Week 2, Days 1-3)
**Goal**: Build the complete MDX blog system — file reading, compilation, post pages, index, categories, tags, and all blog components.

**Plans**: 5 plans

Plans:
- [ ] 04-01-PLAN.md — Build blog infrastructure: lib/mdx.ts (MDX compilation with rehype-pretty-code + shiki), lib/blog.ts (getAllPosts, getPostBySlug, getCategories, getTags, getPostsByCategory, getPostsByTag)
- [ ] 04-02-PLAN.md — Build blog post page (/blog/[slug]/page.tsx) with MDX rendering, generateStaticParams, generateMetadata, reading time, category badge
- [ ] 04-03-PLAN.md — Build custom MDX components: Callout, CodeBlock (with CopyButton), MdxImage, YouTube, LinkCard, and MDX component registry (components/mdx/index.ts)
- [ ] 04-04-PLAN.md — Build blog index page (/blog/page.tsx with PostGrid, PostCard), category pages (/blog/category/[category]), tag pages (/blog/tag/[tag]), and graceful empty states
- [ ] 04-05-PLAN.md — Build TableOfContents component, PostNavigation (prev/next), ReadingTime display, and RSS feed route (/feed.xml/route.ts using `feed` package)

**Deliverables**: Complete blog system ready for content

---

### Phase 05: contact-and-analytics (Week 2, Day 3)
**Goal**: Wire up the contact form with Resend and integrate PostHog analytics.

**Plans**: 3 plans

Plans:
- [ ] 05-01-PLAN.md — Build ContactForm component with client-side validation, honeypot field, animated states (idle, submitting, success, error)
- [ ] 05-02-PLAN.md — Build contact API route handler (/api/contact/route.ts): server-side validation, sanitization, in-memory rate limiting (lib/rate-limit.ts), Resend email delivery (lib/resend.ts)
- [ ] 05-03-PLAN.md — Integrate PostHog: create PostHogProvider component, add to root layout, configure pageview tracking, respect DNT, disable in dev mode

**Deliverables**: Working contact form + analytics tracking

---

### Phase 06: seo-layer (Week 2, Days 3-4)
**Goal**: Implement the complete SEO layer — JSON-LD schemas, metadata, sitemap, robots, OG images.

**Plans**: 4 plans

Plans:
- [ ] 06-01-PLAN.md — Build JsonLd component (Person, WebSite, BlogPosting schemas), add to homepage, about page, and blog post template
- [ ] 06-02-PLAN.md — Implement per-page metadata for all static pages (title, description, OpenGraph, Twitter Cards, canonical URLs)
- [ ] 06-03-PLAN.md — Build dynamic OG image endpoint (/api/og/route.tsx using @vercel/og) with dark branded template, title + category rendering
- [ ] 06-04-PLAN.md — Create sitemap.ts (all pages + blog posts), robots.ts, and verify all blog posts have generateMetadata with dynamic OG image URLs

**Deliverables**: Complete SEO implementation ready for Google indexing

---

### Phase 07: polish-and-accessibility (Week 2, Days 4-5)
**Goal**: Build the 404 page, verify accessibility, add finishing touches, and run Lighthouse.

**Plans**: 3 plans

Plans:
- [ ] 07-01-PLAN.md — Build custom 404 page (on-brand, with nav link back to home), add .env.example, create .gitignore
- [ ] 07-02-PLAN.md — Accessibility pass: verify skip-to-content, focus management on route changes, ARIA labels on all icon buttons, color contrast check, keyboard nav test, reduced motion verification
- [ ] 07-03-PLAN.md — Create README.md (project overview, setup, dev commands, deployment guide, env var reference), run Lighthouse audit, fix any issues to hit ≥95 scores

**Deliverables**: Production-ready, accessible, documented project

---

### Phase 08: deployment-and-verification (Week 2, Day 5)
**Goal**: Deploy to Vercel, verify production, validate SEO.

**Plans**: 2 plans

Plans:
- [ ] 08-01-PLAN.md — Prepare for deployment: verify all env vars documented, ensure build succeeds with zero errors, verify CSP headers in next.config.ts, test all pages locally
- [ ] 08-02-PLAN.md — Post-deployment verification: validate JSON-LD in Google Rich Results Test, check sitemap accessibility, verify OG images render correctly (social share preview), submit to Google Search Console

**Deliverables**: Live site at jimdeola.com, verified and indexed

---

## Summary
- **Total Phases**: 8
- **Total Plans**: 29
- **Estimated Duration**: ~2 weeks
- **Parallel Opportunities**: 
  - Phase 03 plans 01-04 can run in parallel (independent pages)
  - Phase 04 plans 03-05 can run in parallel after 04-01 and 04-02
  - Phase 06 plans 01-03 can run in parallel
