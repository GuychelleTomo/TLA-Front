import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { useAsync } from '@/hooks/useAsync'
import { getServices } from '@/services/content'

/** Section "Nos services" : prestations linguistiques de TLA. */
export function ServicesSection() {
  const { data: proServices } = useAsync(() => getServices('pro'), [])
  // Réserve 4 emplacements pendant le chargement (évite le saut de mise en page).
  const services = proServices ?? [null, null, null, null]

  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          title="services"
          highlight="Nos"
          subtitle="Au-delà des formations, Tarvel Languages Academy vous accompagne dans tous vos besoins linguistiques."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service, i) =>
            service ? (
              <Reveal key={service.title} delay={(i % 2) * 100}>
                <div className="group flex h-full gap-5 rounded-xl bg-white p-7 shadow-sm ring-1 ring-black/5 transition hover:shadow-lg">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary/10 text-3xl text-primary transition group-hover:bg-primary group-hover:text-white">
                    <span className={service.icon ?? undefined} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark">{service.title}</h3>
                    <p className="mt-1 text-sm text-black/65">{service.text}</p>
                  </div>
                </div>
              </Reveal>
            ) : (
              <div key={i} className="h-[116px] animate-pulse rounded-xl bg-black/[0.06]" />
            ),
          )}
        </div>

        <Reveal className="mt-10 text-center">
          <Button href="https://wa.me/242064176083">Demander un devis</Button>
        </Reveal>
      </div>
    </section>
  )
}
