import type { ReactNode } from 'react'
import { Reveal } from './Reveal'
import { cn } from '@/lib/cn'

type SectionHeadingProps = {
  /** Le titre ; un éventuel mot accentué se passe via `highlight`. */
  title: ReactNode
  highlight?: string
  subtitle?: ReactNode
  white?: boolean
  className?: string
}

/** Titre de section centré, reprend `.heading-section` du thème. */
export function SectionHeading({
  title,
  highlight,
  subtitle,
  white = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className="mb-5 flex justify-center pb-2">
      <Reveal className={cn('w-full max-w-2xl text-center', className)}>
        <h2 className={cn('mb-4 text-3xl font-semibold md:text-[44px]', white && 'text-white')}>
          {highlight && <span className="text-primary">{highlight} </span>}
          {title}
        </h2>
        {subtitle && (
          <p className={cn(white ? 'text-white/70' : 'text-body')}>{subtitle}</p>
        )}
      </Reveal>
    </div>
  )
}
