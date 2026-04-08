import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { formatDate } from '@/lib/utils';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const result = await getPostBySlug(slug);

  if (!result) {
    return { title: 'Post Not Found' };
  }

  const { post } = result;

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://jimdeola.com/blog/${post.slug}`,
      type: 'article',
      images: [
        `/api/og?title=${encodeURIComponent(post.title)}&category=${encodeURIComponent(post.category)}`,
      ],
    },
    twitter: {
      card: 'summary_large_image',
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const result = await getPostBySlug(slug);

  if (!result) {
    notFound();
  }

  const { post, content } = result;

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Category badge */}
      <div className="mb-6">
        <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
          {post.category}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold leading-tight tracking-tight text-text-primary md:text-5xl">
        {post.title}
      </h1>

      {/* Meta row */}
      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-text-secondary">
        <span>{post.author}</span>
        <span aria-hidden="true">&middot;</span>
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span aria-hidden="true">&middot;</span>
        <span>{post.readingTime} min read</span>
      </div>

      {/* MDX content */}
      <div className="prose mt-12">
        {content}
      </div>

      {/* PostNavigation — built in S04-T05 */}
    </article>
  );
}
