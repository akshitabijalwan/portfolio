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
        <div className={styles.meta} aria-label="Project details">
          {[caseStudy.category, caseStudy.year, caseStudy.industry].filter(Boolean).map((item) => (
            <span className={styles.metaItem} key={item}>{item}</span>
          ))}
        </div>
        <p className={styles.brand}>{caseStudy.brand}</p>
        <h1 className={styles.title}>{caseStudy.title}</h1>

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
            aspectRatio="auto"
            objectFit="contain"
            lazy={false}
            className={styles.heroVisual}
          />
        </div>
      )}
    </header>
  );
}
