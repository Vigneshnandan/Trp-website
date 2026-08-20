import { ABL_MARKING, WHY_ABL_HEADING, WHY_ABL_PARAGRAPHS } from './ablContent'

const placeholder = {
  kind: 'placeholder',
  note: 'Content to be added',
}

const missions = [
  {
    title: 'Freshman (Coder) Year',
    mission: {
      text: '',
      parts: [
        { text: 'Mission:', bold: true },
        { text: ' By the end of the academic year, students will be able to develop effective code for given use cases, build small-scale applications, and confidently participate in coding contests and technical challenges.' }
      ]
    },
    activitiesLabel: 'Activities planned for each core course:',
    activities: placeholder,
  },
  {
    title: 'Sophomore (Developer) Year',
    mission: {
      text: '',
      parts: [
        { text: 'Mission:', bold: true },
        { text: ' By the end of the academic year, students will be able to develop applications that address identified use cases or real-world footprints and actively participate in premier and industry-organized hackathons, such as the Smart India Hackathon (SIH), etc.' }
      ]
    },
    activitiesLabel: 'Activities planned for each core course:',
    activities: placeholder,
  },
  {
    title: 'Junior (Demonstrator) Year',
    mission: {
      text: '',
      parts: [
        { text: 'Mission:', bold: true },
        { text: ' By the end of the academic year, students will be industry-ready by earning relevant industry certifications, completing internships, and actively participating in premier hackathons such as the Smart India Hackathon (SIH) and other industry-organized hackathon competitions.' }
      ]
    },
    activitiesLabel: 'Activities planned for each core course:',
    activities: placeholder,
  },
  {
    title: 'Senior (Transformation) Year',
    mission: {
      text: '',
      parts: [
        { text: 'Mission:', bold: true },
        { text: ' By the end of the academic year, students will be able to identify and pursue their preferred career pathway by securing placement offers, gaining admission to higher studies, initiating a start-up, or preparing for careers in the government sector through competitive examinations such as GATE, IES, and UPSC.' }
      ]
    },
    activitiesLabel: 'Activities planned for each core course:',
    activities: placeholder,
  },
]

export const departmentContent = {
  'computer-science-engineering': {
    kind: 'long',
    sections: [
      {
        id: 'about',
        label: 'About',
        heading: 'About the Programme',
        kind: 'paragraphs',
        paragraphs: [
          {
            text: 'The B.E. Computer Science and Engineering programme provides a strong foundation in computer science, programming, algorithms, databases, computer networks, operating systems, software engineering, and emerging technologies. Through ',
            parts: [
              { text: 'Activity-Based Learning (ABL)', bold: true },
              { text: ', students are encouraged to translate theoretical concepts into practical solutions through coding, software development, real-world problem-solving, and industry-oriented projects.' }
            ]
          },
          'The Department follows a Learn–Practice–Create–Innovate approach, integrating Activity-Based Learning across the curriculum to bridge the gap between academic knowledge and industry expectations. Students work collaboratively, communicate ideas, apply technologies to real-world challenges, develop prototypes, and present their solutions.',
          'The nature of activities varies according to the learning outcomes of each course. Programming courses involve application development, mini-projects, coding challenges, and Codathons. Industry-Oriented Courses and courses on emerging technologies provide opportunities for students to learn through industry platforms such as Infosys, IBM, and other reputed learning portals, and earn relevant certifications. Skill Development Courses emphasize collaborative projects, hands-on practice, and participation in hackathons and technical competitions.',
          "The time devoted by students to such activities is recognized as Professional Development Hours (PDH) and is incorporated as Independent Learning Hours (ILH) in the course syllabus. In addition, industry interaction is an integral component of the programme through industrial visits, expert sessions, internships, industry-supported projects, and other professional engagement activities, thereby strengthening students' industry readiness.",
          'Through this integrated approach, the Department nurtures graduates who are not only technically proficient but also equipped with problem-solving, critical thinking, creativity, teamwork, communication, adaptability, and innovation skills, enabling them to effectively meet the evolving requirements of the technology industry.',
        ],
      },
      {
        id: 'curriculum',
        label: 'Core Curriculum',
        heading: 'Core Curriculum Structure- R 2025 (2025-2029)',
        kind: 'coreCurriculum',
      },
      {
        id: 'missions',
        label: 'Year Missions',
        heading: 'Activities Mapped with Curriculum During Four Years of Study',
        kind: 'missions',
        intro: [
          "As we adopt ABL, Students' participation in activities are considered as mandatory for core courses.",
        ],
        subheading: WHY_ABL_HEADING,
        subparagraphs: WHY_ABL_PARAGRAPHS,
        marking: ABL_MARKING,
        assessmentParagraphs: [
          'This progressive assessment mechanism encourages students to actively participate, strive for higher achievement, and advance through the successive rounds, thereby promoting healthy competition, motivation, and continuous improvement.',
          {
            text: 'In this ABL framework, each academic year is assigned a specific mission focused on the progressive transformation of students towards their chosen career paths. These year-wise missions define clear developmental goals and guide students in systematically building the knowledge, skills, practical competencies, and professional capabilities required for their future careers.',
            italic: true,
          },
        ],
        missionsHeading: 'Year-wise Mission and Activity',
        missions,
      },
    ],
  },

  'cse-artificial-intelligence-machine-learning': {
    kind: 'short',
    sections: [
      {
        heading: 'About the Programme',
        paragraphs: [
          'This programme combines core Computer Science with advanced Artificial Intelligence and Machine Learning. Students gain practical exposure to machine learning, deep learning, computer vision, natural language processing, generative AI, and intelligent systems through hands-on experiments, AI projects, case studies, competitions, and real-world applications.',
        ],
      },
    ],
  },

  'artificial-intelligence-data-science': {
    kind: 'short',
    sections: [
      {
        heading: 'About the Programme',
        paragraphs: [
          'The B.Tech. Artificial Intelligence and Data Science programme prepares students to transform data into meaningful insights and intelligent solutions. Through data-driven projects, analytics activities, visualization, predictive modelling, machine learning experiments, and industry-oriented case studies, students develop the ability to solve complex real-world problems using AI and data science.',
        ],
      },
    ],
  },

  'information-technology': {
    kind: 'short',
    sections: [
      {
        heading: 'About the Programme',
        paragraphs: [
          'The B.Tech. Information Technology programme focuses on the development and management of modern information systems and digital solutions. Students acquire practical skills in software development, web and mobile technologies, databases, cloud computing, networking, cybersecurity, and enterprise applications through hands-on projects, team activities, internships, and industry-oriented learning.',
        ],
      },
    ],
  },
}