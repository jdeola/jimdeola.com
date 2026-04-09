import Link from 'next/link';
import {
  Linkedin,
  Github,
  Instagram,
  Twitter,
  Facebook,
  type LucideIcon,
} from 'lucide-react';
import { NAV_LINKS, ALL_SOCIAL_LINKS, SITE_CONFIG } from '@/lib/constants';

const ICON_MAP: Record<string, LucideIcon> = {
  Linkedin,
  Github,
  Instagram,
  Twitter,
  Facebook,
};

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-bg-secondary">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Site Links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {ALL_SOCIAL_LINKS.map((link) => {
              const Icon = ICON_MAP[link.icon];
              if (!Icon) return null;
              return (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.platform}
                  className="rounded-md text-text-secondary transition-colors hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-secondary"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-white/5 pt-8">
          <p className="text-sm text-text-secondary">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
