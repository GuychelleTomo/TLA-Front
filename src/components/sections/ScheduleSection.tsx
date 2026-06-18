import { Link } from 'react-router-dom'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { schedules, slots, type Session } from '@/data/schedules'

const formatStyle: Record<Session['format'], string> = {
  Présentiel: 'bg-primary/10 text-primary',
  'En ligne': 'bg-accent-purple/10 text-accent-purple',
  Hybride: 'bg-accent-green/10 text-accent-green',
}

/** Section "Horaires des formations" : créneaux types + emploi du temps. */
export function ScheduleSection() {
  return (
    <section className="bg-gray-100 py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          title="des formations"
          highlight="Horaires"
          subtitle="Des créneaux flexibles, en présentiel ou en ligne, pour s'adapter à votre emploi du temps."
        />

        {/* Créneaux types */}
        <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {slots.map((slot, i) => (
            <Reveal key={slot.title} delay={i * 100}>
              <div className="h-full rounded bg-white p-6 text-center shadow-sm">
                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl text-white">
                  <span className={slot.icon} />
                </div>
                <h3 className="mb-1 text-lg text-black/80">{slot.title}</h3>
                <p className="text-sm">{slot.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Emploi du temps */}
        <Reveal className="overflow-x-auto rounded-lg bg-white shadow-sm">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="bg-dark text-white">
                <th className="px-6 py-4 font-medium">Langue</th>
                <th className="px-6 py-4 font-medium">Niveau</th>
                <th className="px-6 py-4 font-medium">Jours</th>
                <th className="px-6 py-4 font-medium">Horaire</th>
                <th className="px-6 py-4 font-medium">Format</th>
              </tr>
            </thead>
            <tbody>
              {schedules.map((s, i) => (
                <tr
                  key={`${s.language}-${s.level}`}
                  className={i % 2 === 1 ? 'bg-gray-50' : 'bg-white'}
                >
                  <td className="px-6 py-4 font-semibold text-black/80">{s.language}</td>
                  <td className="px-6 py-4">{s.level}</td>
                  <td className="px-6 py-4">{s.days}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{s.time}</td>
                  <td className="px-6 py-4">
                    <span className={`rounded-full px-3 py-1 text-xs font-medium ${formatStyle[s.format]}`}>
                      {s.format}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <p className="mt-6 text-center text-sm text-black/60">
          Besoin d'un autre créneau ? Nous proposons aussi des cours particuliers sur mesure.{' '}
          <Link to="/contact" className="text-primary">
            Contactez-nous
          </Link>
          .
        </p>
      </div>
    </section>
  )
}
