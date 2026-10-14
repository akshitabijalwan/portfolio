import type { CaseStudy } from '../../types/case-study';

/**
 * [DEMO] This is a demonstration case study with placeholder content.
 * Replace all content with the candidate's actual project details.
 */
export const productLaunchGoToMarket: CaseStudy = {
  slug: 'product-launch-go-to-market',
  title: 'Product Launch & Go-to-Market',
  brand: 'Sample Brand Gamma',
  year: '2023',
  industry: 'Lifestyle & Wellness',
  category: 'Go-to-Market Strategy',
  role: 'Brand Manager',
  responsibilities: [
    'Go-to-market strategy development',
    'Consumer research and segmentation',
    'Channel strategy and distribution planning',
    'Launch timeline and milestone management',
    'Post-launch performance analysis',
  ],
  duration: '5 months',
  heroImage: {
    src: 'projects/product-launch-go-to-market/hero.svg',
    alt: 'Placeholder — Product launch project hero image',
  },
  overview:
    'This project involved developing and executing the go-to-market strategy for a new product line in the lifestyle and wellness category. The work spanned consumer research, channel strategy, launch planning, and post-launch performance tracking.',
  challenge:
    'Launching a new product line in an increasingly saturated wellness market required a clear point of differentiation and a precise channel strategy to reach the target consumer effectively.',
  objectives: [
    'Define the target consumer and key purchase drivers',
    'Develop a channel strategy optimised for the product category',
    'Create a phased launch plan with clear milestones',
    'Coordinate cross-functional teams for launch execution',
    'Establish measurement frameworks for post-launch evaluation',
  ],
  sections: [
    {
      type: 'text',
      heading: 'Consumer Research',
      body: 'The project began with qualitative and quantitative consumer research to understand the target audience\'s needs, preferences, and purchase behaviours within the wellness category. These insights shaped both the product positioning and channel strategy.',
    },
    {
      type: 'text-with-image',
      heading: 'Go-to-Market Strategy',
      body: 'The go-to-market strategy was built around a phased approach, beginning with a targeted digital-first launch followed by broader retail distribution. The strategy prioritised channels with high target-audience concentration and strong brand alignment.',
      image: {
        src: 'projects/product-launch-go-to-market/campaign-01.svg',
        alt: 'Placeholder — Go-to-market strategy visual',
        caption: '[Placeholder] Go-to-market strategy overview',
      },
      imagePosition: 'right',
    },
    {
      type: 'full-width-image',
      image: {
        src: 'projects/product-launch-go-to-market/campaign-02.svg',
        alt: 'Placeholder — Product launch visual',
        caption: '[Placeholder] Product launch creative',
      },
    },
    {
      type: 'text',
      heading: 'Launch Execution',
      body: 'The launch was executed across e-commerce, select retail partners, and social media, with coordinated PR and influencer activations. Each channel had specific KPIs and was managed against a detailed launch timeline.',
    },
    {
      type: 'statistics',
      heading: 'Placeholder Results',
      stats: [
        { label: 'Metric A', value: '[TBD]', description: 'Replace with actual result' },
        { label: 'Metric B', value: '[TBD]', description: 'Replace with actual result' },
        { label: 'Metric C', value: '[TBD]', description: 'Replace with actual result' },
      ],
    },
    {
      type: 'deliverables',
      heading: 'Key Deliverables',
      items: [
        'Consumer research report',
        'Go-to-market strategy document',
        'Channel strategy and distribution plan',
        'Launch timeline and milestones',
        'Performance measurement framework',
        'Post-launch analysis report',
      ],
    },
  ],
};
