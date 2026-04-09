import { Hero } from '@/components/sections/Hero';
import { PersonJsonLd, WebSiteJsonLd } from '@/components/seo/JsonLd';

export default function Home() {
  return (
    <main>
      <PersonJsonLd />
      <WebSiteJsonLd />
      <Hero />
    </main>
  );
}
