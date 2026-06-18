import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type Variant = 'primary' | 'white' | 'outline-white'

const base =
  'inline-flex items-center justify-center cursor-pointer font-normal rounded-[5px] ' +
  'transition-all duration-300 border'

const variants: Record<Variant, string> = {
  primary: 'bg-primary border-primary text-white hover:bg-primary-light hover:border-primary-light',
  white: 'bg-white border-white text-dark hover:bg-primary hover:border-primary hover:text-white',
  'outline-white':
    'bg-transparent border-white text-white hover:bg-white hover:text-dark',
}

type CommonProps = {
  variant?: Variant
  className?: string
  children: ReactNode
}

type AsLink = CommonProps & { to: string; href?: never }
type AsAnchor = CommonProps & { href: string; to?: never }
type AsButton = CommonProps & {
  to?: never
  href?: never
  type?: 'button' | 'submit'
  onClick?: () => void
}

type ButtonProps = AsLink | AsAnchor | AsButton

/** Bouton/lien réutilisable reprenant le style `.btn .btn-primary` du thème. */
export function Button(props: ButtonProps) {
  const { variant = 'primary', className, children } = props
  const classes = cn(base, 'px-4 py-3', variants[variant], className)

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={classes}>
        {children}
      </Link>
    )
  }
  if ('href' in props && props.href) {
    return (
      <a href={props.href} className={classes}>
        {children}
      </a>
    )
  }
  return (
    <button
      type={(props as AsButton).type ?? 'button'}
      onClick={(props as AsButton).onClick}
      className={classes}
    >
      {children}
    </button>
  )
}
