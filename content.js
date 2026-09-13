/* =====================================================================
   CONTENT.JS — edit this file to update your portfolio.
   Do not touch index.html or script.js unless you're changing layout
   or behavior — everything below is just data.

   After editing, save the file and refresh index.html in your browser.
   ===================================================================== */

window.SITE_CONTENT = {

  /* -------------------------------------------------------------
     ABOUT — the 3 small stat cards under "About me"
     Add or remove objects freely; the grid adjusts automatically.
     ------------------------------------------------------------- */
  aboutStats: [
  { num: "6+", label: "Full-stack projects built" },
  { num: "3+", label: "AI-powered applications developed" },
  { num: "10+", label: "Technologies explored" }
],

  /* -------------------------------------------------------------
     SELECTED WORK — project cards.
     icon: one of "route", "plate", "radar", "code", "chart" (see
     script.js ICONS if you want to add a new shape).
     ------------------------------------------------------------- */
 projects: [
  {
    icon: "brain",
    name: "EduAI",
    description: "AI-powered classroom platform with student and instructor workflows, including classrooms, assignments, discussions, learning resources, and RAG-based AI assistance.",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "LangChain"],
    link: "https://github.com/maruf6890/EduAI",
    linkLabel: "view on GitHub →"
  },
  {
    icon: "bolt",
    name: "Office Monitor",
    description: "Real-time smart energy monitoring platform that tracks office device usage, power consumption, and energy waste with AI-powered insights and alerts.",
    tags: ["Next.js", "FastAPI", "WebSocket", "Gemini AI"],
    link: "https://github.com/maruf6890/office-electricity-tracker",
    linkLabel: "view on GitHub →"
  },
  {
    icon: "megaphone",
    name: "AI Social Media Management Platform",
    description: "AI-powered marketing platform for managing social media content, generating posts, scheduling campaigns, analyzing engagement, and creating designs with an integrated image editor.",
    tags: ["Next.js", "FastAPI", "Express.js", "Gemini API"],
    link: "https://github.com/maruf6890/marketing-platform",
    linkLabel: "view on GitHub →"
  },
  {
    icon: "layout",
    name: "Survey Agent Platform",
    description: "Production survey management platform with admin workflows, platform agent tools, API integrations, and a structured MDX-based documentation system.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
    link: "#",
    linkLabel: "view case study →"
  },
  {
    icon: "gamepad",
    name: "Space Shooter",
    description: "2D arcade shooter game built with LibGDX featuring player controls, enemy behavior, collision detection, and gameplay mechanics.",
    tags: ["Java", "LibGDX"],
    link: "https://github.com/maruf6890/space-shooter",
    linkLabel: "view on GitHub →"
  },
  {
    icon: "snake",
    name: "Snake Classic",
    description: "Classic Snake game implemented using C and SDL2 with custom game loop, collision detection, scoring system, and keyboard controls.",
    tags: ["C", "SDL2"],
    link: "https://github.com/maruf6890/snake",
    linkLabel: "view on GitHub →"
  }
],

  /* -------------------------------------------------------------
     TOOLKIT — grouped skills.
     level: 1 = still learning, 2 = comfortable, 3 = daily driver
     Add a new category by adding another { category, skills } object.
     ------------------------------------------------------------- */
  skillGroups: [
    {
      category: "Languages",
      skills: [
        { name: "Python", level: 3 },
        { name: "JavaScript", level: 3 },
        { name: "C++", level: 2 },
        { name: "Java", level: 2 }
      ]
    },
    {
      category: "Frontend",
      skills: [
        { name: "React.js", level: 3 },
        { name: "Next.js", level: 3 },
        { name: "Flutter", level: 2 }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "FastAPI", level: 3 },
        { name: "Express.js", level: 3 },
        { name: "Spring Boot", level: 2 },
        { name: "Kafka", level: 2 },
        { name: "RabbitMQ", level: 2 }
      ]
    },
    {
      category: "Database",
      skills: [
        { name: "PostgreSQL", level: 3 },
        { name: "MySQL", level: 2 },
        { name: "Redis", level: 2 },
        { name: "ChromaDB", level: 2 }
      ]
    },
    {
      category: "AI / ML",
      skills: [
        { name: "PyTorch", level: 3 },
        { name: "LangChain", level: 3 },
        { name: "LangGraph", level: 2 },
        { name: "Scikit-learn", level: 2 }
      ]
    },
    {
      category: "Infra & Tools",
      skills: [
        { name: "GitHub", level: 3 },
        { name: "Docker", level: 3 },
        { name: "AWS", level: 2 },
        { name: "LangSmith", level: 2 }
      ]
    }
  ],

  /* -------------------------------------------------------------
     EXPERIENCE — work history, most recent first.
     tags is optional — omit it or leave as [] to skip that row.
     ------------------------------------------------------------- */
  experience: [
    {
      role: "Junior Software Engineer",
      company: "App-Concept",
      companyUrl: "https://app-concept.com/",
      date: "Dec 2025 — Present",
      bullets: [
        "Working on a SaaS platform for end-to-end survey management",
        "Collaborating with cross-functional teams to deliver features on time",
        "Writing clean, testable code and performing code reviews",
        "Implementing RESTful APIs"
      ],
      tags: ["Next.js", "TypeScript"]
    },
    {
      role: "Software Engineering Intern",
      company: "App-Concept",
      companyUrl: "https://app-concept.com/",
      date: "Jun 2025 — Nov 2025",
      bullets: [
        "Worked on a SaaS admin dashboard for C-AR, an augmented reality app",
        "Worked on a SaaS admin dashboard for vip-chemnitz, a profile-based event-VIP matching platform",
        "Built responsive UI components using Next.js and Tailwind CSS",
        "Integrated third-party APIs and handled state management",
        "Participated in agile sprints and daily standups"
      ],
      tags: []
    }
  ],

  /* -------------------------------------------------------------
     TECHNICAL ACTIVITIES — hackathons, talks, competitions.
     badge: one of "win", "finalist", "speaker", "participant"
     (controls both the badge color and the ribbon icon).
     ------------------------------------------------------------- */
activities: [
  {
    name: "SciBlitz 2.0",
    badge: "finalist",
    badgeLabel: "Finalist",
    meta: "2025 · Science & Technology Competition",
    description: "Reached the finalist stage of SciBlitz 2.0, a science and technology competition focused on innovation, problem solving, and technical creativity."
  },
  {
    name: "NEUB CSE Fest",
    badge: "participant",
    badgeLabel: "Participant",
    meta: "2025 · Hackathon & Technology Festival",
    description: "Participated in NEUB CSE Fest, a technology festival featuring programming contests, hackathons, and project-based competitions."
  }
]

};
