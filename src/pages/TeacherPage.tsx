import { PageHero } from '@/components/ui/PageHero'
import { TeacherCard } from '@/components/cards/TeacherCard'
import { Reveal } from '@/components/ui/Reveal'
import { useAsync } from '@/hooks/useAsync'
import { getTeachers } from '@/services/content'
import { CardsSkeleton } from '@/components/ui/Skeleton'

export function TeacherPage() {
  const { data: teachers, loading, error } = useAsync(() => getTeachers(), [])

  return (
    <>
      <PageHero
        title="Certified Teacher"
        crumbs={[{ label: 'Accueil', to: '/' }, { label: 'Équipe' }]}
      />
      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-4">
          {loading ? (
            <CardsSkeleton count={4} gridClass="grid gap-8 sm:grid-cols-2 lg:grid-cols-4" cardClass="h-[380px]" />
          ) : error ? (
            <p className="py-10 text-center text-black/50">Impossible de charger l'équipe.</p>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {(teachers ?? []).map((teacher, i) => (
                <Reveal key={teacher.slug} delay={(i % 4) * 100}>
                  <TeacherCard {...teacher} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
