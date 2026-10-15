import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { ProjectMeta } from '../../types/project';
import { Container } from '../layout/Container';
import styles from './ProjectNavigation.module.css';

interface ProjectNavigationProps {
  previousProject?: ProjectMeta;
  nextProject?: ProjectMeta;
  parentProject?: ProjectMeta;
}

export function ProjectNavigation({ previousProject, nextProject, parentProject }: ProjectNavigationProps) {
  if (parentProject) {
    return (
      <nav className={styles.nav} aria-label="Project navigation">
        <Container>
          <div className={styles.inner}>
            <a href={`#/projects/${parentProject.slug}`} className={styles.link}>
              <ArrowLeft size={16} />
              <div className={styles.linkContent}>
                <span className={styles.direction}>Back to case study</span>
                <span className={styles.projectTitle}>{parentProject.title}</span>
              </div>
            </a>
          </div>
        </Container>
      </nav>
    );
  }

  if (!previousProject && !nextProject) return null;

  return (
    <nav className={styles.nav} aria-label="Project navigation">
      <Container>
        <div className={styles.inner}>
          {previousProject ? (
            <a
              href={`#/projects/${previousProject.slug}`}
              className={styles.link}
            >
              <ArrowLeft size={16} />
              <div className={styles.linkContent}>
                <span className={styles.direction}>Previous Project</span>
                <span className={styles.projectTitle}>{previousProject.title}</span>
              </div>
            </a>
          ) : (
            <div />
          )}

          {nextProject ? (
            <a
              href={`#/projects/${nextProject.slug}`}
              className={`${styles.link} ${styles.linkRight}`}
            >
              <div className={styles.linkContent}>
                <span className={styles.direction}>Next Project</span>
                <span className={styles.projectTitle}>{nextProject.title}</span>
              </div>
              <ArrowRight size={16} />
            </a>
          ) : (
            <div />
          )}
        </div>
      </Container>
    </nav>
  );
}
