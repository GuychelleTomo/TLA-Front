import { Link } from 'react-router-dom'
import { contact, navLinks, socials } from '@/data/site'
import { posts } from '@/data/posts'

function Heading({ children }: { children: string }) {
  return <h2 className="mb-4 text-lg font-normal text-white">{children}</h2>
}

/** Pied de page : 4 widgets + copyright. */
export function Footer() {
  return (
    <footer className="bg-dark py-20 text-white/70">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Contact */}
          <div>
            <Heading>Une question ?</Heading>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="icon-map-marker mt-1 text-primary" />
                <span>{contact.address}</span>
              </li>
              <li className="flex gap-3">
                <span className="icon-phone mt-1 text-primary" />
                <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="hover:text-primary">
                  {contact.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <span className="icon-envelope mt-1 text-primary" />
                <a href={`mailto:${contact.email}`} className="hover:text-primary">
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Articles récents */}
          <div>
            <Heading>Articles récents</Heading>
            <div className="space-y-5">
              {posts.slice(0, 2).map((p) => (
                <div key={p.slug} className="flex gap-4">
                  <Link
                    to={`/blog/${p.slug}`}
                    className="h-14 w-14 shrink-0 rounded bg-cover bg-center"
                    style={{ backgroundImage: `url(${p.image})` }}
                  />
                  <div>
                    <h3 className="text-sm leading-snug">
                      <Link to={`/blog/${p.slug}`} className="text-white hover:text-primary">
                        {p.title}
                      </Link>
                    </h3>
                    <div className="mt-1 flex flex-wrap gap-x-3 text-xs">
                      <span>
                        <span className="icon-calendar mr-1" />
                        {p.date}
                      </span>
                      <span>
                        <span className="icon-person mr-1" />
                        {p.author}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Liens */}
          <div>
            <Heading>Liens</Heading>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-primary">
                    <span className="ion-ios-arrow-round-forward mr-2" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter + réseaux */}
          <div>
            <Heading>Inscrivez-vous !</Heading>
            <form onSubmit={(e) => e.preventDefault()} className="mb-6">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="mb-2 w-full rounded bg-white/10 px-3 py-2 text-center text-white placeholder:text-white/50 outline-none"
              />
              <button
                type="submit"
                className="w-full cursor-pointer rounded bg-primary px-3 py-2 text-white transition-colors hover:bg-primary-light"
              >
                S'inscrire
              </button>
            </form>
            <Heading>Suivez-nous</Heading>
            <ul className="flex gap-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-primary"
                  >
                    <span className={s.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-sm">
          <p>
            Copyright &copy;{new Date().getFullYear()} NEOTIC — Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
