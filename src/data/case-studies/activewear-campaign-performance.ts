import type { CaseStudy } from '../../types/case-study';

export const activewearCampaignPerformance: CaseStudy = {
  slug: 'activewear-campaign-performance',
  title: 'Eight Ads, One Performance Picture',
  brand: 'Bamboo Activewear · Campaign Readout',
  year: '',
  industry: 'Activewear / E-commerce',
  category: 'Campaign Performance Analysis',
  role: '',
  heroImage: {
    src: 'projects/activewear-ad-analysis/hero.svg',
    alt: 'A comparison of paid-social attention metrics and campaign conversion results',
  },
  overview:
    'I put eight paid-social ads into the same funnel view: hook rate, hold rate, link clicks, conversions, conversion rate, and average watch time. Then I read those numbers against each ad’s opening, visual, message, and product transition to learn what earned attention, what scaled, and what turned clicks into purchases.',
  challenge:
    'Which ads should inform the next round? There was no single winner: the highest-hold video did not lead purchases, the highest-converting ad did not hold attention as long, and the most scaled ad had a lower conversion rate. Optimizing only for views or clicks could steer the next brief in the wrong direction.',
  objectives: [
    'Compare all eight ads at the same funnel stages, from first-second attention through purchase.',
    'Separate creative that earns attention from creative that creates buying intent and scale.',
    'Connect each result back to its hook, framing, visual format, and message flow.',
    'Convert the findings into specific edits and measurable tests for the next campaign.',
  ],
  sections: [
    {
      type: 'campaign-analysis',
      heading: 'Attention is a signal. Conversion is the outcome.',
      intro:
        'The report shows three different kinds of winner. POD1 had the highest conversion rate (5.11%); #56 V1 led hook and hold (66% and 46.18%); POD4 generated the most link clicks and conversions (6,398 and 209). I compared the creative behind each result, instead of collapsing unlike outcomes into one “best ad” label. The next test should borrow the useful part of each and measure attention beside purchase outcomes.',
      rows: [
        { ad: 'POD1', hook: 0.55, hold: 23.50, clicks: 3933, conversions: 201, conversionRate: 5.11, watchTime: '0:07', read: 'Highest conversion rate' },
        { ad: '#42', hook: 0.48, hold: 20.11, clicks: 3459, conversions: 132, conversionRate: 3.81, watchTime: '0:07', read: 'Clear opinion + solution' },
        { ad: '#56 V1', hook: 0.66, hold: 46.18, clicks: 660, conversions: 26, conversionRate: 3.94, watchTime: '0:19', read: 'Highest hook + hold' },
        { ad: '#56 SCQ IG', hook: 0.60, hold: 45.88, clicks: 3600, conversions: 118, conversionRate: 3.28, watchTime: '0:19', read: 'Balanced attention' },
        { ad: 'POD4', hook: 0.58, hold: 30.40, clicks: 6398, conversions: 209, conversionRate: 3.27, watchTime: '0:11', read: 'Most clicks + conversions' },
        { ad: '#46 News', hook: 0.53, hold: 20.68, clicks: 2611, conversions: 75, conversionRate: 2.87, watchTime: '0:08', read: 'Informative, less personal' },
        { ad: 'UGC4', hook: 0.50, hold: 21.98, clicks: 305, conversions: 7, conversionRate: 2.29, watchTime: '0:07', read: 'Intriguing start; weak trust' },
        { ad: '#56.2 SCQ IG', hook: 0.53, hold: 34.33, clicks: 271, conversions: 6, conversionRate: 2.21, watchTime: '0:11', read: 'Short cutdown; low CVR' },
      ],
      findings: [
        {
          eyebrow: 'Highest conversion rate',
          title: 'Get to the useful answer quickly',
          body: 'POD1 moves from a relatable frustration to a quick diagnosis and had the strongest conversion rate. The review still flagged an abrupt jump into the product. Keep the problem-led setup, then build a short, believable bridge to the offer.',
          metric: 'POD1 · 5.11% CVR',
        },
        {
          eyebrow: 'Strongest retention',
          title: 'Curiosity needs a destination',
          body: '#56 V1 held attention for 19 seconds on average, but its outrage-led opening did not connect cleanly to the product; reported link-click CTR was 1.43%. Keep the curiosity, then resolve it with a relevant product transition rather than extending the alarm.',
          metric: '#56 V1 · 46.18% hold',
        },
        {
          eyebrow: 'Most scale',
          title: 'High volume needs a lighter script',
          body: 'POD4 reached the most clickers and recorded the most conversions, with an 11-second average watch. Its 3.27% conversion rate trails POD1. Keep the reach, but make the explanation leaner and strengthen the path from click to purchase.',
          metric: 'POD4 · 6,398 clicks',
        },
      ],
    },
    {
      type: 'image-gallery',
      layout: 'editorial-rail',
      heading: 'The creative behind the metrics',
      description: 'I checked the ads themselves—not just the dashboard—to connect the numbers to what people actually saw. These examples come from the creative review; identifying brand marks are omitted.',
      aspectRatio: 'square',
      images: [
        {
          src: 'projects/activewear-ad-analysis/research/creative/stretch-comparison-a.png',
          alt: 'An ad example pairing a customer-style quote with a leggings visual; identifying brand lockup cropped out',
          caption: 'Human, specific proof can make an opener feel relatable; the product payoff still needs to follow naturally.',
        },
        {
          src: 'projects/activewear-ad-analysis/research/creative/stretch-comparison-b.png',
          alt: 'An ad example pairing an activewear headline with a short feature checklist; identifying brand lockup cropped out',
          caption: 'Feature-led execution · A fast-scanning list, but the contrast in the headline adds interpretation work.',
        },
        {
          src: 'projects/activewear-ad-analysis/research/creative/plain-language-variant.png',
          alt: 'An ad example using a text-led comparison beside activewear imagery; identifying brand lockup cropped out',
          caption: 'Message clarity · The review called for a simpler comparison that states the point directly.',
        },
      ],
    },
    {
      type: 'deliverables',
      heading: 'How I approached the analysis',
      layout: 'three-up',
      items: [
        'Put all eight ads into one comparable table: hook, hold, clicks, conversions, conversion rate, and watch time.',
        'Read the funnel in order: did the opening stop the scroll, did the story keep attention, did viewers click, and did clicks convert?',
        'Matched the metrics back to the creative: hook angle, personal or broad framing, on-screen context, explanation length, and product handoff.',
        'Looked for trade-offs and repeatable patterns, rather than treating a single high number as proof of a winning concept.',
      ],
    },
    {
      type: 'timeline',
      heading: 'What I changed in the next-test brief',
      entries: [
        { phase: 'Keep', description: 'Use a personal, recognizable problem as the hook, then make the product’s role clear.' },
        { phase: 'Tighten', description: 'Cut technical detours and avoid unsupported health statements. Keep the message focused on substantiated, product-relevant benefits.' },
        { phase: 'Bridge', description: 'Fix the abrupt product handoff noted in POD1: link the opening problem to the solution in one coherent beat.' },
        { phase: 'Borrow', description: 'Bring POD4’s reach together with POD1’s clearer problem-to-answer structure and the on-screen context that supported retention.' },
        { phase: 'Measure', description: 'Test one major creative change at a time. Track hook and hold beside CTR, conversion rate, and total purchases.' },
      ],
    },
    {
      type: 'text',
      heading: 'What this achieved',
      body:
        'The analysis replaced a vague “pick the winning ad” decision with a practical creative direction: keep the human problem, simplify the explanation, support it visually, and make the product handoff credible. It also clarified how to judge the next round across the full funnel. The PDFs contain no post-edit test results, so this is the improvement to the strategy and brief—not a claim that campaign performance already changed.',
    },
    {
      type: 'text',
      heading: 'Evidence note',
      body:
        'The source ads contain health-related statements used as creative copy. This case study assesses ad performance and message clarity; the statements are not presented as verified product or medical facts.',
    },
  ],
};
