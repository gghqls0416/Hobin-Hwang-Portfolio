export interface Project {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  role: string;
  tech: string;
  description: string[];
  features: { title: string; desc: string }[];
  result?: string;
  bgColor: string;
  image: string;
  gallery?: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string[];
}

export interface Education {
  school: string;
  period: string;
  degree: string;
  gpa?: string;
  details?: string[];
}

export interface SkillCategory {
  title: string;
  items: string[];
}