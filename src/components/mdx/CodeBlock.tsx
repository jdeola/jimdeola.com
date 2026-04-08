'use client'

import { useRef } from 'react'
import { CopyButton } from '@/components/blog/CopyButton'

interface CodeBlockProps {
  children: React.ReactNode
  [key: string]: unknown
}

export function CodeBlock({ children, ...props }: CodeBlockProps) {
  const preRef = useRef<HTMLPreElement>(null)

  const language =
    (props['data-language'] as string) ??
    (() => {
      // Try to extract language from the child code element
      const child = children as React.ReactElement<{
        'data-language'?: string
        className?: string
      }>
      if (child?.props?.['data-language']) {
        return child.props['data-language']
      }
      const className = child?.props?.className ?? ''
      const match = /language-(\w+)/.exec(className)
      return match?.[1] ?? null
    })()

  const getCodeText = (): string => {
    if (preRef.current) {
      return preRef.current.textContent ?? ''
    }
    return ''
  }

  return (
    <div className="group relative my-6">
      {language && (
        <span className="absolute right-12 top-2 z-10 rounded-md bg-bg-tertiary px-2 py-0.5 font-mono text-xs text-text-secondary">
          {language}
        </span>
      )}
      <div className="absolute right-2 top-2 z-10 opacity-0 transition-opacity group-hover:opacity-100">
        <CopyButton code={getCodeText()} />
      </div>
      <pre ref={preRef} {...props}>
        {children}
      </pre>
    </div>
  )
}
