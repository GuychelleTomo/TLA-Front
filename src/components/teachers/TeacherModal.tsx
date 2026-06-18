import { useEffect } from 'react'
import type { Teacher } from '@/data/teachers'

const socials = ['icon-twitter', 'icon-facebook', 'icon-google-plus', 'icon-instagram']

type TeacherModalProps = {
  teacher: Teacher | null
  onClose: () => void
}

/** Modale affichant la biographie complète d'un coach. */
export function TeacherModal({ teacher, onClose }: TeacherModalProps) {
  useEffect(() => {
    if (!teacher) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [teacher, onClose])

  if (!teacher) return null

  return (
    <div
      className="fixed inset-0 z-[1100] flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Biographie de ${teacher.name}`}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-2xl text-black/60 hover:bg-primary hover:text-white"
        >
          <span className="ion-ios-close" />
        </button>

        <div className="flex flex-col sm:flex-row">
          <div
            className="h-64 bg-cover bg-center sm:h-auto sm:w-2/5"
            style={{ backgroundImage: `url(${teacher.image})` }}
          />
          <div className="p-8 sm:w-3/5">
            <h3 className="text-2xl text-black/80">{teacher.name}</h3>
            <span className="block text-primary">{teacher.role}</span>
            <span className="mt-1 inline-block rounded bg-primary/10 px-2 py-1 text-xs text-primary">
              {teacher.specialty}
            </span>

            <div className="mt-4 space-y-3 text-sm">
              {teacher.biography.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <ul className="mt-6 flex gap-3">
              {socials.map((icon) => (
                <li key={icon}>
                  <a
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-black/50 hover:bg-primary hover:text-white"
                  >
                    <span className={icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
