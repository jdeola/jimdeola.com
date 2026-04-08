import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ children, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn('mb-8', className)}>
      <h2 className="text-3xl font-bold text-text-primary">{children}</h2>
      {subtitle && (
        <p className="mt-2 text-lg text-text-secondary">{subtitle}</p>
      )}
    </div>
  );
}
