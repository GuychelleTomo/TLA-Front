import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import { TestimonialCard } from '@/components/cards/TestimonialCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useAsync } from '@/hooks/useAsync'
import { getTestimonials } from '@/services/content'
import { CardsSkeleton } from '@/components/ui/Skeleton'

const subtitle =
  'Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country'

/** Carrousel de témoignages (remplace Owl Carousel, 2 items au centre). */
export function Testimonials() {
  const { data: testimonials, loading, error } = useAsync(() => getTestimonials(), [])

  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading title="Student Says About Us" subtitle={subtitle} />
        {loading ? (
          <CardsSkeleton count={2} gridClass="grid gap-8 md:grid-cols-2" cardClass="h-[220px]" />
        ) : error ? (
          <p className="py-10 text-center text-black/50">Impossible de charger les témoignages.</p>
        ) : (
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          centeredSlides
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            1000: { slidesPerView: 2 },
          }}
        >
          {(testimonials ?? []).map((t, i) => (
            <SwiperSlide key={`${t.name}-${i}`}>
              <TestimonialCard {...t} />
            </SwiperSlide>
          ))}
        </Swiper>
        )}
      </div>
    </section>
  )
}
