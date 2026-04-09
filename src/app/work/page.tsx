import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';
import { WorkCards } from '@/components/sections/WorkCards';

export const metadata: Metadata = {
  title: 'Work',
  description:
    "Jim Deola's businesses — Rhize Media (web development, AI, SEO agency) and Freeform Fitness (personal fitness coaching).",
  alternates: {
    canonical: `${SITE_CONFIG.url}/work`,
  },
  openGraph: {
    title: 'Work | Jim Deola',
    description:
      "Jim Deola's businesses — Rhize Media (web development, AI, SEO agency) and Freeform Fitness (personal fitness coaching).",
    url: `${SITE_CONFIG.url}/work`,
    siteName: SITE_CONFIG.name,
    type: 'website',
    images: ['/images/og-default.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Work | Jim Deola',
    description:
      "Jim Deola's businesses — Rhize Media (web development, AI, SEO agency) and Freeform Fitness (personal fitness coaching).",
    images: ['/images/og-default.png'],
  },
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <WorkCards />
    </div>
  );
}
