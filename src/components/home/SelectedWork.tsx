import { getProjects } from '../../data/projects';
import { SectionHeading } from '../ui/SectionHeading';
import { Container } from '../layout/Container';
import { ProjectPreview } from './ProjectPreview';
import styles from './SelectedWork.module.css';

export function SelectedWork() {
  const projects = getProjects(true);

  if (projects.length === 0) return null;

  return (
    <section id="selected-work" className={styles.section}>
      <Container>
        <SectionHeading
          label="Portfolio"
          title="Selected Work"
          description="A selection of brand strategy, campaign, and go-to-market projects."
        />
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div
              key={project.slug}
              className={`${styles.gridItem} ${index === 0 ? styles.gridItemLarge : ''}`}
            >
              <ProjectPreview project={project} featured={index === 0} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
