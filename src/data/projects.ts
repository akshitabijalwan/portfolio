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
    slug: 'social-media-communications',
    title: 'Intent to Impact: Multi-Brand Social Strategy',
    brand: 'Multi-brand social media',
    year: '',
    industry: 'Lifestyle, Baby Care, Technology & Retail',
    category: 'Brand-specific Social Media Communication & Visualization',
    summary: 'Three brands, three business goals: a six-step system.',
    coverImage: 'projects/social-media-communications/cover.svg',
    coverImageAlt: 'A six-step social strategy from business goal to measurement across five distinct streams',
    coverAspectRatio: 'landscape',
    role: 'Social Media, Content & Visual Design',
    featured: true,
    order: 1,
  },
  {
    slug: 'mother-sparsh',
    title: 'Specialised Campaign for Product Launch',
    brand: 'Mother Sparsh',
    year: '2025–2026',
    industry: 'Baby Care / Skincare',
    category: 'Product Launch Awareness Campaign',
    summary: 'Leveraging pre-launch product communication to build acceptance for the new product.',
    coverImage: 'projects/mother-sparsh/skincare-range-01.png',
    coverImageAlt: 'Mother Sparsh Simply Unscented baby lotion and wash with natural oatmeal',
    coverAspectRatio: 'square',
    role: 'Brand Manager',
    featured: true,
    order: 2,
  },
  {
    slug: 'synx-store',
    title: 'Brand Identity and Social Strategy',
    brand: 'Synx Store × ReferMe',
    year: '',
    industry: 'Garden E-commerce & Professional Networking',
    category: 'Brand Identity & Social Media Strategy',
    summary: 'Brand guidelines and campaign systems built for consistency & clear positioning.',
    coverImage: 'projects/synx-store/hero-hd.jpeg',
    coverImageAlt: 'Synx Store wheelbarrow brandmark on a leafy garden background',
    coverAspectRatio: 'landscape',
    role: 'Brand Design · Strategy · Creative Direction',
    featured: true,
    order: 3,
  },
  {
    slug: 'activewear-ad-analysis',
    title: 'Campaign ads performance analysis',
    brand: 'Bamboo Activewear',
    year: '',
    industry: 'Bamboo Activewear / E-Commerce',
    category: 'Campaign Ad Performance Analysis',
    summary: 'Identifying the content that drives results, informing how future campaigns are designed.',
    coverImage: 'projects/activewear-ad-analysis/cover.svg',
    coverImageAlt: 'An anonymized performance-analysis graphic highlighting a 5.11 percent conversion-rate result',
    coverAspectRatio: 'landscape',
    role: '',
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
