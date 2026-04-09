import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';
import { getAllPosts } from '@/lib/blog';
import { PostGrid } from '@/components/blog/PostGrid';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Articles by Jim Deola on full-stack development, AI engineering, SEO strategy, fitness, and building businesses.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/blog`,
  },
  openGraph: {
    title: 'Blog | Jim Deola',
    description:
      'Articles by Jim Deola on full-stack development, AI engineering, SEO strategy, fitness, and building businesses.',
    url: `${SITE_CONFIG.url}/blog`,
    siteName: SITE_CONFIG.name,
    type: 'website',
    images: ['/images/og-default.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Jim Deola',
    description:
      'Articles by Jim Deola on full-stack development, AI engineering, SEO strategy, fitness, and building businesses.',
    images: ['/images/og-default.png'],
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-4xl font-bold tracking-tight text-text-primary">
        Blog
      </h1>

      {posts.length > 0 ? (
        <PostGrid posts={posts} />
      ) : (
        <div className="rounded-xl border border-white/5 bg-bg-secondary px-6 py-16 text-center">
          <p className="text-lg font-medium text-text-primary">
            Posts coming soon
          </p>
          <p className="mt-2 text-sm text-text-secondary">
            I&apos;m working on new content about development, AI, SEO, and
            more. Check back shortly.
          </p>
        </div>
      )}
    </section>
  );
}
