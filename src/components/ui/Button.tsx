import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

const variants = {
  primary: 'bg-accent text-white hover:bg-accent-hover focus:ring-accent',
  secondary: 'border border-accent text-accent hover:bg-accent/10 focus:ring-accent',
  ghost: 'text-text-secondary hover:text-text-primary hover:bg-white/5 focus:ring-white/20',
} as const;

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
} as const;

const baseClasses =
  'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-bg-primary disabled:pointer-events-none disabled:opacity-50';

type ButtonVariant = keyof typeof variants;
type ButtonSize = keyof typeof sizes;

type ButtonAsButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: 'button';
  href?: never;
};

type ButtonAsAnchor = AnchorHTMLAttributes<HTMLAnchorElement> & {
  as: 'a';
  href: string;
};

type ButtonProps = (ButtonAsButton | ButtonAsAnchor) & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', as, ...props }, ref) => {
    const classes = cn(baseClasses, variants[variant], sizes[size], className);

    if (as === 'a') {
      const { ...anchorProps } = props as ButtonAsAnchor;
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={classes}
          {...anchorProps}
        />
      );
    }

    const { ...buttonProps } = props as ButtonAsButton;
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        {...buttonProps}
      />
    );
  }
);

Button.displayName = 'Button';
