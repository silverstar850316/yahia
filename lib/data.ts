import { Terminal, Code2, Boxes, ArrowRight } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiVercel,
  SiFigma,
  SiFramer,
  SiFirebase,
  SiMysql,
  SiNotion,
  SiPython,
  // SiSupabase,
  SiEjs,
  SiGooglegemini,
  SiBootstrap,
  SiSocketdotio,
  SiDjango,
  SiCss3,
  SiHtml5,
  SiPhp,
  SiRuby,
  SiAngular,
  SiVuedotjs,
  SiNuxtdotjs,
  SiWordpress,
  SiShopify,
  SiStyledcomponents,
  SiMui,
  SiSuckless,
  SiVite,
  SiPostgresql,
  SiFastapi,
  SiFlask,
  SiNestjs,
  SiJest,
  SiJasmine,
  SiCypress,
  SiJunit5,
  SiPytest,
  SiStorybook,
  SiGooglecloud,
  SiDigitalocean,
  SiDocker,
  SiKubernetes,
  SiNginx,
  SiJenkins,
  SiGitlab,
} from "react-icons/si";
import { AiOutlineJava } from "react-icons/ai";
import { TbBrandCSharp } from "react-icons/tb";

import {
  HeroContent,
  NavItem,
  AboutContent,
  SkillsContent,
  ExperienceContent,
  ContactContent,
  ProjectSection,
  ProjectData,
} from "./types";
import { BsFiletypeScss } from "react-icons/bs";
import { FaAws } from "react-icons/fa6";
import { VscAzure } from "react-icons/vsc";

export const navigationItems: NavItem[] = [
  {
    name: "About",
    href: "/#about",
    label: "About section",
  },
  {
    name: "Projects",
    href: "/#projects",
    label: "Projects section",
  },
  {
    name: "Skills",
    href: "/#skills",
    label: "Skills section",
  },
  {
    name: "Experience",
    href: "/#experience",
    label: "Experience section",
  },
] as const;

export const heroContent: HeroContent = {
  intro: " Available for hire ",
  // intro: " CODE • CREATE • INNOVATE ",
  description:
    "A versatile Senior Software Engineer specializing in JavaScript frameworks (React, Angular, Vue), with expertise in WordPress, Shopify, AI integration, and automation using Python and JavaScript for custom web solutions and API-driven workflows.",
  personal: {
    name: "Yahia Elazhar",
    nickname: "CSTAR",
  },
  currentRole: {
    title: "Senior Software Engineer",
    filename: "current_role.tsx",
  },
  roles: [
    { icon: Terminal, label: "Software Engineer" },
    { icon: Code2, label: "Frontend Developer" },
    { icon: Boxes, label: "Full Stack Developer" },
    // { icon: Code2, label: "React Developer" },
    { icon: ArrowRight, label: "Freelancer" },
    // Add more roles as needed
  ],
  cta: {
    primary: {
      href: "#projects",
    },
    secondary: {
      href: "https://drive.google.com/file/d/1niXm13MRU9B1btVTizr2t5ScRexpq2yn/view?usp=drive_link",
    },
  },
  social: {
    github: "https://github.com/yahia-star820",
    linkedin: "https://linkedin.com/in/senior-fullsack-dev6083",
    discord: "https://discord.gg/98HsS8qX",
    telegram: "https://t.me/cstar_4786083",
  },
};

export const aboutContent: AboutContent = {
  title: "About Me",
  subtitle: "hello",
  terminalInfo: {
    command: "whoami",
    flag: "info",
    content: "Software engineer bringing ideas to life",
  },
  image: {
    src: "/images/cstar.webp",
    alt: "Yahia Elazhar",
  },
  description: {
    details: [
      "I’m a Senior Software Engineer passionate about leveraging AI to build smarter, more efficient web experiences. My expertise spans modern JavaScript frameworks such as React, Angular, and Vue, and I have deep experience integrating AI-powered features into scalable applications.",

      "Whether developing custom solutions with WordPress or Shopify, or designing API-driven workflows, I focus on creating intelligent, automation-ready systems that solve real-world problems.",

      "Check out my blog for in-depth articles on the latest trends in technology and development. If you’re interested in collaborating or just want to connect, feel free to get in touch.",
    ],
  },
  interests: [
    {
      type: "Beyond Coding",
      items: [
        "Playing & Watching Football",
        "Reading Tech Blogs and Youtube",
        "Do It Yourself (DIY) Projects",
        "Learning New Technologies",
      ],
    },
    {
      type: "What Drives Me",
      items: [
        "Building intuitive user experiences",
        "Solving complex problems",
        "Striving to be at the top",
        "Continuous learning",
      ],
    },
  ],
};

