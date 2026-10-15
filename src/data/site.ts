import type { SiteConfig, NavItem } from '../types/site';

export const siteConfig: SiteConfig = {
  candidateName: 'Akshita Bijalwan',
  professionalTitle: 'Brand Manager',
  heroHeadline: 'Aligning brand strategy with customer journeys to deliver measurable goals.',
  heroSubheadline:
    'I define the goal a brand must achieve, then evaluate every product, message, and touchpoint against how it moves customers toward that goal.',
  heroPoints: [
    {
      label: 'Strategy',
      body: 'I set positioning and priorities based on the business objective and the market the brand competes in.',
    },
    {
      label: 'Analysis',
      body: 'I use consumer insight and performance data to test whether each decision supports that objective.',
    },
    {
      label: 'Journey',
      body: 'I map how each choice shapes the customer experience, from first awareness and launch through identity, content, and paid social.',
    },
  ],
  shortBio:
    "I turn brand goals into shipped results. I find the insight, make the call, and build the execution that moves customers from first touch to purchase. Across baby care, e-commerce, and activewear, I've worked on product launches, positioning, identity, and paid social, and I measure every decision against the outcome it's meant to drive.",
  email: 'akshitabijalwan9@gmail.com',
  phone: '+91-8929040546',
  location: 'Chandigarh, India',
  resumePath: null,
  resumeAvailable: false,
  profileImagePath: null,
  capabilities: [
    'Brand Strategy & Positioning',
    'New Product Development',
    'Go-to-Market Strategy',
    'Competitive Analysis',
    'Paid Social & Creative Analysis',
    'Brand Identity & Communication',
    'Content Strategy',
    'E-commerce & Digital Experience',
    'Campaign Development',
    'Team Collaboration',
  ],
  experience: [
    {
      role: 'Brand Manager',
      organization: 'Mother Sparsh',
      dates: 'Aug 2025 – Aug 2026',
      highlights: [
        'Shipped new products from concept to launch, owning positioning, packaging, and launch readiness against a clear revenue goal.',
        'Audited the full product portfolio and mix, closing gaps and sharpening brand relevance.',
      ],
    },
    {
      role: 'Associate Brand Manager',
      organization: 'Mother Sparsh',
      dates: 'May 2023 – Dec 2024',
      highlights: [
        'Built the brand system (guidelines) and partnered with UI/UX and digital to ship a faster, more discoverable website with stronger content and search visibility.',
      ],
    },
    {
      role: 'Visual Communication Designer',
      dates: 'Sep 2019 – May 2020',
      highlights: [
        'Ran market and competitor research to sharpen positioning, messaging, and campaign planning across cross-functional teams.',
      ],
    },
  ],
  internships: [
    {
      organization: 'Neytt / EXTRAWEAVE',
      dates: 'Jan – Jul 2022',
      detail: 'Developed a rug collection during a textile design internship.',
    },
    {
      organization: 'Neem Living / Shades of India',
      dates: 'Jun – Aug 2021',
      detail: 'Worked with vegetable and fruit dyes and supported artisan sample development.',
    },
  ],
  selectedProjects: [
    {
      name: 'Synx Store',
      focus: 'Brand Identity, E-commerce & Campaign Strategy',
      highlights: [
        'Defined the brand strategy for a new D2C product, translating customer and category research into a brand book and Amazon storefront that a buyer could trust at first sight.',
      ],
    },
    {
      name: 'ReferMe',
      focus: 'Brand Identity & Campaign',
      highlights: [
        'Researched the professional referral market to build a connecting-thread identity and launch campaign that positioned the product around trust and early adoption.',
      ],
    },
    {
      name: 'Activewear Brand',
      focus: 'Paid Social & Creative Analysis',
      highlights: [
        'Analyzed campaign and ad-set performance to identify the creative patterns driving engagement, then used those findings to set the strategy for each round of testing and scaling.',
      ],
    },
    {
      name: 'Dugli',
      focus: 'Brand & Content',
      dates: 'Jan – Jul 2025',
      highlights: [
        'Researched the Garhwali language in depth, including its speakers, cultural context, and the gap in existing learning content, then built the brand strategy on that evidence.',
        'Developed a Garhwali alphabet book that serves the learner and the mission of preserving a declining language.',
      ],
    },
    {
      name: 'Craft Cluster Project',
      focus: 'Design & Market Research',
      dates: 'Oct 2020 – Jun 2021',
      highlights: [
        'Researched Rajasthan metal-embroidery artisans and their market gaps, then shaped product development around the opportunities the research surfaced.',
        'Trained artisans in social media so they could reach buyers directly, extending the strategy beyond the product itself.',
      ],
    },
    {
      name: 'Zooby, Netherlands',
      focus: 'Content & Ads Management',
      highlights: [
        'Structured Facebook and Instagram ad and story strategy around iterative testing, using results to cut weak creative and scale what converted.',
      ],
    },
    {
      name: 'Orive, Netherlands',
      focus: 'Packaging & Brand Design',
      highlights: [
        'Designed 3D packaging and website visuals to answer a specific discovery and conversion goal at the point of purchase.',
      ],
    },
    {
      name: 'Malini, Italy',
      focus: 'Social Media & Content Management',
      highlights: [
        'Set the content strategy and managed the pipeline to keep the brand consistent and visible across channels.',
      ],
    },
    {
      name: 'Porter, India',
      focus: 'Campaign & Communication Design',
      highlights: [
        'Built driver-partner campaigns around the two levers that drive supply growth: more trips and more earning opportunities.',
      ],
    },
  ],
  education: [
    {
      qualification: 'Bachelor of Design',
      institution: 'National Institute of Fashion Technology (NIFT), New Delhi',
      dates: 'Aug 2018 – Aug 2022',
    },
  ],
  courses: [
    'Meta Certified Digital Marketing Associate · May 2025',
    'Meta Social Media Marketing · 6 months',
    'Google Digital Marketing & E-commerce · 6 months',
  ],
  ogImagePath: 'assets/images/shared/og-image.svg',
  siteUrl: 'https://username.github.io',
  repositoryName: 'portfolio',
};

export const navItems: NavItem[] = [
  { label: 'Home', href: '#/' },
  { label: 'About', href: '#/about' },
  { label: 'Case Studies', href: '#selected-work' },
  { label: 'Contact', href: '#contact' },
];
