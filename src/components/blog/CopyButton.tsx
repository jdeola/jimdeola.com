'use client'

import { useState, useCallback } from 'react'
import { Copy, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CopyButtonProps {
  code: string
}

export function CopyButton({ code }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback: silently fail if clipboard API is not available
    }
  }, [code])

  return (
    <button
      onClick={handleCopy}
      aria-label="Copy code"
      className={cn(
        'rounded-md p-1.5 transition-colors',
        copied
          ? 'text-success'
          : 'text-text-secondary hover:text-text-primary hover:bg-bg-tertiary'
      )}
    >
      {copied ? (
        <Check className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Copy className="h-4 w-4" aria-hidden="true" />
      )}
    </button>
  )
}
