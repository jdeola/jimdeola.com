import Image from 'next/image'
import { cn } from '@/lib/utils'

interface MdxImageProps {
  src: string
  alt: string
  caption?: string
  width?: number
  height?: number
}

export function MdxImage({
  src,
  alt,
  caption,
  width = 800,
  height = 450,
}: MdxImageProps) {
  return (
    <figure className="my-8">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        className={cn('rounded-lg', 'w-full', 'h-auto')}
      />
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-text-secondary">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
