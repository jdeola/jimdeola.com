import type { Metadata } from 'next';
import { AboutContent } from '@/components/sections/AboutContent';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Jim Deola — full-stack developer, AI engineer, fitness coach, and founder of Rhize Media and Freeform Fitness, based in South Jersey.',
  openGraph: {
    title: 'About | Jim Deola',
    description:
      'Jim Deola — full-stack developer, AI engineer, fitness coach, and founder of Rhize Media and Freeform Fitness, based in South Jersey.',
    url: 'https://jimdeola.com/about',
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
