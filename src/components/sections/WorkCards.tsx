'use client';

import { Globe, Dumbbell, ExternalLink, type LucideIcon } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { SocialLinks } from '@/components/ui/SocialLinks';
import { BUSINESSES } from '@/lib/constants';

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Dumbbell,
};

export function WorkCards() {
  return (
    <section>
      <AnimatedSection>
        <h1 className="mb-12 text-4xl font-bold text-text-primary sm:text-5xl">
          What I&apos;m Building
        </h1>
      </AnimatedSection>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {BUSINESSES.map((biz) => {
          const Icon = iconMap[biz.icon];
          return (
            <AnimatedSection key={biz.title}>
              <Card hover className="flex h-full flex-col">
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${biz.gradient}`}
                >
                  {Icon && <Icon className="h-7 w-7 text-white" />}
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

                <div className="mt-6 flex items-center justify-between">
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

                  {biz.socials.length > 0 && (
                    <SocialLinks links={[...biz.socials]} />
                  )}
                </div>
              </Card>
            </AnimatedSection>
          );
        })}
      </div>
    </section>
  );
}
