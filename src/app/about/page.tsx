import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';
import { AboutContent } from '@/components/sections/AboutContent';
import { PersonJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Jim Deola — full-stack developer, AI engineer, SEO strategist, and founder of Rhize Media and Freeform Nutrition, based in South Jersey.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/about`,
  },
  openGraph: {
    title: 'About | Jim Deola',
    description:
      'Jim Deola — full-stack developer, AI engineer, SEO strategist, and founder of Rhize Media and Freeform Nutrition, based in South Jersey.',
    url: `${SITE_CONFIG.url}/about`,
    siteName: SITE_CONFIG.name,
    type: 'website',
    images: ['/images/og-default.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Jim Deola',
    description:
      'Jim Deola — full-stack developer, AI engineer, SEO strategist, and founder of Rhize Media and Freeform Nutrition, based in South Jersey.',
    images: ['/images/og-default.png'],
  },
};

export default function AboutPage() {
  return (
    <>
      <PersonJsonLd />
      <AboutContent />
    </>
  );
}
