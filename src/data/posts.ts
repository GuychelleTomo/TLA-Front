export type Post = {
  slug: string
  title: string
  image: string
  day: string
  month: string
  year: string
  date: string
  author: string
  comments: number
  excerpt: string
}

export const posts: Post[] = [
  {
    slug: 'skills-to-develop-your-child-memory',
    title: 'Skills To Develop Your Child Memory',
    image: '/images/image_1.jpeg',
    day: '26',
    month: 'June',
    year: '2019',
    date: 'June 27, 2019',
    author: 'Admin',
    comments: 3,
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    slug: 'even-the-all-powerful-pointing',
    title: 'Even the all-powerful Pointing has no control about',
    image: '/images/image_2.jpeg',
    day: '26',
    month: 'June',
    year: '2019',
    date: 'June 27, 2019',
    author: 'Admin',
    comments: 3,
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    slug: 'a-small-river-named-duden',
    title: 'A small river named Duden flows by their place',
    image: '/images/image_3.jpeg',
    day: '26',
    month: 'June',
    year: '2019',
    date: 'June 27, 2019',
    author: 'Admin',
    comments: 3,
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
]
