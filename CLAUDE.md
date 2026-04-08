# jimdeola.com

## Project Overview
Personal brand website for Jim Deola (James A. Deola Jr.) — a full-stack developer, AI engineer, SEO strategist, fitness coach, and founder based in South Jersey. Built with Next.js 15 (App Router), TypeScript, and Tailwind CSS v4. The primary goal is SEO reputation management — becoming the #1 Google result for "Jim Deola" and "James Deola" by displacing negative/irrelevant results with a high-authority personal site.

## Tech Stack
- **Framework:** Next.js 15 (App Router, static-first)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 (CSS-first config via `@theme` in globals.css)
- **Animations:** Framer Motion 11
- **Blog:** MDX via `next-mdx-remote` + `gray-matter` + `rehype-pretty-code` + `shiki`
- **Contact:** Resend API (server-side route handler)
- **Analytics:** PostHog (posthog-js)
- **OG Images:** `@vercel/og` (dynamic per-post generation)
- **RSS:** `feed` package
- **Icons:** Lucide React
- **Utilities:** clsx + tailwind-merge
- **Deployment:** Vercel (auto-deploy from GitHub `main` branch)
- **Domain:** jimdeola.com (owned, DNS pointed to Vercel)

## Architecture: 6 Feature Groups

1. **Layout & Navigation** — Sticky header, mobile nav overlay, footer, page transitions
2. **Static Pages** — Hero (homepage), About, Work, Stack, Contact — all statically generated
3. **Blog System (MDX)** — Full blog with categories, tags, reading time, code highlighting, custom components, prev/next navigation, table of contents
4. **SEO Layer** — JSON-LD (Person, WebSite, BlogPosting), OpenGraph, Twitter Cards, sitemap.ts, robots.ts, canonical URLs
5. **Dynamic OG Images** — `@vercel/og` endpoint generating branded images per blog post
6. **Contact & Analytics** — Resend-powered contact form with rate limiting + PostHog tracking

## Development Approach
- **Build order:** Foundation (layout, design system, config) → Static pages → Blog system → SEO layer → Contact form → Analytics → OG images → Polish & verification
- **No CMS:** All content is static or MDX files in the repo
- **Component architecture:** Pages are thin wrappers; logic lives in `lib/`, presentation in `components/`
- **Tailwind v4:** Use `@theme` directive in `globals.css` for custom design tokens. No `tailwind.config.ts` file.
- **Framer Motion:** Wrap all animations in `useReducedMotion` check. Use `AnimatedSection` component for scroll-triggered reveals.
- **MDX posts:** Live in `src/content/blog/`. Frontmatter parsed with `gray-matter`. Content compiled with `next-mdx-remote`.
- **Testing:** Lighthouse CI for performance/SEO/accessibility scores. Manual visual review.

## SEO Design (Critical)
This is the #1 priority of the entire site. Every page must reinforce the "Jim Deola" entity:
- JSON-LD Person schema on homepage + about page with `alternateName` variants
- `sameAs` linking all social profiles
- Blog posts create additional ranking URLs for "Jim Deola + [topic]"
- Dynamic OG images carry the name in every social share
- Sitemap includes all pages + blog posts
- Semantic HTML with proper heading hierarchy (single H1 per page)

## GSD v2 Project Management

This project uses **GSD v2 (gsd-pi)** for planning and state tracking. All planning files live in `.gsd/`.

### Using GSD
GSD v2 (`gsd-pi` on npm) is a **standalone CLI agent** — it runs in its own terminal, not inside Claude Code. To use it:

```bash
gsd                       # Launch GSD TUI (interactive)
# Then inside GSD's TUI:
#   /gsd auto             — Autonomous execution loop
#   /gsd next             — Step mode, one task at a time
#   /gsd status           — Progress dashboard
#   /gsd discuss          — Architecture discussion
#   /gsd migrate          — Migrate .planning/ to .gsd/
#   /gsd stop             — Graceful stop
#   /gsd quick            — Quick task with GSD guarantees

# Headless (no TUI):
gsd headless auto         # CI/script-friendly autonomous mode
gsd headless query        # JSON snapshot of state (no LLM call)
gsd --print "status"      # Single-shot print mode
```

**From Claude Code:** The `.gsd/` files serve as the planning structure. Claude Code reads task plan files and executes them via worktree+subagent pattern. Progress is tracked in `STATE.md`.

### GSD Directory Structure
```
.gsd/
├── STATE.md              # Quick-glance dashboard (always read first)
├── PROJECT.md            # Living doc — what the project is right now
├── DECISIONS.md          # Append-only architectural decision register
├── KNOWLEDGE.md          # Cross-session rules, patterns, lessons
├── RUNTIME.md            # Runtime context — env vars, services
├── M001-ROADMAP.md       # Milestone plan with slices and dependencies
├── M001-CONTEXT.md       # User decisions from discuss phase
├── M001-RESEARCH.md      # Codebase and ecosystem research
├── S0X-T0Y-PLAN.md       # 29 individual task plans (one per context window)
├── auto.lock             # (.gitignore) PID lock for auto-mode
├── completed-units.json  # (.gitignore) prevents re-running completed units
└── metrics.json          # (.gitignore) token/cost accumulator
```

### Milestone M001: Production Launch — 8 Slices, 29 Tasks
| Slice | Name | Tasks | Parallel |
|-------|------|-------|----------|
| S01 | Foundation | T01-T03 | Sequential |
| S02 | Layout & Navigation | T01-T04 | Sequential |
| S03 | Static Pages | T01-T05 | T01-T04 parallel |
| S04 | Blog System | T01-T05 | T03-T05 parallel (after T01-T02) |
| S05 | Contact & Analytics | T01-T03 | Sequential |
| S06 | SEO Layer | T01-T04 | T01-T03 parallel |
| S07 | Polish & Accessibility | T01-T03 | Sequential |
| S08 | Deployment & Verification | T01-T02 | Sequential |

