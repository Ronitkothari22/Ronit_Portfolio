export type Project = {
  number: string;
  name: string;
  tagline: string;
  problemSolved: string;
  whatIBuilt: string;
  image?: string;
  githubLink?: string;
  projectLink?: string;
  stack: string[];
  impact: string[];
};

export type Experience = {
  role: string;
  company: string;
  duration: string;
  details: string[];
};

export type BlogPost = {
  title: string;
  summary: string;
  tags: string[];
  link: string;
};

export const NAV_ITEMS = ["about", "work", "services", "experience", "blog", "process", "stack", "contact"];

export const PROJECTS: Project[] = [
  {
    number: "01",
    name: "Interview Genie",
    tagline: "The AI co-pilot for your next big interview.",
    problemSolved:
      "Candidates were walking into interviews underprepared with no structured feedback, no personalized coaching, and no way to benchmark themselves.",
    whatIBuilt:
      "An end-to-end AI interview preparation platform powered by Gemini and ChatGPT. It analyzes resumes, scores LinkedIn profiles, runs ATS compatibility checks, and generates tailored interview reports in one place.",
    image: "project/interviewgenie.png",
    githubLink: "https://github.com/Ronitkothari22/Interview-Genie",
    projectLink: "https://interview-genie-tau.vercel.app/login",
    stack: ["Next.js", "Node.js", "Python", "Express.js", "Gemini API", "ChatGPT API"],
    impact: ["25% increase in candidate confidence", "Integrated ATS scoring + resume analysis + coding platform prep", "Feb 2025 - Present"]
  },
  {
    number: "02",
    name: "AttendX",
    tagline: "Attendance, but make it intelligent.",
    problemSolved:
      "Manual attendance systems were slow, error-prone, and easy to fake. Institutions needed accurate and automatic attendance that just worked.",
    whatIBuilt:
      "A smart attendance system combining BLE beacons, WiFi triangulation, and ArcFace facial recognition, with a cross-platform mobile app handling detection to reporting.",
    image: "project/attendx.png",
    githubLink: "https://github.com/Ronitkothari22/AttendX/",
    projectLink: "",
    stack: ["React Native", "MongoDB", "ArcFace", "Deep Learning", "BLE"],
    impact: ["98% facial recognition accuracy", "75% reduction in manual attendance effort", "Jun 2024 - Aug 2024"]
  },
  {
    number: "03",
    name: "Smart Healthcare Platform",
    tagline: "Medical intelligence in your pocket.",
    problemSolved:
      "Patients struggled to understand medical reports, missed appointments, and lacked a centralized health management tool.",
    whatIBuilt:
      "A full healthcare app with Flutter and Firebase using OCR and NLP to read and interpret medical reports, plus real-time reminders for appointments and health updates.",
    image: "",
    githubLink: "https://github.com/Ronitkothari22/HealthCare_Mobile_Application",
    projectLink: "",
    stack: ["Flutter", "Firebase", "Python", "ML", "OCR", "NLP"],
    impact: ["92% medical report extraction accuracy", "35% reduction in missed appointments", "Nov 2023 - Dec 2023"]
  },
  {
    number: "04",
    name: "Farzi - Fake News Detector",
    tagline: "Fighting misinformation with machine learning.",
    problemSolved:
      "Fake news spreads faster than corrections, and there was no fast, reliable, open tool to flag misinformation in real time.",
    whatIBuilt:
      "A deep learning classifier combining BERT and LSTM for news verification, trained and tested on 50,000+ text entries.",
    image: "",
    githubLink: "https://github.com/Ronitkothari22/Fake-news-detector",
    projectLink: "",
    stack: ["BERT", "LSTM", "Python", "TensorFlow", "Deep Learning"],
    impact: ["91% classification accuracy", "50,000+ text entries processed", "Sep 2023 - Oct 2023"]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Freelance Full-Stack Developer",
    company: "Independent",
    duration: "2025 - Present",
    details: [
      "Built a session-centric Learning and Engagement Platform for professional training, workshops, and corporate learning programs.",
      "Designed the product around Sessions so learners can access quizzes, polls, assignments, teams, feedback, and surveys in one flow.",
      "Combined structured learning, collaboration, assessments, and analytics into one ecosystem."
    ]
  },
  {
    role: "AI/ML Intern",
    company: "Clumoss",
    duration: "Aug 2023 - Sep 2023",
    details: [
      "Completed an internship focused on practical machine learning algorithms.",
      "Collaborated with the team to solve applied product and data problems."
    ]
  },
  {
    role: "Data Science Intern",
    company: "TopiaLife Science",
    duration: "May 2023 - Jun 2023",
    details: [
      "Developed automation logic for resume processing workflows.",
      "Used NLP to extract relevant candidate information from resumes.",
      "Collaborated with HR requirements to improve practical output quality."
    ]
  }
];

export const SERVICES = [
  ["01", "AI Systems & LLM Engineering", "Building production-grade AI pipelines: RAG systems, LLM orchestration, vector databases, fine-tuning, and intelligent agents beyond demos."],
  ["02", "AI Automation", "Designing and deploying automation workflows using Python, APIs, and custom pipelines that eliminate repetitive work and scale operations."],
  ["03", "Full Stack Web Apps", "End-to-end web applications using Next.js, React, Node.js, and PostgreSQL from idea to deployed product."],
  ["04", "Mobile Applications", "Cross-platform mobile apps with React Native that are performant, polished, and production-ready."],
  ["05", "Data Science & ML Solutions", "From data cleaning to model deployment: predictive models, NLP pipelines, classification systems, and custom ML solutions."],
  ["06", "SaaS Product Development", "Full lifecycle delivery with auth, billing, dashboards, APIs, and deployment. You bring the idea, I build the engine."]
] as const;

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "How Instagram Delivers Infinite Reels So Smoothly (System Design Breakdown)",
    summary:
      "A practical system design walkthrough of feed ranking, prefetching, caching, and delivery strategies behind smooth infinite reels.",
    tags: ["System Design", "Scalability", "Backend", "Read Post"],
    link: "https://system-design-indol-eight.vercel.app/"
  },
  {
    title: "When Traffic Explodes: Docker, Load Balancers & Kubernetes",
    summary:
      "A clear breakdown of how containerization and orchestration help systems stay resilient during sudden traffic spikes.",
    tags: ["DevOps", "Infrastructure", "Kubernetes", "Read Post"],
    link: "https://system-design-indol-eight.vercel.app/"
  }
];

export const TECH_STACK = [
  ["Languages", "Python, JavaScript, TypeScript, C/C++"],
  ["Frontend", "React.js, Next.js, Tailwind CSS, Redux"],
  ["Backend", "Node.js, Express.js, FastAPI, REST APIs, GraphQL"],
  ["Mobile", "React Native, Flutter"],
  ["AI / ML", "TensorFlow, PyTorch, Keras, Scikit-learn, BERT, LangChain"],
  ["Data", "PostgreSQL, MongoDB, MySQL, Pandas, NumPy"],
  ["Cloud & Tools", "Git, Docker, Linux, Vercel, Jupyter, Codex, Cursor, Claude Code"]
] as const;
