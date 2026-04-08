import type { Metadata } from 'next';
import { TechStack } from '@/components/sections/TechStack';

export const metadata: Metadata = {
  title: 'Stack',
  description:
    "Jim Deola's tech stack — the tools, frameworks, and technologies powering modern web applications and AI solutions.",
  openGraph: {
    title: 'Stack | Jim Deola',
    description:
      "Jim Deola's tech stack — the tools, frameworks, and technologies powering modern web applications and AI solutions.",
    url: 'https://jimdeola.com/stack',
  },
};

export default function StackPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <TechStack />
    </main>
  );
}
