import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import { TestimonialCard } from '@/components/cards/TestimonialCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { testimonials } from '@/data/testimonials'

const subtitle =
  'Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country'

/** Carrousel de témoignages (remplace Owl Carousel, 2 items au centre). */
export function Testimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading title="Student Says About Us" subtitle={subtitle} />
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
          {testimonials.map((t, i) => (
            <SwiperSlide key={`${t.name}-${i}`}>
              <TestimonialCard {...t} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
