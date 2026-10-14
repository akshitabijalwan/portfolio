import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { ProjectMeta } from '../../types/project';
import { Container } from '../layout/Container';
import styles from './ProjectNavigation.module.css';

interface ProjectNavigationProps {
  previousProject?: ProjectMeta;
  nextProject?: ProjectMeta;
}

export function ProjectNavigation({ previousProject, nextProject }: ProjectNavigationProps) {
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
