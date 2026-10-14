import { Mail, Phone, Download } from 'lucide-react';
import { siteConfig } from '../../data/site';
import { Container } from '../layout/Container';
import { assetPath } from '../../utils/assets';
import styles from './Contact.module.css';

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

            <a href={`tel:${siteConfig.phone}`} className={styles.contactLink}>
              <Phone size={20} />
              <span>{siteConfig.phone}</span>
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
