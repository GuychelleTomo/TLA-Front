import { Reveal } from '@/components/ui/Reveal'
import { aboutFeatures } from '@/data/services'

/** Section "À propos" : image + texte + grille d'atouts. */
export function AboutSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-stretch gap-8 md:flex-row">
          {/* Texte */}
          <Reveal className="md:order-1 md:w-7/12 md:pr-4" effect="left">
            <h2 className="mb-4 text-3xl font-semibold">Une immersion totale dans 5 langues d'avenir</h2>
            <p>
              Chez <strong>TLA</strong>, nous croyons qu'apprendre une langue va bien au-delà de l'étude des
              livres. Notre centre s'engage à vous fournir une méthode d'apprentissage active et immersive en{' '}
              <strong>Anglais, Espagnol, Portugais, Chinois et Italien</strong>, conçue pour briser la barrière de
              la langue dès vos premières sessions.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {aboutFeatures.map((f) => (
                <div key={f.title} className="flex gap-3">
                  <div className="mt-1 text-2xl text-primary">
                    <span className={f.icon} />
                  </div>
                  <div>
                    <h3 className="text-lg text-black/80">{f.title}</h3>
                    <p className="text-sm">{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Image */}
          <div className="md:order-2 md:w-5/12">
            <div
              className="h-72 w-full bg-cover bg-center md:h-full"
              style={{ backgroundImage: 'url(/images/about.jpeg)' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
