import type { CaseStudy } from '../../types/case-study';

export const synxStoreDetails: CaseStudy = {
  slug: 'synx-store-details',
  title: 'Built to Work. Priced to Trust.',
  brand: 'Synx Store',
  year: '',
  industry: 'Garden E-commerce',
  category: 'Brand Identity & Social Media Strategy',
  role: 'Brand Design · E-commerce · Social Strategy',
  overview:
    'A practical, nature-led identity and e-commerce system for a modern garden-tool brand. The work brought positioning, visual identity, Amazon storefront design, and social communication together around quality, reliability, and simplicity.',
  challenge:
    'Synx Store needed to balance reliable function with an approachable online experience and fair pricing. The identity had to feel credible across product discovery, e-commerce, and everyday social content.',
  sections: [
    {
      type: 'pull-quote',
      quote:
        'We’re building a garden tool brand that reflects what people actually care about: tools that work well, last long, and don’t cost more than they should.',
      attribution: 'Synx Store — Brand Positioning',
    },
    {
      type: 'statistics',
      heading: 'Three principles for the brand',
      stats: [
        { label: 'Quality', value: '01', description: 'Durable materials and ergonomic utility.' },
        { label: 'Reliability', value: '02', description: 'Tools made for effort and seasonal wear.' },
        { label: 'Simplicity', value: '03', description: 'Clear product communication and fair pricing.' },
      ],
    },
    {
      type: 'text-with-image',
      heading: 'A visual system rooted in the garden',
      body:
        'The visual identity balances industrial strength with organic warmth. The logo pairs a functional wheelbarrow mark with a bold geometric wordmark, while a leaf-seedling submark supports compact digital and packaging applications. Forest green anchors a palette of moss, avocado, warm beige, and earthy rust.',
      image: {
        src: 'projects/synx-store/brand-guidelines.png',
        alt: 'Synx Store brand guidelines showing logo variations, color palette, typography, and positioning',
      },
      imagePosition: 'right',
    },
    {
      type: 'text',
      heading: 'A consistent voice across social and commerce',
      body:
        'The communication system is helpful, down-to-earth, trustworthy, and modern without losing its connection to gardening. Social content balances product features with practical tips, how-tos, customer stories, and behind-the-scenes moments. Photography uses natural light and real garden settings to keep the products grounded and credible.',
    },
    {
      type: 'full-width-image',
      heading: 'Social media guidelines',
      image: {
        src: 'projects/synx-store/social-media-guidelines.png',
        alt: 'Synx Store social media guidelines with post examples, visual direction, content pillars, and publishing guidance',
      },
    },
    {
      type: 'deliverables',
      heading: 'What the system includes',
      items: [
        'Brand positioning, identity, logo suite, and visual guidelines',
        'Amazon storefront and product communication',
        'Social media direction, content architecture, and publishing cadence',
        'Photography direction and tone-of-voice principles',
      ],
      layout: 'three-up',
    },
  ],
};
