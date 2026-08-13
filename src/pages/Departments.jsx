import { departments } from '../data/departments'
import ProgrammeCard from '../components/ProgrammeCard'
import ImageBlock from '../components/ImageBlock'

export default function Departments() {
  return (
    <section className="container-site py-20 sm:py-24">
      <ImageBlock
        slot="departments-index-banner"
        alt="Computing labs and classrooms"
        aspect="21/9"
        placeholder={false}
      />

      <h1 className="text-4xl font-black leading-tight text-ink sm:text-5xl">
        Departments
      </h1>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {departments.map((dept) => (
          <ProgrammeCard key={dept.slug} dept={dept} />
        ))}
      </div>
    </section>
  )
}