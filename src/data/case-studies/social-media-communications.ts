import type { CaseStudy } from '../../types/case-study';

export const socialMediaCommunications: CaseStudy = {
  slug: 'social-media-communications',
  title: 'Intent to Impact: Multi-Brand Social Strategy',
  brand: 'Multi-brand social media',
  year: '',
  industry: 'Lifestyle, Baby Care, Technology & Retail',
  category: 'Brand-specific Social Media Communication & Visualization',
  role: 'Social Media, Content & Visual Design',
  heroImage: {
    src: 'projects/social-media-communications/cover.svg?v=2',
    alt: 'Editorial strategy graphic showing six steps from business goal to measurement across five social streams',
  },
  overview: '',
  sections: [
    {
      type: 'strategy-framework',
      heading: 'How I think through social strategy',
      overview:
        'I start with the business outcome and work outward: understand the audience, define the content mix, then shape each brand’s visual and verbal expression. I measure against the original objective and use what I learn to decide what to test next. Below, I show this six-step process and how it took a different form for each brand.',
      intro:
        'The objective comes first. Research reveals what the audience trusts, the content mix gives that insight a rhythm, and creative choices carry the strategy into each post. The last step closes the loop: measure against the original goal, then decide what to improve next.',
      steps: [
        {
          title: 'Start with the business goal',
          summary: 'The objective sets the content mix, format, and tone. Each brand began from a different business need.',
          brandNotes: [
            { brand: 'Mother Sparsh', tone: 'mother', body: 'An established, loyal customer base made retention the priority: keep parents engaged and encourage repeat purchase.' },
            { brand: 'Malini', tone: 'malini', body: 'A handloom and handicraft category was new to its audience, so the first task was to build awareness.' },
            { brand: 'Zooby', tone: 'zooby', body: 'The work needed to meet strict brand and demographic guidelines, making consistency and compliance central.' },
          ],
        },
        {
          title: 'Research the audience and category',
          summary: 'I look at category conventions, market expectations, and the signals that earn trust in each audience.',
          brandNotes: [
            { brand: 'Mother Sparsh', tone: 'mother', body: 'In Indian baby care, peer experience is persuasive. Real-user-style content can feel more trustworthy than polished production.' },
            { brand: 'Malini', tone: 'malini', body: 'Italian fashion audiences respond to editorial aesthetics and heritage storytelling, shaping a more considered visual direction.' },
            { brand: 'Zooby', tone: 'zooby', body: 'Dutch parents expect clean, functional, predictable design, informing a structured and easy-to-scan approach.' },
          ],
        },
        {
          title: 'Define the content mix from the goal',
          summary: 'The strategy determines which stories recur and what the audience needs to understand first.',
          brandNotes: [
            { brand: 'Mother Sparsh', tone: 'mother', body: 'Usage tips, care routines, and customer stories support repeat engagement and help parents get more from the range.' },
            { brand: 'Malini', tone: 'malini', body: 'Awareness content explains what handloom is, who makes it, and why the craft matters.' },
            { brand: 'Zooby', tone: 'zooby', body: 'A repeatable content system keeps every post within the brand standards.' },
          ],
        },
        {
          title: 'Translate strategy into visual language',
          summary: 'The visual system should make the strategy felt immediately, before a viewer reads every word.',
          brandNotes: [
            { brand: 'Mother Sparsh', tone: 'mother', body: 'Handheld framing and natural light give product stories an accessible, credible UGC character.' },
            { brand: 'Malini', tone: 'malini', body: 'Soft light, textured close-ups, and muted earthy tones present the craft as premium and story-led.' },
            { brand: 'Zooby', tone: 'zooby', body: 'A fixed palette, typography, and grid, paired with generous white space, keep the feed consistent.' },
          ],
        },
        {
          title: 'Shape the messaging',
          summary: 'Each message should answer the audience’s need in that brand’s own voice.',
          brandNotes: [
            { brand: 'Mother Sparsh', tone: 'mother', body: 'Start with a parent’s problem, then position the product as a helpful answer.' },
            { brand: 'Malini', tone: 'malini', body: 'Connect the craft to the product so the awareness story stays clear and memorable.' },
            { brand: 'Zooby', tone: 'zooby', body: 'Keep copy short, factual, and benefit-led; avoid exaggerated claims.' },
          ],
        },
        {
          title: 'Measure the outcome and choose what is next',
          summary: 'Measurement should reflect the business goal, so each brand has one result to track, such as engagement, saves, or repeat-purchase mentions.',
          callout: 'I close with a test or change for the next round. That turns a set of posts into a learning loop, rather than treating each post as a one-off.',
        },
      ],
    },
    {
      type: 'image-gallery',
      layout: 'social-carousel',
      aspectRatio: 'portrait',
      heading: '01 · Mother Sparsh | Trust, care & product education',
      images: [
        {
          src: 'projects/social-media-communications/mother-sparsh/01-profile.jpeg',
          alt: 'Mother Sparsh Instagram profile presenting its baby-care products and brand promise',
        },
        {
          src: 'projects/social-media-communications/mother-sparsh/02-feed-overview.jpeg',
          alt: 'Mother Sparsh Instagram feed mixing baby moments, product stories, and parent content',
        },
        {
          src: 'projects/social-media-communications/mother-sparsh/03-feed-details.jpeg',
          alt: 'Mother Sparsh feed examples with product education, expert content, and baby-care moments',
        },
      ],
    },
    {
      type: 'image-gallery',
      layout: 'social-carousel',
      aspectRatio: 'portrait',
      heading: '02 · Malini | Craft, material & modern styling',
      images: [
        {
          src: 'projects/social-media-communications/malini/01-profile.jpeg',
          alt: 'Malini Instagram profile introducing its ethical clothing and design story',
        },
        {
          src: 'projects/social-media-communications/malini/02-feed-overview.jpeg',
          alt: 'Malini Instagram feed featuring clothing, textiles, people, and making process',
        },
        {
          src: 'projects/social-media-communications/malini/03-feed-details.jpeg',
          alt: 'Malini Instagram grid with garment, craft, material, and lifestyle posts',
        },
      ],
    },
    {
      type: 'image-gallery',
      layout: 'social-carousel',
      aspectRatio: 'portrait',
      heading: '03 · Zooby | Little comforts, clearly shown',
      images: [
        {
          src: 'projects/social-media-communications/zooby/01-profile.jpeg',
          alt: 'Zooby Instagram profile for baby and children’s goods',
        },
        {
          src: 'projects/social-media-communications/zooby/02-feed-overview.jpeg',
          alt: 'Zooby feed using pastel graphics, children’s products, and lifestyle photography',
        },
        {
          src: 'projects/social-media-communications/zooby/03-feed-details.jpeg',
          alt: 'Zooby social feed showing pillow products, sleep tips, reviews, and children',
        },
      ],
    },
    {
      type: 'image-gallery',
      layout: 'social-carousel',
      aspectRatio: 'square',
      groupHeading: 'Product Visual Design: Tech & Jewelry series',
      heading: '04 · Tech | Offers & campaign energy',
      headingLevel: 3,
      images: [
        {
          src: 'projects/social-media-communications/topi-ai/02-pricing.png',
          alt: 'TOPI.AI post comparing Basic and Pro plans with feature lists and prices',
          caption: 'Plan comparison uses a clear visual hierarchy to make the offer easier to scan.',
        },
        {
          src: 'projects/social-media-communications/topi-ai/03-review.png',
          alt: 'TOPI.AI customer review graphic with testimonial and five-star rating',
          caption: 'A testimonial layout brings customer feedback into the visual system.',
        },
        {
          src: 'projects/social-media-communications/topi-ai/04-did-you-know.png',
          alt: 'TOPI.AI Did You Know post about website loading expectations',
          caption: 'A quick fact becomes a high-contrast educational post.',
        },
        {
          src: 'projects/social-media-communications/topi-ai/05-offer.png',
          alt: 'TOPI.AI promotional offer presented as a glowing message in an envelope',
          caption: 'A product offer is turned into a distinct campaign moment.',
        },
        {
          src: 'projects/social-media-communications/topi-ai/01-prize-pool.png',
          alt: 'TOPI.AI graphic promoting a trading competition and $18,000 prize pool',
          caption: 'A bold prize-pool graphic puts the campaign incentive first.',
        },
      ],
    },
    {
      type: 'image-gallery',
      layout: 'social-carousel',
      aspectRatio: 'square',
      heading: '05 · Jewelry: detail, occasion & discovery',
      headingLevel: 3,
      images: [
        {
          src: 'projects/social-media-communications/jewelry/01-coastal-charm.png',
          alt: 'Gold-plated necklace with a blue gemstone and coastal-inspired copy',
          caption: 'A product post gives one piece a clear seasonal mood and point of view.',
        },
        {
          src: 'projects/social-media-communications/jewelry/02-summer-chic.png',
          alt: 'Model wearing a statement earring with summer styling copy',
          caption: 'On-person styling helps show scale and how the piece wears.',
        },
        {
          src: 'projects/social-media-communications/jewelry/03-bold-gold.png',
          alt: 'Close-up of a gold chain bracelet with inset product detail',
          caption: 'Macro detail brings the finish and bold chain form forward.',
        },
        {
          src: 'projects/social-media-communications/jewelry/04-hoops.png',
          alt: 'Sculptural gold hoop earrings presented on a printed editorial background',
          caption: 'An editorial post turns a press mention into a product story.',
        },
        {
          src: 'projects/social-media-communications/jewelry/05-shopping-discovery.png',
          alt: 'Shopping discovery graphic asking what the viewer is looking for',
          caption: 'A simple shopping prompt invites browsing and discovery.',
        },
        {
          src: 'projects/social-media-communications/jewelry/06-styling-guide.png',
          alt: 'Layered gold rings and bracelets shown in a jewelry styling composition',
          caption: 'A final styling composition shows how pieces can work together.',
        },
      ],
    },
  ],
};
