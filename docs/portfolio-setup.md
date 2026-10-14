# Premium Brand Manager Portfolio

A modern, content-driven, editorial portfolio website built for a Brand Manager. Designed with sophisticated typography, generous whitespace, structured case studies, and responsive layouts. Built with **React**, **TypeScript**, **Vite**, and **CSS Modules**, and configured for direct hosting on **GitHub Pages** with zero external backend dependencies.

---

## Table of Contents

- [1. Tech Stack](#1-tech-stack)
- [2. Quick Start & Local Development](#2-quick-start--local-development)
- [3. Project Architecture](#3-project-architecture)
- [4. Customizing Content & Profile](#4-customizing-content--profile)
- [5. Adding a New Case Study](#5-adding-a-new-case-study)
- [6. High-Resolution Image Management](#6-high-resolution-image-management)
- [7. Deploying to GitHub Pages](#7-deploying-to-github-pages)
- [8. Pre-Launch Content Checklist](#8-pre-launch-content-checklist)
- [9. Troubleshooting](#9-troubleshooting)

---

## 1. Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler & Dev Server**: Vite
- **Styling**: Vanilla CSS Modules with custom design tokens (`src/styles/global.css`)
- **Icons**: Lucide Icons
- **Routing**: Lightweight hash router (`#/`, `#/about`, `#/projects/:slug`) for 100% compatibility with GitHub Pages (prevents 404s on page refresh)
- **Deployment**: Automated GitHub Actions workflow to GitHub Pages

---

## 2. Quick Start & Local Development

### Prerequisites

- Node.js 22 or newer
- npm 10 or newer

### Installation

```bash
# Clone the repository
git clone https://github.com/akshitabijalwan/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

- `npm run dev`: Starts local Vite development server with hot module replacement (HMR).
- `npm run build`: Compiles TypeScript and builds production-ready static assets in `dist/`.
- `npm run preview`: Previews the production build locally.
- `npm run lint`: Runs Oxlint for ultra-fast code quality checks.
- `npm run generate:placeholders`: Re-generates demo placeholder SVG assets in `public/`.

---

## 3. Project Architecture

```text
tara-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions Pages deployment
├── public/
│   ├── favicon.svg                 # Site favicon
│   ├── assets/
│   │   ├── images/
│   │   │   ├── profile/            # Portrait / candidate photos
│   │   │   └── shared/             # Shared graphics (OG social preview)
│   │   └── fonts/                  # Locally hosted fonts (if needed)
│   └── projects/                   # Project assets grouped by slug
│       ├── brand-positioning-strategy/
│       ├── integrated-marketing-campaign/
│       └── product-launch-go-to-market/
├── src/
│   ├── components/
│   │   ├── layout/                 # Container, Navigation, Footer
│   │   ├── ui/                     # Button, SectionHeading
│   │   ├── home/                   # Hero, SelectedWork, ProjectPreview, Capabilities, Contact
│   │   ├── case-study/             # CaseStudyHeader, CaseStudySections, ProjectNavigation
│   │   └── shared/                 # ResponsiveImage, Lightbox
│   ├── data/
│   │   ├── site.ts                 # Central profile, bio, links, and capability config
│   │   ├── projects.ts             # Homepage project preview metadata list
│   │   └── case-studies/           # Detailed case studies indexed by project slug
│   │       ├── brand-positioning-strategy.ts
│   │       ├── integrated-marketing-campaign.ts
│   │       ├── product-launch-go-to-market.ts
│   │       └── index.ts
│   ├── hooks/
│   │   └── useHashRouter.ts        # Hash-based client router
│   ├── pages/
│   │   ├── HomePage.tsx            # Main landing page
│   │   ├── AboutPage.tsx           # Dedicated biography and background page
│   │   └── CaseStudyPage.tsx       # Reusable case study template page
│   ├── styles/
│   │   └── global.css              # Typography scale, palette, resets, CSS variables
│   ├── types/
│   │   ├── site.ts                 # Site & navigation TypeScript interfaces
│   │   ├── project.ts              # Project preview metadata types
│   │   └── case-study.ts           # Case study and section component schemas
│   ├── utils/
│   │   └── assets.ts               # Base-path aware asset path resolvers
│   ├── App.tsx                     # Top-level shell and dynamic page title handler
│   └── main.tsx                    # React DOM entry point
├── index.html                      # Root HTML with SEO and Google Fonts
├── vite.config.ts                  # Vite config with repository base path
├── tsconfig.json                   # TypeScript configuration
└── package.json                    # Project dependencies and scripts
```

---

## 4. Customizing Content & Profile

All personal information, copy, and contact links are separated from UI code and located in `src/data/site.ts`.

### Updating Candidate Profile

Open `src/data/site.ts` and edit:

```typescript
export const siteConfig: SiteConfig = {
  candidateName: 'Your Name',
  professionalTitle: 'Brand Manager',
  heroHeadline: 'Your personal headline.',
  heroSubheadline: 'Your supporting positioning statement.',
  heroIntroduction: 'Brief summary of your professional background.',
  shortBio: 'Detailed bio for homepage and about previews.',
  email: 'your.email@example.com',
  linkedInUrl: 'https://linkedin.com/in/yourprofile',
  
  // Résumé: place your PDF in public/assets/resume.pdf and set available: true
  resumePath: 'assets/resume.pdf',
  resumeAvailable: true,

  capabilities: [
    'Brand Strategy',
    'Brand Positioning',
    'Consumer Insights',
    'Campaign Planning',
    'Creative Direction',
    'Go-to-Market Strategy',
  ],

  // Set your GitHub repository name (used for GitHub Pages base path)
  repositoryName: 'portfolio',
};
```

---

## 5. Adding a New Case Study

Adding a new project does **not** require editing any layout or component code. Follow these 4 steps:

### Step 1: Create the Project Asset Folder
Place your project visuals in `public/projects/<project-slug>/`:
```text
public/projects/my-new-brand/
  ├── cover.webp          # 16:10 or 3:4 thumbnail for homepage preview
  ├── hero.webp           # Wide landscape hero image
  ├── visual-01.webp      # Supporting campaign / packaging / mockup visual
  └── visual-02.webp
```

### Step 2: Add Case Study Data File
Create `src/data/case-studies/my-new-brand.ts`:
```typescript
import type { CaseStudy } from '../../types/case-study';

export const myNewBrand: CaseStudy = {
  slug: 'my-new-brand',
  title: 'Luxury Fragrance Brand Identity',
  brand: 'Maison Parfums',
  year: '2024',
  industry: 'Luxury & Beauty',
  category: 'Brand Strategy',
  role: 'Lead Brand Manager',
  duration: '6 months',
  collaborators: 'Pentagram (Design Agency)',
  heroImage: {
    src: 'projects/my-new-brand/hero.webp',
    alt: 'Maison Parfums Campaign Visual',
  },
  overview: 'Complete brand repositioning and product line launch...',
  challenge: 'Entering a crowded market with distinct luxury codes...',
  objectives: [
    'Establish emotional connection with Gen-Z luxury buyers',
    'Design sustainable packaging system',
  ],
  responsibilities: [
    'Brand positioning & consumer testing',
    'Creative direction & agency management',
  ],
  sections: [
    {
      type: 'text',
      heading: 'The Strategic Insight',
      body: 'Consumers sought ungendered olfactive experiences...',
    },
    {
      type: 'full-width-image',
      image: {
        src: 'projects/my-new-brand/visual-01.webp',
        alt: 'Packaging detail',
        caption: 'Primary packaging with embossed tactile finishes',
      },
    },
    {
      type: 'two-column-images',
      images: [
        {
          src: 'projects/my-new-brand/campaign-a.webp',
          alt: 'Digital campaign look A',
          caption: 'Digital campaign look A',
        },
        {
          src: 'projects/my-new-brand/campaign-b.webp',
          alt: 'Digital campaign look B',
          caption: 'Digital campaign look B',
        },
      ],
    },
    {
      type: 'statistics',
      heading: 'Campaign Outcomes',
      stats: [
        { label: 'Retail Sell-Through', value: '+142%', description: 'Exceeded target by 42%' },
        { label: 'Social Engagement', value: '4.8M', description: 'Organic impressions' },
        { label: 'Press Coverage', value: '35+', description: 'Tier-1 editorial placements' },
      ],
    },
    {
      type: 'deliverables',
      heading: 'Deliverables',
      items: [
        'Brand Identity Guidelines',
        'Global Campaign Assets',
        'Retail Merchandising Guide',
      ],
    },
  ],
};
```

### Step 3: Register in Case Studies Index
Open `src/data/case-studies/index.ts`:
```typescript
import { myNewBrand } from './my-new-brand';

export const caseStudies: Record<string, CaseStudy> = {
  // ... existing case studies
  'my-new-brand': myNewBrand,
};
```

### Step 4: Add to Homepage Projects List
Open `src/data/projects.ts` and add to the `projects` array:
```typescript
{
  slug: 'my-new-brand',
  title: 'Luxury Fragrance Brand Identity',
  brand: 'Maison Parfums',
  year: '2024',
  industry: 'Luxury & Beauty',
  category: 'Brand Strategy',
  summary: 'Complete brand repositioning and product line launch in luxury retail.',
  coverImage: 'projects/my-new-brand/cover.webp',
  coverImageAlt: 'Maison Parfums cover mockup',
  coverAspectRatio: 'landscape', // or 'portrait'
  role: 'Lead Brand Manager',
  featured: true,
  order: 1, // Order on the homepage
}
```

The new project will automatically appear on the homepage, have its own dedicated case-study page at `#/projects/my-new-brand`, and link into the previous/next project navigation!

---

## 6. High-Resolution Image Management

Brand portfolios feature photography, packaging mockups, campaign visuals, and identity systems.

### Recommended Dimensions & Formats

| Asset Type | Recommended Format | Recommended Dimensions | Max File Size |
|---|---|---|---|
| **Project Cover** | WebP / JPEG | 1600 × 1000 (16:10) | ~250 KB |
| **Portrait Cover** | WebP / JPEG | 1200 × 1600 (3:4) | ~250 KB |
| **Hero Visual** | WebP / JPEG | 1920 × 1080 (16:9) | ~400 KB |
| **Gallery Asset** | WebP / JPEG | 1200 × 1200 (Square) | ~200 KB |
| **Vectors / Logos** | SVG | Scalable | ~10 KB |

### Optimization Tips
1. Use [Squoosh.app](https://squoosh.app) or [TinyPNG](https://tinypng.com) before committing imagery.
2. Store your high-resolution original RAW / PSD / AI master files in cloud archive (Drive, Dropbox, Figma), and only commit optimized WebP/JPEG files to the Git repository.
3. Keep the total repository size under 500 MB for fast GitHub Actions deployment.

---

## 7. Deploying to GitHub Pages

The repository is configured to deploy automatically through `.github/workflows/deploy.yml`. Each push to `main` builds the site and publishes the `dist/` output to GitHub Pages. You can also start a deployment from the repository's **Actions** tab with **Run workflow**.

### Step 1: Set the Base Path
The Vite base path is already set for this repository. If the repository is renamed, update `REPO_NAME` in `vite.config.ts` and `repositoryName` in `src/data/site.ts` to match:
```typescript
const REPO_NAME = 'portfolio'; // e.g., 'tara-portfolio' or '' if using username.github.io
```
*(If your site is hosted at `https://yourusername.github.io/`, set `REPO_NAME = ''`)*.

Also update `repositoryName` in `src/data/site.ts`.

### Step 2: Push to GitHub
```bash
git remote add origin https://github.com/akshitabijalwan/portfolio.git
git push -u origin main
```

The Pages workflow uses GitHub's Pages artifact deployment actions and requests the minimum required `pages: write` and `id-token: write` permissions. Once GitHub Pages is enabled for the repository, the deployed site will be available at `https://akshitabijalwan.github.io/portfolio/`.

---

## 8. Pre-Launch Content Checklist

Before sending your portfolio to founders or hiring managers, ensure you replace all demonstration placeholders:

- [ ] `src/data/site.ts`: Full name (`candidateName`)
- [ ] `src/data/site.ts`: Real contact email (`email`)
- [ ] `src/data/site.ts`: Actual LinkedIn URL (`linkedInUrl`)
- [ ] `src/data/site.ts`: Verified capabilities list (`capabilities`)
- [ ] `src/data/site.ts`: Profile portrait image (if desired)
- [ ] `public/assets/resume.pdf`: Upload actual résumé and set `resumeAvailable: true`
- [ ] `index.html`: Update `<title>` and `<meta name="description">`
- [ ] `src/data/projects.ts`: Replace demo projects with real case study previews
- [ ] `src/data/case-studies/`: Replace demo case study texts and sample metrics with authentic deliverables

---

## 9. Troubleshooting

### 404 Error on Refresh
This site uses **hash-based routing** (`#/`, `#/about`, `#/projects/:slug`). This ensures that refreshing any sub-page or sharing direct links works seamlessly on GitHub Pages without requiring server-side fallback rules or redirect hacks.

### Assets / Images Not Loading on GitHub Pages
Check `vite.config.ts`. Ensure `REPO_NAME` matches your exact GitHub repository name (case-sensitive). If your repository is named `brand-portfolio`, the URL must resolve to `/brand-portfolio/`.

### Testing Production Build Locally
To test how the build behaves before pushing:
```bash
npm run build
npm run preview
```
