import { Github, Linkedin, Instagram, Twitter, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SOCIAL_LINKS } from '@/lib/constants';

const iconMap: Record<string, LucideIcon> = {
  Github,
  Linkedin,
  Instagram,
  Twitter,
};

interface SocialLinksProps {
  className?: string;
}

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      {SOCIAL_LINKS.map((link) => {
        const Icon = iconMap[link.icon];
        if (!Icon) return null;

        return (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.platform}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-text-secondary transition-colors hover:bg-white/5 hover:text-text-primary"
          >
            <Icon className="h-5 w-5" />
          </a>
        );
      })}
    </div>
  );
}
