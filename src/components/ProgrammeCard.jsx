import { Link } from 'react-router-dom'

export default function ProgrammeCard({ dept, featured = false }) {
  return (
    <article
      className={
        featured
          ? 'flex flex-col rounded-3xl border-2 border-ink bg-accent p-8 shadow-sm transition duration-200 ease-out hover:scale-[1.01] hover:shadow-md sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10'
          : 'card-outline flex flex-col'
      }
    >
      <div className="lg:flex-1">
        <span className={`eyebrow ${featured ? 'text-ink/60' : 'text-ink/50'}`}>
          {dept.degree}
        </span>
        <h3 className="mt-3 text-2xl font-extrabold uppercase leading-snug text-ink sm:text-3xl">
          {dept.name}
        </h3>
      </div>
      <Link to={`/departments/${dept.slug}`} className="btn-primary mt-8 shrink-0 lg:mt-0">
        Read Now
      </Link>
    </article>
  )
}