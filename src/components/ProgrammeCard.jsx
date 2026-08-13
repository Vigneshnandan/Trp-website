import { Link } from 'react-router-dom'

export default function ProgrammeCard({ dept }) {
  return (
    <article className="card-outline flex h-full flex-col p-6">
      <span className="eyebrow text-ink/50">{dept.degree}</span>
      <h3 className="mt-3 flex-1 text-2xl font-extrabold leading-snug text-ink sm:text-3xl">
        {dept.name}
      </h3>
      <Link
        to={`/departments/${dept.slug}`}
        className="btn-primary mt-5 w-fit self-start"
      >
        Read Now
      </Link>
    </article>
  )
}