export const skillsContent: SkillsContent = {
  title: "Skills",
  subtitle: "tech stack",
  terminalInfo: {
    command: "skill",
    flag: "list",
    content:
      "Some few technologies and tools I work with to bring ideas to life",
  },
  groups: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: SiPython },
        { name: "JavaScript", icon: SiJavascript },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Java", icon: AiOutlineJava },
        { name: "C#", icon: TbBrandCSharp },
        { name: "Ruby", icon: SiRuby },
        { name: "HTML", icon: SiHtml5 },
        { name: "CSS", icon: SiCss3 },
        { name: "PHP", icon: SiPhp },
      ],
    },
    {
      title: "Frontend & UI/UX",
      skills: [
        { name: "React.js", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Angular", icon: SiAngular },
        { name: "Vue", icon: SiVuedotjs },
        { name: "Nuxt.JS", icon: SiNuxtdotjs },
        { name: "WordPress", icon: SiWordpress },
        { name: "Shopify", icon: SiShopify },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "styled-components", icon: SiStyledcomponents },
        { name: "Material-UI", icon: SiMui },
        { name: "SCSS", icon: BsFiletypeScss },
        { name: "Vite", icon: SiVite },
        { name: "Figma", icon: SiFigma },
        { name: "Notion", icon: SiNotion },
        { name: "Framer", icon: SiFramer },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Django", icon: SiDjango },
        { name: "Flask", icon: SiFlask },
        { name: "FastAPI", icon: SiFastapi },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express.js", icon: SiExpress },
        { name: "Nestjs", icon: SiNestjs },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MongoDB", icon: SiMongodb },
        { name: "MySQL", icon: SiMysql },
        { name: "Firebase", icon: SiFirebase },
      ],
    },
    {
      title: "Test",
      skills: [
        { name: "Jest", icon: SiJest },
        { name: "Jasmine", icon: SiJasmine },
        { name: "Cypress", icon: SiCypress },
        { name: "React-Testing Library", icon: SiNodedotjs },
        { name: "JUnit", icon: SiJunit5 },
        { name: "PyTest", icon: SiPytest },
        { name: "StoryBook", icon: SiStorybook },
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "AWS", icon: FaAws },
        { name: "Azure", icon: VscAzure },
        { name: "GCP", icon: SiGooglecloud },
        { name: "DigitalOcean", icon: SiDigitalocean },
        { name: "Docker", icon: SiDocker },
        { name: "Kubernetes", icon: SiKubernetes },
        { name: "Nginx", icon: SiNginx },
        { name: "Jenkins", icon: SiJenkins },
        { name: "Git", icon: SiGit },
        { name: "GitHub", icon: SiGithub },
        { name: "Gitlab", icon: SiGitlab },
      ],
    },
  ],
};
export const projectsSection: ProjectSection = {
  title: "Projects",
  subtitle: "portfolio",
  terminalInfo: {
    command: "projects",
    flag: "list",
    content: "A collection of my selected works & key projects",
  },
};

