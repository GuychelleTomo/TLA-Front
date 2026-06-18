import { HeroSlider } from '@/components/sections/HeroSlider'
import { ServicesStrip } from '@/components/sections/ServicesStrip'
import { AboutSection } from '@/components/sections/AboutSection'
import { CounterSection } from '@/components/sections/CounterSection'
import { CoursesSection } from '@/components/sections/CoursesSection'
import { TeachersSection } from '@/components/sections/TeachersSection'
import { ConsultForm } from '@/components/sections/ConsultForm'
import { RecentBlog } from '@/components/sections/RecentBlog'
import { Testimonials } from '@/components/sections/Testimonials'
import { Gallery } from '@/components/sections/Gallery'

export function HomePage() {
  return (
    <>
      <HeroSlider />
      <ServicesStrip />
      <AboutSection />
      <CounterSection />
      <CoursesSection />
      <TeachersSection />
      <ConsultForm />
      <RecentBlog />
      <Testimonials />
      <Gallery />
    </>
  )
}
