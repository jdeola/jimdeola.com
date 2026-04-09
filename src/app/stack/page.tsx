import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';
import { TechStack } from '@/components/sections/TechStack';

export const metadata: Metadata = {
  title: 'Stack',
  description:
    "Jim Deola's tech stack — the tools, frameworks, and technologies powering modern web applications and AI solutions.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/stack`,
  },
  openGraph: {
    title: 'Stack | Jim Deola',
    description:
      "Jim Deola's tech stack — the tools, frameworks, and technologies powering modern web applications and AI solutions.",
    url: `${SITE_CONFIG.url}/stack`,
    siteName: SITE_CONFIG.name,
    type: 'website',
    images: ['/images/og-default.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stack | Jim Deola',
    description:
      "Jim Deola's tech stack — the tools, frameworks, and technologies powering modern web applications and AI solutions.",
    images: ['/images/og-default.png'],
  },
};

export default function StackPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <TechStack />
    </div>
  );
}
