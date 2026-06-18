export type Milestone = {
  year: string
  title: string
  text: string
}

/** Étapes clés de l'historique de TLA. */
export const milestones: Milestone[] = [
  {
    year: '2015',
    title: 'Création de TLA',
    text: "TL. Academy ouvre ses portes avec une première promotion d'apprenants en anglais et en espagnol.",
  },
  {
    year: '2018',
    title: 'Ouverture de nouvelles langues',
    text: 'Le centre élargit son offre au portugais, au chinois et à l\'italien pour répondre à une demande croissante.',
  },
  {
    year: '2021',
    title: 'Formations certifiantes',
    text: 'TLA lance la préparation aux examens internationaux (TOEFL, IELTS, DELE) et les parcours en entreprise.',
  },
  {
    year: '2024',
    title: 'Plateforme hybride',
    text: 'Cours en présentiel et à distance, pour un apprentissage flexible adapté à chaque emploi du temps.',
  },
]

export type Pillar = {
  icon: string
  title: string
  text: string
}

/** Mission, Vision, Valeurs. */
export const pillars: Pillar[] = [
  {
    icon: 'flaticon-diploma',
    title: 'Notre Mission',
    text: "Rendre l'apprentissage des langues accessible, concret et motivant, afin que chacun puisse communiquer avec assurance dans un monde international.",
  },
  {
    icon: 'flaticon-education',
    title: 'Notre Vision',
    text: "Devenir le centre de référence pour l'apprentissage des langues vivantes, en alliant immersion, pédagogie moderne et accompagnement personnalisé.",
  },
  {
    icon: 'flaticon-security',
    title: 'Nos Valeurs',
    text: 'Excellence pédagogique, bienveillance, ouverture culturelle et engagement durable envers la réussite de nos apprenants.',
  },
]
