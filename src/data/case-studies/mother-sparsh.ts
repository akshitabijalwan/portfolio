import type { CaseStudy } from '../../types/case-study';

export const motherSparsh: CaseStudy = {
  slug: 'mother-sparsh',
  title: 'A Gentle Start to Baby Care',
  brand: 'Mother Sparsh',
  year: '2025–2026',
  industry: 'Baby Care / Skincare',
  category: 'Product Launch Awareness Campaign',
  role: 'Brand Manager',
  duration: 'Aug 2025 – Aug 2026',
  overview:
    'After Mother Sparsh’s 99% pure-water unscented wipes became a hit with a loyal, passionate parent community, the brand extended that trust into baby skincare. The Simply Unscented range brought together a baby lotion and wash, carrying the same promise of gentle care into a new part of the daily routine.',
  challenge:
    'Introduce a new skincare range in a category where parents look closely at every ingredient and claim. The launch needed to make the connection to the trusted wipes clear while giving the lotion and wash their own simple, reassuring story.',
  objectives: [
    'Carry the familiarity and trust of the baby wipes into a broader care routine',
    'Introduce lotion and wash together under the Simply Unscented range',
    'Make product proof points clear while keeping the story warm and parent-focused',
  ],
  responsibilities: [
    'Shape new product development from concept and positioning through packaging and launch readiness',
    'Review the product portfolio and product mix to identify gaps and strengthen brand relevance',
    'Develop a two-part carousel story connecting trusted wipes to the new skincare range',
    'Bring forward the range’s no-added-fragrance and newborn-safety messages',
    'Present oatmeal nourishment, pH balance, and tear-free wash benefits clearly',
  ],
  heroImage: {
    src: 'projects/mother-sparsh/day-one-01.png',
    alt: 'A mother holding her newborn beside the message: safe-to-use products for your baby since day one',
  },
  sections: [
    {
      type: 'pull-quote',
      quote: 'With the same love and care, we made Simply Unscented.',
      attribution: 'The launch idea, carried from trusted wipes into baby skincare',
    },
    {
      type: 'text',
      heading: 'Trust, gently extended',
      body:
        'The wipes had already established a clear point of difference: 99% pure water, unscented, extra gentle, and extra thick. The new range builds on that familiarity rather than starting from scratch. Its language stays calm and direct, helping parents understand what is new and why the same care continues across lotion and wash.',
    },
    {
      type: 'statistics',
      heading: 'Simple care, clearly explained',
      stats: [
        {
          value: '99%',
          label: 'Pure-water wipes',
          description: 'The trusted product story that introduced the range extension.',
        },
        {
          value: '5.5',
          label: 'pH balanced',
          description: 'A clear skincare detail shown on the lotion and wash.',
        },
        {
          value: '24 hrs',
          label: 'Oatmeal nourishment',
          description: 'The lotion’s nourishment message, made easy to spot.',
        },
      ],
    },
    {
      type: 'text',
      heading: 'A product story parents can scan',
      body:
        'Each carousel leads with one reassuring idea, then lets the pack and supporting claims do the explaining. The range is unscented with no added fragrance; the products are presented as suitable from day one, including for normal, dry, and sensitive skin. The wash is tear-free, while natural oatmeal gives the range a familiar care cue.',
    },
    {
      type: 'image-gallery',
      heading: '01 · From trusted wipes to skincare',
      images: [
        {
          src: 'projects/mother-sparsh/wipes-launch-01.png',
          alt: 'Launch carousel slide introducing Mother Sparsh 99% pure-water unscented baby wipes',
          caption: 'Start with a familiar favourite: 99% pure-water, unscented baby wipes.',
        },
        {
          src: 'projects/mother-sparsh/wipes-launch-02.png',
          alt: 'Launch carousel transition: with the same love and care, Simply Unscented',
          caption: 'A simple bridge from the wipes to the new skincare range.',
        },
        {
          src: 'projects/mother-sparsh/skincare-range-01.png',
          alt: 'Simply Unscented baby lotion and baby wash with natural oatmeal',
          caption: 'Introduce lotion and wash together, with oatmeal nourishment and newborn care cues.',
        },
      ],
    },
    {
      type: 'image-gallery',
      heading: '02 · Safe to use from day one',
      images: [
        {
          src: 'projects/mother-sparsh/day-one-01.png',
          alt: 'Mother holding baby beside the message safe-to-use products for your baby since day one',
          caption: 'Lead with the reassurance parents need most: gentle care from day one.',
        },
        {
          src: 'projects/mother-sparsh/day-one-02.png',
          alt: 'Mother Sparsh baby wipes described as clinically proven and dermatologically tested',
          caption: 'Keep the wipes’ clinical and dermatological credentials specific to that product.',
        },
        {
          src: 'projects/mother-sparsh/skincare-range-02.png',
          alt: 'Simply Unscented baby lotion and wash showing oatmeal, newborn safety, and pH 5.5 balance',
          caption: 'Close on a coordinated range: oatmeal care, pH 5.5 balance, and newborn suitability.',
        },
      ],
    },
  ],
};
