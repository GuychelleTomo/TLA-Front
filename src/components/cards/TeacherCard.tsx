import type { Teacher } from '@/data/teachers'

const socials = ['icon-twitter', 'icon-facebook', 'icon-google-plus', 'icon-instagram']

type TeacherCardProps = Teacher & { onClick?: () => void }

/** Carte coach cliquable (ouvre la modale biographie). */
export function TeacherCard({ name, role, image, bio, specialty, onClick }: TeacherCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group block h-full w-full overflow-hidden rounded-lg bg-white text-left shadow-sm transition hover:shadow-lg"
    >
      <div
        className="h-64 bg-cover bg-center transition duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="p-6">
        <h3 className="text-xl text-black/80 group-hover:text-primary">{name}</h3>
        <span className="block text-primary">{role}</span>
        <span className="mt-2 inline-block rounded bg-primary/10 px-2 py-1 text-xs text-primary">
          {specialty}
        </span>
        <p className="mt-3 text-sm text-black/60">{bio}</p>

        <ul className="mt-4 flex gap-3">
          {socials.map((icon) => (
            <li key={icon}>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/5 text-black/50 group-hover:bg-primary group-hover:text-white">
                <span className={icon} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </button>
  )
}
