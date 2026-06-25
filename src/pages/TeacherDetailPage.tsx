import { Link, useParams } from 'react-router-dom'
import { PageHero } from '@/components/ui/PageHero'
import { Reveal } from '@/components/ui/Reveal'
import { teachers } from '@/data/teachers'

/** Page de détail d'un coach : biographie, CV, langues, fonction, profils web. */
export function TeacherDetailPage() {
  const { slug } = useParams()
  const teacher = teachers.find((t) => t.slug === slug)

  if (!teacher) {
    return (
      <>
        <PageHero
          title="Coach introuvable"
          crumbs={[{ label: 'Accueil', to: '/' }, { label: 'Équipe', to: '/equipe' }, { label: 'Introuvable' }]}
        />
        <section className="py-24 text-center">
          <p className="text-lg text-black/60">Ce coach n'existe pas ou a été retiré.</p>
          <Link
            to="/equipe"
            className="mt-6 inline-block rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition hover:bg-primary-light"
          >
            Retour à l'équipe
          </Link>
        </section>
      </>
    )
  }

  return (
    <>
      <PageHero
        title={teacher.name}
        image="/images/bg_2.jpeg"
        crumbs={[
          { label: 'Accueil', to: '/' },
          { label: 'Équipe', to: '/equipe' },
          { label: teacher.name },
        ]}
      />

      <section className="bg-linear-to-b from-gray-50 to-white pb-24">
        <div className="mx-auto max-w-6xl px-4">
          {/* Carte profil, remontée sur le bandeau */}
          <Reveal>
            <div className="relative -mt-24 overflow-hidden rounded-3xl bg-white shadow-[0_30px_80px_-30px_rgba(13,17,40,0.35)] ring-1 ring-black/5">
              <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-r from-primary to-primary-light" />
              <div className="relative grid gap-8 p-8 sm:p-10 md:grid-cols-[260px_1fr] md:items-end">
                <div className="relative mx-auto md:mx-0">
                  <div
                    className="h-64 w-56 rounded-2xl bg-cover bg-center shadow-xl ring-4 ring-white"
                    style={{ backgroundImage: `url(${teacher.image})` }}
                  />
                  <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-dark px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white shadow-lg">
                    {teacher.experienceYears} ans d'expérience
                  </span>
                </div>

                <div className="pt-2 text-center md:pt-10 md:text-left">
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                    <i className="ion-ios-briefcase" />
                    {teacher.fonction}
                  </span>
                  <h2 className="mt-3 text-3xl font-black text-dark md:text-4xl">{teacher.name}</h2>
                  <p className="mt-1 text-primary">{teacher.specialty}</p>

                  <div className="mt-5 flex flex-wrap items-center justify-center gap-3 md:justify-start">
                    <a
                      href={teacher.cv}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-primary-light"
                    >
                      <i className="ion-ios-document text-lg" /> Lire le CV
                    </a>
                    <a
                      href={teacher.cv}
                      download
                      className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
                    >
                      <i className="ion-ios-download text-lg" /> Télécharger
                    </a>
                    <a
                      href={`mailto:${teacher.email}`}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/5 text-black/50 transition hover:bg-primary hover:text-white"
                      aria-label={`Écrire à ${teacher.name}`}
                    >
                      <i className="ion-ios-mail text-lg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Contenu principal + barre latérale */}
          <div className="mt-12 grid gap-10 lg:grid-cols-3">
            {/* Colonne principale */}
            <div className="space-y-12 lg:col-span-2">
              <Reveal>
                <article>
                  <header className="mb-5 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <i className="ion-ios-person text-xl" />
                    </span>
                    <h3 className="text-2xl font-bold text-dark">Biographie</h3>
                  </header>
                  <div className="space-y-4 leading-relaxed text-black/70">
                    {teacher.biography.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </article>
              </Reveal>

              {/* Parcours */}
              <Reveal>
                <article>
                  <header className="mb-5 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <i className="ion-ios-book text-xl" />
                    </span>
                    <h3 className="text-2xl font-bold text-dark">Parcours & diplômes</h3>
                  </header>
                  <ul className="space-y-3">
                    {teacher.education.map((e) => (
                      <li key={e} className="flex items-start gap-3 text-black/70">
                        <i className="ion-ios-arrow-forward mt-1.5 text-primary" />
                        <span>{e}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </div>

            {/* Barre latérale */}
            <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              {/* Fonction au sein de TLA */}
              <Reveal>
                <div className="rounded-2xl bg-dark p-6 text-white shadow-lg">
                  <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-primary-light">
                    <i className="ion-ios-briefcase" /> Fonction au sein de TLA
                  </h4>
                  <p className="mt-2 text-lg font-semibold leading-snug">{teacher.fonction}</p>
                  <p className="mt-1 text-sm text-white/60">{teacher.role}</p>
                </div>
              </Reveal>

              {/* Langues parlées */}
              <Reveal>
                <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-black/5">
                  <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-black/50">
                    <i className="ion-ios-globe text-primary" /> Langues parlées
                  </h4>
                  <ul className="mt-4 space-y-3">
                    {teacher.languages.map((l) => (
                      <li key={l.name} className="flex items-center justify-between">
                        <span className="font-medium text-dark">{l.name}</span>
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                          {l.level}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* Profil & pages web */}
              <Reveal>
                <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-black/5">
                  <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-black/50">
                    <i className="ion-ios-link text-primary" /> Profil & pages web
                  </h4>
                  <ul className="mt-4 space-y-2">
                    {teacher.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className="group flex items-center justify-between rounded-xl px-3 py-2.5 text-black/70 transition hover:bg-primary/5 hover:text-primary"
                        >
                          <span className="flex items-center gap-3">
                            <i className={`${link.icon} text-lg text-primary`} />
                            {link.label}
                          </span>
                          <i className="ion-ios-arrow-forward text-xs opacity-0 transition group-hover:opacity-100" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* Contact */}
              <Reveal>
                <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-black/5">
                  <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-black/50">
                    <i className="ion-ios-mail text-primary" /> Contact
                  </h4>
                  <a
                    href={`mailto:${teacher.email}`}
                    className="mt-3 block break-all text-primary hover:text-primary-light"
                  >
                    {teacher.email}
                  </a>
                  <Link
                    to="/contact"
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-light"
                  >
                    <i className="ion-ios-paper-plane" /> Prendre rendez-vous
                  </Link>
                </div>
              </Reveal>
            </aside>
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/equipe"
              className="inline-flex items-center gap-2 text-sm font-semibold text-black/60 transition hover:text-primary"
            >
              <i className="ion-ios-arrow-forward rotate-180" /> Retour à toute l'équipe
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
