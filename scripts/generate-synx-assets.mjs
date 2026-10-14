import fs from 'fs';
import path from 'path';

const outDir = '/Users/adithyags/.gemini/antigravity/scratch/tara-portfolio/public/projects/synx-store';

// 1. Cover SVG (1600x1000)
const coverSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" width="100%" height="100%">
  <defs>
    <linearGradient id="coverBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#28361B" />
      <stop offset="60%" stop-color="#1F2B15" />
      <stop offset="100%" stop-color="#161F0E" />
    </linearGradient>
    <pattern id="leafPattern" width="60" height="60" patternUnits="userSpaceOnUse">
      <path d="M 30 10 C 20 20 15 35 30 50 C 45 35 40 20 30 10 Z" fill="none" stroke="#3D5029" stroke-width="0.8" opacity="0.3"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="1600" height="1000" fill="url(#coverBg)" />
  <rect width="1600" height="1000" fill="url(#leafPattern)" />

  <!-- Outer frame -->
  <rect x="36" y="36" width="1528" height="928" fill="none" stroke="#4D602B" stroke-width="1.5" opacity="0.6" />

  <!-- Corner accents -->
  <path d="M 36 70 L 36 36 L 70 36" fill="none" stroke="#B1BF5D" stroke-width="3" />
  <path d="M 1530 36 L 1564 36 L 1564 70" fill="none" stroke="#B1BF5D" stroke-width="3" />
  <path d="M 36 930 L 36 964 L 70 964" fill="none" stroke="#B1BF5D" stroke-width="3" />
  <path d="M 1530 964 L 1564 964 L 1564 930" fill="none" stroke="#B1BF5D" stroke-width="3" />

  <!-- Central Logo & Brand Mark -->
  <g transform="translate(800, 420)">
    <!-- Wheelbarrow & Garden Tools Icon -->
    <g transform="translate(-80, -220) scale(1.1)">
      <!-- Rake & Broom tools in wheelbarrow -->
      <path d="M 60 40 L 40 90 M 50 35 L 35 85 M 70 45 L 45 95 M 80 50 L 50 100" stroke="#FDFBE1" stroke-width="4" stroke-linecap="round" />
      <path d="M 35 40 L 80 55 L 75 65 L 30 50 Z" fill="#FDFBE1" />
      <!-- Broom head -->
      <path d="M 95 30 C 110 50 120 75 110 95 L 90 90 C 85 70 85 50 95 30 Z" fill="#FDFBE1" />
      <line x1="102" y1="20" x2="88" y2="85" stroke="#FDFBE1" stroke-width="5" stroke-linecap="round" />
      <!-- Wheelbarrow bin -->
      <path d="M 25 100 L 125 100 L 105 160 L 45 160 Z" fill="#FDFBE1" />
      <!-- Wheelbarrow frame and handles -->
      <line x1="10" y1="120" x2="50" y2="160" stroke="#FDFBE1" stroke-width="7" stroke-linecap="round" />
      <line x1="45" y1="160" x2="135" y2="175" stroke="#FDFBE1" stroke-width="7" stroke-linecap="round" />
      <!-- Wheel and leg stand -->
      <circle cx="135" cy="180" r="16" fill="none" stroke="#FDFBE1" stroke-width="7" />
      <path d="M 60 160 L 55 195 L 75 195" fill="none" stroke="#FDFBE1" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
    </g>

    <!-- Brand Name -->
    <text x="0" y="30" text-anchor="middle" font-family="'Montserrat', sans-serif" font-size="52" font-weight="800" letter-spacing="12" fill="#FDFBE1">SYNX STORE</text>
    
    <!-- Tagline -->
    <text x="0" y="80" text-anchor="middle" font-family="'Montserrat', sans-serif" font-size="16" font-weight="700" letter-spacing="6" fill="#B1BF5D">BUILT TO WORK. PRICED TO TRUST.</text>
    
    <!-- Sub-descriptor -->
    <text x="0" y="125" text-anchor="middle" font-family="'Lora', Georgia, serif" font-size="19" font-style="italic" fill="#FDFBE1" opacity="0.85">Modern Garden Tools · Functional, Durable &amp; Honestly Priced</text>
  </g>

  <!-- Color Palette Swatch Bar at bottom -->
  <g transform="translate(800, 830)">
    <text x="0" y="-35" text-anchor="middle" font-family="'Montserrat', sans-serif" font-size="11" font-weight="700" letter-spacing="3" fill="#B1BF5D">CORE BRAND PALETTE</text>
    <g transform="translate(-240, 0)">
      <!-- Forest Green -->
      <circle cx="0" cy="0" r="22" fill="#28361B" stroke="#FDFBE1" stroke-width="1.5" />
      <text x="0" y="36" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#FDFBE1" opacity="0.7">Forest Green</text>
      <!-- Moss Green -->
      <circle cx="120" cy="0" r="22" fill="#4D602B" stroke="#FDFBE1" stroke-width="1.5" />
      <text x="120" y="36" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#FDFBE1" opacity="0.7">Moss Green</text>
      <!-- Avocado Green -->
      <circle cx="240" cy="0" r="22" fill="#B1BF5D" stroke="#FDFBE1" stroke-width="1.5" />
      <text x="240" y="36" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#FDFBE1" opacity="0.7">Avocado Green</text>
      <!-- Beige -->
      <circle cx="360" cy="0" r="22" fill="#FDFBE1" stroke="#28361B" stroke-width="1.5" />
      <text x="360" y="36" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#FDFBE1" opacity="0.7">Beige</text>
      <!-- Rust Brown -->
      <circle cx="480" cy="0" r="22" fill="#BD6D29" stroke="#FDFBE1" stroke-width="1.5" />
      <text x="480" y="36" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#FDFBE1" opacity="0.7">Rust Brown</text>
    </g>
  </g>
