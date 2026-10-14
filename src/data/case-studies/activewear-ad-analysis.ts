import type { CaseStudy } from '../../types/case-study';

export const activewearAdAnalysis: CaseStudy = {
  slug: 'activewear-ad-analysis',
  title: 'From Scroll-Stop to Sale',
  brand: 'Confidential Activewear Brand',
  year: '',
  industry: 'Bamboo Activewear / E-Commerce',
  category: 'Campaign Ad Performance Analysis',
  role: 'Brand Strategy & Paid Social Analysis',
  duration: 'March 24 – May 25',
  responsibilities: [
    'Reviewed performance across eight campaign ads and multiple creative test variations',
    'Compared hook, hold, link-click, conversion, and average-watch metrics',
    'Mapped retention drop-offs to creative transitions, message clarity, and visual choices',
    'Translated findings into practical recommendations for clearer, more credible ads',
  ],
  heroImage: {
    src: 'projects/activewear-ad-analysis/hero.svg',
    alt: 'An editorial data visualization showing a 5.11 percent conversion rate alongside attention and retention signals',
  },
  overview:
    'A close read of paid-social performance for a bamboo activewear company, bringing campaign results and ad-by-ad creative research into one story. The work separates attention from action: which openings earned a pause, which stories kept people watching, and which ones gave viewers a clear reason to click and convert.',
  challenge:
    'The ad set contained a familiar performance paradox. Some of the most arresting videos held attention but produced few conversions; a faster, less watchable ad converted at the highest rate. The task was to read beyond a single “winning ad” label and find the creative decisions behind each outcome—without turning the research into an unstructured list of observations.',
  objectives: [
    'Make the trade-offs between hook, hold, clicks, and conversion visible at a glance',
    'Identify repeatable story, copy, and visual patterns across two analysis decks',
    'Distinguish measured performance from interpretation and creative recommendations',
  ],
  sections: [
    {
      type: 'pull-quote',
      quote: 'A strong hook earns the next second. A clear, credible story earns the next step.',
      attribution: 'Core finding from the creative performance review',
    },
    {
      type: 'text',
      heading: 'The metric that changed the read',
      body:
        'The campaign table makes clear why one headline metric was not enough. Ad #56 V1 held 46.18% of viewers and averaged 19 seconds of watch time, yet recorded 660 link clicks and 26 conversions. POD1 held 23.50% and averaged just 7 seconds, but converted 201 times from 3,933 link clicks—a 5.11% conversion rate. Curiosity can hold a viewer; resolution gives that attention somewhere to go.',
    },
    {
      type: 'campaign-analysis',
      heading: 'Eight ads, one performance picture',
      intro:
        'The campaign report covers March 24 to May 25 (year not specified). It ranks creative on hook rate, hold rate, link clicks, conversions, conversion rate, and average watch time. Read together, the numbers show several different kinds of “winner”—and why the best hook was not automatically the best ad.',
      rows: [
        { ad: 'POD1', hook: 0.55, hold: 23.5, clicks: 3933, conversions: 201, conversionRate: 5.11, watchTime: '0:07', read: 'Fast path · highest CVR' },
        { ad: '#42', hook: 0.48, hold: 20.11, clicks: 3459, conversions: 132, conversionRate: 3.81, watchTime: '0:07', read: 'Clear opinion + solution' },
        { ad: '#56 V1', hook: 0.66, hold: 46.18, clicks: 660, conversions: 26, conversionRate: 3.94, watchTime: '0:19', read: 'Highest hook + hold' },
        { ad: '#56 SCQ IG', hook: 0.6, hold: 45.88, clicks: 3600, conversions: 118, conversionRate: 3.28, watchTime: '0:19', read: 'Balanced attention' },
        { ad: 'POD4', hook: 0.58, hold: 30.4, clicks: 6398, conversions: 209, conversionRate: 3.27, watchTime: '0:11', read: 'Most clicks + conversions' },
        { ad: '#46 News', hook: 0.53, hold: 20.68, clicks: 2611, conversions: 75, conversionRate: 2.87, watchTime: '0:08', read: 'Informative, less personal' },
        { ad: 'UGC4', hook: 0.5, hold: 21.98, clicks: 305, conversions: 7, conversionRate: 2.29, watchTime: '0:07', read: 'Opening intrigue; weak trust' },
        { ad: '#56.2 SCQ IG', hook: 0.53, hold: 34.33, clicks: 271, conversions: 6, conversionRate: 2.21, watchTime: '0:11', read: 'Short cutdown; low CVR' },
      ],
      findings: [
        {
          eyebrow: 'Hook ≠ outcome',
          title: 'Curiosity needs a destination',
          body: 'The highest-hold ad opened with outrage, but its path from attention to product was weak. The analysis calls for a direct bridge from the problem to a useful resolution.',
          metric: '#56 V1 · 46.18% hold',
        },
        {
          eyebrow: 'Conversion signal',
          title: 'Frustration, then a fast answer',
          body: 'POD1 paired an emotional problem with a quick diagnosis. It converted best, though its product transition felt abrupt—an opportunity to preserve the pace while making the shift feel earned.',
          metric: 'POD1 · 5.11% CVR',
        },
        {
          eyebrow: 'Scale signal',
          title: 'Reach still needs a lighter script',
          body: 'POD4 brought the largest click and conversion totals, but held viewers for only 11 seconds on average. The review flags information density and recommends a cleaner, more legible explanation.',
          metric: 'POD4 · 6,398 clicks',
        },
      ],
      comparison: [
        {
          label: 'Creative test',
          title: 'H1C2 · longer explanation',
          plays: '1,284',
          averageWatch: '0:06',
          hook: '44%',
          hold: '3.19%',
          note: 'The retention note marks a drop when the explanation is dragged out before the point lands.',
        },
        {
          label: 'Creative test',
          title: 'H1C3 · earlier brand message',
          plays: '4,007',
          averageWatch: '0:08',
          hook: '48%',
          hold: '5.2%',
          note: 'This cut moved into brand messaging more cleanly and retained more viewers; extended technical explanations still caused drop-off.',
        },
      ],
    },
    {
      type: 'text',
      heading: 'The creative system behind the numbers',
      body:
        'Across the ad-set review, the most useful pattern was not “make every hook louder.” Personal, specific openings outperformed generic fitness statements; supporting on-screen context and split-screen demonstrations helped viewers follow the story. User-generated thumbnails beat plant imagery, while skin-focused visuals sparked interest. But a strong first frame could not compensate for a hard-to-follow explanation, an inauthentic-feeling performance, or a story that never connected back to the product.',
    },
    {
      type: 'timeline',
      heading: 'A practical sequence for the next round',
      entries: [
        { phase: '01 · Recognize', description: 'Open on a relatable person, moment, or frustration; avoid generic audience call-outs.' },
        { phase: '02 · Explain', description: 'Make the point in plain language. The analysis repeatedly saw attention drop during long or technical explanations.' },
        { phase: '03 · Demonstrate', description: 'Use on-screen context and supporting visuals to make the spoken story easier to follow.' },
        { phase: '04 · Resolve', description: 'Connect the problem to a relevant product benefit with a natural transition and enough room to build trust.' },
      ],
    },
    {
      type: 'text',
      heading: 'A note on evidence',
      body:
        'The source decks include health-related claims in draft advertising scripts. This case study reports how the creative was assessed for attention, clarity, and conversion; it does not present those script claims as verified product or medical facts.',
    },
  ],
};
