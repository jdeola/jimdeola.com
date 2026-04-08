import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import type { ReactElement } from 'react';
import type { BlogPost, Category, Tag } from '@/types/blog';
import { readingTime } from '@/lib/utils';
import { compileMDX } from '@/lib/mdx';

const BLOG_DIR = path.join(process.cwd(), 'src', 'content', 'blog');

function getBlogFiles(): string[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith('.mdx'));
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const files = getBlogFiles();

  const posts: BlogPost[] = files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, '');
      const filePath = path.join(BLOG_DIR, filename);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);

      return {
        title: data.title ?? '',
        description: data.description ?? '',
        date: data.date ?? '',
        updated: data.updated,
        category: data.category as Category,
        tags: data.tags,
        author: data.author ?? 'Jim Deola',
        image: data.image,
        published: data.published ?? false,
        slug,
        readingTime: readingTime(content),
        content,
      } satisfies BlogPost;
    })
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export async function getPostBySlug(
  slug: string
): Promise<{ post: BlogPost; content: ReactElement } | null> {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content: rawContent } = matter(fileContent);

  if (!data.published) {
    return null;
  }

  const { content } = await compileMDX(rawContent);

  const post: BlogPost = {
    title: data.title ?? '',
    description: data.description ?? '',
    date: data.date ?? '',
    updated: data.updated,
    category: data.category as Category,
    tags: data.tags,
    author: data.author ?? 'Jim Deola',
    image: data.image,
    published: data.published ?? false,
    slug,
    readingTime: readingTime(rawContent),
    content: rawContent,
  };

  return { post, content };
}

export async function getCategories(): Promise<Category[]> {
  const posts = await getAllPosts();
  const categories = new Set<Category>();

  for (const post of posts) {
    categories.add(post.category);
  }

  return Array.from(categories);
}

export async function getTags(): Promise<Tag[]> {
  const posts = await getAllPosts();
  const tagCounts = new Map<string, number>();

  for (const post of posts) {
    if (post.tags) {
      for (const tag of post.tags) {
        tagCounts.set(tag, (tagCounts.get(tag) ?? 0) + 1);
      }
    }
  }

  return Array.from(tagCounts.entries()).map(([name, count]) => ({
    name,
    count,
  }));
}

export async function getPostsByCategory(
  category: string
): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => post.category === category);
}

export async function getPostsByTag(tag: string): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => post.tags?.includes(tag));
}

export interface Heading {
  id: string;
  text: string;
  level: number;
}

export function extractHeadings(content: string): Heading[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: Heading[] = [];
  let match: RegExpExecArray | null;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-');

    headings.push({ id, text, level });
  }

  return headings;
}