## MCP Servers & Tools Available
| Tool | Type | When to Use |
|------|------|-------------|
| Context7 (`mcp__dff44f05`) | MCP | Next.js 15, Framer Motion, MDX documentation |
| DataForSEO (`mcp__dataforseo`) | MCP | SERP tracking for "Jim Deola" queries (post-launch) |
| Resend (`mcp__MCP_DOCKER__send-email`) | MCP | Test contact form email delivery |
| Vercel (`mcp__ab4cbc85`) | MCP | Deploy, check deployment status, view logs |
| 21st.dev Magic | MCP | `/ui` command for generating component code from natural language |
| `gsd-browser` | CLI/Skill | Visual verification, Lighthouse audits, responsive testing, OG image checks |
| `UI UX Pro Max` | Skill | Component design decisions, design system generation, UX guidelines |

## Skills to Use
| Skill | When to Use |
|-------|-------------|
| `frontend-design` | Component design, Tailwind patterns, responsive layouts |
| `ui-ux-pro-max` | 67 UI styles, 161 palettes, 57 font pairings, UX guidelines |
| `gsd-browser` | Browser automation, screenshots, Lighthouse, responsive testing |
| `seo-aeo-geo:nextjs-sanity-seo` | SEO implementation in Next.js (metadata API, JSON-LD) |
| `seo-aeo-geo:content-seo` | Structured data validation, meta tag optimization |
| `engineering:code-review` | Review completed slices for quality |
| `design:accessibility-review` | WCAG compliance check after UI is built |

## Key Files
```
jimdeola.com/
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Root layout (fonts, PostHog, global meta)
│   │   ├── page.tsx               # Homepage
│   │   ├── about/page.tsx         # About page
│   │   ├── work/page.tsx          # Work/businesses page
│   │   ├── stack/page.tsx         # Tech stack page
│   │   ├── contact/page.tsx       # Contact form page
│   │   ├── blog/page.tsx          # Blog index
│   │   ├── blog/[slug]/page.tsx   # Blog post
│   │   ├── api/contact/route.ts   # Contact form handler
│   │   ├── api/og/route.tsx       # Dynamic OG image generator
│   │   ├── feed.xml/route.ts      # RSS feed
│   │   ├── sitemap.ts             # Dynamic sitemap
│   │   └── robots.ts              # Robots config
│   ├── components/                # All UI components (layout/, sections/, blog/, mdx/, ui/, seo/, providers/)
│   ├── content/blog/              # MDX blog posts
│   ├── lib/                       # Utilities (mdx.ts, blog.ts, resend.ts, rate-limit.ts, constants.ts, utils.ts)
│   ├── hooks/                     # Custom hooks (useScrollDirection, useReducedMotion, useInView)
│   ├── styles/globals.css         # Tailwind v4 @theme + custom styles
│   └── types/                     # TypeScript types
├── public/                        # Static assets (fonts, images, favicon)
├── .gsd/                          # GSD v2 planning (Milestone/Slice/Task)
├── .planning/                     # GSD v1 (legacy, pending removal)
├── prd/                           # PRD v2 (source of truth)
└── CLAUDE.md                      # This file
```

## Execution Strategy: Worktree + Subagent-Driven Development (MANDATORY)
Every GSD task MUST be executed via a sub-agent running in a git worktree (`isolation: "worktree"`), using the `subagent-driven-development` pattern internally. This is not optional — it solves context window exhaustion while maintaining quality gates.

**Why**: This project has ~70K tokens of standing context (SuperClaude + plugins + MCP tools). A single context window cannot hold that overhead AND complete a meaningful task. Worktree sub-agents start fresh with only the CLAUDE.md and task plan file loaded.

**Pattern for `/gsd auto` and task execution**:
```
For each task in the slice:
  1. Agent(isolation: "worktree") → orchestrate the task
  2. Worktree agent reads CLAUDE.md + .gsd/S0X-T0Y-PLAN.md
  3. Worktree agent extracts requirements, implements the task
  4. Each task: implement → spec review → code quality review → fix loop
  5. Worktree agent commits completed work to worktree branch
  6. Parent merges worktree branch, updates STATE.md
  7. Next task starts in fresh worktree
```

**For parallel-safe tasks** (no shared file dependencies):
Use multiple concurrent worktree agents via the `dispatching-parallel-agents` pattern.

## Post-Slice Verification
After completing each GSD slice, run:
`/sc:reflect on whether all tasks were implemented and then /simplify your code changes where needed for an optimal solution`

## Important Notes
- Never push commits — user pushes manually
- Resend API key is server-side only (`RESEND_API_KEY`), never in `NEXT_PUBLIC_*`
- PostHog key IS public (`NEXT_PUBLIC_POSTHOG_KEY`) — this is expected
- Tailwind v4 uses CSS-first config — do NOT create a `tailwind.config.ts` file
- All Framer Motion animations MUST respect `prefers-reduced-motion`
- The blog system must work gracefully with zero posts (empty state)
- Contact form rate limiting is in-memory (Map) — resets on cold starts, acceptable for personal site
- OG images: blog posts use dynamic `/api/og?title=...&category=...`, static pages use `/images/og-default.png`
- Font loading: Inter via `next/font/google`, JetBrains Mono via `next/font/local` (self-hosted)
- Color palette: dark base (#0A0A0B), accent indigo (#6366F1), secondary cyan (#22D3EE)
