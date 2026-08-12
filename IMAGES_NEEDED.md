# Images Needed

Every image is sourced at `public/images/{slot}.jpg` (the `slot` value drives the
path automatically in `src/components/ImageBlock.jsx`). Place your final photo at that
path and the component will render it; until then it shows a placeholder box with the
same aspect ratio and rounded corners, so the layout does not shift.

`home-hero` loads eagerly (`loading="eager"`, `fetchpriority="high"`); all others lazy-load.

## 1. Home — hero, domains, ABL highlight (`src/pages/Home.jsx`)

| Slot | File path | Aspect | Alt text |
| --- | --- | --- | --- |
| `home-hero` | `public/images/home-hero.jpg` | 4/3 | Student working on a laptop with code on screen |
| `domain-intelligent-computing` | `public/images/domain-intelligent-computing.jpg` | 16/9 | Artificial intelligence and machine learning visual |
| `domain-software-engineering` | `public/images/domain-software-engineering.jpg` | 16/9 | Developer writing code |
| `domain-data-science` | `public/images/domain-data-science.jpg` | 16/9 | Data analytics dashboard |
| `domain-systems-infrastructure` | `public/images/domain-systems-infrastructure.jpg` | 16/9 | Cloud and server infrastructure |
| `domain-cybersecurity` | `public/images/domain-cybersecurity.jpg` | 16/9 | Cybersecurity and digital security visual |
| `domain-research-emerging-tech` | `public/images/domain-research-emerging-tech.jpg` | 16/9 | Robotics and emerging technology lab |
| `home-abl-highlight` | `public/images/home-abl-highlight.jpg` | 4/3 | Students collaborating on a hands-on activity |

## 2. External Hackathon (`src/pages/ExternalHackathon.jsx`)

| Slot | File path | Aspect | Alt text |
| --- | --- | --- | --- |
| `hackathon-hero` | `public/images/hackathon-hero.jpg` | 21/9 | Team collaborating at a hackathon |

## 4. Departments index (`src/pages/Departments.jsx`)

| Slot | File path | Aspect | Alt text |
| --- | --- | --- | --- |
| `departments-index-banner` | `public/images/departments-index-banner.jpg` | 21/9 | Computing labs and classrooms |

## 5. Programme cards (`src/components/ProgrammeCard.jsx`, data in `src/data/departments.js`)

Used on both the Home and Departments index pages.

| Slot | File path | Aspect | Alt text |
| --- | --- | --- | --- |
| `programme-cse` | `public/images/programme-cse.jpg` | 16/9 | B.E. Computer Science and Engineering |
| `programme-cse-aiml` | `public/images/programme-cse-aiml.jpg` | 16/9 | B.E. CSE (Artificial Intelligence and Machine Learning) |
| `programme-ai-ds` | `public/images/programme-ai-ds.jpg` | 16/9 | B.Tech Artificial Intelligence and Data Science |
| `programme-it` | `public/images/programme-it.jpg` | 16/9 | B.Tech Information Technology |

## 6. Department detail pages (`src/pages/DepartmentDetail.jsx`)

Banner slot is computed as `department-{dept.slug}-banner` from the slug in
`src/data/departments.js`, so the file paths below are the exact ones generated.

| Slot | File path | Aspect | Alt text |
| --- | --- | --- | --- |
| `department-computer-science-engineering-banner` | `public/images/department-computer-science-engineering-banner.jpg` | 21/9 | B.E. Computer Science and Engineering |
| `department-cse-artificial-intelligence-machine-learning-banner` | `public/images/department-cse-artificial-intelligence-machine-learning-banner.jpg` | 21/9 | B.E. CSE (Artificial Intelligence and Machine Learning) |
| `department-artificial-intelligence-data-science-banner` | `public/images/department-artificial-intelligence-data-science-banner.jpg` | 21/9 | B.Tech Artificial Intelligence and Data Science |
| `department-information-technology-banner` | `public/images/department-information-technology-banner.jpg` | 21/9 | B.Tech Information Technology |
| `department-cse-curriculum` | `public/images/department-cse-curriculum.jpg` | 16/9 | Classroom and lab session |
| `department-cse-year-missions` | `public/images/department-cse-year-missions.jpg` | 16/9 | Students at a coding hackathon |

> Note: `department-cse-curriculum` and `department-cse-year-missions` render only on the
> B.E. CSE long page; the other three department pages are banner-only.