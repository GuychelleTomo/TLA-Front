export type Formule = {
  /** Nom de la formule (ex. « Cours classiques »). */
  name: string
  /** Public visé (ex. « Enfants & étudiants »). */
  audience: string
  /** Icône (flaticon / icon-*). */
  icon: string
  /** Format (Présentiel, En ligne, À domicile, Hybride). */
  format: string
  /** Rythme des séances. */
  rhythm: string
  /** Tarif principal affiché. */
  price: string
  /** Précision tarifaire (paiement, équivalent, etc.). */
  priceNote?: string
  /** Durée indicative. */
  duration: string
  /** Points forts de la formule. */
  features: string[]
  /** Met la formule en avant (badge « Populaire »). */
  featured?: boolean
}

export type Course = {
  id: string
  title: string
  /** Drapeau de la langue. */
  flag: string
  image: string
  level: string
  format: string
  duration: string
  excerpt: string
  /** Présentation détaillée (paragraphes). */
  description: string[]
  /** Modules abordés en présentiel. */
  modules: string[]
  /** Formules / offres disponibles. */
  formules: Formule[]
  /** Préparations aux examens / certifications. */
  examPrep: string[]
}

/** Modalités d'inscription communes (extraites des supports officiels TLA). */
export const enrollment = {
  start: '02 Mai 2026',
  seats: 'Places limitées — 10 personnes par vague',
  waves: 'Matinée · Midi · Soirée — 3 séances par semaine',
  payment: 'Paiement unique en début de session',
  material: 'Tout le matériel didactique est fourni',
  online: 'En ligne via Zoom & Google Meet',
  whatsapp: '+242 06 417 60 83',
  registration: 'Écrivez LANGUE + OUI au +242 06 417 60 83',
} as const

/** Génère le jeu de formules type d'une langue (ancré sur le Pack Premium documenté). */
function makeFormules(lang: string, mensualite: string): Formule[] {
  return [
    {
      name: 'Cours classiques',
      audience: 'Enfants & étudiants',
      icon: 'flaticon-reading',
      format: 'Présentiel',
      rhythm: '3 séances de 2h / semaine',
      price: mensualite,
      priceNote: 'par mois · inscription 15.000 FCFA',
      duration: '3 à 9 mois',
      features: [
        'Groupes réduits par niveau',
        'Supports et manuels fournis',
        'Suivi individuel des progrès',
      ],
    },
    {
      name: 'Cours professionnel',
      audience: 'Adultes & entreprises',
      icon: 'flaticon-diploma',
      format: 'Présentiel · À domicile · En entreprise',
      rhythm: 'Selon vos disponibilités',
      price: 'Sur devis',
      priceNote: 'programme sur mesure',
      duration: 'Modulable',
      features: [
        `${lang} des affaires et des réunions`,
        'Rédaction de mails et négociation',
        'Formations intra-entreprise',
      ],
    },
    {
      name: 'Pack Premium — En ligne',
      audience: 'Tous publics',
      icon: 'flaticon-teacher',
      format: 'En ligne (Zoom & Google Meet)',
      rhythm: 'Cours par vague, 3 fois / semaine',
      price: '100.000 FCFA',
      priceNote: '≈ 150 € · paiement unique · 3 mois',
      duration: '3 mois',
      featured: true,
      features: [
        'Vagues Matinée · Midi · Soirée au choix',
        'Suivi & groupe réduit WhatsApp',
        'Matériel didactique offert',
      ],
    },
    {
      name: 'Cours particuliers',
      audience: 'Sur mesure',
      icon: 'flaticon-education',
      format: 'À domicile · En ligne',
      rhythm: 'Rythme personnalisé',
      price: 'Sur devis',
      priceNote: 'individuel ou en duo',
      duration: 'Libre',
      features: [
        'Programme 100 % personnalisé',
        'Horaires flexibles',
        'Progression accélérée',
      ],
    },
  ]
}

