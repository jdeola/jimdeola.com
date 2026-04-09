'use client';

import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { MapPin, Building2, Crosshair, Wrench } from 'lucide-react';

const KEY_FACTS = [
  {
    icon: MapPin,
    label: 'Location',
    value: 'South Jersey, USA',
  },
  {
    icon: Building2,
    label: 'Companies',
    value: 'Rhize Media, Freeform Nutrition',
  },
  {
    icon: Crosshair,
    label: 'Focus',
    value: 'Full-Stack Dev, AI Engineering, SEO/AEO Strategy, Fitness Coaching',
  },
  {
    icon: Wrench,
    label: 'Currently Building',
    value: 'AI agents, client systems, open-source tools',
  },
] as const;

export function AboutContent() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      {/* Two-column layout: narrative left, key facts right */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
        {/* Main narrative */}
        <article className="lg:col-span-2">
          {/* Section 1 — Intro */}
          <AnimatedSection>
            <h1 className="mb-8 text-4xl font-bold text-text-primary sm:text-5xl">
              About Jim Deola
            </h1>

            <div className="space-y-5 text-lg leading-relaxed text-text-secondary">
              <p>
                Full-stack developer, AI engineer, and SEO strategist based in South
                Jersey. I studied chemical engineering at Rutgers, along with finance,
                exercise physiology, chemistry, and physics at Atlantic Cape Community
                College, before shifting focus to data science and full-stack software
                development in 2020. Before that, I spent 15+ years in healthcare data
                and operations &mdash; building systems, automating workflows, and
                leading cross-functional teams.
              </p>

              <p>
                That experience led to{' '}
                <strong className="text-text-primary">Rhize Media</strong>, an
                AI-native solutions company focused on web development, internal
                tooling, digital marketing, advertising, and SEO/AEO strategy. I also
                run{' '}
                <strong className="text-text-primary">Freeform Nutrition</strong>,
                where I apply evidence-based coaching to competitors, general weight
                loss clients, MMA fighters, and powerlifters.
              </p>

              <p>
                My stack centers on Next.js, TypeScript, and Python, with deep
                investment in AI tooling &mdash; Claude, PostHog, custom agents. I&apos;m
                always building, whether it&apos;s client projects, open-source tools,
                or my own products. SEO isn&apos;t a side skill for me; it&apos;s core
                to how I think about product and distribution. The technical,
                structured-data, site-architecture kind that actually moves the needle.
              </p>
            </div>
          </AnimatedSection>

          {/* Section 2 — Builder roots */}
          <AnimatedSection className="mt-12">
            <h2 className="mb-4 text-2xl font-bold text-text-primary">
              Builder by Nature
            </h2>

            <div className="space-y-4 text-lg leading-relaxed text-text-secondary">
              <p>
                My father was a mechanical engineer, inventor, and entrepreneur
                &mdash; a Drexel grad who finished sixth in his class. He built things
                with his hands his entire life, and that influence runs deep. I carry
                forward the same mindset in everything I ship, even if my materials
                are data and code instead of steel and circuits.
              </p>

              <p>
                That means I default to building over theorizing. The best architecture
                is the one that&apos;s live and serving users, not the one still being
                debated in a design doc. I optimize for iteration speed, clean
                abstractions, and code that the next person (often future me) can
                actually read.
              </p>
            </div>
          </AnimatedSection>

          {/* Section 3 — Beyond code */}
          <AnimatedSection className="mt-12">
            <h2 className="mb-4 text-2xl font-bold text-text-primary">
              Beyond the Code
            </h2>

            <div className="space-y-4 text-lg leading-relaxed text-text-secondary">
              <p>
                Outside of work, I&apos;m into strength training, biohacking, and
                nutrition science. The same principles apply across all of it &mdash;
                progressive overload, consistent tracking, minimum effective dose. No
                shortcuts, just measurable inputs and honest assessment of outputs.
              </p>
            </div>
          </AnimatedSection>
        </article>

        {/* Key facts sidebar */}
        <aside className="lg:col-span-1">
          <AnimatedSection>
            <div className="rounded-xl border border-border bg-bg-secondary p-6 lg:sticky lg:top-24">
              <h2 className="mb-6 text-lg font-semibold text-text-primary">
                At a Glance
              </h2>

              <dl className="space-y-5">
                {KEY_FACTS.map((fact) => (
                  <div key={fact.label} className="flex gap-3">
                    <fact.icon
                      className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="text-sm font-medium text-text-secondary">
                        {fact.label}
                      </dt>
                      <dd className="mt-0.5 text-text-primary">{fact.value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </AnimatedSection>
        </aside>
      </div>
    </div>
  );
}
