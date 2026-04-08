import { Info, AlertTriangle, Lightbulb } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

type CalloutType = 'info' | 'warning' | 'tip'

interface CalloutProps {
  type?: CalloutType
  children: ReactNode
}

const calloutConfig: Record<
  CalloutType,
  { icon: typeof Info; borderColor: string; bgColor: string; iconColor: string }
> = {
  info: {
    icon: Info,
    borderColor: 'border-l-accent',
    bgColor: 'bg-accent/5',
    iconColor: 'text-accent',
  },
  warning: {
    icon: AlertTriangle,
    borderColor: 'border-l-amber-500',
    bgColor: 'bg-amber-500/5',
    iconColor: 'text-amber-500',
  },
  tip: {
    icon: Lightbulb,
    borderColor: 'border-l-success',
    bgColor: 'bg-success/5',
    iconColor: 'text-success',
  },
}

export function Callout({ type = 'info', children }: CalloutProps) {
  const config = calloutConfig[type]
  const Icon = config.icon

  return (
    <div
      className={cn(
        'my-6 rounded-r-lg border-l-4 p-4',
        config.borderColor,
        config.bgColor
      )}
      role="note"
    >
      <div className="flex gap-3">
        <Icon
          className={cn('mt-0.5 h-5 w-5 shrink-0', config.iconColor)}
          aria-hidden="true"
        />
        <div className="prose-sm [&>p]:my-0">{children}</div>
      </div>
    </div>
  )
}