</svg>`;

// 2. Hero SVG (1920x1080)
const heroSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="100%" height="100%">
  <defs>
    <linearGradient id="heroBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#28361B" />
      <stop offset="50%" stop-color="#344723" />
      <stop offset="100%" stop-color="#1B2513" />
    </linearGradient>
  </defs>

  <rect width="1920" height="1080" fill="url(#heroBg)" />

  <!-- Center Graphic Group -->
  <g transform="translate(960, 480)">
    <!-- Submark Leaf Icon -->
    <g transform="translate(0, -180)">
      <path d="M -25 0 C -45 -30 -35 -60 0 -80 C 15 -50 5 -20 -25 0 Z" fill="#B1BF5D" />
      <path d="M 0 -10 C 25 -35 45 -40 50 -10 C 35 15 10 10 0 -10 Z" fill="#FDFBE1" opacity="0.9" />
    </g>

    <!-- Brand Header -->
    <text x="0" y="10" text-anchor="middle" font-family="'Montserrat', sans-serif" font-size="68" font-weight="800" letter-spacing="16" fill="#FDFBE1">SYNX STORE</text>
    <text x="0" y="70" text-anchor="middle" font-family="'Montserrat', sans-serif" font-size="20" font-weight="700" letter-spacing="8" fill="#B1BF5D">BUILT TO WORK. PRICED TO TRUST.</text>
    
    <!-- Three Pillars -->
    <g transform="translate(0, 160)">
      <rect x="-360" y="-30" width="720" height="60" rx="30" fill="#4D602B" opacity="0.4" />
      <text x="-220" y="8" text-anchor="middle" font-family="'Montserrat', sans-serif" font-size="16" font-weight="700" letter-spacing="4" fill="#FDFBE1">QUALITY</text>
      <circle cx="-110" cy="2" r="3" fill="#B1BF5D" />
      <text x="0" y="8" text-anchor="middle" font-family="'Montserrat', sans-serif" font-size="16" font-weight="700" letter-spacing="4" fill="#FDFBE1">RELIABILITY</text>
      <circle cx="110" cy="2" r="3" fill="#B1BF5D" />
      <text x="220" y="8" text-anchor="middle" font-family="'Montserrat', sans-serif" font-size="16" font-weight="700" letter-spacing="4" fill="#FDFBE1">SIMPLICITY</text>
    </g>

    <text x="0" y="270" text-anchor="middle" font-family="'Lora', Georgia, serif" font-size="22" font-style="italic" fill="#FDFBE1" opacity="0.8">
      Brand Guidelines &amp; Comprehensive Social Media Strategy
    </text>
  </g>
</svg>`;

fs.writeFileSync(path.join(outDir, 'cover.svg'), coverSvg, 'utf-8');
fs.writeFileSync(path.join(outDir, 'hero.svg'), heroSvg, 'utf-8');
console.log('Generated Synx Store cover.svg and hero.svg');
