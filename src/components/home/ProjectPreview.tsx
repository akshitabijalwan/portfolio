import type { ProjectMeta } from '../../types/project';
import { ResponsiveImage } from '../shared/ResponsiveImage';
import styles from './ProjectPreview.module.css';

interface ProjectPreviewProps {
  project: ProjectMeta;
  featured?: boolean;
}

export function ProjectPreview({ project, featured = false }: ProjectPreviewProps) {
  return (
    <article className={`${styles.preview} ${featured ? styles.featured : ''}`}>
      <a
        href={`#/projects/${project.slug}`}
        className={styles.link}
        aria-label={`View case study: ${project.title}`}
      >
        <div className={styles.imageContainer}>
          <ResponsiveImage
            src={project.coverImage}
            alt={project.coverImageAlt}
            aspectRatio={project.coverAspectRatio || 'landscape'}
            lazy
            className={styles.image}
          />
        </div>
        <div className={styles.info}>
          <div className={styles.meta}>
            <span className={styles.category}>{project.category}</span>
            <span className={styles.separator}>·</span>
            <span className={styles.year}>{project.year}</span>
          </div>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.brand}>{project.brand}</p>
          <p className={styles.summary}>{project.summary}</p>
        </div>
      </a>
    </article>
  );
}
