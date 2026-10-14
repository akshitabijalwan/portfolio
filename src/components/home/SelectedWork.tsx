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
          title="Case Studies"
          description="Brand identity, campaign analysis, product launches, and social communication."
        />
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div
              key={project.slug}
              className={styles.gridItem}
            >
              <ProjectPreview project={project} index={index} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
