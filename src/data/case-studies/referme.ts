import type { CaseStudy } from '../../types/case-study';

export const referMe: CaseStudy = {
  slug: 'referme',
  title: 'A Network That Turns Connections into Opportunity',
  brand: 'ReferMe',
  year: '',
  industry: 'Professional Networking',
  category: 'Brand Identity & Campaign',
  role: 'Brand Strategy · Identity · Campaign Design',
  overview:
    'ReferMe reframes word of mouth as a modern professional network where people can make referrals, grow their reach, and be rewarded for the connections they make. The identity and campaign make that benefit immediate for entrepreneurs, small business owners, freelancers, and influencers.',
  challenge:
    'A new referral network needed to make its value easy to understand and give people a clear reason to trust and try it. The connecting idea had to stay recognizable across campaign, web, social, app, and partner touchpoints.',
  sections: [
    {
      type: 'pull-quote',
      quote: 'It pays to be connected.',
      attribution: 'ReferMe brand promise',
    },
    {
      type: 'text',
      heading: 'One idea, carried through every touchpoint',
      body:
        'The positioning links a person’s network to their potential. Short campaign lines such as “Connections that add up” and “Word of mouth reinvented” make the benefit easy to remember, while a bold connecting thread gives the strategy a visual form that can travel across media.',
    },
    {
      type: 'image-gallery',
      layout: 'editorial-rail',
      heading: 'Campaign in the world',
      aspectRatio: 'auto',
      images: [
        {
          src: 'projects/referme/outdoor-campaign.jpg',
          alt: 'ReferMe outdoor campaign with its connecting-thread graphic and networking message',
        },
        {
          src: 'projects/referme/billboard-campaign.jpg',
          alt: 'ReferMe multi-panel billboard campaign with referral and earning messages',
        },
        {
          src: 'projects/referme/outdoor-identity.jpg',
          alt: 'ReferMe identity and campaign copy on a large outdoor billboard',
        },
      ],
    },
    {
      type: 'image-gallery',
      layout: 'editorial-rail',
      heading: 'Digital and partner applications',
      aspectRatio: 'auto',
      images: [
        {
          src: 'projects/referme/website.jpg',
          alt: 'ReferMe website concept introducing the network and inviting people to join',
        },
        {
          src: 'projects/referme/social-media.jpg',
          alt: 'ReferMe social profile and campaign posts shown across mobile screens',
        },
        {
          src: 'projects/referme/partner-campaign.jpg',
          alt: 'ReferMe partner campaign application for the referral network',
        },
        {
          src: 'projects/referme/app-brand-story.jpg',
          alt: 'ReferMe app screens and brand story demonstrating how the network connects people',
        },
        {
          src: 'projects/referme/brand-applications.jpg',
          alt: 'ReferMe logo and campaign phrases shown across brand applications',
        },
        {
          src: 'projects/referme/expanded-palette.jpg',
          alt: 'ReferMe expanded color palette for web and app design',
        },
      ],
    },
    {
      type: 'deliverables',
      heading: 'What the system includes',
      items: [
        'Brand positioning and core messaging',
        'Visual identity and connecting-thread graphic device',
        'Campaign headline system and outdoor concepts',
        'Website, social, app, and partner applications',
      ],
      layout: 'three-up',
    },
  ],
};
