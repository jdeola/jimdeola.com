import type { BlogPost } from '@/types/blog';
import { PostCard } from '@/components/blog/PostCard';

interface PostGridProps {
  posts: BlogPost[];
}

export function PostGrid({ posts }: PostGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
