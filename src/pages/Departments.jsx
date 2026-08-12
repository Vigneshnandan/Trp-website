import { departments } from '../data/departments'
import ProgrammeCard from '../components/ProgrammeCard'
import ImageBlock from '../components/ImageBlock'

export default function Departments() {
  const [featured, ...rest] = departments

  return (
    <section className="container-site py-20 sm:py-24">
      <ImageBlock
        slot="departments-index-banner"
        alt="Computing labs and classrooms"
        aspect="21/9"
        placeholder={false}
      />

      <h1 className="text-4xl font-black uppercase leading-tight text-ink sm:text-5xl">
        Departments
      </h1>

      <div className="mt-12 space-y-8">
        <ProgrammeCard dept={featured} featured placeholder={false} />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((dept) => (
            <ProgrammeCard key={dept.slug} dept={dept} placeholder={false} />
          ))}
        </div>
      </div>
    </section>
  )
}