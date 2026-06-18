/** Liens de navigation principaux (menu FR). */
export const navLinks = [
  { label: 'Accueil', to: '/' },
  { label: 'A propos', to: '/about' },
  { label: 'Formations', to: '/formations' },
  { label: 'Galerie', to: '/galerie' },
  { label: 'Actualité', to: '/blog' },
  { label: 'Contact', to: '/contact' },
] as const

/** Coordonnées du centre (à compléter avec les vraies infos NEOTIC). */
export const contact = {
  email: 'contact@neotic.com',
  phone: '+243 000 000 000',
  address: 'Avenue de la Formation, Kinshasa, RDC',
} as const

/** Réseaux sociaux — remplacer "#" par les vraies URLs. */
export const socials = [
  { label: 'Facebook', icon: 'icon-facebook', url: '#' },
  { label: 'Instagram', icon: 'icon-instagram', url: '#' },
  { label: 'LinkedIn', icon: 'icon-linkedin', url: '#' },
  { label: 'WhatsApp', icon: 'icon-whatsapp', url: '#' },
] as const
