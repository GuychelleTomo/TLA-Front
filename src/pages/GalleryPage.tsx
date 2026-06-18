import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { PageHero } from '@/components/ui/PageHero'
import { VideoModal } from '@/components/ui/VideoModal'
import { Reveal } from '@/components/ui/Reveal'
import { galleryImages, galleryVideos, gallerySessions } from '@/data/gallery'
import { cn } from '@/lib/cn'

type TypeFilter = 'all' | 'photos' | 'videos'

const typeFilters: { key: TypeFilter; label: string }[] = [
  { key: 'all', label: 'Tout' },
  { key: 'photos', label: 'Photos' },
  { key: 'videos', label: 'Vidéos' },
]

function Pill({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'rounded-full px-5 py-2 text-sm transition-colors',
        active ? 'bg-primary text-white' : 'bg-gray-100 text-black/70 hover:bg-primary/10 hover:text-primary',
      )}
    >
      {children}
    </button>
  )
}

export function GalleryPage() {
  const [type, setType] = useState<TypeFilter>('all')
  const [session, setSession] = useState<string>('all')
  const [photoIndex, setPhotoIndex] = useState(-1)
  const [video, setVideo] = useState<string | null>(null)

  const inSession = (s: string) => session === 'all' || s === session

  const visiblePhotos = galleryImages.filter((img) => inSession(img.session))
  const visibleVideos = galleryVideos.filter((v) => inSession(v.session))

  const showPhotos = type === 'all' || type === 'photos'
  const showVideos = type === 'all' || type === 'videos'

  const isEmpty =
    (!showPhotos || visiblePhotos.length === 0) && (!showVideos || visibleVideos.length === 0)

  return (
    <>
      <PageHero
        title="Galerie"
        crumbs={[{ label: 'Accueil', to: '/' }, { label: 'Galerie' }]}
      />

      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-4">
          {/* Filtre par session de formation */}
          <div className="mb-4 flex flex-wrap justify-center gap-3">
            <Pill active={session === 'all'} onClick={() => setSession('all')}>
              Toutes les sessions
            </Pill>
            {gallerySessions.map((s) => (
              <Pill key={s.id} active={session === s.id} onClick={() => setSession(s.id)}>
                {s.label}
              </Pill>
            ))}
          </div>

          {/* Filtre par type de média */}
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {typeFilters.map((f) => (
              <Pill key={f.key} active={type === f.key} onClick={() => setType(f.key)}>
                {f.label}
              </Pill>
            ))}
          </div>

          {isEmpty ? (
            <p className="py-10 text-center text-black/50">
              Aucun média pour cette sélection pour le moment.
            </p>
          ) : (
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {/* Vidéos */}
              {showVideos &&
                visibleVideos.map((v, i) => (
                  <Reveal key={v.embed} delay={(i % 4) * 80}>
                    <button
                      type="button"
                      onClick={() => setVideo(v.embed)}
                      aria-label={`Lire la vidéo : ${v.title}`}
                      className="group relative flex h-56 w-full items-center justify-center overflow-hidden rounded bg-cover bg-center"
                      style={{ backgroundImage: `url(${v.poster})` }}
                    >
                      <span className="absolute inset-0 bg-dark/40 transition-colors group-hover:bg-dark/60" />
                      <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white text-2xl text-primary transition-transform group-hover:scale-110">
                        <span className="ion-ios-play" />
                      </span>
                      <span className="absolute bottom-3 left-3 right-3 text-left text-sm font-medium text-white">
                        {v.title}
                      </span>
                    </button>
                  </Reveal>
                ))}

              {/* Photos */}
              {showPhotos &&
                visiblePhotos.map((img, i) => (
                  <Reveal key={img.src} delay={(i % 4) * 80}>
                    <button
                      type="button"
                      onClick={() => setPhotoIndex(i)}
                      aria-label="Agrandir l'image"
                      className="group relative flex h-56 w-full items-center justify-center overflow-hidden rounded bg-cover bg-center"
                      style={{ backgroundImage: `url(${img.src})` }}
                    >
                      <span className="absolute inset-0 bg-dark/40 opacity-0 transition-opacity group-hover:opacity-100" />
                      <span className="ion-ios-search relative text-3xl text-white opacity-0 transition-opacity group-hover:opacity-100" />
                    </button>
                  </Reveal>
                ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox photos (sur la sélection courante) */}
      <Lightbox
        open={photoIndex >= 0}
        index={Math.max(photoIndex, 0)}
        close={() => setPhotoIndex(-1)}
        slides={visiblePhotos.map((img) => ({ src: img.src }))}
      />

      {/* Modale vidéo */}
      <VideoModal embed={video} onClose={() => setVideo(null)} />
    </>
  )
}
