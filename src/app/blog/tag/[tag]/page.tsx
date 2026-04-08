import type { Metadata } from 'next';
import Link from 'next/link';
import { getTags, getPostsByTag } from '@/lib/blog';
import { PostGrid } from '@/components/blog/PostGrid';

interface Props {
  params: Promise<{ tag: string }>;
}

export async function generateStaticParams() {
  const tags = await getTags();
  return tags.map((tag) => ({
    tag: tag.name.toLowerCase(),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;
  const name = decodeURIComponent(tag);

  return {
    title: `Posts tagged "${name}"`,
    description: `Articles by Jim Deola tagged with "${name}".`,
    openGraph: {
      title: `Posts tagged "${name}" | Jim Deola`,
      description: `Articles by Jim Deola tagged with "${name}".`,
      url: `https://jimdeola.com/blog/tag/${tag}`,
      type: 'website',
    },
  };
}

export default async function TagPage({ params }: Props) {
  const { tag } = await params;
  const name = decodeURIComponent(tag);
  const posts = await getPostsByTag(name);

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Link
          href="/blog"
          className="text-sm text-text-secondary transition-colors hover:text-accent"
        >
          &larr; Back to Blog
        </Link>
      </div>

      <h1 className="mb-8 text-4xl font-bold tracking-tight text-text-primary">
        Tag: {name}
      </h1>

      {posts.length > 0 ? (
        <PostGrid posts={posts} />
      ) : (
        <div className="rounded-xl border border-white/5 bg-bg-secondary px-6 py-16 text-center">
          <p className="text-lg font-medium text-text-primary">
            No posts with this tag yet
          </p>
          <p className="mt-2 text-sm text-text-secondary">
            Check back soon for new articles.
          </p>
        </div>
      )}
    </section>
  );
}
