import { PageHero } from '@/components/ui/PageHero'
import { CourseCard } from '@/components/cards/CourseCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { ScheduleSection } from '@/components/sections/ScheduleSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { useAsync } from '@/hooks/useAsync'
import { getCourses } from '@/services/content'
import { CardsSkeleton } from '@/components/ui/Skeleton'

export function CoursesPage() {
  const { data: courses, loading, error } = useAsync(() => getCourses(), [])

  return (
    <>
      <PageHero
        title="Formation & Services"
        crumbs={[{ label: 'Accueil', to: '/' }, { label: 'Formation & Services' }]}
      />

      {/* Les différentes formations (langues) */}
      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-4">
          <SectionHeading
            title="formations en langues"
            highlight="Nos"
            subtitle="Anglais, Espagnol, Portugais, Chinois et Italien — cliquez sur une langue pour découvrir les modules, formules et tarifs."
          />
          {loading ? (
            <CardsSkeleton count={6} gridClass="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" cardClass="h-[360px]" />
          ) : error ? (
            <p className="py-10 text-center text-black/50">Impossible de charger les formations.</p>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {(courses ?? []).map((course, i) => (
                <Reveal key={course.id} delay={(i % 3) * 100}>
                  <CourseCard {...course} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Emploi du temps */}
      <ScheduleSection />

      {/* Nos services linguistiques */}
      <ServicesSection />
    </>
  )
}
