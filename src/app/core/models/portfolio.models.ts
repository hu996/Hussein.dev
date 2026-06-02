export interface PersonalInfo {
  name: string;
  title: string;
  eyebrow?: string;
  headline?: string;
  subheadline?: string;
  location: string;
  email: string;
  linkedIn: string;
  github: string;
  summary: string;
  trustLine?: string;
}

export interface StrengthItem {
  title: string;
  description: string;
}

export interface ExperienceItem {
  company: string;
  title: string;
  period: string;
  type: string;
  domain: string[];
  responsibilities: string[];
  technologies: string[];
}

export interface ProjectItem {
  name: string;
  title?: string;
  category: string;
  status: string;
  shortDescription?: string;
  description: string;
  overview?: string;
  businessContext: string;
  problem: string;
  myRole?: string;
  features: string[];
  backendWork?: string[];
  frontendWork?: string[];
  databaseWork?: string[];
  integrations?: string[];
  challenges?: string[];
  solution: string;
  technologies: string[];
  role: string;
  impact: string;
  businessValue: string;
  visualType?: string;
  github?: string;
  links?: {
    github?: string;
    live?: string;
    caseStudy?: string;
  };
}

export interface StatItem {
  value: string;
  label: string;
  detail: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export interface TestimonialItem {
  role: string;
  quote: string;
}

export interface WhyHireItem {
  title: string;
  description: string;
  icon: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  stats: StatItem[];
  strengths: StrengthItem[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skills: Record<string, string[]>;
  capabilities: string[];
  services: ServiceItem[];
  techStack: Record<string, string[]>;
  clients: string[];
  testimonials: TestimonialItem[];
  whyHire: WhyHireItem[];
}
