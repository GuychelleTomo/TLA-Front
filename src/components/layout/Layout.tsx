import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { TopBar } from './TopBar'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

/** Remet le scroll en haut à chaque changement de page. */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

/** Coquille commune à toutes les pages. */
export function Layout() {
  return (
    <>
      <ScrollToTop />
      <TopBar />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
