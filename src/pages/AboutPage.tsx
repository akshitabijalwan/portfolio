import { useEffect } from 'react';
import { siteConfig } from '../data/site';
import { Container } from '../components/layout/Container';
import { Button } from '../components/ui/Button';
import { assetPath } from '../utils/assets';
import styles from './AboutPage.module.css';

export function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={styles.page}>
      <Container>
        <header className={styles.header}>
          <span className={styles.label}>About</span>
          <h1 className={styles.title}>{siteConfig.candidateName}</h1>
          <p className={styles.subtitle}>{siteConfig.professionalTitle}</p>
        </header>

        <div className={styles.content}>
          <div className={styles.mainContent}>
            {/* Professional introduction */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Professional Background</h2>
              <p className={styles.body}>{siteConfig.shortBio}</p>
              <p className={styles.body}>
                {/* [PLACEHOLDER] Add more detailed professional background here */}
                With experience spanning brand positioning, campaign strategy,
                and go-to-market planning, I take a structured yet creative approach
                to building brands that resonate with audiences and deliver
                measurable business outcomes.
              </p>
            </section>

            {/* Approach */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Approach</h2>
              <p className={styles.body}>
                {/* [PLACEHOLDER] Replace with the candidate's actual philosophy */}
                I believe the best brand work starts with deep understanding —
                of the consumer, the competitive landscape, and the business
                objectives. From there, strategy informs creative execution,
                and measurement ensures accountability.
              </p>
            </section>

            {/* Capabilities */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Areas of Expertise</h2>
              <ul className={styles.expertiseList}>
                {siteConfig.capabilities.map((cap) => (
                  <li key={cap} className={styles.expertiseItem}>
                    {cap}
                  </li>
                ))}
              </ul>
            </section>

            {/* Experience highlights placeholder */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Experience</h2>
              <p className={styles.placeholder}>
                [PLACEHOLDER] Add professional experience highlights here.
                Include roles, organisations, and key contributions.
                Do not invent employment history.
              </p>
            </section>

            {/* Education placeholder */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Education</h2>
              <p className={styles.placeholder}>
                [PLACEHOLDER] Add education and relevant certifications here.
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.sidebarSection}>
              <h3 className={styles.sidebarTitle}>Contact</h3>
              <div className={styles.sidebarLinks}>
                <a href={`mailto:${siteConfig.email}`} className={styles.sidebarLink}>
                  {siteConfig.email}
                </a>
                <a
                  href={siteConfig.linkedInUrl}
                  className={styles.sidebarLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {siteConfig.resumeAvailable && siteConfig.resumePath && (
              <div className={styles.sidebarSection}>
                <Button
                  href={assetPath(siteConfig.resumePath)}
                  variant="secondary"
                  external
                >
                  Download Résumé
                </Button>
              </div>
            )}
          </aside>
        </div>
      </Container>
    </main>
  );
}
