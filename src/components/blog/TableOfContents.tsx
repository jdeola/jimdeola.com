'use client';

import { useState } from 'react';
import { List, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: Heading[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav
      aria-label="Table of Contents"
      className="rounded-lg border border-border bg-bg-secondary p-4"
    >
      {/* Mobile toggle */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-sm font-medium text-text-primary md:hidden"
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-2">
          <List className="h-4 w-4" />
          Table of Contents
        </span>
        {isOpen ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
      </button>

      {/* Desktop label */}
      <p className="mb-3 hidden items-center gap-2 text-sm font-medium text-text-primary md:flex">
        <List className="h-4 w-4" />
        Table of Contents
      </p>

      {/* Heading list */}
      <ul
        className={cn(
          'space-y-1',
          isOpen ? 'mt-3 block' : 'hidden md:block'
        )}
      >
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={cn(
                'block rounded px-2 py-1 text-sm text-text-secondary transition-colors hover:bg-bg-tertiary hover:text-text-primary',
                heading.level === 3 && 'ml-4'
              )}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
