export interface SiteConfig {
  candidateName: string;
  professionalTitle: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroIntroduction: string;
  shortBio: string;
  email: string;
  linkedInUrl: string;
  resumePath: string | null;
  resumeAvailable: boolean;
  profileImagePath: string | null;
  capabilities: string[];
  ogImagePath: string | null;
  siteUrl: string;
  repositoryName: string;
}

export interface NavItem {
  label: string;
  href: string;
}
