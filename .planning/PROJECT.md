# jimdeola.com — Project Definition

## Vision
Build the definitive personal brand website for Jim Deola — a site that ranks #1 for his name on Google, establishes him as a credible authority in full-stack development, AI, SEO, and fitness, and serves as a hub linking to both of his businesses.

## Core Value Proposition
A high-quality, SEO-optimized personal website that displaces negative/irrelevant search results and positions Jim Deola as a serious technical founder and fitness coach.

## Business Context
- Jim currently has no personal website, and Google results for "Jim Deola" / "James Deola" are polluted by an unrelated 2008 court record and a family obituary
- This site is the anchor for a broader personal brand strategy including social profiles, blog content, and cross-linking from Rhize Media and Freeform Fitness
- The blog system enables ongoing content publishing that compounds SEO authority over time

## Stakeholders
- **Jim Deola** — Owner, content author, sole stakeholder
- **Rhize Media** — Jim's web dev/AI/SEO company (linked from Work page)
- **Freeform Fitness** — Jim's fitness coaching business (linked from Work page)

## Success Criteria
1. Site deploys to Vercel and is accessible at jimdeola.com
2. Lighthouse scores ≥ 95 across all categories (Performance, Accessibility, Best Practices, SEO)
3. Google Search Console shows jimdeola.com indexed and ranking for "Jim Deola" within 2 weeks of launch
4. JSON-LD Person schema validates in Google Rich Results Test
5. Contact form successfully delivers emails via Resend
6. Blog system renders MDX posts with code highlighting, custom components, and dynamic OG images
7. All animations respect `prefers-reduced-motion`
8. Mobile experience is polished (no horizontal scroll, touch-friendly, responsive nav)

## Constraints
- **Timeline**: Build in 1-2 weeks via GSD autonomous execution
- **Budget**: Zero ongoing cost beyond Vercel free tier + Resend free tier + PostHog free tier
- **Team**: Solo developer (Jim) + autonomous Claude Code agent
- **No CMS**: Static content + MDX for v1. CMS integration deferred to v2.
- **No auth**: No user accounts, no login, no gated content

## Key Technical Decisions
| Decision | Choice | Rationale |
|----------|--------|-----------|
| Framework | Next.js 15 (App Router) | Jim's primary stack, Vercel-native, excellent SEO support |
| Styling | Tailwind CSS v4 | Latest version, CSS-first config, future-proof |
| Blog engine | MDX (next-mdx-remote) | Content-as-code, zero runtime cost, full React component support |
| Animations | Framer Motion 11 | Best React animation library, good DX, accessible |
| Analytics | PostHog | Jim already uses PostHog for other projects |
| Contact | Resend | Simple API, Jim already has Resend available |
| OG Images | @vercel/og | Dynamic generation, Vercel Edge Runtime, zero cost |
| Rate limiting | In-memory Map | Simple, no dependencies, acceptable for personal site volume |
