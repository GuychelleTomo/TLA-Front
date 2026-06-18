import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

type GalleryItem = {
  thumb: string
  full: string
}

const items: GalleryItem[] = [
  { thumb: '/images/course-1.jpeg', full: '/images/image_1.jpeg' },
  { thumb: '/images/image_2.jpeg', full: '/images/image_2.jpeg' },
  { thumb: '/images/image_3.jpeg', full: '/images/image_3.jpeg' },
  { thumb: '/images/image_4.jpeg', full: '/images/bg_3.jpeg' },
]

/** Galerie 4 images avec lightbox (remplace Magnific Popup). */
export function Gallery() {
  const [index, setIndex] = useState(-1)

  return (
    <section>
      <div className="grid grid-cols-2 md:grid-cols-4">
        {items.map((item, i) => (
          <button
            type="button"
            key={item.thumb}
            onClick={() => setIndex(i)}
            className="group relative flex h-64 items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${item.thumb})` }}
            aria-label="Agrandir l'image"
          >
            <span className="absolute inset-0 bg-dark/40 opacity-0 transition-opacity group-hover:opacity-100" />
            <span className="icon-instagram relative text-3xl text-white opacity-0 transition-opacity group-hover:opacity-100" />
          </button>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        index={Math.max(index, 0)}
        close={() => setIndex(-1)}
        slides={items.map((item) => ({ src: item.full }))}
      />
    </section>
  )
}
