export type CaseStudySectionType =
  | 'text'
  | 'text-with-image'
  | 'full-width-image'
  | 'two-column-images'
  | 'image-gallery'
  | 'pull-quote'
  | 'statistics'
  | 'timeline'
  | 'deliverables';

export interface CaseStudyTextSection {
  type: 'text';
  heading?: string;
  body: string;
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
  image: CaseStudyImage;
}

export interface CaseStudyTwoColumnImagesSection {
  type: 'two-column-images';
  images: [CaseStudyImage, CaseStudyImage];
}

export interface CaseStudyImageGallerySection {
  type: 'image-gallery';
  heading?: string;
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
  | CaseStudyDeliverablesSection;

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
