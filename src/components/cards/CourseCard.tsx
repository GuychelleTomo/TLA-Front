import type { Course } from '@/data/courses'
import { Button } from '@/components/ui/Button'

/** Carte d'une formation (langue). */
export function CourseCard({ image, level, format, duration, title, excerpt }: Course) {
  return (
    <div>
      <div className="h-[300px] w-full bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
      <div className="pt-4">
        <p className="flex flex-wrap gap-x-3 gap-y-1 text-sm">
          <span>
            <i className="icon-graduation-cap mr-2" />
            {level}
          </span>
          <span>
            <i className="icon-clock-o mr-2" />
            {duration}
          </span>
          <span>
            <i className="icon-laptop mr-2" />
            {format}
          </span>
        </p>
        <h3 className="mt-2 text-xl">
          <a href="#" className="text-black/80 hover:text-primary">
            {title}
          </a>
        </h3>
        <p className="mt-2">{excerpt}</p>
        <p className="mt-3">
          <Button to="/contact">S'inscrire</Button>
        </p>
      </div>
    </div>
  )
}
