export type Testimonial = {
  name: string
  role: string
  image: string
  text: string
}

const text =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'

export const testimonials: Testimonial[] = [
  { name: 'Racky Henderson', role: 'Father', image: '/images/teacher-1.jpeg', text },
  { name: 'Henry Dee', role: 'Mother', image: '/images/teacher-2.jpeg', text },
  { name: 'Mark Huff', role: 'Mother', image: '/images/teacher-3.jpeg', text },
  { name: 'Rodel Golez', role: 'Mother', image: '/images/teacher-4.jpeg', text },
  { name: 'Ken Bosh', role: 'Mother', image: '/images/teacher-1.jpeg', text },
]
