'use client';

import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TECH_STACK } from '@/lib/constants';

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

function TechItem({
  name,
  index,
  shouldAnimate,
}: {
  name: string;
  index: number;
  shouldAnimate: boolean;
}) {
  if (!shouldAnimate) {
    return (
      <div className="flex items-center gap-3 rounded-lg border border-border bg-bg-secondary p-4 transition-colors hover:border-border-light">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-bg-tertiary text-xs font-medium text-accent">
          {name.charAt(0)}
        </div>
        <span className="text-sm font-medium text-text-primary">{name}</span>
      </div>
    );
  }

  return (
    <motion.div
      variants={itemVariants}
      className="flex items-center gap-3 rounded-lg border border-border bg-bg-secondary p-4 transition-colors hover:border-border-light"
    >
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-bg-tertiary text-xs font-medium text-accent">
        {name.charAt(0)}
      </div>
      <span className="text-sm font-medium text-text-primary">{name}</span>
    </motion.div>
  );
}

function CategoryGrid({
  items,
  shouldAnimate,
}: {
  items: readonly string[];
  shouldAnimate: boolean;
}) {
  if (!shouldAnimate) {
    return (
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {items.map((item, index) => (
          <TechItem key={item} name={item} index={index} shouldAnimate={false} />
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.06,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {items.map((item, index) => (
        <TechItem key={item} name={item} index={index} shouldAnimate={true} />
      ))}
    </motion.div>
  );
}

const categories = Object.entries(TECH_STACK) as [string, readonly string[]][];

export function TechStack() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div>
      <h1 className="mb-12 text-4xl font-bold text-text-primary sm:text-5xl">
        Tech Stack
      </h1>

      <div className="space-y-12">
        {categories.map(([category, items]) => (
          <AnimatedSection key={category}>
            <SectionHeading>{category}</SectionHeading>
            <CategoryGrid items={items} shouldAnimate={!prefersReducedMotion} />
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
