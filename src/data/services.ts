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
    text: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
  },
  {
    icon: 'flaticon-reading',
    title: '5 Langues Clés',
    text: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
  },
  {
    icon: 'flaticon-books',
    title: 'Préparation aux Examens',
    text: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
  },
  {
    icon: 'flaticon-diploma',
    title: 'Horaires Flexibles',
    text: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
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
