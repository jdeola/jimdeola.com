import { ExternalLink } from 'lucide-react'

interface LinkCardProps {
  href: string
  title: string
  description?: string
  favicon?: string
}

export function LinkCard({ href, title, description, favicon }: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="my-4 flex items-center gap-4 rounded-lg border border-border bg-bg-secondary p-4 transition-colors hover:border-border-light hover:bg-bg-tertiary"
    >
      {favicon && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={favicon}
          alt=""
          width={24}
          height={24}
          className="h-6 w-6 shrink-0 rounded"
        />
      )}
      <div className="min-w-0 flex-1">
        <p className="truncate font-medium text-text-primary">{title}</p>
        {description && (
          <p className="mt-0.5 truncate text-sm text-text-secondary">
            {description}
          </p>
        )}
      </div>
      <ExternalLink
        className="h-4 w-4 shrink-0 text-text-secondary"
        aria-hidden="true"
      />
    </a>
  )
}
