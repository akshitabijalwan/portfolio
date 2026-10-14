import type { CaseStudy } from '../../types/case-study';
import { Container } from '../layout/Container';
import { ResponsiveImage } from '../shared/ResponsiveImage';
import styles from './CaseStudyHeader.module.css';

interface CaseStudyHeaderProps {
  caseStudy: CaseStudy;
}

export function CaseStudyHeader({ caseStudy }: CaseStudyHeaderProps) {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.meta}>
          <span className={styles.category}>{caseStudy.category}</span>
          <span className={styles.separator}>·</span>
          <span className={styles.year}>{caseStudy.year}</span>
          <span className={styles.separator}>·</span>
          <span className={styles.industry}>{caseStudy.industry}</span>
        </div>
        <h1 className={styles.title}>{caseStudy.title}</h1>
        <p className={styles.brand}>{caseStudy.brand}</p>

        <div className={styles.details}>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Role</span>
            <span className={styles.detailValue}>{caseStudy.role}</span>
          </div>
          {caseStudy.duration && (
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Duration</span>
              <span className={styles.detailValue}>{caseStudy.duration}</span>
            </div>
          )}
          {caseStudy.collaborators && (
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Collaborators</span>
              <span className={styles.detailValue}>{caseStudy.collaborators}</span>
            </div>
          )}
        </div>
      </Container>

      {caseStudy.heroImage && (
        <div className={styles.heroImage}>
          <ResponsiveImage
            src={caseStudy.heroImage.src}
            alt={caseStudy.heroImage.alt}
            aspectRatio="landscape"
            lazy={false}
            fullWidth
          />
        </div>
      )}
    </header>
  );
}
