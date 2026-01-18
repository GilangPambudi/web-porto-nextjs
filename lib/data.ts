export const heroData = {
  name: "Gilang Pambudi Wibawanto S.Tr.S.I.B", // Keep for SEO/Metadata if needed, or About
  fullName: "Gilang Pambudi Wibawanto",
  nickName: "Gilang Pambudi W.",
  title: "Web Developer",
  sloganLine1: "Let's Make Something Useful.",
  sloganLine2: "Let's Make Something Useful.",
  subSlogan: [
    "Web Developer",
    "Software Engineer",
    "Freelancer",
    "IT Operations",
  ],
  image: "/profil.jpeg", // Using existing image path
  cv: "/cv-gilang.pdf", // Assumption, placeholder
};

export const aboutData = {
  bio: "Web Developer with internship and freelance experience building event platforms and landing pages. Proficient in Next.js, React, Tailwind CSS, WordPress, Laravel, and PHP, and basic Node.js knowledge. Experienced in managing live systems and production traffic under tight deadlines.",
  education: {
    institution: "State Polytechnic of Malang",
    degree: "Applied Bachelor of Business Information Systems",
    period: "Aug 2021 - Jul 2025",
    gpa: "3.61/4.00",
    coursework: "Web Developer, IT Staff, Software Engineer",
  },
  certifications: [
    {
      name: "Junior Web Developer - BNSP",
      provider: "Badan Nasional Sertifikasi Profesi (BNSP)",
      link: "/certificates/BNSP.pdf",
    },
    {
      name: "TOEIC",
      provider: "",
      link: "/certificates/TOEIC.pdf",
    },
  ],
};

export const experienceData = [
  {
    company: "SMADATARA Run 2026",
    role: "Freelance Web Developer",
    period: "Dec 2025",
    type: "Freelance",
    description: [
      "Developed the event landing page using Next.js and Shadcn UI.",
      "Implemented map routing features using OpenStreetMap and ensured mobile responsiveness.",
      "Used as the main registration gateway by 1.500+ registered participants.",
    ],
  },
  {
    company: "PT Sari Bahari (via Third Party)",
    project: "EMPEROR - Intelligent Employee Career Development System",
    role: "Freelance Software Developer",
    period: "Sep - Dec 2025",
    type: "Freelance",
    description: [
      "Developed the front-end of the system for PT Sari Bahari.",
      "Implemented existing UI components within a Laravel and Inertia.js front-end.",
    ],
  },
  {
    company: "Folding Ngalam Freedom for All",
    role: "Freelance Web Developer",
    period: "Aug 2025",
    type: "Freelance",
    description: [
      "Developed the event landing page for Folding Ngalam Freedom for All.",
      "Implemented responsive front-end layout and handled UI-related fixes.",
      "Handled a live event landing page used by 100+ participants.",
    ],
  },
  {
    company: "M111 The Reunion",
    role: "Freelance Web Developer",
    period: "May - Jun 2025",
    type: "Freelance",
    description: [
      "Designed and developed the informational website for M111 The Reunion event using Next.js framework.",
      "Maintained site functionality, resolved technical issues, and ensured mobile responsiveness.",
      "Delivered the main event website used by about 400 participants.",
    ],
  },
  {
    company: "Ngalam Folding Bike",
    role: "WordPress Developer (Intern)",
    period: "Oct 2024 - Dec 2024",
    type: "Internship",
    description: [
      "Designed and developed the informational website for the 13th National Folding Bike Jamboree Malang 2024 using WordPress Elementor.",
      "Maintained website stability, performed bug fixing, and ensured full mobile responsiveness throughout the event.",
      "Served as the primary information source for an international-scale event attended by 3,000+ participants, including overseas participants.",
    ],
  },
];

export const skillsData = {
  frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind CSS",
    "Bootstrap",
    "Next.js",
    "React",
  ],
  backend: ["PHP", "Node.js"],
  database: ["MySQL", "Supabase"],
  tools: ["WordPress", "Github", "Laragon"],
  softSkills: ["Problem Solving", "Teamwork", "Communication", "Adaptability"],
};

export const portfolioItems = [
  {
    title: "EMPEROR - Intelligent Employee Career Development System",
    description:
      "An Human resource promotion and transfer recommendation system for PT Sari Bahari.",
    image: "/emperor.webp",
    link: "#",
    alt: "emperor",
    isPrivate: true,
  },
  {
    title: "PAMS - Property and Occupant Management System",
    description:
      "A modern property and occupant management system built with Laravel and React.",
    image: "/pams.webp",
    link: "https://pams.pambudi.site/",
    alt: "pams",
  },
  {
    title: "SERAPHIM",
    description:
      "Search About Phone Informations & Models, connected with phone codename repository.",
    image: "/seraphim.webp",
    link: "https://seraphim.pambudi.site/",
    alt: "seraphim",
  },
  {
    title: "SMADATARARUN 2026",
    description:
      "Official website for the SMADATARARUN 2026 running event, providing registration and event information.",
    image: "/smadatararun.webp",
    link: "https://smadatararun.com/",
    alt: "smadatararun",
  },
  {
    title: "Quick Response Elegant Wedding",
    description:
      "An all-in-one system to manage wedding guests, invitations, and gifts, built with Laravel.",
    image: "/qrew.webp",
    link: "#",
    isPrivate: true,
    alt: "qrew",
  },
  {
    title: "Folding Ngalam Freedom for All",
    description:
      "A landing page of Folding Ngalam Freedom for All event, providing event information and details.",
    image: "/fnff.webp",
    link: "https://freedom.ecofest.id/",
    alt: "freedom",
  },
  {
    title: "M111 Reunion Family Event",
    description:
      "A website for the M111 event, providing event information and details.",
    image: "/m111.png",
    link: "https://ngalamfoldingbike.id/",
    alt: "m111",
  },
  {
    title: "Instagram Mutual Detector",
    description:
      "Find out which Instagram accounts you follow that don't follow you back.",
    image: "/imud.png",
    link: "https://imud.pambudi.site/",
    alt: "imud",
  },
  {
    title: "JAMSELINAS 13 2024 MALANG",
    description:
      "Information website about the Jambore Sepeda Lipat Nasional event in Malang, built using WordPress.",
    image: "/jamselinas.png",
    link: "https://jamselinas13.ngalamfoldingbike.id/",
    alt: "jamselinas",
  },
];

export const contactData = {
  email: "gilang@pambudi.site",
  phone: "+62 812-4942-7072",
  linkedin: "https://linkedin.com/in/gilang-pambudi",
  website: "https://pambudi.site/",
  location: "Malang, East Java",
};
