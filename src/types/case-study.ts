export type CaseStudySectionType =
  | 'text'
  | 'text-with-image'
  | 'full-width-image'
  | 'two-column-images'
  | 'image-gallery'
  | 'pull-quote'
  | 'statistics'
  | 'timeline'
  | 'deliverables'
  | 'strategy-framework'
  | 'campaign-analysis';

export interface CaseStudyTextSection {
  type: 'text';
  heading?: string;
  body: string;
  layout?: 'callout';
}

export interface CaseStudyTextWithImageSection {
  type: 'text-with-image';
  heading?: string;
  body: string;
  image: CaseStudyImage;
  imagePosition: 'left' | 'right';
}

export interface CaseStudyFullWidthImageSection {
  type: 'full-width-image';
  heading?: string;
  image: CaseStudyImage;
}

export interface CaseStudyTwoColumnImagesSection {
  type: 'two-column-images';
  images: [CaseStudyImage, CaseStudyImage];
}

export interface CaseStudyImageGallerySection {
  type: 'image-gallery';
  groupHeading?: string;
  heading?: string;
  headingLevel?: 2 | 3;
  description?: string;
  layout?: 'editorial-rail' | 'social-carousel';
  compact?: boolean;
  aspectRatio?: 'landscape' | 'portrait' | 'square' | 'auto';
  images: CaseStudyImage[];
}

export interface CaseStudyPullQuoteSection {
  type: 'pull-quote';
  quote: string;
  attribution?: string;
}

export interface CaseStudyStatisticsSection {
  type: 'statistics';
  heading?: string;
  stats: { label: string; value: string; description?: string }[];
}

export interface CaseStudyTimelineSection {
  type: 'timeline';
  heading?: string;
  entries: { phase: string; description: string }[];
}

export interface CaseStudyDeliverablesSection {
  type: 'deliverables';
  heading?: string;
  items: string[];
  layout?: 'three-up';
}

export interface CaseStudyStrategyFrameworkSection {
  type: 'strategy-framework';
  heading: string;
  overview?: string;
  intro: string;
  steps: {
    title: string;
    summary: string;
    brandNotes?: { brand: string; tone: 'mother' | 'malini' | 'zooby'; body: string }[];
    callout?: string;
  }[];
}

export interface CaseStudyCampaignAnalysisSection {
  type: 'campaign-analysis';
  heading: string;
  intro: string;
  rows: {
    ad: string;
    hook: number;
    hold: number;
    clicks: number;
    conversions: number;
    conversionRate: number;
    watchTime: string;
    read: string;
  }[];
  findings: { eyebrow: string; title: string; body: string; metric?: string }[];
  comparison?: {
    label: string;
    title: string;
    plays: string;
    averageWatch: string;
    hook: string;
    hold: string;
    note: string;
  }[];
}

export interface CaseStudyImage {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
  width?: number;
  height?: number;
}

export type CaseStudySection =
  | CaseStudyTextSection
  | CaseStudyTextWithImageSection
  | CaseStudyFullWidthImageSection
  | CaseStudyTwoColumnImagesSection
  | CaseStudyImageGallerySection
  | CaseStudyPullQuoteSection
  | CaseStudyStatisticsSection
  | CaseStudyTimelineSection
  | CaseStudyDeliverablesSection
  | CaseStudyStrategyFrameworkSection
  | CaseStudyCampaignAnalysisSection;

export interface CaseStudy {
  slug: string;
  title: string;
  brand: string;
  year: string;
  industry: string;
  category: string;
  role: string;
  responsibilities?: string[];
  collaborators?: string;
  duration?: string;
  heroImage?: CaseStudyImage;
  overview: string;
  challenge?: string;
  objectives?: string[];
  sections: CaseStudySection[];
}
