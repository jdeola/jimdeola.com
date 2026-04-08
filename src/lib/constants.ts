export const SITE_CONFIG = {
  name: 'Jim Deola',
  fullName: 'James A. Deola Jr.',
  title: 'Jim Deola — Full-Stack Developer, AI Engineer & Founder',
  description:
    'Jim Deola is a full-stack developer, AI engineer, SEO strategist, and founder based in South Jersey.',
  url: 'https://jimdeola.com',
  author: 'Jim Deola',
  email: 'jim@jimdeola.com',
  location: 'South Jersey, USA',
} as const;

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'Stack', href: '/stack' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
] as const;

export const SOCIAL_LINKS = [
  { platform: 'LinkedIn', url: 'https://linkedin.com/in/jimdeola', icon: 'Linkedin' },
  { platform: 'GitHub', url: 'https://github.com/jimdeola', icon: 'Github' },
  { platform: 'GitHub (Rhize)', url: 'https://github.com/rhize-inc', icon: 'Github' },
  { platform: 'Instagram', url: 'https://instagram.com/jimdeola', icon: 'Instagram' },
  { platform: 'X', url: 'https://x.com/jimdeola', icon: 'Twitter' },
] as const;

export const BLOG_CATEGORIES = [
  'Tech',
  'AI',
  'SEO',
  'Fitness',
  'Business',
  'Biohacking',
] as const;

export const TECH_STACK = {
  Languages: ['TypeScript', 'Python', 'JavaScript', 'SQL'],
  Frameworks: ['Next.js', 'React', 'Node.js', 'Express'],
  'AI/ML': ['OpenAI', 'LangChain', 'Anthropic Claude', 'Hugging Face'],
  Databases: ['PostgreSQL', 'Redis', 'MongoDB'],
  'Cloud/DevOps': ['Vercel', 'AWS', 'Docker', 'GitHub Actions'],
  Tools: ['Tailwind CSS', 'Framer Motion', 'Prisma', 'Git'],
  'CMS/Commerce': ['Sanity', 'Shopify', 'WordPress', 'Contentful'],
} as const;