export const projectsData: ProjectData[] = [
  {
    id: "project-1",
    title: "Abdamin International Limited",
    description:
      "A responsive web application for Abdamin International Limited, a multi-sector company in Nigeria.",
    featured: true,
    cover: {
      url: "/projects/abdamin.webp",
      alt: "Abdamin International Limited",
    },
    tech: [
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer },
    ],
    links: {
      github: "https://github.com/NabsCodes/abdamin",
      live: "https://abdamin.com/",
    },
    details: {
      challenge:
        "Building a scalable e-commerce platform with real-time inventory management and fast checkout process.",
      solution:
        "Implemented Next.js for optimal performance, MongoDB for flexible data structure, and integrated real-time features.",
      keyFeatures: [
        "Real-time inventory tracking",
        "Secure payment processing",
        "Responsive admin dashboard",
        "Advanced search and filtering",
      ],
    },
  },
  {
    id: "project-2",
    title: "Horizon - Crypto SaaS ",
    description:
      "Horizon is designed for AI-powered SaaS startups to explore real-time trends, decode user queries with precision, and make strategic decisions with foresight.",
    featured: true,
    cover: {
      url: "/projects/horizon.webp",
      alt: "Horizon - Crypto SaaS",
    },
    tech: [
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer },
    ],
    links: {
      github: "https://github.com/NabsCodes/horizon",
      live: "https://horizonbusiness.vercel.app/",
    },
    details: {
      challenge:
        "Creating a performant dashboard that handles real-time data updates and complex visualizations.",
      solution:
        "Used React with Firebase for real-time updates, and implemented efficient data caching strategies.",
      keyFeatures: [
        "Real-time data updates",
        "Interactive charts",
        "Customizable widgets",
        "Data export capabilities",
      ],
    },
  },
  {
    id: "project-3",
    title: "Library Meta Bot System",
    description:
      "An advanced library management system integrating AI-assisted cataloging, comprehensive classification tools, and robust metadata management.",
    featured: true,
    cover: {
      url: "/projects/lib-meta-bot.webp",
      alt: "Library Metabot System",
    },
    tech: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "React", icon: SiReact },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Gemini", icon: SiGooglegemini },
    ],
    links: {
      github: "https://github.com/NabsCodes/LibMetaBot",
      live: "https://lib-meta-bot.vercel.app/",
    },
  },
  {
    id: "project-4",
    title: "Yara - eCommerce Landing Page",
    description:
      "A landing page built for eCommerce small businesses. Yara is a project crafted from my time at Perxcels UI/UX school.",
    featured: false,
    cover: {
      url: "/projects/yara.webp",
      alt: "Blog platform interface",
    },
    tech: [
      // { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      // { name: "Supabase", icon: SiSupabase },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
    links: {
      github: "https://github.com/NabsCodes/yara",
      live: "https://yara-seven.vercel.app/",
    },
  },
  {
    id: "project-5",
    title: "SMS Scheduler App",
    description:
      "An SMS Scheduler app developed for MKEL Networks to schedule SMS messages. It allows automation of sending recurring messages at specific times and intervals using third-party API(s).",
    featured: false,
    tech: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "EJS", icon: SiEjs },
      { name: "Socket.io", icon: SiSocketdotio },
      { name: "MongoDB", icon: SiMongodb },
    ],
    links: {
      github: "https://github.com/NabsCodes/sms-scheduler",
    },
  },
  {
    id: "project-6",
    title: "Elderly Care Management System",
    description:
      "An elderly care management system to monitor and manage the health and well-being of elderly individuals.",
    featured: false,
    cover: {
      url: "/projects/ecms.webp",
      alt: "Fitness tracking dashboard",
    },
    tech: [
      { name: "React", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
    links: {
      github: "https://github.com/NabsCodes/ecms",
    },
  },
  {
    id: "project-7",
    title: "CGPA Calculator",
    description:
      "A CGPA calculator for students to calculate their cumulative grade point average.",
    featured: false,
    tech: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "Django", icon: SiDjango },
    ],
    links: {
      github: "https://github.com/yahia/portfolio",
      live: "https://yahia.pythonanywhere.com",
    },
  },
];

