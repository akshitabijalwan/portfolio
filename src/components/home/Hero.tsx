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
            <h1 className={styles.headline}>{siteConfig.heroHeadline}</h1>
            <p className={styles.subheadline}>{siteConfig.heroSubheadline}</p>
            <ul className={styles.points}>
              {siteConfig.heroPoints.map((point) => (
                <li className={styles.point} key={point.label}>
                  <span className={styles.pointLabel}>{point.label}</span>
                  <span>{point.body}</span>
                </li>
              ))}
            </ul>
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
