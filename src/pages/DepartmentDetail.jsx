import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getDepartment } from '../data/departments'
import { departmentContent } from '../data/departmentContent'
import MarkingList from '../components/MarkingList'
import PlaceholderBlock from '../components/PlaceholderBlock'
import ImageBlock from '../components/ImageBlock'

function PageHead({ dept }) {
  return (
    <section className="container-site pt-10 sm:pt-14">
      <ImageBlock
        slot={`department-${dept.slug}-banner`}
        alt={dept.imageAlt}
        aspect="21/9"
        placeholder={false}
      />
      <Link
        to="/departments"
        className="inline-block text-xs font-bold uppercase tracking-widest text-ink/60 transition-colors duration-200 hover:text-ink"
      >
        ← All Departments
      </Link>
      <span className="eyebrow mt-6 block text-ink/50">{dept.degree} Department</span>
      <h1 className="mt-3 text-3xl font-black leading-tight text-ink sm:text-4xl">
        {dept.name}
      </h1>
    </section>
  )
}

function MissionBody({ mission }) {
  return (
    <>
      <p className="max-w-3xl text-base leading-relaxed text-ink/80 sm:text-lg">{mission.mission}</p>
      <div className="mt-6 border-t border-ink/10 pt-5">
        <p className="eyebrow text-ink/50">{mission.activitiesLabel}</p>
        <div className="mt-3">
          <PlaceholderBlock />
        </div>
      </div>
    </>
  )
}

