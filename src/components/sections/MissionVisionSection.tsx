import { Reveal } from '@/components/ui/Reveal'
import { pillars } from '@/data/about'

/** Section Mission / Vision / Valeurs. */
export function MissionVisionSection() {
  return (
    <section className="bg-gray-100 py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 100}>
              <div className="h-full rounded bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-4xl text-white">
                  <span className={pillar.icon} />
                </div>
                <h3 className="mb-3 text-2xl text-black/80">{pillar.title}</h3>
                <p>{pillar.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
