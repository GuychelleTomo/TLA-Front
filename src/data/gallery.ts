/** Sessions (promotions / cessions) de formation auxquelles les médias sont rattachés. */
export type GallerySession = {
  id: string
  label: string
}

export const gallerySessions: GallerySession[] = [
  { id: 'anglais-2026', label: 'Anglais · Promo 2026' },
  { id: 'espagnol-2025', label: 'Espagnol · Promo 2025' },
  { id: 'chinois-ete-2025', label: 'Chinois · Été 2025' },
  { id: 'evenements', label: 'Événements & vie du centre' },
]

export type GalleryImage = {
  src: string
  /** Identifiant de la session (voir gallerySessions). */
  session: string
}

/** Photos de la galerie, rattachées à une session de formation. */
export const galleryImages: GalleryImage[] = [
  { src: '/images/course-1.jpeg', session: 'anglais-2026' },
  { src: '/images/course-2.jpeg', session: 'anglais-2026' },
  { src: '/images/image_1.jpeg', session: 'anglais-2026' },
  { src: '/images/image_2.jpeg', session: 'anglais-2026' },
  { src: '/images/teacher-1.jpeg', session: 'anglais-2026' },

  { src: '/images/course-3.jpeg', session: 'espagnol-2025' },
  { src: '/images/course-4.jpeg', session: 'espagnol-2025' },
  { src: '/images/image_3.jpeg', session: 'espagnol-2025' },
  { src: '/images/teacher-2.jpeg', session: 'espagnol-2025' },

  { src: '/images/course-5.jpeg', session: 'chinois-ete-2025' },
  { src: '/images/course-6.jpeg', session: 'chinois-ete-2025' },
  { src: '/images/image_4.jpeg', session: 'chinois-ete-2025' },
  { src: '/images/teacher-3.jpeg', session: 'chinois-ete-2025' },

  { src: '/images/about.jpeg', session: 'evenements' },
  { src: '/images/image_5.jpeg', session: 'evenements' },
  { src: '/images/bg_2.jpeg', session: 'evenements' },
  { src: '/images/bg_5.jpeg', session: 'evenements' },
  { src: '/images/teacher-4.jpeg', session: 'evenements' },
]

export type Video = {
  /** URL d'intégration (iframe), sans clé. */
  embed: string
  /** Image d'aperçu. */
  poster: string
  title: string
  /** Identifiant de la session (voir gallerySessions). */
  session: string
}

/** Vidéos de la galerie (lecteur Vimeo intégré), rattachées à une session. */
export const galleryVideos: Video[] = [
  {
    embed: 'https://player.vimeo.com/video/45830194',
    poster: '/images/about-2.jpg',
    title: 'Présentation du centre NEOTIC',
    session: 'evenements',
  },
  {
    embed: 'https://player.vimeo.com/video/22439234',
    poster: '/images/bg_3.jpeg',
    title: 'Séance immersive · Anglais',
    session: 'anglais-2026',
  },
  {
    embed: 'https://player.vimeo.com/video/76979871',
    poster: '/images/course_7.jpeg',
    title: 'Témoignages · Espagnol',
    session: 'espagnol-2025',
  },
]
