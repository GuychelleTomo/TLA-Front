import { ServiceCard } from '@/components/cards/ServiceCard'
import { Reveal } from '@/components/ui/Reveal'
import { services } from '@/data/services'

/** Bande de 4 services en haut de la home (fonds alternés). */
export function ServicesStrip() {
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
