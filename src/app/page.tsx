import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';
import { Hero } from '@/components/sections/Hero';
import { PersonJsonLd, WebSiteJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: {
    absolute: 'Jim Deola — Full-Stack Developer, AI Engineer & Founder',
  },
  description:
    'Jim Deola is a full-stack developer, AI engineer, SEO strategist, fitness coach, and founder based in South Jersey. Building high-performance web applications and AI-powered solutions.',
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    title: 'Jim Deola — Full-Stack Developer, AI Engineer & Founder',
    description:
      'Jim Deola is a full-stack developer, AI engineer, SEO strategist, fitness coach, and founder based in South Jersey. Building high-performance web applications and AI-powered solutions.',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    type: 'website',
    images: ['/images/og-default.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jim Deola — Full-Stack Developer, AI Engineer & Founder',
    description:
      'Jim Deola is a full-stack developer, AI engineer, SEO strategist, fitness coach, and founder based in South Jersey. Building high-performance web applications and AI-powered solutions.',
    images: ['/images/og-default.png'],
  },
};

export default function Home() {
  return (
    <main>
      <PersonJsonLd />
      <WebSiteJsonLd />
      <Hero />
    </main>
  );
}
