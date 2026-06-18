import { useEffect, useRef, useState } from 'react'

/**
 * Compteur animé déclenché à l'entrée en vue.
 * Remplace jquery.animateNumber (`.number[data-number]`) du template.
 */
export function useCountUp<T extends HTMLElement = HTMLDivElement>(
  target: number,
  duration = 2500,
) {
  const ref = useRef<T>(null)
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry?.isIntersecting || started.current) return
        started.current = true
        observer.disconnect()

        let frame = 0
        const start = performance.now()
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          // easing easeOutQuad pour un rendu proche d'animateNumber
          const eased = 1 - (1 - progress) * (1 - progress)
          setValue(Math.round(eased * target))
          if (progress < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(frame)
      },
      { threshold: 0.4 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return { ref, value }
}
