import type { Service } from '@/types/content'
import { cn } from '@/lib/cn'

type ServiceCardProps = Service & { dark?: boolean }

/** Bloc service de la bande d'accueil (fond orange ou navy alterné). */
export function ServiceCard({ icon, title, text, dark = false }: ServiceCardProps) {
  return (
    // `h-full` : la carte remplit sa cellule de grille, sinon un texte plus court
    // laisse le fond s'arrêter avant celui des voisines. `items-center` recentre
    // alors le contenu dans la hauteur commune.
    <div className={cn('flex h-full items-center px-4 py-12', dark ? 'bg-dark' : 'bg-primary')}>
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
