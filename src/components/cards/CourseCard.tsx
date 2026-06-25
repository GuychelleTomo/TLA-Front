import { Link } from 'react-router-dom'
import type { Course } from '@/data/courses'

/** Carte d'une formation (langue) menant à la page de détail. */
export function CourseCard({ id, flag, level, format, duration, title, excerpt }: Course) {
  return (
    <Link
      to={`/formations/${id}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-[180px] w-full overflow-hidden bg-gray-100">
        <img
          src={flag}
          alt={`Drapeau — ${title}`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-dark/70 via-dark/10 to-transparent" />
        <h3 className="absolute bottom-4 left-5 text-2xl font-bold text-white drop-shadow-lg">{title}</h3>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-black/60">
          <span><i className="icon-graduation-cap mr-1 text-primary" />{level}</span>
          <span><i className="icon-clock-o mr-1 text-primary" />{duration}</span>
          <span><i className="icon-laptop mr-1 text-primary" />{format}</span>
        </div>
        <p className="mt-3 flex-1 text-sm text-black/65">{excerpt}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
          Découvrir la formation
          <i className="ion-ios-arrow-forward transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}