export const courses: Course[] = [
  {
    id: 'anglais',
    title: 'Anglais',
    flag: '/images/flags/gb.svg',
    image: '/images/course-1.jpeg',
    level: 'A1 → C2',
    format: 'Présentiel & En ligne',
    duration: '3 à 9 mois',
    excerpt:
      "Anglais général, professionnel et préparation aux examens (TOEFL, IELTS). Communiquez avec assurance dans un contexte international.",
    description: [
      "L'anglais est la langue des affaires, du voyage et du numérique. Chez Tarvel Languages Academy, nous vous accompagnons de l'alphabet à l'aisance professionnelle grâce à une pédagogie immersive et conversationnelle.",
      "Que vous soyez débutant, étudiant ou cadre en entreprise, nos coachs certifiés adaptent chaque parcours à votre objectif : examens internationaux, entretiens, réunions ou voyages.",
    ],
    modules: [
      'Compréhension & expression orales',
      'Grammaire et conjugaison',
      'Vocabulaire thématique',
      'Phonétique & accent',
      'Rédaction professionnelle',
      'Mises en situation et jeux de rôle',
    ],
    formules: makeFormules('Anglais', '35.000 FCFA'),
    examPrep: ['TOEFL', 'IELTS', 'TOEIC', 'Cambridge (PET, FCE)'],
  },
  {
    id: 'espagnol',
    title: 'Espagnol',
    flag: '/images/flags/es.svg',
    image: '/images/course-2.jpeg',
    level: 'A1 → C1',
    format: 'Présentiel & En ligne',
    duration: '3 à 8 mois',
    excerpt:
      "Apprenez la 2ᵉ langue la plus parlée au monde grâce à une approche immersive axée sur la conversation et la culture.",
    description: [
      "Deuxième langue maternelle la plus parlée au monde, l'espagnol ouvre les portes de l'Amérique latine et de l'Espagne. Nos ateliers mêlent conversation, culture et situations du quotidien.",
      "Une pédagogie vivante (cinéma, cuisine, voyage) qui ancre la langue dans des contextes réels, pour parler avec naturel dès les premières semaines.",
    ],
    modules: [
      'Conversation courante',
      'Grammaire et conjugaison',
      'Vocabulaire & expressions idiomatiques',
      'Culture hispanique',
      'Compréhension écrite et orale',
      'Ateliers thématiques',
    ],
    formules: makeFormules('Espagnol', '32.000 FCFA'),
    examPrep: ['DELE', 'SIELE'],
  },
  {
    id: 'portugais',
    title: 'Portugais',
    flag: '/images/flags/pt.svg',
    image: '/images/course-3.jpeg',
    level: 'A1 → B2',
    format: 'Présentiel & En ligne',
    duration: '3 à 6 mois',
    excerpt:
      "Portugais du Brésil et du Portugal, pour le voyage, les études ou les affaires, avec des formateurs natifs.",
    description: [
      "Du Brésil au Portugal, le portugais est parlé par plus de 260 millions de personnes. Nos formateurs natifs vous guident vers une communication fluide et authentique.",
      "Idéal pour le voyage, les études ou les opportunités professionnelles dans l'espace lusophone, avec un accent mis sur l'oral.",
    ],
    modules: [
      'Expression orale et prononciation',
      'Grammaire essentielle',
      'Vocabulaire pratique',
      'Différences Brésil / Portugal',
      'Compréhension audio',
      'Mises en situation',
    ],
    formules: makeFormules('Portugais', '32.000 FCFA'),
    examPrep: ['CELPE-Bras', 'CAPLE'],
  },
  {
    id: 'chinois',
    title: 'Chinois (Mandarin)',
    flag: '/images/flags/cn.svg',
    image: '/images/course-4.jpeg',
    level: 'Débutant → HSK 4',
    format: 'Présentiel & En ligne',
    duration: '6 à 12 mois',
    excerpt:
      "Maîtrisez les tons, les caractères et la conversation courante en mandarin, pas à pas, jusqu'à la certification HSK.",
    description: [
      "Première langue maternelle au monde, le mandarin est un atout majeur dans le commerce international. Nous vous initions pas à pas aux tons, aux caractères et à la conversation.",
      "Une méthode structurée et progressive, de l'alphabet pinyin jusqu'à la certification HSK, portée par des coachs expérimentés à l'international.",
    ],
    modules: [
      'Pinyin & système des tons',
      'Écriture des caractères',
      'Conversation de base',
      'Vocabulaire du quotidien',
      'Culture chinoise',
      'Préparation HSK',
    ],
    formules: makeFormules('Chinois', '40.000 FCFA'),
    examPrep: ['HSK 1 à 4', 'HSKK (oral)'],
  },
  {
    id: 'italien',
    title: 'Italien',
    flag: '/images/flags/it.svg',
    image: '/images/course-5.jpeg',
    level: 'A1 → B2',
    format: 'Présentiel & En ligne',
    duration: '3 à 6 mois',
    excerpt:
      "Découvrez la langue de Dante à travers des ateliers thématiques (culture, cuisine, voyage) ancrés dans le quotidien.",
    description: [
      "Langue de l'art, de la mode et de la gastronomie, l'italien se découvre avec plaisir à travers sa culture. Nos ateliers thématiques rendent l'apprentissage vivant et concret.",
      "Pour le voyage, les études ou le simple amour de la langue, progressez rapidement vers une conversation naturelle.",
    ],
    modules: [
      'Conversation et prononciation',
      'Grammaire et conjugaison',
      'Vocabulaire thématique',
      'Culture italienne',
      'Compréhension écrite et orale',
      'Ateliers (cuisine, cinéma, voyage)',
    ],
    formules: makeFormules('Italien', '32.000 FCFA'),
    examPrep: ['CILS', 'CELI'],
  },
]
