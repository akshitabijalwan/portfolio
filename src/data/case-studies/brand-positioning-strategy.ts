import type { CaseStudy } from '../../types/case-study';

/**
 * [DEMO] This is a demonstration case study with placeholder content.
 * Replace all content with the candidate's actual project details.
 */
export const brandPositioningStrategy: CaseStudy = {
  slug: 'brand-positioning-strategy',
  title: 'Brand Positioning & Strategy',
  brand: 'Sample Brand Alpha',
  year: '2024',
  industry: 'Consumer Goods',
  category: 'Brand Strategy',
  role: 'Brand Manager',
  responsibilities: [
    'Brand audit and competitive analysis',
    'Consumer research and insights synthesis',
    'Brand positioning framework development',
    'Stakeholder alignment and presentation',
    'Brand guidelines oversight',
  ],
  duration: '4 months',
  heroImage: {
    src: 'projects/brand-positioning-strategy/hero.svg',
    alt: 'Placeholder: Brand strategy project hero image',
  },
  overview:
    'This project involved repositioning a consumer goods brand to better align with shifting consumer preferences and competitive dynamics. The work encompassed a complete brand audit, consumer research, competitive analysis, and the development of a new brand positioning framework.',
  challenge:
    'The brand faced increasing competitive pressure and a disconnect between its existing positioning and evolving consumer expectations. There was a need to redefine the brand\'s core value proposition while maintaining equity with existing customers.',
  objectives: [
    'Conduct a comprehensive brand and market audit',
    'Identify key consumer segments and their unmet needs',
    'Develop a differentiated brand positioning framework',
    'Align internal stakeholders around the new brand direction',
    'Create guidelines to ensure consistent brand expression',
  ],
  sections: [
    {
      type: 'text',
      heading: 'Research & Insights',
      body: 'The project began with an extensive research phase combining quantitative consumer surveys, qualitative interviews, competitive benchmarking, and cultural trend analysis. These inputs were synthesised into actionable insights that informed the strategic direction.',
    },
    {
      type: 'full-width-image',
      image: {
        src: 'projects/brand-positioning-strategy/campaign-01.svg',
        alt: 'Placeholder: Research and insights visual',
        caption: '[Placeholder] Research and insights documentation',
      },
    },
    {
      type: 'text',
      heading: 'Strategic Approach',
      body: 'Based on the research findings, a new brand positioning was developed around a clear value proposition that differentiated the brand from competitors while resonating with the target audience. The positioning framework included the brand purpose, promise, personality, and proof points.',
    },
    {
      type: 'two-column-images',
      images: [
        {
          src: 'projects/brand-positioning-strategy/campaign-02.svg',
          alt: 'Placeholder: Strategy framework visual',
          caption: '[Placeholder] Positioning framework',
        },
        {
          src: 'projects/brand-positioning-strategy/campaign-03.svg',
          alt: 'Placeholder: Brand architecture visual',
          caption: '[Placeholder] Brand architecture',
        },
      ],
    },
    {
      type: 'text',
      heading: 'Creative Direction',
      body: 'The new positioning was translated into visual and verbal brand guidelines, including tone of voice, visual identity principles, and application examples across key touchpoints.',
    },
    {
      type: 'deliverables',
      heading: 'Key Deliverables',
      items: [
        'Brand audit report',
        'Consumer research synthesis',
        'Competitive landscape analysis',
        'Brand positioning framework',
        'Brand guidelines document',
        'Stakeholder presentation deck',
      ],
    },
    {
      type: 'pull-quote',
      quote: '[Placeholder for a relevant quote, testimonial, or key insight from the project.]',
    },
  ],
};
