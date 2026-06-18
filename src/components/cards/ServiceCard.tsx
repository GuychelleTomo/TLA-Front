import type { Service } from '@/data/services'
import { cn } from '@/lib/cn'

type ServiceCardProps = Service & { dark?: boolean }

/** Bloc service de la bande d'accueil (fond orange ou navy alterné). */
export function ServiceCard({ icon, title, text, dark = false }: ServiceCardProps) {
  return (
    <div className={cn('flex px-4 py-12', dark ? 'bg-dark' : 'bg-primary')}>
      <div className="block w-full text-center">
        <div className="flex justify-center">
          <span className={cn(icon, 'text-[50px] text-white')} />
        </div>
        <div className="mt-3 p-2 text-white/80">
          <h3 className="mb-2 text-[22px] font-medium text-white">{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}
