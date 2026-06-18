import type { Testimonial } from '@/data/testimonials'

/** Carte de témoignage (utilisée dans le carrousel Swiper). */
export function TestimonialCard({ name, role, image, text }: Testimonial) {
  return (
    <div className="flex gap-4 px-4 py-8">
      <div
        className="h-24 w-24 shrink-0 rounded-full bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div>
        <span className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
          <i className="icon-quote-left" />
        </span>
        <p>{text}</p>
        <p className="mt-2 font-semibold text-black/80">{name}</p>
        <span className="text-sm text-primary">{role}</span>
      </div>
    </div>
  )
}
