import type { ProjectMeta } from '../../types/project';
import { ResponsiveImage } from '../shared/ResponsiveImage';
import styles from './ProjectPreview.module.css';

interface ProjectPreviewProps {
  project: ProjectMeta;
  index: number;
}

export function ProjectPreview({ project, index }: ProjectPreviewProps) {
  const toneClass = index % 3 === 1 ? styles.sage : index % 3 === 2 ? styles.sand : '';

  return (
    <article className={`${styles.preview} ${toneClass}`}>
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
          <div className={styles.meta}>
            <span className={styles.category}>{project.category}</span>
            {project.year && <span className={styles.year}>{project.year}</span>}
          </div>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.brand}>{project.brand}</p>
          <p className={styles.summary}>{project.summary}</p>
        </div>
      </a>
    </article>
  );
}
