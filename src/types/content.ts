/**
 * Types du contenu servi par l'API TLA-Back (/api/v1).
 * Ils reflètent les API Resources côté Laravel (camelCase, enveloppe { data } déballée).
 */

export interface Formule {
  name: string
  audience: string | null
  icon: string | null
  format: string | null
  rhythm: string | null
  price: string | null
  priceNote: string | null
  duration: string | null
  features: string[]
  featured: boolean
}

export interface Course {
  /** Slug — sert de route /formations/:id */
  id: string
  title: string
  flag: string | null
  image: string | null
  level: string | null
  format: string | null
  duration: string | null
  excerpt: string | null
  description: string[]
  /** Présents uniquement sur la fiche détail. */
  modules?: string[]
  formules?: Formule[]
  examPrep?: string[]
}

export interface LanguageSkill {
  name: string | null
  level: string | null
}

export interface TeacherLink {
  label: string
  url: string
  icon: string | null
}

export interface Teacher {
  slug: string
  name: string
  role: string | null
  image: string | null
  bio: string | null
  specialty: string | null
  fonction: string | null
  experienceYears: number
  email: string | null
  cv: string | null
  biography: string[]
  education?: string[]
  languages?: LanguageSkill[]
  links?: TeacherLink[]
}

export interface Post {
  slug: string
  title: string
  image: string | null
  excerpt: string | null
  content: string | null
  day: string | null
  month: string | null
  year: string | null
  date: string | null
  author: string
  comments: number
  tags?: { name: string; slug: string }[]
}

export interface GallerySession {
  /** Slug de session. */
  id: string
  label: string
}

export interface GalleryItem {
  type: 'photo' | 'video'
  src: string | null
  embed: string | null
  poster: string | null
  title: string | null
  session?: string
}

export interface Testimonial {
  name: string
  role: string | null
  image: string | null
  text: string
  rating: number
}

export interface ContactPayload {
  name: string
  email: string
  phone?: string
  subject?: string
  message: string
}

export interface PreRegistrationPayload {
  first_name: string
  last_name: string
  email?: string
  phone: string
  language_id: number
  wave_id?: number
  formula_name?: string
  notes?: string
  parent_name?: string
  parent_phone?: string
}

// ─── Contenu éditorial (Phase D) ─────────────────────────────────────────────

export interface Service {
  icon: string | null
  title: string
  text: string | null
}

export interface Stat {
  icon: string | null
  number: number
  label: string
}

export interface Milestone {
  year: string
  title: string
  text: string | null
}

export interface Pillar {
  icon: string | null
  title: string
  text: string | null
}

export interface TimetableWave {
  icon: string | null
  title: string
  range: string | null
  text: string | null
}

export interface TimetableGroup {
  name: string
  days: string[]
  accent: string | null
}

export interface TimetableClub {
  day: string
  time: string
  activity: string
}

export interface About {
  milestones: Milestone[]
  pillars: Pillar[]
}

export interface Timetable {
  waves: TimetableWave[]
  timeSlots: string[]
  groups: TimetableGroup[]
  clubs: TimetableClub[]
}

export interface ContactInfo {
  email: string
  email2?: string
  phone: string
  whatsapp: string
  address: string
}

export interface Social {
  label: string
  icon: string
  url: string
}

export interface EnrollmentInfo {
  start: string
  seats: string
  waves: string
  payment: string
  material: string
  online: string
  whatsapp: string
  registration: string
}

export interface SiteConfig {
  contact: ContactInfo | null
  socials: Social[]
  enrollment: EnrollmentInfo | null
}
