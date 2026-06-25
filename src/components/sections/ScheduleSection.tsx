import { Link } from 'react-router-dom'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { waves, timeSlots, groups, clubs } from '@/data/schedules'

/** Section "Emploi du temps" : vagues, grille des deux groupes et clubs linguistiques. */
export function ScheduleSection() {
  return (
    <section className="bg-gray-100 py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          title="du temps"
          highlight="Emploi"
          subtitle="Cours de 2 heures, de 08H à 20H. Choisissez votre vague et votre groupe selon vos disponibilités."
        />

        {/* Vagues */}
        <div className="mb-14 grid gap-6 sm:grid-cols-3">
          {waves.map((wave, i) => (
            <Reveal key={wave.title} delay={i * 100}>
              <div className="h-full rounded-xl bg-white p-6 text-center shadow-sm ring-1 ring-black/5">
                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl text-white">
                  <span className={wave.icon} />
                </div>
                <h3 className="text-lg text-black/80">{wave.title}</h3>
                <p className="text-sm font-semibold text-primary">{wave.range}</p>
                <p className="mt-1 text-sm text-black/60">{wave.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Grilles des deux groupes */}
        <div className="grid gap-8 lg:grid-cols-2">
          {groups.map((group) => (
            <Reveal key={group.name} className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5">
              <div className={`flex items-center justify-between px-6 py-4 text-white ${group.accent}`}>
                <h3 className="text-lg font-semibold">{group.name}</h3>
                <span className="text-sm text-white/85">{group.days.join(' · ')}</span>
              </div>
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-black/10 text-black/50">
                    <th className="px-5 py-3 font-medium">Horaire</th>
                    {group.days.map((d) => (
                      <th key={d} className="px-5 py-3 font-medium">{d}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {timeSlots.map((slot, i) => (
                    <tr key={slot} className={i % 2 === 1 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="whitespace-nowrap px-5 py-3 font-semibold text-black/80">{slot}</td>
                      {group.days.map((d) => (
                        <td key={d} className="px-5 py-3">
                          <span className="inline-flex items-center gap-1.5 text-black/60">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            Cours
                          </span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
          ))}
        </div>

        {/* Clubs linguistiques */}
        <Reveal className="mt-12">
          <div className="rounded-xl bg-dark p-8 text-white">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-xl">
                <i className="flaticon-reading" />
              </span>
              <div>
                <h3 className="text-xl font-semibold">Clubs linguistiques</h3>
                <p className="text-sm text-white/60">Pratiquez la langue dans une ambiance conviviale.</p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {clubs.map((club) => (
                <div key={club.day} className="rounded-lg bg-white/5 p-5 ring-1 ring-white/10">
                  <p className="text-sm uppercase tracking-wide text-primary-light">{club.day}</p>
                  <p className="mt-1 text-lg font-semibold">{club.time}</p>
                  <p className="text-sm text-white/60">{club.activity}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <p className="mt-8 text-center text-sm text-black/60">
          Besoin d'un autre créneau ? Nous proposons aussi des cours particuliers sur mesure.{' '}
          <Link to="/contact" className="text-primary">Contactez-nous</Link>.
        </p>
      </div>
    </section>
  )
}
