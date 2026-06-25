import { Link } from 'react-router-dom'
import type { Teacher } from '@/data/teachers'

/** Carte coach cliquable (mène à la page de détail du coach). */
export function TeacherCard({ slug, name, role, image, bio, specialty, links }: Teacher) {
  return (
    <Link
      to={`/equipe/${slug}`}
      className="group block h-full w-full overflow-hidden rounded-lg bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative overflow-hidden">
        <div
          className="h-64 bg-cover bg-center transition duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        />
        <span className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary shadow">
          <i className="ion-ios-globe" /> {specialty}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl text-black/80 transition group-hover:text-primary">{name}</h3>
        <span className="block text-primary">{role}</span>
        <p className="mt-3 text-sm text-black/60">{bio}</p>

        <div className="mt-4 flex items-center justify-between">
          <ul className="flex gap-3">
            {links.slice(0, 4).map((link) => (
              <li key={link.label}>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/5 text-black/50 transition group-hover:bg-primary group-hover:text-white">
                  <span className={link.icon} />
                </span>
              </li>
            ))}
          </ul>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition group-hover:opacity-100">
            Voir le profil <i className="ion-ios-arrow-forward" />
          </span>
        </div>
      </div>
    </Link>
  )
}
