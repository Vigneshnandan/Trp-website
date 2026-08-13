import PlaceholderBlock from '../components/PlaceholderBlock'
import ImageBlock from '../components/ImageBlock'

const hackathons = [
  {
    title: 'TCS CodeVita (Season 13)',
    organizer: 'Tata Consultancy Services',
    badges: ['National', 'Upcoming'],
    audience: ['CSE/AIDS/AIML/IT', 'ECE'],
    details: ['Reg: Sep 2025', 'Job/PPI linked', 'Opens Sep 2025'],
    description:
      'Competitive coding, algorithms, data structures, and graph problems.',
    rounds: [
      'R1: Pre-Qualifier (24-hr, 6 Qs)',
      'R2: Qualifier (6-hr, 6 Qs)',
      'R3: Final Round',
      'R4: Grand Finale (in-person)',
    ],
    highlight: '$20,000 top 3 - $10k / $6k / $4k',
  },
  {
    title: 'Microsoft Imagine Cup 2027',
    organizer: 'Microsoft',
    badges: ['National', 'Upcoming'],
    audience: ['CSE/AIDS/AIML/IT', 'ECE'],
    details: ['Opens: Sep 2026', 'Opens Sep 2026'],
    description:
      'AI/ML startups on Azure, SaaS, and social impact technology.',
    rounds: [
      'R1: Registration + team form...',
      'R2: MVP Round (15 slides + d...)',
      'R3: Semifinals (5-min live p...)',
      'R4: World Championship at MS...',
    ],
    highlight: 'Scale: $100k + Satya Nadella mentorship | Launch: $50k',
  },
  {
    title: 'Capgemini Tech Challenge 2027',
    organizer: 'Capgemini',
    badges: ['National', 'Upcoming'],
    audience: ['CSE/AIDS/AIML/IT', 'ECE', 'EEE'],
    details: ['Mid 2027', 'Job/PPI linked', 'Opens Nov 2026'],
    description:
      '15+ tracks covering cloud, AI, cybersecurity, sustainability, and IoT.',
    rounds: [
      'R1: Online Quiz',
      'R2: Coding Round',
      'R3: Case Study / Presentation...',
      'R4: Grand Finale',
    ],
    highlight: '₹15 Lakhs total + career opportunities',
  },
  {
    title: 'Zoho Hackathon 2027',
    organizer: 'Zoho Corporation',
    badges: ['National', 'Upcoming'],
    audience: ['CSE/AIDS/AIML/IT'],
    details: ['Mid 2027 (varies annually)', 'Job/PPI linked', 'Opens Nov 2026'],
    description:
      'Product building, full-stack, enterprise SaaS, UI/UX.',
    rounds: [
      'R1: Online Build Round',
      'R2: In-person Demo at Zoho c...',
    ],
    highlight: 'Direct job offers + cash prizes',
  },
  {
    title: 'Smart India Hackathon (SIH) 2027',
    organizer: 'AICTE / MoE / Govt of India',
    badges: ['National', 'Upcoming'],
    audience: ['All Depts'],
    details: ['Aug-Dec 2027 (Internal: Aug, Finale: Nov-Dec)', 'Opens Jun 2027'],
    description:
      'Software & Hardware, AI, Cybersecurity, Health, AgriTech, Smart Cities.',
    rounds: [
      'R1: Internal Campus Round',
      'R2: Idea Submission (SIH Port...)',
      'R3: Online Shortlisting',
      'R4: 36-hr Grand Finale',
    ],
    highlight: '₹1 lakh per winning PS',
  },
]

function HackathonCard({ hackathon }) {
  return (
    <article className="card-outline flex h-full flex-col p-0 overflow-hidden">
      <div className="flex items-start justify-between gap-4 border-b border-ink/10 px-5 py-4 sm:px-6">
        <div>
          <h2 className="text-xl font-black leading-tight text-ink sm:text-2xl">
            {hackathon.title}
          </h2>
          <p className="mt-1 text-sm font-medium text-ink/65 sm:text-base">
            {hackathon.organizer}
          </p>
        </div>

        <div className="flex shrink-0 flex-col items-end gap-2">
          {hackathon.badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full bg-[#f5e6bf] px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-[#8f6310]"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col px-5 py-4 sm:px-6">
        <div className="flex flex-wrap gap-2">
          {hackathon.audience.map((item) => (
            <span
              key={item}
              className="rounded-full bg-accent-soft px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink/80"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {hackathon.details.map((detail) => (
            <span
              key={detail}
              className="rounded-full border border-ink/15 bg-white px-3 py-1 text-sm font-medium text-ink/80"
            >
              {detail}
            </span>
          ))}
        </div>

        <p className="mt-4 text-base leading-relaxed text-ink/70 sm:text-lg">
          {hackathon.description}
        </p>

        <div className="mt-4">
          <p className="eyebrow text-ink/55">Rounds ({hackathon.rounds.length})</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {hackathon.rounds.map((round) => (
              <span
                key={round}
                className="rounded-full border border-ink/15 bg-[#fbf8ef] px-3 py-1 text-xs font-medium text-ink/70"
              >
                {round}
              </span>
            ))}
          </div>
        </div>

        <p className="mt-4 text-base font-extrabold text-[#1b6f5c] sm:text-lg">
          {hackathon.highlight}
        </p>

        <button
          type="button"
          className="mt-4 self-start text-sm font-bold uppercase tracking-widest text-[#9a6a00] transition-colors duration-200 hover:text-ink"
        >
          Show details ▾
        </button>
      </div>
    </article>
  )
}

export default function ExternalHackathon() {
  return (
    <>
      <section className="hero-accent">
        <div className="container-site py-20 sm:py-28">
          <ImageBlock
            slot="hackathon-hero"
            alt="Team collaborating at a hackathon"
            aspect="21/9"
            placeholder={false}
          />
          <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-ink sm:text-6xl">
            External Hackathon
          </h1>
        </div>
      </section>

      <section className="container-site py-16 sm:py-20">
        <div className="card-outline flex flex-col p-8 sm:p-10">
          <span className="eyebrow text-ink/50">External Hackathons</span>
          <p className="mt-4 max-w-4xl text-lg font-medium leading-relaxed text-ink sm:text-xl">
            The department encourages participation in premier national and
            industry-organized hackathons, coding challenges, and product
            innovation competitions.
          </p>
        </div>
      </section>

      <section className="container-site pb-16 sm:pb-20">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {hackathons.map((hackathon) => (
            <HackathonCard key={hackathon.title} hackathon={hackathon} />
          ))}
        </div>

        <div className="mt-10 flex justify-center pb-8 sm:mt-14 sm:pb-12">
          <a
            href="https://srm-trp-career-hub.vercel.app/"
            className="btn-primary px-10 py-5 text-base sm:px-14 sm:py-6 sm:text-lg"
          >
            View More
          </a>
        </div>
      </section>
    </>
  )
}