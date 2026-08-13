import { Link } from 'react-router-dom'
import { SITE_NAME, SITE_TAGLINE } from '../constants'
import { departments } from '../data/departments'

const footerLinkClass =
  'text-sm text-white/70 transition-colors duration-200 hover:text-accent'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-white">
      <div className="container-site py-16">
        <Link
          to="/"
          className="inline-flex flex-col justify-center leading-none"
          aria-label={`${SITE_NAME} — ${SITE_TAGLINE}, home`}
        >
          <span className="font-display text-xl font-black tracking-tight text-white transition-colors duration-200 hover:text-accent">
            {SITE_NAME}
          </span>
          <span className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-accent">
            {SITE_TAGLINE}
          </span>
        </Link>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <nav aria-label="Departments">
            <p className="eyebrow text-accent">Departments</p>
            <ul className="mt-4 space-y-3">
              {departments.map((dept) => (
                <li key={dept.slug}>
                  <Link to={`/departments/${dept.slug}`} className={footerLinkClass}>
                    {dept.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow text-accent">About</p>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="/" className={footerLinkClass}>
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-accent">External Hackathon</p>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="/hackathon" className={footerLinkClass}>
                  External Hackathon
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-accent">Social / Contact</p>
            <p className="mt-4 text-sm text-white/50">[Content to be added]</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site py-5 text-center text-xs text-white/60 sm:text-left">
          <p>© {year} {SITE_NAME}</p>
        </div>
      </div>
    </footer>
  )
}