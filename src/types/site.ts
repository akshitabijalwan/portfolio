export interface SiteConfig {
  candidateName: string;
  professionalTitle: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroPoints: { label: string; body: string }[];
  shortBio: string;
  email: string;
  phone: string;
  location: string;
  resumePath: string | null;
  resumeAvailable: boolean;
  profileImagePath: string | null;
  capabilities: string[];
  experience: {
    role: string;
    organization?: string;
    dates: string;
    highlights: string[];
  }[];
  internships: {
    organization: string;
    dates: string;
    detail: string;
  }[];
  selectedProjects: {
    name: string;
    focus: string;
    dates?: string;
    highlights: string[];
  }[];
  education: {
    qualification: string;
    institution: string;
    dates: string;
  }[];
  courses: string[];
  ogImagePath: string | null;
  siteUrl: string;
  repositoryName: string;
}

export interface NavItem {
  label: string;
  href: string;
}
