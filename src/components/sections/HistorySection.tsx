import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { milestones } from '@/data/about'

/** Section "Notre Historique" sous forme de frise chronologique. */
export function HistorySection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          title="Historique"
          highlight="Notre"
          subtitle="De ses débuts à aujourd'hui, TLA n'a cessé de grandir aux côtés de ses apprenants."
        />

        <div className="relative">
          {/* Ligne verticale (desktop) */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-primary/20 md:block" />

          <div className="space-y-10">
            {milestones.map((m, i) => (
              <Reveal
                key={m.year}
                effect={i % 2 === 0 ? 'left' : 'right'}
                className={`flex flex-col gap-4 md:flex-row md:items-center ${
                  i % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Carte */}
                <div className="md:w-1/2 md:px-8">
                  <div className="rounded bg-gray-100 p-6">
                    <span className="text-2xl font-bold text-primary">{m.year}</span>
                    <h3 className="mt-1 text-xl text-black/80">{m.title}</h3>
                    <p className="mt-2 text-sm">{m.text}</p>
                  </div>
                </div>

                {/* Pastille centrale */}
                <div className="hidden h-4 w-4 shrink-0 rounded-full bg-primary ring-4 ring-primary/20 md:block" />

                <div className="hidden md:block md:w-1/2" />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
