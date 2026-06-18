import { Reveal } from '@/components/ui/Reveal'

const inputClass =
  'w-full rounded bg-white px-4 py-3 text-black/80 outline-none placeholder:text-black/40 focus:ring-2 focus:ring-primary'

/** Section "Nous rejoindre" : formulaire sur fond parallax. */
export function ConsultForm() {
  return (
    <section
      className="relative bg-cover bg-fixed bg-center"
      style={{ backgroundImage: 'url(/images/bg_5.jpeg)' }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="flex justify-end">
          <Reveal className="w-full py-20 md:w-1/2 md:py-28 md:pl-8">
            <div className="mb-8">
              <h2 className="mb-4 text-3xl font-semibold text-white">Nous rejoindre</h2>
              <p className="text-white/80">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                the blind texts.
              </p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input type="text" placeholder="First Name" className={inputClass} />
                <input type="text" placeholder="Last Name" className={inputClass} />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <select className={inputClass} defaultValue="">
                  <option value="" disabled>
                    Select Your Course
                  </option>
                  <option>Art Lesson</option>
                  <option>Language Lesson</option>
                  <option>Music Lesson</option>
                  <option>Sports</option>
                  <option>Other Services</option>
                </select>
                <input type="text" placeholder="Phone" className={inputClass} />
              </div>
              <div className="grid items-end gap-4 sm:grid-cols-2">
                <textarea rows={2} placeholder="Message" className={inputClass} />
                <input
                  type="submit"
                  value="Request A Quote"
                  className="cursor-pointer rounded bg-primary px-4 py-3 text-white transition-colors hover:bg-primary-light"
                />
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
