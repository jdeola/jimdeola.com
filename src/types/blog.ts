export type Category = 'Tech' | 'AI' | 'SEO' | 'Fitness' | 'Business' | 'Biohacking';

export interface BlogPost {
  title: string;
  description: string;
  date: string;
  updated?: string;
  category: Category;
  tags?: string[];
  author: string;
  image?: string;
  published: boolean;
  slug: string;
  readingTime: number;
  content: string;
}

export interface Tag {
  name: string;
  count: number;
}
