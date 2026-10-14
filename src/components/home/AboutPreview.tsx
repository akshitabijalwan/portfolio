import { siteConfig } from '../../data/site';
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import styles from './AboutPreview.module.css';

export function AboutPreview() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.layout}>
          <div className={styles.content}>
            <SectionHeading
              label="About"
              title="Professional Background"
            />
            <p className={styles.bio}>{siteConfig.shortBio}</p>
            <Button href="#/about" variant="text">
              Learn more
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
