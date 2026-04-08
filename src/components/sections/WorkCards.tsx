'use client';

import { Globe, Dumbbell, ExternalLink } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const businesses = [
  {
    icon: Globe,
    title: 'Rhize Media',
    tagline: 'Web Development · AI · SEO · Automation',
    description:
      'A full-service digital agency building high-performance websites, AI-powered tools, and SEO strategies that drive measurable growth. We help businesses modernize their web presence and automate workflows.',
    href: 'https://rhize.media',
    gradient: 'from-accent to-accent-secondary',
  },
  {
    icon: Dumbbell,
    title: 'Freeform Fitness',
    tagline: 'Personal Fitness Coaching',
    description:
      'Science-based personal fitness coaching tailored to your goals, schedule, and lifestyle. Whether you want to build strength, lose weight, or improve overall health, we create a plan that works for you.',
    href: 'https://freeformnutrition.net',
    gradient: 'from-accent-secondary to-success',
  },
] as const;

export function WorkCards() {
  return (
    <section>
      <AnimatedSection>
        <h1 className="mb-12 text-4xl font-bold text-text-primary sm:text-5xl">
          What I&apos;m Building
        </h1>
      </AnimatedSection>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {businesses.map((biz) => (
          <AnimatedSection key={biz.title}>
            <Card hover className="flex h-full flex-col">
              <div
                className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${biz.gradient}`}
              >
                <biz.icon className="h-7 w-7 text-white" />
              </div>

              <h2 className="text-2xl font-bold text-text-primary">
                {biz.title}
              </h2>

              <p className="mt-1 text-sm font-medium text-accent-secondary">
                {biz.tagline}
              </p>

              <p className="mt-4 flex-1 text-text-secondary">
                {biz.description}
              </p>

              <div className="mt-6">
                <Button
                  as="a"
                  href={biz.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="md"
                >
                  Visit {biz.title}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
