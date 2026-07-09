import { cn } from '@/lib/cn'

/** Bloc de chargement animé (réserve l'espace pour éviter les sauts de mise en page). */
export function Skeleton({ className, dark = false }: { className?: string; dark?: boolean }) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-xl',
        dark ? 'bg-white/10' : 'bg-black/[0.06]',
        className,
      )}
    />
  )
}

/**
 * Grille de cartes fantômes, dimensionnée pour occuper la même place que le
 * contenu réel pendant le chargement.
 */
export function CardsSkeleton({
  count = 3,
  gridClass = 'grid gap-8 md:grid-cols-2 lg:grid-cols-3',
  cardClass = 'h-80',
  dark = false,
}: {
  count?: number
  gridClass?: string
  cardClass?: string
  dark?: boolean
}) {
  return (
    <div className={gridClass}>
      {Array.from({ length: count }).map((_, i) => (
        <Skeleton key={i} dark={dark} className={cardClass} />
      ))}
    </div>
  )
}
