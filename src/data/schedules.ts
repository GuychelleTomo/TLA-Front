export type Session = {
  language: string
  level: string
  days: string
  time: string
  format: 'Présentiel' | 'En ligne' | 'Hybride'
}

/** Emploi du temps hebdomadaire des formations. */
export const schedules: Session[] = [
  { language: 'Anglais', level: 'Débutant (A1/A2)', days: 'Lun & Mer', time: '18h00 – 20h00', format: 'Présentiel' },
  { language: 'Anglais', level: 'Business', days: 'Samedi', time: '09h00 – 12h00', format: 'Hybride' },
  { language: 'Espagnol', level: 'Tous niveaux', days: 'Mar & Jeu', time: '18h00 – 20h00', format: 'Présentiel' },
  { language: 'Portugais', level: 'A1 → B1', days: 'Mar & Jeu', time: '17h00 – 19h00', format: 'En ligne' },
  { language: 'Chinois', level: 'Débutant', days: 'Samedi', time: '14h00 – 17h00', format: 'Présentiel' },
  { language: 'Italien', level: 'Tous niveaux', days: 'Lun & Mer', time: '17h00 – 19h00', format: 'En ligne' },
]

/** Créneaux types proposés. */
export type Slot = {
  icon: string
  title: string
  text: string
}

export const slots: Slot[] = [
  { icon: 'flaticon-reading', title: 'Cours du matin', text: '09h00 – 12h00, en semaine et le samedi.' },
  { icon: 'flaticon-books', title: "Cours de l'après-midi", text: '14h00 – 17h00, idéal pour les étudiants.' },
  { icon: 'flaticon-teacher', title: 'Cours du soir', text: '17h00 – 20h00, après le travail.' },
  { icon: 'flaticon-diploma', title: 'Cours du week-end', text: 'Sessions intensives le samedi.' },
]
