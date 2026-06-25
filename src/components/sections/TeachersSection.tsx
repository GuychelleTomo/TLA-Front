import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { TeacherCard } from '@/components/cards/TeacherCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { teachers } from '@/data/teachers'

const subtitle =
  'Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country'

/** Section équipe pédagogique ("Coache certifiés") — carrousel + cartes menant au profil. */
export function TeachersSection() {
  return (
    <section className="bg-gray-100 py-24">
      <div className="mx-auto max-w-[1400px] px-4">
        <SectionHeading title="Coache certifiés" subtitle={subtitle} />

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          loop
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1000: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          className="teachers-swiper px-1! py-2!"
        >
          {teachers.map((teacher) => (
            <SwiperSlide key={teacher.slug} className="h-auto pb-2">
              <TeacherCard {...teacher} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
