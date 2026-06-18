import { CourseCard } from '@/components/cards/CourseCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { courses } from '@/data/courses'

const subtitle =
  'Anglais, Espagnol, Portugais, Chinois, Italien — choisissez la langue qui fera décoller votre carrière.'

/** Section "Différentes Formations" (aperçu de 3 langues sur la home). */
export function CoursesSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-[1400px] px-4">
        <SectionHeading title="Formations" highlight="Nos" subtitle={subtitle} />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.slice(0, 3).map((course, i) => (
            <Reveal key={course.id} delay={i * 100}>
              <CourseCard {...course} />
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button to="/formations">Voir toutes les formations</Button>
        </div>
      </div>
    </section>
  )
}
