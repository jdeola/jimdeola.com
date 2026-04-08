import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PostLink {
  title: string;
  slug: string;
}

interface PostNavigationProps {
  prevPost?: PostLink;
  nextPost?: PostLink;
}

export function PostNavigation({ prevPost, nextPost }: PostNavigationProps) {
  if (!prevPost && !nextPost) {
    return null;
  }

  return (
    <nav
      aria-label="Post navigation"
      className="flex items-stretch gap-4 border-t border-border pt-8"
    >
      {prevPost ? (
        <Link
          href={`/blog/${prevPost.slug}`}
          className="group flex flex-1 items-center gap-3 rounded-lg border border-border bg-bg-secondary p-4 transition-colors hover:border-border-light hover:bg-bg-tertiary"
        >
          <ChevronLeft className="h-5 w-5 shrink-0 text-text-secondary transition-transform group-hover:-translate-x-0.5" />
          <div className="min-w-0">
            <p className="text-xs text-text-secondary">Previous</p>
            <p className="truncate text-sm font-medium text-text-primary">
              {prevPost.title}
            </p>
          </div>
        </Link>
      ) : (
        <div className="flex-1" />
      )}

      {nextPost ? (
        <Link
          href={`/blog/${nextPost.slug}`}
          className="group flex flex-1 items-center justify-end gap-3 rounded-lg border border-border bg-bg-secondary p-4 text-right transition-colors hover:border-border-light hover:bg-bg-tertiary"
        >
          <div className="min-w-0">
            <p className="text-xs text-text-secondary">Next</p>
            <p className="truncate text-sm font-medium text-text-primary">
              {nextPost.title}
            </p>
          </div>
          <ChevronRight className="h-5 w-5 shrink-0 text-text-secondary transition-transform group-hover:translate-x-0.5" />
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </nav>
  );
}
