import type { CaseStudy } from '../../types/case-study';

export const activewearAdSetAnalysis: CaseStudy = {
  slug: 'activewear-ad-set',
  title: 'Creative Research Within Ad Sets',
  brand: 'Bamboo Activewear · Creative Research',
  year: '',
  industry: 'Activewear / Paid Social',
  category: 'Ad-set Creative Analysis',
  role: '',
  overview:
    'The question was not simply which ad got the first view. I compared the opening, message clarity, visual support, and retention curve to find where attention turned into confusion—and how to make the story easier to follow.',
  challenge:
    'Several variations opened strongly, but that attention did not always survive the explanation. Technical language, indirect comparisons, and abrupt product switches added friction. The brief was to find the exact moments that lost viewers, preserve the useful hooks, and define specific edits for the next test.',
  objectives: [
    'Separate scroll-stopping hooks from the messages that keep people watching.',
    'Map retention drops to the line, visual, or transition on screen at that moment.',
    'Compare message clarity and thumbnail relevance across creative variants.',
    'Turn the evidence into practical edits and a cleaner next-test plan.',
  ],
  sections: [
    {
      type: 'image-gallery',
      layout: 'editorial-rail',
      heading: 'The creative variants I reviewed',
      description: 'The source deck compared a direct customer-style opener with a more indirect product comparison. Brand marks are omitted; the examples are shown as advertising creative, not as verified product claims.',
      aspectRatio: 'square',
      images: [
        {
          src: 'projects/activewear-ad-analysis/research/creative/stretch-comparison-a.png',
          alt: 'An activewear ad creative using a customer-style quote beside a model wearing leggings; brand lockup is cropped out',
          caption: 'Personal proof · A first-person opener makes the comparison feel immediate.',
        },
        {
          src: 'projects/activewear-ad-analysis/research/creative/stretch-comparison-b.png',
          alt: 'An activewear ad creative with a short headline and three product feature checkmarks; brand lockup is cropped out',
          caption: 'Feature checklist · Clear at a glance, but the headline asks the viewer to resolve a contradiction.',
        },
        {
          src: 'projects/activewear-ad-analysis/research/creative/plain-language-variant.png',
          alt: 'An activewear ad creative presenting a leggings comparison in a text-led layout; brand lockup is cropped out',
          caption: 'Message rewrite · The review recommended stating the comparison more plainly.',
        },
      ],
    },
    {
      type: 'statistics',
      heading: 'A/B read: get to the point sooner',
      stats: [
        { label: 'H1C2 hold rate', value: '3.19%', description: '1,284 plays · 6 sec average watch · 44% hook rate' },
        { label: 'H1C3 hold rate', value: '5.20%', description: '4,007 plays · 8 sec average watch · 48% hook rate' },
        { label: 'Observed difference', value: '+2.01 pp', description: 'Higher hold in the H1C3 snapshot; a directional read, not a controlled lift claim.' },
      ],
    },
    {
      type: 'image-gallery',
      layout: 'editorial-rail',
      heading: 'The drop-off tells us where to simplify',
      description: 'I read the curve alongside the edit: a steep early fall flags an opening problem; a later break points to a weak explanation or transition.',
      aspectRatio: 'auto',
      images: [
        {
          src: 'projects/activewear-ad-analysis/research/h1c2-retention.png',
          alt: 'Viewer retention curve for H1C2, with a sharp early drop and continuing decline through the longer explanation',
          caption: 'H1C2 · Attention drops early, then thins further through the longer explanation.',
        },
        {
          src: 'projects/activewear-ad-analysis/research/h1c3-brand-switch-retention.png',
          alt: 'Viewer retention curve for H1C3, a creative variation that moved into brand messaging earlier',
          caption: 'H1C3 · Earlier brand context lines up with a higher hold rate in this snapshot.',
        },
        {
          src: 'projects/activewear-ad-analysis/research/h1c3-explanation-dropoff.png',
          alt: 'Viewer retention curve showing a drop when technical ingredient explanations begin',
          caption: 'H1C3 · A second drop appears as the script moves into technical detail.',
        },
        {
          src: 'projects/activewear-ad-analysis/research/h1c1-retention.png',
          alt: 'Viewer retention curve for H1C1, with an early drop and a note that the creative lacks conviction for conversion',
          caption: 'H1C1 · Retention alone did not give viewers enough conviction to act.',
        },
      ],
    },
    {
      type: 'deliverables',
      heading: 'What I learned from the ads',
      layout: 'three-up',
      items: [
        'Personal, specific openers earned attention more consistently than broad fitness call-outs.',
        'A direct comparison was easier to process; double negatives made the viewer decode the benefit.',
        'The “why” section ran long. Retention dropped around dense ingredient explanations.',
        'On-screen context and split-screen demonstrations made the story easier to follow without sound.',
        'People-led thumbnails outperformed plant imagery in the reviewed tests, even when the opening line was strong.',
        'A hook needs a bridge: connect the viewer’s problem to the product before asking for action.',
      ],
    },
    {
      type: 'timeline',
      heading: 'The improvements I recommended',
      entries: [
        { phase: '01 · Keep', description: 'Start with a recognizable, personal frustration. It gives the viewer a reason to stop.' },
        { phase: '02 · Clarify', description: 'Replace indirect comparisons with one plain-language benefit. Remove extra technical setup.' },
        { phase: '03 · Support', description: 'Show the context while it is being explained: use relevant on-screen text or a split-screen demonstration.' },
        { phase: '04 · Connect', description: 'Bridge from the problem to the product in the same story, then give a clear next step.' },
        { phase: '05 · Test', description: 'Change one variable at a time—hook, thumbnail, explanation length, or product transition—and compare retention with clicks and purchases.' },
      ],
    },
    {
      type: 'text',
      heading: 'What the analysis delivered',
      body:
        'The review turned creative screenshots and retention curves into a practical editing brief: keep the personal hook, simplify the explanation, match the visual to the message, and make the product transition feel earned. The source material does not report a later test using these edits, so the outcome here is a prioritized improvement plan—not a claimed performance lift.',
    },
    {
      type: 'text',
      heading: 'Evidence note',
      body:
        'The source ads contain health-related statements used as creative copy. This case study evaluates their clarity, pacing, and audience response; it does not verify or endorse the underlying health claims.',
    },
  ],
};
