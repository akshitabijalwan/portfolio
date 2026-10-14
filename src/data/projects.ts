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
 * [DEMO] All projects below are demonstration placeholders.
 * Replace with real projects before sharing the portfolio.
 */
export const projects: ProjectMeta[] = [
  {
    slug: 'synx-store',
    title: 'Brand Identity & Social Media Strategy',
    brand: 'Synx Store',
    year: '2024',
    industry: 'Home & Garden / E-Commerce',
    category: 'Brand Strategy & Identity',
    summary:
      'A complete brand foundation and social strategy for an online-first garden tool brand: positioning ("Built to work. Priced to trust."), logo identity, color palette, typography, photography standards, and content architecture.',
    coverImage: 'projects/synx-store/cover.svg',
    coverImageAlt: 'Synx Store Brand Identity & Strategy Cover',
    coverAspectRatio: 'landscape',
    role: 'Brand Manager',
    featured: true,
    order: 1,
  },
  {
    slug: 'brand-positioning-strategy',
    title: 'Brand Positioning & Strategy',
    brand: 'Sample Brand Alpha',
    year: '2024',
    industry: 'Consumer Goods',
    category: 'Brand Strategy',
    summary:
      'A comprehensive brand positioning project focused on defining the brand\'s core identity, target audience, and competitive differentiation in a crowded market.',
    coverImage: 'projects/brand-positioning-strategy/cover.svg',
    coverImageAlt: 'Placeholder — Brand positioning strategy project cover image',
    coverAspectRatio: 'landscape',
    role: 'Brand Manager',
    featured: true,
    order: 2,
  },
  {
    slug: 'integrated-marketing-campaign',
    title: 'Integrated Marketing Campaign',
    brand: 'Sample Brand Beta',
    year: '2023',
    industry: 'Technology',
    category: 'Campaign Planning',
    summary:
      'An integrated campaign spanning digital, social, and traditional channels, designed to drive brand awareness and customer acquisition for a product launch.',
    coverImage: 'projects/integrated-marketing-campaign/cover.svg',
    coverImageAlt: 'Placeholder — Integrated marketing campaign project cover image',
    coverAspectRatio: 'landscape',
    role: 'Brand Manager',
    featured: true,
    order: 3,
  },
  {
    slug: 'product-launch-go-to-market',
    title: 'Product Launch & Go-to-Market',
    brand: 'Sample Brand Gamma',
    year: '2023',
    industry: 'Lifestyle & Wellness',
    category: 'Go-to-Market Strategy',
    summary:
      'A go-to-market strategy for a new product line, encompassing consumer research, channel strategy, launch planning, and post-launch performance tracking.',
    coverImage: 'projects/product-launch-go-to-market/cover.svg',
    coverImageAlt: 'Placeholder — Product launch project cover image',
    coverAspectRatio: 'portrait',
    role: 'Brand Manager',
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
