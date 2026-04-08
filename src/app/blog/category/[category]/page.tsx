import type { Metadata } from 'next';
import Link from 'next/link';
import { getCategories, getPostsByCategory } from '@/lib/blog';
import { PostGrid } from '@/components/blog/PostGrid';

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((category) => ({
    category: category.toLowerCase(),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const name = decodeURIComponent(category);
  const displayName = name.charAt(0).toUpperCase() + name.slice(1);

  return {
    title: `${displayName} Articles`,
    description: `Articles by Jim Deola about ${displayName}.`,
    openGraph: {
      title: `${displayName} Articles | Jim Deola`,
      description: `Articles by Jim Deola about ${displayName}.`,
      url: `https://jimdeola.com/blog/category/${category}`,
      type: 'website',
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const name = decodeURIComponent(category);
  const displayName = name.charAt(0).toUpperCase() + name.slice(1);

  // Category values stored in posts are title-case (e.g. "Tech", "AI")
  // Match case-insensitively by comparing lowercased slug to lowercased category
  const allByCategory = await getPostsByCategory(displayName);
  // Fallback: try uppercase match for abbreviations like "AI", "SEO"
  const posts =
    allByCategory.length > 0
      ? allByCategory
      : await getPostsByCategory(name.toUpperCase());

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
        Category: {displayName}
      </h1>

      {posts.length > 0 ? (
        <PostGrid posts={posts} />
      ) : (
        <div className="rounded-xl border border-white/5 bg-bg-secondary px-6 py-16 text-center">
          <p className="text-lg font-medium text-text-primary">
            No posts in this category yet
          </p>
          <p className="mt-2 text-sm text-text-secondary">
            Check back soon for new {displayName.toLowerCase()} articles.
          </p>
        </div>
      )}
    </section>
  );
}
