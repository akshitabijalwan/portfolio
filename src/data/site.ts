import type { SiteConfig, NavItem } from '../types/site';

/**
 * SITE CONFIGURATION
 * ==================
 * Update these values with the candidate's real information.
 * All fields marked [PLACEHOLDER] should be replaced before sharing.
 */
export const siteConfig: SiteConfig = {
  // [PLACEHOLDER] Replace with candidate's full name
  candidateName: 'Tara Sharma',

  // [PLACEHOLDER] Replace with actual professional title
  professionalTitle: 'Brand Manager',

  // [PLACEHOLDER] Replace with final headline
  heroHeadline: 'Building brands with clarity, character, and purpose.',

  // [PLACEHOLDER] Replace with final subheadline
  heroSubheadline:
    'Exploring the intersection of brand strategy, creative storytelling, and meaningful business outcomes.',

  // [PLACEHOLDER] Replace with actual introduction
  heroIntroduction:
    'A brand manager with experience across brand positioning, campaign strategy, and go-to-market planning. Passionate about building brands that connect with audiences and drive measurable results.',

  // [PLACEHOLDER] Replace with actual bio
  shortBio:
    'With a background spanning brand strategy, integrated marketing, and creative direction, I bring a structured yet creative approach to building brands that resonate. I believe the best brand work lives at the intersection of sharp strategy, compelling storytelling, and deep consumer understanding.',

  // [PLACEHOLDER] Replace with actual email
  email: 'hello@example.com',

  // [PLACEHOLDER] Replace with actual LinkedIn URL
  linkedInUrl: 'https://linkedin.com/in/placeholder',

  // Set to the path of the résumé PDF in public/ when available.
  // Set resumeAvailable to true once the file exists.
  resumePath: 'assets/resume.pdf',
  resumeAvailable: false,

  // Path to profile/portrait image in public/
  profileImagePath: null,

  // [PLACEHOLDER] Replace with confirmed capabilities
  capabilities: [
    'Brand Strategy',
    'Brand Positioning',
    'Consumer Insights',
    'Campaign Planning',
    'Creative Direction',
    'Go-to-Market Strategy',
    'Integrated Marketing',
    'Performance Measurement',
    'Agency & Stakeholder Management',
  ],

  // Social sharing image path (in public/)
  ogImagePath: 'assets/images/shared/og-image.svg',

  // [PLACEHOLDER] Replace with actual domain once deployed
  siteUrl: 'https://username.github.io',

  // GitHub repository name — used for base path in production
  // Set to '' if deploying to username.github.io root
  repositoryName: 'portfolio',
};

export const navItems: NavItem[] = [
  { label: 'Selected Work', href: '#selected-work' },
  { label: 'About', href: '#/about' },
  { label: 'Contact', href: '#contact' },
];
