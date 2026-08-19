export const coreCurriculumStructure = [
  {
    title: "Programming, Data Structures and Algorithms",
    description: "Programming in Python, basic data structures: stacks, queues, linked lists, trees, hash tables; search algorithms: linear search and binary search, basic sorting algorithms: selection sort, bubble sort and insertion sort; divide and conquer: mergesort, quicksort; introduction to graph theory; basic graph algorithms: traversals and shortest path."
  },
  {
    title: "Database Management and Warehousing",
    description: "ER-model, relational model: relational algebra, tuple calculus, SQL, integrity constraints, normal form, file organization, indexing, data types, data transformation such as normalization, discretization, sampling, compression; data warehouse modelling: schema for multidimensional data models, concept hierarchies, measures: categorization and computations."
  },
  {
    title: "Machine Learning",
    description: "(i) Supervised Learning: regression and classification problems, simple linear regression, multiple linear regression, ridge regression, logistic regression, k-nearest neighbour, naive Bayes classifier, linear discriminant analysis, support vector machine, decision trees, bias-variance trade-off, cross-validation methods such as leave-one-out (LOO) cross-validation, k-folds cross-validation, multi-layer perceptron, feed-forward neural network; (ii) Unsupervised Learning: clustering algorithms, k-means/k-medoid, hierarchical clustering, top-down, bottom-up: single-linkage, multiple-linkage, dimensionality reduction, principal component analysis."
  },
  {
    title: "AI",
    description: "Search: informed, uninformed, adversarial; logic, propositional, predicate; reasoning under uncertainty topics — conditional independence representation, exact inference through variable elimination, and approximate inference through sampling."
  },
  {
    title: "Probability and Statistics, Linear Algebra and Calculus and Optimization",
    description: null // placeholder — no description exists in the source document
  }
];

export const yearWiseActivities = [
  {
    yearLabel: "Year 1 — Freshman (Coder) Year",
    subjects: [
      { name: "Computer Programming: C", type: "Theory + Lab", mandatory: ["30 Practice problems + 15 Final test (Industry specific)", "Codethon (Industry specific)", "Mini project"] },
      { name: "Essentials of Computing", type: "Theory + Lab", mandatory: ["Ideathon"] },
      { name: "Digital Principles and Computer Organization", type: "Theory", mandatory: ["Quiz", "Digital Logic Design Challenge – organized by ECE department"] },
      { name: "Python for Data Science", type: "Theory + Lab", mandatory: ["30 Practice problems + 15 Final test (Industry specific)", "Codethon (Industry specific)", "Mini project"] },
      { name: "Re-Engineering for Innovation", type: "Skill Dev.", mandatory: [] }
    ]
  },
  {
    yearLabel: "Year 2 — Sophomore (Developer) Year",
    subjects: [
      { name: "Data Structures", type: "Theory + Lab", mandatory: ["30 Practice problems + 15 Final test (Industry specific)", "Codethon (Industry specific)", "Gate Questions Practice"] },
      { name: "Java Programming", type: "Theory + Lab", mandatory: ["30 Practice problems + 15 Final test (Industry specific)", "Codethon (Industry specific)", "Mini project"] },
      { name: "Exploratory Data Analysis", type: "Theory + Lab", mandatory: ["Microsoft Data Analysis and Visualization with Power BI", "Module 1: Creating reports, M2: Navigation and Accessibility (12hrs)", "M3: Bringing Data to the User, M4: Identifing Patterns and Trends (12hrs)", "M5: Mini Project (3hrs)"] },
      { name: "Operating Systems", type: "Theory + Lab", mandatory: ["CSE Gate Question Practice", "Assessment on Industry specific Questions"] },
      { name: "Responsive Web Development with React", type: "Theory + Lab", mandatory: ["Mini project (Student Portfolio)", "Internal SIH participation"] },
      { name: "Algorithms", type: "Theory", mandatory: ["30 Practice problems + one Final assessment test (Industry specific)", "Case Study / Mini project"] },
      { name: "Database Management Systems", type: "Theory + Lab", mandatory: ["30 Practice problems + 15 Final test (Industry specific)", "Gate Question Practice", "Mini project"] },
      { name: "Artificial Intelligence Essentials", type: "Theory", mandatory: ["Machine Learning with Scikit-learn, PyTorch & Hugging Face - Coursera", "Gate Questions Practice"] },
      { name: "Standards in Artificial Intelligence", type: "Theory", mandatory: ["Quiz", "Internal Hackathon Participation"] },
      { name: "Data Privacy and Security", type: "Theory", mandatory: ["Case study", "NPTEL: Design Thinking Primer"] },
      { name: "Back-End Development and APIs", type: "Skill Dev.", mandatory: ["Mini project", "National level Hackathon participation"] }
    ]
  },
  {
    yearLabel: "Year 3 — Junior (Demonstrator) Year",
    subjects: [
      { name: "Optimisation Techniques", type: "Theory", mandatory: ["Quiz", "Case study"] },
      { name: "Natural Language Processing", type: "Theory", mandatory: ["Literature study on recent Research using NLP / CV", "Research Project"] },
      { name: "Machine Learning", type: "Theory + Lab", mandatory: ["Gate Questions Practice", "SIH Participation"] },
      { name: "Computer Networks", type: "Theory + Lab", mandatory: ["Quiz on Interview Questions", "Internal Hackathon Participation"] },
      { name: "Internet of Things", type: "Theory + Lab", mandatory: ["Mini Project", "National level Hackathon Participation"] },
      { name: "SDC III: Advanced Full-stack with AI Bridge", type: "Skill Dev.", mandatory: ["Capstone Project"] },
      { name: "Industry Oriented Course – 1: MLOps Tools", type: "Theory + Lab", mandatory: ["Coursera: MLOps Tools: MLflow and Hugging Face by DUKE University"] },
      { name: "PE-I and II", type: "Theory", mandatory: [] },
      { name: "UI/UX & Human-Centered Design", type: "Theory + Lab", mandatory: ["Certificate course on Figma/FigJam Tool", "Design Project (Prepare a UI/UX design for Capstone project)"] },
      { name: "Full Stack Development Lab", type: "Lab", mandatory: ["Regular Lab as per AU"] },
      { name: "Compiler Design", type: "Theory", mandatory: ["Quiz", "Internal Hackathon"] },
      { name: "Deep Learning", type: "Theory + Lab", mandatory: ["NPTEL: Deep Learning for Computer Vision"] },
      { name: "Image Processing", type: "Theory + Lab", mandatory: ["Capstone Project on CV", "National Level Hackathon Participation"] },
      { name: "Industry Oriented Course II: Generative and Edge AI", type: "Theory + Lab", mandatory: ["Industry organized Hackathon"] },
      { name: "PE III", type: "Theory", mandatory: [] },
      { name: "Summer Internship", type: "Skill Dev.", mandatory: [] }
    ]
  },
  {
    yearLabel: "Year 4 — Senior (Transformation) Year",
    subjects: [
      { name: "Ethical Hacking and Penetration Testing", type: "Theory + Lab", mandatory: ["Quiz", "Case Study of a Real-World Application / Data Breach"] },
      { name: "PE-IV and V", type: "Theory", mandatory: [] }
    ]
  }
];
