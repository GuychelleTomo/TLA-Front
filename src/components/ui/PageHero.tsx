import { Link } from 'react-router-dom'

type Crumb = { label: string; to?: string }

type PageHeroProps = {
  title: string
  crumbs: Crumb[]
  image?: string
}

/**
 * Bandeau + fil d'ariane des pages internes.
 * Reproduit `.hero-wrap.hero-wrap-2` du template (hauteur 300px, voile rouge).
 */
export function PageHero({ title, crumbs, image = '/images/bg1.jpeg' }: PageHeroProps) {
  return (
    <section
      className="relative h-[300px] bg-cover bg-center"
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className="absolute inset-0 bg-accent-red opacity-30" />
      <div className="relative mx-auto flex h-[300px] max-w-6xl items-center justify-center px-4">
        <div className="max-w-3xl text-center">
          <h1 className="mb-2 text-4xl font-black text-white md:text-5xl">{title}</h1>
          <p className="text-[13px] uppercase tracking-wide text-white">
            {crumbs.map((c, i) => (
              <span
                key={c.label}
                className="mr-2 border-b-2 border-white/10 pb-1 text-white"
              >
                {c.to ? (
                  <Link to={c.to} className="text-white">
                    {c.label}
                  </Link>
                ) : (
                  c.label
                )}
                <i className="ion-ios-arrow-forward ml-1" />
                {i < crumbs.length - 1 ? ' ' : ''}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  )
}
