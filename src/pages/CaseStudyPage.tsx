import { useEffect } from 'react';
import { getCaseStudy } from '../data/case-studies';
import { getProjects } from '../data/projects';
import { CaseStudyHeader } from '../components/case-study/CaseStudyHeader';
import { CaseStudySections } from '../components/case-study/CaseStudySections';
import { ProjectNavigation } from '../components/case-study/ProjectNavigation';
import { Container } from '../components/layout/Container';
import styles from './CaseStudyPage.module.css';

interface CaseStudyPageProps {
  slug: string;
}

export function CaseStudyPage({ slug }: CaseStudyPageProps) {
  const caseStudy = getCaseStudy(slug);
  const allProjects = getProjects();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!caseStudy) {
    return (
      <main>
        <Container>
          <div className={styles.notFound}>
            <h1>Project not found</h1>
            <p>The project you're looking for doesn't exist.</p>
            <a href="#/" className={styles.backLink}>← Back to home</a>
          </div>
        </Container>
      </main>
    );
  }

  // Find prev/next projects
  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const previousProject = currentIndex > 0 ? allProjects[currentIndex - 1] : undefined;
  const nextProject =
    currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : undefined;

  return (
    <main>
      <CaseStudyHeader caseStudy={caseStudy} />
      <CaseStudySections
        overview={caseStudy.overview}
        challenge={caseStudy.challenge}
        objectives={caseStudy.objectives}
        responsibilities={caseStudy.responsibilities}
        sections={caseStudy.sections}
      />
      <ProjectNavigation
        previousProject={previousProject}
        nextProject={nextProject}
      />
    </main>
  );
}
