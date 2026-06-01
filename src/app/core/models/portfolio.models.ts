export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  linkedIn: string;
  github: string;
  summary: string;
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
  category: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  role: string;
  impact: string;
  businessValue: string;
  status: string;
  github?: string;
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
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skills: Record<string, string[]>;
  services: ServiceItem[];
  clients: string[];
  testimonials: TestimonialItem[];
  whyHire: WhyHireItem[];
}
