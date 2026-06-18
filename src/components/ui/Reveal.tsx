import type { ElementType, ReactNode } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { cn } from '@/lib/cn'

type RevealProps = {
  children: ReactNode
  as?: ElementType
  effect?: 'up' | 'left' | 'right'
  delay?: number
  className?: string
}

/**
 * Enveloppe un contenu d'une animation de révélation au scroll.
 * Remplace la classe `ftco-animate` du template.
 */
export function Reveal({
  children,
  as: Tag = 'div',
  effect = 'up',
  delay = 0,
  className,
}: RevealProps) {
  const { ref, visible } = useScrollReveal<HTMLElement>()

  return (
    <Tag
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn(
        'reveal',
        effect === 'left' && 'reveal-left',
        effect === 'right' && 'reveal-right',
        visible && 'is-visible',
        className,
      )}
    >
      {children}
    </Tag>
  )
}
