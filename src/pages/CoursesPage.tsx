import { PageHero } from '@/components/ui/PageHero'
import { CourseCard } from '@/components/cards/CourseCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { ScheduleSection } from '@/components/sections/ScheduleSection'
import { courses } from '@/data/courses'

export function CoursesPage() {
  return (
    <>
      <PageHero
        title="Formations"
        crumbs={[{ label: 'Accueil', to: '/' }, { label: 'Formations' }]}
      />

      {/* Les différentes formations (langues) */}
      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-4">
          <SectionHeading
            title="Langues"
            highlight="Nos"
            subtitle="Anglais, Espagnol, Portugais, Chinois et Italien — des parcours certifiants pour tous les niveaux."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, i) => (
              <Reveal key={course.id} delay={(i % 3) * 100}>
                <CourseCard {...course} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Les différents horaires de formation */}
      <ScheduleSection />
    </>
  )
}
