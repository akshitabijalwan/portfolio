import { useEffect } from 'react';
import { useHashRouter } from './hooks/useHashRouter';
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CaseStudyPage } from './pages/CaseStudyPage';
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
        const title = slug
          .split('-')
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(' ');
        document.title = `${title} — ${siteConfig.candidateName}`;
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
