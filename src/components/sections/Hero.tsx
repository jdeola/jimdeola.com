'use client';

import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Button } from '@/components/ui/Button';
import { SocialLinks } from '@/components/ui/SocialLinks';

function AnimatedContent() {
  const items = [
    {
      key: 'heading',
      content: (
        <h1 className="text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
          Jim Deola
        </h1>
      ),
    },
    {
      key: 'tagline',
      content: (
        <p className="text-xl text-text-secondary md:text-2xl">
          Full-Stack Developer &middot; AI Engineer &middot; Founder
        </p>
      ),
    },
    {
      key: 'subtitle',
      content: (
        <p className="max-w-xl text-base text-text-secondary/80 md:text-lg">
          Building at the intersection of technology, business, and fitness.
          Turning ideas into products that scale.
        </p>
      ),
    },
    {
      key: 'ctas',
      content: (
        <div className="flex flex-wrap items-center gap-4">
          <Button as="a" href="/work" size="lg" variant="primary">
            See My Work
          </Button>
          <Button as="a" href="/blog" size="lg" variant="secondary">
            Read the Blog
          </Button>
        </div>
      ),
    },
    {
      key: 'social',
      content: <SocialLinks />,
    },
  ];

  return (
    <>
      {items.map((item, i) => (
        <motion.div
          key={item.key}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: i * 0.2,
            ease: 'easeOut',
          }}
        >
          {item.content}
        </motion.div>
      ))}
    </>
  );
}

function StaticContent() {
  return (
    <>
      <h1 className="text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
        Jim Deola
      </h1>
      <p className="text-xl text-text-secondary md:text-2xl">
        Full-Stack Developer &middot; AI Engineer &middot; Founder
      </p>
      <p className="max-w-xl text-base text-text-secondary/80 md:text-lg">
        Building at the intersection of technology, business, and fitness.
        Turning ideas into products that scale.
      </p>
      <div className="flex flex-wrap items-center gap-4">
        <Button as="a" href="/work" size="lg" variant="primary">
          See My Work
        </Button>
        <Button as="a" href="/blog" size="lg" variant="secondary">
          Read the Blog
        </Button>
      </div>
      <SocialLinks />
    </>
  );
}

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Subtle background gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-accent)/8%_0%,_transparent_70%)]"
        style={
          prefersReducedMotion
            ? undefined
            : {
                animation: 'hero-glow 8s ease-in-out infinite alternate',
              }
        }
      />

      <div className="relative z-10 flex flex-col items-center gap-6 text-center md:flex-row md:gap-16 md:text-left">
        {/* Photo placeholder */}
        <div className="flex-shrink-0">
          <div className="h-40 w-40 rounded-full border border-border bg-gradient-to-br from-accent/20 to-accent-secondary/20 md:h-52 md:w-52" />
        </div>

        {/* Text content */}
        <div className="flex flex-col gap-5">
          {prefersReducedMotion ? <StaticContent /> : <AnimatedContent />}
        </div>
      </div>
    </section>
  );
}
