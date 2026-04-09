import { SITE_CONFIG, ALL_SOCIAL_LINKS } from '@/lib/constants';
import type { BlogPost } from '@/types/blog';

export function PersonJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE_CONFIG.name,
    alternateName: [
      'James A. Deola Jr.',
      'James Deola',
      'James A. Deola',
      'Jim Deola Jr.',
    ],
    jobTitle: [
      'Full-Stack Developer',
      'AI Engineer',
      'SEO Strategist',
      'Fitness Coach',
      'Founder',
    ],
    url: SITE_CONFIG.url,
    sameAs: ALL_SOCIAL_LINKS.map((link) => link.url),
    worksFor: [
      {
        '@type': 'Organization',
        name: 'Rhize Media',
        url: 'https://rhize.media',
      },
      {
        '@type': 'Organization',
        name: 'Freeform Nutrition',
        url: 'https://freeformnutrition.net',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'NJ',
      addressCountry: 'US',
    },
    knowsAbout: [
      'Full-Stack Development',
      'Artificial Intelligence',
      'SEO',
      'TypeScript',
      'React',
      'Next.js',
      'Fitness Coaching',
      'Biohacking',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebSiteJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_CONFIG.url}/blog?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BlogPostingJsonLd({ post }: { post: BlogPost }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    author: {
      '@type': 'Person',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    datePublished: post.date,
    dateModified: post.updated || post.date,
    url: `${SITE_CONFIG.url}/blog/${post.slug}`,
    image: `${SITE_CONFIG.url}/api/og?title=${encodeURIComponent(post.title)}&category=${encodeURIComponent(post.category)}`,
    publisher: {
      '@type': 'Person',
      name: SITE_CONFIG.name,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
