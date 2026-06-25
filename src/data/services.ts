export type Service = {
  icon: string
  title: string
  text: string
}

/** Bande de services en haut de la home (fonds alternés). */
export const services: Service[] = [
  {
    icon: 'flaticon-teacher',
    title: 'Formateurs Experts & Natifs',
    text: 'Des coachs certifiés et passionnés qui adaptent chaque parcours à votre objectif.',
  },
  {
    icon: 'flaticon-reading',
    title: '5 Langues Clés',
    text: 'Anglais, Espagnol, Portugais, Chinois et Italien — pour tous les niveaux.',
  },
  {
    icon: 'flaticon-books',
    title: 'Préparation aux Examens',
    text: 'TOEFL, IELTS, DELE, HSK… réussissez vos certifications internationales.',
  },
  {
    icon: 'flaticon-diploma',
    title: 'Horaires Flexibles',
    text: 'Vagues Matinée, Midi et Soirée, en présentiel comme en ligne.',
  },
]

/** Prestations linguistiques de TLA, présentées sur la page Formation & Services. */
export const proServices: Service[] = [
  {
    icon: 'flaticon-jigsaw',
    title: 'Traduction événementielle & en entreprise',
    text: "Traduction professionnelle de vos échanges, contenus et documents d'entreprise lors de vos événements.",
  },
  {
    icon: 'flaticon-books',
    title: 'Traduction orale & des documents',
    text: 'Traductions orales et manuscrites de vos documents officiels, administratifs ou personnels.',
  },
  {
    icon: 'flaticon-teacher',
    title: 'Interprétation événementielle & privée',
    text: 'Interprètes qualifiés pour vos conférences, réunions, cérémonies et rendez-vous privés.',
  },
  {
    icon: 'flaticon-diploma',
    title: 'Maître de cérémonie polyglotte',
    text: "Animation multilingue de vos cérémonies et événements par un maître de cérémonie expérimenté.",
  },
]

/** Atouts listés dans la section "À propos". */
export const aboutFeatures: Service[] = [
  { icon: 'flaticon-security', title: 'Safety First', text: 'Far far away, behind the word mountains, far from the countries Vokalia.' },
  { icon: 'flaticon-reading', title: 'Regular Classes', text: 'Far far away, behind the word mountains, far from the countries Vokalia.' },
  { icon: 'flaticon-diploma', title: 'Certified Teachers', text: 'Far far away, behind the word mountains, far from the countries Vokalia.' },
  { icon: 'flaticon-education', title: 'Sufficient Classrooms', text: 'Far far away, behind the word mountains, far from the countries Vokalia.' },
  { icon: 'flaticon-jigsaw', title: 'Creative Lessons', text: 'Far far away, behind the word mountains, far from the countries Vokalia.' },
  { icon: 'flaticon-kids', title: 'Sports Facilities', text: 'Far far away, behind the word mountains, far from the countries Vokalia.' },
]