function MissionsContent({ section, image }) {
  const [activeMission, setActiveMission] = useState(0)
  const active = activeMission ?? 0

  return (
    <div className="space-y-5">
      {section.intro.map((paragraph, index) => (
        <p key={index} className="max-w-3xl text-base leading-relaxed text-ink/80 sm:text-lg">
          {paragraph}
        </p>
      ))}

      <h3 className="max-w-3xl pt-6 text-xl font-extrabold leading-snug text-ink sm:text-2xl">
        {section.subheading}
      </h3>
      {section.subparagraphs.map((paragraph, index) => (
        <p key={index} className="max-w-3xl text-base leading-relaxed text-ink/80 sm:text-lg">
          {paragraph}
        </p>
      ))}

      <div className="max-w-3xl pt-6">
        <MarkingList items={section.marking} />
      </div>

      {section.assessmentParagraphs.map((paragraph, index) => (
        <p
          key={index}
          className={`max-w-3xl text-base leading-relaxed text-ink/80 sm:text-lg${
            typeof paragraph === 'object' && paragraph.italic ? ' italic' : ''
          }`}
        >
          {typeof paragraph === 'object' ? paragraph.text : paragraph}
        </p>
      ))}

      {image && (
        <ImageBlock
          slot={image.slot}
          alt={image.alt}
          aspect="16/9"
          className="mt-8"
          placeholder={false}
        />
      )}
      <h3 className="pt-8 text-xl font-extrabold leading-snug text-ink sm:text-2xl">
        {section.missionsHeading}
      </h3>

      <div className="hidden pt-2 md:block">
        <div
          role="tablist"
          aria-label="Year-wise Missions"
          className="flex flex-wrap gap-2"
        >
          {section.missions.map((mission, index) => (
            <button
              key={mission.title}
              type="button"
              role="tab"
              id={`mission-tab-${index}`}
              aria-selected={active === index}
              aria-controls={`mission-panel-${index}`}
              onClick={() => setActiveMission(index)}
              className={`rounded-lg border-2 px-4 py-2.5 font-display text-sm font-bold uppercase tracking-wide transition-colors duration-200 ${
                active === index
                  ? 'border-ink bg-accent text-white'
                  : 'border-ink/15 bg-white text-ink/70 hover:border-ink hover:text-ink'
              }`}
            >
              {mission.title}
            </button>
          ))}
        </div>

        <div
          role="tabpanel"
          id={`mission-panel-${active}`}
          aria-labelledby={`mission-tab-${active}`}
          className="mt-6 rounded-2xl border-2 border-accent bg-white p-6 sm:p-8"
        >
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent font-display text-base font-black text-white">
              {String(active + 1).padStart(2, '0')}
            </span>
            <h4 className="font-display text-lg font-extrabold leading-snug text-ink sm:text-xl">
              {section.missions[active].title}
            </h4>
          </div>
          <div className="mt-5">
            <MissionBody mission={section.missions[active]} />
          </div>
        </div>
      </div>

      <div className="space-y-4 pt-2 md:hidden">
        {section.missions.map((mission, index) => {
          const open = activeMission === index
          return (
            <div
              key={mission.title}
              className="overflow-hidden rounded-2xl border-2 border-accent bg-white"
            >
              <button
                type="button"
                aria-expanded={open}
                aria-controls={`mission-panel-${index}`}
                onClick={() => setActiveMission(open ? null : index)}
                className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
              >
                <span className="flex min-w-0 items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent font-display text-sm font-black text-white">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="font-display text-base font-extrabold leading-snug text-ink">
                    {mission.title}
                  </span>
                </span>
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className={`h-4 w-4 shrink-0 fill-none stroke-current stroke-2 text-ink transition-transform duration-200 ${
                    open ? 'rotate-180' : ''
                  }`}
                >
                  <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {open && (
                <div className="border-t border-ink/10 px-5 py-5">
                  <MissionBody mission={mission} />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function SectionContent({ section, image }) {
  if (section.kind === 'paragraphs') {
    return (
      <div className="space-y-5">
        {section.paragraphs.map((paragraph, index) => (
          <p key={index} className="max-w-3xl text-base leading-relaxed text-ink/80 sm:text-lg">
            {paragraph}
          </p>
        ))}
      </div>
    )
  }
  if (section.kind === 'block') {
    return <PlaceholderBlock />
  }
  if (section.kind === 'missions') {
    return <MissionsContent section={section} image={image} />
  }
  return null
}

function StickySubnav({ sections }) {
  const [active, setActive] = useState(sections[0].id)

  useEffect(() => {
    const onScroll = () => {
      let current = sections[0].id
      for (const section of sections) {
        const el = document.getElementById(section.id)
        if (el && el.getBoundingClientRect().top <= 150) current = section.id
      }
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [sections])

  return (
    <nav
      className="sticky top-16 z-30 border-b border-ink/10 bg-cream/95 backdrop-blur sm:top-[4.5rem]"
      aria-label="On this page"
    >
      <div className="container-site flex items-center gap-2 overflow-x-auto py-3">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors duration-200 ${
              active === section.id
                ? 'bg-accent text-white'
                : 'text-ink/60 hover:bg-ink/5 hover:text-ink'
            }`}
          >
            {section.label}
          </a>
        ))}
      </div>
    </nav>
  )
}

const CSE_SECTION_IMAGES = {
  curriculum: {
    slot: 'department-cse-curriculum',
    alt: 'Classroom and lab session',
  },
  missions: {
    slot: 'department-cse-year-missions',
    alt: 'Students at a coding hackathon',
  },
}

function LongBody({ dept, sections }) {
  const sectionImages =
    dept.slug === 'computer-science-engineering' ? CSE_SECTION_IMAGES : {}

  return (
    <>
      <StickySubnav sections={sections} />
      <div className="container-site pb-24">
        <div className="mt-14 space-y-20">
          {sections.map((section) => {
            const image = sectionImages[section.id]
            const bannerAbove = image && section.kind !== 'missions'
            return (
              <section key={section.id} id={section.id} className="scroll-mt-36">
                {bannerAbove && (
                  <ImageBlock
                    slot={image.slot}
                    alt={image.alt}
                    aspect="16/9"
                    placeholder={false}
                  />
                )}
<h2 className="text-2xl font-extrabold leading-snug text-ink sm:text-3xl">
                  {section.heading}
                </h2>
                <div className="mt-6">
                  <SectionContent
                    section={section}
                    image={section.kind === 'missions' ? image : null}
                  />
                </div>
              </section>
            )
          })}
        </div>
      </div>
    </>
  )
}

function ShortBody({ sections }) {
  return (
    <div className="container-site pb-24">
      <div className="mt-12 max-w-3xl">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-2xl font-extrabold leading-snug text-ink sm:text-3xl">
              {section.heading}
            </h2>
            {section.paragraphs.map((paragraph, index) => (
              <p key={index} className="mt-6 text-base leading-relaxed text-ink/80 sm:text-lg">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </div>
    </div>
  )
}

export default function DepartmentDetail() {
  const { slug } = useParams()
  const dept = getDepartment(slug)
  const content = departmentContent[slug]

  if (!dept) {
    return (
      <section className="container-site py-24">
        <span className="eyebrow text-ink/50">Departments</span>
        <h1 className="mt-3 text-4xl font-black leading-tight text-ink">
          Department not found
        </h1>
        <Link to="/departments" className="btn-primary mt-8">
          Back to Departments
        </Link>
      </section>
    )
  }

  return (
    <>
      <PageHead dept={dept} />
      {content.kind === 'long' ? (
        <LongBody dept={dept} sections={content.sections} />
      ) : (
        <ShortBody sections={content.sections} />
      )}
    </>
  )
}