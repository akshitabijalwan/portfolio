import type { CaseStudy } from '../../types/case-study';

export const synxStore: CaseStudy = {
  slug: 'synx-store',
  title: 'Brand Identity & Social Media Strategy',
  brand: 'Synx Store',
  year: '2024',
  industry: 'Home & Garden / E-Commerce',
  category: 'Brand Strategy & Identity',
  role: 'Brand Manager',
  responsibilities: [
    'Brand positioning & core narrative formulation',
    'Visual identity system & logo lockups definition',
    'Comprehensive brand guidelines development',
    'Social media strategy & content bucket architecture',
    'Photography direction & creative guidelines',
    'Tone of voice & copywriting standards',
  ],
  duration: '3 months',
  collaborators: 'Creative Design & Social Marketing Team',
  heroImage: {
    src: 'projects/synx-store/hero.svg',
    alt: 'Synx Store Brand Identity & Strategy Banner',
  },
  overview:
    'Synx Store is a modern garden tool brand built on the conviction that high-calibre tools should not be hard to find or overpriced. This project established the brand\'s complete foundation from the ground up: defining its positioning ("Built to work. Priced to trust."), crafting a robust visual identity system, establishing photography guidelines, and developing a structured social media strategy designed to cultivate an engaged, loyal community of everyday gardeners.',
  challenge:
    'The lawn and garden tool market is dominated by legacy hardware conglomerates competing on volume and low-cost manufacturing, alongside overpriced niche lifestyle brands that prioritize aesthetics over longevity. Synx Store needed an identity that broke through this dichotomy: conveying industrial reliability and durability without feeling cold, while remaining approachable, warm, and honestly priced for modern digital-native consumers.',
  objectives: [
    'Define an authentic brand positioning that bridges practical utility with modern aesthetic sensibility',
    'Establish a cohesive visual identity system featuring logo marks, color palette, and dual typography',
    'Formulate actionable brand voice standards that foster trust and peer-to-peer connection',
    'Structure a sustainable social media content engine across feed posts and daily stories',
    'Deliver comprehensive guidelines documentation to align design, marketing, and agency partners',
  ],
  sections: [
    {
      type: 'pull-quote',
      quote:
        '“We\'re building a garden tool brand that reflects what people actually care about: tools that work well, last long, and don\'t cost more than they should.”',
      attribution: 'Synx Store — Brand Positioning Statement',
    },
    {
      type: 'text',
      heading: 'The Brand Positioning: Built to Work. Priced to Trust.',
      body:
        'Gardening is not just about maintenance—it is about care, intention, and doing things right. We positioned Synx Store around three core pillars: Quality, Reliability, and Simplicity. By delivering direct-to-consumer through an online-first model, the brand eliminates traditional middleman retail markups while investing directly in durable materials and ergonomic design.',
    },
    {
      type: 'text-with-image',
      heading: 'Visual Identity System',
      body:
        'The visual system balances industrial strength with organic warmth. The primary logo pairs a functional wheelbarrow brandmark filled with essential tools (rake and broom) with a bold geometric logotype. The submark introduces a stylized leaf seedling for compact digital touchpoints and packaging stamps. The color palette draws from nature with Forest Green (#28361B) as the grounding base, supported by Moss Green (#4D602B), Avocado Green (#B1BF5D), warm Beige (#FDFBE1), and earthy Rust Brown (#BD6D29).',
      image: {
        src: 'projects/synx-store/brand-guidelines.png',
        alt: 'Synx Store Brand Guidelines Board showing logo lockups, color palette, and typography',
        caption: 'Synx Store Brand Guidelines — Primary logo, logotype, brandmark, submark, and color hierarchy',
      },
      imagePosition: 'right',
    },
    {
      type: 'statistics',
      heading: 'Core Brand Pillars',
      stats: [
        {
          label: 'Quality',
          value: '01',
          description: 'Industrial durability, honest materials, and ergonomic utility in every tool.',
        },
        {
          label: 'Reliability',
          value: '02',
          description: 'Tools designed to keep up with intense effort and seasonal wear.',
        },
        {
          label: 'Simplicity',
          value: '03',
          description: 'Direct-to-consumer clarity with fair pricing and no marketing fluff.',
        },
      ],
    },
    {
      type: 'text',
      heading: 'Tone of Voice & Verbal Identity',
      body:
        'To establish credibility and avoid generic corporate garden speak, four verbal principles guide all brand communication:\n\n1. Helpful, Not Pushy: Sharing practical horticultural knowledge and gardening insights rather than aggressive sales pitches.\n2. Down-to-Earth: Speaking simply and clearly, like a knowledgeable friend who knows their equipment.\n3. Consistent & Trustworthy: What we say mirrors what our products deliver—straightforward utility and dependability.\n4. Modern but Grounded: Clean aesthetics paired with authentic, unpretentious dialogue.',
    },
    {
      type: 'text-with-image',
      heading: 'Social Media Strategy & Photography Guidelines',
      body:
        'The social media strategy is built around educating, inspiring, and connecting gardeners. Photography direction emphasizes candid authenticity: tools shown in hands and rich garden soil with natural daylight, warm undertones, and soft shadows—strictly avoiding sterile studio setups or misty artificial filters. Content is structured across six strategic buckets: Product Features, Gardening Tips, Practical How-Tos, Real Customer Stories, Behind-the-Scenes Production, and Offers & Announcements.',
      image: {
        src: 'projects/synx-store/social-media-guidelines.png',
        alt: 'Synx Store Social Media Guidelines Board showing story highlights, content buckets, and photography style',
        caption: 'Social Media Guidelines — Instagram story highlights, content buckets, cadence, and photography principles',
      },
      imagePosition: 'left',
    },
    {
      type: 'timeline',
      heading: 'Content Engine & Publishing Cadence',
      entries: [
        {
          phase: '3 Feed Posts / Week',
          description:
            'Deep-dive carousel tips, customer soil stories, detailed tool breakdowns, and video how-tos designed for saveability and high engagement.',
        },
        {
          phase: '2–3 Daily Stories',
          description:
            'Real-time garden checks, quick Q&As, community polls, behind-the-scenes packing, and UGC reposts keeping the brand top-of-mind.',
        },
        {
          phase: 'Targeted Hashtag Clusters',
          description:
            'Carefully curated 8–10 topical hashtags prioritizing discoverability without spamming, optimized for gardening niche reach.',
        },
        {
          phase: 'Story Highlight Architecture',
          description:
            'Persistent highlight categories: Tools, Reviews, Announcements, Planting Tips, and New Releases for frictionless onboarding.',
        },
      ],
    },
    {
      type: 'deliverables',
      heading: 'Key Project Deliverables',
      items: [
        'Complete Brand Guidelines Document (Logo, Color, Typography, Application)',
        'Primary, Secondary, and Submark Vector Asset Suite',
        'Dual Typography Hierarchy System (Montserrat & Lora)',
        'Social Media Guidelines & Content Architecture Specification',
        'Custom Instagram Story Highlight Icon Suite (Tools, Reviews, Alerts, Growth, New)',
        'Photography Direction & Lighting Guidelines for E-Commerce & Social',
        'Tone of Voice & Copywriting Playbook',
      ],
    },
  ],
};
