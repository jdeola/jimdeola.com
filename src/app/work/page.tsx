import type { Metadata } from 'next';
import { WorkCards } from '@/components/sections/WorkCards';

export const metadata: Metadata = {
  title: 'Work',
  description:
    "Jim Deola's businesses — Rhize Media (web development, AI, SEO agency) and Freeform Fitness (personal fitness coaching).",
  openGraph: {
    title: 'Work | Jim Deola',
    description:
      "Jim Deola's businesses — Rhize Media (web development, AI, SEO agency) and Freeform Fitness (personal fitness coaching).",
    url: 'https://jimdeola.com/work',
  },
};

export default function WorkPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <WorkCards />
    </main>
  );
}
