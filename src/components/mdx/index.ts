import type { MDXComponents } from 'mdx/types'
import { Callout } from './Callout'
import { CodeBlock } from './CodeBlock'
import { MdxImage } from './MdxImage'
import { YouTube } from './YouTube'
import { LinkCard } from './LinkCard'

export const mdxComponents: MDXComponents = {
  pre: CodeBlock as MDXComponents['pre'],
  Callout,
  Image: MdxImage,
  YouTube,
  LinkCard,
}

export { Callout, CodeBlock, MdxImage, YouTube, LinkCard }
