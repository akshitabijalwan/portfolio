import type { SiteConfig, NavItem } from '../types/site';

export const siteConfig: SiteConfig = {
  candidateName: 'Akshita Bijalwan',
  professionalTitle: 'Brand Manager',
  heroHeadline: 'Building brands with clarity, character, and purpose.',
  heroSubheadline:
    'Brand strategy, product development, and creative communication shaped around real customer needs.',
  heroIntroduction:
    'I bring together consumer understanding, clear positioning, and thoughtful execution—from new product development and launch planning to identity, content, and paid social.',
  shortBio:
    'I’m a brand manager with experience across baby care, e-commerce, activewear, and consumer campaigns. My work spans new product development, portfolio review, brand positioning, identity systems, digital experience, content, and paid social. With a foundation in visual communication and design, I connect research and customer understanding to clear, practical brand expression.',
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
        'Shaped new product development from concept and positioning through packaging and launch readiness.',
        'Reviewed the product portfolio and product mix, identifying gaps and opportunities to strengthen brand relevance.',
      ],
    },
    {
      role: 'Associate Brand Manager',
      organization: 'Mother Sparsh',
      dates: 'May 2023 – Dec 2024',
      highlights: [
        'Developed brand guidelines and partnered with UI/UX and digital teams to improve the website experience, content, and search visibility.',
      ],
    },
    {
      role: 'Visual Communication Designer',
      dates: 'Sep 2019 – May 2020',
      highlights: [
        'Supported market and competitor research, positioning, messaging, campaign planning, and cross-functional team needs.',
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
      name: 'Synx Store + ReferMe',
      focus: 'Brand identity, e-commerce & campaign strategy',
      detail: 'Created Synx Store’s brand book and Amazon storefront, then developed ReferMe’s connecting-thread identity and campaign for a professional referral network.',
    },
    {
      name: 'Confidential activewear brand',
      focus: 'Paid Social & Creative Analysis',
      detail: 'Analyzed campaign and ad-set performance to identify creative patterns and opportunities.',
    },
    {
      name: 'Dugli',
      focus: 'Brand & Content',
      dates: 'Jan – Jul 2025',
      detail: 'Developed a Garhwali alphabet book using cultural and language content to support preservation of a declining language.',
    },
    {
      name: 'Craft Cluster Project',
      focus: 'Design & Market Research',
      dates: 'Oct 2020 – Jun 2021',
      detail: 'Researched Rajasthan metal-embroidery artisans and market gaps, supported product development, and trained artisans in social media.',
    },
    {
      name: 'Zooby · Netherlands',
      focus: 'Content & Ads Management',
      detail: 'Managed Facebook and Instagram ads, stories, and highlights, using iterative testing to refine content.',
    },
    {
      name: 'Orive · Netherlands',
      focus: 'Packaging & Brand Design',
      detail: 'Created 3D packaging and website visuals.',
    },
    {
      name: 'Malini · Italy',
      focus: 'Social Media & Content Management',
      detail: 'Managed social media and content.',
    },
    {
      name: 'Porter · India',
      focus: 'Campaign & Communication Design',
      detail: 'Designed straightforward driver-partner campaigns focused on more trips and earning opportunities.',
    },
    {
      name: 'Selected social streams',
      focus: 'Social Media & Visual Communication',
      detail: 'Developed brand-specific feed and campaign visuals across Malini, Mother Sparsh, Zooby, U-topia / TOPI.AI, and jewelry content.',
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
  { label: 'About', href: '#/about' },
  { label: 'Case Studies', href: '#selected-work' },
  { label: 'Contact', href: '#contact' },
];
