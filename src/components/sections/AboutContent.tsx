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
    value: 'Rhize Media, Freeform Fitness',
  },
  {
    icon: Crosshair,
    label: 'Focus',
    value: 'Full-Stack Dev, AI Engineering, SEO Strategy, Fitness Coaching',
  },
  {
    icon: Wrench,
    label: 'Currently Building',
    value: 'jimdeola.com',
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
                I&apos;m a full-stack developer and AI engineer who builds things that
                work. Not &ldquo;works in staging&rdquo; &mdash; actually works, at
                scale, under real conditions. I run{' '}
                <strong className="text-text-primary">Rhize Media</strong>, a web
                development and AI agency, and{' '}
                <strong className="text-text-primary">Freeform Fitness</strong>, a
                personal training business. Both are based in South Jersey.
              </p>

              <p>
                My stack centers on TypeScript, Next.js, and React on the frontend,
                with Python and Node.js powering backend services and AI integrations.
                I&apos;ve spent years in SEO strategy &mdash; not the
                &ldquo;keyword stuffing&rdquo; kind, but the technical, structured-data,
                site-architecture kind that actually moves the needle. Most of my
                work lives at the intersection of engineering and growth.
              </p>

              <p>
                When I&apos;m not writing code, I&apos;m coaching clients through
                strength training programs or experimenting with biohacking protocols.
                Fitness isn&apos;t a side hobby &mdash; it&apos;s a discipline I take as
                seriously as shipping production code.
              </p>
            </div>
          </AnimatedSection>

          {/* Section 2 — Jr. Distinction */}
          <AnimatedSection className="mt-12">
            <h2 className="mb-4 text-2xl font-bold text-text-primary">
              A Note on the Name
            </h2>

            <div className="space-y-4 text-lg leading-relaxed text-text-secondary">
              <p>
                My full name is{' '}
                <strong className="text-text-primary">James A. Deola Jr.</strong> If
                you&apos;ve searched &ldquo;Jim Deola&rdquo; or &ldquo;James
                Deola&rdquo; before, you may have seen results for my father,{' '}
                <strong className="text-text-primary">James A. Deola Sr.</strong> He was
                a mechanical engineer and inventor who passed away in 2024. He built
                things with his hands his entire life &mdash; a trait I&apos;d like to
                think carried over, even if my materials are pixels and data instead of
                steel and circuits.
              </p>

              <p>
                This site is mine &mdash; the tech founder, developer, and fitness coach.
                If you&apos;re looking for information about my father&apos;s engineering
                work, I&apos;m happy to point you in the right direction.
              </p>
            </div>
          </AnimatedSection>

          {/* Section 4 — Philosophy */}
          <AnimatedSection className="mt-12">
            <h2 className="mb-4 text-2xl font-bold text-text-primary">
              How I Think About Building
            </h2>

            <div className="space-y-4 text-lg leading-relaxed text-text-secondary">
              <p>
                I believe in shipping. Not recklessly &mdash; with craft, with
                performance budgets, with tests &mdash; but shipping nonetheless. The
                best architecture is the one that&apos;s live and serving users, not
                the one that&apos;s still being debated in a design doc. I optimize for
                iteration speed, clean abstractions, and code that the next person
                (often future me) can actually read.
              </p>

              <p>
                The same philosophy applies to fitness. Progressive overload,
                consistent tracking, minimum effective dose. No magic supplements, no
                shortcuts &mdash; just measurable inputs and honest assessment of
                outputs. Whether I&apos;m tuning a Lighthouse score or a training
                program, the method is the same: measure, adjust, repeat.
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
