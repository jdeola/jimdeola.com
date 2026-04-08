import { Feed } from 'feed';
import { getAllPosts } from '@/lib/blog';
import { SITE_CONFIG } from '@/lib/constants';

export async function GET() {
  const posts = await getAllPosts();

  const feed = new Feed({
    title: "Jim Deola's Blog",
    description: SITE_CONFIG.description,
    id: SITE_CONFIG.url,
    link: SITE_CONFIG.url,
    language: 'en',
    copyright: `All rights reserved ${new Date().getFullYear()}, ${SITE_CONFIG.name}`,
    author: {
      name: SITE_CONFIG.name,
      email: SITE_CONFIG.email,
      link: SITE_CONFIG.url,
    },
    feedLinks: {
      rss2: `${SITE_CONFIG.url}/feed.xml`,
    },
  });

  for (const post of posts) {
    feed.addItem({
      title: post.title,
      id: `${SITE_CONFIG.url}/blog/${post.slug}`,
      link: `${SITE_CONFIG.url}/blog/${post.slug}`,
      description: post.description,
      date: new Date(post.date),
      category: [{ name: post.category }],
      author: [
        {
          name: post.author,
          email: SITE_CONFIG.email,
          link: SITE_CONFIG.url,
        },
      ],
    });
  }

  return new Response(feed.rss2(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
