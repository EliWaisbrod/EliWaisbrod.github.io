export const profile = {
  name: "Eli Waisbrod",
  headline: "Western University Computer Science Student",
  email: "eli.waisbrod@gmail.com",
  phone: "+1 (647)-330-2001",
  github: "https://github.com/eliwaisbrod",
  linkedin: "https://www.linkedin.com/in/eli-waisbrod/",
};

export const skills = [
  {
    title: "Languages",
    items: ["PHP 8", "JavaScript", "Python", "Java", "C++", "HTML5/CSS"],
  },
  {
    title: "Frameworks & Tools",
    items: ["React", "Twig", "Git", "Jira", "Bitbucket", "Docker", "DataGrip"],
  },
  {
    title: "Coursework",
    items: [
      "Data Structures & Algorithms",
      "Linear Algebra",
      "Calculus",
      "Intro to Data Science",
    ],
  },
];

export const education = {
  school: "University of Western Ontario",
  location: "London, ON",
  program: "Computer Science, BS",
  dates: "2023 - 2027",
};

export const experience = [
  {
    role: "L1 PHP Full-Stack Developer Intern",
    company: "Shipfusion",
    location: "Toronto, ON (Hybrid)",
    dates: "May 2024 - Aug 2024",
    bullets: [
      "Worked on full-stack tickets across frontend and backend, finished 30+ tasks fixing bugs and adding missing features.",
      "Used Chrome DevTools and debugging to trace issues end-to-end and ship reliable fixes.",
      "Built a prototype using the OpenAI GPT API to read shipping documents and suggest BOL label fields, validated across multiple label types.",
      "Built reusable React components and refactored older pages to use API-driven calls.",
      "Worked with Twig/Jira/Bitbucket and tools like Docker, Redis, and Cloudflare.",
    ],
    tags: [
      "PHP 8",
      "React",
      "JavaScript",
      "Twig",
      "Jira",
      "Bitbucket",
      "Docker",
      "Redis",
      "Cloudflare",
    ],
  },
  {
    role: "Data Analyst Intern",
    company: "StRegis Group",
    location: "Markham, ON",
    dates: "May 2024 - Aug 2024",
    bullets: [
      "Verified and added missing UPC/product codes across 100,000+ items to improve database completeness and traceability.",
      "Did tariff and compliance checks using Canadian and US government databases.",
      "Improved data entry workflows to reduce discrepancies and speed up updates.",
      "Used Excel tools like pivot tables and lookups to audit and update data.",
    ],
    tags: ["Excel", "Data QA", "Compliance", "Process Improvement"],
  },
  {
    role: "Warehouse Assistant",
    company: "Dundee Deco",
    location: "Vaughan, ON",
    dates: "Jun 2020 - Sep 2023",
    bullets: [
      "Picked, packed, and prepared orders to meet daily shipping schedules.",
      "Helped with basic system and database support tasks to minimize downtime.",
    ],
    tags: ["Operations", "Systems Support"],
  },
];

export const projects = [
  {
    title: "Health Habit Tracker Application",
    subtitle: "Modular desktop habit tracker with progression and persistent storage.",
    bullets: [
      "Built a modular Qt Widgets desktop app to track exercise, sleep, nutrition, and mental health in separate modules.",
      "Added XP-based progression and persistent storage.",
      "Wrote unit tests using GoogleTest and GoogleMock.",
    ],
    tech: ["C++", "Qt Widgets", "GoogleTest", "GoogleMock"],
    links: { repo: null },
  },
  {
    title: "Virtual Pet Game with Minigames",
    subtitle: "Java virtual pet game with interactive minigames and progression.",
    bullets: [
      "Built a virtual pet game with multiple minigames to show real project scope.",
      "Implemented real-time animations, event-driven UI, and clear game-state flow.",
      "Added reward-based progression tied to minigame performance.",
    ],
    tech: ["Java", "Event-driven UI", "Game state"],
    links: { repo: null },
  },
  {
    title: "Personal Portfolio Website",
    subtitle: "Personal website built using React and deployed on GitHub Pages.",
    bullets: [
      "Built a personal portfolio website as a React single-page application.",
      "Structured the site using reusable components for sections like projects, skills, and experience.",
      "Used Material UI for layout, styling, and responsive behavior across screen sizes.",
      "Configured a Vite-based build setup and deployed the site to GitHub Pages.",
    ],
    tech: [
      "React",
      "JavaScript",
      "Vite",
      "Material UI",
    ],
    links: {
      repo: "https://github.com/eliwaisbrod/eliwaisbrod.github.io",
    },
  },
  {
    title: "Quadtree-Based Image Compression",
    subtitle: "Recursive image compression using quadtrees.",
    bullets: [
      "Implemented quadtree-based compression by recursively subdividing images and storing average pixel colors.",
      "Supported zooming while keeping storage efficient through the quadtree structure.",
    ],
    tech: ["Java", "Recursion", "Data Structures"],
    links: {
      repo: "https://github.com/EliWaisbrod/Image-Compression-Project",
    },
  },
  {
    title: "Frog Pathfinding Simulation",
    subtitle: "Hex-grid pathfinding using stacks and priority queues.",
    bullets: [
      "Simulated frog movement across a hex grid with terrain rules and constraints.",
      "Used stacks and priority queues to find safe and efficient paths.",
    ],
    tech: ["Java", "Stacks", "Priority Queues"],
    links: {
      repo: "https://github.com/EliWaisbrod/Leap-Frog-Game",
    },
  }
];


export const interests = [
  "Traveling",
  "Scuba Diving",
  "Skydiving",
  "Fishing",
  "Surfing",
  "Building Computers",
];
