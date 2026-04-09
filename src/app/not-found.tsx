'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function NotFound() {
  const prefersReducedMotion = useReducedMotion();

  const fadeIn = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: 'easeOut' },
      };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <motion.div {...fadeIn}>
        <h1 className="text-[8rem] font-bold leading-none tracking-tighter text-accent sm:text-[10rem]">
          404
        </h1>
        <h2 className="mt-4 text-2xl font-semibold text-text-primary sm:text-3xl">
          Page Not Found
        </h2>
        <p className="mx-auto mt-4 max-w-md text-text-secondary">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8">
          <Link href="/">
            <Button as="button" variant="primary" size="lg">
              Go Home
            </Button>
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
