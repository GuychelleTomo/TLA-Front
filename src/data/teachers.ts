export type LanguageSkill = {
  /** Langue parlée (ex. « Anglais »). */
  name: string
  /** Niveau (ex. « Natif », « Courant », « C1 »). */
  level: string
}

export type TeacherLink = {
  /** Libellé affiché (ex. « LinkedIn », « Site personnel »). */
  label: string
  /** URL complète. */
  url: string
  /** Classe d'icône (ionicons / icomoon). */
  icon: string
}

export type Teacher = {
  slug: string
  name: string
  role: string
  image: string
  /** Phrase courte affichée sur la carte. */
  bio: string
  /** Spécialité / langue enseignée. */
  specialty: string
  /** Biographie complète (paragraphes) affichée sur la page de détail. */
  biography: string[]
  /** Fonction occupée au sein de TLA. */
  fonction: string
  /** Langues parlées avec leur niveau. */
  languages: LanguageSkill[]
  /** Chemin du CV (PDF) — consultable et téléchargeable. */
  cv: string
  /** Pages web / profils du coach. */
  links: TeacherLink[]
  /** Adresse e-mail de contact. */
  email: string
  /** Nombre d'années d'expérience. */
  experienceYears: number
  /** Parcours / diplômes (puces). */
  education: string[]
}

const shortBio = 'I am an ambitious workaholic, but apart from that, pretty simple person.'

export const teachers: Teacher[] = [
  {
    slug: 'bianca-wilson',
    name: 'Bianca Wilson',
    role: 'Teacher',
    image: '/images/teacher-1.jpeg',
    bio: shortBio,
    specialty: 'Anglais',
    biography: [
      "Bianca enseigne l'anglais depuis plus de dix ans et accompagne aussi bien les débutants que les cadres en préparation d'examens internationaux (TOEFL, IELTS).",
      "Diplômée en linguistique appliquée, elle privilégie une approche immersive et conversationnelle qui aide ses élèves à gagner en aisance dès les premières séances.",
      "Au sein de TLA, elle conçoit les parcours d'anglais général et professionnel et forme les nouveaux coachs à sa méthode.",
    ],
    fonction: 'Coordinatrice pédagogique — Pôle Anglais',
    languages: [
      { name: 'Anglais', level: 'Natif' },
      { name: 'Français', level: 'Courant' },
      { name: 'Espagnol', level: 'Intermédiaire (B1)' },
    ],
    cv: '/cv/bianca-wilson.pdf',
    links: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com', icon: 'icon-linkedin' },
      { label: 'Site personnel', url: 'https://example.com', icon: 'ion-ios-globe' },
      { label: 'Twitter / X', url: 'https://twitter.com', icon: 'icon-twitter' },
    ],
    email: 'bianca.wilson@tla.com',
    experienceYears: 12,
    education: [
      "Master en linguistique appliquée — University of Leeds",
      "Certification CELTA (Cambridge)",
      "Examinatrice agréée IELTS",
    ],
  },
  {
    slug: 'mitch-parker',
    name: 'Mitch Parker',
    role: 'English Teacher',
    image: '/images/teacher-2.jpeg',
    bio: shortBio,
    specialty: 'Anglais des affaires',
    biography: [
      "Mitch est spécialisé dans l'anglais professionnel et des affaires. Il a travaillé plusieurs années en entreprise avant de se consacrer à l'enseignement.",
      "Ses cours mettent l'accent sur la prise de parole en réunion, la rédaction d'e-mails et la négociation en contexte international.",
      "Il pilote les formations intra-entreprise de TLA et conçoit des modules sur mesure pour les équipes commerciales.",
    ],
    fonction: 'Référent Anglais Professionnel & Formations en entreprise',
    languages: [
      { name: 'Anglais', level: 'Natif' },
      { name: 'Français', level: 'Courant' },
      { name: 'Allemand', level: 'Notions (A2)' },
    ],
    cv: '/cv/mitch-parker.pdf',
    links: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com', icon: 'icon-linkedin' },
      { label: 'Portfolio', url: 'https://example.com', icon: 'ion-ios-globe' },
    ],
    email: 'mitch.parker@tla.com',
    experienceYears: 9,
    education: [
      "MBA — Manchester Business School",
      "Diplôme TESOL",
      "Ancien Business Development Manager",
    ],
  },
  {
    slug: 'stella-smith',
    name: 'Stella Smith',
    role: 'Art Teacher',
    image: '/images/teacher-3.jpeg',
    bio: shortBio,
    specialty: 'Espagnol & Italien',
    biography: [
      "Stella est trilingue et enseigne l'espagnol et l'italien avec une pédagogie axée sur la culture et le quotidien.",
      'Elle organise régulièrement des ateliers thématiques (cinéma, cuisine, voyage) pour ancrer la langue dans des situations réelles.',
      "Chez TLA, elle anime le pôle langues latines et coordonne les ateliers culturels mensuels.",
    ],
    fonction: 'Responsable du Pôle Langues Latines',
    languages: [
      { name: 'Espagnol', level: 'Natif' },
      { name: 'Italien', level: 'Courant' },
      { name: 'Français', level: 'Courant' },
      { name: 'Anglais', level: 'Intermédiaire (B2)' },
    ],
    cv: '/cv/stella-smith.pdf',
    links: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com', icon: 'icon-linkedin' },
      { label: 'Instagram', url: 'https://instagram.com', icon: 'icon-instagram' },
      { label: 'Blog culturel', url: 'https://example.com', icon: 'ion-ios-globe' },
    ],
    email: 'stella.smith@tla.com',
    experienceYears: 8,
    education: [
      "Licence de langues étrangères appliquées — Universidad de Salamanca",
      "Certification DELE & PLIDA",
    ],
  },
  {
    slug: 'monshe-henderson',
    name: 'Monshe Henderson',
    role: 'Science Teacher',
    image: '/images/teacher-4.jpeg',
    bio: shortBio,
    specialty: 'Chinois & Portugais',
    biography: [
      'Monshe a vécu plusieurs années en Asie et au Brésil, ce qui nourrit son enseignement du chinois mandarin et du portugais.',
      "Patient et structuré, il guide ses élèves pas à pas, de l'alphabet et des tons jusqu'à la conversation courante.",
      "Il développe pour TLA les supports d'apprentissage du mandarin et accompagne les départs à l'international.",
    ],
    fonction: "Coach Langues d'Asie & du Monde lusophone",
    languages: [
      { name: 'Chinois (mandarin)', level: 'Courant' },
      { name: 'Portugais', level: 'Courant' },
      { name: 'Anglais', level: 'Courant' },
      { name: 'Français', level: 'Intermédiaire (B1)' },
    ],
    cv: '/cv/monshe-henderson.pdf',
    links: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com', icon: 'icon-linkedin' },
      { label: 'Site personnel', url: 'https://example.com', icon: 'ion-ios-globe' },
    ],
    email: 'monshe.henderson@tla.com',
    experienceYears: 10,
    education: [
      "Master d'études chinoises — INALCO",
      "Certification HSK 6",
      "Expérience d'enseignement à Shanghai et São Paulo",
    ],
  },
]
