import type { CaseStudy } from '../../types/case-study';

/**
 * [DEMO] This is a demonstration case study with placeholder content.
 * Replace all content with the candidate's actual project details.
 */
export const integratedMarketingCampaign: CaseStudy = {
  slug: 'integrated-marketing-campaign',
  title: 'Integrated Marketing Campaign',
  brand: 'Sample Brand Beta',
  year: '2023',
  industry: 'Technology',
  category: 'Campaign Planning',
  role: 'Brand Manager',
  responsibilities: [
    'Campaign strategy development',
    'Creative brief creation',
    'Agency coordination',
    'Channel planning and media mix',
    'Campaign performance tracking',
  ],
  duration: '6 months',
  heroImage: {
    src: 'projects/integrated-marketing-campaign/hero.svg',
    alt: 'Placeholder: Integrated marketing campaign hero image',
  },
  overview:
    'This project involved planning and executing an integrated marketing campaign across digital, social, and traditional channels to support a major product launch. The campaign aimed to build brand awareness, generate consideration, and drive customer acquisition.',
  challenge:
    'The product was entering a competitive market segment with established players. The campaign needed to break through the noise and establish the brand\'s credibility with a new audience while maintaining consistency across multiple channels and touchpoints.',
  objectives: [
    'Develop a compelling campaign concept and creative platform',
    'Plan an integrated channel strategy across digital, social, and traditional media',
    'Coordinate with creative and media agencies',
    'Launch the campaign across all channels with consistent messaging',
    'Track and optimise campaign performance against defined KPIs',
  ],
  sections: [
    {
      type: 'text',
      heading: 'Campaign Strategy',
      body: 'The campaign strategy was built around a central creative idea that could flex across channels while maintaining a consistent brand message. The approach balanced broad-reach awareness tactics with targeted performance channels.',
    },
    {
      type: 'full-width-image',
      image: {
        src: 'projects/integrated-marketing-campaign/campaign-01.svg',
        alt: 'Placeholder: Campaign creative concept',
        caption: '[Placeholder] Campaign creative concept',
      },
    },
    {
      type: 'text',
      heading: 'Creative Execution',
      body: 'The creative execution spanned hero film content, social media assets, digital display advertising, out-of-home placements, and event activations. Each element was designed to work independently while contributing to a cohesive campaign narrative.',
    },
    {
      type: 'image-gallery',
      heading: 'Campaign Assets',
      images: [
        {
          src: 'projects/integrated-marketing-campaign/campaign-02.svg',
          alt: 'Placeholder: Social media campaign asset',
          caption: '[Placeholder] Social media asset',
        },
        {
          src: 'projects/integrated-marketing-campaign/campaign-03.svg',
          alt: 'Placeholder: Digital display advertising',
          caption: '[Placeholder] Digital display ad',
        },
        {
          src: 'projects/integrated-marketing-campaign/campaign-04.svg',
          alt: 'Placeholder: Out-of-home advertising',
          caption: '[Placeholder] OOH placement',
        },
      ],
    },
    {
      type: 'timeline',
      heading: 'Campaign Phases',
      entries: [
        { phase: 'Planning & Strategy', description: 'Market research, audience definition, campaign strategy, creative brief' },
        { phase: 'Creative Development', description: 'Concept development, asset production, agency coordination' },
        { phase: 'Launch', description: 'Phased channel activation, media buying, influencer partnerships' },
        { phase: 'Optimisation', description: 'Performance monitoring, creative rotation, channel optimisation' },
      ],
    },
    {
      type: 'deliverables',
      heading: 'Key Deliverables',
      items: [
        'Campaign strategy document',
        'Creative brief',
        'Media plan',
        'Hero video content',
        'Social media content suite',
        'Digital display assets',
        'Performance dashboard',
      ],
    },
  ],
};
