import fs from 'fs';
import path from 'path';

const baseDir = '/Users/adithyags/.gemini/antigravity/scratch/tara-portfolio';
const synxDir = path.join(baseDir, 'public/projects/synx-store');
const cleanLogoPath = path.join(synxDir, 'logo-authentic.png');

if (fs.existsSync(cleanLogoPath)) {
  const logoB64 = fs.readFileSync(cleanLogoPath).toString('base64');

  const coverSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" width="100%" height="100%">
  <defs>
    <linearGradient id="coverBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#28361B" />
      <stop offset="50%" stop-color="#1E2A15" />
      <stop offset="100%" stop-color="#141E0D" />
    </linearGradient>
    <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="125%">
      <feDropShadow dx="0" dy="12" stdDeviation="20" flood-color="#000000" flood-opacity="0.4" />
    </filter>
  </defs>

  <rect width="1600" height="1000" fill="url(#coverBg)" />

  <rect x="36" y="36" width="1528" height="928" fill="none" stroke="#4D602B" stroke-width="1.5" opacity="0.5" />
  <path d="M 36 70 L 36 36 L 70 36" fill="none" stroke="#B1BF5D" stroke-width="3" />
  <path d="M 1530 36 L 1564 36 L 1564 70" fill="none" stroke="#B1BF5D" stroke-width="3" />
  <path d="M 36 930 L 36 964 L 70 964" fill="none" stroke="#B1BF5D" stroke-width="3" />
  <path d="M 1530 964 L 1564 964 L 1564 930" fill="none" stroke="#B1BF5D" stroke-width="3" />

  <g transform="translate(800, 390)" filter="url(#cardShadow)">
    <clipPath id="logoClip">
      <rect x="-460" y="-210" width="920" height="420" rx="16" />
    </clipPath>
    <rect x="-462" y="-212" width="924" height="424" rx="18" fill="none" stroke="#B1BF5D" stroke-width="2" opacity="0.7" />
    <image href="data:image/png;base64,${logoB64}" x="-460" y="-210" width="920" height="420" preserveAspectRatio="xMidYMid slice" clip-path="url(#logoClip)" />
  </g>

  <text x="800" y="720" text-anchor="middle" font-family="'Montserrat', -apple-system, sans-serif" font-size="24" font-weight="700" letter-spacing="8" fill="#FDFBE1">BUILT TO WORK. PRICED TO TRUST.</text>
  <text x="800" y="775" text-anchor="middle" font-family="'Lora', Georgia, serif" font-size="20" font-style="italic" fill="#B1BF5D">Modern Garden Tools · Functional, Durable &amp; Honestly Priced</text>

  <g transform="translate(800, 860)">
    <text x="0" y="-32" text-anchor="middle" font-family="'Montserrat', sans-serif" font-size="11" font-weight="700" letter-spacing="3" fill="#B1BF5D">OFFICIAL PALETTE</text>
    <g transform="translate(-240, 0)">
      <circle cx="0" cy="0" r="18" fill="#28361B" stroke="#FDFBE1" stroke-width="1.5" />
      <text x="0" y="32" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#FDFBE1" opacity="0.75">Forest Green</text>

      <circle cx="120" cy="0" r="18" fill="#4D602B" stroke="#FDFBE1" stroke-width="1.5" />
      <text x="120" y="32" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#FDFBE1" opacity="0.75">Moss Green</text>

      <circle cx="240" cy="0" r="18" fill="#B1BF5D" stroke="#FDFBE1" stroke-width="1.5" />
      <text x="240" y="32" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#FDFBE1" opacity="0.75">Avocado Green</text>

      <circle cx="360" cy="0" r="18" fill="#FDFBE1" stroke="#28361B" stroke-width="1.5" />
      <text x="360" y="32" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#FDFBE1" opacity="0.75">Beige</text>

      <circle cx="480" cy="0" r="18" fill="#BD6D29" stroke="#FDFBE1" stroke-width="1.5" />
      <text x="480" y="32" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#FDFBE1" opacity="0.75">Rust Brown</text>
    </g>
  </g>
</svg>`;

  const heroSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="100%" height="100%">
  <defs>
    <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E2A15" />
      <stop offset="50%" stop-color="#28361B" />
      <stop offset="100%" stop-color="#141E0D" />
    </linearGradient>
    <filter id="heroShadow" x="-10%" y="-10%" width="120%" height="125%">
      <feDropShadow dx="0" dy="14" stdDeviation="24" flood-color="#000000" flood-opacity="0.45" />
    </filter>
  </defs>

  <rect width="1920" height="1080" fill="url(#heroGrad)" />

  <g transform="translate(960, 420)" filter="url(#heroShadow)">
    <clipPath id="heroLogoClip">
      <rect x="-540" y="-247" width="1080" height="494" rx="20" />
    </clipPath>
    <rect x="-543" y="-250" width="1086" height="500" rx="22" fill="none" stroke="#B1BF5D" stroke-width="2.5" opacity="0.8" />
    <image href="data:image/png;base64,${logoB64}" x="-540" y="-247" width="1080" height="494" preserveAspectRatio="xMidYMid slice" clip-path="url(#heroLogoClip)" />
  </g>

  <text x="960" y="750" text-anchor="middle" font-family="'Montserrat', -apple-system, sans-serif" font-size="26" font-weight="800" letter-spacing="10" fill="#FDFBE1">BUILT TO WORK. PRICED TO TRUST.</text>
  
  <g transform="translate(960, 830)">
    <rect x="-400" y="-28" width="800" height="56" rx="28" fill="#4D602B" opacity="0.5" stroke="#B1BF5D" stroke-width="1" />
    <text x="-250" y="7" text-anchor="middle" font-family="'Montserrat', sans-serif" font-size="15" font-weight="700" letter-spacing="4" fill="#FDFBE1">QUALITY</text>
    <circle cx="-125" cy="1" r="3.5" fill="#B1BF5D" />
    <text x="0" y="7" text-anchor="middle" font-family="'Montserrat', sans-serif" font-size="15" font-weight="700" letter-spacing="4" fill="#FDFBE1">RELIABILITY</text>
    <circle cx="125" cy="1" r="3.5" fill="#B1BF5D" />
    <text x="250" y="7" text-anchor="middle" font-family="'Montserrat', sans-serif" font-size="15" font-weight="700" letter-spacing="4" fill="#FDFBE1">SIMPLICITY</text>
  </g>

  <text x="960" y="940" text-anchor="middle" font-family="'Lora', Georgia, serif" font-size="21" font-style="italic" fill="#B1BF5D">
    Brand Guidelines &amp; Comprehensive Social Media Strategy
  </text>
</svg>`;

  fs.writeFileSync(path.join(synxDir, 'cover.svg'), coverSvg);
  fs.writeFileSync(path.join(synxDir, 'hero.svg'), heroSvg);
  console.log('Regenerated cover.svg and hero.svg using authentic logo.');
}
