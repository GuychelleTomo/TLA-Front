import { ServiceCard } from '@/components/cards/ServiceCard'
import { Reveal } from '@/components/ui/Reveal'
import { useAsync } from '@/hooks/useAsync'
import { getServices } from '@/services/content'
import { Skeleton } from '@/components/ui/Skeleton'

/** Bande de 4 services en haut de la home (fonds alternés). */
export function ServicesStrip() {
  const { data: services, loading } = useAsync(() => getServices('home'), [])

  // Réserve l'espace pendant le chargement pour éviter le saut de la home.
  if (loading) {
    return (
      <section>
        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-[236px] rounded-none" dark={i % 2 === 1} />
          ))}
        </div>
      </section>
    )
  }

  if (!services?.length) return null

  return (
    <section>
      <div className="grid md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => (
          <Reveal key={service.title} delay={i * 100}>
            <ServiceCard {...service} dark={i % 2 === 1} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
