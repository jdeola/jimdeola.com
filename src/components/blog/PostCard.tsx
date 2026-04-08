import Link from 'next/link';
import type { BlogPost } from '@/types/blog';
import { formatDate } from '@/lib/utils';
import { Card } from '@/components/ui/Card';
import { CategoryBadge } from '@/components/blog/CategoryBadge';

interface PostCardProps {
  post: BlogPost;
}

export function PostCard({ post }: PostCardProps) {
  const excerpt =
    post.description.length > 160
      ? `${post.description.slice(0, 160)}...`
      : post.description;

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <Card hover className="flex h-full flex-col">
        <div className="mb-3 flex items-center gap-3">
          <CategoryBadge category={post.category} />
          <span className="text-sm text-text-secondary">
            {post.readingTime} min read
          </span>
        </div>

        <h2 className="mb-2 text-xl font-semibold text-text-primary transition-colors group-hover:text-accent">
          {post.title}
        </h2>

        <p className="mb-4 flex-1 text-sm leading-relaxed text-text-secondary">
          {excerpt}
        </p>

        <time
          dateTime={post.date}
          className="text-sm text-text-secondary"
        >
          {formatDate(post.date)}
        </time>
      </Card>
    </Link>
  );
}
