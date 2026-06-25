import { PageHero } from '@/components/ui/PageHero'
import { TeacherCard } from '@/components/cards/TeacherCard'
import { Reveal } from '@/components/ui/Reveal'
import { teachers } from '@/data/teachers'

export function TeacherPage() {
  return (
    <>
      <PageHero
        title="Certified Teacher"
        crumbs={[{ label: 'Accueil', to: '/' }, { label: 'Équipe' }]}
      />
      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teachers.map((teacher, i) => (
              <Reveal key={teacher.slug} delay={(i % 4) * 100}>
                <TeacherCard {...teacher} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
