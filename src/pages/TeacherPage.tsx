import { useState } from 'react'
import { PageHero } from '@/components/ui/PageHero'
import { TeacherCard } from '@/components/cards/TeacherCard'
import { TeacherModal } from '@/components/teachers/TeacherModal'
import { Reveal } from '@/components/ui/Reveal'
import { teachers, type Teacher } from '@/data/teachers'

export function TeacherPage() {
  const [selected, setSelected] = useState<Teacher | null>(null)
  const allTeachers = [...teachers, ...teachers]

  return (
    <>
      <PageHero
        title="Certified Teacher"
        crumbs={[{ label: 'Accueil', to: '/' }, { label: 'Équipe' }]}
      />
      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {allTeachers.map((teacher, i) => (
              <Reveal key={`${teacher.slug}-${i}`} delay={(i % 4) * 100}>
                <TeacherCard {...teacher} onClick={() => setSelected(teacher)} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TeacherModal teacher={selected} onClose={() => setSelected(null)} />
    </>
  )
}
