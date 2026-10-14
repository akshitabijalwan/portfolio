import { useEffect } from 'react';
import { siteConfig } from '../data/site';
import { Container } from '../components/layout/Container';
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
          <p className={styles.body}>{siteConfig.shortBio}</p>
        </header>

        <div className={styles.content}>
          <div className={styles.mainContent}>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Experience</h2>
              <div className={styles.recordList}>
                {siteConfig.experience.map((item) => (
                  <article className={styles.record} key={`${item.organization}-${item.role}`}>
                    <div className={styles.recordHeading}>
                      <div>
                        <h3 className={styles.recordTitle}>{item.role}</h3>
                        {item.organization && <p className={styles.recordMeta}>{item.organization}</p>}
                      </div>
                      <span className={styles.recordDate}>{item.dates}</span>
                    </div>
                    <ul className={styles.detailList}>
                      {item.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Selected Project Work</h2>
              <div className={`${styles.recordList} ${styles.projectList}`}>
                {siteConfig.selectedProjects.map((project) => (
                  <article className={styles.record} key={project.name}>
                    <div className={styles.recordHeading}>
                      <div>
                        <h3 className={styles.recordTitle}>{project.name}</h3>
                        <p className={styles.recordMeta}>{project.focus}</p>
                      </div>
                      {project.dates && <span className={styles.recordDate}>{project.dates}</span>}
                    </div>
                    <p className={styles.recordDetail}>{project.detail}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Education</h2>
              <div className={styles.recordList}>
                {siteConfig.education.map((item) => (
                  <article className={styles.record} key={item.institution}>
                    <div className={styles.recordHeading}>
                      <div>
                        <h3 className={styles.recordTitle}>{item.qualification}</h3>
                        <p className={styles.recordMeta}>{item.institution}</p>
                      </div>
                      <span className={styles.recordDate}>{item.dates}</span>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Internships</h2>
              <div className={styles.recordList}>
                {siteConfig.internships.map((item) => (
                  <article className={styles.record} key={item.organization}>
                    <div className={styles.recordHeading}>
                      <div>
                        <h3 className={styles.recordTitle}>{item.organization}</h3>
                        <p className={styles.recordMeta}>{item.detail}</p>
                      </div>
                      <span className={styles.recordDate}>{item.dates}</span>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Training</h2>
              <ul className={styles.expertiseList}>
                {siteConfig.courses.map((course) => (
                  <li key={course} className={styles.expertiseItem}>{course}</li>
                ))}
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Areas of Expertise</h2>
              <ul className={styles.expertiseList}>
                {siteConfig.capabilities.map((capability) => (
                  <li key={capability} className={styles.expertiseItem}>{capability}</li>
                ))}
              </ul>
            </section>
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.sidebarSection}>
              <h3 className={styles.sidebarTitle}>Contact</h3>
              <div className={styles.sidebarLinks}>
                <a href={`mailto:${siteConfig.email}`} className={styles.sidebarLink}>{siteConfig.email}</a>
                <a href={`tel:${siteConfig.phone}`} className={styles.sidebarLink}>{siteConfig.phone}</a>
                <span className={styles.sidebarLink}>{siteConfig.location}</span>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </main>
  );
}