export const experienceData: ExperienceContent = {
  title: "Experience",
  subtitle: "journey",
  terminalInfo: {
    command: "career",
    flag: "experiences",
    content: "Discover my career journey and work experience",
  },
  experiences: [
    {
      id: "exp-1",
      role: "Full Stack Developer",
      company: "Teladoc Health",
      companyUrl: "https://www.teladochealth.com",
      location: "New York, USA / Remote",
      type: "Full-time",
      dates: {
        start: "May 2015",
        end: "Feb 2019",
      },
      description:
        "Designed and developed high-performance web applications, APIs, and dashboards for Teladoc Health, improving telehealth service delivery and real-time healthcare monitoring through optimized backend systems and enhanced user experience.",
      achievements: [
        "Developed and optimized scalable web applications using Java Spring Boot, ASP.NET Core, and other technologies, ensuring smooth communication and performance under heavy loads, handling over 500,000 patient and healthcare service requests daily.",
        "Created and maintained RESTful APIs using Java, C#, and Python, enabling seamless integration between Teladoc's frontend and backend systems, improving patient access to telehealth services.",
        "Led the migration of legacy healthcare systems built with PHP & jQuery to more modern solutions, optimizing user experience and reducing technical debt to improve healthcare provider interactions and patient satisfaction.",
        "Developed real-time health data dashboards using AngularJS and other web technologies, allowing healthcare providers to monitor patient care and treatment efficiency in real time.",
        "Managed and customized WordPress websites for patient-facing portals and internal communications, improving user engagement and enhancing the overall telehealth experience.",
      ],
    },
    {
      id: "exp-2",
      role: "Angular | React Frontend Developer",
      company: "Plaid",
      companyUrl: "https://www.plaid.com",
      location: "California, USA / Remote",
      type: "Full-time",
      dates: {
        start: "Feb 2019",
        end: "Apr 2022",
      },
      description:
        "Focused on building scalable, high-performance micro frontends with React (Next.js) & Angular, Docker, Kubernetes, and optimized CI/CD workflows to improve deployment efficiency and user experience.",
      achievements: [
        "Developed scalable micro frontend architecture with React (Next.js) and Angular, using Docker for containerization and Kubernetes (EKS) for orchestration, ensuring high availability and reduced downtime.",
        "Built a shared UI component library using Storybook, Angular Material, Tailwind CSS, and React, ensuring consistent branding and seamless integration across all micro frontends.",
        "Implemented efficient state management with NgRx Store and NgRx Effects in Angular, and React Context API with Redux in React (Next.js), streamlining data flow across distributed services.",
        "Optimized performance through Webpack Code Splitting and ESBuild optimizations, reducing bundle sizes by 23%, and integrated automated CI/CD pipelines with GitHub Actions and Jenkins for zero-downtime deployments.",
      ],
    },
    {
      id: "exp-3",
      role: "Senior Full Stack Developer | AI & Software Solution",
      company: "Blue Apron",
      companyUrl: "https://www.blueapron.com",
      location: "New York, USA / Remote",
      type: "Full-time",
      dates: {
        start: "Apr 2022",
        end: "Dec 2024",
      },
      description:
        "Led the development of scalable systems and micro frontend architectures at Blue Apron, incorporating AI techniques to enhance product personalization, and mentored junior developers while optimizing performance.",
      achievements: [
        "Led the development of a scalable microservices architecture using Node.js, Nest.js, and AWS Lambda, improving system performance by 30% and reducing downtime with optimized RESTful and GraphQL APIs and efficient PostgreSQL and Redis queries.",
        "Architected a micro frontend strategy using React, Redux, Webpack Module Federation, and TailwindCSS, enhancing modularity and enabling independent deployments to accelerate feature releases by 50%.",
        "Integrated AI-based recommendation algorithms and natural language processing (NLP) techniques, improving product personalization and customer engagement on the platform.",
        "Mentored junior developers on best practices in React, Node.js, cloud-native architectures, and AI applications, reducing onboarding time by 40% and fostering a high-performance engineering culture.",
        "Drove performance optimization initiatives, including Next.js server-side rendering (SSR) and React Suspense, improving frontend rendering speed by 40% and enhancing user experience.",
      ],
    },
  ],
};

export const contactData: ContactContent = {
  title: "Get in Touch",
  subtitle: "connect",
  terminalInfo: {
    command: "contact",
    flag: "send",
    content: "Let's collaborate on something amazing",
  },
  description:
    "Have a project in mind or want to discuss opportunities? Feel free to reach out!",
  email: "yahiaelazhar.work929@gmail.com",
  socials: {
    github: "https://github.com/yahia-star820",
    linkedin: "https://www.linkedin.com/in/senior-fullsack-dev6083",
    twitter: "https://twitter.com",
  },
};
