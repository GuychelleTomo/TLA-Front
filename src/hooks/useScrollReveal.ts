import { useEffect, useRef, useState } from 'react'

/**
 * Révèle un élément quand il entre dans le viewport.
 * Remplace le couple `ftco-animate` + jquery.waypoints du template.
 * Retourne une ref à poser sur l'élément et un booléen `visible`.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = { threshold: 0.1, rootMargin: '0px 0px -5% 0px' },
) {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || visible) return

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
          break
        }
      }
    }, options)

    observer.observe(el)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible])

  return { ref, visible }
}
