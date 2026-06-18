import { PageHero } from '@/components/ui/PageHero'
import { AboutSection } from '@/components/sections/AboutSection'
import { HistorySection } from '@/components/sections/HistorySection'
import { MissionVisionSection } from '@/components/sections/MissionVisionSection'
import { CounterSection } from '@/components/sections/CounterSection'
import { TeachersSection } from '@/components/sections/TeachersSection'

export function AboutPage() {
  return (
    <>
      <PageHero
        title="A propos"
        crumbs={[{ label: 'Accueil', to: '/' }, { label: 'A propos' }]}
      />
      <AboutSection />
      <HistorySection />
      <MissionVisionSection />
      <CounterSection />
      <TeachersSection />
    </>
  )
}
