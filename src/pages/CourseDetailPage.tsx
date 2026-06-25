import { Link, useParams } from 'react-router-dom'
import { PageHero } from '@/components/ui/PageHero'
import { Reveal } from '@/components/ui/Reveal'
import { courses, enrollment } from '@/data/courses'

const enrollItems = [
  { icon: 'flaticon-diploma', label: 'Début de session', value: enrollment.start },
  { icon: 'flaticon-kids', label: 'Effectif', value: enrollment.seats },
  { icon: 'flaticon-reading', label: 'Vagues', value: enrollment.waves },
  { icon: 'flaticon-security', label: 'Paiement', value: enrollment.payment },
  { icon: 'flaticon-books', label: 'Matériel', value: enrollment.material },
  { icon: 'flaticon-teacher', label: 'En ligne', value: enrollment.online },
]

/** Page de détail d'une formation (langue) : modules, formules, tarifs, inscription. */
export function CourseDetailPage() {
  const { id } = useParams()
  const course = courses.find((c) => c.id === id)

  if (!course) {
    return (
      <>
        <PageHero
          title="Formation introuvable"
          crumbs={[{ label: 'Accueil', to: '/' }, { label: 'Formations', to: '/formations' }, { label: 'Introuvable' }]}
        />
        <section className="py-24 text-center">
          <p className="text-lg text-black/60">Cette formation n'existe pas.</p>
          <Link
            to="/formations"
            className="mt-6 inline-block rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition hover:bg-primary-light"
          >
            Voir toutes les formations
          </Link>
        </section>
      </>
    )
  }

  const waLink = `https://wa.me/${enrollment.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
    `Bonjour, je souhaite m'inscrire à la formation en ${course.title}. ${course.title} + OUI`,
  )}`

  return (
    <>
      <PageHero
        title={course.title}
        image={course.image}
        crumbs={[
          { label: 'Accueil', to: '/' },
          { label: 'Formations', to: '/formations' },
          { label: course.title },
        ]}
      />

      {/* Présentation */}
      <section className="bg-linear-to-b from-gray-50 to-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal className="grid items-center gap-10 lg:grid-cols-2">
            <div className="relative">
              <div
                className="aspect-4/3 w-full rounded-3xl bg-cover bg-center shadow-xl"
                style={{ backgroundImage: `url(${course.image})` }}
              />
              <span className="absolute -left-4 -top-4 flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-lg ring-4 ring-white">
                <img src={course.flag} alt={`Drapeau ${course.title}`} className="h-full w-full object-cover" />
              </span>
            </div>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                Formation en langue
              </span>
              <h2 className="mt-3 text-3xl font-black text-dark md:text-4xl">{course.title}</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {[
                  { icon: 'icon-graduation-cap', value: course.level },
                  { icon: 'icon-clock-o', value: course.duration },
                  { icon: 'icon-laptop', value: course.format },
                ].map((b) => (
                  <span key={b.value} className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm text-black/70 shadow-sm ring-1 ring-black/5">
                    <i className={`${b.icon} text-primary`} />
                    {b.value}
                  </span>
                ))}
              </div>
              <div className="mt-5 space-y-3 text-black/70">
                {course.description.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-primary-light"
                >
                  <i className="icon-whatsapp text-lg" /> S'inscrire maintenant
                </a>
                <Link
                  to="/formations"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-black/10 px-7 py-3 text-sm font-semibold text-black/70 transition hover:border-primary hover:text-primary"
                >
                  <i className="ion-ios-calendar" /> Voir l'emploi du temps
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Modules en présentiel */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <h3 className="text-2xl font-bold text-dark">Modules abordés</h3>
            <p className="mt-1 text-black/60">Un programme complet, du débutant au niveau avancé.</p>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {course.modules.map((m, i) => (
              <Reveal key={m} delay={(i % 3) * 80}>
                <div className="flex items-center gap-3 rounded-xl bg-white p-5 shadow-sm ring-1 ring-black/5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <i className="ion-ios-checkmark text-2xl" />
                  </span>
                  <span className="font-medium text-dark">{m}</span>
                </div>
              </Reveal>
            ))}
          </div>

          {course.examPrep.length > 0 && (
            <Reveal className="mt-8 flex flex-wrap items-center gap-3 rounded-xl bg-dark p-6 text-white">
              <span className="flex items-center gap-2 font-semibold">
                <i className="flaticon-diploma text-xl text-primary-light" /> Préparation aux examens :
              </span>
              {course.examPrep.map((e) => (
                <span key={e} className="rounded-full bg-white/10 px-3 py-1 text-sm ring-1 ring-white/15">
                  {e}
                </span>
              ))}
            </Reveal>
          )}
        </div>
      </section>

      {/* Formules & tarifs */}
      <section className="bg-gray-100 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <h3 className="text-2xl font-bold text-dark">Formules & tarifs</h3>
            <p className="mt-1 text-black/60">Choisissez la formule qui correspond à votre profil et à votre objectif.</p>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {course.formules.map((f, i) => (
              <Reveal key={f.name} delay={(i % 4) * 80}>
                <div
                  className={`relative flex h-full flex-col rounded-2xl p-6 shadow-sm transition hover:shadow-lg ${
                    f.featured ? 'bg-dark text-white ring-2 ring-primary' : 'bg-white ring-1 ring-black/5'
                  }`}
                >
                  {f.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                      Populaire
                    </span>
                  )}
                  <span className={`flex h-12 w-12 items-center justify-center rounded-full text-2xl ${f.featured ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}`}>
                    <span className={f.icon} />
                  </span>
                  <h4 className={`mt-4 text-lg font-bold ${f.featured ? 'text-white' : 'text-dark'}`}>{f.name}</h4>
                  <p className={`text-sm ${f.featured ? 'text-white/60' : 'text-black/50'}`}>{f.audience}</p>

                  <div className="mt-4">
                    <p className="text-2xl font-black text-primary">{f.price}</p>
                    {f.priceNote && (
                      <p className={`text-xs ${f.featured ? 'text-white/55' : 'text-black/50'}`}>{f.priceNote}</p>
                    )}
                  </div>

                  <ul className={`mt-4 space-y-2 text-sm ${f.featured ? 'text-white/80' : 'text-black/65'}`}>
                    <li className="flex items-center gap-2">
                      <i className="icon-laptop text-primary" /> {f.format}
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="icon-clock-o text-primary" /> {f.rhythm}
                    </li>
                    {f.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2">
                        <i className="ion-ios-checkmark-circle mt-0.5 text-primary" /> {feat}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                    className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                      f.featured
                        ? 'bg-primary text-white hover:bg-primary-light'
                        : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                    }`}
                  >
                    S'inscrire
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-black/50">
            Tarifs indicatifs en FCFA. Frais d'inscription et facilités de paiement précisés lors de la pré-inscription.
          </p>
        </div>
      </section>

      {/* Inscription & modalités */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="overflow-hidden rounded-3xl bg-dark text-white shadow-xl">
            <div className="grid gap-8 p-8 sm:p-12 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-light">
                  Inscription
                </span>
                <h3 className="mt-3 text-3xl font-black">Rejoignez la prochaine session</h3>
                <p className="mt-3 text-white/70">
                  {enrollment.registration} — ou contactez-nous directement par WhatsApp pour réserver votre place.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition hover:bg-primary-light"
                  >
                    <i className="icon-whatsapp text-lg" /> Pré-inscription WhatsApp
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-white/25 px-7 py-3 text-sm font-semibold text-white transition hover:border-white"
                  >
                    Nous contacter
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {enrollItems.map((item) => (
                  <div key={item.label} className="rounded-xl bg-white/5 p-5 ring-1 ring-white/10">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-xl text-primary-light">
                      <span className={item.icon} />
                    </span>
                    <p className="mt-3 text-xs uppercase tracking-wide text-white/50">{item.label}</p>
                    <p className="text-sm font-medium">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/formations" className="inline-flex items-center gap-2 text-sm font-semibold text-black/60 transition hover:text-primary">
              <i className="ion-ios-arrow-forward rotate-180" /> Retour aux formations
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
