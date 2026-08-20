import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { SITE_NAME, SITE_TAGLINE } from '../constants'
import { departments } from '../data/departments'

const linkBase =
  'px-3 py-2 text-xs font-bold uppercase tracking-widest transition-colors duration-200'

const desktopLinkClass = ({ isActive }) =>
  `${linkBase} ${isActive ? 'text-accent' : 'text-white hover:text-accent'}`

const mobileLinkClass = ({ isActive }) =>
  [
    'block border-t border-white/10 px-6 py-4 font-display text-sm font-bold uppercase tracking-widest transition-colors duration-200',
    isActive ? 'bg-accent text-white' : 'text-white hover:text-accent',
  ].join(' ')

const ChevronIcon = ({ open }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={`h-3 w-3 fill-none stroke-current stroke-2 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
  >
    <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const BurgerIcon = ({ open }) => (
  <span className="relative block h-4 w-6">
    <span
      className={`absolute left-0 block h-0.5 w-6 bg-white transition-transform duration-200 ${open ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'}`}
    />
    <span
      className={`absolute left-0 block h-0.5 w-6 bg-white transition-opacity duration-200 ${open ? 'opacity-0' : 'top-1/2 -translate-y-1/2'}`}
    />
    <span
      className={`absolute left-0 block h-0.5 w-6 bg-white transition-transform duration-200 ${open ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'}`}
    />
  </span>
)

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [deptsOpen, setDeptsOpen] = useState(false)
  const [mobileDeptsOpen, setMobileDeptsOpen] = useState(false)

  const dropdownRef = useRef(null)
  const location = useLocation()

  const onDepartments = location.pathname.startsWith('/departments')

  useEffect(() => {
    setMobileOpen(false)
    setDeptsOpen(false)
    setMobileDeptsOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!deptsOpen) return
    const onDocClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDeptsOpen(false)
      }
    }
    const onKey = (event) => {
      if (event.key === 'Escape') setDeptsOpen(false)
    }
    document.addEventListener('pointerdown', onDocClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onDocClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [deptsOpen])

  return (
    <header className="sticky top-0 z-50 bg-ink shadow-lg shadow-black/20">
      <div className="container-site flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
        <Link
          to="/"
          className="flex items-center gap-3"
          aria-label="SRM TRP Engineering College home"
        >
          <img
            src="/images/trp%20logo.png"
            alt="SRM TRP Engineering College"
            className="block h-10 w-auto object-contain sm:h-12 md:h-14"
          />
          <span className="flex min-w-0 flex-col justify-center leading-none">
            <span className="font-display text-sm font-black tracking-tight text-white transition-colors duration-200 hover:text-accent sm:text-lg">
              {SITE_NAME}
            </span>
            <span className="mt-1 text-[0.6rem] font-bold uppercase tracking-[0.28em] text-accent sm:text-[0.65rem]">
              {SITE_TAGLINE}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center md:flex" aria-label="Primary">
          <NavLink to="/" end className={desktopLinkClass}>
            About
          </NavLink>

          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setDeptsOpen(true)}
            onMouseLeave={() => setDeptsOpen(false)}
          >
            <button
              type="button"
              onClick={() => setDeptsOpen((v) => !v)}
              aria-haspopup="menu"
              aria-expanded={deptsOpen}
              className={`${linkBase} flex items-center gap-1.5 ${
                onDepartments || deptsOpen
                  ? 'text-accent'
                  : 'text-white hover:text-accent'
              }`}
            >
              Departments
              <span className={onDepartments || deptsOpen ? 'text-accent' : ''}>
                <ChevronIcon open={deptsOpen} />
              </span>
            </button>

            {deptsOpen && (
              <div
                role="menu"
                aria-label="Departments"
                className="absolute right-0 top-full pt-3"
              >
                <div className="w-80 rounded-xl border-2 border-accent bg-white p-3 shadow-2xl shadow-black/30">
                  <p className="eyebrow px-3 pt-2 text-ink/50">Programmes</p>
                  <div role="none" className="mt-1">
                    {departments.map((dept) => (
                      <Link
                        key={dept.slug}
                        to={`/departments/${dept.slug}`}
                        role="menuitem"
                        className="block rounded-lg px-3 py-2.5 font-display text-sm font-bold uppercase tracking-wide text-ink transition-colors duration-150 hover:bg-accent hover:text-white"
                      >
                        {dept.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <NavLink to="/hackathon" className={desktopLinkClass}>
            External Hackathon
          </NavLink>
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          className="shrink-0 md:hidden"
        >
          <BurgerIcon open={mobileOpen} />
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-white/10 pb-4 md:hidden" aria-label="Primary mobile">
          <NavLink to="/" end className={mobileLinkClass}>
            About
          </NavLink>

          <button
            type="button"
            onClick={() => setMobileDeptsOpen((v) => !v)}
            aria-expanded={mobileDeptsOpen}
            className={`flex w-full items-center justify-between border-t border-white/10 px-6 py-4 font-display text-sm font-bold uppercase tracking-widest transition-colors duration-200 ${
              mobileDeptsOpen ? 'bg-accent text-white' : 'text-white hover:text-accent'
            }`}
          >
            Departments
            <ChevronIcon open={mobileDeptsOpen} />
          </button>

          {mobileDeptsOpen && (
            <div className="bg-white/5">
              {departments.map((dept) => (
                <Link
                  key={dept.slug}
                  to={`/departments/${dept.slug}`}
                  className="block border-b border-white/10 py-3 pl-10 pr-6 font-display text-sm font-bold uppercase tracking-wide text-white/90 transition-colors duration-200 hover:text-accent"
                >
                  {dept.name}
                </Link>
              ))}
            </div>
          )}

          <NavLink to="/hackathon" className={mobileLinkClass}>
            External Hackathon
          </NavLink>
        </nav>
      )}
    </header>
  )
}