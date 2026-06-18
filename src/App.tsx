import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { HomePage } from '@/pages/HomePage'
import { AboutPage } from '@/pages/AboutPage'
import { CoursesPage } from '@/pages/CoursesPage'
import { TeacherPage } from '@/pages/TeacherPage'
import { BlogPage } from '@/pages/BlogPage'
import { BlogSinglePage } from '@/pages/BlogSinglePage'
import { GalleryPage } from '@/pages/GalleryPage'
import { ContactPage } from '@/pages/ContactPage'

/** Loader plein écran masqué une fois l'app montée. */
function Loader() {
  const [hidden, setHidden] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 300)
    return () => clearTimeout(t)
  }, [])
  return (
    <div className={`ftco-loader${hidden ? ' is-hidden' : ''}`} aria-hidden="true">
      <svg className="circular" viewBox="0 0 48 48">
        <circle className="path-bg" cx="24" cy="24" r="22" fill="none" strokeWidth="4" stroke="#eeeeee" />
        <circle
          className="path"
          cx="24"
          cy="24"
          r="22"
          fill="none"
          strokeWidth="4"
          strokeMiterlimit="10"
          stroke="#fd5f00"
        />
      </svg>
    </div>
  )
}

export default function App() {
  return (
    <>
      <Loader />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="formations" element={<CoursesPage />} />
          <Route path="equipe" element={<TeacherPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:slug" element={<BlogSinglePage />} />
          <Route path="galerie" element={<GalleryPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  )
}
