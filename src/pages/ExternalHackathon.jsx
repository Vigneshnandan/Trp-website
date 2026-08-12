import PlaceholderBlock from '../components/PlaceholderBlock'
import ImageBlock from '../components/ImageBlock'

export default function ExternalHackathon() {
  return (
    <>
      <section className="hero-accent">
        <div className="container-site py-20 sm:py-28">
          <ImageBlock
            slot="hackathon-hero"
            alt="Team collaborating at a hackathon"
            aspect="21/9"
          />
          <h1 className="mt-10 text-4xl font-black uppercase leading-[1.05] tracking-tight text-ink sm:text-6xl">
            External Hackathon
          </h1>
        </div>
      </section>

      <section className="container-site py-16">
        <div className="card-outline flex flex-col p-8 sm:p-10">
          <span className="eyebrow text-ink/50">Smart India Hackathon (SIH)</span>
          <p className="mt-4 max-w-4xl text-lg font-medium leading-relaxed text-ink sm:text-xl">
            The Department encourages active participation in premier and
            industry-organized hackathons, such as the Smart India Hackathon
            (SIH), and other industry-organized hackathon competitions.
          </p>
        </div>
      </section>

      <section className="container-site pb-24">
        <PlaceholderBlock>
          <span className="mx-auto inline-block max-w-2xl text-sm leading-relaxed text-ink/60">
            [Content to be added — details of specific external hackathons,
            registration links, and schedules are not yet available]
          </span>
        </PlaceholderBlock>
      </section>
    </>
  )
}