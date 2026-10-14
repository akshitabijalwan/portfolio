import { ArrowDown } from 'lucide-react';
import { siteConfig } from '../../data/site';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.content}>
          <div className={styles.textBlock}>
            <p className={styles.label}>{siteConfig.professionalTitle}</p>
            <h1 className={styles.headline}>{siteConfig.heroHeadline}</h1>
            <p className={styles.subheadline}>{siteConfig.heroSubheadline}</p>
            <p className={styles.intro}>{siteConfig.heroIntroduction}</p>
            <div className={styles.actions}>
              <Button href="#selected-work">
                <span>Selected Work</span>
                <ArrowDown size={16} />
              </Button>
              <Button href="#/about" variant="secondary">
                About
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
