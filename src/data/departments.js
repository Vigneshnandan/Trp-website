export const departments = [
  {
    slug: 'computer-science-engineering',
    name: 'B.E. Computer Science and Engineering',
    degree: 'B.E.',
  },
  {
    slug: 'cse-artificial-intelligence-machine-learning',
    name: 'B.E. Computer Science and Engineering (Artificial Intelligence and Machine Learning)',
    degree: 'B.E.',
  },
  {
    slug: 'artificial-intelligence-data-science',
    name: 'B.Tech. Artificial Intelligence and Data Science',
    degree: 'B.Tech.',
  },
  {
    slug: 'information-technology',
    name: 'B.Tech. Information Technology',
    degree: 'B.Tech.',
  },
]

export function getDepartment(slug) {
  return departments.find((d) => d.slug === slug)
}