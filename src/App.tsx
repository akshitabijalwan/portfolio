import { useEffect } from 'react';
import { useHashRouter } from './hooks/useHashRouter';
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { getCaseStudy } from './data/case-studies';
import { siteConfig } from './data/site';
import './styles/global.css';

export default function App() {
  const route = useHashRouter();

  useEffect(() => {
    switch (route.path) {
      case '/about':
        document.title = `About — ${siteConfig.candidateName}`;
        break;
      case '/projects/:slug': {
        const slug = route.params.slug;
        const caseStudy = getCaseStudy(slug);
        document.title = `${caseStudy?.brand ?? 'Project'} — ${siteConfig.candidateName}`;
        break;
      }
      default:
        document.title = `${siteConfig.candidateName} — ${siteConfig.professionalTitle}`;
        break;
    }
  }, [route]);

  const renderPage = () => {
    switch (route.path) {
      case '/about':
        return <AboutPage />;
      case '/projects/:slug':
        return <CaseStudyPage slug={route.params.slug} />;
      default:
        return <HomePage />;
    }
  };

  return (
    <>
      <Navigation />
      {renderPage()}
      <Footer />
    </>
  );
}
