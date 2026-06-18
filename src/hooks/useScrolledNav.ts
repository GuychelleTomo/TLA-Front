import { useEffect, useState } from 'react'

/**
 * Suit le défilement pour afficher la navbar fixe « réveillée ».
 * Reproduit la logique scrolled/awake de main.js (apparition de la barre
 * blanche fixe quand on dépasse ~350px).
 */
export function useScrolledNav(threshold = 350) {
  const [awake, setAwake] = useState(false)

  useEffect(() => {
    const onScroll = () => setAwake(window.scrollY > threshold)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return awake
}
