export type Course = {
  id: string
  title: string
  image: string
  level: string
  format: string
  duration: string
  excerpt: string
}

export const courses: Course[] = [
  {
    id: 'anglais',
    title: 'Anglais',
    image: '/images/course-1.jpeg',
    level: 'A1 → C2',
    format: 'Présentiel & En ligne',
    duration: '3 à 9 mois',
    excerpt:
      "Anglais général, professionnel et préparation aux examens (TOEFL, IELTS). Communiquez avec assurance dans un contexte international.",
  },
  {
    id: 'espagnol',
    title: 'Espagnol',
    image: '/images/course-2.jpeg',
    level: 'A1 → C1',
    format: 'Présentiel & En ligne',
    duration: '3 à 8 mois',
    excerpt:
      "Apprenez la 2ᵉ langue la plus parlée au monde grâce à une approche immersive axée sur la conversation et la culture.",
  },
  {
    id: 'portugais',
    title: 'Portugais',
    image: '/images/course-3.jpeg',
    level: 'A1 → B2',
    format: 'Présentiel & En ligne',
    duration: '3 à 6 mois',
    excerpt:
      "Portugais du Brésil et du Portugal, pour le voyage, les études ou les affaires, avec des formateurs natifs.",
  },
  {
    id: 'chinois',
    title: 'Chinois (Mandarin)',
    image: '/images/course-4.jpeg',
    level: 'Débutant → HSK 4',
    format: 'Présentiel & En ligne',
    duration: '6 à 12 mois',
    excerpt:
      "Maîtrisez les tons, les caractères et la conversation courante en mandarin, pas à pas, jusqu'à la certification HSK.",
  },
  {
    id: 'italien',
    title: 'Italien',
    image: '/images/course-5.jpeg',
    level: 'A1 → B2',
    format: 'Présentiel & En ligne',
    duration: '3 à 6 mois',
    excerpt:
      "Découvrez la langue de Dante à travers des ateliers thématiques (culture, cuisine, voyage) ancrés dans le quotidien.",
  },
]
