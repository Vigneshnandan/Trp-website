import { departments } from '../data/departments'
import { ABL_PARAGRAPH } from '../data/ablContent'
import ProgrammeCard from '../components/ProgrammeCard'

const domains = [
  {
    title: 'Intelligent Computing',
    body: 'Artificial Intelligence, Machine Learning, Intelligent Systems, Generative AI, Computer Vision, and Natural Language Processing.',
  },
  {
    title: 'Software Engineering',
    body: 'Programming, Software Development, Software Architecture, DevOps, Web and Mobile Applications, and Software Quality Engineering.',
  },
  {
    title: 'Data Science and Information Systems',
    body: 'Data Analytics, Data Engineering, Database Systems, Big Data, Information Systems, Business Intelligence, and Predictive Analytics.',
  },
  {
    title: 'Systems and Infrastructure Computing',
    body: 'Operating Systems, Computer Networks, Cloud Computing, Distributed Computing, High-Performance Computing, and Internet of Things.',
  },
  {
    title: 'Cybersecurity and Trustworthy Computing',
    body: 'Information Security, Cybersecurity, Privacy, Digital Forensics, Secure Computing, and Trustworthy and Responsible AI.',
  },
  {
    title: 'Research and Emerging Technologies',
    body: 'Emerging Computing Paradigms, Quantum Computing, Generative and Agentic AI, Robotics, Digital Twins, and interdisciplinary research and innovation.',
  },
]

export default function Home() {
  const [featured, ...rest] = departments

  return (
    <>
      <section className="hero-accent">
        <div className="container-site py-20 sm:py-28">
          <h1 className="max-w-5xl text-4xl font-black uppercase leading-[1.05] tracking-tight text-ink sm:text-6xl">
            Computer Science and Engineering and Allied Programs
          </h1>
          <p className="mt-10 max-w-3xl text-base leading-relaxed text-ink/80 sm:text-lg">
            The Computing Departments of SRM TRP Engineering College
            (SRMTRPEC) foster a dynamic, experiential, and industry-oriented
            learning environment that equips students to address the evolving
            demands of the technology sector. The academic ecosystem
            integrates Artificial Intelligence, Machine Learning, Data
            Science, Software Engineering, Cybersecurity, Cloud Computing,
            and emerging research areas, structured across six core domains:
          </p>
        </div>
      </section>

      <section className="container-site py-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {domains.map((domain, index) => (
            <article key={domain.title} className="card-outline flex flex-col">
              <span className="eyebrow text-ink/40">
                Domain {String(index + 1).padStart(2, '0')}
              </span>
              <h2 className="mt-3 text-xl font-extrabold uppercase leading-snug text-ink">
                {domain.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ink/70">
                {domain.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-site pb-20">
        <div className="rounded-3xl hero-accent px-6 py-12 sm:px-12 sm:py-16">
          <p className="max-w-4xl text-lg font-medium leading-relaxed text-ink sm:text-xl">
            {ABL_PARAGRAPH}
          </p>
        </div>
      </section>

      <section className="container-site pb-24">
        <h2 className="max-w-3xl text-2xl font-extrabold uppercase leading-snug text-ink sm:text-3xl">
          The four complementary undergraduate programmes of the Computing
          branches are:
        </h2>

        <div className="mt-12 space-y-8">
          <ProgrammeCard dept={featured} featured />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((dept) => (
              <ProgrammeCard key={dept.slug} dept={dept} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}