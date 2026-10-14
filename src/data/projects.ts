import type { ProjectMeta } from '../types/project';

/**
 * PROJECT METADATA
 * ================
 * Each entry defines a project preview shown on the homepage.
 * 
 * To add a new project:
 * 1. Create a folder in public/projects/your-project-slug/
 * 2. Add cover.webp (or .jpg/.png) to that folder
 * 3. Add an entry below
 * 4. Create a matching case study in src/data/case-studies/
 * 
 */
export const projects: ProjectMeta[] = [
  {
    slug: 'synx-store',
    title: 'Brand Identity & Social Media Strategy',
    brand: 'Synx Store × ReferMe',
    year: '',
    industry: 'Garden E-commerce & Professional Networking',
    category: 'Brand Identity & Social Media Strategy',
    summary:
      'Two complementary brand stories: a grounded identity and social system for Synx Store, alongside ReferMe’s connecting-thread identity and campaign for a new professional network.',
    coverImage: 'projects/synx-store/hero-hd.jpeg',
    coverImageAlt: 'Synx Store wheelbarrow brandmark on a leafy garden background',
    coverAspectRatio: 'landscape',
    role: 'Brand Design · Strategy · Creative Direction',
    featured: true,
    order: 1,
  },
  {
    slug: 'activewear-ad-analysis',
    title: 'From Scroll-Stop to Sale',
    brand: 'Confidential Activewear Brand',
    year: '',
    industry: 'Bamboo Activewear / E-Commerce',
    category: 'Campaign Ad Performance Analysis',
    summary:
      'An evidence-led review of campaign performance and ad-set creative: comparing hooks, hold, clicks, conversion, and the storytelling choices that turn attention into action.',
    coverImage: 'projects/activewear-ad-analysis/cover.svg',
    coverImageAlt: 'An anonymized performance-analysis graphic highlighting a 5.11 percent conversion-rate result',
    coverAspectRatio: 'landscape',
    role: 'Brand Strategy & Paid Social Analysis',
    featured: true,
    order: 2,
  },
  {
    slug: 'mother-sparsh',
    title: 'A Gentle Start to Baby Care',
    brand: 'Mother Sparsh',
    year: '2025–2026',
    industry: 'Baby Care / Skincare',
    category: 'Product Launch Awareness Campaign',
    summary:
      'Extending the trust of a hit 99% pure-water baby wipe into a gentle skincare range, with a warm launch story for Simply Unscented lotion and wash.',
    coverImage: 'projects/mother-sparsh/skincare-range-01.png',
    coverImageAlt: 'Mother Sparsh Simply Unscented baby lotion and wash with natural oatmeal',
    coverAspectRatio: 'square',
    role: 'Brand Manager',
    featured: true,
    order: 3,
  },
  {
    slug: 'social-media-communications',
    title: 'A Distinct Voice for Every Feed',
    brand: 'Multi-brand social media',
    year: '',
    industry: 'Lifestyle, Baby Care, Technology & Retail',
    category: 'Brand-specific Social Media Communication & Visualization',
    summary:
      'Five distinct social streams, each shaped around its audience: apparel and craft, baby care, children’s goods, technology, and jewelry.',
    coverImage: 'projects/social-media-communications/cover.svg',
    coverImageAlt: 'A six-step social strategy from business goal to measurement across five distinct streams',
    coverAspectRatio: 'landscape',
    role: 'Social Media, Content & Visual Design',
    featured: true,
    order: 4,
  },
];

/**
 * Returns projects sorted by order, optionally filtered to featured only.
 */
export function getProjects(featuredOnly = false): ProjectMeta[] {
  const filtered = featuredOnly
    ? projects.filter((p) => p.featured)
    : projects;
  return [...filtered].sort((a, b) => a.order - b.order);
}

/**
 * Returns a single project by slug, or undefined if not found.
 */
export function getProjectBySlug(slug: string): ProjectMeta | undefined {
  return projects.find((p) => p.slug === slug);
}
