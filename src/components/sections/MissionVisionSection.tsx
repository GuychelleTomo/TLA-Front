import { Reveal } from '@/components/ui/Reveal'
import { useAsync } from '@/hooks/useAsync'
import { getAbout } from '@/services/content'

/** Section Mission / Vision / Valeurs. */
export function MissionVisionSection() {
  const { data: about } = useAsync(() => getAbout(), [])
  // Réserve 3 emplacements pendant le chargement (évite le saut de mise en page).
  const pillars = about?.pillars ?? [null, null, null]

  return (
    <section className="bg-gray-100 py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((pillar, i) =>
            pillar ? (
              <Reveal key={pillar.title} delay={i * 100}>
                <div className="h-full rounded bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-4xl text-white">
                    <span className={pillar.icon ?? undefined} />
                  </div>
                  <h3 className="mb-3 text-2xl text-black/80">{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </div>
              </Reveal>
            ) : (
              <div key={i} className="h-[260px] animate-pulse rounded bg-black/[0.06]" />
            ),
          )}
        </div>
      </div>
    </section>
  )
}
