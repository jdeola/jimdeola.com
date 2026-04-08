import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export function Card({ className, hover = false, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-white/5 bg-bg-secondary p-6',
        hover &&
          'transition-all duration-300 hover:translate-y-[-2px] hover:border-accent/20',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
