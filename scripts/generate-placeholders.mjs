import fs from 'fs';
import path from 'path';

const images = [
  // Brand Positioning & Strategy
  {
    dir: 'public/projects/brand-positioning-strategy',
    filename: 'cover.svg',
    width: 1600,
    height: 1000,
    category: 'Brand Strategy',
    title: 'Brand Positioning & Strategy',
    label: 'Cover Image: 16:10',
  },
  {
    dir: 'public/projects/brand-positioning-strategy',
    filename: 'hero.svg',
    width: 1920,
    height: 1080,
    category: 'Brand Strategy',
    title: 'Brand Positioning & Strategy',
    label: 'Hero Visual: 16:9',
  },
  {
    dir: 'public/projects/brand-positioning-strategy',
    filename: 'campaign-01.svg',
    width: 1600,
    height: 900,
    category: 'Brand Strategy',
    title: 'Research & Insights Documentation',
    label: 'Full-Width Visual',
  },
  {
    dir: 'public/projects/brand-positioning-strategy',
    filename: 'campaign-02.svg',
    width: 1200,
    height: 900,
    category: 'Brand Strategy',
    title: 'Brand Positioning Framework',
    label: 'Two-Column Layout: Left',
  },
  {
    dir: 'public/projects/brand-positioning-strategy',
    filename: 'campaign-03.svg',
    width: 1200,
    height: 900,
    category: 'Brand Strategy',
    title: 'Brand Architecture & Hierarchy',
    label: 'Two-Column Layout: Right',
  },

  // Integrated Marketing Campaign
  {
    dir: 'public/projects/integrated-marketing-campaign',
    filename: 'cover.svg',
    width: 1600,
    height: 1000,
    category: 'Campaign Planning',
    title: 'Integrated Marketing Campaign',
    label: 'Cover Image: 16:10',
  },
  {
    dir: 'public/projects/integrated-marketing-campaign',
    filename: 'hero.svg',
    width: 1920,
    height: 1080,
    category: 'Campaign Planning',
    title: 'Integrated Marketing Campaign',
    label: 'Hero Visual: 16:9',
  },
  {
    dir: 'public/projects/integrated-marketing-campaign',
    filename: 'campaign-01.svg',
    width: 1600,
    height: 900,
    category: 'Campaign Planning',
    title: 'Campaign Creative Concept & Platform',
    label: 'Full-Width Visual',
  },
  {
    dir: 'public/projects/integrated-marketing-campaign',
    filename: 'campaign-02.svg',
    width: 1200,
    height: 1200,
    category: 'Campaign Planning',
    title: 'Social Media Content Suite',
    label: 'Gallery Asset 01',
  },
  {
    dir: 'public/projects/integrated-marketing-campaign',
    filename: 'campaign-03.svg',
    width: 1200,
    height: 1200,
    category: 'Campaign Planning',
    title: 'Digital Display Advertising',
    label: 'Gallery Asset 02',
  },
  {
    dir: 'public/projects/integrated-marketing-campaign',
    filename: 'campaign-04.svg',
    width: 1200,
    height: 1200,
    category: 'Campaign Planning',
    title: 'Out-of-Home Activations',
    label: 'Gallery Asset 03',
  },

  // Product Launch & Go-to-Market
  {
    dir: 'public/projects/product-launch-go-to-market',
    filename: 'cover.svg',
    width: 1200,
    height: 1600,
    category: 'Go-to-Market Strategy',
    title: 'Product Launch & Go-to-Market',
    label: 'Cover Image: 3:4 Portrait',
  },
  {
    dir: 'public/projects/product-launch-go-to-market',
    filename: 'hero.svg',
    width: 1920,
    height: 1080,
    category: 'Go-to-Market Strategy',
    title: 'Product Launch & Go-to-Market',
    label: 'Hero Visual: 16:9',
  },
  {
    dir: 'public/projects/product-launch-go-to-market',
    filename: 'campaign-01.svg',
    width: 1200,
    height: 900,
    category: 'Go-to-Market Strategy',
    title: 'Go-to-Market Distribution Matrix',
    label: 'Text with Image Visual',
  },
  {
    dir: 'public/projects/product-launch-go-to-market',
    filename: 'campaign-02.svg',
    width: 1600,
    height: 900,
    category: 'Go-to-Market Strategy',
    title: 'Product Launch Creative Touchpoints',
    label: 'Full-Width Visual',
  },

  // Shared assets
  {
    dir: 'public/assets/images/shared',
    filename: 'og-image.svg',
    width: 1200,
    height: 630,
    category: 'Brand Manager Portfolio',
    title: 'Tara Sharma | Portfolio',
    label: 'Open Graph Social Preview',
  },
];

function generateSvg(item) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${item.width} ${item.height}" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F9F8F5" />
      <stop offset="100%" stop-color="#EFECE6" />
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E6E3DC" stroke-width="0.5"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="${item.width}" height="${item.height}" fill="url(#bgGradient)" />
  <rect width="${item.width}" height="${item.height}" fill="url(#grid)" opacity="0.6" />

  <!-- Outer frame border -->
  <rect x="24" y="24" width="${item.width - 48}" height="${item.height - 48}" fill="none" stroke="#DEDAD2" stroke-width="1.5" />

  <!-- Corner markings -->
  <path d="M 24 50 L 24 24 L 50 24" fill="none" stroke="#8B6F4E" stroke-width="2" />
  <path d="M ${item.width - 50} 24 L ${item.width - 24} 24 L ${item.width - 24} 50" fill="none" stroke="#8B6F4E" stroke-width="2" />
  <path d="M 24 ${item.height - 50} L 24 ${item.height - 24} L 50 ${item.height - 24}" fill="none" stroke="#8B6F4E" stroke-width="2" />
  <path d="M ${item.width - 50} ${item.height - 24} L ${item.width - 24} ${item.height - 24} L ${item.width - 24} ${item.height - 50}" fill="none" stroke="#8B6F4E" stroke-width="2" />

  <!-- Content -->
  <g transform="translate(${item.width / 2}, ${item.height / 2})">
    <!-- Category Badge -->
    <text x="0" y="-50" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="600" letter-spacing="4" fill="#8B6F4E" text-transform="uppercase">${item.category}</text>
    
    <!-- Title -->
    <text x="0" y="0" text-anchor="middle" font-family="Georgia, serif" font-size="${Math.min(item.width / 32, 38)}" font-weight="400" fill="#191919">${item.title}</text>
    
    <!-- Label -->
    <text x="0" y="45" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="400" letter-spacing="1.5" fill="#747474">${item.label}</text>
    
    <!-- Watermark / Placeholder Notice -->
    <rect x="-110" y="80" width="220" height="28" rx="2" fill="#E8E4DC" />
    <text x="0" y="98" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="500" letter-spacing="1" fill="#747474">DEMONSTRATION ASSET</text>
  </g>

  <!-- Dimensions Indicator bottom-right -->
  <text x="${item.width - 40}" y="${item.height - 38}" text-anchor="end" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="400" fill="#A09B90">${item.width} × ${item.height}</text>
</svg>`;
}

const baseDir = '/Users/adithyags/.gemini/antigravity/scratch/tara-portfolio';

for (const img of images) {
  const fullDir = path.join(baseDir, img.dir);
  if (!fs.existsSync(fullDir)) {
    fs.mkdirSync(fullDir, { recursive: true });
  }
  const filePath = path.join(fullDir, img.filename);
  fs.writeFileSync(filePath, generateSvg(img), 'utf-8');
  console.log(`Generated: ${path.join(img.dir, img.filename)}`);
}
