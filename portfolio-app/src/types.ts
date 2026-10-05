export interface ContactInfo {
  name: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  certDriveUrl: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ProjectItem {
  title: string;
  date: string;
  techStack: string[];
  description: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface CertificationCategory {
  category: string;
  items: string[];
}

export interface ExamItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  message: string;
}
