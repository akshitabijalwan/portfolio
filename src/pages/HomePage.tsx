import { Hero } from '../components/home/Hero';
import { SelectedWork } from '../components/home/SelectedWork';
import { AboutPreview } from '../components/home/AboutPreview';
import { Capabilities } from '../components/home/Capabilities';
import { Contact } from '../components/home/Contact';

export function HomePage() {
  return (
    <main>
      <Hero />
      <SelectedWork />
      <AboutPreview />
      <Capabilities />
      <Contact />
    </main>
  );
}
