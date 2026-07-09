import { CourseCard } from '@/components/cards/CourseCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { useAsync } from '@/hooks/useAsync'
import { getCourses } from '@/services/content'
import { CardsSkeleton } from '@/components/ui/Skeleton'

const subtitle =
  'Anglais, Espagnol, Portugais, Chinois, Italien — choisissez la langue qui fera décoller votre carrière.'

/** Section "Différentes Formations" (aperçu de 3 langues sur la home). */
export function CoursesSection() {
  const { data: courses, loading, error } = useAsync(() => getCourses(), [])

  return (
    <section className="py-24">
      <div className="mx-auto max-w-[1400px] px-4">
        <SectionHeading title="Formations" highlight="Nos" subtitle={subtitle} />
        {loading ? (
          <CardsSkeleton count={3} gridClass="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" cardClass="h-[360px]" />
        ) : error ? (
          <p className="py-10 text-center text-black/50">Impossible de charger les formations.</p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {(courses ?? []).slice(0, 3).map((course, i) => (
              <Reveal key={course.id} delay={i * 100}>
                <CourseCard {...course} />
              </Reveal>
            ))}
          </div>
        )}
        <div className="mt-12 text-center">
          <Button to="/formations">Voir toutes les formations</Button>
        </div>
      </div>
    </section>
  )
}
