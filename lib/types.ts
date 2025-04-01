import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

export type TerminalInfo = {
  command: string;
  flag: string;
  content: string;
};

export type Icon = React.FC<{ className?: string }>;

export type BaseSection = {
  title: string;
  subtitle: string;
  terminalInfo: TerminalInfo;
};

export type SectionName =
  | "home"
  | "about"
  | "projects"
  | "skills"
  | "experience"
  | "contact";

export type NavItem = {
  name: Capitalize<SectionName>;
  href: string;
  label?: string;
};

export type HeroContent = {
  intro: string;
  description: string;
  personal: {
    name: string;
    nickname: string;
  };
  currentRole: {
    title: string;
    filename: string;
  };
  roles: Array<{
    icon: LucideIcon;
    label: string;
  }>;
  cta: {
    primary: {
      href: string;
    };
    secondary: {
      href: string;
    };
  };
  social: {
    github: string;
    linkedin: string;
    discord: string;
    telegram: string;
  };
};

export type AboutContent = BaseSection & {
  image: {
    src: string;
    alt: string;
  };
  description: {
    details: string[];
  };
  interests: Array<{
    type: string;
    items: string[];
  }>;
};

export type SkillGroup = {
  title: string;
  skills: Array<{
    name: string;
    icon: Icon;
  }>;
};

export type SkillsContent = BaseSection & {
  terminalInfo: TerminalInfo;
  groups: SkillGroup[];
};

export type ProjectSection = BaseSection;

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  featured: boolean;
  cover?: {
    url: string;
    alt: string;
  };
  tech: Array<{
    name: string;
    icon: IconType;
  }>;
  links: {
    github?: string;
    live?: string;
  };
  details?: {
    challenge: string;
    solution: string;
    keyFeatures: string[];
  };
}

export type Experience = {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Freelance" | "Internship";
  dates: {
    start: string;
    end: string | "Present";
  };
  description: string;
  achievements: string[];
};

export type ExperienceContent = BaseSection & {
  experiences: Array<Experience>;
};

export type ContactContent = BaseSection & {
  description: string;
  email: string;
  socials: {
    [key: string]: string;
  };
};
