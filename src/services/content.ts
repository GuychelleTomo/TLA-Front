/**
 * Fonctions d'accès à l'API TLA-Back regroupées par ressource.
 * Les composants ne parlent jamais à `fetch` directement : ils passent par ces services.
 */
import { apiGet, apiPost } from '@/lib/api'
import type {
  Course,
  Teacher,
  Post,
  GallerySession,
  GalleryItem,
  Testimonial,
  ContactPayload,
  PreRegistrationPayload,
  Service,
  Stat,
  About,
  Timetable,
  SiteConfig,
} from '@/types/content'

// ─── Cours (langues) ─────────────────────────────────────────────────────────
export const getCourses = () => apiGet<Course[]>('/languages')
export const getCourse = (slug: string) => apiGet<Course>(`/languages/${slug}`)

// ─── Enseignants ─────────────────────────────────────────────────────────────
export const getTeachers = () => apiGet<Teacher[]>('/teachers')
export const getTeacher = (slug: string) => apiGet<Teacher>(`/teachers/${slug}`)

// ─── Blog / actualités ───────────────────────────────────────────────────────
export const getPosts = () => apiGet<Post[]>('/news')
export const getPost = (slug: string) => apiGet<Post>(`/news/${slug}`)

// ─── Galerie ─────────────────────────────────────────────────────────────────
export const getGallerySessions = () => apiGet<GallerySession[]>('/gallery/sessions')
export const getGalleryItems = (params?: { session?: string; type?: 'photo' | 'video' }) => {
  const qs = new URLSearchParams()
  if (params?.session) qs.set('session', params.session)
  if (params?.type) qs.set('type', params.type)
  const suffix = qs.toString() ? `?${qs.toString()}` : ''
  return apiGet<GalleryItem[]>(`/gallery/items${suffix}`)
}

// ─── Témoignages ─────────────────────────────────────────────────────────────
export const getTestimonials = () => apiGet<Testimonial[]>('/testimonials')

// ─── Formulaires (mutations) ─────────────────────────────────────────────────
export const submitContact = (payload: ContactPayload) =>
  apiPost<{ message: string }>('/contact', payload)

export const submitPreRegistration = (payload: PreRegistrationPayload) =>
  apiPost<{ message: string; registration_number: string }>('/pre-inscriptions', payload)

// ─── Contenu éditorial (services, stats, à propos, emploi du temps, réglages) ─
export const getServices = (section?: 'home' | 'pro' | 'about') =>
  apiGet<Service[]>(`/services${section ? `?section=${section}` : ''}`)

export const getStats = () => apiGet<Stat[]>('/stats')

export const getAbout = () => apiGet<About>('/about')

export const getTimetable = () => apiGet<Timetable>('/timetable')

export const getSiteConfig = () => apiGet<SiteConfig>('/site-config')
