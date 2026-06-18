import { useEffect } from 'react'

type VideoModalProps = {
  /** URL d'intégration (iframe) ; `null` ferme la modale. */
  embed: string | null
  onClose: () => void
}

/** Modale plein écran pour lire une vidéo intégrée (Vimeo/YouTube). */
export function VideoModal({ embed, onClose }: VideoModalProps) {
  useEffect(() => {
    if (!embed) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [embed, onClose])

  if (!embed) return null

  const src = `${embed}${embed.includes('?') ? '&' : '?'}autoplay=1`

  return (
    <div
      className="fixed inset-0 z-[1100] flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Lecteur vidéo"
    >
      <button
        type="button"
        aria-label="Fermer"
        className="absolute right-6 top-6 text-3xl text-white"
        onClick={onClose}
      >
        <span className="ion-ios-close" />
      </button>
      <div className="aspect-video w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
        <iframe
          src={src}
          title="Lecteur vidéo"
          allow="autoplay; fullscreen; picture-in-picture"
          className="h-full w-full rounded"
        />
      </div>
    </div>
  )
}
