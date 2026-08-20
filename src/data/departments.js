export const departments = [
  {
    slug: 'computer-science-engineering',
    name: 'B.Tech. Artificial Intelligence and Data Science',
    degree: 'B.Tech.',
    imageSlot: 'programme-cse',
    imageAlt: 'B.Tech. Artificial Intelligence and Data Science',
  },
  {
    slug: 'cse-artificial-intelligence-machine-learning',
    name: 'B.E. Computer Science and Engineering (Artificial Intelligence and Machine Learning)',
    degree: 'B.E.',
    imageSlot: 'programme-cse-aiml',
    imageAlt: 'B.E. CSE (Artificial Intelligence and Machine Learning)',
  },
  {
    slug: 'artificial-intelligence-data-science',
    name: 'B.E. Computer Science and Engineering',
    degree: 'B.E.',
    imageSlot: 'programme-ai-ds',
    imageAlt: 'B.E. Computer Science and Engineering',
  },
  {
    slug: 'information-technology',
    name: 'B.Tech. Information Technology',
    degree: 'B.Tech.',
    imageSlot: 'programme-it',
    imageAlt: 'B.Tech Information Technology',
  },
]

export function getDepartment(slug) {
  return departments.find((d) => d.slug === slug)
}