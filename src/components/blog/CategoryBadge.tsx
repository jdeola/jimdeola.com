import Link from 'next/link';
import { cn } from '@/lib/utils';

interface CategoryBadgeProps {
  category: string;
  className?: string;
}

export function CategoryBadge({ category, className }: CategoryBadgeProps) {
  return (
    <Link
      href={`/blog/category/${category.toLowerCase()}`}
      className={cn(
        'inline-block rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent transition-colors hover:bg-accent/20',
        className
      )}
    >
      {category}
    </Link>
  );
}
