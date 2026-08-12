import { Link } from 'react-router-dom'
import ImageBlock from './ImageBlock'

export default function ProgrammeCard({ dept, featured = false, placeholder = true }) {
  return (
    <article
      className={
        featured
          ? 'flex flex-col rounded-3xl border-2 border-ink bg-accent p-8 text-white shadow-sm transition duration-200 ease-out hover:scale-[1.01] hover:shadow-md sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10'
          : 'card-outline flex flex-col'
      }
    >
      <ImageBlock
        slot={dept.imageSlot}
        alt={dept.imageAlt}
        aspect="16/9"
        placeholder={placeholder}
        className={featured ? 'w-full shrink-0 lg:w-1/3' : 'w-full'}
      />
      <div className="lg:flex-1">
        <span className={`eyebrow ${featured ? 'text-white/70' : 'text-ink/50'}`}>
          {dept.degree}
        </span>
        <h3 className={`mt-3 text-2xl font-extrabold uppercase leading-snug sm:text-3xl ${featured ? 'text-white' : 'text-ink'}`}>
          {dept.name}
        </h3>
      </div>
      <Link to={`/departments/${dept.slug}`} className="btn-primary mt-8 shrink-0 lg:mt-0">
        Read Now
      </Link>
    </article>
  )
}