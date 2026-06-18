import { useState } from 'react'
import { CounterItem } from '@/components/cards/CounterItem'
import { Reveal } from '@/components/ui/Reveal'
import { VideoModal } from '@/components/ui/VideoModal'
import { counters } from '@/data/counters'

const VIDEO_URL = 'https://player.vimeo.com/video/45830194'

/** Section compteurs : fond parallax + bloc vidéo + 4 compteurs animés. */
export function CounterSection() {
  const [open, setOpen] = useState(false)

  return (
    <section
      className="relative bg-dark/90 bg-cover bg-fixed bg-center py-24"
      style={{ backgroundImage: 'url(/images/bg_3.jpeg)' }}
    >
      <div className="absolute inset-0 bg-dark/70" />
      <div className="relative mx-auto max-w-6xl px-4">
        {/* Intro : vidéo + texte */}
        <div className="mb-12 flex flex-col items-stretch gap-8 md:flex-row">
          <div className="md:w-1/2">
            <div
              className="flex h-72 items-center justify-center bg-cover bg-center md:h-full"
              style={{ backgroundImage: 'url(/images/about-2.jpg)' }}
            >
              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Lire la vidéo"
                className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-3xl text-primary shadow-lg transition-transform hover:scale-110"
              >
                <span className="ion-ios-play" />
              </button>
            </div>
          </div>
          <Reveal className="text-white md:w-1/2 md:pl-8" effect="right">
            <h2 className="mb-4 text-3xl font-semibold text-white">TLA en quelques chiffres</h2>
            <p className="text-white/80">
              Separated they live in. A small river named Duden flows by their place and supplies it with the
              necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into
              your mouth.
            </p>
            <p className="mt-3 text-white/80">
              A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a
              paradisematic country.
            </p>
          </Reveal>
        </div>

        {/* Compteurs */}
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {counters.map((counter) => (
            <Reveal key={counter.label}>
              <CounterItem {...counter} />
            </Reveal>
          ))}
        </div>
      </div>

      {/* Modale vidéo */}
      <VideoModal embed={open ? VIDEO_URL : null} onClose={() => setOpen(false)} />
    </section>
  )
}
