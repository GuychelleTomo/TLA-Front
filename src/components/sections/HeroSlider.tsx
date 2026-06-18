import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import { Button } from '@/components/ui/Button'

type Slide = {
  image: string
  title: string
  text: string
}

const slides: Slide[] = [
  {
    image: '/images/bg_1.jpeg',
    title: "Boostez Votre Carrière à l'International",
    text: "Développez vos compétences en Anglais, Espagnol, Chinois, Portugais et Italien avec des formations certifiantes adaptées à vos objectifs professionnels et personnels.",
  },
  {
    image: '/images/bg_2.jpeg',
    title: 'Maîtrisez les Langues, Connectez-vous au Monde',
    text: "Que ce soit pour le travail, les études ou le voyage, apprenez à communiquer avec assurance grâce à nos méthodes d'apprentissage immersives.",
  },
]

/** Slider d'accueil plein écran en fondu (remplace Owl Carousel). */
export function HeroSlider() {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      loop
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      allowTouchMove={false}
      className="h-[700px]"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.image}>
          <div
            className="relative flex h-full items-center bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative mx-auto w-full max-w-6xl px-4">
              <div className="max-w-xl text-white">
                <h1 className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl">
                  {slide.title}
                </h1>
                <p className="text-lg text-white/90">{slide.text}</p>
                <p className="mt-6">
                  <Button to="/contact">Nous contacter</Button>
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
