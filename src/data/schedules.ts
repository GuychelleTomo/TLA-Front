/** Vagues proposées (Matinée · Midi · Soirée), d'après les supports TLA. */
export type Wave = {
  icon: string
  title: string
  range: string
  text: string
}

export const waves: Wave[] = [
  { icon: 'flaticon-reading', title: 'Vague Matinée', range: '08H – 12H', text: 'Idéale pour bien démarrer la journée.' },
  { icon: 'flaticon-books', title: 'Vague Midi', range: '12H – 16H', text: 'Parfaite pour les étudiants et indépendants.' },
  { icon: 'flaticon-teacher', title: 'Vague Soirée', range: '16H – 20H', text: 'Après le travail, à votre rythme.' },
]

/** Créneaux de 2h de la journée (08H → 20H). */
export const timeSlots = ['08H – 10H', '10H – 12H', '12H – 14H', '14H – 16H', '16H – 18H', '18H – 20H']

export type TimetableGroup = {
  name: string
  days: string[]
  accent: string
}

/** Les deux groupes hebdomadaires (cours de 2h, 08H → 20H). */
export const groups: TimetableGroup[] = [
  { name: 'Groupe 1', days: ['Lundi', 'Mercredi', 'Vendredi'], accent: 'bg-primary' },
  { name: 'Groupe 2', days: ['Mardi', 'Jeudi', 'Samedi'], accent: 'bg-dark' },
]

export type Club = {
  day: string
  time: string
  activity: string
}

/** Clubs linguistiques (pratique conviviale de la langue). */
export const clubs: Club[] = [
  { day: 'Jeudi', time: '18H – 20H', activity: 'Club de langue' },
  { day: 'Samedi', time: '15H – 17H30', activity: 'Club de langue' },
  { day: 'Dimanche', time: '17H30 – 19H45', activity: 'Club de langue' },
]
