import { compileMDX as compileMDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import type { ReactElement } from 'react';
import type { MDXComponents } from 'mdx/types';

interface CompileMDXResult {
  content: ReactElement;
  frontmatter: Record<string, unknown>;
}

export async function compileMDX(
  source: string,
  components?: MDXComponents
): Promise<CompileMDXResult> {
  const result = await compileMDXRemote<Record<string, unknown>>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          [
            rehypePrettyCode,
            {
              theme: 'github-dark',
              keepBackground: true,
            },
          ],
        ],
      },
    },
    components,
  });

  return {
    content: result.content,
    frontmatter: result.frontmatter,
  };
}
