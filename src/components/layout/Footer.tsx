import { ArrowUp } from 'lucide-react';
import { siteConfig } from '../../data/site';
import { Container } from './Container';
import styles from './Footer.module.css';

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.left}>
            <span className={styles.name}>{siteConfig.candidateName}</span>
            <span className={styles.copyright}>© {CURRENT_YEAR}</span>
          </div>

          <div className={styles.links}>
            <a
              href={`mailto:${siteConfig.email}`}
              className={styles.footerLink}
            >
              Email
            </a>
            <a
              href={siteConfig.linkedInUrl}
              className={styles.footerLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <button
              className={styles.backToTop}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
              <span>Top</span>
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
