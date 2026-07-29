export interface HeroData {
  name: string;
  fullName: string;
  nickName: string;
  title: string;
  sloganLine1: string;
  sloganLine2: string;
  subSlogan: string[];
  image: string;
  cv: string;
}

export const heroData: HeroData = {
  name: "Gilang Pambudi Wibawanto S.Tr.S.I.B", // Keep for SEO/Metadata if needed, or About
  fullName: "Gilang Pambudi Wibawanto",
  nickName: "Gilang Pambudi W.",
  title: "Web Developer",
  sloganLine1: "Let's Make Something Useful.",
  sloganLine2: "Let's Make Something Useful.",
  subSlogan: [
    "Software Engineer",
    "Full Stack Developer",
  ],
  image: "/profil.jpeg", // Using existing image path
  cv: "/cv-gilang.pdf", // Assumption, placeholder
};

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  gpa: string;
  coursework: string;
}

export interface CertificationItem {
  name: string;
  provider: string;
  link: string;
}

export interface AboutData {
  bio: string;
  education: EducationItem;
  certifications: CertificationItem[];
}

export const aboutData: AboutData = {
  bio: "Web Developer with experience building event platforms and landing pages. Proficient in Next.js, React, Tailwind CSS, WordPress, Laravel, and PHP, and basic Node.js knowledge. Experienced in managing live systems and production traffic under tight deadlines.",
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

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  type: string;
  description: string[];
  project?: string;
}

export const experienceData: ExperienceItem[] = [
  {
    company: "Ecofest.id",
    role: "Programmer",
    period: "Jul 2026 - Present",
    type: "Self Employed",
    description: [
      "Developed and maintained features in the ecofest.id platform.",
      "Collaborated with the team to optimize performance and enhance user experience.",
      "Implemented new functionalities based on business requirements.",
    ],
  },
  {
    company: "PT Green Energi Utama",
    role: "Software Developer Staff",
    period: "Feb 2026 - Present",
    type: "Contract",
    description: [
      "Developed and maintained features in the Enterprise Resource Planning (ERP) system using CodeIgniter.",
      "Conducted comprehensive testing including unit tests and integration tests.",
      "Collaborated with team members to resolve bugs and improve system functionality.",
    ],
  },
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
      "Developed the front-end of the system for PT Sari Bahari using PHP and CodeIgniter.",
      "Implemented existing UI components with Bootstrap for responsive design.",
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

export interface SkillsData {
  frontend: string[];
  backend: string[];
  database: string[];
  tools: string[];
  softSkills: string[];
}

export const skillsData: SkillsData = {
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

export interface PortfolioItem {
  title: string;
  description: string;
  image: string;
  link: string;
  alt: string;
  isPrivate?: boolean;
}

export const portfolioItems: PortfolioItem[] = [
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
    link: "https://pams.pambudi.dev/",
    alt: "pams",
  },
  {
    title: "SERAPHIM",
    description:
      "Search About Phone Informations & Models, connected with phone codename repository.",
    image: "/seraphim.webp",
    link: "https://seraphim.pambudi.dev/",
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
    link: "https://ngalamfoldingbike.id/m111",
    alt: "m111",
  },
  {
    title: "Instagram Mutual Detector",
    description:
      "Find out which Instagram accounts you follow that don't follow you back.",
    image: "/imud.png",
    link: "https://imud.pambudi.dev/",
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

export interface ContactData {
  email: string;
  phone: string;
  linkedin: string;
  website: string;
  location: string;
}

export const contactData: ContactData = {
  email: "gilang@pambudi.dev",
  phone: "+62 812-4942-7072",
  linkedin: "https://linkedin.com/in/gilang-pambudi",
  website: "https://pambudi.dev/",
  location: "Malang, East Java",
};
