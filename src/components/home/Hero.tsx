import { ArrowDown } from 'lucide-react';
import { siteConfig } from '../../data/site';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero}>
      <svg
        className={styles.thread}
        viewBox="0 0 520 270"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id="hero-thread" x1="12" y1="18" x2="490" y2="242" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8BC7A7" />
            <stop offset="0.52" stopColor="#8CBCEB" />
            <stop offset="1" stopColor="#D9A5C5" />
          </linearGradient>
        </defs>
        <path
          d="M18 211C84 211 75 62 160 62C245 62 213 220 303 220C393 220 378 27 502 27"
          stroke="url(#hero-thread)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="160" cy="62" r="5" fill="#8BC7A7" />
        <circle cx="303" cy="220" r="5" fill="#8CBCEB" />
      </svg>
      <Container>
        <div className={styles.content}>
          <div className={styles.textBlock}>
            <h1 className={styles.headline}>{siteConfig.heroHeadline}</h1>
            <p className={styles.subheadline}>{siteConfig.heroSubheadline}</p>
            <p className={styles.intro}>{siteConfig.heroIntroduction}</p>
            <div className={styles.actions}>
              <Button href="#/about" variant="secondary">
                About
              </Button>
              <Button href="#selected-work">
                <span>Case Studies</span>
                <ArrowDown size={16} />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
