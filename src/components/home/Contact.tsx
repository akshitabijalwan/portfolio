import { Mail, Download } from 'lucide-react';
import { siteConfig } from '../../data/site';
import { Container } from '../layout/Container';
import { assetPath } from '../../utils/assets';
import styles from './Contact.module.css';

function LinkedInIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <Container>
        <div className={styles.content}>
          <span className={styles.label}>Get in Touch</span>
          <h2 className={styles.heading}>Let's connect.</h2>
          <p className={styles.description}>
            Interested in discussing brand strategy, potential collaborations, or opportunities?
            I'd love to hear from you.
          </p>

          <div className={styles.links}>
            <a
              href={`mailto:${siteConfig.email}`}
              className={styles.contactLink}
            >
              <Mail size={20} />
              <span>{siteConfig.email}</span>
            </a>

            <a
              href={siteConfig.linkedInUrl}
              className={styles.contactLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon size={20} />
              <span>LinkedIn Profile</span>
            </a>

            {siteConfig.resumeAvailable && siteConfig.resumePath && (
              <a
                href={assetPath(siteConfig.resumePath)}
                className={styles.contactLink}
                download
              >
                <Download size={20} />
                <span>Download Résumé</span>
              </a>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
