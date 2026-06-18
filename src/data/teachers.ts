export type Teacher = {
  slug: string
  name: string
  role: string
  image: string
  /** Phrase courte affichée sur la carte. */
  bio: string
  /** Spécialité / langue enseignée. */
  specialty: string
  /** Biographie complète (paragraphes) affichée dans la modale. */
  biography: string[]
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
      'Ses cours mettent l\'accent sur la prise de parole en réunion, la rédaction d\'e-mails et la négociation en contexte international.',
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
    ],
  },
    {
    slug: 'monsh-henderson',
    name: 'Monsh Henderson',
    role: 'Scien Teacher',
    image: '/images/teacher-4.jpeg',
    bio: shortBio,
    specialty: 'Chinois & Portugais',
    biography: [
      'Monshe a vécu plusieurs années en Asie et au Brésil, ce qui nourrit son enseignement du chinois mandarin et du portugais.',
      "Patient et structuré, il guide ses élèves pas à pas, de l'alphabet et des tons jusqu'à la conversation courante.",
    ],
  },
]
