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

export type SocialLink = {
  platform: string;
  url: string;
  icon: string;
};

export const PERSONAL_SOCIAL_LINKS: SocialLink[] = [
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/jim-deola-jr/', icon: 'Linkedin' },
  { platform: 'GitHub', url: 'https://github.com/jimdeola', icon: 'Github' },
  { platform: 'Instagram', url: 'https://www.instagram.com/ames_dean', icon: 'Instagram' },
  { platform: 'X', url: 'https://x.com/ames_deann', icon: 'Twitter' },
  { platform: 'Facebook', url: 'https://www.facebook.com/jim.deola.22', icon: 'Facebook' },
];

export const BUSINESSES = [
  {
    title: 'Rhize Media',
    tagline: 'Web Development · AI · SEO · Automation',
    description:
      'A full-service digital agency building high-performance websites, AI-powered tools, and SEO strategies that drive measurable growth. We help businesses modernize their web presence and automate workflows.',
    href: 'https://rhize.media',
    icon: 'Globe',
    gradient: 'from-accent to-accent-secondary',
    socials: [
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/company/rhize-media/', icon: 'Linkedin' },
      { platform: 'GitHub', url: 'https://github.com/rhize-inc', icon: 'Github' },
      { platform: 'Instagram', url: 'https://www.instagram.com/rhizemedia', icon: 'Instagram' },
    ] as SocialLink[],
  },
  {
    title: 'Freeform Nutrition',
    tagline: 'Personal Fitness Coaching',
    description:
      'Science-based personal fitness coaching tailored to your goals, schedule, and lifestyle. Whether you want to build strength, lose weight, or improve overall health, we create a plan that works for you.',
    href: 'https://freeformnutrition.net',
    icon: 'Dumbbell',
    gradient: 'from-accent-secondary to-success',
    socials: [
      { platform: 'Instagram', url: 'https://www.instagram.com/freeformnutrition', icon: 'Instagram' },
      { platform: 'Facebook', url: 'https://www.facebook.com/FreeFormNutrition/', icon: 'Facebook' },
    ] as SocialLink[],
  },
] as const;

/** All social URLs — used for JSON-LD sameAs and footer */
export const ALL_SOCIAL_LINKS: SocialLink[] = [
  ...PERSONAL_SOCIAL_LINKS,
  ...BUSINESSES.flatMap((b) => b.socials),
];

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
