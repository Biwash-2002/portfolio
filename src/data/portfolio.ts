export const personalInfo = {
  name: "Biwash Thapa",
  role: "Frontend Developer",
  description:
    "A passionate Frontend Developer dedicated to crafting immersive, high-performance web experiences. Specializing in modern React ecosystems and performance-driven UI architecture.",
  email: "biwashthapa2026@gmail.com",
  phone: "+977-9804851229",
  location: "Kathmandu, Nepal",
  socials: [
    { name: "GitHub", url: "https://github.com/Biwash-2002" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/biwash-thapa-90b155391/" },
  ],
};

export interface Skill {
  name: string;
  level: number;
}

export interface SkillGroup {
  category: string;
  iconName: "code" | "layout";
  items: Skill[];
}

export const skills: SkillGroup[] = [
  {
    category: "Frontend Stack",
    iconName: "layout",
    items: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 92 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Next.js", level: 80 },
      { name: "HTML/CSS", level: 98 },
    ],
  },
  {
    category: "Tools & Others",
    iconName: "code",
    items: [
      { name: "Git/GitHub", level: 90 },
      { name: "UI Design", level: 55 },
    ],
  },
];

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: "React" | "UI/UX" | "Fullstack" | "Frontend";
  githubUrl: string;
  liveUrl: string;
  fullDescription?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Clean & Go - Car Wash Booking System",
    description:
      "A comprehensive dashboard for managing car wash bookings with real-time tracking.",
    fullDescription:
      "Clean & Go is a high-performance car wash booking platform built using modern web technologies. It enables users to schedule car wash services seamlessly, select preferred dates within a dynamic time window, and track booking status. The system focuses on user-friendly design, responsive UI, and efficient service management, providing a smooth and optimized booking experience.",
    image:
      "/car.png.png",
    tags: ["React", "TypeScript", "Tailwind"],
    category: "Frontend",
    githubUrl: "https://github.com/Biwash-2002/clean-and-go-booking-system",
    liveUrl: "https://clean-and-go-booking-system.vercel.app/",
  },
  {
    id: 2,
    title: "Quiz App with API integration",
    description:
      "A dynamic Quiz Application built using React + TypeScript + Vite, where quiz questions are fetched from an external API instead of being hardcoded.",
    fullDescription:
      "This is a dynamic Quiz Application built using React + TypeScript + Vite, where quiz questions are fetched from an external API instead of being hardcoded. The app allows users to attempt quizzes, view scores, and get instant feedback",
    image:
      "/quiz.png",
    tags: ["React", "TypeScript", "Vite"],
    category: "React",
    githubUrl: "https://github.com/Biwash-2002/Quiz-game-with-API",
    liveUrl: "https://quiz-game-with-api-integration.vercel.app/",
  },
  // {
  //   id: 3,
  //   title: "ZenArt Gallery",
  //   description:
  //     "A visually stunning digital art marketplace with smooth 3D transitions.",
  //   fullDescription:
  //     "ZenArt is a premium NFT marketplace concept focused on visual excellence. It leverages Three.js for immersive 3D previews of digital collectibles and Framer Motion for cinematic page transitions. The UI follows a strict minimal aesthetic.",
  //   image:
  //     "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1426&auto=format&fit=crop",
  //   tags: ["React", "Three.js", "Tailwind CSS"],
  //   category: "UI/UX",
  //   githubUrl: "https://github.com",
  //   liveUrl: "https://example.com",
  // },
  // {
  //   id: 4,
  //   title: "Insight Analytics",
  //   description:
  //     "SaaS platform for deep data visualization and business intelligence reporting.",
  //   fullDescription:
  //     "Insight is a powerful analytics engine that transforms raw business data into actionable insights through interactive heatmaps and complex charting systems. It supports high-velocity data streams and custom reporting templates.",
  //   image:
  //     "https://images.unsplash.com/photo-1551288049-bb8c8034b016?q=80&w=1470&auto=format&fit=crop",
  //   tags: ["React", "D3.js", "Recoil"],
  //   category: "React",
  //   githubUrl: "https://github.com",
  //   liveUrl: "https://example.com",
  // },
];

export const experiences = [
  {
    company: "KTMbess",
    role: "Frontend Development Intern",
    period: "Jan 2026 - Present",
    description:
      "Contributing to building high-performance web applications using React and Tailwind CSS. Focusing on UI optimization and component-based architecture.",
    achievements: [
      "Developed 5+ reusable UI components",
      "Optimized image loading times by 30%",
      "Implemented responsive designs for mobile",
    ],
  },
  {
    company: "Creative Pulse Agency",
    role: "Junior Web Developer",
    period: "2026 - Present",
    description:
      "Collaborated with the design team to implement pixel-perfect user interfaces and interactive web experiences.",
    achievements: [
      "SEO optimization",
      "Aesthetic layout design",
      "Smooth animations with Framer Motion",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor in Information Management",
    institution: "Tribhuvan University",
    period: "2021 - Present",
    description:
      "Specialized in Software Engineering and Distributed Systems. Graduated with First Division honors.",
  },
  {
    degree: "Higher Secondary Education (+2 Science)",
    institution: "Morgan International College",
    period: "2020",
    description:
      "Major in Computer Science and Marketing with focus on Computer Science.",
  },
];

export const careerObjective =
  "To apply my frontend expertise and user-focused design approach to build scalable, high-quality digital products that solve real-world problems and deliver meaningful user experiences.";
