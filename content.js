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
    { num: "SUST", label: "software engineering, in progress" },
    { num: "3",    label: "SaaS platforms worked on so far" },
    { num: "∞",    label: "new tech I want to explore next" }
  ],

  /* -------------------------------------------------------------
     SELECTED WORK — project cards.
     icon: one of "route", "plate", "radar", "code", "chart" (see
     script.js ICONS if you want to add a new shape).
     ------------------------------------------------------------- */
  projects: [
    {
      icon: "route",
      name: "Routewise",
      description: "Route-planning tool for small delivery fleets. Cuts average driver mileage by 18% using a live traffic-aware solver.",
      tags: ["React", "Node", "PostGIS"],
      link: "#",
      linkLabel: "view case study →"
    },
    {
      icon: "plate",
      name: "PixelPantry",
      description: "Offline-first recipe organizer. Scans handwritten recipe cards and turns them into searchable, shareable pages.",
      tags: ["Svelte", "PWA", "OCR"],
      link: "#",
      linkLabel: "view case study →"
    },
    {
      icon: "radar",
      name: "Beacon",
      description: "Open-source uptime and incident monitor with a status page generator. 2.1k GitHub stars, community-maintained.",
      tags: ["Go", "Postgres", "Docker"],
      link: "#",
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
      date: "Jan 2024 — Present",
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
      name: "HackTheNorth",
      badge: "win",
      badgeLabel: "🏆 Winner",
      meta: "Sept 2023 · Best Use of AI",
      description: "Built a real-time captioning tool for screen readers using on-device speech models, with two teammates over 36 hours."
    },
    {
      name: "ETHGlobal Online",
      badge: "finalist",
      badgeLabel: "Finalist",
      meta: "Nov 2022 · 400+ teams",
      description: "Prototyped a decentralized bug-bounty escrow platform in Solidity; placed in the top 10 of the general track."
    },
    {
      name: "DevFest Local",
      badge: "speaker",
      badgeLabel: "Speaker",
      meta: "May 2024 · ~150 attendees",
      description: "Gave a talk on \"sketch-first engineering\" — how paper prototyping speeds up real product decisions."
    },
    {
      name: "Civic Tech Hackathon",
      badge: "participant",
      badgeLabel: "Participant",
      meta: "Mar 2021 · City of Fremont",
      description: "Built a live transit-delay tracker for the local bus system with a team of four, my first hackathon ever."
    }
  ]

};
