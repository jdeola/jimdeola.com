import { Github, Linkedin, Instagram, Twitter, Facebook, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PERSONAL_SOCIAL_LINKS, type SocialLink } from '@/lib/constants';

const iconMap: Record<string, LucideIcon> = {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
};

interface SocialLinksProps {
  links?: SocialLink[];
  className?: string;
}

export function SocialLinks({ links = PERSONAL_SOCIAL_LINKS, className }: SocialLinksProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      {links.map((link) => {
        const Icon = iconMap[link.icon];
        if (!Icon) return null;

        return (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.platform}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-text-secondary transition-colors hover:bg-white/5 hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-primary"
          >
            <Icon className="h-5 w-5" />
          </a>
        );
      })}
    </div>
  );
}
