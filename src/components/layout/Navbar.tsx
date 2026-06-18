import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navLinks } from '@/data/site'
import { useScrolledNav } from '@/hooks/useScrolledNav'
import { cn } from '@/lib/cn'

function SearchForm({ light }: { light: boolean }) {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={cn(
        'order-last flex h-[54px] items-center rounded-[30px] border px-1',
        light ? 'border-black/10' : 'border-white/10',
      )}
    >
      <input
        type="text"
        placeholder="Search"
        className={cn(
          'w-full border-none bg-transparent px-3 text-base outline-none',
          light ? 'text-black/70 placeholder:text-black/40' : 'text-white/70 placeholder:text-white/70',
        )}
      />
      <button
        type="submit"
        aria-label="Rechercher"
        className={cn('flex h-[52px] w-[52px] items-center justify-center', light ? 'text-black/70' : 'text-white/70')}
      >
        <span className="ion-ios-search text-xl" />
      </button>
    </form>
  )
}

function NavItems({ light, onNavigate }: { light: boolean; onNavigate?: () => void }) {
  return (
    <ul className="flex flex-col lg:flex-row lg:items-center">
      {navLinks.map((link) => (
        <li key={link.to}>
          <NavLink
            to={link.to}
            end={link.to === '/'}
            onClick={onNavigate}
            className={({ isActive }) =>
              cn(
                'block px-5 py-3 text-sm transition-colors lg:py-[1.4rem]',
                light
                  ? isActive
                    ? 'text-primary'
                    : 'text-black hover:text-primary'
                  : isActive
                    ? 'text-primary'
                    : 'text-white/70 hover:text-white',
              )
            }
          >
            {link.label}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

function NavBarInner({ light }: { light: boolean }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="mx-auto flex max-w-6xl items-center px-4">
      {/* Toggle mobile */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Ouvrir le menu"
        aria-expanded={open}
        className={cn('flex items-center gap-2 py-3 lg:hidden', light ? 'text-black/50' : 'text-white/50')}
      >
        <span className="oi oi-menu" /> Menu
      </button>

      <div className="ml-auto hidden lg:order-last lg:block">
        <SearchForm light={light} />
      </div>

      {/* Liens : visibles en desktop, repliables en mobile */}
      <div className={cn('w-full lg:flex lg:w-auto', open ? 'block' : 'hidden lg:block')}>
        <NavItems light={light} onNavigate={() => setOpen(false)} />
      </div>
    </div>
  )
}

/** Navbar principale (sombre) + version claire fixe qui apparaît au défilement. */
export function Navbar() {
  const awake = useScrolledNav()

  return (
    <>
      <nav className="bg-dark">
        <NavBarInner light={false} />
      </nav>

      <nav
        className={cn(
          'fixed inset-x-0 top-0 z-40 bg-white shadow-[0_0_10px_0_rgba(0,0,0,0.1)] transition-transform duration-300',
          awake ? 'translate-y-0' : '-translate-y-full',
        )}
      >
        <NavBarInner light />
      </nav>
    </>
  )
}
