import type { ProjectMeta } from '../../types/project';
import { ResponsiveImage } from '../shared/ResponsiveImage';
import styles from './ProjectPreview.module.css';

interface ProjectPreviewProps {
  project: ProjectMeta;
}

export function ProjectPreview({ project }: ProjectPreviewProps) {
  return (
    <article className={styles.preview}>
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
            objectFit={project.coverAspectRatio === 'auto' ? 'contain' : 'cover'}
            lazy
            className={styles.image}
          />
        </div>
        <div className={styles.info}>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.brand}>{project.brand}</p>
          <p className={styles.summary}>{project.summary}</p>
        </div>
      </a>
    </article>
  );
}
